import React from 'react'


export default function Home(){

    return(
        <div className="flex-cointaine_home" >
            <h1 className="text_home">Pokemon random stats</h1>
            <div><div className="text_home_lorem">
                <h2>
                    Pokémon random stats! es un mini juego donde puedes luchas con tus pokémons que vas guardando en tu mochila.
                    <li>Para comenzar has click en el boton "?" para obtener un pokémon y luego click en la pokéball para capturarlo.</li>
                    <li>Puedes capturar tantos pokemons como quieras, pero no puede capturar el mismo si ya lo tienes, si lo caputaras otro igual, será remplazado el anterior con estadisticas nuevas.</li>
                    <li>Las Estadisticas que tenga tu pokémon son random llegando a un maximo del standard que pueda tener dicho pokémon.</li>
                    <li>Para ver tus pokémons ve a bag.</li>
                    <li>Para luchar con Pokémons randoms y juntar puntos ve battle y presiona en Next Round.</li>
                    <li>Cuidado! si tu pokemon muere no lo podras recuperar.</li>
                    <li>En esta batalla no podras elegir las habilidades tus pokemons pelearán solos... por ahora...</li>
                </h2>   
            </div>
            </div>
        </div>
    )
}