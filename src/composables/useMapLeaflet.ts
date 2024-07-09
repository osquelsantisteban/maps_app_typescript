import { ref,computed, type Ref } from 'vue';
import * as L from 'leaflet';
import { useMapStore } from '@/stores/map';

export const useMapLeaflet = (mapElement: Ref<HTMLDivElement | null>) => {
  const map = ref<L.Map | null>(null);
  const zoom = 6;
  const maxZoom = 19;
  const mapStore = useMapStore();

  const renderMap = (userLocation: [number, number]) => {
    
    if (!mapElement.value) return;
    
    const latlng: [number, number] = userLocation;
    
    if (!map.value) {
      map.value = L.map(mapElement.value).setView(latlng, zoom);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom,
        attribution: '',
      }).addTo(map.value!);

      mapStore.setMap(map.value);
      
    } else {
      map.value.setView(latlng, zoom);
    }
    
    L.marker(latlng).addTo(map.value!);
    mapStore.setMap(map.value);

    setTimeout(() => {
      map.value?.invalidateSize();
    }, 500);
  };

  return {    
    renderMap,
  };
};
