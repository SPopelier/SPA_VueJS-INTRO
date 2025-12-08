<script setup>
import CitiesList from "@/views/CitiesList.vue";
function onListClick() {
  alert("L'utilisateur a cliqué pour voir la liste !");
}
</script>

<template>
  <h1>HomePage</h1>
  <a href="#" @click.prevent="onListClick">
    Voir la liste des données météo
  </a>

  <CitiesList />
</template>

<style></style>
