import { ADD_FAVORITES, DELETE_FAVORITE } from "./actions-types";

export const addFavorites = (character) =>{
  return {
    type: ADD_FAVORITES,
    payload: character,
  }
}

export const deleteFavorite = (id)=>{
  return{
    type: DELETE_FAVORITE,
    payload: id,
  }
}