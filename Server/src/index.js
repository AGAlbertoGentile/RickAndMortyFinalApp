const express = require('express');
const server = express();
const PORT = 3001;
const {router} = require('./routes/index');
const morgan = require('morgan');
const { conn } = require('./DB_connection');

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json());

server.use(morgan('dev'));

server.use('/rickandmorty', router);


 
// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     const {url} = req;
    
//     if(url.includes("/rickandmorty/character")){
//         const idString = url.split('/').pop();
//         const idCharacter = Number(idString);
//         getCharById(res, idCharacter)
//     }
// }).listen(PORT);




// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     const {url} = req;
    
//     if(url.includes("/rickandmorty/character")){
//         const idString = url.split('/').pop(); /// tambien podemos unas .at(-1)
//         const idCharacter = Number(idString);
//         const characterFound = characters.find((character) => (character.id === idCharacter))
//         res.writeHead(200, {"content-type": "application/json"});
//         res.end(JSON.stringify(characterFound));
//     }
// }).listen(PORT);