import { defineStore } from 'pinia';
import * as L from 'leaflet';
import { state, type MapState } from './state';

export const useMapStore = defineStore('map', {

  state: (): MapState => state,

  getters: {
    isMapReady: (state): boolean => !!state.map,
    getDistance: (state): number => state.distance,
    getDuration: (state): number => state.duration,
  },

  actions: {
    setMap(map: L.Map) {
      this.map = map;
    },
    setMarkers(markers: L.Marker[]) {
      this.markers = markers;
    },
    setDistance(distance: number) {
      this.distance = distance;
    },
    setDuration(duration: number) {
      this.duration = duration;
    },
    setLoadingRoute(isLoading: boolean) {
      this.isLoadingRoute = isLoading;
    },

    addMarker(marker: L.Marker) {
      this.markers.push(marker);
      if (this.map) {
        marker.addTo(this.map);
      }
    },

    removeMarkers() {
      if (this.map) {
        this.markers.forEach(marker => this.map?.removeLayer(marker));
      }
      this.markers = [];
    },
    async getRouteBetweenPoints(start: [number, number], end: [number, number]) {
      if (!this.map) throw new Error('Map is not initialized');

      this.setLoadingRoute(true);

      // Aquí deberías reemplazar por la lógica para obtener la ruta entre puntos usando una API que funcione con Leaflet.
      // Por ejemplo, podrías usar la API de OpenRouteService en lugar de Mapbox.

      try {
        const response = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=YOUR_API_KEY&start=${start.join(',')}&end=${end.join(',')}`);
        const data = await response.json();

        const { distance, duration, geometry } = data.features[0].properties.segments[0];

        this.setDistance(distance);
        this.setDuration(duration);

        const coordinates = geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]] as [number, number]);
        const polyline = L.polyline(coordinates, { color: 'blue' }).addTo(this.map);

        this.markers.forEach(marker => this.map?.removeLayer(marker));
        this.map?.fitBounds(polyline.getBounds());
      } catch (error) {
        console.error(error);
      } finally {
        this.setLoadingRoute(false);
      }
    },
  },
});