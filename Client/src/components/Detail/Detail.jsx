import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import style from './detail.module.css'


export default function Detail(){

    let {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);

    return(
        <div className={style.detailContainer}>
            <div className={style.descriptionText}>
                <h2>{character.name}</h2>
                <h2>{character.status}</h2>
                <h2>{character.species}</h2>
                <h2>{character.gender}</h2>
            </div>
            {/* <h2>{character.origin?.name}</h2> */}
            <div>
                <img className={style.imgCharacter} src={character.image} alt={character.name} />
            </div>
        </div>
    )
}