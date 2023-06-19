import React from 'react';
import style from './card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';
import {connect} from 'react-redux';
// import { useLocation } from 'react-router-dom';
import frame from '../../assets/Panel-prueba-9.png';


export function Card({id, character, onClose, addFav, removeFav, myFavorites}) {
   
   const [closeBtn, setCloseBtn] = useState(true);

   // const location = useLocation();

   const [isFav,setIsFav] = useState(false);

   const handleFavorite = (data) => {
      if (isFav) {
        removeFav(data);
        setIsFav(false);
      } else {
        addFav(data);
        setIsFav(true);
      }
   };

   useEffect(() => {
      if(!onClose){
         setCloseBtn(false);
      }
   },[]);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (

      <div className={style.CardContainer}>
         
         {/* {location.pathname === "/home" && (
            <button className={style.button} onClick={() => onClose(character.id)}>Delete</button>
         )}; */}
         <div className={style.topCardContainer}>
         {
            isFav ? (
               <button className={style.buttonFav} onClick={() => handleFavorite(id)}>❤️</button>
            ) : (
               <button className={style.buttonFav} onClick={() => handleFavorite(character)}>♥</button>
            )
         }
         {closeBtn && (
            <button className={style.buttonDelete} onClick={() => onClose(character.id)}>Delete</button>
         )}
         </div>
         <div>
         <Link to={`/detail/${character.id}`}>
            <div className={style.imageContainer}>
               <img className={style.imgFrameTop} src={frame} alt='character  frame'/>
               <img className={style.img}src={character.image} alt=  {character.name} />
               <h3 className={style.CardTitle}>{character.name}</h3>
            </div>
         </Link>
         </div>
         
     </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   };
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites, // aca estoy sacando solo el atributo que me interesa de mi 'inicialState'
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);