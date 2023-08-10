import axios from 'axios';

export const ADD_FAVORITES = 'ADD_FAVORITES';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
     try {
       const { data } = await axios.post(endpoint, character);
       return dispatch({
         type: 'ADD_FAVORITES',
         payload: data,
       });
     } catch (error) {
       return {
         error: error.message,
       };
     }
   };
 };

 export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
     try {
       const { data } = await axios.delete(endpoint);
       return dispatch({
         type: 'DELETE_FAVORITE',
         payload: data,
       });
     } catch (error) {
       return {
         error: error.message,
       };
     }
   };
 };

 export const filter = (gender) => {
  return {
      type: FILTER,
      payload: gender
  }
}

export const order = (id)=> {
  return {
      type: ORDER,
      payload: id
  }
}