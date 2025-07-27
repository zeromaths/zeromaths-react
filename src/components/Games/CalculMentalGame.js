// src/components/Games/CalculMentalGame.js
import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Composant pour le jeu de calcul mental (affiché dans une modale).
 * Utilise les couleurs centralisées du thème.
 * @param {object} props - Props du composant.
 * @param {function} props.onClose - Fonction à appeler pour fermer la modale.
 */
function CalculMentalGame({ onClose }) {
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isChecking, setIsChecking] = useState(false); // Pour désactiver les boutons pendant la vérification
    const modalRef = useRef(null); // Pour la gestion du focus

    // Fonction utilitaire pour mélanger un tableau
    const shuffleArray = useCallback((array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }, []);

    // Fonction pour générer une nouvelle question
    const generateQuestion = useCallback(() => {
        setIsChecking(false); setFeedback('');
        let n1 = Math.floor(Math.random() * 20) + 1, n2 = Math.floor(Math.random() * 20) + 1;
        const ops = ['+', '-', '×'], op = ops[Math.floor(Math.random() * ops.length)];
        let ca, qt;
        switch (op) {
            case '+': ca = n1 + n2; qt = `${n1} + ${n2} = ?`; break;
            case '-': if (n1 < n2) [n1, n2] = [n2, n1]; ca = n1 - n2; qt = `${n1} - ${n2} = ?`; break;
            case '×': n2 = Math.floor(Math.random() * 10) + 1; ca = n1 * n2; qt = `${n1} × ${n2} = ?`; break;
            default: ca = 0; qt = 'Erreur';
        }
        setQuestion(qt); setCorrectAnswer(ca);
        const opts = [ca];
        while (opts.length < 4) {
            let io = Math.floor(Math.random() * 10) - 5; if (io === 0) io += (Math.random() < 0.5 ? -1 : 1);
            let ia = ca + io; if (ia >= 0 && !opts.includes(ia)) opts.push(ia);
        }
        setOptions(shuffleArray(opts));
    }, [shuffleArray]);

    // Effet pour générer la première question et gérer le focus/Echap
    useEffect(() => {
        generateQuestion();
        if (modalRef.current) modalRef.current.focus(); // Met le focus sur la modale
        const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown); // Nettoyage
    }, [generateQuestion, onClose]);

    // Fonction pour vérifier la réponse de l'utilisateur
    const checkAnswer = (answer) => {
        if (isChecking) return; setIsChecking(true); setTotal(t => t + 1);
        const isCorrect = answer === correctAnswer;
        if (isCorrect) { setScore(s => s + 1); setFeedback('Correct !'); }
        else { setFeedback(`Incorrect. La réponse était ${correctAnswer}.`); }

        // Feedback visuel
        const gameEl = document.getElementById('calcul-mental-game-content');
        if (gameEl) {
            const correctClasses = ['bg-green-100', 'dark:bg-green-900/50'];
            const incorrectClasses = ['bg-red-100', 'dark:bg-red-900/50'];
            const classesToAdd = isCorrect ? correctClasses : incorrectClasses;
            const classesToRemove = isCorrect ? incorrectClasses : correctClasses;
            gameEl.classList.add(...classesToAdd);
            gameEl.classList.remove(...classesToRemove);
            setTimeout(() => gameEl.classList.remove(...classesToAdd), 500);
        }
        // Prochaine question après un délai
        setTimeout(generateQuestion, 1200);
    };

    return (
        // Overlay de la modale
        <div
            id="calcul-mental-game-modal"
            className="fixed inset-0 bg-black/60 dark:bg-black/80 flex items-center justify-center z-[1001] p-4 backdrop-blur-sm"
            role="dialog" aria-modal="true" aria-labelledby="calcul-mental-title"
            ref={modalRef} tabIndex={-1} // Pour la gestion du focus
        >
            {/* Contenu de la modale */}
            <div id="calcul-mental-game-content" className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-md text-center relative transform transition-all duration-300 scale-100">
                {/* Bouton Fermer */}
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 text-3xl leading-none p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-full" aria-label="Fermer le jeu">&times;</button>
                {/* Titre */}
                <h2 id="calcul-mental-title" className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Calcul Mental Express</h2>
                {/* Question (couleurs du thème) */}
                <div className="game-question text-4xl font-bold my-8 text-primary dark:text-primary-dark min-h-[3rem] flex items-center justify-center">
                    {question || "..."}
                </div>
                {/* Feedback */}
                <div className={`text-sm mb-4 min-h-[1.25rem] font-medium ${feedback.startsWith('Correct') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {feedback || '\u00A0'} {/* Espace insécable pour maintenir la hauteur */}
                </div>
                {/* Options (boutons) */}
                <div className="game-options grid grid-cols-2 gap-4 my-8">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => checkAnswer(option)}
                            // Style des boutons d'options (pourrait utiliser le composant Button)
                            className="game-option bg-gray-100 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg p-4 text-2xl font-semibold cursor-pointer transition-all duration-300 hover:bg-blue-100 dark:hover:bg-orange-800/50 hover:border-primary dark:hover:border-primary-dark hover:scale-105 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-primary-dark disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
                            disabled={isChecking}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                {/* Score */}
                <div className="game-score text-lg mt-6 text-gray-700 dark:text-gray-300">
                    Score : <span className="font-bold">{score}</span> / <span className="font-bold">{total}</span>
                </div>
                {/* Contrôles (bouton Quitter) */}
                <div className="game-controls mt-8">
                    {/* Pourrait utiliser <Button variant="secondary"> */}
                    <button
                        onClick={onClose}
                        className="close-game px-5 py-2 rounded-md bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300"
                    >
                        Quitter le jeu
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CalculMentalGame;
