export const GET_DETAIL_CHARACTER = 'GET_DETAIL_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export const getDetailCharacter = (id) => (dispatch) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then((response)=>response.json)
  .then((character)=>{
    dispatch({
      type: GET_DETAIL_CHARACTER,
      payload:character,
    });
  });
}

export const deleteCharacter = (id) =>{
  return {
    type: DELETE_CHARACTER,
    payload: id,
  }
}

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