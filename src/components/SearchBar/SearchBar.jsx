import {useState} from "react";
import style from "./SearchBar.module.css"
import styles from "../Styles/style.css"

export default function SearchBar({onSearch}) {

    const [id, setId] = useState("");
    const handleChange = (event) => {
      setId(event.target.value);
   };

    return (
       <div>
         <input className={style.SearchBar} type="search" onChange={handleChange} value={id} name= "id" placeholder="insert id ..."/>
         <button onClick={() => {onSearch(id); setId("")}}>
            <span class="icon-search"/>
               
            </button> 
         {/* le paso a la función onSearch, que está en APP, el id recibido
         en el event.target.value de setId*/}
       </div>
    );
 }
 