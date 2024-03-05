<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar style="height: 55px; " >
        <q-toolbar-title style="display: flex; align-items: center;">
          <h1 style="font-size: 25px; color: white; margin-left: 20px;">Portafolio Vue</h1>
          <a href=""><i class="fab fa-brands fa-vuejs" style="color:limegreen ; font-size: 35px; margin-left: 15px;"></i></a>
          <input v-model="terminoBusqueda" type="text" style="width: 410px; margin-left: 20%; border-radius: 10px;" placeholder="¿Buscas algo en especifico?" >

        </q-toolbar-title>
      </q-toolbar>
    </q-header>



    <div class="abajo">
      <div class="abajoc">
        <div class="ctarjetas" v-for="(tarjetas, i) in filtroTarjeta" :key="i">
          <img class="imagentarjeta" :src="tarjetas.img" alt="" style="height: 60px; border-radius: 10px;">
          <h1 class="info" style="font-size: 25px;">{{ tarjetas.nombre }}</h1>

          <a :href="tarjetas.href" class="link" style="text-decoration: none;">Visitar pagina</a>

        </div>
      </div>
    </div>
  </q-layout>



</template>




<script setup>
import { ref, computed } from "vue";

// Barra busqueda
const terminoBusqueda = ref('');
const filtroTarjeta = computed(() => {
  return terminoBusqueda.value === ''
    ? tarjeta.value
    : tarjeta.value.filter(item => item.nombre.toLowerCase().includes(terminoBusqueda.value.toLowerCase()));
});

const tarjeta = ref([
  { id: 1, nombre: "Tienda", img: "https://th.bing.com/th/id/OIP.kF-eh3DgHYZjPNF_tZy-bAHaGG?w=510&h=420&rs=1&pid=ImgDetMain", href: "https://tienda-bice.vercel.app/" },
  { id: 2, nombre: "Pokedex", img: "https://www.nda-toys.com/images/banner/pokemon-wholesale-v.jpg", href: "https://pokedex-2-hazel.vercel.app/" },
  { id: 3, nombre: "Terminal de buses", img: "https://image.freepik.com/vector-gratis/estacion-autobuses-ciudad-moderna_82689-97.jpg", href: "https://transporte-sa.vercel.app/#/" },
  { id: 4, nombre: "Ahorcado", img: "https://imgs.search.brave.com/JPRguBgOoUEo8OsuZC7L_hIKKOJGuunUu4Mez6KJx3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zYXBv/c3lwcmluY2VzYXMu/ZWxtdW5kby5lcy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8x/MC9lbC1qdWVnby1k/ZWwtYWhvcmNhZG8u/anBn", href: "https://ahorcame.vercel.app/"},
  { id: 5, nombre: "Proyecto Final", img: "https://imgs.search.brave.com/-EB7OZm2oaGlvldfXx_HKs9Q0ol3ddjILFfzlZ0fF_M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTg0/NzcyNjg2L2VzL2Zv/dG8vYnVzY2FuZG8t/dW4tYXJ0JUMzJUFE/Y3Vsby1lc3BlYyVD/MyVBRGZpY28uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVZu/Rjh2WnRyUnNDa2Rl/NFdlbFNFNjhqXzhM/RkpNd3E0M21PRzlC/TlZEOXc9", href: "https://inventarioadso.vercel.app/#/"},



])




</script>


<style>
.abajo {
  width: 720px;
  height: auto;
  background-color: rgba(0, 72, 255, 0.559);
  position: relative;
  top: 80px;
  border-radius: 25px;
}

.abajoc {
  display: flex;
  gap: 30px;
  padding: 30px;
  flex-wrap: wrap;
}

.ctarjetas {
  width: 200px;
  height: 250px;
  border: 2px solid;
  display: flex;
  Flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;
  gap: 10px;
  background-image: repeating-linear-gradient(
  -45deg,
  #9b59b6 0,         /* Púrpura principal */
  transparent 30px,
  #8e44ad 30px,      /* Púrpura oscuro */
  transparent 60px,
  #9b59b6 120px,     /* Púrpura principal */
  transparent 240px
);
background-color: #9b59b6; 
}

.link{
  font-size: 20px;
  color: rgb(0, 0, 0);
  background-color: rgb(212, 212, 212);
  border-radius: 5px;
  width: 140px;
  display: flex;
 justify-content: center;
}
</style>