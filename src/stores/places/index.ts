import { defineStore } from 'pinia';
import type { Place, PlacesState } from './state';

export const usePlacesStore = defineStore('places', {
  state: (): PlacesState => ({
    userLocation: null,
    isLoading: false,
    places: [],
  }),

  getters: {
    isUserLocationSet: (state): boolean => state.userLocation !== null,
    getPlaces: (state): Place[] => state.places,
  },

  actions: {
    setLatLng(lat: number, lng: number) {
      this.userLocation = [lat, lng];
    },

    setLoading(val: boolean) {
      this.isLoading = val;
    },

    setPlaces(places: Place[]) {
      this.places = places;
    },
    
    getInitialLocation() {
      
      this.setLoading(true);      
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.setLatLng(coords.latitude, coords.longitude);
          this.setLoading(false);
        },
        (err) => {
          console.error(err);
          this.setLoading(false);
          throw new Error('No geolocation available');
        }
      );
    },

    async searchPlacesByTerm(term: string) {
      this.setLoading(true);
      try {
        // Simulación de una llamada a la API
        const places = await new Promise<Place[]>((resolve) => {
          setTimeout(() => resolve([
            { name: `${term} Place 1`, location: [40.7128, -74.0060] },
            { name: `${term} Place 2`, location: [34.0522, -118.2437] }
          ]), 1000);
        });
        this.setPlaces(places);
      } catch (error) {
        console.error(error);
      } finally {
        this.setLoading(false);
      }
    },
  }
});