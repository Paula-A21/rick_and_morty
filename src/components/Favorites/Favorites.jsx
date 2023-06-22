import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import {orderCards, filterCards} from "../../redux/actions";
import { useState } from "react";

const Favorites = ({myFavorites}) =>{

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false)

    const handleOrder = () => {
        dispatch(orderCards(e.target.value));
        setAux(true);
    };

    const handleFilter = () => {
        dispatch(filterCards(e.target.value));
    }

    return (
        <div>

            <select onChange={handleOrder}>
                <option value={"A"}>Ascendente</option>
                <option value={"D"}>Descendente</option> 
            </select>

            <select onChange={handleFilter}>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Genderless"}>Genderless</option>
                <option value={"unknown"}>unknown</option>
                <option value={"All"}>All</option>
            </select>

            {
                myFavorites.map((char) => {
                    return (<Card 
                        key={char.id}
                        id={char.id} 
                        name={char.name} 
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin?.name}
                        image={char.image}
                    />
                    );
                })
            }
        </div>
    )
}


export default Favorites;