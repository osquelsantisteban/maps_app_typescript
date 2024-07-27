import { defineStore } from 'pinia';
import type { Place, PlacesState } from './state';
import { searchApi } from '@/apis';
import type { Feature,PlacesResponse } from '@/interfaces/places';

export const usePlacesStore = defineStore('places', {
  state: (): PlacesState => ({
    userLocation: null,
    isLoading: false,
    isLoadingPlaces: false,
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

    setIsLoadingPlaces(val: boolean) {
      this.isLoadingPlaces = val;
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

      if(term.length === 0) return [];

      if(!this.userLocation) throw new Error('No hay ubicación del usuario');

      this.isLoadingPlaces = true;

      try {

        const resp = await searchApi.get<PlacesResponse>('', {
            params: {
              q: term,
              // viewbox: `${this.userLocation[1] - 0.1},${this.userLocation[0] + 0.1},${this.userLocation[1] + 0.1},${this.userLocation[0] - 0.1}`,
              // bounded: 1,
            }
        });

        this.setPlaces(resp.data);
        return resp.data;

      } catch (error) {
        console.error(error);
      } finally {
        this.isLoadingPlaces = false;
        
      }
    },
    
  }
});