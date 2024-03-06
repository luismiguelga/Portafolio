<template>
    <div class="og">
        <div class="info1">
            <h1
                style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 27px; margin-top: 30px; font-weight: bold;">
                ¡Hola mundo del desarrollo!</h1>
            <p class="p"
                style="width: 400px; font-size: 16px; font-family: Verdana, Geneva, Tahoma, sans-serif; margin-top: 15px; ">
                Mi código es como el buen vino, mejora con el tiempo. A diferencia del café, que solo mejora mi código.
                Apasionado desarrollador centrado en el frontend y el backend con una gran creatividad y
                un amor profundo por crear experiencias de usuario cautivadoras. Me esfuerzo por mejorar
                la apariencia y la funcionalidad en cada proyecto.
            </p>
            <img src="../assets/Foto.png" alt=""
                style="width: 180px; height: 180px; border-radius: 80%; margin-top: 20px;">
            <h2 style="position: relative; top: 15px;">Algunas redes:</h2>
            <div class="span" style="margin-top: 20px; display: flex; gap: 30px; padding: 5px;">

                <span class="redes" style="width: 120px; ">
                    <a href="https://www.instagram.com/luismigalvis99/"
                        style="display: flex; gap: 5px; text-decoration: none;"> <i class="fab fa-instagram"
                            style="font-size: 25px;"></i> instagram</a>
                </span>

                <span class="redes" style="width: 110px;">
                    <a href="https://www.instagram.com/luismigalvis99/"
                        style="display: flex; gap: 5px; text-decoration: none;"> <i class="fab fa-twitter"
                            style="font-size: 25px;"></i>twitter </a>
                </span>

                <span class="redes" style="width: 110px;">
                    <a href="https://github.com/luismiguelga" style="display: flex; gap: 5px; text-decoration: none;">
                        <i class="fab fa-brands fa-github" style="font-size: 25px;"></i>github </a>
                </span>

            </div>
        </div>

        <div class="info2" style="">
            <h1
                style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 27px; margin-top: 30px; font-weight: bold;">
                Aqui hay alguno de mis proyectos:</h1>
            <div class="frameworks" style=" margin-top: 30px;  display: flex; gap: 50px;">
                <span class="fr">
                    <router-link :to="'./Vue'"
                        style="font-size: 20px; font-family: Verdana, Geneva, Tahoma, sans-serif; color: black; text-decoration: none;">Portafolio
                        Vue</router-link>
                    <router-link :to="'./Vue'" style="text-decoration: none;">
                        <i class="fab fa-brands fa-vuejs" style="color: green; font-size: 55px;"></i>
                    </router-link>
                </span>

                <span class="fr">
                    <router-link :to="'./Angular'"
                        style="font-size: 20px; font-family: Verdana, Geneva, Tahoma, sans-serif; color: black; text-decoration: none;">Portafolio
                        Angular</router-link>
                    <router-link :to="'./Angular'" style="text-decoration: none;">
                        <i class="fab fa-brands fa-angular" style="color: red; font-size: 55px;"></i>
                    </router-link>
                </span>
            </div>
            <div class="info3">
                <h1 style="font-size: 25px;">Quieres saber mas sobre mi:</h1>
                <q-btn class="boton" label="Ver" @click="showProfileDialog" style="margin: 10px;" />
                <q-dialog class="cuadro" v-model="profileDialog">
                    <span class="icons" style="display: flex; gap: 35px; ">
                        <h1 style="font-size: 23px; margin-right: 5px ;  margin-bottom:10px ; font-weight: bold;">Mas
                            cosas sobre mi </h1>
                        <i class="fas fa-laptop" style=" margin-top:-4px; font-size: 35px;"></i>
                    </span>

                    <p>
                        También poseo habilidades en el desarrollo de backend con nodejs y la gestión de bases de datos
                        con Python para comunicarme con el gestor de la base de datos.
                        <br>
                        <br>
                        Aunque mi experiencia en Python y Angular es básica, siempre estoy emocionado por aprender y
                        enfrentar nuevos desafíos. Mi enfoque en el frontend no solo se basa en la estética, sino en la creación
                        de experiencias de usuario que cautiven y deleiten. Este portafolio es un vistazo a mi viaje de
                        desarrollo, destacando proyectos donde he aportado mi toque único y habilidades en el mundo del
                        diseño web.
                    </p>
                    <br>
                    <p>
                        ¡Gracias por sumergirte en mi mundo de desarrollo! Estoy emocionado por la oportunidad de
                        contribuir con mis habilidades en futuros proyectos.
                    </p>
                    <span class="icon" style="display: flex; gap: 34px;">
                        <q-btn class="botonc" label="👈" @click="closeProfileDialog" style="margin-right: 30%;"></q-btn>
                        <i class="fab fa-brands fa-vuejs" style="margin-top: -2px; color: green; font-size: 40px;"></i>
                        <i class="fab fa-brands fa-js" style="margin-top: -2px; color: yellow; font-size: 40px;"></i>
                        <i class="fab fa-brands fa-python"
                            style="margin-top: -2px; color:darkblue; font-size: 40px;"></i>
                    </span>
                </q-dialog>
            </div>
        </div>


    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
const profileDialog = ref(false);

//Abrir y cerrar modal
const showProfileDialog = () => {
    profileDialog.value = true;
};
const closeProfileDialog = () => {
    profileDialog.value = false;
};


</script>


<style>
body {
    display: flex;
    margin: 0px;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

.og {
    display: flex;
    gap: 30px;
    margin-top: 15px;
}

.info1 {
    box-shadow: 0 10px 15px -3px rgba(128, 0, 255, 0.538), 0 4px 6px -4px rgba(128, 0, 255, 0.637);
    border-radius: 10px;
    background: linear-gradient(45deg, rgba(128, 0, 128, 0.574) 0%, rebeccapurple 100%);
    color: white;
    height: 620px;
    width: 550px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px black solid;
    position: relative;
    z-index: 1;
}

.redes {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    border-radius: 15px;
    background-color: white;
    height: 50px;
}

.info2 {
    box-shadow: 0 10px 15px -3px rgba(128, 0, 255, 0.538), 0 4px 6px -4px rgba(128, 0, 255, 0.637);
    border-radius: 10px;
    background: linear-gradient(45deg, rgba(128, 0, 128, 0.574) 0%, rebeccapurple 100%);
    color: white;
    height: 300px;
    width: 550px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px black solid;
    position: relative;
    z-index: 1;
}

.info3 {
    margin-top: 90px;
    margin-bottom: 30px;
    width: 550px;
    border: 2px solid;
    border-radius: 10px;
    box-shadow: 0 10px 15px -3px rgba(128, 0, 255, 0.538), 0 4px 6px -4px rgba(128, 0, 255, 0.637);
    border-radius: 10px;
    background: linear-gradient(45deg, rgba(128, 0, 128, 0.574) 0%, rebeccapurple 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    border: 2px black solid;
    z-index: 1;
}

.cuadro {
    height: auto;
    width: 550px;
    background-image: repeating-linear-gradient(-45deg,
            #3498db 0,
            transparent 30px,
            #2980b9 30px,
            transparent 60px,
            #3498db 120px,
            transparent 240px);
    background-color: #3498db;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    gap: 30px;
    position: relative;
    left: 30%;
    top: 100px;
    z-index: 2;
    position: fixed;
    padding: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: 5px solid;
}

.boton {
    width: 90px;
    height: 40px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: white;
    background-color: rgb(22, 209, 22);
    border: 3px solid rgb(254, 254, 254);
    border-radius: 10px;
    padding: 0.1rem 1.8rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    text-decoration: none;
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}


.boton::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 229, 255);
    transform: translateX(-100%);
    transition: all .3s;
    z-index: -1;
}

.boton:hover::before {
    transform: translateX(0);
}



.botonc {
    width: 90px;
    height: 40px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: white;
    background-color: rgb(111, 111, 111);
    border: 3px solid rgb(254, 254, 254);
    border-radius: 10px;
    padding: 0.1rem 1.8rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    text-decoration: none;
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
}


.botonc::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(251, 30, 48);
    transform: translateX(-100%);
    transition: all .3s;
    z-index: -1;
}

.botonc:hover::before {
    transform: translateX(0);
}



.fr {
    background-color: white;
    height: 150px;
    width: 200px;
    border-radius: 10px;
    font-family: "Verdana, Geneva, Tahoma, sans-serif";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>