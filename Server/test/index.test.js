const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS',()=>{
  describe('GET /rickandmorty/character/:id/',()=>{
    it('Response con status: 200', async()=>
      await agent.get('/rickandmorty/character/1').expect(200)
    );

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image" ', async()=>{
      const response = await agent.get('/rickandmorty/character/1');
      const props = ["id", "name", "species", "gender", "status", "origin", "image"];
      
      props.forEach((prop) => expect(response.body).toHaveProperty(prop));
      
    });

    it('Response con status: 500', async()=>
      await agent.get('/rickandmorty/character/900').expect(500)
    );
  });

  describe('GET /rickandmorty/login', ()=>{
    it('Si la información del login es correcta', async()=>{
      const access = {access: true}
      const response = await agent.get('/rickandmorty/login?email=yosoyunpichu@gmail.com&password=beto123')
      expect(response.body).toEqual(access);
    });
  
    it('La información del login es incorrecta', async()=>{
      const access = {access : false}
      const response = await agent.get('/rickandmorty/login?email=yosoyunpichu@gmail.com&password=123nopo')
      expect(response.body).toEqual(access);
    });
  });
  
  let characterTest
  beforeEach(()=>{
      characterTest ={
      id: 2099, 
      name: "Miguel O'Hara", 
      species: "Human",
      gender: "Male", 
      status: "Alive", 
      origin: "Earth", 
      image: 'image.png'
    }
    return characterTest;
  });
  
  describe('POST /rickandmorty/fav', ()=>{
    const character2={
      id: 616, 
      name: "Peter B. Parker", 
      species: "Human",
      gender: "Male", 
      status: "Alive", 
      origin: "Earth", 
      image: 'image2.png'
    };
    it('Devuelve el elemento en un array',async()=>{
      const response = await agent.post('/rickandmorty/fav').send(characterTest);
      expect(response.body).toContainEqual(characterTest);
    });
  
    it('Devuelve el elemento previamente creado', async()=>{
      const response = await agent.post('/rickandmorty/fav').send(character2);
      expect(response.body).toContainEqual(characterTest);
      expect(response.body).toContainEqual(character2);
    });
  
    it('Elimina correctamente al personaje con el ID especificado',async ()=>{
      const response = await agent.delete('/rickandmorty/fav/2099')
      expect(response.body).toContainEqual(character2);
    });
  });  
});

