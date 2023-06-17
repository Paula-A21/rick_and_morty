import './App.css';
import React from 'react';
import axios from "axios";
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import Detail from './views/Detail';
import About from './views/About';
import Form from './components/Form/Form';


function App() {
      
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'chupapijas123@gmail.com';
   const PASSWORD = 'quesito21';

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
      else alert("Email y/o contraseña incorrectos")
   }

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

   const onClose = (id) => {
      const newCharacters = characters.filter((ch) => ch.id !== Number(id));
      setCharacters(newCharacters);
   };
   
   return (
      <div className='App'>
      
         {location.pathname !== "/" && <Nav onSearch={onSearch} />}

         <Routes>
            <Route path = '/' element = {<Form login={login}/>}/>
            <Route path="/home"  element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/about' element={<About/>}/>
         </Routes>
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
