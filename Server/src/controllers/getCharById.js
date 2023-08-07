const axios = require ('axios');
const URL = 'https://rickandmortyapi.com/api/character'

const getCharById = async (request, response)=>{
  try{
    const { id } = request.params;
    const { status, name, species, origin, image, gender} = 
    (await axios(`${URL}/${id}`)).data;

    const character = {
      id,
      status, 
      name, 
      species, 
      origin, 
      image, 
      gender
    }

    return character.name
      ? response.status(200).json(character)
      : response.status(404).json({error : "Not found"})
  }catch (error){
    return response.status(500).send(error.message);
  }
}

module.exports = getCharById;