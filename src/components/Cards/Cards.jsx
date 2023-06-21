import Card from '../Card/Card';
import React from "react";


export default function Cards({characters, onClose}) { //recibe props desde APP

  return (
    <div>
      { /*La función cards se encarga de mapear los characters que recibe por parámetro desde APP*/
          
        characters?.map((char)=>{
          return ( /*Por cada card que construya y mapee Cards, llamo a Card que es el que muestra la card*/
          
            <Card 
              key={char.id}
              id={char.id} //Estoy llamando y pasandole por props a card cada elemento del array characters
              name={char.name} 
              status={char.status}
              species={char.species}
              gender={char.gender}
              origin={char.origin?.name}
              image={char.image}
              onClose={onClose}
            />
          )
        })
      }
    </div>
  );
}
