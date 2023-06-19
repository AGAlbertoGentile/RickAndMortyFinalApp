import React from 'react';
import Card from '../card/Card';
import style from './cards.module.css'



export default function Cards({characters, onClose}) {
  // const {characters, onClose} = props;

  return (
    <div className={style.CardsContainer}>
      {characters.map((character) => (
        <Card key={character.id} character={character} onClose={onClose} />
      ))}
    </div>
  );
}
