// src/components/Common/PlaceholderComponent.js
import React from 'react';

/**
 * Composant simple pour afficher un message "bientôt disponible".
 * @param {object} props - Props du composant.
 * @param {string} props.title - Titre à afficher pour la page placeholder.
 */
function PlaceholderComponent({ title = "Page en Construction" }) { // Ajout d'un titre par défaut
    return (
        <div className="text-center p-10 min-h-[60vh] flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">{title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Contenu bientôt disponible !</p>
            {/* Icône illustrative */}
            <div className="text-6xl mt-8 text-gray-300 dark:text-gray-600 animate-pulse"> {/* Légère animation */}
                <i className="fas fa-tools"></i>
            </div>
        </div>
    );
}

export default PlaceholderComponent;
