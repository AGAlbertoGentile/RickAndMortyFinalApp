const http = require ('http');
// const characters = require ('./utils/data.js');
const getCharById = require ('./controllers/getCharById')

const PORT = 3001;


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const {url} = req;
    
    if(url.includes("/rickandmorty/character")){
        const idString = url.split('/').pop();
        const idCharacter = Number(idString);
        getCharById(res, idCharacter)
    }
}).listen(PORT);




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