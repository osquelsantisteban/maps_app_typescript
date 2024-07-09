<template>
    <button title="Ir a mi ubicación" @click="handleMoveMyLocation" v-show="userLocation">
        <img src="@/assets/location.svg" alt="">        
    </button>
</template>

<script lang="ts" setup>
import { useHandleMap,useGeolocation } from '@/composables';

const { moveMyLocation, } = useHandleMap();
const { userLocation } = useGeolocation();

const handleMoveMyLocation = () => {
    moveMyLocation();
}

</script>

<style scoped>
button{
    position: fixed;
    top: 90px;
    left: 5px;
    background-color: rgba(10,82,197,0.8);
    color: white;
    padding: 0.5rem 0.75rem;
    border-radius: 50%;
    border: 0px;
    -moz-box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 15px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 15px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 15px;
}

img{
    width: 1.5rem;
    height: 1.75rem;
}
</style>