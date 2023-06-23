import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import React from "react";
import Random from '../../Random/Random';
import style from "../../Random/RandomButton.module.css"
import styles from "./Nav.module.css"

//nav es el que muestra los botones de navegación a los que puedo acceder
export default function Nav({onSearch, logout}) {
   return (
      <nav className={styles.navBar}>
         <div className={styles.buttons}>
            <Link to="/about">
               <button className={styles.buttonsStyle}>About</button>
            </Link>
            <Link to="/home">
               <button className={styles.buttonsStyle}>Home</button>
            </Link>
            <Link to="/favorites">
               <button className={styles.buttonsStyle}>Favorites</button>
            </Link>
            <Link to= "/">
            <button className={styles.buttonsStyle}>Log out</button>
         </Link>
         </div>

         <div >
         </div>
         
         <div>
         <Random>
            <button className={style.random}>Random</button>
         </Random>
         

         <SearchBar onSearch={onSearch}/>

         
         </div>
      </nav>

      //> [**NOTA**]: podrías utilizar NavLink para darle 
      //estilos al link About y Home.
   );
}