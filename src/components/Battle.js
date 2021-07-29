import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import  {randomEnemy,letFigth, letHit}  from '../actions';


export default function Battle(){
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
        if (torender.sprites){
        return(
            <img src={torender.sprites.front_default} alt="pokemon"></img>
        )
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
        <div className="flex-cointaine_home" >
            <h1 className="text_home">Prepare to battle</h1>

            <div className="btn__cointainer">
                <div className="ready-btn">
                            {renderBtn()}
                </div>
            </div>
            <div><div className="text_home_lorem">
                <div className="flex-cointainer__card">
                    <div className="card_tobaltte__player">
                        {renderPick(state.pick)}
                        <br></br>
                        <span>{state.pick.name&&state.pick.name[0].toUpperCase()+state.pick.name.substring(1,state.pick.name.length)}</span>
                        <div>HP:{state.pick.stats?state.pick.stats[0].base_stat:"0"}</div>
                        <div>ATK:{state.pick.stats?state.pick.stats[1].base_stat:"0"}</div>
                    </div>
                    
                    
                    <div className="ring">
                        <div>{state.msj}</div>
                        <div>Score:{state.score}</div>
                    </div>
                    <div className="card_tobaltte">
                        {renderPick(state.oponent)}
                        <br></br>
                        <span>{state.oponent.name&&state.oponent.name[0].toUpperCase()+state.oponent.name.substring(1,state.oponent.name.length)}</span>
                        <div>HP:{state.oponent.stats?state.oponent.stats[0].base_stat:"0"}</div>
                        <div>ATK:{state.oponent.stats?state.oponent.stats[1].base_stat:"0"}</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}