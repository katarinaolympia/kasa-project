# kasa-project

Développement d'une plateforme de location d'hébergements avec React.

Outils :
- Create React App
- React Router

Contraintes techniques

React Router :
- Les paramètres des routes sont gérés par React Router dans l'URL
pour récupérer les informations de chaque logement
- Il existe une page par route
- La page 404 est renvoyée pour chaque route inexistante, ou si une
valeur présente dans l’URL ne fait pas partie des données
renseignées
- La logique du routeur est réunie dans un seul fichier

React :
- Découpage en composants modulaires et réutilisables 
- Un composant par fichier 
- Structure logique des différents fichiers 
- Utilisation des props entre les composants 
- Utilisation du state dans les composants quand c'est nécessaire
- Gestion des événements 
- Gestion des listes

Contraintes fonctionnelles

Pour le défilement des photos dans la galerie (composant Gallery) :
- Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image. Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image. 
- La galerie doit toujours rester de la même hauteur. Les images seront donc coupées et centrées dans le cadre de l’image.
- Collapse : Par défaut, les Collapse sont fermés à l'initialisation de la page. Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer. Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

____________________________________________________________________________________________________________________________________________

Accomodation rental platform implemented with React.

Tools :
- Create React App
- React Router

Technical constraints

React Router:
- Routes parameters are managed by React Router in the URL to retrieve information for each slot
- There is one page per route
- The 404 page is returned for each non-existent route, or if a value present in the URL is not part of the data entered
- The logic of the router is united in a single file

React:
- Sliced into modular and reusable components
- One component per file
- Logical structure of the different files
- Using props between components
- Using state in components when necessary
- Handling events
- Lists & keys

Functional constraints

For scrolling photos in the gallery (Gallery component):
- If the user is at the first image and clicks on "previous image", the gallery displays the last image. Conversely, when the image displayed is the last in the gallery, if the user clicks on "next image", the gallery displays the first image.
- The gallery must always remain the same height. The images will therefore be cropped and centered within the image frame.
- Collapse: By default, Collapses are closed on page initialization. If the Collapse is open, the user's click closes it. Conversely, if the Collapse is closed, a click opens it.
