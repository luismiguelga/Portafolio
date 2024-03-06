<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar style="height: 55px; ">
        <q-toolbar-title style="display: flex; align-items: center; background-color:white;">
          <h1 style="font-size: 25px; color:black; margin-left: 30px; margin-right: 15px;">Portafolio Angular</h1>
          <a href=""><i class="fab fa-brands fa-angular" style="color: red; font-size: 45px;"></i></a>
          <input v-model="terminoBusqueda" type="text" style="background-color:darkgrey;  width: 410px; margin-left: 15%; border-radius: 10px;"
            placeholder="¿Buscas algo en especifico?">
          <q-btn class="Btn" label="Sobre angular" @click="showProfileDialog" style="margin-left:  18%;"></q-btn>

        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-dialog class="cuadro1" v-model="profileDialog">
      <i class="fab fa-brands fa-angular" style="color:red; font-size: 50px; margin-left: 220px; "></i>
      <p>
        A lo largo de mi formación en el centro de estudios, mi enfoque principal se centró en Vue.js, donde adquirí
        habilidades sólidas en el desarrollo frontend y la creación de experiencias de usuario envolventes. Durante este
        período, también exploré Angular, aunque mi dedicación principal estuvo orientada hacia Vue.js.
        <br>
        <br>
        Mientras estudiaba Angular, me enfoqué principalmente en el desarrollo lógico y funcional.
        Durante este período, adquirí un entendimiento básico de los principios de estilización en Angular. Sin embargo,
        mi énfasis y dedicación principales se dirigieron hacia el aspecto funcional y la implementación de la lógica en
        lugar de profundizar en detalles estilísticos.
      </p>

      <p>
        Aprecio la oportunidad de aprender y enfrentar nuevos desafíos, y estoy emocionado por la posibilidad de aplicar
        mis habilidades en futuros proyectos, ya sea en Vue.js, Angular o cualquier otra tecnología que se presente en
        mi camino.
      </p>

      <span class="icon" style="display: flex; gap: 34px;">
        <q-btn class="botonc" label="👈" @click="closeProfileDialog"></q-btn>

      </span>
    </q-dialog>



    <div class="abajo">
      <div class="abajoc">
        <div class="ctarjetas" v-for="(tarjetas, i) in filtroTarjeta" :key="i">
          <img class="imagentarjeta" :src="tarjetas.img" alt="" style="height: 80px; border-radius: 10px;">
          <h1 class="info" style="font-size: 25px;">{{ tarjetas.nombre }}</h1>

          <a :href="tarjetas.href" class="link" style="text-decoration: none;">Visitar pagina</a>

        </div>
      </div>
    </div>
  </q-layout>



</template>




<script setup>
import { ref, computed } from "vue";

const profileDialog = ref(false);

//Abrir y cerrar modal
const showProfileDialog = () => {
  profileDialog.value = true;
};
const closeProfileDialog = () => {
  profileDialog.value = false;
};


// Barra busqueda
const terminoBusqueda = ref('');
const filtroTarjeta = computed(() => {
  return terminoBusqueda.value === ''
    ? tarjeta.value
    : tarjeta.value.filter(item => item.nombre.toLowerCase().includes(terminoBusqueda.value.toLowerCase()));
});

const tarjeta = ref([
  { id: 1, nombre: "Formulario1", img: "https://imgs.search.brave.com/exhcU5Gka6ivWy9mPG3itARKpXOeVctF5U1-ujtO56U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuZXMv/aHViZnMvbWVkaWEv/ZWplbXBsb3NkZWZv/cm11bGFyaW9zZGVj/b250YWN0b2xhdGFk/ZXNhbC5wbmc", href: "https://formulario-angular-one.vercel.app/" },
  { id: 2, nombre: "Form Reactivo", img: "https://imgs.search.brave.com/exhcU5Gka6ivWy9mPG3itARKpXOeVctF5U1-ujtO56U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuZXMv/aHViZnMvbWVkaWEv/ZWplbXBsb3NkZWZv/cm11bGFyaW9zZGVj/b250YWN0b2xhdGFk/ZXNhbC5wbmc", href: "https://form-reactivo-angular.vercel.app/" },
  { id: 3, nombre: "Bucles", img: "https://imgs.search.brave.com/SzBd2ReWzrVhNQDZiEgdDFwSIIeY38NnH2qBQ76MR5s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMzMyNS8xMzMy/NTgzOC5wbmc", href: "https://bucles-angular.vercel.app/" },
  { id: 4, nombre: "Pasar datos de padre a hijo", img: "https://imgs.search.brave.com/LsXJHrA-u9tPFS9lb2jQWxq2uo6fdhNxOEI5MTLt-Pw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/b2NyMmVkaXQuY29t/L2Fzc2V0cy9pbWcv/YmFja2RvYy5wbmc", href: "https://angular-orpin-one.vercel.app/" },



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
  background-image: repeating-linear-gradient(-45deg,
      #9b59b6 0,
      /* Púrpura principal */
      transparent 30px,
      #8e44ad 30px,
      /* Púrpura oscuro */
      transparent 60px,
      #9b59b6 120px,
      /* Púrpura principal */
      transparent 240px);
  background-color: #9b59b6;
}

.link {
  font-size: 20px;
  color: rgb(0, 0, 0);
  background-color: rgb(212, 212, 212);
  border-radius: 5px;
  width: 140px;
  display: flex;
  justify-content: center;
}



.Btn {
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 40px;
  width: auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  color: rgb(0, 0, 0);
  background-color: rgb(70, 215, 255);
  border: 3px solid rgb(254, 254, 254);
  border-radius: 80px;
  padding: 0.1rem 1.8rem;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
  vertical-align: middle;
  z-index: 1;
}

.Btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(200, 70, 255);
  transform: translateX(-100%);
  transition: all 0.3s;
  z-index: -1;
}

.Btn:hover::before {
  transform: translateX(0);
}

.cuadro1 {
    height: auto;
    width: 550px;
    background-image: repeating-linear-gradient(-45deg,
        #e0e0e0 0,
        transparent 30px,
        #ffffff 30px,
        transparent 60px,
        #e0e0e0 120px,
        transparent 240px);
background-color: #e0e0e0;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    position: relative;
    left: 30%;
    top: 100px;
    z-index: 2;
    position: fixed;
    padding: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: 5px solid;
}

</style>