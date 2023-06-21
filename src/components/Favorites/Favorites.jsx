import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorites = () =>{

    const myFavorites = useSelector((state) => state.myFavorites);

    return (
        <div>
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