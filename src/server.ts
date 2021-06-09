// import { createServer, Server} from "http";
// import express  from 'express';
// express();

// let app = express(); // on crée une application express

// let server = new Server(app);
// app.use(express.static("www"));

// server.listen(8080);
// console.log("Serveur lancé sur le port");

import { createServer } from "http";

let server = createServer((req, res)=>{
    res.write("Bonjour");
    res.end();
});

server.listen(8080);
console.log("Serveur lancé sur le port 8080");