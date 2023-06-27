import axios from "axios";

import { ADD_FAV, REMOVE_FAV, CACHE_FAV, ADD_CHAR, DEL_CHAR} from "./typeActions";
import { ORDER, FILTER, RESET } from "./typeActions";

export const addCharacter = (id) => {
    try{
        const endpoint = `http://localhost:3001/rickandmorty/character/${id}`;
        return async (dispatch) => {
            const {data} = await axios.get(endpoint)
            return dispatch({
                type: ADD_CHAR,
                payload: data,
            });
        };
    } catch (error){
        console.log(error);
    };
};

export const deleteCharacter = (id) => {
        return async (dispatch) => {
            dispatch({
                type: DEL_CHAR,
                payload: id,
            })
            await dispatch(removeFav(id));
        }
};

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
    };
};

export const removeFav = (id) => {
    try{
        const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
        return async (dispatch) => {
            const {data} = await axios.delete(endpoint)
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
    };
};

export const cacheFav = () => {
    try{
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
            const {data} = await axios.get(endpoint)
            return dispatch({
                type: CACHE_FAV,
                payload: data,
            });
        };
    } catch (error){
        console.log(error);
    };
};