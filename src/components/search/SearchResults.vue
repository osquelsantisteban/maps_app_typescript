<template>

  <div v-if="isLoadingPlaces" class="">
    <h6>Cargando...</h6>
  </div>

  <ul v-else-if="places.length > 0" class="custom-list-group">
    
    
    <li
      v-for="place in places" 
      :key="place.osm_id"
      @click="onPlaceClicked(place)"
      :class="{'active': place.osm_id === activePlace}"
      class="custom-list-group-item custom-list-group-item-action">
      <h5>{{ place.name }}</h5>
      <p>{{ place.display_name }}</p>
      <div class="custom-align-right">
        <button
          :class="( place.osm_id === activePlace) ? 'custom-btn-outline-secundary' : 'custom-btn-outline-primary'" 
          class="custom-btn custom-btn-sm">
            Direcciones
        </button>
      </div>
    </li>

  </ul>

</template>

<script lang="ts" setup>

import { ref,watch } from 'vue';
import { useHandleMap,usePlacesStoreComposable } from '@/composables';
import type { PlacesResponse } from '@/interfaces/places';

const { isLoadingPlaces,places } = usePlacesStoreComposable();
const activePlace = ref();
const { moveToLocation } = useHandleMap();

const onPlaceClicked = (place: PlacesResponse) => {
  activePlace.value = place.osm_id
  moveToLocation([place.lat,place.lon])
}

watch(places,(newPlaces) => {
  
});

</script>

<style scoped>

ul{
    width: 100%;
}

li{
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
 }

ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.custom-list-group {
  display: block;
  margin-top: 0.5rem;
  overflow-y: scroll;
  width: 280px;
  /* min-height: 50dvh; */
  max-height: 75dvh;
  @media (min-width: 800px) {
    width: 500px;
  }
}

.custom-list-group-item {
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #dee2e6;
  text-decoration: none;
}

.custom-list-group-item:last-child {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.custom-list-group-item-action {
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}

.custom-list-group-item-action:hover,
.custom-list-group-item-action:focus {
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}

.custom-list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
  border-color: #dae0e5;
}

/* Active state */
.custom-list-group-item.active {
  background-color: rgba(10, 82, 197, 0.8);
  color: #fff;
  border-color: rgba(10, 82, 197, 0.8);
}

h5{
  font-size: 20px;
  margin: 5px;
}

p{
  margin: 5px;
  margin-bottom: 10px;
  font-size: 12px;
}

/* Custom alignment */
.custom-align-right {
  text-align: right;
}

/* Custom button styles */
.custom-btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

/* Outline primary button */
.custom-btn-outline-primary {
  color: #0d6efd;
  background-color: transparent;
  background-image: none;
  border-color: #0d6efd;
}

.custom-btn-outline-secundary {
  color: #0d6efd;
  background-color: #fff;
  background-image: none;
  border-color: #fff;
}
.custom-btn-outline-secundary:hover {
  color: #fff;
  background-color: #0d6efd;
  background-image: none;
  border-color: #fff;
}

.custom-btn-outline-primary:hover {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.custom-btn-outline-primary:focus, .custom-btn-outline-primary.focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}

.custom-btn-outline-primary:active, .custom-btn-outline-primary.active,
.custom-btn-outline-primary:active:focus, .custom-btn-outline-primary.active:focus {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}

.custom-btn-outline-primary:disabled, .custom-btn-outline-primary.disabled {
  color: #0d6efd;
  background-color: transparent;
}

/* Small button */
.custom-btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #dae0e5;
  border-radius: 15px;
}

::-webkit-scrollbar-thumb {
  background: gray;
  border: solid 7px #939ca4;
  border-radius: 15px;
}

::-webkit-scrollbar-thumb:hover {
  background: gray;
}


</style>