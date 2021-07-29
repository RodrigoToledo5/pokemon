import React from 'react'
import { useDispatch } from 'react-redux';
import  {capturePokemon,randomPokemon}  from '../../actions';

export function Searcher(){
    // const[input,setInput]=useState("");
    //console.log(fotopokemon.Pokemon)
    const dispatch = useDispatch();
    function handleRandomid(){
        let max=950;
        let min=0;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function capturado(event){
        dispatch(capturePokemon(event))
    }
    // function handleChange(event) {
    //     setInput(event.target.value);     
    //   }
    // function handleSumit(event){
    //     dispatch(getPokemon(input));
    //     capturado(event);
    //     setInput("");
    // }
    function giveRandom(event){
        dispatch(randomPokemon(handleRandomid()))
        capturado(event);
    }

    return(
        <>
            <div className="Searcher">
                {/* <input name="pokemon" value={input} onChange={(eve)=>{handleChange(eve)}} className="Searchrbar__input" placeholder="Search"></input> */}
                {/* <button onClick={()=>handleSumit(false)}>Search</button> */}
                {/* <button onClick={()=>dispatch(getPokemon(''))}>Clear</button> */}
                <button className="btn__random" onClick={()=>giveRandom(true)}></button>
            </div>
        </>
    )
}

// Searcher.prototypes={
//     onClick:PropTypes.
// }
