// src/components/Games/GameCard.js
import React from 'react';

/**
 * Carte pour afficher un jeu disponible ou à venir.
 * Utilise les couleurs centralisées du thème.
 * @param {object} props - Props du composant.
 * @param {object} props.game - L'objet contenant les informations du jeu.
 * @param {function} props.onPlay - Fonction à appeler lorsque l'utilisateur clique sur "Jouer".
 */
function GameCard({ game, onPlay }) {
    // Génère les points de difficulté en utilisant les couleurs du thème
    const difficultyDots = Array.from({ length: 3 }, (_, i) => (
        <div
            key={i}
            className={`w-2 h-2 rounded-full mr-1 ${
                i < game.difficulty
                    ? 'bg-primary dark:bg-primary-dark' // Utilise les couleurs primaires
                    : 'bg-gray-300 dark:bg-gray-600'
            }`}
        ></div>
    ));

    // Gestionnaire de clic pour le bouton "Jouer"
    const handlePlayClick = (e) => {
        e.preventDefault();
        if (game.available) {
            onPlay(game.id); // Appelle la fonction du parent
        } else {
            // Peut être amélioré avec une notification non bloquante
            alert('Ce jeu sera bientôt disponible !');
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full group">
            {/* Image du jeu */}
            <div className="game-image h-48 overflow-hidden relative">
                <img
                    src={game.imageUrl}
                    alt={`Illustration pour le jeu ${game.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src="https://placehold.co/400x200/e0e0e0/757575?text=Image"; // Placeholder
                        e.target.alt = "Image indisponible";
                    }}
                    loading="lazy" // Chargement différé
                />
                 {/* Overlay si non disponible */}
                 {!game.available && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold bg-gray-700/80 px-3 py-1 rounded">Bientôt !</span>
                    </div>
                 )}
            </div>
            {/* Contenu textuel de la carte */}
            <div className="game-content p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{game.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{game.description}</p>
                {/* Pied de carte : Difficulté et Bouton Jouer */}
                <div className="game-footer flex justify-between items-center mt-auto">
                    {/* Indicateur de difficulté */}
                    <div className="difficulty flex items-center" aria-label={`Difficulté ${game.difficulty} sur 3`}>
                        <span className="difficulty-label text-xs text-gray-500 dark:text-gray-400 mr-2" aria-hidden="true">Difficulté :</span>
                        <div className="difficulty-dots flex" aria-hidden="true">
                            {difficultyDots}
                        </div>
                    </div>
                    {/* Bouton Jouer (pourrait utiliser le composant Button si créé) */}
                    <button
                        onClick={handlePlayClick}
                        disabled={!game.available}
                        className={`play-button inline-flex items-center px-4 py-1.5 rounded-md text-sm font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                            game.available
                                ? 'text-white bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark dark:from-primary-dark dark:to-secondary-dark dark:hover:from-primary-dark-dark dark:hover:to-secondary-dark-dark focus:ring-primary dark:focus:ring-primary-dark' // Utilise les couleurs du thème
                                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                        }`}
                        aria-disabled={!game.available}
                    >
                        <i className="fas fa-play mr-1.5 text-xs" aria-hidden="true"></i> Jouer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GameCard;
