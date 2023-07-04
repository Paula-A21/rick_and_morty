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
import RouteError from "./RouteError/Error";

function App() {
      
   const [characters, setCharacters] = useState([]); //estos son los characteres que se van a guardar gracias a la API
   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   /*simula una base de datos dejando acceder solo a la contraseña y 
   password que le paso*/
   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }

   /*este use effect sirve para que si el email y/o la password que pusimos no es 
   correcto, no nos deje desde la url ingresar a otro lugar*/
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logout = () => {
      setAccess(false);
      navigate('/');
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
         {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
{/* 
         {
            location.pathname !== "/" || 
            location.pathname !== "/home" || 
            location.pathname !== '/detail/:id' ||
            location.pathname !== '/about' || 
            location.pathname !== '/favorites'
            ? 
            <RouteError/> :
            
         } */}

         <Routes>
            <Route path = '/' element = {<Form login={login}/>}/>
            <Route path="/home"  element={<Cards characters={characters} onClose={onClose}/>} /> {/*le paso los characters a Cards por props, junto con la función on close que es la X que aparece en la carta y me permite cerrarla*/}
            <Route path='/detail/:id' element={<Detail/>}/> {/*El detail me sirve para entrar a los detalles de cada carta y ver esa en específico*/}
            <Route path='/about' element={<About/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path="*" element={<RouteError/>}></Route>
         </Routes>
         
      </div>
   );
}

export default App;