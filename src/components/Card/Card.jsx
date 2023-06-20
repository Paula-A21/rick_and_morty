import React from "react";
import {Link} from 'react-router-dom';

export default function Card({id,name,gender,species,origin,image,status,onClose}) { //hago destructuring de characters que recibo por props desde Cards
   return (
      /*muestro cada card según el id que reciba desde el map 
      de characters que hace card, que este a su vez, lo recibe del estado de APP
      que este a su vez, recibe el id desde SearchBar
      y también creo el onClick que se va a ocupar de cerrar la carta mandandole 
      una función flecha que a su vez mande el id al onClose*/

      <div>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}> {/*El nombre de cada personaje de cada carta se ilumina porque tiene un link para entrar a los detalles de la carta*/}
            <h2>{name}</h2>
         </Link>
         <h2>{status}</h2> {/*estoy mostrando cada dato de los personajes dentro de la carta*/}
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin?.name}</h2>
         <img src={image} alt={name} />
      </div>
   );
}


// export default function Card(props) {
//    return (
//       <div>
//          <button onClick={props.onClose}>X</button>,
//          <h2>{props.name}</h2>,
//          <h2>{props.status}</h2>,
//          <h2>{props.species}</h2>,
//          <h2>{props.gender}</h2>,
//          <h2>{props.origen?.name}</h2>,         
//          <img src={props.image} alt={props.name}/> {/* el alt sirve para yo identificar el nombre de la imagen  */}
         
//       </div> 
//    );
// }




