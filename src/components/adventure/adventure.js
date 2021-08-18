import React, {useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import  {capturePokemon,randomPokemon,takePokemon}  from '../../actions';
import Bot from '../bot/Home';
import styles from './style.module.css'
import pokeball from './Pokeball.svg'

export default function Adventure(){
    const text1=`Captura un pokemon haciendo click en la pokeball`;
    const text2="Para continuar con tu aventura y buscar otro pokemon seleecciona siguiente";
    const text3="Para ver tus pokemons caputrados ve a tu mochila";
    const [animation, setAnimation] = useState(false)
    const pokemon = useSelector((store) => store.pokemonSearch.pokemon);
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
        
        setAnimation(true)
        dispatch(takePokemon(pokemon))
        dispatch(capturePokemon(true))
        
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
        setAnimation(false)
        capturado(event)
    }
    
    useEffect(() => {
        dispatch(randomPokemon(randomid()));
        // return (dispatch(clearPokemon()));
        
    },[dispatch])

   function ShowAnimationCaptured(){
       return (
        <>
            <img className={styles.img_captured} src={checkimg(pokemon)?showimg(pokemon):showalter(pokemon)} alt=""/>
        </>
       )
   }
   function ShowNormalPokemon(){

       return(
           <>
            <img className={styles.img} src={checkimg(pokemon)?showimg(pokemon):showalter(pokemon)} alt=""/>
            </>
        )
   }

   function showPokeballAnimation(){
       
       return(
            <>
                
                    <img src={animation&&pokeball} className={animation&&styles.pokeball} alt=""></img>
               
            </>
       )
   }

   function arandomPokemonApears(){
       if(pokemon.hasOwnProperty('name')) return true
       else return false
   }
    
   function backgroundBytype(types){
  
    if(types[0].type.name){
        console.log(types[0].type.name)
        return styles[types[0].type.name]
    }
    else return styles.flex_night;
    }
    return(
        <>
            <div className={styles.container}>
                <div className={pokemon.is_default&&backgroundBytype(pokemon.types)}>
                    <div className={styles.container_camp}>
                        <div className={styles.container_btn} >
                        </div>
                        {captured?arandomPokemonApears()&&ShowAnimationCaptured():arandomPokemonApears()&&ShowNormalPokemon()}
                        
                            {animation&&showPokeballAnimation()}
                        
                        <div className={styles.flex_camp}>
                            <div className={styles.container_btn} >
                                <div className={styles.btn_capture} onClick={()=>onClickCapture()}>
                                    <span className={styles.btn_txt}>Capturar</span>
                                </div>
                                <div className={styles.btn_next} onClick={()=>giveRandom(false)}>
                                    <span className={styles.btn_txt}>Siguente</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bot text1={text1} text2={text2} text3={text3}></Bot>
        </>
    )
}