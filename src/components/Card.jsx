export default function Card({char, onClose}) { // obj
   const {name,gender,species,origin,image,status} = char
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
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




