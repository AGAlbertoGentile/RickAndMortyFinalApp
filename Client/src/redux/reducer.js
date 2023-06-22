import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET } from "./typeActions";


const initialState = {
    myFavorites: [],
    allCharacters: []
};
 
const rootReducer = (state= initialState, action) => {
    const { payload } = action;
 
    switch(action.type){
     
        case ADD_FAV:
            return { ...state, 
                myFavorites: payload, 
                allCharacters: payload };
           
        case REMOVE_FAV:
            // let removeItem = Number(payload);
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload,

            }
        case ORDER:
            let orderArray;
            if(action.payload === "Ascendente"){
                orderArray = state.myFavorites.sort((a,b)=> (a.id > b.id ? 1 : -1)) // se podria cambiar y hacer por nombre, el 1 y -1 indican si es verdadero lo deja primero sino lo pone delante con el -1.

            }else{
                orderArray = state.myFavorites.sort((a,b)=> (b.id > a.id ? 1 : -1))
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
                characters = state.allCharacters.filter(character => character.gender === action.payload)
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
    default:
        return state;
    }
};
   
 
export default rootReducer;
 