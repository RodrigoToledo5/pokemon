export const GET_POKEMON='GET_POKEMON';
export const GET_COUNTRIES='GET_COUNTRIES';
export const RANDOM_POKEMON='RANDOM_POKEMON';
export const CAPTURE_POKEMON='CAPTURE_POKEMON';
export const SEND_MSJ='SEND_MSJ';
export const CLEAR_POKEMON='CLEAR_POKEMON';


export const clearPokemon=()=>(dispatch)=>{
    dispatch({
        type: 'CLEAR_POKEMON',
        payload:null
    })
}

export const getPokemon =(pokemon_name)=>(dispatch)=> { 
    fetch("http://localhost:3001/Countries?offset=0")
    .then(response => response.json())
    .then(json => {
        dispatch({
             type: 'GET_COUNTRIES',
            payload: json });
        });    
}

export const takePokemon =(pokemon)=>(dispatch)=> { 
    let randomice=pokemon;

    randomice.stats.map((stat)=>{
        stat.base_stat=Math.trunc(stat.base_stat*Math.random()+1);
        return null
    })

   dispatch({type:"TAKE_POKEMON",payload:pokemon})
   
}

export const pickPokemon =(pokemonid)=>(dispatch)=> { 
    
   dispatch({type:"PICK_POKEMON",payload:pokemonid})
   
}

export const capturePokemon =(bolean)=>(dispatch)=> { 
  // console.log(bolean)
    dispatch ({type:"CAPTURE_POKEMON", payload:bolean})
    
 }

export const actualizarchat=(msj)=>(dispatch)=>{
    console.log(msj)
    const chatid="-1001535028249";
    const token="1944824308:AAGo_SK4i87JoZbjbbyN_jFrAD_HY4KtLu4";
    fetch( `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatid}&text=${msj}`)
   .then(response => response.json())
   .then(json => {
       dispatch({
            type: 'SEND_MSJ',
           payload: json });
       });   
}

export const letFigth =(bolean)=>(dispatch)=> { 
    // console.log(bolean)
      dispatch ({type:"LET_FIGTH", payload:bolean})
}

export const letHit =(bolean)=>(dispatch)=> { 
      dispatch ({type:"HIT", payload:bolean})
}

export const randomPokemon =(randomID)=>(dispatch)=> { 
   fetch("https://pokeapi.co/api/v2/pokemon/" + randomID)
   .then(response => response.json())
   .then(json => {
       dispatch({
            type: 'RANDOM_POKEMON',
           payload: json });
       });   
    
 }

 export const randomEnemy =(randomID)=>(dispatch)=> { 
    fetch("https://pokeapi.co/api/v2/pokemon/" + randomID)
    .then(response => response.json())
    .then(json => {
        dispatch({
             type: 'RANDOM_ENEMY',
            payload: json });
        });   
     
  }