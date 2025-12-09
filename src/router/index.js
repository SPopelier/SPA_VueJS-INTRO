import { createRouter, createWebHistory } from "vue-router";
import CitiesList from '../views/CitiesList.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: CitiesList }
    ]
});
