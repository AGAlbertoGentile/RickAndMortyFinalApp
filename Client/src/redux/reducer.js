import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET, CACHE_FAV, ADD_CHAR, DEL_CHAR } from "./typeActions";


const initialState = {
    myFavorites: [],
    allCharacters: [],
    fullCharacters: [],
};
 
const rootReducer = (state= initialState, action) => {
    const { payload, type } = action;
 
    switch(type){
        case ADD_CHAR:
            return{
                ...state,
                fullCharacters: [payload, ...state.fullCharacters],
            }

        case DEL_CHAR:
            let filterChar = state.fullCharacters.filter(character => {
                return Number(character.id) !== Number(payload)});
            return{
                ...state,
                fullCharacters: filterChar,
            }

        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: payload, 
                allCharacters: payload
            }
           
        case REMOVE_FAV:
            // let removeItem = Number(payload);
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload,
            }
            
        case ORDER:
            let orderArray = [...state.allCharacters];
            if(action.payload === "Ascendente"){
                orderArray.sort((a,b)=> (a.id > b.id ? 1 : -1)) // se podria cambiar y hacer por nombre, el 1 y -1 indican si es verdadero lo deja primero sino lo pone delante con el -1.
            }else if(action.payload === "Descendente"){
                orderArray.sort((a,b)=> (b.id > a.id ? 1 : -1))
            }
            return {
                ...state,
                myFavorites: [...orderArray]
            }
        case FILTER:
            let characters;
            if(action.payload === 'All'){
                characters =  state.allCharacters
            }else{
                characters = state.allCharacters.filter(character => character.gender === payload)
            }
            return{
                ...state,
                myFavorites: characters
            }
        case RESET:
            return{
                ...state,
                myFavorites: state.allCharacters
            }
        case CACHE_FAV:
            return{
                ...state,
                fullCharacters: payload,
                myFavorites: payload,
                allCharacters: payload,
            }
    default:
        return state;
    }
};
   
 
export default rootReducer;
 