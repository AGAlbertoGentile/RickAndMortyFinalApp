import { ADD_FAV, REMOVE_FAV } from "./typeActions";
import { ORDER, FILTER, RESET } from "./typeActions";

export const addFav = (character) => {
    return{
        type: ADD_FAV,
        payload: character
    };
};

export const removeFav = (id) =>{
    return{
        type: REMOVE_FAV,
        payload: id
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
}