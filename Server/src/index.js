const http = require("http");

http

    .createServer((req,res) => {
        const {url} = req;
        res.setHeader('Access-Control-Allow-Origin', '*');

            if(url === "/rickandmorty/character"){
                    

            }

    }).listen(3001, "localhost");