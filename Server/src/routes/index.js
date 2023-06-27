const getCharById = require("../controllers/getCharById");
const { logValidation } = require("../controllers/login");
const { postFav, deleteFav, resetFavs, getFavs } = require('../controllers/handleFavorites');
const {Router} = require('express');

const router = Router()


router.get('/character/:id', getCharById);

router.get('/login', logValidation);

router.delete('/login', resetFavs);

router.post('/fav', postFav);

router.get('/fav',getFavs);

router.delete('/fav/:id', deleteFav);


module.exports = {
    router
}