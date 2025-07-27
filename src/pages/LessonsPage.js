// src/pages/LessonsPage.js
import React from 'react';
// Import des composants réutilisables
import GlassTitle from '../components/Common/GlassTitle';
import HomeBanner from '../components/Common/HomeBanner';
import CardsSection from '../components/Common/CardsSection';
import Card from '../components/Common/Card';

/**
 * Composant pour afficher la liste des leçons d'un niveau donné.
 * @param {object} props - Props reçues du composant App.
 * @param {string} props.level - Le niveau scolaire (ex: "6ème").
 * @param {Array} props.chapters - Tableau des objets chapitres pour ce niveau.
 * @param {function} props.setActivePage - Fonction pour changer la page active.
 */
function LessonsPage({ level, chapters, setActivePage }) {
    // Vérification si les chapitres sont bien un tableau
    if (!Array.isArray(chapters)) {
        console.error(`LessonsPage (${level}): 'chapters' prop is not a valid array.`);
        return <div className="text-center p-10 text-red-500">Erreur : Impossible de charger les chapitres pour le niveau {level}.</div>;
    }

    return (
        <>
            <GlassTitle title={`Leçons de ${level}`} subtitle="Tous les chapitres du programme" />
            <HomeBanner
                title={`Programme de mathématiques de ${level}`}
                text={`Découvrez l'ensemble des chapitres du programme de mathématiques de ${level}. Cliquez sur un chapitre pour accéder à la leçon détaillée et à la version PDF.`}
            />
            {/* Affiche la grille des cartes de chapitre */}
            <CardsSection
                items={chapters}
                renderCard={(chapter, index) => (
                    <Card
                        key={chapter.id || index} // Utilise l'ID ou l'index comme clé
                        icon={chapter.icon || 'fas fa-book'} // Icône par défaut
                        title={chapter.title || 'Chapitre sans titre'}
                        description={chapter.description || `Contenu du chapitre à venir...`}
                        linkText="Voir le chapitre →"
                        onClick={() => setActivePage(chapter.link)} // Navigue vers la page détail
                        delay={index * 0.15}
                    />
                )}
            />
        </>
    );
}

export default LessonsPage;
