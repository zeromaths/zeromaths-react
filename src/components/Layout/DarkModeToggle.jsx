// src/components/Layout/DarkModeToggle.js
import React from 'react';

/**
 * Bouton pour basculer le mode sombre.
 * Utilise les icônes Google Material Icons.
 * @param {object} props - Props du composant.
 * @param {boolean} props.isDarkMode - État actuel du mode sombre.
 * @param {function} props.toggleDarkMode - Fonction pour basculer le mode.
 */
function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
    return (
        <button
            onClick={toggleDarkMode}
            // La classe 'material-icons' active la police d'icônes
            // Le contenu textuel ('light_mode' ou 'dark_mode') est le nom de l'icône
            className="material-icons fixed top-20 left-4 z-50 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label={isDarkMode ? "Activer le mode clair" : "Activer le mode sombre"}
            aria-pressed={isDarkMode} // Indique l'état actuel
        >
            {/* Affiche l'icône correspondante */}
            {isDarkMode ? 'light_mode' : 'dark_mode'}
        </button>
    );
}

export default DarkModeToggle;
