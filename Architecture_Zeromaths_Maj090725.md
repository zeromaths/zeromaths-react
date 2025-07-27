zeromaths-react/            <-- 📁 Dossier Racine du Projet
├── node_modules/           <-- (Géré par npm) Dépendances du projet
├── public/                 <-- 📄 Fichiers Statiques (accessibles directement)
│   ├── index.html          <--    Le template HTML principal de l'application
│   ├── favicon.ico         <--    Votre icône de navigateur
│   └── lessons/            <--    ★★★ VOS LEÇONS PDF VONT ICI ★★★
│       ├── 6eme/
│       ├── 5eme/
│       ├── 4eme/
│       └── 3eme/
│
├── src/                    <-- 💻 Code Source de l'Application React
│   ├── assets/             <--    Ressources importées (images, icônes SVG...)
│   │   └── images/
│   ├── components/         <--    🧩 Composants React Réutilisables
│   │   ├── Automatismes/   <--       Composants pour la page des automatismes
│   │   ├── Chatbot/        <--       (Futur) Composants pour le chatbot
│   │   ├── Common/         <--       Composants génériques (boutons, cartes...)
│   │   ├── Games/          <--       Composants pour les jeux
│   │   ├── Geometry/       <--       (Futur) Composants pour JSXGraph
│   │   ├── Layout/         <--       Composants de mise en page (Header, Footer...)
│   │   └── Lessons/        <--       Composants spécifiques aux leçons
│   │
│   ├── data/               <--    📚 Données de l'Application
│   │   ├── exerciseData.js <--       ★★★ VOS EXERCICES ET QUIZ VONT ICI ★★★
│   │   ├── gameData.js     <--       ★★★ VOS DONNÉES DE JEUX VONT ICI ★★★
│   │   └── lessonData.js   <--       ★★★ VOS LEÇONS HTML VONT ICI ★★★
│   │
│   ├── pages/              <--    📄 Composants de Page Complète
│   │   ├── AutomatismesPage.js
│   │   ├── ExercisesPage.js
│   │   ├── GamesPage.js
│   │   ├── HomePage.js
│   │   ├── LessonDetailPage.js
│   │   └── LessonsPage.js
│   │
│   ├── App.js              <--    Le composant principal qui assemble tout
│   ├── index.css           <--    Vos styles CSS globaux et directives Tailwind
│   └── index.js            <--    Le point d'entrée de l'application React
│
├── .gitignore              <-- Fichier pour ignorer certains fichiers de Git
├── package.json            <-- Liste les dépendances et les scripts du projet
├── tailwind.config.js      <-- Fichier de configuration de Tailwind CSS
└── ... (autres fichiers de configuration comme postcss.config.js)
