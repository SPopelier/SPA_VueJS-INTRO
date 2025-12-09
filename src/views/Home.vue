<script setup>
function onListClick() {
  alert("L'utilisateur a cliqué pour voir la liste !");
}
</script>

<template>
  <h1>HomePage</h1>
  <router-link to="/CitiesList">Voir la liste des données météo</router-link><br>
  <a href="#" @click.prevent="onListClick">
    Voir la liste des données météo
  </a>
</template>

<style scoped>

</style>