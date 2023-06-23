import React from "react";
import {Link} from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import style from "./Card.module.css";


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
         
         <div className={style.cardBackground}>
            
            <div className={style.barra}>

               <div className={style.cross}>
                  <button onClick={() => onClose(id)}>X</button>
               </div>
               
               <div className={style.name}>
                  <Link to={`/detail/${id}`}> {/*El nombre de cada personaje de cada carta se ilumina porque tiene un link para entrar a los detalles de la carta*/}
                        <h2 className="name">{name}</h2>
                  </Link>
               </div>

            </div>
            {/*muestro solo el nombre y la imagen para que lo demas se vea en detalles*/}
            
            <div>
               <img src={image} alt={name} className={style.img}/>
            </div>

            <div className={style.fav}>
               {
                  isFav ? (
                     <button onClick={handleFavorite}>❤️</button>
                     ) : (
                           <button onClick={handleFavorite}>🤍</button>
                     )
                  }
            
            </div>
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





