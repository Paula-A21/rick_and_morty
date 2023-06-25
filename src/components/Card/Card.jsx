import React from "react";
import {Link} from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";

function Card({ id, name, gender, species, origin, image, status, onClose }) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const isFav = myFavorites.some((fav) => fav.id === id);

  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFav(id));
    } else {
      dispatch(addFav({ id, name, gender, species, origin, image, status }));
    }
  };

  return (

      /*muestro cada card según el id que reciba desde el map 
      de characters que hace card, que este a su vez, lo recibe del 
      estado de APP que este a su vez, recibe el id desde SearchBar
      y también creo el onClick que se va a ocupar de cerrar la 
      carta mandandole una función flecha que a su vez mande el 
      id al onClose*/

    <div className={style.cardBackground}>
      <div className={style.barra}>
        <div className={style.cross}>
          <button onClick={() => onClose(id)}>X</button>
        </div>
        <div className={style.name}>
          <Link to={`/detail/${id}`}>
            <h2 className="name">{name}</h2>  {/*El nombre de cada personaje
                                             de cada carta se ilumina porque
                                             tiene un link para entrar a los
                                             detalles de la carta*/}
         </Link>
        </div>
      </div>
      <div>

          {/*muestro solo el nombre y la imagen para que lo demas 
          se vea en detalles*/}
        <img src={image} alt={name} className={style.img} />
      </div>
      <div className={style.fav}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
    </div>
  );
}

export default Card; 





