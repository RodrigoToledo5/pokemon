import { GET_POKEMON,RANDOM_POKEMON, CAPTURE_POKEMON } from "../actions";

const initialState={
    Pokemon:{},
    Capture:true,
    Enemy:{}
}

export default function pokemonSearch(state=initialState,action){
   
    switch(action.type){
        case GET_POKEMON:
            //console.log("paso")
            return{
                ...state,
                Pokemon:action.payload,
            };
        case RANDOM_POKEMON:
               // console.log("paso")
            return{
                ...state,
                Pokemon:action.payload,
            };
        case CAPTURE_POKEMON:
            //console.log(action.payload)
           // console.log(action.payload)
            return{
                ...state,
                Capture:action.payload,
            }
        default:
             return state;
    }
}