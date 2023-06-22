import axios from "axios";

import { ADD_FAV, REMOVE_FAV } from "./typeActions";
import { ORDER, FILTER, RESET } from "./typeActions";



export const addFav = (character) => {
    try{
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
            const {data} = await axios.post(endpoint, character)
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        };
    } catch (error){
        console.log(error);
    }
};


export const removeFav = (id) => {
    try{
        console.log('actions remove', id);
        const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
        return async (dispatch) => {
            const {data} = await axios.delete(endpoint)
            console.log('axion',data)
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        };
    } catch(error){
        console.log(error);
    };
};

export const orderFavorites = (order) =>{
    return {    
        type: ORDER,
        payload: order
    };
}; 

export const filterFavorites = (gender) =>{
    return{
        type: FILTER,
        payload: gender
    };
};

export const resetFavorites = () =>{
    return{
        type: RESET
    }
};