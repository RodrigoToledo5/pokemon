import React from 'react'
import Bot from '../bot/Home';
import styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import  {randomEnemy,letFigth, letHit}  from '../../actions';


export default function Battle(){
    const text1="Para comenzar a luchar no te olvides de pickear un pokemon y despues presiona en Next Round.";
    const text2="Cuidado! si tu pokemon muere no lo podras recuperar."
    const text3="En esta batalla no podras elegir las habilidades tus pokemons pelearán solos... por ahora...";
    const state = useSelector(store => store.scoreTable)
    const dispatch = useDispatch()

    function handleRandomid(){
        let max=950;
        let min=0;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function giveRandom(){
        dispatch(randomEnemy(handleRandomid()))
        dispatch(letFigth(true))
        setTimeout(dispatch(letHit(true)),500)
    }
    function renderPick(torender){
        if(torender.sprites){
            if (torender.sprites.versions["generation-v"]["black-white"].animated.back_default){
            return(
                <>
                    <img src={torender.sprites.versions["generation-v"]["black-white"].animated.back_default} alt="pokemon"></img>
                </>
            )}
            else{
                return(
                    <>
                    <img src={torender.sprites.back_default} alt="pokemon"></img>
                    </>
                )
            }
        }
    }
    function renderEnemy(torender){
        if(torender.sprites){
            if (torender.sprites.versions["generation-v"]["black-white"].animated.front_default){
            return(
                <>
                    <img src={torender.sprites.versions["generation-v"]["black-white"].animated.front_default} alt="pokemon"></img>
                </>
            )}
            else{
                return(
                    <>
                    <img src={torender.sprites.front_default} alt="pokemon"></img>
                    </>
                )
            }
        }
    }
    function renderBtn(){
        return(
            <> 
                {state.oponent.stats&&state.oponent.stats[0].base_stat?renderReady():renderNext()}
            </>
        )
    }

    function renderNext(){
        return(
            <button className="btn_fgt" onClick={giveRandom} >Next Round</button>
        )
    }

    function renderReady(){
        return(
            <button className="btn_fgt" onClick={()=>setTimeout(dispatch(letHit(true)),500)} >Im ready</button>
        )
    }
    return(
        <>
            <div className="flex-cointaine_home" >
                <h1 className="text_home">Prepare to battle</h1>
                
                    <div className="btn__cointainer">
                        <div className="ready-btn">
                                    {renderBtn()}
                        </div>
                    </div>
                    <div className={styles.ring_container}>
                                <div className={styles.card_player}>
                                    <div className="img_tobattle">{renderPick(state.pick)}</div>
                                    <span>{state.pick.name&&state.pick.name[0].toUpperCase()+state.pick.name.substring(1,state.pick.name.length)}</span>
                                    <div>HP:{state.pick.stats?state.pick.stats[0].base_stat:"0"}</div>
                                    <div>ATK:{state.pick.stats?state.pick.stats[1].base_stat:"0"}</div>
                                </div>
                                
                                
                                <div className="ring">
                                    <div>{state.msj}</div>
                                    <div>Score:{state.score}</div>
                                </div>
                                <div className={styles.card_enemy}>
                                    <div className="img_tobattle">{renderEnemy(state.oponent)}</div>
                                    <span>{state.oponent.name&&state.oponent.name[0].toUpperCase()+state.oponent.name.substring(1,state.oponent.name.length)}</span>
                                    <div>HP:{state.oponent.stats?state.oponent.stats[0].base_stat:"0"}</div>
                                    <div>ATK:{state.oponent.stats?state.oponent.stats[1].base_stat:"0"}</div>
                                </div>
                    </div>
               
            </div>
            <Bot text1={text1} text2={text2} text3={text3}></Bot>
        </>
    )
}