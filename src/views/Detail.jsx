import axios from "axios";
import {useParams} from "react-router-dom"; 
import {useEffect, useState} from "react";
import React from "react";

export default function Detail (){
    
    const [character, setCharacter] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        if (data.name) {
         setCharacter(data);
        } else {
         alert('No hay personajes con ese ID');
        }
        });
        return setCharacter({});
    }, [id])

    return (
        <div>
          { character ? character : null}
        </div>
    )
}