import { createRouter, createWebHashHistory } from "vue-router"

import home from "../components/home.vue"
// import tienda from "../components/tienda/tienda.vue"
// import pokedex from "../components/pokedex/pokedex.vue"
import Portafolio from "../components/Portafolio.vue"

const routes =[
  {path: "/", component: home},
  // {path: "/tienda", component: tienda},
  // {path: "/pokedex", component: pokedex},
  {path: "/Portafolio", component: Portafolio}
]

export const router = createRouter({
  history:createWebHashHistory(),
  routes
})

