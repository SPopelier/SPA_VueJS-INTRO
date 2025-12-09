<script setup>
import CitiesList from "@/views/CitiesList.vue";
import Home from "@/views/Home.vue";
</script>

<template>
  <p>Welcome to AppWeather</p>
  <router-view />
  <router-link to="/">Retour à la page d'accueil</router-link>
</template>

<style></style>
