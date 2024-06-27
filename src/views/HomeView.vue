<template>
  <div>
    <ul>
      <li v-for="(place, index) in places" :key="index">
        <p v-if="place.isLoading">Loading...</p>
        <p v-else-if="place.userLocation">Location: {{ place.userLocation }}</p>
        <p v-else>User location not set</p>
        <button @click="removePlaceHandle(index)">Remove Place</button>
      </li>
    </ul>
    <button @click="addPlaceHandle">Add New Place</button>
  </div>
</template>

<script setup lang="ts">
import { usePlacesStore } from '@/stores/places';

const placesStore = usePlacesStore();
const { places, addPlace, removePlace } = placesStore;

function addPlaceHandle() {
  addPlace({ isLoading: false, userLocation: [51.5074, -0.1278] }); // Añadir una nueva ubicación estática
}

function removePlaceHandle(index: number) {
  removePlace(index);
}
</script>
