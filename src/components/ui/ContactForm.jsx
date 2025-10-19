// src/components/Common/ContactForm.js
import React, { useState, useEffect, useRef } from 'react';
import Button from './Button'; // ★★★ Importer le composant Button ★★★

/**
 * Formulaire de contact stylisé.
 * Utilise maintenant le composant Button réutilisable.
 */
function ContactForm() {
    const formRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    // États pour les champs du formulaire (passage en mode contrôlé)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        confirmEmail: '',
        level: '',
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        const currentRef = formRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);

    // Gère les changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Efface l'erreur dès que l'utilisateur modifie un des champs email
        if (name === 'email' || name === 'confirmEmail') {
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation de la confirmation d'email
        if (formData.email !== formData.confirmEmail) {
            setError('Les adresses e-mail ne correspondent pas.');
            return; // Arrête la soumission
        }
        // Réinitialise l'erreur si la validation passe
        setError('');
        setSuccessMessage('Formulaire envoyé (simulation) !');
        console.log('Formulaire soumis avec les données:', formData);
        // Réinitialise le formulaire après un court délai
        setTimeout(() => {
            setFormData({ name: '', email: '', confirmEmail: '', level: '' });
            setSuccessMessage('');
        }, 3000);
    };

    const formClasses = `bg-gray-900/80 dark:bg-black/60 backdrop-blur-lg p-8 md:p-12 rounded-2xl text-white shadow-2xl border border-white/10 transition-all duration-700 ease-out perspective-[1000px] transform-style-preserve-3d hover:shadow-[0_25px_50px_-12px_rgba(99,102,241,0.4)] dark:hover:shadow-[0_25px_50px_-12px_rgba(251,146,60,0.4)] ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-10 rotate-x-[-10deg]'}`;

    return (
        <section id="contact" className="my-24 mx-auto max-w-xl px-4 perspective-[1000px]">
            <div ref={formRef} className={formClasses}>
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark bg-clip-text text-transparent">
                    Contact
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Champs Nom, Email, Niveau (inchangés) */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-300">Nom complet :</label>
                        <input type="text" id="name" name="name" placeholder="Votre nom" required aria-required="true" value={formData.name} onChange={handleChange} className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition duration-300 placeholder-gray-400"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">Adresse e-mail :</label>
                        <input type="email" id="email" name="email" placeholder="votre@email.com" required aria-required="true" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition duration-300 placeholder-gray-400"/>
                    </div>
                    {/* Champ de confirmation d'email */}
                    <div>
                        <label htmlFor="confirmEmail" className="block text-sm font-medium mb-1 text-gray-300">Confirmez votre e-mail :</label>
                        <input type="email" id="confirmEmail" name="confirmEmail" placeholder="votre@email.com" required aria-required="true" value={formData.confirmEmail} onChange={handleChange} className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition duration-300 placeholder-gray-400"/>
                    </div>
                    {/* Affichage du message d'erreur */}
                    {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                    <div>
                        <label htmlFor="level" className="block text-sm font-medium mb-1 text-gray-300">Niveau actuel :</label>
                        <select id="level" name="level" required aria-required="true" value={formData.level} onChange={handleChange} className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark transition duration-300 appearance-none" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24"><path d="M7 10l5 5 5-5z"/></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}>
                            <option value="" className="text-black">Sélectionnez niveau</option>
                            <option value="6eme" className="text-black">6ème</option>
                            <option value="5eme" className="text-black">5ème</option>
                            <option value="4eme" className="text-black">4ème</option>
                            <option value="3eme" className="text-black">3ème</option>
                        </select>
                    </div>

                    {/* ★★★ Utilisation du composant Button ★★★ */}
                    <Button
                        type="submit"
                        size="lg" // Utilise la taille 'lg' définie dans Button.js
                        variant="primary" // Utilise la variante 'primary' (couleur thème)
                        className="w-full uppercase tracking-wider" // Ajoute des styles spécifiques
                    >
                        <i className="fas fa-rocket mr-2"></i> Envoyer
                    </Button>
                    {/* Affichage du message de succès */}
                    {successMessage && <p className="text-green-400 text-sm text-center">{successMessage}</p>}
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
