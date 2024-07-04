import { computed, onMounted } from 'vue';
import { usePlacesStore } from '@/stores/places';

export const useGeolocation = () => {
  const placesStore = usePlacesStore();

  onMounted(() => {
    if (!placesStore.isUserLocationSet) {
      placesStore.getInitialLocation();
    }
  });

  return {
    // State
    isLoading: computed(() => placesStore.isLoading),
    userLocation: computed(() => placesStore.userLocation),
    places: computed(() => placesStore.places),

    // Getters
    isUserLocationSet: computed(() => placesStore.isUserLocationSet),

    // Actions
    searchPlacesByTerm: (query: string = '') => placesStore.searchPlacesByTerm(query),
    getInitialLocation: () => placesStore.getInitialLocation(),
  };
};
