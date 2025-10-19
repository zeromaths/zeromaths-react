// src/components/Layout/Footer.js
import React, { useMemo } from 'react';

/**
 * Pied de page de l'application.
 * Affiche le logo, les liens de navigation rapides, les infos de contact et le copyright.
 * Rétablit l'effet de soulignement au survol sur les liens.
 * Utilise les couleurs centralisées du thème.
 * @param {object} props - Props reçues du composant App.
 * @param {function} props.setActivePage - Fonction pour changer la page active.
 */
function Footer({ setActivePage }) {
    // Définit les liens à afficher dans le footer
    const footerLinks = useMemo(() => [
        { label: 'Accueil', page: 'home' },
        { label: 'A propos', page: 'about' },
        { label: 'Cours', page: 'cours' },
        { label: 'Révisions Brevet', page: 'revision-brevet' },
        { label: 'Espace Élève', page: 'espace-eleve' },
        { label: 'Espace Parents', page: 'espace-parents' },
        { label: 'Blog & Astuces', page: 'blog' },
        { label: 'Notre pédagogie', page: 'pedagogie' },
        { label: 'Tarifs', page: 'tarifs' },
        { label: 'Mentions légales', page: 'mentions-legales' },
    ], []);

    // Gestionnaire de clic pour les liens du footer
    const handleFooterLinkClick = (e, page) => {
        e.preventDefault();
        setActivePage(page);
    };

    // Classes communes pour l'effet de soulignement des liens du footer
    const linkHoverUnderlineClasses = "relative after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

    return (
        <footer className="bg-black text-gray-400 py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
                {/* Colonne 1: Logo & Social */}
                <div className="space-y-4">
                    {/* Logo cliquable avec effet soulignement */}
                    <a href="#home" onClick={(e) => handleFooterLinkClick(e, 'home')} className={`inline-block text-lg font-bold text-white transition-colors ${linkHoverUnderlineClasses} hover:text-primary-light dark:hover:text-primary-dark-light`}>
                        Maths Collège
                    </a>
                    <p>La réussite en maths, accessible à tous les collégiens.</p>
                    {/* Icônes réseaux sociaux */}
                    <div className="flex space-x-3">
                        {/* eslint-disable jsx-a11y/anchor-is-valid */}
                        <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-primary dark:hover:bg-primary-dark-dark text-white flex items-center justify-center transition-colors duration-300"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Twitter X" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-primary dark:hover:bg-primary-dark-dark text-white flex items-center justify-center transition-colors duration-300 font-bold text-lg fa-x-custom"></a>
                        <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-primary dark:hover:bg-primary-dark-dark text-white flex items-center justify-center transition-colors duration-300"><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Youtube" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-primary dark:hover:bg-primary-dark-dark text-white flex items-center justify-center transition-colors duration-300"><i className="fab fa-youtube"></i></a>
                        {/* eslint-enable jsx-a11y/anchor-is-valid */}
                    </div>
                </div>

                {/* Colonne 2 & 3: Liens de Navigation */}
                <div className="space-y-4">
                     {/* Titre de colonne avec bordure couleur thème */}
                    <h3 className="text-lg font-semibold text-white border-b-2 border-primary dark:border-primary-dark pb-1 inline-block">Navigation</h3>
                    <ul className="space-y-2">
                        {/* Affiche la première moitié des liens */}
                        {footerLinks.slice(0, Math.ceil(footerLinks.length / 2)).map(link => (
                            <li key={link.page}>
                                {/* ★★★ Ajout des classes pour le soulignement ★★★ */}
                                <a href={`#${link.page}`} onClick={(e) => handleFooterLinkClick(e, link.page)} className={`hover:text-primary-light dark:hover:text-primary-dark-light transition-colors ${linkHoverUnderlineClasses}`}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4">
                    {/* Affiche la seconde moitié des liens (avec padding pour alignement) */}
                    <ul className="space-y-2 lg:pt-10"> {/* pt-10 pour aligner visuellement avec le titre de l'autre colonne */}
                        {footerLinks.slice(Math.ceil(footerLinks.length / 2)).map(link => (
                            <li key={link.page}>
                                {/* ★★★ Ajout des classes pour le soulignement ★★★ */}
                                <a href={`#${link.page}`} onClick={(e) => handleFooterLinkClick(e, link.page)} className={`hover:text-primary-light dark:hover:text-primary-dark-light transition-colors ${linkHoverUnderlineClasses}`}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                         {/* Ajoute le lien Contact ici aussi */}
                         <li>
                            {/* ★★★ Ajout des classes pour le soulignement ★★★ */}
                            <a href="#contact" onClick={(e) => handleFooterLinkClick(e, 'contact')} className={`hover:text-primary-light dark:hover:text-primary-dark-light transition-colors ${linkHoverUnderlineClasses}`}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Colonne 4: Informations de Contact */}
                <div className="space-y-4">
                    {/* Titre de colonne avec bordure couleur thème */}
                    <h3 className="text-lg font-semibold text-white border-b-2 border-primary dark:border-primary-dark pb-1 inline-block">Contact</h3>
                    <ul className="space-y-2">
                        {/* Icônes et liens avec couleurs thème */}
                        {/* ★★★ Ajout des classes pour le soulignement aux liens mail et tel ★★★ */}
                        <li className="flex items-center"><i className="fas fa-envelope mr-2 text-primary-light dark:text-primary-dark-light"></i> <a href="mailto:contact@zeromaths.fr" className={`hover:text-primary-light dark:hover:text-primary-dark-light transition-colors ${linkHoverUnderlineClasses}`}>contact@zeromaths.fr</a></li>
                        <li className="flex items-center"><i className="fas fa-phone mr-2 text-primary-light dark:text-primary-dark-light"></i> <a href="tel:+33612345678" className={`hover:text-primary-light dark:hover:text-primary-dark-light transition-colors ${linkHoverUnderlineClasses}`}>+33 6 12 34 56 78</a></li>
                        <li className="flex items-center"><i className="fas fa-map-marker-alt mr-2 text-primary-light dark:text-primary-dark-light"></i> Nice, France</li> {/* Pas un lien ici */}
                    </ul>
                </div>
            </div>
            {/* Copyright */}
            <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
                © {new Date().getFullYear()} Zeromaths.fr – Tous droits réservés.
            </div>
        </footer>
    );
}

export default Footer;
