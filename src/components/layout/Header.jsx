// src/components/layout/Header.jsx
import React, { useState } from 'react';
import Dropdown from './Dropdown'; // Importer le nouveau composant Dropdown
import DarkModeToggle from './DarkModeToggle';

const Header = ({ navLinks, currentPage, setActivePage, toggleMobileMenu, isMobileMenuOpen, isDarkMode, toggleDarkMode }) => {
    const [expandedDropdown, setExpandedDropdown] = useState(null);

    const handleNavClick = (e, page, onClick) => {
        e.preventDefault();
        if (onClick) {
            onClick(e);
        } else if (page) {
            setActivePage(page);
        }
        // On ne ferme le menu que si on a cliqué sur un lien qui change la page
        if (isMobileMenuOpen && page) {
            // On utilise un petit délai pour laisser le temps à la navigation de se faire sentir
            setTimeout(() => toggleMobileMenu(), 100);
        }
    };

    // Filtrer le lien "Accueil" pour ne pas le dupliquer
    const filteredNavLinks = navLinks ? navLinks.filter(link => link.page !== 'home') : [];

    return (
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-full py-3 px-4 sm:px-8 border border-gray-200 dark:border-gray-700 z-[1000] shadow-lg w-[95%] max-w-5xl">
            <div className="flex items-center justify-between gap-4">
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-2 text-lg font-bold text-gray-800 dark:text-white no-underline transition-opacity duration-300 hover:opacity-80">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="hidden sm:inline">Accueil</span>
                </a>
                
                {/* Navigation Desktop */}
                <div className="hidden lg:flex items-center flex-grow justify-center">
                    <ul className="flex list-none gap-10">
                        {filteredNavLinks.map(link => {
                            if (link.isDropdown) {
                                return (
                                    <Dropdown
                                        key={link.key}
                                        label={link.label}
                                        items={link.items}
                                        currentPage={currentPage}
                                        setActivePage={setActivePage}
                                    />
                                );
                            }
                            const isActive = currentPage === link.page;
                            return (
                                <li key={link.page}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.page, link.onClick)}
                                        className={`text-gray-600 dark:text-gray-300 no-underline font-medium text-base transition-colors duration-300 relative hover:text-gray-900 dark:hover:text-white ${isActive ? 'text-gray-900 dark:text-white' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-1/2 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full ${isActive ? 'after:w-full' : ''}`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    {/* Bouton Compte Desktop */}
                    <a href="#compte" onClick={(e) => handleNavClick(e, 'espace-eleve')} className="flex items-center gap-2 py-2 px-5 rounded-full text-white bg-gray-800 dark:text-black dark:bg-white font-medium text-sm transition-transform duration-300 hover:-translate-y-px whitespace-nowrap">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Compte</span>
                    </a>
                </div>

                {/* Bouton Hamburger Mobile */}
                <button className="lg:hidden menu-toggle text-gray-800 dark:text-white text-2xl" onClick={toggleMobileMenu}>
                    ☰
                </button>
            </div>

            {/* Menu Mobile */}
            <div className={`lg:hidden absolute top-full left-0 w-full mt-2 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                <ul className="flex flex-col bg-white/90 dark:bg-gray-900/95 backdrop-blur-lg rounded-xl p-4 gap-2 shadow-lg border border-gray-200 dark:border-gray-700">
                    {filteredNavLinks.map(link => (
                        <li key={link.page || link.key}>
                            <a
                                href={link.href || `#${link.page}`}
                                onClick={(e) => {
                                    if (link.isDropdown) {
                                        e.preventDefault();
                                        setExpandedDropdown(expandedDropdown === link.key ? null : link.key);
                                    } else {
                                        handleNavClick(e, link.page, link.onClick);
                                        toggleMobileMenu();
                                    }
                                }}
                                className="block text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white py-2 rounded-md"
                            >
                                <div className="flex items-center justify-between">
                                    <span>{link.label}</span>
                                    {link.isDropdown && (
                                        <svg className={`w-5 h-5 transition-transform duration-300 ${expandedDropdown === link.key ? 'transform rotate-180' : ''}`}>
                                            <path fill="currentColor" d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z"/>
                                        </svg>
                                    )}
                                </div>
                            </a>
                            {link.isDropdown && expandedDropdown === link.key && (
                                <ul className="pl-4">
                                    {link.items.map(item => (
                                        <li key={item.page}>
                                            <a
                                                href={`#${item.page}`}
                                                onClick={(e) => {handleNavClick(e, item.page); toggleMobileMenu();}}
                                                className="block text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white py-2 rounded-md"
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <li>
                        <div className="flex items-center justify-center mt-2">
                            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                        </div>
                    </li>
                     <li>
                        <a href="#compte" onClick={(e) => {handleNavClick(e, 'espace-eleve'); toggleMobileMenu();}} className="flex items-center justify-center gap-2 py-2 px-5 rounded-full text-white bg-gray-800 dark:text-black dark:bg-white font-medium text-sm w-full mt-2">
                            <span>Compte</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
