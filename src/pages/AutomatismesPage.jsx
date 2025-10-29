// src/pages/AutomatismesPage.js
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
// Import des composants réutilisables
import GlassTitle from '../components/ui/GlassTitle'; // Vérifiez ce chemin
import HomeBanner from '../components/ui/HomeBanner'; // Vérifiez ce chemin
// ★★★ Chemin d'import corrigé (vérifiez qu'il correspond bien à votre structure) ★★★
import AutomatismeGrid from '../features/automatismes/components/AutomatismeGrid'; // Assurez-vous que le dossier et le fichier existent et sont correctement nommés

/**
 * Composant pour la page des automatismes.
 */
function AutomatismesPage({ level }) {
    const [timeLeft, setTimeLeft] = useState(180);
    const [timerActive, setTimerActive] = useState(false);
    const [timerFinished, setTimerFinished] = useState(false);
    const [resetSignal, setResetSignal] = useState(false);
    const timerIntervalRef = useRef(null);

    // Données (inchangées - idéalement à charger depuis /data ou API)
    const { multiplicationItems, calculItems, fractionItems } = useMemo(() => {
        const multItems = Array.from({ length: 30 }, () => { const a = Math.floor(Math.random() * 9) + 2, b = Math.floor(Math.random() * 9) + 2; return { question: `${a} × ${b}`, answer: a * b }; });
        const calcItems = Array.from({ length: 20 }, () => { const a = Math.floor(Math.random() * 50) + 1, b = Math.floor(Math.random() * 50) + 1, op = Math.random() < 0.5 ? '+' : '-'; if (op === '+' && a + b <= 100) return { question: `${a} + ${b}`, answer: a + b }; if (op === '-' && a > b) return { question: `${a} - ${b}`, answer: a - b }; return { question: `${a} + ${b % 10}`, answer: a + (b % 10) }; });
        const fracItems = [ { question: "2/4", answer: "1/2" }, { question: "6/8", answer: "3/4" }, { question: "5/10", answer: "1/2" }, { question: "3/9", answer: "1/3" }, { question: "10/15", answer: "2/3" }, { question: "8/12", answer: "2/3" }, { question: "4/16", answer: "1/4" }, { question: "9/12", answer: "3/4" }, { question: "6/10", answer: "3/5" }, { question: "12/16", answer: "3/4" }, { question: "14/21", answer: "2/3" }, { question: "15/20", answer: "3/4" }, { question: "18/24", answer: "3/4" }, { question: "20/25", answer: "4/5" }, { question: "7/14", answer: "1/2" }, { question: "9/15", answer: "3/5" }, ];
        for (let i = fracItems.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [fracItems[i], fracItems[j]] = [fracItems[j], fracItems[i]]; }
        return { multiplicationItems: multItems, calculItems: calcItems, fractionItems: fracItems };
    }, []);

    // Gestion du timer (inchangée)
    useEffect(() => { if (timerActive && timeLeft > 0) { timerIntervalRef.current = setInterval(() => setTimeLeft(p => p - 1), 1000); } else if (timeLeft <= 0) { clearInterval(timerIntervalRef.current); if (timerActive) { setTimerActive(false); setTimerFinished(true); } } return () => clearInterval(timerIntervalRef.current); }, [timerActive, timeLeft]);
    const handleStartPause = () => { if (!timerFinished) setTimerActive(!timerActive); };
    const handleReset = () => { clearInterval(timerIntervalRef.current); setTimerActive(false); setTimeLeft(180); setTimerFinished(false); setResetSignal(true); setTimeout(() => setResetSignal(false), 50); };
    const formatTime = useCallback((s) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`, []);

    return (
        <>
            <GlassTitle title={`Automatismes de ${level}`} subtitle="Entraînement rapide aux calculs de base" />
            <HomeBanner title="Entraînement aux automatismes" text={`Lancez le chrono (${formatTime(180)})...`} />
            {/* Timer et Contrôles (inchangés) */}
            <div className="timer-container flex flex-col items-center my-8 sticky top-[70px] md:top-[80px] z-10 py-4 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-b-lg shadow-sm">
                 <div className={`timer text-4xl font-bold p-3 rounded-lg shadow-inner mb-4 ${timerFinished ? 'text-red-500' : 'text-gray-800 dark:text-gray-100'} bg-white dark:bg-gray-700`}>{timerFinished ? "Terminé !" : formatTime(timeLeft)}</div>
                 <div className="control-buttons flex justify-center gap-4">
                     <button onClick={handleStartPause} disabled={timerFinished} className={`control-button start-button flex items-center px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${timerFinished ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : timerActive ? 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500' : 'bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark text-white hover:shadow-lg focus:ring-primary dark:focus:ring-primary-dark'}`} aria-live="polite"><i className={`fas ${timerActive ? 'fa-pause' : 'fa-play'} mr-2`} aria-hidden="true"></i>{timerActive ? 'Pause' : timerFinished ? 'Terminé' : 'Démarrer'}</button>
                     <button onClick={handleReset} className="control-button reset-button flex items-center px-6 py-2 rounded-lg font-semibold bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"><i className="fas fa-redo-alt mr-2" aria-hidden="true"></i> Réinitialiser</button>
                 </div>
             </div>
            {/* Grilles d'automatismes (inchangées) */}
            <div className="automatisme-container max-w-4xl mx-auto px-4 pb-8 pt-4">
                <AutomatismeGrid title="Tables de multiplication" description="Cliquez pour afficher la réponse." items={multiplicationItems} resetSignal={resetSignal} />
                <AutomatismeGrid title="Calcul mental (+/-)" description="Cliquez pour afficher la réponse." items={calculItems} resetSignal={resetSignal} />
                <AutomatismeGrid title="Fractions simples (Simplification)" description="Cliquez pour afficher la réponse." items={fractionItems} resetSignal={resetSignal} />
            </div>
        </>
    );
}

export default AutomatismesPage;
