const axios = require ('axios');


function getCharById( response, id ){
  axios(`https://rickandmortyapi.com/api/character/${id}`)
  .then((response)=>response.data)
  .then((data)=>{
    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
    };
      response.writeHead(200,{ 'Content-type': 'application/json' });
      response.end(JSON.stringify(character));
  }).catch((error)=>{
    response.writeHead(500,{ 'Content-type': 'text/plain' });
    response.end(error.message);
  })
}


module.exports = getCharById;