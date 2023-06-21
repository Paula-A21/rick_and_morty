import React from "react";
import {Link} from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function Card({id,name,gender,species,origin,image,status,onClose, addFav, removeFav, myFavorites}) { //hago destructuring de characters que recibo por props desde Cards   
      
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
     if(isFav === true){
       setIsFav(false);
       removeFav(id); 
     }
     else{
       setIsFav(true);
       addFav({id,name,gender,species,origin,image,status});
     }
   }

   return (
         /*muestro cada card según el id que reciba desde el map 
         de characters que hace card, que este a su vez, lo recibe del estado de APP
         que este a su vez, recibe el id desde SearchBar
         y también creo el onClick que se va a ocupar de cerrar la carta mandandole             una función flecha que a su vez mande el id al onClose*/
            
      <div>
         {
            isFav ? (
              <button onClick={handleFavorite}>❤️</button>
            ) : (
              <button onClick={handleFavorite}>🤍</button>
            )
         }

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

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (charater) => {
         dispatch(addFav(charater))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);






