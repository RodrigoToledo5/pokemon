import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {pickPokemon}  from '../actions';


export default function Bag(){
const state = useSelector(store => store.scoreTable)
const dispatch = useDispatch()
function handleSelect(id){
    dispatch(pickPokemon(id))
    if (state.bag.find(pokemon=>pokemon.is_default===false)){
        state.bag.map(pokemon=>pokemon.is_default=true);
    }
        state.bag.map((pokemon)=>{
            if (pokemon.id===id) {
                pokemon.is_default=!pokemon.is_default 
            }
            return null;

        })
}

function checkimg(poke){
    if(poke.sprites.versions["generation-v"]["black-white"].animated.front_default!==null) return true;
    else return false;
}
function showimg(poke){
    return(poke.sprites.versions["generation-v"]["black-white"].animated.front_default)
}

function showalter(poke){
    if(poke.sprites.front_default)return(poke.sprites.front_default)
}
    return(
        <div className="flex-cointainer__card">
            {state&&state.bag.map((pokemon,i)=>{
                return(
                <> 
                    <span onClick={()=>handleSelect(pokemon.id)} key={i} className={pokemon.is_default?"flex-item__card":"flex-item__card_selected"}>
                        <span>{pokemon.name[0].toUpperCase()}{pokemon.name.substring(1,pokemon.name.length)}
                        </span>
                        <div><img className="img_card" src={checkimg(pokemon)?showimg(pokemon):showalter(pokemon)} alt="pokemon"/>
                        {i}
                        </div>
                        {pokemon.stats.map((stat)=>{
                            return(
                            <>
                                <div className="card_text">{stat.stat.name[0].toUpperCase()}{stat.stat.name.substring(1,stat.stat.name.length)}:{stat.base_stat}</div>
                            </>
                            )
                        })}
                    </span>
                </>
                )
                })
             }
        </div>
    )
}