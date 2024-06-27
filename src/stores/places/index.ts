import { defineStore } from 'pinia';
import type { Place } from './state';

export const usePlacesStore = defineStore('places', {
  state: () => ({
    places: [] as Place[],
  }),
  
  getters: {
    isLoading: (state) => state.places.some(place => place.isLoading),
    isUserLocationSet: (state) => state.places.some(place => place.userLocation !== undefined),
  },

  actions: {
    
    setLoading(index: number, loading: boolean) {
      if (this.places[index]) {
        this.places[index].isLoading = loading;
      }
    },

    setUserLocation(index: number, location: [number, number]) {
      if (this.places[index]) {
        this.places[index].userLocation = location;
      }
    },

    addPlace(place: Place) {
      this.places.push(place);
    },

    removePlace(index: number) {
      this.places.splice(index, 1);
    },
  },
});
