let myFavorites = [];

function postFav (req, res){
    myFavorites.push(req.body);

    return res.json(myFavorites);
}

function deleteFav (req, res){
    const {id} = req.params;

    myFavorites = myFavorites.filter((favs) => favs.id !== +id);
    
    return res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
}