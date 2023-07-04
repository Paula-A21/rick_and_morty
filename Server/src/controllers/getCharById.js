const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

function getCharById (req, res){
    const {id} = req.params;

    axios.get(`${URL}/${id}`)
        .then(response => response.data)
        .then(({name, status, species, gender, origin, image}) => {
            if(name){
                const character = {
                    id, 
                    name, 
                    status, 
                    species, 
                    gender, 
                    origin: origin?.name, 
                    image
                }
                
                return res.status(200).json(character);
            }
            
            return res.status(404).send("Not found");
            
        })   
        .catch((error) => res.status(500).json(error.message));
            
    


}

module.exports = {
    getCharById
}



//Creado con http
// const axios = require ("axios");

// const getCharById = ((res, id) => {
//     axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(
//         (response) => {
//             const {id, name, status, species, gender, origin, image} = response.data;
//             res.writeHead(200, {"Content-Type": "application/json"});
//             res.end(
//                 JSON.stringify({id, name, status, species, gender, origin, image})
//             )
//         }
//     )
//     .catch(
//         (reason) => {
//             res.writeHead(200, {"Content-Type": "text/plain"} );
//             res.end(reason.message)
//         }
//     );
// });

// module.exports = {
//     getCharById
// }