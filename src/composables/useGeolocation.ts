import { ref } from 'vue';

export const useGeolocation = () => {
  const userLocation = ref<[number, number] | null>(null);

  const getInitialLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        userLocation.value = [coords.latitude, coords.longitude];
      },
      (err) => {
        console.error(err);
        throw new Error('No geolocation available');
      }
    );
  };

  return {
    userLocation,
    getInitialLocation,
  };
};
