const axios = require('axios');


// .then((response) => response.json) /// los objetos en axios no hay q parciarlos a JSON
const URL = ("https://rickandmortyapi.com/api/character/");

async function getCharById (req, res) {
    try{
        const {id} = req.params;
        const {data} = await axios(URL + id);

        if(data.name){
            let character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
            }
            return res.status(200).json(character)
        }
        return res.status(404).send('Not found');
    }catch(error){
        res.status(500).send(error.message);
    }
};

module.exports = getCharById;