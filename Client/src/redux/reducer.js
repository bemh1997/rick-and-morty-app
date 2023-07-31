import { ADD_FAVORITES, DELETE_FAVORITE } from "./actions";

const initialState = {
  characterDetail:{},
  myFavorites: []
}

const reducer = (state = initialState, action) =>{
  const {type, payload} = action;
  switch(type){
    case ADD_FAVORITES:
      return { ...state, 
        myFavorites: payload, 
        allCharacters: payload };
    // case ADD_FAVORITES:
    //   return{
    //     ...state,
    //     myFavorites: [...state.myFavorites, action.payload]
    //   }
    case DELETE_FAVORITE:
      return { 
        ...state,
        myFavorites: payload };
    default:
      return{
        ...state
    }
  }
}

export default reducer;