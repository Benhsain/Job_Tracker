## Technologies

- Base de données MongoDb avec cloud Atlas et schéma mongoose
- Serveur Express avec une API et des routes
- Authentication via JWT dans le Backend
- Cloudinary pour PDF et images
- Front end: EJS, HTML, JavaScript et SCSS

## Etapes vue globale

- Set up les projets Github
- Schéma Database mongoose
- Connecter la database au serveur
- CRUD des job applications
- Interaction entre frontend et backend pour le CRUD
- Authentification des utilisateurs
- Interaction entre le frontend et backend pour l’auth
- Upload et download du fichier PDF du CV et de l’image de profil
- Fonction de filtres sur les job offers
- Rendre le frontend plus beau
- Rendre le frontend compatible smartphone

## Plus petites étapes

1. Mettre en place les git repository
   - Créer les repository
   - Donner les accès au collègue
   - Créer une branche “dev”
   - Premier push pour voir si tout est en ordre
2. Ajouter une job offer dans la DB
   - npm init, npm install express et mongoose.
   - Faire un fichier JobOffer.js avec le schéma mongoose de joboffer avec des validations minimales.
   - Connecter le fichier principal index.js à la DB sur Atlas, via mongoose.
   - Faire une fonction simple dans index.js pour ajouter un job offer dans la db sur cloud atlas, en utilisant le schéma.
3. Afficher les jobs offers de la DB via postman
   - Faire un dossier routes et créer un fichier jobofferRoute.js dedans
   - Pointer l’index.js vers la route jobofferRoute.js
   - Faire un premier endpoint “get all” dans jobofferRoute.js pour recevoir toutes les job offers de la DB
   - Faire un premier essai avec postman
4. Afficher les jobs offers de la DB via EJS
   - Commencer le front end en créant un fichier EJS
   - Affichage basique dans fichier EJS, afficher la liste des job offers de la DB
5. Créer les endpoints pour le CRUD des job offers via postman
   - Endpoint get all
   - Endpoint get
   - Endpoint post
   - Endpoint put
   - Endpoint delete
6. Tester chaque endpoint via postman.
7. Affichage minimaliste via EJS et interaction avec l’API : **get 1** job offer
   - Création page EJS pour les détails d’1 job offer.
   - Appel de l’API pour avoir le job offer avec id spécifique.
8. Affichage minimaliste via EJS et interaction avec l’API : **post**
   - Création page EJS pour formulaire post job offer.
   - Appel de l’API pour post un job offer.
9. Affichage minimaliste via EJS et interaction avec l’API : **put**
   - Création page EJS pour formulaire put job offer.
   - Appel de l’API pour put un job offer avec id spécifique.
10. Affichage minimaliste via EJS et interaction avec l’API : **delete**
    - Ajout d’un bouton delete pour chaque job offer.
    - Connexion du bouton delete avec l’API pour une delete request.

## Database
### JobOffer
-  Tous les champs : type String.
- - jobTitle : required, maxlength 150
- - company : required, maxlength 150
- - website : required, maxlength 500
- - contactName : maxlength 150
- - contactEmail : maxlength 150, lowercase
- - contactPhone : maxlength 50
- - contactAddress : maxlength 250
- - origin : required, maxlength 100
- - status : required, maxlength 50
- - comment : maxlenght 500

### User

email : type String, required, unique, lowercase
password : type String, required, minlength 6, maxlength 25
