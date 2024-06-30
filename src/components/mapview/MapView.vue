<template>

    <div 
        class="loading-map"
        v-if="!userLocation"
    >
        <div class="text-center">
            <h3>Espere por favor</h3>
            <span>localizando...</span>
        </div>
    </div>

    <div v-show="userLocation" class="map-container" ref="mapElement"/>

  </template>
  
<script lang="ts" setup>
import { ref,onMounted } from 'vue';
import { usePlacesStoreComposable } from '@/composables/usePlacesStore';

const mapElement = ref<HTMLDivElement>();
const { isLoading,userLocation } = usePlacesStoreComposable();

onMounted(() => {
console.log(mapElement.value);

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
    background-color: red;
    top: 0;
    left: 0;
}

</style>
  