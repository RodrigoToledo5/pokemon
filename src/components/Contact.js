import React, { useState } from 'react'
import IMG from"./mail.png"
import { useDispatch } from 'react-redux';
import  {actualizarchat}  from '../actions';

export default function Contact(){
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
                         <h3>  Escribeme a por telegram</h3>
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
        </>
    )
}