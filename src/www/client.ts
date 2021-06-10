/* #region  Déclaration de type pour remédier le manque de socket.io */
interface Socket {
    on(event: string, callback: (data: any, err?: any) => void): void;
    emit(event: string, data: any): void;
}
declare var io: () => Socket;

/* #endregion */

/* #region  Affichage de l'état de communication entre serveur au client */

console.log("Lancement du service client...");
let io_client = io();

io_client.on("connect", () => {
    console.log("Connexion au serveur établie !");
});

io_client.on("disconnect", () => {
    console.log("Serveur éteint !");
});

/* #endregion */

/* #region  Echange de données au serveur */

//TODO Améliorer la gestion de on() et emit() avec requestServer pour le même message 

io_client.emit("getData", { cat: 'user', id: '778899' });

io_client.on("receiveData", (res: any) => {
    //TODO : afficher les données récuperées
});

//TODO : Echange de type requête/réponse entre le client et serveur.

interface UserInfo {
    name: string;
    lastname: string;
}
/* #endregion */

/* #region  Exemple sur la gestion de on() et emit() vu en cours : A implementer */
//TODO : Implementer la gestion de emit. ie : quand on a la réponse, on va déclencher le callback
function requestServer(name: string, args: any, response: (err: string, rep: any) => void) {
    io_client.emit(name, args);
    io_client.on(name, response);
}

requestServer("getData", { car: 'user', id: "778899" }, (err: string, rep: UserInfo) => {
    if (err) console.log("erreur", err);
    else console.log("getData", rep);
});

/* #endregion */