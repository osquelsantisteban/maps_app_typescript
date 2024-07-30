<template>
    <button title="Ir a mi ubicación" @click="handleMoveMyLocation" v-show="userLocation">
        <img src="@/assets/location.svg" alt="">        
    </button>
</template>

<script lang="ts" setup>
import { useHandleMap,usePlacesStoreComposable } from '@/composables';

const { moveMyLocation, } = useHandleMap();
const { userLocation } = usePlacesStoreComposable();

const handleMoveMyLocation = () => {
    moveMyLocation();
}

</script>

<style scoped>
button{
    position: fixed;
    top: 80px;
    left: 6px;
    background-color: rgba(10,82,197,0.8);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 50%;
    border: 0px;
    -moz-box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 15px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 15px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 15px;
    cursor: pointer;
    @media(min-width: 800px){
        top: 15px;
        right: 15px;
        left: auto;
        padding: 0.5rem 0.75rem;
    }
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