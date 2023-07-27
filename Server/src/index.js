const http = require('http');
const getCharById = require('./controllers/getCharById')

http.createServer((request, response)=>{
  response.setHeader('Access-Control-Allow-Origin', '*');

  if(request.url.includes('/rickandmorty/character')){
    const id = request.url.split('/').at(-1);
    getCharById(response, id);

    // const characterFind = character.find((character)=> character.id === Number(id));

    // response.writeHead(200,{ 'Content-type': 'application/json' });
    // response.end(JSON.stringify(characterFind));
  }
}).listen(3001,console.log("Servidor escuchando en el puerto 3001."));
