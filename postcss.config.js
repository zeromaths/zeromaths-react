// postcss.config.js
// Fichier de configuration pour PostCSS, utilisé par Tailwind CSS.
// Ce fichier est généralement standard pour les projets Create React App avec Tailwind.
module.exports = {
  plugins: {
    tailwindcss: {}, // Active le plugin Tailwind CSS
    autoprefixer: {}, // Ajoute automatiquement les préfixes vendeurs (-webkit-, -moz-, etc.) aux règles CSS pour la compatibilité navigateur
  },
}
