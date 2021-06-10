### Initiation à l'utilisation du langage typescript avec nodejs express

Ce projet consiste à l'utisation du langage **typescript**. Le but c'est de se familiariser ladite langage en communicant un **client** et un **serveur**, et en ajoutant des opérations telles que ajout, modification, suppression et impression des données en utilisant **MySql** comme base de données.

<h4 style="color:#0000ff">Outils utilisés</h4>

- Utilsation du langage TypeScript pour le côté serveur
- Utilsation du langage TypeScript, jQuery, CSS, et html pour le côté client
- Utilisation de **gulp**

<h4 style="color:#0000ff">Infrastructure du projet</h4>

L'infrastructure de ce projet prend la forme d'une arborescence de fichier permettant l'organisation et la configuration d'un projet web **TypeScript** avec l'utilisation de **gulp** comme outils de gestion de la **toolschain**.

<h4 style="color:#0000ff">Structure du dossier du projet</h4>

Le projet dispose 3 répertoires : 
- **src** pour le code source
- **build** pour les éléments exécutable en phase de conception (avec log et sans occultation des sources JS)
- **buildx** pour les éléments déployable finaux (sans log et avec occultation des sources JS). 

<h4 style="color:#0000ff">Description détaillé</h4>

Le contenu de ces dossiers doit être généré automatiquement depuis celui du dossier **src** via une commande **gulp**.
- pour la partie serveur web on utilisera le module **express** avec son middleware **express.static** pour servir le contenu du dossier **www**
- pour la partie cliente, on va créer un page d'acceuil, en utilisant **bootstrap** avec la structuration de dossier comme suit : <br>

      - un sous dossier **www/images** pour contenir les images à utiliser
      - un sous dossier **www/style** pour les feuilles de styles **css**
      - un sous dossier **www/lib** pour mettre les librairies **jQuery**, **bootstrap.min.js** etc... afin d'afficher correctement le contenu de la page

- Le dossier projet comporte également un fichier **.gitignore** correctement configuré pour éviter que les éléments auto-générable (build, buildx, node_modules,...) ne soient synchronisés sur les dépôts git. 
- Dans les codes sources **client/serveur**, on va mettre en place les bases pour une communication _**full-duplex**_ entre le serveur et les clients via le module **socket.io**. 
- On va proposer aussi une modalité de requêtage client=>serveur permettant d'attacher un **callback** réponse à un message (requête) envoyé au serveur afin d'y placer le code de traitement de la réponse.
- On va utiliser **draw.io** pour le maquetage de notre IHM client afin de se référer facilement à ce que nous voulons faire.  

<h4 style="color:#0000ff">Progression des tâches</h4>

- [x] création de la structure du dossier du projet
- [x] installation des librairies à utiliser
- [x] création du fichier **gulp** pour  la génération automatique des dossiers depuis **src**
- [x] ajout des commandes d'aides et informations sur les tâches gulp disponible
- [x] création du serveur
- [x] maquetage de la page cliente
- [ ] création de la page cliente ![50%](https://progress-bar.dev/50)
- [ ] création du code client ![50%](https://progress-bar.dev/50)
- [ ] communication full-duplex entre le serveur et les clients
- [ ] création de la fonctionnalité ajout
- [ ] création de la fonctionnalité modification
- [ ] création de la fonctionnalité suppression
- [ ] création de la fonctionnalité impression


