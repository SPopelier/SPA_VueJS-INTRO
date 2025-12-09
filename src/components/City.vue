<script setup>
import timeago from "timeago.js";
import fr from 'timeago.js/lib/lang/fr';

timeago.register('fr', fr);

const props = defineProps({
  id: Number,
  name: String,
  weather: String,
  temperature: Number,
  updatedAt: Date
})

// Formate la date en temps relatif
const formattedUpdatedAt = ref('');

onMounted(() => {
  formattedUpdatedAt.value = timeago.format(props.updatedAt, 'fr');
});
</script>

<template>
  <div>
    <h2>{{ name }}</h2>
    <p>{{ id }}</p>
    <p>Météo : {{ weather }}</p>
    <p>Température : {{ temperature }} °C</p>
    <p>Dernière mise à jour : {{ formattedUpdatedAt }}</p>
  </div>
</template>

<style scoped>

</style>