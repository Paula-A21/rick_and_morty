const server = require("./app");
const PORT = 3001;

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});
        
        
        //Así se crea un server con http
        // const http = require("http");
        // const getCharById = require("./controllers/getCharById")
        
        // http
        //     .createServer((req, res) => {
            //         res.setHeader('Access-Control-Allow-Origin', '*');
        
//             const {url} = req; 
            
//             if(url.includes("/rickandmorty/character/")){

//                 //http://localhost:3001/rickandmorty/character/

//                 // console.log(url); 
//                 //const id = Number(url.split("/").at(-1));   
//                 // const character = data.find((char) => char.id === id);
//                 // console.log(characterId);
//                 getCharById(res, req.url);
//             }
//     }).listen(3001, "localhost");