import { GET_COUNTRIES,RANDOM_POKEMON, CAPTURE_POKEMON,SEND_MSJ,CLEAR_POKEMON } from "../actions";

const initialState={
    Countries:[],
    Capture:false,
    Enemy:{},
    msj:{},
    pokemon:{}
}

export default function pokemonSearch(state=initialState,action){
   
    switch(action.type){
        case CLEAR_POKEMON:
            return {
                ...state,
                pokemon:{}
            }
        case SEND_MSJ:
            return {
                ...state,
                msj:action.payload
            }

        case GET_COUNTRIES:
            //console.log("paso")
            return{
                ...state,
                Countries:state.Countries.concat(action.payload)
            };
        case RANDOM_POKEMON:
               // console.log("paso")
            return{
                ...state,
                pokemon:action.payload,
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