import { computed } from 'vue';
import { usePlacesStore } from '@/stores/places';

export const usePlacesStoreComposable = () => {
  const placesStore = usePlacesStore();

  return {
    // State
    isLoading: computed(() => placesStore.isLoading),
    isLoadingPlaces: computed(() => placesStore.isLoadingPlaces),
    userLocation: computed(() => placesStore.userLocation),
    places: computed(() => placesStore.places),

    // Getters
    isUserLocationSet: computed(() => placesStore.isUserLocationSet),
    
    // Actions
    setIsLoadingPlaces: (value: boolean) => placesStore.setIsLoadingPlaces(value),
    searchPlacesByTerm: (query: string = '') => placesStore.searchPlacesByTerm(query),
    getInitialLocation: () => placesStore.getInitialLocation(),
  };
};