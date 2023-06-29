const http = require("http");
const data = require("./utils/data");

http
    .createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        
            const {url} = req; 
            
            if(url.includes("/rickandmorty/character/")){

                //http://localhost:3001/rickandmorty/character/

                console.log(url); 
                const id = Number(url.split("/").at(-1));   
                const characterId = data.find((char) => char.id === id);
                console.log(characterId);

                if(characterId){
                    res.writeHead(200, {"Content-Type": "application/json"} );
                    res.end(
                        JSON.stringify(characterId)
                    )
                }

            }

    }).listen(3001, "localhost");