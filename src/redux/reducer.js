import { ADD_FAVORITES, DELETE_FAVORITE } from "./actions-types";

const initialState = {
  myFavorites: []
}

const reducer = (state = initialState, action) =>{
  switch(action.type){
    case ADD_FAVORITES:
      return{
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
      }
    case DELETE_FAVORITE:
      return{
        ...state,
        myFavorites: state.myFavorites.filter((character)=>character.id != action.payload),
      }
    default:
      return{
        ...state
    }
  }
}