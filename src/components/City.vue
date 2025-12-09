<script setup>

defineProps({
  id: Number,
  name: String,
  weather: String,
  temperature: Number,
  updatedAt: Date
})
</script>

<template>
  <div>
    <h2>{{ name }}</h2>
    <p>{{ id }}</p>
    <p>Météo : {{ weather }}</p>
    <p>Température : {{ temperature }} °C</p>
    <p>Dernière mise à jour : {{ updatedAt }}</p>
  </div>
</template>

<style scoped>

</style>