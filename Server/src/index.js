const http = require("http");
const data = require("./utils/data");

http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        
            const {url} = req; 
            
            if(url.includes("/rickandmorty/character/")){

                console.log(url); 
                const id = Number(url.split("/").at(-1));   
                console.log(id);
                res.end(`Muestra el personaje con id: ${id}` );
            }

    }).listen(3001, "localhost");