const axios = require('axios');


// .then((response) => response.json) /// los objetos en axios no hay q parciarlos a JSON

function getCharById (res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
        let character = {
            id: id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status,
        }
        return character;
    })
    .then((response) => {
        res.writeHead(200, {'content-type': 'application/json'})
        return res.end(JSON.stringify(response))
    })
    .catch((error) => {
        res.writeHead(500, {'content-type': 'text/plain'});
        return res.end(error.message)
    })
};

module.exports = getCharById;