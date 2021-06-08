### Initiation à l'utilisation du langage typescript avec nodejs express

Ce projet consiste à l'utisation du langage **typescript**. Le but c'est de se familiariser ladite langage en communicant un **client** et un **serveur**.

<h4 style="color:#0000ff">Outils utilisés</h4>

- Utilsation du langage TypeScript pour le côté serveur
- Utilsation du langage TypeScript, jQuery, CSS, et html pour le côté client
- Utilisation de **gulp**

<h4 style="color:#0000ff">Infrastructure du projet</h4>

Cette infrastructure prend la forme d'une arborescence de fichier permettant l'organisation et la configuration d'un projet web **TypeScript** avec l'utilisation de **gulp** comme outils de gestion de la **toolschain**.

<h4 style="color:#0000ff">Structure du dossier du projet</h4>

Le projet dispose 3 répertoires : 
- **src** pour le code source
- **build** pour les éléments exécutable en phase de conception (avec log et sans occultation des sources JS)
- **buildx** pour les éléments déployable finaux (sans log et avec occultation des sources JS). 

<h4 style="color:#0000ff">Description détaillé</h4>

Le contenu de ces dossiers doit être généré automatiquement depuis celui du dossier **src** via une commande **gulp**.
- pour la partie serveur web on utilisera le module **express** avec son middleware **express.static** pour servir le contenu du dossier **www**
- pour la partie cliente, on souhaite juste avoir la trame de base. Donc une page d'accueil (index.html) contenant : 
      - une image, dont le fichier doit être dans le sous dossier **www/images** ; 
      - un fichier css simple placé dans le sous dossier **www/style** ;
      - un fichier script, placé dans le sous dossier **www/lib**, affichant simplement le titre h1 "Hello world !" dans la page en utilisant la librairie **jQuery** dont le fichier doit également se trouver dans le sous dossier  **www/lib**.
- Ce dossier projet type comporte également un fichier **.gitignore** correctement configuré pour éviter que les éléments auto-générable (build, buildx, node_modules,...) ne soient synchronisés sur les dépôts git. 
- Dans les codes sources **client/serveur**, on va mettre en place les bases pour une communication _**full-duplex**_ entre le serveur et les clients via le module **socket.io**. 
- Idéalement, pour plus de commodité, on va proposer une modalité de requêtage client=>serveur permettant d'attacher un **callback** réponse à un message (requête) envoyé au serveur afin d'y placer le code de traitement de la réponse.  

<h4 style="color:#0000ff">Progression des tâches</h4>

- [x] création de la structure du dossier du projet
- [x] installation des librairies à utiliser
- [x] création du fichier **gulp** pour  la génération automatique des dossiers depuis **src**
- [ ] création du serveur ![50%](https://progress-bar.dev/50)
- [ ] création du client
- [ ] communication full-duplex entre le serveur et les clients

