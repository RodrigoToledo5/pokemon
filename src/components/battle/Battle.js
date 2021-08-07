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
    function handleClick(){
        dispatch(letHit(true))
    }

    function giveRandom(){
        dispatch(randomEnemy(handleRandomid()))
        dispatch(letFigth(true))
        dispatch(letHit(true))
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
            <button className={styles.btn_battle} onClick={giveRandom} ></button>
        )
    }

    function renderReady(){
        return(
            <button className={styles.btn_imready} onClick={handleClick} ></button>
        )
    }

    return(
        <>
            <div className={styles.container} >
                <div className ={styles.ring}>
                    <div className={styles.btn}>{renderBtn()}</div>
                        
                    <div className={styles.battle}>   
                       
                        <div className={styles.container_picks}>
                        <div className={styles.enemyzone}>
                            <div className={styles.enemy}>
                                <div className={styles.container_pokemon}>
                                    {renderEnemy(state.oponent)}
                                </div>
                            </div>
                            <div className={styles.container_stats}>
                            <div>{state.oponent.name&&state.oponent.name[0].toUpperCase()+state.oponent.name.substring(1,state.oponent.name.length)}</div>
                            <div>HP:{state.oponent.stats?state.oponent.stats[0].base_stat:"0"}</div>
                            <div>ATK:{state.oponent.stats?state.oponent.stats[1].base_stat:"0"}</div>
                            </div> 
                        </div>


                        <div className={styles.playerzone}>
                            <div className={styles.container_stats}>

                            <div>{state.pick.name&&state.pick.name[0].toUpperCase()+state.pick.name.substring(1,state.pick.name.length)}</div>
                            <div>HP:{state.pick.stats?state.pick.stats[0].base_stat:"0"}</div>
                            <div>ATK:{state.pick.stats?state.pick.stats[1].base_stat:"0"}</div>

                            </div> 
                            <div className={styles.pick} >
                                <div className={styles.container_pokemon}>{renderPick(state.pick)}</div>
                            </div>
                            
                        </div>

                        </div>
                    </div>
                    
                    
                    <div className={styles.bar}>
                        <div className={styles.container_menu}>
                            <div className={styles.container_text}>
                                <div>{state.msj}</div>
                                <div>Score:{state.score}</div>
                            </div>
                        </div>      
                    </div>

                </div>
            </div>
            <Bot text1={text1} text2={text2} text3={text3}></Bot>
        </>
    )
}