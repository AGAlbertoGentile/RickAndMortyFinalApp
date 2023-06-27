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
import { useDispatch, useSelector } from 'react-redux';
import { cacheFav, removeFav } from './redux/actions';
import Favorites from './components/Favorites/Favorites';
import { addCharacter, deleteCharacter } from './redux/actions';



function App() {


   const dispatch = useDispatch();

   const characters = useSelector((state) => state.fullCharacters)

   async function searchHandler(id) {

      try {
         if (!characters.find((character) => character.id === Number(id))) {
            dispatch(addCharacter(id));
            console.log('add')
         } else {
            alert('El personaje ya ha sido agregado')
         }// Pregunta si el objeto 'character' no se encuentra en el array de objetos 'characters'
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      };
   };

   const [access, setAccess] = useState(false);
   // const email = "alberto.gentile1@gmail.com";
   // const password = "123456";


   const location = useLocation();
   
   let navigate = useNavigate();

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         if(access){
            axios.delete(URL);
            localStorage.setItem('myToken', email); // primer parametro es el nombre de la variable que va a contener al token, y el segundo el valor.
            navigate('/home');
         }
      } catch (error) {
         alert('Email o password incorrecto');
      };
   };

   useEffect(() => {
      const token = localStorage.getItem('myToken');
      if(token && !access){ // aca preguntamos si fue F5
         setAccess(true);
         dispatch(cacheFav()).then(location.pathname ==='/' && navigate('/home'));
      };
      if(!token && !access){
         !access && navigate('/');
      };
   }, [access, navigate, location.pathname]);

   function closeHandler(id) {
      dispatch(deleteCharacter(id))
   };

   function logout() {
      localStorage.removeItem('myToken');
      setAccess(false);
   };

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
