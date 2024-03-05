<template>
    <div class="og">
        <div class="info1">
            <h1 style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 27px; margin-top: 30px; font-weight: bold;">¡Hola mundo del desarrollo!</h1>
            <p class="p" style="width: 400px; font-size: 16px; font-family: Verdana, Geneva, Tahoma, sans-serif; margin-top: 15px; ">
                Mi código es como el buen vino, mejora con el tiempo. A diferencia del café, que solo mejora mi código.
                Apasionado desarrollador centrado en el frontend y el backend con una gran creatividad y
                un amor profundo por crear experiencias de usuario cautivadoras. Me esfuerzo por mejorar
                la apariencia y la funcionalidad en cada proyecto.

                <!-- Mientras mi corazón late al ritmo de las transiciones suaves y las interfaces intuitivas del frontend,
                también poseo habilidades en el desarrollo de backend y la gestión básica de bases de datos, con un
                toque de Python en mi caja de herramientas.

                Aunque mi experiencia en Python es básica, siempre estoy emocionado por aprender y enfrentar nuevos
                desafíos. Mi enfoque en el frontend no solo se basa en la estética, sino en la creación de experiencias
                de usuario que cautiven y deleiten. Este portafolio es un vistazo a mi viaje de desarrollo, destacando
                proyectos donde he aportado mi toque único y habilidades en el mundo del diseño web.

                A través de este espacio, te invito a explorar mi dedicación por el frontend, descubrir proyectos que
                muestran mi creatividad y darte una idea de cómo mi enfoque puede elevar la presencia digital de tu
                equipo.

                ¡Gracias por sumergirte en mi mundo de desarrollo! Estoy emocionado por la oportunidad de contribuir con
                mis habilidades en futuros proyectos y llevar la magia del frontend a nuevas alturas. -->
            </p>
            <img src="../assets/Foto.png" alt="" style="width: 180px; height: 180px; border-radius: 80%; margin-top: 20px;">
            <h2 style="position: relative; top: 15px;">Algunas redes:</h2>
            <div class="span" style="margin-top: 20px; display: flex; gap: 30px; padding: 5px;">

                <span class="redes" style="width: 120px; ">
                    <a href="https://www.instagram.com/luismigalvis99/" style="display: flex; gap: 5px; text-decoration: none;"> <i class="fab fa-instagram"
                            style="font-size: 25px;"></i> instagram</a>
                </span>

                <span class="redes" style="width: 110px;">
                    <a href="https://www.instagram.com/luismigalvis99/"  style="display: flex; gap: 5px; text-decoration: none;"> <i class="fab fa-twitter"
                            style="font-size: 25px;"></i>twitter </a>
                </span>

                <span class="redes" style="width: 110px;">
                    <a href="https://github.com/luismiguelga" style="display: flex; gap: 5px; text-decoration: none;" > <i class="fab fa-brands fa-github"
                            style="font-size: 25px;"></i>github </a>
                </span>

            </div>
        </div>
        <div class="info2">
            <h1 style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 27px; margin-top: 30px; font-weight: bold;">Aqui hay alguno de mis proyectos:</h1>
            <div class="frameworks" style=" margin-top: 30px;  display: flex; gap: 50px;">
                <span class="fr">
                  <a href=""><i class="fab fa-brands fa-vuejs" style="color: green;"></i></a>
                  <router-link :to="'./Portafolio'">Porta</router-link>
                </span>

                
                <span class="fr">
                Angular

                </span>
 

            </div>

        </div>
     
    </div>
       <!-- <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <p>Front Side</p>
                    <button></button>
                </div>
                <div class="card-back">
                    <p>Back Side</p>
                </div>
            </div>
        </div> -->
</template>


<style>
body {
    display: flex;
    margin: 0px;
    height: 100vh;
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */

}

.og {
    display: flex;
    gap: 30px;
    margin-top: 15px;

}

.info1 {
    box-shadow: 0 10px 15px -3px rgba(33, 150, 243, .4), 0 4px 6px -4px rgba(33, 150, 243, .4);
    border-radius: 10px;
    background: linear-gradient(45deg, rgba(0, 191, 255, 0.507) 0%, royalblue 100%);
    height: 620px;
    width: 550px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid;
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
.info2{
    box-shadow: 0 10px 15px -3px rgba(33, 150, 243, .4), 0 4px 6px -4px rgba(33, 150, 243, .4);
    border-radius: 10px;
    background: linear-gradient(45deg, rgba(0, 191, 255, 0.507) 0%, royalblue 100%);
    height: 300px;
    width: 550px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid;
}


.fr{
    background-color: white;
    height: 150px;
    width: 200px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
}





/* .card {
    width: 550px;
    height: 620px;
    perspective: 1000px;
    background-color: #6e1d896a;
  
}

.card-inner {
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
}

.card:hover .card-inner {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.card-front {
    background-color: #6A2C70;
    color: #fff;
    display: flex;
    align-items: center;
    border: 10px solid #6A2C70;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(0deg);
    height: 620px;
    width: 550px;
}

.card-back {
    background-color: #F08A5D;
    color: #fff;
    display: flex;
    align-items: center;
    border: 10px solid #F08A5D;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(180deg);
    height: 620px;
    width: 550px;
} */
</style>