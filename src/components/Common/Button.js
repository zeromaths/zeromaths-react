// src/components/Common/Button.js
import React from 'react';

/**
 * Composant Bouton réutilisable avec différents styles et tailles,
 * utilisant les couleurs personnalisées du thème Tailwind.
 * @param {object} props - Props du composant.
 * @param {function} [props.onClick] - Fonction à appeler au clic.
 * @param {string} [props.variant='primary'] - Style du bouton ('primary', 'secondary', 'danger', etc.).
 * @param {string} [props.size='md'] - Taille du bouton ('sm', 'md', 'lg').
 * @param {string} [props.type='button'] - Type HTML du bouton ('button', 'submit', 'reset').
 * @param {boolean} [props.disabled=false] - Désactive le bouton.
 * @param {string} [props.className] - Classes Tailwind supplémentaires à ajouter pour des ajustements spécifiques.
 * @param {React.ReactNode} props.children - Contenu du bouton (texte, icône...).
 */
function Button({
    children,
    onClick,
    variant = 'primary', // 'primary' est la variante par défaut
    size = 'md',         // 'md' est la taille par défaut
    type = 'button',
    disabled = false,
    className = '',      // Permet d'ajouter/override des classes
    ...props             // Pour passer d'autres props HTML standard (ex: aria-label)
}) {
    // Styles de base communs (padding, arrondi, focus, transition...)
    const baseStyles = "inline-flex items-center justify-center font-semibold border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"; // Ajout transform et hover:scale

    // Styles dépendant de la taille
    let sizeStyles = '';
    switch (size) {
        case 'sm':
            sizeStyles = 'px-3 py-1.5 text-xs';
            break;
        case 'lg':
            sizeStyles = 'px-6 py-3 text-base'; // Ajusté pour text-base
            break;
        case 'md':
        default:
            sizeStyles = 'px-4 py-2 text-sm';
            break;
    }

    // Styles dépendant de la variante (couleur, utilise les noms du theme)
    let variantStyles = '';
    switch (variant) {
        case 'secondary':
            variantStyles = 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 focus:ring-gray-400';
            break;
        case 'danger':
             variantStyles = 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500';
             break;
        case 'primary': // Utilise les couleurs du thème définies dans tailwind.config.js
        default:
            variantStyles = 'text-white bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-secondary dark:from-primary-dark dark:to-secondary-dark dark:hover:from-primary-dark-dark dark:hover:to-secondary-dark-dark focus:ring-primary dark:focus:ring-primary-dark';
            break;
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            // Combine les classes de base, de taille, de variante, et les classes additionnelles
            className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
            {...props} // Passe les autres props (ex: aria-label)
        >
            {children}
        </button>
    );
}

export default Button;
