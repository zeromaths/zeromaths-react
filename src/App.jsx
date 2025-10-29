// src/App.js
import React, { useState, useEffect, useCallback, useMemo, Suspense, lazy } from 'react';

// Import des bibliothèques externes
import { MathJaxContext } from 'better-react-mathjax'; // Pour le rendu LaTeX
import { pdfjs } from 'react-pdf'; // Pour la visionneuse PDF
// Styles spécifiques à react-pdf (nécessaires pour son bon fonctionnement)
// Assurez-vous que 'react-pdf' est installé: npm install react-pdf
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Import des composants de Layout (structure) depuis leurs nouveaux emplacements
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import BackToTopButton from './components/layout/BackToTopButton';

// Import statique pour la page d'accueil et le placeholder
const HomePage = lazy(() => import('./pages/HomePage'));
const PlaceholderComponent = lazy(() => import('./components/ui/PlaceholderComponent')); // Pour les pages non encore créées

// Import dynamique (Lazy Loading) pour les autres pages
const LessonsPage = lazy(() => import('./pages/LessonsPage'));
const LessonDetailPage = lazy(() => import('./pages/LessonDetailPage'));
const ExercisesPage = lazy(() => import('./pages/ExercisesPage'));
const GamesPage = lazy(() => import('./pages/GamesPage'));
const AutomatismesPage = lazy(() => import('./pages/AutomatismesPage'));

// Import des données depuis leurs nouveaux emplacements
// Assurez-vous que les chemins et les noms exportés sont corrects
import { chapters6eme, testLessonContent } from './features/lessons/data';
import { exercises6eme } from './features/lessons/exerciseData';
import { games6eme } from './features/games/data';
import chapitre1Pdf from './assets/lessons/6eme/chapitre1.pdf';

// Configuration du Worker PDF.js (une seule fois dans l'application)
// Assurez-vous que 'pdfjs-dist' est installé (`npm install pdfjs-dist`)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


/**
 * Composant principal de l'application (Racine).
 * Gère l'état global (page actuelle, mode sombre, menu mobile) et le rendu des pages.
 */
function App() {
    // --- États Globaux ---
    const [isDarkMode, setIsDarkMode] = useState(false); // État du mode sombre
    const [currentPage, setCurrentPage] = useState('home'); // Quelle page afficher
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // État du menu burger/overlay
    const [expandedMobileSection, setExpandedMobileSection] = useState(null); // Pour l'accordéon mobile

    // --- Effets et Callbacks ---

    // Gestion du Mode Sombre (avec localStorage)
    const toggleDarkMode = useCallback(() => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            if (newMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('darkMode', 'enabled'); // Sauvegarde la préférence
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('darkMode', 'disabled');
            }
            return newMode;
        });
    }, []); // Pas de dépendances externes

    // Charger le mode sombre au montage initial
    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        // Prend aussi en compte la préférence système si rien n'est sauvegardé
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialMode = savedMode === 'enabled' || (!savedMode && prefersDark);

        setIsDarkMode(initialMode); // Met à jour l'état React
        // Applique la classe initiale à l'élément <html>
        if (initialMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []); // S'exécute une seule fois au montage

    // Menu mobile : ouvrir/fermer le panneau principal
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
        // Ferme aussi toutes les sections de l'accordéon si on ferme le menu principal
        if (isMobileMenuOpen) { // Note: utilise la valeur *avant* la mise à jour de l'état
            setExpandedMobileSection(null);
        }
    };

    // Fonction pour changer la page affichée
    const setActivePage = useCallback((page) => {
        // Liste des identifiants de page valides (à maintenir à jour si vous ajoutez des pages)
        const validPages = [
            'home', 'cours', 'revision-brevet', 'espace-eleve', 'espace-parents', 'blog',
            'pedagogie', 'tarifs', 'mentions-legales', 'contact', 'about',
            'lessons-6eme', 'exercises-6eme', 'automatismes-6eme', 'games-6eme', 'lesson-chapitre1',
            'lessons-5eme', 'exercises-5eme', 'automatismes-5eme', 'games-5eme',
            'lessons-4eme', 'exercises-4eme', 'automatismes-4eme', 'games-4eme',
            'lessons-3eme', 'exercises-3eme', 'automatismes-3eme', 'games-3eme',
            // Ajoutez ici les identifiants des autres pages de leçons (lesson-chapitre2, etc.)
        ];

        setIsMobileMenuOpen(false); // Ferme toujours le menu principal lors d'une navigation
        setExpandedMobileSection(null); // Ferme toujours l'accordéon

        if (page === 'contact') {
            // Cas spécial : aller à l'accueil et scroller vers #contact
            setCurrentPage('home');
            // Utilise setTimeout pour laisser le temps au DOM de se mettre à jour
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Un court délai suffit généralement
        } else if (validPages.includes(page)) {
             // Navigation normale vers une page valide
             setCurrentPage(page);
             window.scrollTo(0, 0); // Remonte en haut de la nouvelle page
        } else {
            // Si la page demandée n'est pas valide, retourne à l'accueil
            console.warn(`Page invalide demandée: ${page}. Redirection vers l'accueil.`);
            setCurrentPage('home');
            window.scrollTo(0, 0);
        }
    }, []); // Dépendance vide car utilise seulement des fonctions/états définis dans App

    // --- Définition des Liens de Navigation ---
    // Utilisé par Header (desktop) et l'Overlay Mobile
    const navLinks = useMemo(() => {
        // Fonction spécifique pour le clic sur "Contact"
        const handleContactClick = (e) => {
            if(e) e.preventDefault();
            setActivePage('contact'); // Utilise setActivePage qui gère le scroll et la fermeture du menu
        };
        // Structure des liens principaux et des dropdowns
        return [
            { label: 'Accueil', page: 'home', href: '#home' },
            { label: 'A propos', page: 'about', href: '#about' }, // Page placeholder
            // Dropdowns par niveau
            { label: '6ème', key: '6eme', icon: 'fas fa-book', isDropdown: true, items: [ { label: 'Leçons', page: 'lessons-6eme' }, { label: 'Exercices', page: 'exercises-6eme' }, { label: 'Automatismes', page: 'automatismes-6eme' }, { label: 'Jeux', page: 'games-6eme' }, ] },
            { label: '5ème', key: '5eme', icon: 'fas fa-book', isDropdown: true, items: [ { label: 'Leçons', page: 'lessons-5eme' }, { label: 'Exercices', page: 'exercises-5eme' }, { label: 'Automatismes', page: 'automatismes-5eme' }, { label: 'Jeux', page: 'games-5eme' }, ] },
            { label: '4ème', key: '4eme', icon: 'fas fa-book', isDropdown: true, items: [ { label: 'Leçons', page: 'lessons-4eme' }, { label: 'Exercices', page: 'exercises-4eme' }, { label: 'Automatismes', page: 'automatismes-4eme' }, { label: 'Jeux', page: 'games-4eme' }, ] },
            { label: '3ème', key: '3eme', icon: 'fas fa-book', isDropdown: true, items: [ { label: 'Leçons', page: 'lessons-3eme' }, { label: 'Exercices', page: 'exercises-3eme' }, { label: 'Automatismes', page: 'automatismes-3eme' }, { label: 'Jeux', page: 'games-3eme' }, ] },
            // Lien Contact avec gestionnaire de clic spécial
            { label: 'Contact', page: 'contact', href: '#contact', isContact: true, onClick: handleContactClick },
        ];
    }, [setActivePage]); // Recalculer si setActivePage change (pour la closure)


    // --- Rendu Conditionnel de la Page Active ---
    const renderPage = () => {
        // ★★★ Correction: pageType retiré, pageId utilisé pour levelNum ★★★
        const pageId = currentPage.split('-')[1]; // Obtenir l'ID ou le niveau si pertinent
        const levelNum = pageId === 'brevet' ? 'Brevet' : pageId ? `${pageId}ème` : '6ème';

        // Sélection des données (simplifié, à améliorer pour charger les données spécifiques au niveau)
        let currentChapters = chapters6eme; // TODO: Charger les données du bon niveau
        let currentExercises = exercises6eme; // TODO: Charger les données du bon niveau
        let currentGames = games6eme; // TODO: Charger les données du bon niveau

        switch (currentPage) {
            // Pages principales
            case 'home': return <HomePage setActivePage={setActivePage} />;
            case 'about': return <PlaceholderComponent title="A Propos" />;
            case 'cours': return <PlaceholderComponent title="Cours par Niveaux" />;
            case 'revision-brevet': return <PlaceholderComponent title="Révisions Brevet" />;
            case 'espace-eleve': return <PlaceholderComponent title="Espace Élève" />;
            case 'espace-parents': return <PlaceholderComponent title="Espace Parents" />;
            case 'blog': return <PlaceholderComponent title="Blog & Astuces" />;
            case 'pedagogie': return <PlaceholderComponent title="Notre Pédagogie" />;
            case 'tarifs': return <PlaceholderComponent title="Tarifs" />;
            case 'mentions-legales': return <PlaceholderComponent title="Mentions Légales" />;

            // Pages 6ème
            case 'lessons-6eme': return <LessonsPage level="6ème" chapters={currentChapters} setActivePage={setActivePage} />;
            // Utilise le contenu de test pour la leçon 1
            case 'lesson-chapitre1': return ( <> <LessonDetailPage title="Test Rendu LaTeX" subtitle="Chapitre Test avec MathJax" contentHtml={testLessonContent} pdfPath={chapitre1Pdf} /> </> );
            case 'exercises-6eme': return <ExercisesPage level="6ème" chapterTitle="Nombres et calculs" exercises={currentExercises} />;
            case 'games-6eme': return <GamesPage level="6ème" games={currentGames} />;
            case 'automatismes-6eme': return <AutomatismesPage level="6ème" />;

            // Placeholders autres niveaux (à remplacer par de vrais composants/logique)
            case 'lessons-5eme': case 'lessons-4eme': case 'lessons-3eme':
                // TODO: Charger les bons chapitres pour le niveau pageId
                return <LessonsPage level={levelNum} chapters={chapters6eme} setActivePage={setActivePage} />; // Utilise 6eme pour l'instant
            case 'exercises-5eme': case 'exercises-4eme': case 'exercises-3eme':
                // TODO: Charger les bons exercices
                return <ExercisesPage level={levelNum} chapterTitle={`Chapitre X ${levelNum}`} exercises={exercises6eme} />; // Utilise 6eme pour l'instant
            case 'games-5eme': case 'games-4eme': case 'games-3eme':
                 // TODO: Charger les bons jeux
                return <GamesPage level={levelNum} games={games6eme} />; // Utilise 6eme pour l'instant
            case 'automatismes-5eme': case 'automatismes-4eme': case 'automatismes-3eme':
                 // TODO: Charger les bons automatismes
                return <AutomatismesPage level={levelNum} />; // Utilise 6eme pour l'instant

            // Cas par défaut : retourne à l'accueil si la page n'est pas reconnue
            default:
                console.warn(`Page inconnue dans renderPage: ${currentPage}. Affichage de l'accueil.`);
                return <HomePage setActivePage={setActivePage} />;
        }
    };

    // --- Configuration MathJax ---
    const mathJaxConfig = {
        loader: { load: ['[tex]/html'] },
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']], // Délimiteurs inline
            displayMath: [['$$', '$$'], ['\\[', '\\]']], // Délimiteurs display
            packages: {'[+]': ['html']} // Package nécessaire pour le rendu HTML
        },
        startup: { typeset: false } // Important: le rendu est déclenché par <MathJax>
    };

    // --- Rendu JSX de l'Application ---
    return (
        // Enveloppe toute l'app avec le contexte MathJax
        <MathJaxContext config={mathJaxConfig}>
            <div className="bg-[#edecf9] dark:bg-gradient-to-br dark:from-gray-900 dark:to-black min-h-screen transition-colors duration-300 text-gray-800 dark:text-gray-200">
                {/* Header reçoit les props nécessaires */}
                <Header
                    setActivePage={setActivePage}
                    currentPage={currentPage}
                    isMobileMenuOpen={isMobileMenuOpen}
                    toggleMobileMenu={toggleMobileMenu}
                    navLinks={navLinks} // Passe les liens définis ici
                    isDarkMode={isDarkMode} 
                    toggleDarkMode={toggleDarkMode}
                />

                {/* --- Fin Overlay --- */}

                {/* Contenu principal de la page */}
                {/* La clé change à chaque navigation pour potentiellement aider aux transitions/animations */}
                <main key={currentPage} className="pt-[70px] lg:pt-[80px] min-h-[calc(100vh-150px)]">
                    <Suspense fallback={<div className="text-center p-8">Chargement...</div>}>
                        {renderPage()}
                    </Suspense>
                </main>

                {/* Pied de page */}
                <Footer setActivePage={setActivePage} />
                {/* Bouton retour en haut */}
                <BackToTopButton />
            </div>
        </MathJaxContext>
    );
}

export default App;
