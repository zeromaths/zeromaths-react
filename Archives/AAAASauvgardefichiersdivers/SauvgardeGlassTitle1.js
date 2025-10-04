// src/components/Common/GlassTitle.js
import React, { useState, useEffect } from 'react';

/**
 * Titre principal avec effet verre et couleurs du thème.
 * Version simplifiée sans l'accent animé.
 * @param {object} props - Props du composant.
 * @param {string} props.title - Texte principal du titre.
 * @param {string} props.subtitle - Texte secondaire.
 */
function GlassTitle({ title, subtitle }) { // Props accentChar et accentIndex retirées
    const [showTitle, setShowTitle] = useState(false);
    // L'état showAccent et la logique associée sont supprimés

    useEffect(() => {
        // Déclenche l'animation d'apparition du titre
        const titleTimer = setTimeout(() => setShowTitle(true), 500);
        // Nettoyage du timer si le composant est démonté
        return () => {
            clearTimeout(titleTimer);
        };
    }, []); // S'exécute une seule fois au montage

    // Plus besoin de titlePart1 et titlePart2

    return (
        <div className={`relative my-16 mx-auto max-w-3xl bg-white/15 dark:bg-black/30 backdrop-blur-xl p-10 md:p-16 rounded-2xl text-center text-gray-800 dark:text-gray-200 shadow-lg border border-white/20 transition-all duration-1000 ease-out ${showTitle ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <h1 className="text-4xl md:text-6xl font-black mb-4 inline-block relative">
                {/* Utilisation des couleurs primaires/secondaires du thème */}
                {/* Le titre est maintenant affiché directement sans l'accent */}
                <span className="bg-gradient-to-r from-primary-dark to-secondary-dark dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent">
                    {title}
                </span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 m-0">
                {subtitle}
            </p>
        </div>
    );
}

export default GlassTitle;
