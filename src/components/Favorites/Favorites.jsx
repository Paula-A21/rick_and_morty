import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import {orderCards, filterCards} from "../../redux/actions";
import { useState } from "react";

const Favorites = () =>{

    const myFavs = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return (
        <div>

            <select onChange={handleOrder}>
                <option value={"A"}>Ascendente</option>
                <option value={"D"}>Descendente</option> 
            </select>

            <select onChange={handleFilter}>
                <option value={"All"}>All</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Genderless"}>Genderless</option>
                <option value={"unknown"}>unknown</option>
                <option value={"All"}>All</option>
            </select>

            {
                myFavs?.map((char) => {
                    return (<Card 
                        key={char.id}
                        id={char.id} 
                        name={char.name} 
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin?.name}
                        image={char.image}
                    />);
                })
            }
        </div>
    )
}


export default Favorites;