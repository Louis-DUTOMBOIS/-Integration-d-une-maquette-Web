# -Integration-d-une-maquette-Web

<h3>Création d'un site web en HTML/CSS/JAVASCRIPT à partir d'un visuel donné de part une maquette faite sur Figma donné par Lemon Interactive</h2>

<h1>Les Fichiers</h1>

<p>- index.html : Ficher HTML gérant la mise en page de la page principale du site</p>
<p>- index.css : Fichier CSS gérant le style de la page principale du site</p>
<p>- carousel.js : Fichier JavaScript gérant le carrousel de la section 4</p>
<p>- scroll.js : Fichier JavaScript gérant le scroll de la section 2 dans le format mobile</p>

<h1>Les choix de conception</h1>
<h2>La barre de navigation</h2>

![Capture d'écran 2023-11-30 235924](https://github.com/Mizorami/-Integration-d-une-maquette-Web/assets/151955277/25418804-506e-4e74-87f5-729ed43b5aa4)

<p>Afin de réaliser la barre de navigation ci-dessus, j'ai utilser une balise header, pour préciser que cette barre de navigation commence le site et pour assurer un bon référencement du site, ainsi qu'une balise nav qui va contenir les éléments composant la barre de navigation. Afin de contenir le logo du site et les composants présent dans la partie droite du site j'ai fait le choix d'utiliser une balise div. Pour les liens j'ai choisi d'utiliser la balise ul pour contenir les liens et la balise a pour les liens. Pour la partie droite de la barre de navigation j'ai utliser une balise a pour le "login", une balise button pour le boutton "Register" et un svg pour faire la loupe. Les choix de mes balise vise à assurer un bon référencement du site. Afin de me retrouver dans mon css presque chaque balise posséde une classe portant un nom bien représentatif la où il y en a besoin.</p>

<h2>La section 1</h2>

![Capture d'écran 2023-12-01 002825](https://github.com/Mizorami/-Integration-d-une-maquette-Web/assets/151955277/9ac027d0-eade-433c-959d-164a9a942f01)

<p>Afin de réaliser la section 1 (voir image ci-dessus), j'ai utilser une balise section pour contenir tout les éléments présents. Chaque groupe d'élément est contenue dans une balise div pour placer plus facilement sur la page les différents éléments. Chaque texte est mis dans une balise de texte comme h1 ou p afin de faire le référencement de la page. Dans la section 1, il y a donc un div contenant le texte de la section et un div contenant l'image ainsi que 2 autres div representant les 2 boites présente sur bords de l'image. Pour la première boite contenant les multiple images sous le texte, il y 2 div, un div contenant le texte et un div contenant toute les images. Pour la deuxième boite, il y a un div contenant le svg représentant le logo en forme de bonhomme ainsi qu'une balise h2 et p contenant les différents textes. Comme pour la barre de navigation, le choix de mes balises est fait pour un côté pratique mais surtout pour assurer le bon référencement du site et chaque balise posséde une classe portant un nom bien représentatif la où il y en a besoin. </p>

<h2>La section 2</h2>

![Capture d'écran 2023-12-01 010314](https://github.com/Mizorami/-Integration-d-une-maquette-Web/assets/151955277/c6e88e1a-a713-4cdd-b6c9-75e4061143bf)

<p>Afin de réaliser la section 2 (voir image ci-dessus), j'ai utilser une balise section pour contenir tout les éléments présents. Chaque groupe d'élément est contenue dans une balise div pour placer plus facilement sur la page les différents éléments. Chaque texte est mis dans une balise de texte comme h1 ou p afin de faire le référencement de la page. Dans la section 2, il y a donc 4 div "card" contenant le texte ainsi que la boite situé en haut à gauche de chaque "card". Chaque boite contient alors une  balise h1 pour le texte réprésentant le titre de la "card", une balise p pour le texte sous le titre ainsi qu'un div contenant les svg de chaque carte. Pour la disposition et le style des différentes carte, j'ai utiliser la même classe et j'ai utiliser ":nth-child()" afin de pouvoir réaliser des disposition et des styles différents. Comme pour le reste, le choix de mes balises est fait pour un côté pratique mais surtout pour assurer le bon référencement du site et chaque balise posséde une classe portant un nom bien représentatif la où il y en a besoin. </p>

<h2>La section 3</h2>

![Capture d'écran 2023-12-01 011311](https://github.com/Mizorami/-Integration-d-une-maquette-Web/assets/151955277/68c89e51-8ebb-41d1-a016-111b49d84af4)

<p>Afin de réaliser la section 3 (voir image ci-dessus), j'ai utilser une balise section pour contenir tout les éléments présents. Chaque groupe d'élément est contenue dans une balise div pour placer plus facilement sur la page les différents éléments. Chaque texte est mis dans une balise de texte comme h1 ou p afin de faire le référencement de la page. Dans la section 3, il y a donc un div contenant le texte de cette section. Cette boite contient alors une  balise h1 pour le texte réprésentant le titre, une balise h2 pour le sous-titre et une balise p pour le texte sous le sous-titre. Il y a aussi un second div contenant le rectangle ainsi que les 2 images. Comme pour le reste, le choix de mes balises est fait pour un côté pratique mais surtout pour assurer le bon référencement du site et chaque balise posséde une classe portant un nom bien représentatif la où il y en a besoin. </p>

<h2>La section 4</h2>

![Capture d'écran 2023-12-01 011915](https://github.com/Mizorami/-Integration-d-une-maquette-Web/assets/151955277/69f9164e-93c1-4f4e-80e7-ca8e567f6192)

<p>Afin de réaliser la section 4 (voir image ci-dessus), j'ai utilser une balise section pour contenir tout les éléments présents. Chaque groupe d'élément est contenue dans une balise div pour placer plus facilement sur la page les différents éléments. Chaque texte est mis dans une balise de texte comme h1 ou p afin de faire le référencement de la page. Dans la section 4, il y a donc un div contenant le texte de cette section. Afin de faire le trait sous le texte vert j'ai utiliser un svg. Il y a aussi un second div contenant les 2 boutton (balise button) qui vont gérer le carrousel de commentaire. Le troisième div est le carrousel contenant 5 div contenant 1 titre qui est le nom et prénom (balise h1), 1 sous-titre qui est le rôle de la personne (balise h2), 1 texte (balise p) et une image qui est la photo de profil de la personne. Le carousel est donc gérer par les deux bouttons ainsi que par le fichier JavaScript "carousel.js". Comme pour le reste, le choix de mes balises est fait pour un côté pratique mais surtout pour assurer le bon référencement du site et chaque balise posséde une classe portant un nom bien représentatif la où il y en a besoin. </p>

<h2>Le footer</h2>

![Capture d'écran 2023-12-01 013006](https://github.com/Mizorami/-Integration-d-une-maquette-Web/assets/151955277/231af48c-bce0-4027-9020-fb4e3e5107d5)

<p>Afin de réaliser le footer (voir image ci-dessus), j'ai utilser la balise footer pour contenir tout les éléments présents et préciser la fin de la page (pied de page). Chaque groupe d'élément est contenue dans une balise div pour placer plus facilement sur la page les différents éléments. Chaque texte est mis dans une balise de texte comme h1 ou p afin de faire le référencement de la page. Dans le footer, il y a donc un div contenant le texte de cette section et les svg des différents réseaux sociaux. Il y a aussi un second div contenant les différents liens. Le troisième div contient un titre et une barre pour envoyer son adresse mail. Comme pour le reste, le choix de mes balises est fait pour un côté pratique mais surtout pour assurer le bon référencement du site et chaque balise posséde une classe portant un nom bien représentatif la où il y en a besoin. </p>

<h1>Création du break-point pour gérer les écrans de mobile et si la taille de la fenêtre est trop petite</h1>

<p>Afin de pour changer la partie graphique du site si on passe sur un mobile ou si la fenêtre est trop petite, j'ai utilisé un break-point. Ce break-point va alors changé certain éléments du css afin de le faire correspondre à la maquette donné. Ce break-point va alors rajouté aussi quelque éléments au html qui était en "display: none;" afin qu'il n'apparaisse pas quand on est sur autre chose qu'un mobile ou que la fenêtre est grande à l'inverse il va aussi faire disparaitre certains éléments.</p>

![Capture d'écran 2023-12-01 014819](https://github.com/Mizorami/-Integration-d-une-maquette-Web/assets/151955277/2137247e-eef2-4ddb-a8b4-a0c13c939952)

<p>Le break-point va alors changé la disposition de chaque section ainsi que du footer et du header ainsi que de leurs éléments. Il va ajouter le faite que la section 2 devient alors un slider grâce au fichier scroll.js qui va permettre de faire glisser les différents éléments de la section 2</p>

![Capture d'écran 2023-12-01 014838](https://github.com/Mizorami/-Integration-d-une-maquette-Web/assets/151955277/dcff27b4-c63c-4c91-baf8-a462bba8f24c)

<p>Il va aussi changé la barre de navigation qui va alors avoir le logo, une image de login et un menu.</p>

![Capture d'écran 2023-12-01 014855](https://github.com/Mizorami/-Integration-d-une-maquette-Web/assets/151955277/2eab70a2-2063-4143-bf93-f0a1b7e0f2b9)

<p>Afin de faire apparaitre le menu j'ai alors rajouter dans la barre de navigation une balise input qui va servir de checkbox positionner au dessus du logo du menu. Si cette checkbox caché est alors cliqué, elle va faire appraitre le menu si dessus en position fixe </p>

<h1>Résumé</h1>

<h2>La structure HTML</h2>

<p>Le fichier HTML à une structure claires, composé en diférentes sections, et utilise des balises approprié pour s'assurer du bon référencement du site</p>

<h2>Le style CSS</h2>

<p>Le fichier CSS utilise des classes bien nommé afin de retrouver plus faacilement chaque élément et pouvoir par la suite modifier plus facilement le site si besoin. Le design choisi permet de rendre le site responsive grâce au choix de media utilisé.</p>

<h2>Le JavaScript</h2>

<p>Les différents fichiers JavaScript sont ici pour permettre au site d'être dynamique pour quelques sections</p>

<h2>Responsive Design</h2>

<p>Le design du site est gérer afin de pouvoir assurer sont utilisation sur les plus petits écrans (comme les mobiles)</p>
