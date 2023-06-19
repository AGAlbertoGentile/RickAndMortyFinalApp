import React from "react";
import style from './about.module.css'


export default function About(){
    return(
        <div className={style.AboutContainer}>
            {/* <img className={style.img} src='../../assets/Panel-prueba-2.png'  alt='about background' /> */}
            <div className={style.AboutApp}>
                <h2>¡Bienvenidos a la página oficial de Rick and Morty! Sumérgete en un 
                    viaje interdimensional lleno de ciencia, aventuras y humor ácido.
                    Rick Sanchez, un genio científico alcohólico y desilusionado, y su nieto 
                    Morty Smith, un adolescente tímido e inseguro, son los protagonistas
                    de esta fascinante serie de animación para adultos. Juntos, se embarcan 
                    en innumerables aventuras a través del tiempo, el espacio y múltiples 
                    realidades alternativas.
                </h2>
                <h2>Programas que se utilizaron:</h2>
            </div>
        </div>
    )
}