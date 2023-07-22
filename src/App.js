import './App.css';
import About from './components/About/About'
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Error from './components/Error/Error'
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import React from 'react';

function App() {
   const [ characters, setCharacters ] = useState([]);
   const [ access, setAccess ] = React.useState(false);
   const EMAIL = 'yosoyunpichu@gmail.com';
   const PASSWORD = 'beto123';
   const navigate = useNavigate();

   const login = (userData)=>{
      if( userData.email ===EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate('/home');
      }
   }

   const logout = ()=>{
      setAccess(false);
      navigate('/')
   }

   React.useInsertionEffect(()=>{
      !access && navigate('/');
   },[access]);
   
   const onSearch = (id) =>{
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         const characterFind = characters.find((char) => char.id === Number(id))
         
         if(characterFind) {
            alert('Already in the list!')
         }

         else if(data.id !== undefined) {
            setCharacters((character) => [...character, data]);
         }
      })

      .catch((error)=> {
         alert('Try with another ID')
      })
   };

   const randomHandler = () =>{
      let haveIt = [];
      let random = (Math.random() * 826).toFixed();

      random = Number(random);
      if(!haveIt.includes(random)){
         fetch(`https://rickandmortyapi.com/api/character/${random}`)
         .then((response) => response.json())
         .then((data) =>{
            if(data.name){
               setCharacters((oldCharacter)=>[...oldCharacter,data]);
            }else{
               window.alert("Characters doesn't exist whit this ID");
            }
         });
      }else{
         console.log("You alredy add this ID");
         return false;
      }
   };

   const onClose = (id) =>{
      setCharacters(
         characters.filter((character) => {
           return character.id !== Number(id)
         })
       )
   };

   const { pathname } = useLocation();

   return (
      <div className='App'>
         {
            (pathname.includes('/home') || 
            pathname.includes('/about') ||
            pathname.includes('/detail')) &&
            <NavBar onSearch = {onSearch} random = {randomHandler} logout = {logout}/>
            
         }

         <Routes>
            <Route 
               path='/'
               element={<Form login = {login}/>}
            />
            <Route
               path='/home'
               element={<Cards
                        characters={characters}
                        onClose={onClose}
               />}
            />

            <Route 
               path='/about'
               element={<About />}
            />

            <Route
               path='/detail/:id'
               element={<Detail />}
            />
            
            < Route 
               path='/404'
               element={<Error />}
            />
            
            <Route 
               path='*'
               element={
                  <Navigate to='/404' />} 
            />
         </Routes>
      </div>
   );
}

export default App;
