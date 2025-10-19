// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importe les styles globaux (y compris Tailwind)
import './styles/index.css';

// Importe le composant principal de l'application
import App from './App';

// Trouve l'élément HTML racine dans public/index.html
const rootElement = document.getElementById('root');

// Crée la racine React pour le rendu concurrent
const root = ReactDOM.createRoot(rootElement);

// Rend le composant App à l'intérieur de la racine
// React.StrictMode active des vérifications supplémentaires en développement
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si vous voulez mesurer les performances (optionnel)
// import reportWebVitals from './reportWebVitals';
// reportWebVitals(console.log);
