// src/components/Lessons/ExerciseCard.js
import React, { useState, useCallback } from 'react';
import { MathJax } from 'better-react-mathjax'; // Importer MathJax

/**
 * Carte pour afficher un exercice avec sa solution (utilise MathJax).
 * Utilise les couleurs centralisées du thème.
 * @param {object} props - Props du composant.
 * @param {object} props.exercise - L'objet contenant les données de l'exercice.
 */
function ExerciseCard({ exercise }) {
    const [showSolution, setShowSolution] = useState(false);
    const toggleSolution = () => setShowSolution(!showSolution);

    // Génère les points de difficulté en utilisant les couleurs du thème
    const difficultyDots = Array.from({ length: 3 }, (_, i) => (
        <div
            key={i}
            className={`w-3 h-3 rounded-full ml-1 ${
                i < exercise.difficulty
                    ? 'bg-primary dark:bg-primary-dark' // Couleur thème
                    : 'bg-gray-300 dark:bg-gray-600'
            }`}
        ></div>
    ));

    // Le rendu LaTeX est géré par MathJaxContext dans App.js et les composants MathJax ici

    return (
        <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 mb-8 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
            {/* En-tête de la carte */}
            <div className="flex justify-between items-center mb-4 pb-2 border-b-2 border-primary dark:border-primary-dark"> {/* Couleur thème */}
                <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100">{exercise.title}</h3>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <span className="mr-2">Difficulté :</span>{difficultyDots}
                </div>
            </div>

            {/* Contenu de l'exercice (avec MathJax) */}
            <MathJax dynamic hideUntilTypeset="first">
                <div
                    className="exercise-content mb-6 text-gray-700 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: exercise.content || '<p>Énoncé manquant.</p>' }}
                />
            </MathJax>

            {/* Bouton Voir/Masquer Solution (pourrait utiliser le composant Button) */}
            <button
                onClick={toggleSolution}
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark text-white font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-primary-dark" // Couleurs thème
                aria-expanded={showSolution}
                aria-controls={`solution-${exercise.id}`}
            >
                <i className={`fas ${showSolution ? 'fa-eye-slash' : 'fa-eye'} mr-2`} aria-hidden="true"></i>
                {showSolution ? 'Masquer la solution' : 'Voir la solution'}
            </button>

            {/* Conteneur de la solution (avec MathJax) */}
            <div
                 id={`solution-${exercise.id}`}
                 className={`solution-container transition-all duration-500 ease-in-out overflow-hidden ${showSolution ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`} // Animation CSS
                 aria-hidden={!showSolution}
            >
                {/* Le contenu est rendu seulement si showSolution est true */}
                {showSolution && (
                    <MathJax dynamic hideUntilTypeset="first">
                        <div
                            className="solution-content p-4 bg-blue-50 dark:bg-orange-900/20 border-l-4 border-primary dark:border-primary-dark rounded-r-lg text-gray-700 dark:text-gray-300" // Couleurs thème pour fond/bordure
                            dangerouslySetInnerHTML={{ __html: exercise.solution || '<p>Solution non disponible.</p>' }}
                        />
                    </MathJax>
                )}
            </div>
        </div>
    );
}

export default ExerciseCard;
