<template>

  <ul class="ustom-list-group mt-3">
      <li class="custom-list-group-item custom-list-group-item-action">Un item</li>
      <li class="custom-list-group-item custom-list-group-item-action">Un item</li>
      <li class="custom-list-group-item custom-list-group-item-action">Un item</li>
      <li class="custom-list-group-item custom-list-group-item-action">Un item</li>
      <li class="custom-list-group-item custom-list-group-item-action active">Un item</li>
      <li class="custom-list-group-item custom-list-group-item-action">Un item</li>
  </ul>

</template>

<script lang="ts" setup>

</script>

<style scoped>

ul{
    width: 100%;
}

li{
    cursor: pointer;
}

/* Reset some basic styles */
ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Custom list group styles */
.custom-list-group {
  display: block;
  margin-top: 1rem; /* Similar to mt-3 in Bootstrap */
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


</style>