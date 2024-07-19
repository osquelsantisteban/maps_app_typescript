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
    top: 30px;
    right: 30px;
    background-color: rgba(10,82,197,0.8);
    color: white;
    padding: 0.5rem 0.75rem;
    border-radius: 50%;
    border: 0px;
    -moz-box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 15px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 15px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 15px;
    cursor: pointer;
}


@keyframes buttonHover {
  0%   {    transform: scale(1);  }
  5%   {    transform: scale(0.9);  }
  25%   {    transform: scale(1.05);  }
  100%   {    transform: scale(1.2);  }
  
}

button:hover{
    animation-name: buttonHover;
    animation-duration: 0.5s;
    transform: scale(1.2);
}

img{
    width: 1.5rem;
    height: 1.75rem;
}


</style>