<script setup>
import { ref } from 'vue'

const name = ref('Ma ville')
const weather = ref('Peu nuageux')
const temperature = ref(20.55)
const updatedAt = ref(new Date())
</script>

<template>
  <div>
    <h2>{{ name }}</h2>
    <p>Météo : {{ weather }}</p>
    <p>Temperature : {{ temperature}}</p>
    <p>Mise à jour : {{ updatedAt}}</p>
  </div>

</template>

<style scoped>

</style>