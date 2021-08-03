import React from 'react'
import { useHistory } from 'react-router-dom';
import styles from './style.module.css'
import ReactTypingEffect from 'react-typing-effect'

export default function Landing(){
    const text1="Hola mi nombre es el Profe Ahok, este es un mini juego de Pokémon.";
    const text2="Aquí podrás capturar pokémones con estadisticas randoms y luego luchar con ellos.";
    const text3="Deseas comenzar?"
    let history = useHistory();
    function handleClick(){
        history.push("/Bag")
    }
    function showtext(){
        return (
            <>
              <ReactTypingEffect
                text={[text1,text2,text3]} speed={25} eraseSpeed={5} cursor={" "}
              />
            </>
          );
        };
   
    return(
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.flex}>
                        <div className={styles.flex__cointainer}>
                            <div className={styles.span}>{showtext()}</div>
                            <buttom className={styles.btn} onClick={(eve)=>handleClick(eve)}>GO</buttom>
                            <div className={styles.img}>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    )
}