import { createRouter, createWebHistory } from "vue-router";
import CitiesList from '../views/CitiesList.vue';
import Home from '../views/Home.vue'; // si tu as une page d'accueil

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/cities', component: CitiesList }
    ]
});
