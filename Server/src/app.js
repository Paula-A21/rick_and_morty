const express = require("express");
const server = express();
const logger = require("morgan");
const router = require("./routes/index");

server.use(express.json());

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
        
// server.use("/rickandmorty", router);
        

//* extended: false <-> datos que vienen de un form simple

server.use(logger("dev"));


//* ROUTES

server.use("/rickandmorty", router)

module.exports = server;
        
        //Así se crea un server con http
    //     const http = require("http");
    //     const getCharById = require("./controllers/getCharById")
        
    //     http
    //         .createServer((req, res) => {
    //                 res.setHeader('Access-Control-Allow-Origin', '*');
        
    //         const {url} = req; 
            
    //         if(url.includes("/rickandmorty/character/")){

    //             //http://localhost:3001/rickandmorty/character/

    //             // console.log(url); 
    //             //const id = Number(url.split("/").at(-1));   
    //             // const character = data.find((char) => char.id === id);
    //             // console.log(characterId);
    //             getCharById(res, req.url);
    //         }
    // }).listen(3001, "localhost");