const axios = require ('axios');
const URL = 'https://rickandmortyapi.com/api/character'

const getCharById = (request, response)=>{
  const { id } = request.params;
  axios(`${URL}/${id}`)
  .then((response)=>response.data)
  .then(({id, status, name, species, origin, image, gender})=>{
    if(name){
      const char = {
        id,
        status, 
        name, 
        species, 
        origin, 
        image, 
        gender
      }
      
      return char ? response.status(200).json(char)
      : response.status(404).json({error : "Not fund"});
    }
  })
  .catch((errorAxios)=>{
    response.status(500).json({
      error: errorAxios.message
    });
  });
}



// function getCharById( response, id ){
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//   .then((response)=>response.data)
//   .then((data)=>{
//     const character = {
//       id: data.id,
//       name: data.name,
//       gender: data.gender,
//       species: data.species,
//       origin: data.origin,
//       image: data.image,
//       status: data.status,
//     };
//     response.writeHead(200,{ 'Content-type': 'application/json' });
//     response.end(JSON.stringify(character));
//   }).catch((error)=>{
//     response.writeHead(500,{ 'Content-type': 'text/plain' });
//     response.end(error.message);
//   })
// }


module.exports = getCharById;