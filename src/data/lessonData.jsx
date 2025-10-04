// src/data/lessonData.js

// Données pour les chapitres (exemple 6ème)
// À terme, vous pourriez avoir des fichiers séparés ou une structure plus complexe
// pour les différents niveaux.
export const chapters6eme = [
    {
        id: 'chapitre1',
        title: 'Nombres et calculs',
        icon: 'fas fa-calculator', // Font Awesome icon class
        description: 'Découvrez les nombres entiers, les fractions et les nombres décimaux. Apprenez les opérations de base.',
        link: 'lesson-chapitre1', // Identifiant de la page de détail
        pdfPath: '/lessons/6eme/chapitre1.pdf' // Chemin public vers le PDF (si existe)
    },
    {
        id: 'chapitre2',
        title: 'Géométrie',
        icon: 'fas fa-ruler-combined',
        description: 'Explorez les figures géométriques planes, les angles, les symétries et les constructions.',
        link: 'lesson-chapitre2', // Identifiant de page placeholder
        pdfPath: null // Mettre le chemin si un PDF existe
    },
    {
        id: 'chapitre3',
        title: 'Grandeurs et mesures',
        icon: 'fas fa-chart-line',
        description: 'Maîtrisez les différentes unités de mesure, les conversions et les calculs d\'aires et de périmètres.',
        link: 'lesson-chapitre3',
        pdfPath: null
    },
    {
        id: 'chapitre4',
        title: 'Organisation et gestion de données',
        icon: 'fas fa-table',
        description: 'Apprenez à lire et interpréter des tableaux, des graphiques et découvrez la proportionnalité.',
        link: 'lesson-chapitre4',
        pdfPath: null
    },
    {
        id: 'chapitre5',
        title: 'Algorithmique et programmation',
        icon: 'fas fa-puzzle-piece',
        description: 'Initiez-vous à la logique algorithmique et aux bases de la programmation visuelle ou textuelle.',
        link: 'lesson-chapitre5',
        pdfPath: null
    },
    // Ajoutez les données pour 5eme, 4eme, 3eme ici ou dans d'autres exports/fichiers
    // export const chapters5eme = [ ... ];
];

// Contenu HTML d'exemple pour la leçon de test MathJax
// (Assurez-vous que le LaTeX utilise $...$ et $$...$$)
export const testLessonContent = `
    <h2>Test de Rendu MathJax</h2>
    <p>
        Ceci est un paragraphe de texte normal. Nous allons tester le rendu des formules
        mathématiques en ligne comme $a^2 + b^2 = c^2$ (théorème de Pythagore)
        ou la célèbre formule d'Euler $e^{i\\pi} + 1 = 0$.
    </p>
    <p>
        Nous pouvons aussi avoir des formules affichées en bloc (display mode) :
    </p>
    <div class="formula-box">
        $$ \\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2} $$
    </div>
    <p>
        Ceci est un autre paragraphe après la formule en bloc. Assurons-nous que
        le texte continue normalement et que les styles sont appliqués.
        Une autre formule inline : $\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$.
    </p>
    <h3>Sous-section avec Maths</h3>
    <p>
        On peut mélanger texte et formules : L'aire d'un disque est $A = \\pi r^2$,
        et son périmètre est $P = 2 \\pi r$.
    </p>
    <div class="example-box">
        <p>Exemple : Si $r=5$, alors $A = 25\\pi$ et $P = 10\\pi$.</p>
    </div>
    <p>Test d'une formule plus complexe en display :</p>
    $$ f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n $$
    <p>Fin du test.</p>
`;

// Ajoutez d'autres contenus de leçons ici si nécessaire
// export const lessonChapitre2Content = `<h2>Contenu Chapitre 2</h2>...`;
