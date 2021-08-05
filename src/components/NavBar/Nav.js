import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css'

export default function Nav(){
    
    return(
        <>
        <nav className="Navbar_cointainer"> 
            <div className="Navbar">
                <NavLink className={styles.btn__bag} to="/Bag">
                </NavLink>

                <NavLink className={styles.btn__battle} to="/Battle">
                </NavLink>

                <NavLink className={styles.btn__contact} to="/Contact">
                </NavLink>

                <NavLink className={styles.btn__adventure} to="/Adventure"></NavLink>
            </div>   
        </nav>
        
        </>
    )
}