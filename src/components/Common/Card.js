// src/components/Common/Card.js
import React, { useState, useEffect, useRef } from 'react';

/**
 * Carte générique réutilisable.
 * Correction accessibilité : utilise un bouton stylisé si onClick mais pas linkText.
 * Utilise les couleurs centralisées du thème.
 * @param {object} props - Props du composant.
 * @param {string} [props.icon] - Classe Font Awesome pour l'icône.
 * @param {string} props.title - Titre de la carte.
 * @param {string} props.description - Texte descriptif.
 * @param {string} [props.linkText] - Texte du lien (si présent).
 * @param {function} [props.onClick] - Fonction à exécuter au clic (sur la carte ou le lien).
 * @param {number} [props.delay=0] - Délai pour l'animation d'apparition (en secondes).
 */
function Card({ icon, title, description, linkText, onClick, delay = 0 }) {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Effet pour observer l'entrée de la carte dans le viewport
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target); // Observer une seule fois
            }
        }, { threshold: 0.1 }); // Déclenche quand 10% est visible

        const currentRef = cardRef.current;
        if (currentRef) observer.observe(currentRef);

        // Nettoyage de l'observer
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []); // S'exécute une seule fois

    // Classes Tailwind pour le style de la carte
    const cardClasses = `bg-[#ebebfa] dark:bg-gray-800/50 rounded-xl p-6 md:p-8 shadow-lg transition-all duration-500 ease-out border border-gray-200 dark:border-gray-700 hover:translate-y-[-5px] hover:shadow-xl relative overflow-hidden group ${onClick ? 'cursor-pointer' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`; // Ajout cursor-pointer si cliquable

    // Gestionnaire de clic (pour la carte entière ou le lien)
    const handleInteraction = (e) => {
        if (onClick) {
            e.preventDefault(); // Empêche le comportement par défaut même pour un bouton si nécessaire
            onClick();
        }
    };

    // Utilise un bouton si la carte est cliquable mais n'a pas de texte de lien explicite
    const CardElement = (onClick && !linkText) ? 'button' : 'div';
    // Si c'est un bouton, on met le onClick dessus, sinon sur le lien <a> s'il existe
    const cardElementOnClick = (CardElement === 'button') ? handleInteraction : undefined;
    const linkOnClick = (CardElement === 'div' && linkText && onClick) ? handleInteraction : undefined;


    return (
        <CardElement
            ref={cardRef}
            className={cardClasses}
            style={{ transitionDelay: `${delay}s` }} // Applique le délai d'animation
            onClick={cardElementOnClick}
            // Ajout d'attributs pour l'accessibilité si c'est un bouton
            role={CardElement === 'button' ? 'button' : undefined}
            tabIndex={onClick && !linkText ? 0 : undefined} // Focusable si bouton
        >
            {/* Effets visuels */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 dark:from-primary-dark/0 dark:via-primary-dark/0 dark:to-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark transition-all duration-300 group-hover:h-2"></div>

            {/* Contenu */}
            <div className="relative z-10">
                {icon && <div className="text-4xl mb-6 text-primary dark:text-primary-dark"><i className={icon}></i></div>}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100 relative pb-2">
                    {title}
                    <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark"></span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{description}</p>
                {linkText && (
                    // Si un lien texte existe, on utilise <a> mais le onClick est géré
                    // On ajoute un href valide (même symbolique) pour l'accessibilité
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid -- onClick gère la navigation/action, href est symbolique
                    <a
                        href={onClick ? "#" : (linkText.startsWith('http') ? linkText : '#')} // href symbolique si cliquable, sinon pas de href
                        onClick={linkOnClick}
                        className="text-primary dark:text-primary-dark font-medium inline-block mt-4 group-hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-dark rounded px-1" // Ajout style focus
                        // Si pas de onClick, c'est un lien purement visuel (rarement le cas)
                        role={onClick ? "button" : undefined} // Rôle bouton si cliquable
                        tabIndex={onClick ? 0 : undefined} // Focusable si cliquable
                    >
                        {linkText} <i className="fas fa-arrow-right ml-1 text-xs transform transition-transform duration-300 group-hover:translate-x-1"></i>
                    </a>
                )}
            </div>
        </CardElement>
    );
}

export default Card;
