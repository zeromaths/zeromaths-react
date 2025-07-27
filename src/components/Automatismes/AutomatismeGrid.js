// src/components/Automatismes/AutomatismeGrid.js
import React from 'react';
import AutomatismeItem from './AutomatismeItem'; // Importer l'item depuis le même dossier

/**
 * Grille d'automatismes pour une catégorie donnée.
 * Affiche une grille d'items cliquables (questions/réponses).
 * @param {object} props - Props du composant.
 * @param {string} props.title - Titre de la grille (ex: "Tables de multiplication").
 * @param {string} props.description - Courte description de la grille.
 * @param {Array<object>} props.items - Tableau des items { question, answer } à afficher.
 * @param {boolean} props.resetSignal - Signal booléen venant du parent pour réinitialiser l'état des items.
 */
function AutomatismeGrid({ title, description, items, resetSignal }) {

    // Fonction callback passée à chaque AutomatismeItem.
    // Pourrait être utilisée pour suivre le nombre d'items révélés, si nécessaire.
    const handleItemToggle = (index, isRevealed) => {
        // console.log(`Item ${index} in grid "${title}" is now ${isRevealed ? 'revealed' : 'hidden'}`);
        // Logique supplémentaire possible ici (ex: compter les réponses vues).
    };

    // Vérification de base pour s'assurer que 'items' est bien un tableau
    if (!Array.isArray(items)) {
        console.error(`AutomatismeGrid (${title}): La prop 'items' doit être un tableau.`);
        return <div className="text-red-500 p-4">Erreur: Données invalides pour la grille "{title}".</div>;
    }

    return (
        <div className="automatisme-card bg-white dark:bg-gray-800/50 rounded-xl p-6 mb-8 shadow-lg border border-gray-200 dark:border-gray-700">
            {/* Titre de la grille avec couleur thème */}
            <h3 className="automatisme-title text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 pb-2 border-b-2 border-primary dark:border-primary-dark">
                {title}
            </h3>
            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">{description}</p>
            {/* Grille des items */}
            <div className="automatisme-grid grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {items.map((item, index) => (
                    <AutomatismeItem
                        // Utilisation d'une clé plus robuste incluant l'index et la question
                        key={`${title}-item-${index}-${item.question}`}
                        question={item.question}
                        answer={item.answer}
                        isResetting={resetSignal} // Passe le signal de reset à chaque item
                        onClick={(isRevealed) => handleItemToggle(index, isRevealed)} // Passe la fonction callback
                    />
                ))}
            </div>
        </div>
    );
}

export default AutomatismeGrid;
