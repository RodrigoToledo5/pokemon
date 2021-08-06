import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css'
import { useDispatch} from 'react-redux';
import  {capturePokemon}  from '../../actions';

export default function Nav(){
    const dispatch = useDispatch()
    function onClickNotCapture(){
        dispatch(capturePokemon(false))
    }
    
    
    return(
        <>
        <nav className="Navbar_cointainer"> 
            <div className="Navbar">
                <NavLink className={styles.btn__bag} to="/Bag" onClick={onClickNotCapture}>
                </NavLink>

                <NavLink className={styles.btn__battle} to="/Battle" onClick={onClickNotCapture}>
                </NavLink>

                <NavLink className={styles.btn__contact} to="/Contact" onClick={onClickNotCapture}>
                </NavLink>

                <NavLink className={styles.btn__adventure} to="/Adventure"></NavLink>
            </div>   
        </nav>
        
        </>
    )
}