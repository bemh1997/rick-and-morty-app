import './App.css';
import About from './components/About/About'
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail'
import Favorites from './components/Favorites/Favortites'
import Form from './components/Form/Form'
import Error from './components/Error/Error'
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function App() {
   const [ characters, setCharacters ] = useState([]);
   const [haveIt, setHaveIt] = useState([]);
   const [ access, setAccess ] = useState(false);
   const navigate = useNavigate();
   const { pathname } = useLocation();

   const login= async (userData)=> {
      try{
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login';
         const query = `?email=${email}&password=${password}` 
         const { data } = await axios(URL + query);
         const { access } = data;

         setAccess( data );
         access && navigate('/home');
      }catch(error){
         return {
            error: error.message,
         }
      }
   }

   const logout = () => {
      setAccess(false);
      navigate('/');
   };

   useEffect(() => {
      if(pathname.includes('*') && !access)
         navigate('/')
   }, [access, pathname, navigate, ]);
   
   const onSearch = async(id) =>{
      try{
         const endpoint = `http://localhost:3001/rickandmorty/character/${id}`
         const { data } = await axios(endpoint);
         const characterFind = characters.find((char) => char.id === Number(id));
         
         if(characterFind) {
            alert('Already in the list!')
         }

         else if(data.id !== undefined) {
            setCharacters((character) => [...character, data]);
         }
      }catch (error) {
         alert('Try with another ID')
      }
      
   };

   
   
   const randomHandler = () => {
      let random = Math.floor(Math.random() * 826);

      if (!haveIt.includes(random)) {
         fetch(`http://localhost:3001/rickandmorty/character/${random}`)
            .then((response) => response.json())
            .then((data) => {
            if (data.name) {
               setCharacters((oldCharacter) => [...oldCharacter, data]);
               setHaveIt((oldHaveIt) => [...oldHaveIt, random]);
            } else {
               window.alert("Character doesn't exist with this ID");
            }
            })
            .catch((error) => {
               console.error("Error fetching character:", error);
            });
      } else {
         window.alert("You already added this ID");
         return false;
      }
   } ;

   const onClose = (id) =>{
      setCharacters((charactersFilter)=>{ 
         charactersFilter = [...characters];
         charactersFilter = charactersFilter.filter(character => character.id !== id)
         return charactersFilter; 
      });
   };

   return (
      <div className='App'>
         {(access && 
            !(pathname.includes('/login') && 
            !(pathname.includes('/404')) 
         ) ) && (
            <NavBar onSearch={onSearch} random={randomHandler} logout={logout} />
         )}

         <Routes>
         {/* Ruta de la página principal */}
            <Route
            path='/home'
            element={access ? <Cards characters={characters} onClose={onClose} /> : <Navigate to='/' />}
            />
         {/* Ruta de la página "Favortitos" */}
            <Route 
               path='/favorites'
               element={ access? <Favorites />:<Navigate to='/' />}
            />
         {/* Ruta de la página "Acerca de" */}
            <Route path='/about' element={access ? <About /> : <Navigate to='/' />} />
         {/* Ruta de detalle de personaje */}
            <Route path='/detail/:id' element={access ? <Detail /> : <Navigate to='/' />} />
         {/* Ruta de inicio de sesión */}
            <Route path='/' element={<Form login={login} />} />

         {/* Ruta para la página 404 */}
            <Route path='/404' element={<Error access = {access}/>} />

            <Route path='*' element= {<Navigate to='/404' />} />
         </Routes>
      </div>
   );
}  

export default App;
