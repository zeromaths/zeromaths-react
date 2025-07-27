// Arborescence de ZeromathsReact: au 8 mai 25 19H//

zeromaths-react/            <-- Dossier Racine du Projet
├── node_modules/           <-- Dépendances (géré par npm) - Ne pas toucher
├── public/                 <-- Fichiers Statiques
│   ├── index.html          <-- Template HTML principal
│   ├── favicon.ico         <-- (À fournir)
│   ├── logo192.png         (Optionnel)
│   ├── logo512.png         (Optionnel)
│   ├── manifest.json       (Optionnel)
│   ├── robots.txt
│   └── lessons/            <-- ★★★ PDF publics ici ★★★
│       ├── 6eme/
│       │   └── chapitre1.pdf
│       │   └── ...
│       ├── 5eme/
│       └── ...
├── src/                    <-- Code Source React
│   ├── assets/             <-- Ressources importées (images, icônes...)
│   │   └── images/         (Vide pour l'instant)
│   ├── components/         <-- Composants Réutilisables
│   │   ├── Automatismes/
│   │   │   ├── AutomatismeGrid.js
│   │   │   └── AutomatismeItem.js
│   │   ├── Common/
│   │   │   ├── Button.js   <-- ★★★ Composant Bouton Centralisé ★★★
│   │   │   ├── Card.js
│   │   │   ├── CardsSection.js
│   │   │   ├── ContactForm.js
│   │   │   ├── GlassTitle.js
│   │   │   ├── HomeBanner.js
│   │   │   ├── PdfViewer.js
│   │   │   └── PlaceholderComponent.js
│   │   ├── Games/
│   │   │   ├── CalculMentalGame.js
│   │   │   └── GameCard.js
│   │   ├── Layout/
│   │   │   ├── BackToTopButton.js
│   │   │   ├── DarkModeToggle.js
│   │   │   ├── Dropdown.js
│   │   │   ├── Footer.js
│   │   │   └── Header.js
│   │   └── Lessons/
│   │       └── ExerciseCard.js
│   ├── data/               <-- Données Statiques
│   │   ├── exerciseData.js
│   │   ├── gameData.js
│   │   └── lessonData.js
│   ├── pages/              <-- Composants de Page Complète
│   │   ├── AutomatismesPage.js
│   │   ├── ExercisesPage.js
│   │   ├── GamesPage.js
│   │   ├── HomePage.js
│   │   ├── LessonDetailPage.js
│   │   └── LessonsPage.js
│   │   └── ... (Ajouter ici les fichiers pour AboutPage, CoursPage, etc.)
│   ├── App.js              <-- ★★★ Point d'assemblage principal ★★★
│   ├── index.css           <-- Styles globaux & Tailwind
│   └── index.js            <-- Point d'entrée React DOM
│
├── .gitignore
├── package.json
├── package-lock.json       (Généré par npm)
├── postcss.config.js
├── README.md
└── tailwind.config.js