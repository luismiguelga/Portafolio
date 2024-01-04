// routes.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Ahorcado/src/App.vue';

const routes = [
  { path: '/', component: Home },
  // Otras rutas si las tienes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
