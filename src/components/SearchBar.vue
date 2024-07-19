<template>
    <div class="searchbar-container" v-if="userLocation">
        
        <input type="text" placeholder="Buscar lugares..." v-model="searchTerm"/>
        
        <SearchResults />

    </div>
</template>

<script lang="ts" setup>
import { ref,computed } from 'vue';
import { useGeolocation } from '@/composables';
import SearchResults from '@/components/search-results/SearchResults.vue';

let { userLocation,isLoadingPlaces,searchPlacesByTerm } = useGeolocation();
const debouncedTimeout = ref();
const debouncedValue = ref('');

const searchTerm = computed({
  get(){ return debouncedValue.value; },
  set(val: string){
    isLoadingPlaces = true;
    if(debouncedTimeout.value) clearTimeout(debouncedTimeout.value);

    debouncedTimeout.value = setTimeout(() => {
      debouncedValue.value = val;
      searchPlacesByTerm(val);
    },2000)

  },
});

</script>

<style scoped>
.searchbar-container{
    position: fixed;
    top: 10px;
    left: 50px;
    background-color: white;
    z-index: 999;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);    
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
    gap: 0.25rem;
    min-width: 200px;
}

img{
    position: absolute;
    width: 20px;
    height: 20px;
    top: 5px;
    right: 5px;
    z-index: 999;
}

input{
    padding: 10px 15px;
    border-radius: 5px;
    position: relative;
    min-width: 200px;
}



</style>