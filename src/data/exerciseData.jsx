// src/data/exerciseData.js

// Données pour les exercices (exemple 6ème)
// Assurez-vous que le LaTeX utilise $...$ et $$...$$
export const exercises6eme = [
    {
        id: 1,
        title: 'Exercice 1 : Écriture et lecture',
        difficulty: 1,
        content: '<p>Écrivez en chiffres : Trois millions deux cent mille cinquante-quatre.</p>',
        solution: '<p>Solution : 3 200 054</p>'
    },
    {
        id: 2,
        title: 'Exercice 2 : Comparaison',
        difficulty: 2,
        content: '<p>Comparez : 2345 ... 2354</p>',
        solution: '<p>Solution : 2345 < 2354</p>'
    },
    {
        id: 3,
        title: 'Exercice 3 : Fractions égales',
        difficulty: 2,
        content: '<p>Complétez : $\\frac{3}{4} = \\frac{?}{12}$</p>', // Notez le double backslash pour \frac
        solution: '<p>Solution : $\\frac{3 \\times 3}{4 \\times 3} = \\frac{9}{12}$</p>'
    },
    {
        id: 4,
        title: 'Exercice 4 : Simplification',
        difficulty: 3,
        content: '<p>Simplifiez : $\\frac{15}{25}$</p>',
        solution: '<p>Solution : $\\frac{15 \\div 5}{25 \\div 5} = \\frac{3}{5}$</p>'
    },
    {
        id: 5,
        title: 'Exercice 5 : Priorités',
        difficulty: 3,
        content: '<p>Calculez : $7 + 3 \\times 4$</p>', // Notez le double backslash pour \times
        solution: '<p>Solution : $7 + 12 = 19$</p>'
    },
    // Ajoutez les données pour 5eme, 4eme, 3eme ici ou dans d'autres exports/fichiers
    // export const exercises5eme = [ ... ];
];
