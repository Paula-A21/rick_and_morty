import axios from "axios";
import {useParams} from "react-router-dom"; 
import {useEffect, useState} from "react";
import React from "react";
import styles from "./Detail.module.css"

export default function Detail (){
    
    const [character, setCharacter] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
        if (data.name) {
         setCharacter(data);
        } else {
         alert('No hay personajes con ese ID');
        }
        });
        return setCharacter({});
    }, [id])

    return (
        <div className={styles.bacground}>
            <h2 className={styles.letters}>{character?.name}</h2> 
            <h2 className={styles.letters}>{character?.status}</h2>
            <h2 className={styles.letters}>{character?.species}</h2>
            <h2 className={styles.letters}>{character?.gender}</h2>
            <h2 className={styles.letters}>{character.origin?.name}</h2>
            <img src={character?.image} alt={character.name} /> 
        </div>
    )
}