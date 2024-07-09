import { useMapStore } from '@/stores/map';
import { useGeolocation } from '@/composables';


export const useHandleMap = () => {

  const mapStore = useMapStore();
  const { userLocation } = useGeolocation();

  const moveMyLocation = () => {
    if (mapStore.map && userLocation.value) {
        mapStore.map.flyTo(userLocation.value, 6, {
            animate: true,
            duration: 1.5,
        });
    }
}


  return {
    moveMyLocation
  };
};
