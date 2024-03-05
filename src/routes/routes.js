import { createRouter, createWebHashHistory } from "vue-router"

import home from "../components/home.vue"
import Vue from "../components/Vue.vue"
import Angular from "../components/Angular.vue"

const routes =[
  {path: "/", component: home},
  {path: "/Vue", component: Vue},
  {path: "/Angular", component: Angular}
]

export const router = createRouter({
  history:createWebHashHistory(),
  routes
})

