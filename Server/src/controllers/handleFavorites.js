let myFavorites = [];

function postFav (req,res){
    const character = req.body;

    myFavorites.push(character);
    return res.status(200).json(myFavorites);
};

function deleteFav(req,res){
    const {id} = req.params;
    
    myFavorites = myFavorites.filter((character) => character.id !== Number(id));
    return res.status(200).json(myFavorites);
};

function resetFavs(req,res){
    try{
        myFavorites = [];
        res.status(200).send('resets favs exitoso');
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

function getFavs(req,res){
    try{
        res.status(200).json(myFavorites);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}



module.exports = {
    postFav,
    deleteFav,
    resetFavs,
    getFavs,
}