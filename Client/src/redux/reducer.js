import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET } from "./typeActions";


const initialState = {
    myFavorites: [],
    allCharacters: []
};
 
const rootReducer = (state= initialState, action) => {
    const { payload } = action;
 
    switch(action.type){
 
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]

            }
        case REMOVE_FAV:
            let removeItem = Number(payload);
            return {
                ...state,
                myFavorites: state.myFavorites.filter((item) => item.id !== removeItem)
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
            return{
                ...state,
                myFavorites: state.allCharacters.filter(character => character.gender === action.payload)
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
 