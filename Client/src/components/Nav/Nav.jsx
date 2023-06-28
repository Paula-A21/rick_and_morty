import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import React from "react";
import styles from "./Nav.module.css"

//nav es el que muestra los botones de navegación a los que puedo acceder
export default function Nav({onSearch}) {
   return (
      <nav className={styles.navBar}>
         <div className={styles.buttons}>
            <Link to="/about">
               <button className={styles.buttonsStyle}>About</button>
            </Link>    
             {/* hacer que cuando  toquen el boton de search los redirija a home*/}
            <Link to="/home">
               <button className={styles.buttonsStyle}>Home</button>
            </Link>
            <Link to="/favorites">
               <button className={styles.buttonsStyle}>Favorites</button>
            </Link>
            <Link to= "/">
            <button className={styles.buttonsStyle}>Log out</button>
         </Link>
      
         <SearchBar onSearch={onSearch}/>
         </div>
      </nav>

      //> [**NOTA**]: podrías utilizar NavLink para darle 
      //estilos al link About y Home.
   );
}