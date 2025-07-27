// src/App.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';

// Import des bibliothèques externes
import { MathJaxContext } from 'better-react-mathjax'; // Pour le rendu LaTeX
import { pdfjs } from 'react-pdf'; // Pour la visionneuse PDF
// Styles spécifiques à react-pdf (nécessaires pour son bon fonctionnement)
// Assurez-vous que 'react-pdf' est installé: npm install react-pdf
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Import des composants de Layout (structure) depuis leurs nouveaux emplacements
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import DarkModeToggle from './components/Layout/DarkModeToggle';
import BackToTopButton from './components/Layout/BackToTopButton';

// Import des composants de Page (chaque page est maintenant un composant séparé)
import HomePage from './pages/HomePage';
import LessonsPage from './pages/LessonsPage';
import LessonDetailPage from './pages/LessonDetailPage';
import ExercisesPage from './pages/ExercisesPage';
import GamesPage from './pages/GamesPage';
import AutomatismesPage from './pages/AutomatismesPage';
import PlaceholderComponent from './components/Common/PlaceholderComponent'; // Pour les pages non encore créées

// Import des données depuis leurs nouveaux emplacements
// Assurez-vous que les chemins et les noms exportés sont corrects
import { chapters6eme, testLessonContent } from './data/lessonData';
import { exercises6eme } from './data/exerciseData';
import { games6eme } from './data/gameData';

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

    // Menu mobile : ouvrir/fermer une section de l'accordéon
    const toggleMobileSection = (sectionKey) => {
        setExpandedMobileSection(prev => (prev === sectionKey ? null : sectionKey)); // Bascule ou définit la section ouverte
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


    // --- Fonction de Clic pour les Liens de l'Overlay Mobile ---
    const handleOverlayNavClick = (e, link) => {
        if (link.isContact && link.onClick) {
            link.onClick(e); // Utilise la fonction onClick définie dans navLinks
        } else {
            e.preventDefault();
            setActivePage(link.page); // Navigation standard
        }
        // La fermeture du menu est gérée par setActivePage
    };

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
            case 'lesson-chapitre1': return ( <> <LessonDetailPage title="Test Rendu LaTeX" subtitle="Chapitre Test avec MathJax" contentHtml={testLessonContent} pdfPath="/lessons/6eme/chapitre1.pdf" /> </> );
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
                />
                {/* Bouton Mode Sombre */}
                <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

                {/* --- Overlay Menu Mobile (géré par App) --- */}
                <div
                    id="mobile-menu"
                    className={`lg:hidden fixed inset-0 bg-black/75 dark:bg-gray-950/75 backdrop-blur-md z-[1000] transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    aria-hidden={!isMobileMenuOpen}
                >
                    <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-white text-3xl p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded" aria-label="Fermer le menu">&times;</button>
                    {/* Liste des liens avec accordéon */}
                    <ul className="flex flex-col items-center justify-center h-full space-y-2 text-lg overflow-y-auto pb-16 pt-16 px-4">
                        {navLinks.map(link => (
                            <li key={link.page || link.label} className="w-full text-center">
                                {link.isDropdown ? (
                                    // Section Accordéon pour les niveaux
                                    <div className="w-full">
                                        <button
                                            onClick={() => toggleMobileSection(link.key)}
                                            className={`relative w-full flex items-center justify-center py-3 px-4 rounded-md transition-colors duration-300 font-semibold ${currentPage.startsWith(link.key) ? 'text-primary-light dark:text-primary-dark-light' : 'text-white hover:text-primary-light dark:hover:text-primary-dark-light hover:bg-white/10'} after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-1/4`}
                                            aria-expanded={expandedMobileSection === link.key}
                                        >
                                            {link.label}
                                        </button>
                                        {/* Sous-menu accordéon */}
                                        <ul className={`pl-4 overflow-hidden transition-max-height duration-300 ease-in-out ${expandedMobileSection === link.key ? 'max-h-96' : 'max-h-0'}`}>
                                            {link.items.map(item => (
                                                <li key={item.page} className="mt-1">
                                                    <a
                                                        href={`#${item.page}`} // Lien interne pour la navigation SPA
                                                        onClick={(e) => { e.preventDefault(); setActivePage(item.page); }}
                                                        className={`block py-2 px-4 rounded-md text-base transition-colors duration-300 ${currentPage === item.page ? 'text-primary-light dark:text-primary-dark-light font-semibold bg-white/5' : 'text-gray-300 hover:text-primary-light dark:hover:text-primary-dark-light hover:bg-white/5'}`}
                                                        aria-current={currentPage === item.page ? 'page' : undefined}
                                                    >
                                                        {item.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    // Lien Direct
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleOverlayNavClick(e, link)}
                                        className={`relative flex items-center justify-center py-3 px-4 rounded-md transition-colors duration-300 ${currentPage === link.page ? 'text-primary-light dark:text-primary-dark-light font-semibold' : 'text-white hover:text-primary-light dark:hover:text-primary-dark-light hover:bg-white/10'} after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-1/4`}
                                        aria-current={currentPage === link.page ? 'page' : undefined}
                                    >
                                        {link.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* --- Fin Overlay --- */}

                {/* Contenu principal de la page */}
                {/* La clé change à chaque navigation pour potentiellement aider aux transitions/animations */}
                <main key={currentPage} className="pt-[70px] lg:pt-[80px] min-h-[calc(100vh-150px)]">
                    {renderPage()}
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
