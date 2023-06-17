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
            <h2>{character?.name}</h2> 
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character.origin?.name}</h2>
            <img src={character.image} alt={character.name} /> 
        </div>
    )
}