<script setup>
import City from '../components/City.vue';
</script>

<template>
<h1>Weather - List of cities</h1>

  <City
      name="Ma ville"
      weather="Peu nuageux"
      :temperature="20.55"
      :updatedAt="new Date()"
  />

</template>

<style scoped>

</style>