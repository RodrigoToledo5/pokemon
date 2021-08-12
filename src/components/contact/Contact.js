import React, { useState } from 'react'
//import IMG from"./mail.png"
import { useDispatch } from 'react-redux';
import  {actualizarchat}  from '../../actions';
import styles from './style.module.css'
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
            
            <div className={styles.container}>

                <div className={styles.flex__item}>
                    <form onSubmit={(eve)=>send_msj(eve)} className={styles.form}>
                         <h3 className={styles.txt}>  Momentaneamente desabilitamos los msj por telegram proximamente agregaremos mejoras</h3>

                        <div className={styles.form} >
                            <textarea value={msj} className={styles.text} type="text" placeholder="msj" onChange={(eve)=>setmsj(eve)}/>
                        </div>
                        <div>
                            <input type="submit"  className={styles.btn}/>
                        </div>
                    </form>
                </div>
            </div>
            <Bot text1={text1} text2={text2} text3={text3}></Bot>
        </>
    )
}