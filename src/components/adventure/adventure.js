import React, {useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import  {capturePokemon,randomPokemon,takePokemon}  from '../../actions';
import Bot from '../bot/Home';
import styles from './style.module.css'

export default function Adventure(){
    const text1=`Captura un pokemon haciendo click en la pokeball`;
    const text2="Para continuar con tu aventura y buscar otro pokemon seleecciona siguiente";
    const text3="Para ver tus pokemons caputrados ve a tu mochila";
    
    const pokemon = useSelector((store) => store.pokemonSearch.Pokemon);
    const captured = useSelector((store) => store.pokemonSearch.Capture);
    const dispatch = useDispatch();
    function randomid(){
        let max=950;
        let min=0;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function capturado(event){
        dispatch(capturePokemon(event))
    }

    function onClickCapture(){
        dispatch(takePokemon(pokemon))
        dispatch(capturePokemon(false))
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
    function giveRandom(event){
        dispatch(randomPokemon(randomid()))
        capturado(event);
    }

    useEffect(() => {
        dispatch(randomPokemon(randomid()))
        
    },[dispatch])


    return(
        <>
            <did className={styles.container}>
                <div className={styles.flex_night}>
                    <div className={styles.container_camp}>
                        <div className={styles.container_btn} >
                        </div>

                        {captured&&pokemon&&<img className={styles.img} src={checkimg(pokemon)?showimg(pokemon):showalter(pokemon)} alt=""/>}

                        <div className={styles.flex_camp}>
                            <div className={styles.container_btn} >
                                <div className={styles.btn_capture} onClick={onClickCapture}>
                                    <span className={styles.btn_txt}>Capturar</span>
                                </div>
                                <div className={styles.btn_next} onClick={(eve)=>giveRandom(true)}>
                                    <span className={styles.btn_txt}>Siguente</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </did>
            <Bot text1={text1} text2={text2} text3={text3}></Bot>
        </>
    )
}