const express = require('express');
const server = express();
const router = require('./routers/index'); 
// const cors = require('cors');
// server.use(cors());

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

module.exports = server;
