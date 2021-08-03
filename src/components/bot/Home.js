import React,{useState} from 'react'
import ReactTypingEffect from 'react-typing-effect'
import styles from './style.module.css'


export default function Bot({text1,text2,text3}){
    
    // const text3="Para luchar con Pokémons randoms y juntar puntos ve battle y presiona en Next Round.";
    // const text4="Cuidado! si tu pokemon muere no lo podras recuperar."
    // const text5="En esta batalla no podras elegir las habilidades tus pokemons pelearán solos... por ahora...";
    // const text6="Muchas suerte y disfruta el juego";

    const [bot, setbot] = useState(true)

    function showtext(){
        return (
            <>
              <ReactTypingEffect
                text={[text1,text2,text3]} speed={25} eraseSpeed={5} cursor={" "}
              />
            </>
          );
        };

    function showbot(){
        return(
            <div className={styles.textcontainer}>
                <div className="text_home_lorem">
                    <h3>
                        <li className="li">{showtext()}</li>
                    </h3>
                    <div className={"img_oak"} ></div>   
                    <button className={styles.btn} onClick={()=>setbot(false)}>Cerrar</button>
                </div>
            </div>
        )
    }
    function showbutton(){
        return(
            <div>
                <div>
                    <button className={styles.btn_phone} onClick={()=>setbot(true)}></button>
                </div>
            </div>
        )
    }
    return(
        <>
            {bot?showbot():showbutton()}
        </>
    )
}