// import {connect} from "react-redux";
import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import { orderFavorites, filterFavorites ,resetFavorites} from "../../redux/actions";
import style from './favorites.module.css'
import React from "react";


export default function Favorites(){

  const dispatch = useDispatch();

  const myFavorites = useSelector((state) => state.myFavorites)

  function handleSort(event){
    dispatch(orderFavorites(event.target.value))};

  function handleFilter(event){
    dispatch(filterFavorites(event.target.value))};

  function handleReset(){
    dispatch(resetFavorites)};

  return (
    <div>
      <div className={style.FavoritesFiltersContainer}>
        <select placeholder='Gender' onChange={handleFilter} className={style.FavoritesFiltersButtons}>
          {['All','Male','Female', 'Unknown', 'Genderless'].map((gender) => 
          (<option value={gender}>{gender}</option>))};
        </select>
        <select placeholder='Order' onChange={handleSort} className={style.FavoritesFiltersButtons}>
          {['Ascendente', 'Descendiente'].map((gender) => 
          (<option value={gender}>{gender}</option>))};
        </select>
        <button onClick={handleReset} className={style.FavoritesFiltersButtons}>Reset</button>
      </div>
      <div className={style.FavoritesContainer}>
        {myFavorites.map((character) => {
          return <Card key={character.id} character={character}/>
        })};
      </div>
    </div>
  );	
};

// const mapStateToProps = (state) => {
//     return{
//        myFavorites: state.myFavorites, // aca estoy sacando solo el atributo que me interesa de mi 'inicialState'
//     }
//  };

// export default connect(mapStateToProps, null)(Favorites);