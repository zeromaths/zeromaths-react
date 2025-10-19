// src/pages/LessonDetailPage.js
import React from 'react';
import { MathJax } from 'better-react-mathjax'; // Import MathJax
// Import des composants réutilisables
import GlassTitle from '../../components/ui/GlassTitle'; // Assurez-vous que ce chemin est correct
import PdfViewer from '../../components/ui/PdfViewer'; // Assurez-vous que ce chemin est correct

/**
 * Composant pour afficher le détail d'une leçon (contenu HTML + PDF).
 * @param {object} props - Props reçues du composant App.
 * @param {string} props.title - Titre de la leçon.
 * @param {string} props.subtitle - Sous-titre de la leçon.
 * @param {string} props.contentHtml - Contenu HTML de la leçon (avec LaTeX).
 * @param {string} [props.pdfPath] - Chemin optionnel vers le fichier PDF de la leçon (dans /public).
 */
function LessonDetailPage({ title, subtitle, contentHtml, pdfPath }) {

    // Les styles pour le contenu HTML injecté (.lesson-content, .example-box, etc.)
    // sont définis dans src/index.css pour une meilleure organisation.
    const lessonStyles = `
        /* Styles spécifiques à cette page si nécessaire, sinon vides ou à supprimer */
    `;

    return (
        <>
            {/* Injecter des styles spécifiques si besoin (sinon supprimer la balise style) */}
            {lessonStyles.trim() && <style>{lessonStyles}</style>}

            <GlassTitle title={title} subtitle={subtitle} />

            {/* Contenu HTML rendu avec MathJax */}
            {/* Le MathJaxContext est fourni par App.js */}
            <MathJax dynamic hideUntilTypeset="first">
                {/* hideUntilTypeset="first" améliore l'expérience en évitant l'affichage bref du code LaTeX */}
                <div
                    className="lesson-content max-w-3xl mx-auto p-6 md:p-8 bg-white dark:bg-gray-800/50 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    // Utilisation de dangerouslySetInnerHTML pour le contenu venant des données
                    // Assurez-vous que ce contenu est sûr ou "sanitized" s'il provient d'une source non fiable.
                    dangerouslySetInnerHTML={{ __html: contentHtml || '<p>Contenu de la leçon non disponible.</p>' }}
                />
            </MathJax>

            {/* Affiche la visionneuse PDF si un chemin est fourni */}
            {pdfPath ? (
                <PdfViewer fileUrl={pdfPath} />
            ) : (
                // Message si pas de PDF
                <div className="text-center p-4 mt-4 text-gray-500 dark:text-gray-400 italic">
                    (Version PDF non disponible pour cette leçon)
                </div>
            )}
        </>
    );
}

export default LessonDetailPage;
