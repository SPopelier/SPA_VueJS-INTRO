<template>
  <div class="home">
    <h1>HomePage</h1>

    <a href="#" @click.prevent="onListClick">
      Voir la liste des données météo
    </a>

  </div>

</template>

<script setup>

function onListClick() {
  alert("L'utilisateur a cliqué pour voir la liste");
}

</script>

<style>

</style>
