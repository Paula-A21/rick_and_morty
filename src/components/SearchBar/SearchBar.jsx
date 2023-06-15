import {useState} from "react";

export default function SearchBar({onSearch}) {

    const [id, setId] = useState("");
    const handleChange = (event) => {
      setId(event.target.value);
    };

    return (
       <div>
          <input type="search" onChange={handleChange} value={id} name= "id" placeholder="insert id ..."/>
          <button onClick={() => onSearch(id)}>Buscar</button>
       </div>
    );
 }
 