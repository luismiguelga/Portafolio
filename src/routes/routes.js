// routes.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue';
import Hometienda from '../components/Tienda/src/App.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Hometienda}
  // Otras rutas si las tienes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
