import { ADD_FAVORITES, DELETE_CHARACTER, DELETE_FAVORITE, GET_DETAIL_CHARACTER } from "./actions";

const initialState = {
  characterDetail:{},
  myFavorites: []
}

const reducer = (state = initialState, action) =>{
  switch(action.type){
    case GET_DETAIL_CHARACTER:
      return{
        ...state,
        characterDetail: action.payload,
      }

    case DELETE_CHARACTER: 
      return{
        ...state,
        character: state.characters.filter
      }
    case ADD_FAVORITES:
      return{
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
      }
    case DELETE_FAVORITE:
      return{
        ...state,
        myFavorites: state.myFavorites.filter((character)=>character.id !== action.payload),
      }
    default:
      return{
        ...state
    }
  }
}

export default reducer;