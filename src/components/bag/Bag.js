import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import  {pickPokemon}  from '../../actions';
import Bot from '../bot/Home';
import styles from './style.module.css'
import { v4 as uuidv4 } from 'uuid';


export default function Bag(){
    const text1=`Para comenzar tu aventura has click en la brujula y luego click en la pokéball para capturar el pokemon que aparezca.`;
    const text2="Para seleccionar un pokemon primero tendras que tener capturado uno";
    const text3="Una vez capturado uno podras seleccionarlo para luchar";
    const state = useSelector(store => store.scoreTable);
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

function colorbytype(types){
    if(types[0].type.name)return styles[types[0].type.name]
}
    return(
        <>
        <div key={uuidv4()} className="flex-cointainer__card">
            {state&&state.bag.map((pokemon,j)=>{
                return(
                <> 
                    <span onClick={()=>handleSelect(pokemon.id)} key={uuidv4()} className={pokemon.is_default?colorbytype(pokemon.types):styles.card__selected}>
                        <span key={uuidv4()}>{pokemon.name[0].toUpperCase()}{pokemon.name.substring(1,pokemon.name.length)}
                        </span>
                        <div key={uuidv4()}>
                            <img key={uuidv4()} className="img_card" src={checkimg(pokemon)?showimg(pokemon):showalter(pokemon)} alt="pokemon"/>
                        {j}
                        </div>
                        {pokemon.stats.map((stat,i)=>{
                            return(
                            <>
                                <div key={uuidv4()} className="card_text">{stat.stat.name[0].toUpperCase()}{stat.stat.name.substring(1,stat.stat.name.length)}:{stat.base_stat}</div>
                            </>
                            )
                        })}
                    </span>
                </>
                )
                })
             }
        </div>
             <Bot key={uuidv4()} text1={text1} text2={text2} text3={text3}></Bot>
        </>
    )
}