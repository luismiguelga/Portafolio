import { createRouter, createWebHashHistory } from "vue-router"

import home from "../components/home.vue"
import tienda from "../components/tienda/tienda.vue"


const routes =[
  { path: "/", component: home},
  { path:"/tienda", component: tienda}
]

export const router = createRouter({
  history:createWebHashHistory(),
  routes
})

