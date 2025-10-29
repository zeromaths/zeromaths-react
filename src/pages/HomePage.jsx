// src/pages/HomePage.js
import React from 'react';
// Import des composants réutilisables nécessaires
import GlassTitle from '../components/ui/GlassTitle';
import HomeBanner from '../components/ui/HomeBanner';
import CardsSection from '../components/ui/CardsSection';
import Card from '../components/ui/Card';
import ContactForm from '../components/ui/ContactForm';

/**
 * Composant représentant la page d'accueil.
 * @param {object} props - Props reçues du composant App.
 * @param {function} props.setActivePage - Fonction pour changer la page active.
 */
function HomePage({ setActivePage }) {
    return (
        <>
            {/* Titre principal */}
            <GlassTitle title="Zeromaths" subtitle="La réussite en maths, accessible à tous" />

            {/* Bannière d'introduction */}
            <HomeBanner
                title="Bienvenue sur Zeromaths"
                text="Plateforme innovante pour découvrir et maîtriser les mathématiques de manière ludique et efficace. Notre approche unique transforme l'apprentissage des maths en une expérience engageante et accessible à tous les niveaux du collège."
            />

            {/* Section de cartes d'introduction */}
            <CardsSection
                items={[
                    // Données pour les cartes
                    { id: 'progressif', icon: 'fas fa-chart-line', title: 'Apprentissage Progressif', description: 'Nos cours sont conçus pour vous faire progresser étape par étape...', linkText: 'Découvrir les cours →', page: 'cours' },
                    { id: 'ludique', icon: 'fas fa-gamepad', title: 'Approche Ludique', description: 'Nous transformons les mathématiques en jeu...', linkText: 'Jouer et apprendre →', page: 'games-6eme' }, // Lien temporaire vers jeux 6e
                    { id: 'communaute', icon: 'fas fa-users', title: 'Communauté Active', description: 'Rejoignez une communauté dynamique...', linkText: 'Nous contacter →', page: 'contact' } // Action spéciale pour le contact
                ]}
                // Fonction pour rendre chaque carte
                renderCard={(item, index) => (
                    <Card
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        linkText={item.linkText}
                        // Gère le clic sur la carte ou son lien
                        onClick={() => {
                            if (item.page === 'contact') {
                                // Si c'est la carte contact, scroll vers la section
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            } else {
                                // Sinon, change de page
                                setActivePage(item.page);
                            }
                        }}
                        delay={index * 0.15} // Animation décalée
                    />
                )}
            />

            {/* Formulaire de contact */}
            <ContactForm />
        </>
    );
}

export default HomePage;
