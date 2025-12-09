import { createRouter, createWebHistory } from "vue-router";
import CitiesList from '../views/CitiesList.vue';
import Home from '../views/Home.vue';
import City from '@/components/City.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: '/CitiesList', component: CitiesList },
        { path: '/City', component: City }
    ]
});
