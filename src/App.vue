
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
        <h1 id="info">Nombre:{{ tarjetas.nombre }}</h1>
        <h1 id="info2">Precio:${{ (tarjetas.precio).toLocaleString("es-ES", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        }) }}
        </h1>

        <button @click="añadirP(i)" id="carritob">Añadir a la tabla</button>

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
  { id: 1, nombre: "The legend of zelda breath of the wild", precio: 284900, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEFHOx4C2MbV8foj7GeMk533BPCEstVbT6Q&usqp=CAU", cantidadEnCarrito: 1 },
  { id: 2, nombre: "The legend of zelda tears of the kindom", precio: 408900, img: "https://http2.mlstatic.com/D_NQ_NP_759278-MLB69890739138_062023-O.webp", cantidadEnCarrito: 1 },
  { id: 3, nombre: "Mario kart", precio: 279000, img: "https://exitocol.vtexassets.com/arquivos/ids/7512604/mario-kart-deluxe-8-nintendo-switch.jpg?v=637557703180930000", cantidadEnCarrito: 1 },
  { id: 4, nombre: "Mario party", precio: 240500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1yAAfWEiYSz_d-iHdRQ3b-f_UoZtK4QTq-Q&usqp=CAU", cantidadEnCarrito: 1 },
  { id: 5, nombre: "Super Smash Bros", precio: 120000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43_W2iA5X2A0914TWRyR2d09pTjxM8jhEfA&usqp=CAU", cantidadEnCarrito: 1 },
  { id: 6, nombre: "Super Mario Odyssey", precio: 214900, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIteQcWjLIAxVp-xJikgUsalUS_yMeucsqYg&usqp=CAU", cantidadEnCarrito: 1 },
  { id: 7, nombre: "Pokemon Y", precio: 249990, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlr02GYQwwCd7yvs5__roejO955evicNpHOiulSHcgPd3ZfeYLFTzWXWzjWQ6CsoZfbvY&usqp=CAU", cantidadEnCarrito: 1 },
  { id: 8, nombre: "Pokemon X", precio: 249990, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznYhyeiVAMApK2fgeRpWN7tPuttQoBNaPWNRmdwPnRisMqwlZC3FAXR_NnUCbxaBZZC4&usqp=CAU", cantidadEnCarrito: 1 },
  { id: 9, nombre: "Luigi's mansion", precio: 58400, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgLIQIFbU2l9QanJV7W5ApIIlSAYqKIXdJQ&usqp=CAU" },
  { id: 10, nombre: "Luigi's mansion2", precio: 337900, img: "https://i.ytimg.com/vi/xdy0vB7ELPI/sddefault.jpg" },
  { id: 11, nombre: "Donkey kong country tropical freeze", precio: 265900, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkGslg0Ggru4ytGSB9YhWCnZAzvAkKyhCXqlxwgsdyERodMBFxaJNZyj4k1DEfgZO3ic&usqp=CAU" },
  { id: 12, nombre: "Animal Crossing", precio: 265900, img: "https://media.cdn.videotesty.pl/media/cache/f5/42/f54260dfcf09ca0fb151337f5f0e5e80.jpg" },
])
</script>

<style scoped>
#body {
  #body {
    height: 100vh;
    margin: 0;
  }
}

#arriba {
  display: flex;
  justify-content: space-around;
  background-color: red;
  margin: 0%;

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
</style>
