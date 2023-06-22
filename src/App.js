import './App.css';
import React from 'react';
import axios from "axios";
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import Detail from './views/Detail/Detail';
import About from "./views/About/About"
import Form from './components/Form/Form';
import Favorites from "./components/Favorites/Favorites";
import Random from "./components/Random/Random";


function App() {
      
   const [characters, setCharacters] = useState([]); //estos son los characteres que se van a guardar gracias a la API
   const location = useLocation();
   const navigate = useNavigate();
   const EMAIL = 'chupapijas123@gmail.com';
   const PASSWORD = 'quesito21';
   const [access, setAccess] = useState(false);

   /*este use effect sirve para que si el email y/o la password que pusimos no es 
   correcto, no nos deje desde la url ingresar a otro lugar*/
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   /*simula una base de datos dejando acceder solo a la contraseña y 
   password que le paso*/
   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
      else alert("Email y/o contraseña incorrectos")
   }

   /*la función on search es la que se ocupa de agregar a los characters 
   de la api segun el id que escriba en el input, esto los recibe desde 
   el componente SearchBar*/
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
           const char = characters.find((ch)=> ch.id === Number(id))
           if(char) return alert("Ese personaje ya existe")
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
         window.alert("¡No hay personajes con este ID!");
         }
      }
      );
   }

   /*On close, se ocupa de cerrar la carta que estoy mostrando, esto lo hace 
   haciendo un filter del array de characters y guardando en un nuevo array 
   todos los characters menos aquel que filtre*/ 
   const onClose = (id) => {
      const newCharacters = characters.filter((ch) => ch.id !== Number(id));
      setCharacters(newCharacters);
   };
   
   return (
      <div className='App'>
         
         {/*quiero que la barra de navegación se muestre en todos lados menos en la
         home page ya que ahí está el form*/}
         {location.pathname !== "/" && <Nav onSearch={onSearch} />}

         <Routes>
            <Route path = '/' element = {<Form login={login}/>}/>
            <Route path="/home"  element={<Cards characters={characters} onClose={onClose}/>}/> {/*le paso los characters a Cards por props, junto con la función on close que es la X que aparece en la carta y me permite cerrarla*/}
            <Route path='/detail/:id' element={<Detail/>}/> {/*El detail me sirve para entrar a los detalles de cada carta y ver esa en específico*/}
            <Route path='/about' element={<About/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>

         <Random characters={characters}/>
      </div>
   );
}

export default App;





// import './App.css';
// import Card from './components/Card.jsx';
// import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js';

// function App() {
//    return (
//       <div className='App'>
//          <SearchBar onSearch={(characterID) => window.alert(characterID)} />
//          <Cards characters={characters} />
//          <Card
//             id={Rick.id}
//             name={Rick.name}
//             status={Rick.status}
//             species={Rick.species}
//             gender={Rick.gender}
//             origin={Rick.origin.name}
//             image={Rick.image}
//             onClose={() => window.alert('Emulamos que se cierra la card')}
//          />
//       </div>
//    );
// }

// export default App;
