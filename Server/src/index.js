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

                for(prop in data){
                    if(prop === id){
                        res.end(
                            JSON.stringify(id)
                        );
                    }
                }

            }

    }).listen(3001, "localhost");