import React from 'react';
import { NavLink } from 'react-router-dom';
import {Searcher} from './Searcher';
import { useDispatch, useSelector } from 'react-redux';
import  {capturePokemon, takePokemon}  from '../../actions';

export default function Nav(){
    const fotopokemon = useSelector((store) => store.pokemonSearch);
    const dispatch = useDispatch();

    var buttomclasstest="buttom-pokeball_test";
    
    function onClickhandle(){
        dispatch(takePokemon(fotopokemon.Pokemon))
        dispatch(capturePokemon(false))
    }


    function showTakebutton(){
        return(
        <span className="flex-item">
            <button className={buttomclasstest} onClick={onClickhandle}>O</button>
        </span>
        )
    }
    function showcard() {

        return(<div className="flex-cointainer_nav">
                    <div className="flex-item">{fotopokemon.Pokemon.name[0].toUpperCase()}{fotopokemon.Pokemon.name.substring(1,fotopokemon.Pokemon.name.length)}
                    </div>
                    {fotopokemon.Capture?showTakebutton():null}
                    <span  className="flex-item">
                        <img className="img" src={fotopokemon.Pokemon.sprites.front_default} alt="pokemon">
                            </img>
                    </span>
                    {fotopokemon.Pokemon.types.map((slot)=>(
                        <span className="flex-item">Type: {slot.type.name[0].toUpperCase()}{slot.type.name.substring(1,slot.type.name.length)}
                        </span>
                    ))} 
                </div>
        )  
      }


    return(
        <>
        <nav className="Navbar_cointainer"> 
            <div className="Navbar">
                <NavLink className="btn" to="/">
                        Home
                </NavLink>

                <NavLink className="btn" to="/Bag">
                        Bag
                </NavLink>

                <NavLink className="btn" to="/Battle">
                        Battle
                </NavLink>

                {/* <NavLink className="btn" to="/Contact">
                        Contact
                </NavLink> */}

                <Searcher/>
                {fotopokemon.Pokemon?showcard():null}
            </div>   
        </nav>
        
        </>
    )
}