// src/pages/GamesPage.js
import React, { useState, useCallback } from 'react';
// Import des composants réutilisables
import GlassTitle from '../components/Common/GlassTitle'; // Ajustez les chemins
import HomeBanner from '../components/Common/HomeBanner';
import GameCard from '../components/Games/GameCard';
import CalculMentalGame from '../components/Games/CalculMentalGame';
// Importez d'autres composants de jeu ici si créés (ex: FractionsGame)

/**
 * Composant pour afficher la liste des jeux d'un niveau.
 * Gère l'ouverture/fermeture des modales de jeu.
 * @param {object} props - Props reçues du composant App.
 * @param {string} props.level - Le niveau scolaire.
 * @param {Array} props.games - Tableau des objets jeux pour ce niveau.
 */
function GamesPage({ level, games }) {
    const [activeGame, setActiveGame] = useState(null); // ID du jeu actif ('calcul-mental', etc.)

    // Ouvre la modale du jeu correspondant
    const handlePlay = useCallback((gameId) => {
        if (gameId === 'calcul-mental') {
            setActiveGame(gameId);
        } else {
            console.warn(`Tentative de lancement du jeu non implémenté: ${gameId}`);
            // Afficher une notification plus discrète serait mieux
            alert('Ce jeu n\'est pas encore disponible.');
        }
        // Ajoutez des 'else if' ici pour d'autres jeux
        // else if (gameId === 'fractions') { setActiveGame(gameId); }
    }, []); // Pas de dépendances externes nécessaires ici

    // Ferme la modale du jeu
    const handleCloseGame = useCallback(() => {
        setActiveGame(null);
    }, []);

     // Vérifie si games est un tableau valide
     if (!Array.isArray(games)) {
        console.error(`GamesPage (${level}): 'games' prop is not a valid array.`);
        return <div className="text-center p-10 text-red-500">Erreur : Impossible de charger les jeux pour le niveau {level}.</div>;
    }


    return (
        <>
            <GlassTitle title="Jeux mathématiques" subtitle="Apprendre en s'amusant" />
            <HomeBanner
                title={`Jeux mathématiques pour la ${level}`}
                text={`Découvrez notre sélection de jeux mathématiques conçus pour rendre l'apprentissage amusant et engageant. Choisissez un jeu ci-dessous et commencez à jouer dès maintenant !`}
            />
            {/* Affiche la grille des cartes de jeu */}
            <section className="game-container max-w-6xl mx-auto px-4 py-8">
                <div className="game-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {games.length > 0 ? (
                        // Boucle sur les jeux et affiche une GameCard pour chacun
                        games.map(game => (
                            <GameCard key={game.id} game={game} onPlay={handlePlay} />
                        ))
                     ) : (
                        // Message si aucun jeu n'est disponible
                        <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">Aucun jeu disponible pour cette section pour le moment.</p>
                     )}
                </div>
            </section>

            {/* Affiche la modale du jeu actif (si un jeu est actif) */}
            {activeGame === 'calcul-mental' && <CalculMentalGame onClose={handleCloseGame} />}
            {/* Ajoutez le rendu conditionnel pour d'autres jeux ici */}
            {/* {activeGame === 'fractions' && <FractionsGame onClose={handleCloseGame} />} */}
        </>
    );
}

export default GamesPage;
