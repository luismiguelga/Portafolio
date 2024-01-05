
<template>
  <div id="body">
    <div id="arriba">
      <h1 class="titulo">Portafolio </h1>
      <h1 class="titulo">¿Estas buscando algo en especifico?</h1>
      <input id="barra" type="text" v-model="terminoBusqueda">
    </div>
    




    <div class="abajoc">
      <div id="ctarjetas" v-for="(tarjetas, i) in filtroTarjeta" :key="i">
        <img id="imagentarjeta" :src="tarjetas.img" alt="">
        <h1 id="info">{{ tarjetas.nombre }}</h1>
       
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
  { id: 2, nombre: "Pokedex", precio: 408900, img: "https://www.nda-toys.com/images/banner/pokemon-wholesale-v.jpg" },
  { id: 3, nombre: "Terminal de buses", precio: 279000, img: "https://image.freepik.com/vector-gratis/estacion-autobuses-ciudad-moderna_82689-97.jpg" },

])




</script>

<style>
body{
  margin: 0;
  background-image: url(./img/Foto.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh; 

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
  height: auto;
  width: auto;
  justify-content: center;
  
}

#imagentarjeta {
  border-radius: 20px;
  position: relative;
  left: 37px;
  top: -47px;
  width: 140px;
  height: 150px;
}

#info{
  color: rgb(0, 0, 0);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 22px;

}

#ctarjetas {
  width: 215px;
  height: 390px;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.841);
  margin: 30px;
  overflow: hidden; /* Evita que el contenido se salga del contenedor */
  text-align: center; 
  
}
</style>
