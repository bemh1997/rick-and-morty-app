const { request, response } = require("express");

let myFavorites = [];

const postFav = (request, response)=>{
  myFavorites.push(request.body);
  return response.status(200).json(myFavorites);
};

const deleteFav = (request, response)=>{
  const { id } = request.params;

  const deleteCharacter = myFavorites.filter((character)=>character.id !== id);

  myFavorites = deleteCharacter;

  return response.status(200).json(myFavorites);
};

module.exports ={
  postFav,
  deleteFav
}