import { GET_COUNTRIES,RANDOM_POKEMON, CAPTURE_POKEMON,SEND_MSJ,SET_CAPTURED } from "../actions";

const initialState={
    Countries:[],
    Capture:false,
    Enemy:{},
    msj:{}
}

export default function pokemonSearch(state=initialState,action){
   
    switch(action.type){
        case SET_CAPTURED:
            return {
                ...state,
                Capture:action.payload
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