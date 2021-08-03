import React, { useState } from 'react'
//import IMG from"./mail.png"
import IMG from './mail.png'
import { useDispatch } from 'react-redux';
import  {actualizarchat}  from '../../actions';
import Bot from '../bot/Home';

export default function Contact(){

    const text1="Espero que te hayas divertido en nuestro mini juego.";
    const text2="Cualquier mejora que se te ocurra implementar recibimos mensjaes por nuestro telegram."
    const text3="Todavia tenemos mucho por mejorar"

    const [msj, Setmsj] = useState("")
    const dispatch = useDispatch();
    function setmsj(eve){
        Setmsj(eve.target.value)
    }
    function send_msj(eve){
        eve.preventDefault()
        dispatch(actualizarchat(msj))
        Setmsj("")
    }
    return(
        <>
            
            <div className="body">

                <div className="flex-container">

               
                    <form className="form" onSubmit={(eve)=>send_msj(eve)}>
                         <h3>  Escribenos por telegram</h3>
                        <div className="form_section">
                            <textarea value={msj} className="form__input" type="text" placeholder="msj" onChange={(eve)=>setmsj(eve)}/>
                        </div>
                        <div className="form__section">
                            <input type="submit" className="form__input" />
                        </div>
                        
                    </form>
                    <div className="form-img"> 
                            <div className="img-container">
                                <div>
                                    <img src={IMG} alt="pokemon"/>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <Bot text1={text1} text2={text2} text3={text3}></Bot>
        </>
    )
}