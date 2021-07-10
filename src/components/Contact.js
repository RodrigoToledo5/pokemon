import React from 'react'
import IMG from"./mail.png"

export default function Contact(){

    return(
        <div className="body">

            <div className="flex-container">
                <form className="form">
                    <div className="form_section">
                        <input type="text" className="form__input" placeholder="Destinatario"/>
                    </div>
                    <div className="form_section">
                        <input type="text" className="form__input" placeholder="Asunto"/>
                    </div>
                    <div className="form_section">
                        <textarea className="form__input" type="text" placeholder="..."/>
                    </div>
                    <div className="form__section">
                        <input type="submit" className="form__input"/>
                    </div>
                    
                </form>
                <div className="form-img"> 
                        <div className="img-container">
                            <div>
                                <img src={IMG}/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}