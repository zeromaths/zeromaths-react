// src/components/Layout/Header.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Dropdown from './Dropdown'; // Importer Dropdown depuis le même dossier

/**
 * En-tête principal de l'application.
 * Affiche le logo, la navigation desktop (avec dropdowns) et le bouton burger mobile.
 * Gère l'effet de disparition au scroll sur mobile.
 * Utilise les couleurs centralisées du thème.
 * @param {object} props - Props reçues du composant App.
 * @param {function} props.setActivePage - Fonction pour changer la page active.
 * @param {string} props.currentPage - La page currently active.
 * @param {boolean} props.isMobileMenuOpen - Indique si le menu mobile est ouvert (pour l'icône burger).
 * @param {function} props.toggleMobileMenu - Fonction pour ouvrir/fermer le menu mobile.
 * @param {Array} props.navLinks - Tableau définissant la structure de navigation.
 */
function Header({ setActivePage, currentPage, isMobileMenuOpen, toggleMobileMenu, navLinks }) {
    const [isScrolled, setIsScrolled] = useState(false); // Pour ajuster le padding/style au scroll
    const [headerVisible, setHeaderVisible] = useState(true); // Pour masquer/afficher au scroll mobile
    const lastScrollY = useRef(0); // Stocke la position de scroll précédente
    const screenWidthThreshold = 1024; // Breakpoint 'lg' de Tailwind

    // Gère la visibilité et le style au scroll
    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        const isMobile = window.innerWidth < screenWidthThreshold;

        // Met à jour l'état 'scrolled' pour le style (ex: padding réduit)
        setIsScrolled(currentScrollY > 50);

        // Gère la visibilité uniquement sur les écrans plus petits que 'lg'
        if (isMobile) {
            // Cache si on scroll vers le bas et qu'on a dépassé un seuil
            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setHeaderVisible(false);
            }
            // Affiche si on scroll vers le haut ou si on est proche du haut
            else if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
                setHeaderVisible(true);
            }
        } else {
            // Assure la visibilité sur les écrans larges
            setHeaderVisible(true);
        }
        // Met à jour la dernière position de scroll connue
        lastScrollY.current = currentScrollY;
    }, []); // Pas de dépendances externes nécessaires

    // Ajoute et retire l'écouteur d'événement de scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Vérifie l'état initial au montage
        // Nettoyage de l'écouteur au démontage du composant
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Fonction simplifiée pour la navigation depuis les liens directs du header
    const handleNavClick = (page) => {
        setActivePage(page);
        // La fermeture du menu mobile est gérée dans setActivePage dans App.js
    };

    // Vérifie si navLinks est bien un tableau avant de l'utiliser
    if (!Array.isArray(navLinks)) {
        console.error("Header: navLinks prop is not an array!");
        return null; // Ou retourner un header de base/message d'erreur
    }

    return (
        // Applique la transition et la translation pour l'effet de masquage/affichage
        <header className={`fixed top-0 left-0 w-full z-[999] transition-transform duration-300 ease-in-out ${headerVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            {/* Barre de navigation principale */}
            <nav className={`flex items-center justify-between px-4 lg:px-8 bg-black/85 dark:bg-gray-950/85 backdrop-blur-md transition-all duration-300 ease-in-out shadow-md ${isScrolled ? 'py-2' : 'py-4'}`}>
                {/* Logo cliquable avec couleurs thème */}
                <a
                    href="#home"
                    onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                    className="text-xl lg:text-2xl font-extrabold cursor-pointer bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent" // Couleurs thème
                >
                    ZeroMaths
                </a>

                {/* Navigation Desktop (masquée sur < lg) */}
                <ul className="hidden lg:flex items-center space-x-5 xl:space-x-6 text-sm">
                    {/* Boucle sur les liens définis dans App.js */}
                    {navLinks.map(link => (
                        link.isDropdown ? (
                            // Si c'est un dropdown, utilise le composant Dropdown
                            <Dropdown
                                key={link.label} // Utilise le label comme clé (ou mieux, un ID unique si disponible)
                                label={link.label}
                                icon={link.icon}
                                items={link.items}
                                setActivePage={setActivePage}
                                currentPage={currentPage}
                                // isMobileMenuOpen n'est pas pertinent ici
                            />
                        ) : (
                            // Sinon, affiche un lien direct
                            <li key={link.page}>
                                <a
                                    href={link.href}
                                    onClick={(e) => {
                                        // Gère le clic spécial pour Contact ou la navigation normale
                                        if (link.onClick) { link.onClick(e); }
                                        else { e.preventDefault(); handleNavClick(link.page); }
                                    }}
                                    // Applique les styles actifs/hover et l'effet de soulignement
                                    // Utilise les couleurs centralisées
                                    className={`relative flex items-center py-1 px-1 transition-colors duration-300 rounded-md ${
                                        currentPage === link.page ? 'text-primary dark:text-primary-dark font-semibold' : 'text-white hover:text-primary dark:hover:text-primary-dark hover:bg-white/10'
                                    } after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}
                                    aria-current={currentPage === link.page ? 'page' : undefined}
                                >
                                    {link.label}
                                </a>
                            </li>
                        )
                    ))}
                </ul>

                {/* Bouton Burger (affiché sur < lg) */}
                <div className="lg:hidden z-[1001]"> {/* z-index pour rester cliquable même si header translate */}
                    <button
                        onClick={toggleMobileMenu} // Appelle la fonction du parent (App.js)
                        className={`burger p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark rounded ${isMobileMenuOpen ? 'open' : ''}`} // La classe 'open' anime le burger
                        aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu" // Lie au panneau mobile
                    >
                        {/* Les 3 barres du burger (stylisées dans index.css) */}
                        <div className="w-6 h-0.5 bg-white rounded transition-all duration-300 ease-in-out"></div>
                        <div className="w-6 h-0.5 bg-white rounded my-1.5 transition-all duration-300 ease-in-out"></div>
                        <div className="w-6 h-0.5 bg-white rounded transition-all duration-300 ease-in-out"></div>
                    </button>
                </div>
            </nav>
            {/* Note: L'overlay du menu mobile (<div id="mobile-menu">) est rendu dans App.js */}
            {/* pour ne pas être affecté par le translate-y de ce header */}
        </header>
    );
}

export default Header;
