// src/components/Common/HomeBanner.js
import React from 'react';

/**
 * Bannière d'introduction simple avec titre et texte.
 */
function HomeBanner({ title, text }) {
    return (
        <section className="text-center my-16 mx-auto max-w-3xl px-4">
            {/* Titre de la bannière */}
            <h1 className="text-3xl md:text-4xl mb-6 font-bold text-gray-800 dark:text-gray-100">
                {title}
            </h1>
            {/* Texte de la bannière */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {text}
            </p>
        </section>
    );
}

export default HomeBanner;
