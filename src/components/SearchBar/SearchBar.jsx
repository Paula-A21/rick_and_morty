import {useState} from "react";

export default function SearchBar({onSearch}) {

    const [id, setId] = useState("");
    const handleChange = (event) => {
      setId(event.target.value);
   };

    return (
       <div>
         <input type="search" onChange={handleChange} value={id} name= "id" placeholder="insert id ..."/>
         <button onClick={() => {onSearch(id); setId("")}}>Agregar</button> 
         {/* le paso a la función onSearch, que está en APP, el id recibido
         en el event.target.value de setId*/}
       </div>
    );
 }
 