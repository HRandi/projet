/* #region  Chargement des modules */
import { Server as ServerHttp } from "http";
import * as express from 'express';
import { Server as Server_io, Socket } from 'socket.io';
/* #endregion */

/* #region  Configuration du serveur avec les modules http, express et socket.io */
let app = express();
let server = new ServerHttp(app);
app.use(express.static("www"));
let io_server = new Server_io(server);

/* #endregion */

io_server.on("connection", (socket_client : Socket) => {
    console.log("un client se connecte...");

    //TODO : réalisation du dialogue client <--> serveur

    socket_client.on("disconnect", ()=>{
        console.log("... le client se déconnecte !")
    });
});

/* #region  Démarrage du serveur */

server.listen(8080);
console.log("Serveur lancé sur le port 8080");
/* #endregion */