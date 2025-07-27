// src/components/Layout/Dropdown.js
import React, { useState, useEffect, useRef } from 'react';

/**
 * Menu déroulant pour la navigation desktop.
 * Utilise un bouton pour le déclencheur principal pour l'accessibilité.
 * Utilise les couleurs centralisées du thème.
 * Correction accessibilité: Ajout de eslint-disable pour les liens internes gérés par JS.
 * @param {object} props - Props du composant.
 * @param {string} props.label - Texte du lien principal (ex: "6ème").
 * @param {string} [props.icon] - Classe Font Awesome pour une icône optionnelle.
 * @param {Array<object>} props.items - Tableau d'objets pour les sous-liens [{ label, page }].
 * @param {function} props.setActivePage - Fonction pour changer la page active.
 * @param {string} props.currentPage - La page actuellement active.
 */
function Dropdown({ label, icon, items, setActivePage, currentPage }) {
    const [isOpen, setIsOpen] = useState(false); // État interne pour l'ouverture/fermeture
    const dropdownRef = useRef(null); // Référence à l'élément li principal
    let leaveTimeout = useRef(null); // Pour gérer le délai avant fermeture au survol

    // Ouvre le menu quand la souris entre sur l'élément li
    const handleMouseEnter = () => {
        clearTimeout(leaveTimeout.current); // Annule une éventuelle fermeture programmée
        setIsOpen(true);
    };

    // Ferme le menu après un délai quand la souris quitte l'élément li
    const handleMouseLeave = () => {
        // Délai pour permettre à l'utilisateur de déplacer la souris sur le sous-menu
        leaveTimeout.current = setTimeout(() => {
            setIsOpen(false);
        }, 150); // 150ms de délai
    };

    // Gère le clic sur un élément du sous-menu
    const handleItemClick = (page) => {
        setActivePage(page); // Change la page
        setIsOpen(false); // Ferme le menu
    };

     // Nettoyage du timeout si le composant est démonté
     useEffect(() => {
        return () => clearTimeout(leaveTimeout.current);
     }, []);

    // Détermine si un lien dans ce dropdown est actif ou correspond au niveau actuel
    const isLevelActive = items.some(item => currentPage === item.page || currentPage.startsWith(item.page.split('-')[0] + '-'));

    return (
        // Élément li parent qui écoute les événements de survol
        <li
            className="relative dropdown" // Classe pour ciblage CSS si besoin
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Utilisation d'un bouton pour le déclencheur principal pour l'accessibilité */}
            <button
                // Ouvre/ferme aussi au clic (comportement optionnel mais courant)
                onClick={() => setIsOpen(prev => !prev)}
                // Applique les styles de lien et l'effet de soulignement au survol/focus
                className={`dropdown-toggle flex items-center py-2 transition-colors duration-300 relative group after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                    isLevelActive ? 'text-primary dark:text-primary-dark' : 'text-white hover:text-primary dark:hover:text-primary-dark'
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark rounded-sm`} // Style focus
                aria-haspopup="true" // Indique qu'il y a un sous-menu
                aria-expanded={isOpen} // Indique si le sous-menu est visible
            >
                {icon && <i className={`${icon} mr-2`} aria-hidden="true"></i>}
                {label}
                {/* Pas de chevron ici */}
            </button>
            {/* Sous-menu déroulant */}
            <ul
                className={`dropdown-menu absolute left-0 mt-0 pt-2 w-48 bg-black/95 dark:bg-gray-900/95 backdrop-blur-md rounded-md shadow-lg py-2 z-50 transition-all duration-150 ease-out origin-top ${
                    // Contrôle l'affichage sur desktop (>=md) basé sur l'état isOpen
                    isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2 pointer-events-none'
                }`}
                role="menu" // Sémantique pour l'accessibilité
            >
                {items.map((item) => {
                    const isActive = currentPage === item.page;
                    return (
                        <li key={item.page} role="none">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid -- Navigation handled by onClick */}
                            <a
                                href={`#${item.page}`} // href symbolique car navigation gérée par JS
                                onClick={(e) => { e.preventDefault(); handleItemClick(item.page); }}
                                // Applique les styles pour les items actifs/hover avec couleurs thème
                                className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                    isActive ? 'text-primary dark:text-primary-dark bg-white/10 dark:bg-white/5 border-l-2 border-primary dark:border-primary-dark font-semibold'
                                           : 'text-gray-300 hover:bg-white/10 dark:hover:bg-white/5 hover:text-primary dark:hover:text-primary-dark'
                                }`}
                                role="menuitem"
                                aria-current={isActive ? 'page' : undefined} // Indique l'élément actif
                            >
                                {item.label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </li>
    );
}

export default Dropdown;
