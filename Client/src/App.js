import './App.css';
import React, { useState, useEffect } from 'react';
import Cards from './components/cards/Cards.jsx';
import Header from './components/header/Header';
import NavBar from './components/navBar/navBar';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/About.jsx';
import { useNavigate } from 'react-router-dom';
import Form from './components/Form/Form.jsx';
import Error from './components/Error/Error';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions';
import Favorites from './components/Favorites/Favorites';



function App() {

   const [characters, setCharacters] = useState([])

   async function searchHandler(id) {
      try {
         if (!characters.find((character) => character.id === Number(id))) {
            const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            setCharacters((oldChars) => [...oldChars, data]); //Crea un array nuevo n el cual agrega "data" el nuevo elemento.
         } else {
            alert('El personaje ya ha sido agregado')
         }// Pregunta si el objeto 'character' no se encuentra en el array de objetos 'characters'
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      };
   };

   const [access, setAccess] = useState(true);
   // const email = "alberto.gentile1@gmail.com";
   // const password = "123456";

   const dispatch = useDispatch();
   
   let navigate = useNavigate();

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         alert('Email o password incorrecto');
      };
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   function closeHandler(id) {
      let deleted = characters.filter((character) => character.id !== Number(id));
      dispatch(removeFav(id));
      setCharacters(deleted);
   };

   function logout() {
      setAccess(false);
   };

   const location = useLocation();

   return (
      <div className='App'>
         <Header />
         {location.pathname !== '/' && (<NavBar onSearch={searchHandler} radom={searchHandler} logout={logout} />)}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={closeHandler} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/*" element={<Error />} />
         </Routes>
      </div>
   );
};

export default App;
