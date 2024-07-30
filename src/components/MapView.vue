<template>

    <div class="loading-map" v-if="!userLocation">
      <div class="text-center">
        <h3>Espere por favor</h3>
        <span>localizando...</span>
      </div>
    </div>
  
    <div v-show="userLocation" class="map-container" ref="mapElement" id="map"></div>

</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { usePlacesStoreComposable, useMapLeaflet } from '@/composables';
import 'leaflet/dist/leaflet.css';

const mapElement = ref<HTMLDivElement | null>(null);
const { userLocation, getInitialLocation } = usePlacesStoreComposable();
const { renderMap } = useMapLeaflet(mapElement);


onMounted(() => {
  getInitialLocation();
});

watch(userLocation, (location) => {
  if (location && location.length === 2) {    
    renderMap([location[0], location[1]]);
  }
});

</script>

<style scoped>

.loading-map{
    color: white;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
}

.map-container{
    position: fixed;
    width: 100vw;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    background-color: white;
    top: 0;
    left: 0;
}

</style>
  