let myFavorites = [];

function postFav (req, res){
    myFavorites.push(req.body);

    return res.json(myFavorites);
}

function deleteFav (req, res){
    const {id} = req.params;

    const characterFiltered = myFavorites.filter((favs) => favs.id !== +id);
    
    return res.status(200).json(characterFiltered);
}

module.exports = {
    postFav,
    deleteFav
}