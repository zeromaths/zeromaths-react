// src/components/Layout/BackToTopButton.js
import React, { useState, useEffect, useCallback } from 'react';

/**
 * Bouton qui apparaît pour remonter en haut de la page.
 * Utilise les couleurs du thème et l'icône Material Icons.
 */
function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Fonction pour vérifier la position de défilement
    const toggleVisibility = useCallback(() => {
        // Affiche le bouton si on a défilé de plus de 300px
        setIsVisible(window.scrollY > 300);
    }, []); // Pas de dépendances, la fonction ne change pas

    // Fonction pour remonter en haut avec une animation douce
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Ajoute et retire l'écouteur de scroll au montage/démontage
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility, { passive: true }); // Utilise passive pour la performance
        toggleVisibility(); // Vérifie l'état initial au montage
        // Nettoyage de l'écouteur au démontage du composant
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [toggleVisibility]); // S'exécute si toggleVisibility change (ce qui n'arrive pas ici)

    return (
        <button
            id="backToTop"
            onClick={scrollToTop}
            // Applique les couleurs du thème et gère la visibilité/animation
            // Note: les couleurs primaires/secondaires sont définies dans tailwind.config.js
            className={`fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark text-white text-2xl cursor-pointer border-none flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out z-[999] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none' // Cache et désactive si non visible
            } hover:translate-y-[-3px] hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark`}
            aria-label="Remonter en haut de la page"
            tabIndex={isVisible ? 0 : -1} // Focusable seulement si visible
        >
            {/* Icône Material Icons */}
            <span className="material-icons text-3xl" aria-hidden="true"> {/* Ajustement taille icône */}
                keyboard_arrow_up
            </span>
        </button>
    );
}

export default BackToTopButton;
