import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import React from "react";

//nav es el que muestra los botones de navegación a los que puedo acceder
export default function Nav({onSearch}) {
   return (
      <div>
         <Link to="/about">
            <button>About</button>;
         </Link>
         <Link to="/home">
            <button>Home</button>;
         </Link>
         <SearchBar onSearch={onSearch}/>;
      </div>

      //> [**NOTA**]: podrías utilizar NavLink para darle 
      //estilos al link About y Home.
   );
}