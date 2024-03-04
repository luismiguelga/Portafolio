
<template>
    <div id="body">
      <div id="arriba">
        <h1 class="titulo">Portafolio </h1>
        <h1 class="titulo">¿Estas buscando algo en especifico?</h1>
        <input id="barra" type="text" v-model="terminoBusqueda">
      </div>
  
      <div class="info">
        <h1>Hola soy Luis </h1>
        <img src="" alt="">
  
  
      </div>
  
      <div class="abajo">
        <div class="abajoc">
          <div id="ctarjetas" v-for="(tarjetas, i) in filtroTarjeta" :key="i">
            <img id="imagentarjeta" :src="tarjetas.img" alt="">
            <h1 id="info">{{ tarjetas.nombre }}</h1>
  
  
  
            <router-link class="link" :to="'/' + tarjetas.nombre.toLowerCase().replace(/ /g, '')">
              <q-btn id="btnmenu">
                <i class="fa-solid fa-house-user"></i>
                Ir a la pagina
              </q-btn>
            </router-link>
  
  
            <router-view></router-view>
  
  
          </div>
  
  
        </div>
      </div>
    </div>
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
    { id: 1, nombre: "Tienda", img: "https://th.bing.com/th/id/OIP.kF-eh3DgHYZjPNF_tZy-bAHaGG?w=510&h=420&rs=1&pid=ImgDetMain" },
    { id: 2, nombre: "Pokedex", img: "https://www.nda-toys.com/images/banner/pokemon-wholesale-v.jpg" },
    { id: 3, nombre: "Terminal de buses", img: "https://image.freepik.com/vector-gratis/estacion-autobuses-ciudad-moderna_82689-97.jpg" },
  ])
  
  
  
  
  </script>
    
  <style>
  .abajo {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  
  }
  
  .info {
    height: 300px;
    background-color: white;
    gap: 30px;
    margin: 20px;
    border-radius: 30px;
    display: flex;
  }
  
  #arriba {
    display: flex;
    justify-content: space-around;
    background-color: rgb(177, 110, 2);
  }
  
  .titulo {
    color: rgb(0, 0, 0);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  
  #barra {
    width: 500px;
    height: 25px;
    border-radius: 20px;
    margin-top: 25px;
  }
  
  .abajoc {
    display: flex;
    flex-wrap: wrap;
    height: 85%;
    width: 60%;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.742);
    border-radius: 30px;
  }
  
  #imagentarjeta {
    border-radius: 20px;
    position: relative;
    left: 37px;
    top: -47px;
    width: 140px;
    height: 150px;
  }
  
  #info {
    color: rgb(0, 0, 0);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 22px;
  
  }
  
  #ctarjetas {
    width: 215px;
    height: 360px;
    border: 3px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 60px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.841);
    margin: 30px;
    overflow: hidden;
    /* Evita que el contenido se salga del contenedor */
    text-align: center;
  
  }
  </style>
    