<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <img 
    src="./assets/logo.svg" 
    alt="Vue Logo"
    class="logo"
  >
  <RouterView />
</template>

<style scoped>
.logo{
  position: fixed;
  bottom: 20px;
  right: 30px;
  width: 100px;
}
</style>
