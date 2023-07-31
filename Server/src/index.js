const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routers/index');
// const cors = require('cors');
// server.use(cors()) 

server.use((request,response,next)=>{
  response.header('Access-Control-Allow-Origin','*');
  response.header('Access-Control-Allow-Credentials', 'true');//Cookies
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  response.header( //Acceso a los Metodos.
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json());
server.use('/rickandmorty',router);

server.listen(PORT,()=> console.log('Server raised in port: ' + PORT));



// const http = require('http');

// const getCharById = require('./controllers/getCharById')

// server.listen(PORT, ()=>{
//   console.log('Server raised in port: ' + PORT);
// });

// http.createServer((request, response)=>{
//   response.setHeader('Access-Control-Allow-Origin', '*');

//   if(request.url.includes('/rickandmorty/character')){
//     const id = request.url.split('/').at(-1);
//     getCharById(response, id);

//     // const characterFind = character.find((character)=> character.id === Number(id));

//     // response.writeHead(200,{ 'Content-type': 'application/json' });
//     // response.end(JSON.stringify(characterFind));
//   }
// }).listen(3001,console.log("Servidor escuchando en el puerto 3001."));
