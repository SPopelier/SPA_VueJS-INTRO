<script setup>
import City from '../components/City.vue';

const cities = [
  {
    id: 1,
    name: 'Ville 1',
    weather: 'Ensoleillé',
    temperature: 22.0,
    updatedAt: new Date()
  },
  {
    id: 2,
    name: 'Ville 2',
    weather: 'Peu nuageux',
    temperature: 19.5,
    updatedAt: new Date()
  }
]
</script>

<template>
<h1>Weather - List of cities</h1>

  <div class="cities-list">
    <div class="city-card">
  <City
      v-for="city in cities"
      :key="city.id"
      :id="city.id"
      :name="city.name"
      :weather="city.weather"
      :temperature="city.temperature"
      :updatedAt="city.updatedAt"
  />
    </div>
  </div>

</template>

<style scoped>
.cities-list {
  display: flex;
  flex-direction: column;
  gap: 16px; /* espace entre les cartes */
  margin-top: 16px;
}

.city-card {
  background-color: #f0f8ff; /* bleu très clair */
  padding: 16px;
  border-radius: 8px;
  border-color: cornflowerblue;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1); /* petite ombre */
  transition: transform 0.2s;
}

.city-card:hover {
  transform: translateY(-2px); /* effet au survol */
}
</style>