// src/components/Common/CardsSection.js
import React from 'react';

/**
 * Section générique pour afficher une grille de cartes.
 * @param {object} props - Props du composant.
 * @param {Array} props.items - Le tableau de données pour les cartes.
 * @param {function} props.renderCard - La fonction qui prend un item et son index, et retourne le JSX de la carte.
 */
function CardsSection({ items, renderCard }) {
    // Vérifications des props pour éviter les erreurs
    if (!Array.isArray(items)) {
        console.error("CardsSection: La prop 'items' doit être un tableau.", items);
        return <div className="text-center text-red-500 p-4">Erreur: Données invalides pour la section de cartes.</div>;
    }
     if (typeof renderCard !== 'function') {
        console.error("CardsSection: La prop 'renderCard' doit être une fonction.", renderCard);
        return <div className="text-center text-red-500 p-4">Erreur: Fonction de rendu de carte manquante.</div>;
    }

    return (
        <section className="my-16 mx-auto max-w-6xl px-4">
            {/* Grille responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Boucle sur les items et utilise renderCard pour afficher chaque carte */}
                {items.map((item, index) => renderCard(item, index))}
            </div>
        </section>
    );
}

export default CardsSection;
