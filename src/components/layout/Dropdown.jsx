// src/components/layout/Dropdown.jsx
import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ label, items, currentPage, setActivePage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const leaveTimeout = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(leaveTimeout.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        leaveTimeout.current = setTimeout(() => {
            setIsOpen(false);
        }, 150);
    };

    const handleItemClick = (page) => {
        setActivePage(page);
        setIsOpen(false);
    };

    useEffect(() => {
        return () => clearTimeout(leaveTimeout.current);
    }, []);

    const isLevelActive = items.some(item => currentPage === item.page);

    return (
        <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
                className={`text-gray-600 dark:text-gray-300 no-underline font-medium text-base transition-colors duration-300 relative hover:text-gray-900 dark:hover:text-white ${isLevelActive ? 'text-gray-900 dark:text-white' : ''} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-1/2 after:bg-current after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full ${isLevelActive ? 'after:w-full' : ''}`}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {label}
            </button>
            <ul className={`absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white/90 dark:bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-lg p-2 z-50 transition-all duration-150 ease-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
                {items.map(item => {
                    const isActive = currentPage === item.page;
                    return (
                        <li key={item.page}>
                            <a
                                href={`#${item.page}`}
                                onClick={(e) => { e.preventDefault(); handleItemClick(item.page); }}
                                className={`block px-3 py-2 text-sm rounded-md text-left ${isActive ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                            >
                                {item.label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </li>
    );
};

export default Dropdown;