// src/pages/ExercisesPage.js
import React from 'react';
// Import des composants réutilisables
import GlassTitle from '../../components/ui/GlassTitle'; // Ajustez les chemins si nécessaire
import HomeBanner from '../../components/ui/HomeBanner';
import ExerciseCard from './components/ExerciseCard'; // Assurez-vous que ce chemin est correct

/**
 * Composant pour afficher la liste des exercices d'un niveau/chapitre.
 * @param {object} props - Props reçues du composant App.
 * @param {string} props.level - Le niveau scolaire.
 * @param {string} props.chapterTitle - Le titre du chapitre associé (optionnel).
 * @param {Array} props.exercises - Tableau des objets exercices pour ce niveau/chapitre.
 */
function ExercisesPage({ level, chapterTitle, exercises }) {
    // Vérification si exercises est un tableau valide
    if (!Array.isArray(exercises)) {
        console.error(`ExercisesPage (${level}): 'exercises' prop is not a valid array.`);
        return <div className="text-center p-10 text-red-500">Erreur : Impossible de charger les exercices pour le niveau {level}.</div>;
    }

    return (
        <>
            <GlassTitle title={`Exercices de ${level}`} subtitle={chapterTitle || 'Entraînement'} />
            <HomeBanner
                title={`Exercices sur ${chapterTitle || `le programme de ${level}`}`}
                text={`Entraînez-vous avec ces exercices interactifs. Cliquez sur "Voir la solution" pour vérifier vos réponses et comprendre la démarche.`}
            />
            {/* Section affichant les cartes d'exercice */}
            <section className="container mx-auto max-w-3xl px-4 py-8">
                {exercises.length > 0 ? (
                    // Boucle sur les exercices et affiche une ExerciseCard pour chacun
                    exercises.map(ex => (
                        <ExerciseCard key={ex.id} exercise={ex} />
                    ))
                ) : (
                    // Message si aucun exercice n'est disponible
                    <p className="text-center text-gray-500 dark:text-gray-400">Aucun exercice disponible pour cette section pour le moment.</p>
                )}
            </section>
        </>
    );
}

export default ExercisesPage;
