// src/components/Common/GlassTitle.js
import React, { useState, useEffect } from 'react';

/**
 * Titre principal avec effet verre et couleurs du thème.
 */
function GlassTitle({ title, subtitle, accentChar = '´', accentIndex = 1 }) {
    const [showTitle, setShowTitle] = useState(false);
    const [showAccent, setShowAccent] = useState(false);

    useEffect(() => {
        const titleTimer = setTimeout(() => setShowTitle(true), 500);
        const accentTimer = setTimeout(() => setShowAccent(true), 1200);
        return () => { clearTimeout(titleTimer); clearTimeout(accentTimer); };
    }, []);

    const titlePart1 = title.substring(0, accentIndex);
    const titlePart2 = title.substring(accentIndex);

    return (
        <div className={`relative my-16 mx-auto max-w-3xl bg-white/15 dark:bg-black/30 backdrop-blur-xl p-10 md:p-16 rounded-2xl text-center text-gray-800 dark:text-gray-200 shadow-lg border border-white/20 transition-all duration-1000 ease-out ${showTitle ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <h1 className="text-4xl md:text-6xl font-black mb-4 inline-block relative">
                {/* Utilisation des couleurs primaires/secondaires du thème */}
                <span className="bg-gradient-to-r from-primary-dark to-secondary-dark dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent">
                    {titlePart1}
                    {/* Accent avec couleur du thème */}
                    <span className={`absolute transition-all duration-300 ease-out inline-block text-primary dark:text-primary-dark text-3xl md:text-5xl ${showAccent ? 'opacity-100 -translate-y-1' : 'opacity-0 -translate-y-3'}`} style={{ left: `${accentIndex * 1.9}ch`, top: '-0.2em' }}>
                        {accentChar}
                    </span>
                    {titlePart2}
                </span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 m-0">
                {subtitle}
            </p>
        </div>
    );
}

export default GlassTitle;
// Correction: Assurez-vous qu'il n'y a PAS de caractères supplémentaires après cette ligne.
