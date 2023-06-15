import Card from '../Card/Card';
import React from "react";

export default function Cards({characters, onClose}) {
  return (
    <div>
      {
        characters?.map((char)=>{
          return (
            <Card 
              key={char.id} 
              species={char.species}
              status={char.status}
              name={char.name} 
              gender={char.gender}
              origin={char.origin.name}
              image={char.image}
              onClose={onClose}
            />
          )
        })
      }
    </div>
  );
}


// import Card from './Card';

// export default function Cards({props}) {
//    return (
//       <div> 
//          {props.characters?.map((char) => { //el signo de pregunta sirve para confirmar que hay algo
//          return <Card key={char.id} name={char.name} status={char.status} specie={char.specie} gender={char.gender} origin={char.origin.name} img={char.image}/>
//       }) 
//    }
//       </div>
   
//    );
   
//}



//name={char.name} status={char.status} specie={char.specie} gender={char.gender} origin={char.origin} img={char.img} key={char.id}