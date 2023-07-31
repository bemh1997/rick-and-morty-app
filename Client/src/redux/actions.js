import axios from 'axios';

export const ADD_FAVORITES = 'ADD_FAVORITES';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: 'ADD_FAVORITES',
           payload: data,
        });
     });
  };
};

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return (dispatch) => {
     axios.delete(endpoint).then(({ data }) => {
        return dispatch({
           type: 'DELETE_FAVORITE',
           payload: data,
     });
     });
  };
};