// src/components/Automatismes/AutomatismeItem.js
import React, { useState, useEffect } from 'react';

/**
 * Item cliquable pour la grille d'automatismes.
 * Affiche une question, puis la réponse au clic.
 * @param {object} props - Props du composant.
 * @param {string} props.question - La question affichée initialement.
 * @param {string|number} props.answer - La réponse affichée au clic.
 * @param {boolean} props.isResetting - Signal du parent pour réinitialiser l'état.
 * @param {function} [props.onClick] - Callback optionnel appelé quand l'état révélé change.
 */
function AutomatismeItem({ question, answer, isResetting, onClick }) {
    const [revealed, setRevealed] = useState(false);

    // Réinitialise l'état 'revealed' quand 'isResetting' devient true
    useEffect(() => {
        if (isResetting) {
            setRevealed(false);
        }
        // Ne fait rien si isResetting repasse à false, l'état local gère le clic
    }, [isResetting]);

    // Gère le clic pour révéler/cacher et notifie le parent
    const handleClick = () => {
        const newState = !revealed;
        setRevealed(newState);
        if (onClick) {
            onClick(newState); // Informe le parent si l'item est révélé ou caché
        }
    };

    return (
        <button
            onClick={handleClick}
            // Utilise les couleurs du thème pour le focus et les couleurs de succès pour l'état révélé
            className={`automatisme-item bg-white dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-3 md:p-4 text-center cursor-pointer transition-all duration-300 text-sm md:text-base font-medium hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary dark:focus:ring-primary-dark ${
                revealed
                    ? 'bg-green-100 dark:bg-green-900/30 border-green-400 dark:border-green-600 text-green-800 dark:text-green-300 font-bold' // Couleurs de succès fixes
                    : 'text-gray-700 dark:text-gray-300'
            }`}
            aria-pressed={revealed} // Indique l'état pour l'accessibilité
        >
            {revealed ? answer : question}
        </button>
    );
}

export default AutomatismeItem;
