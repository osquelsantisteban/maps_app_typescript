import { useMapStore } from '@/stores/map';
import { usePlacesStoreComposable } from '@/composables';


export const useHandleMap = () => {

  const mapStore = useMapStore();
  const { userLocation } = usePlacesStoreComposable();

  const moveMyLocation = () => {
    if (mapStore.map && userLocation.value) {
        mapStore.map.flyTo(userLocation.value, 6, {
            animate: true,
            duration: 1.5,
        });
    }
  }

  const moveToLocation = (location) => {
    
    if (mapStore.map && location) {
        mapStore.map.flyTo(location, 13, {
            animate: true,
            duration: 1.5,
        });
    }
  }


  return {
    moveMyLocation,
    moveToLocation
  };
};
