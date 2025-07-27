// src/components/Common/PdfViewer.js
import React, { useState, useEffect, useRef } from 'react';
import { Document, Page } from 'react-pdf'; // react-pdf est nécessaire

/**
 * Composant pour afficher un PDF avec pagination et style vitré.
 * @param {object} props - Props du composant.
 * @param {string} props.fileUrl - Chemin public vers le fichier PDF.
 */
function PdfViewer({ fileUrl }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfError, setPdfError] = useState(null);
    const [containerWidth, setContainerWidth] = useState(null);
    const containerRef = useRef(null);

    // Réinitialise à la page 1 quand le fichier change
    useEffect(() => {
        setPageNumber(1);
        setNumPages(null); // Réinitialise aussi le nombre de pages
        setPdfError(null); // Efface les erreurs précédentes
    }, [fileUrl]);

    // Callback quand le document est chargé
    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    // Callback en cas d'erreur de chargement
    function onDocumentLoadError(error) {
        console.error('Erreur chargement PDF:', error);
        setPdfError(`Erreur chargement PDF: ${error.message}. Vérifiez le chemin.`);
    }

    // Fonctions de pagination
    function goToPreviousPage() { setPageNumber(prev => Math.max(prev - 1, 1)); }
    function goToNextPage() { setPageNumber(prev => Math.min(prev + 1, numPages)); }

    // Gère les clics sur les liens internes/sommaire du PDF
    const handleItemClick = ({ pageNumber: itemPageNumber }) => {
        console.log('Clic sur item interne PDF, destination page:', itemPageNumber);
        setPageNumber(itemPageNumber);
    };

    // Met à jour la largeur du conteneur pour le rendu responsive
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };
        updateWidth(); // Appel initial
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth); // Nettoyage
    }, []);

    return (
        <div
            ref={containerRef}
            className="pdf-viewer-container max-w-4xl mx-auto my-8 p-4 bg-white/20 dark:bg-black/30 backdrop-blur-lg rounded-lg shadow-xl border border-white/10"
        >
            {/* Affichage de l'erreur */}
            {pdfError && (
                <div className="text-center text-red-600 dark:text-red-400 p-4 bg-red-100 dark:bg-red-900/50 rounded mb-4">
                    <p>{pdfError}</p>
                    <p>Chemin tenté : <code className="text-sm bg-gray-300 dark:bg-gray-600 px-1 rounded">{fileUrl}</code></p>
                </div>
            )}

            {/* Document PDF */}
            <Document
                file={fileUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                onItemClick={handleItemClick} // Gère les clics sur le sommaire/liens internes
                loading={<div className="text-center p-4 text-gray-700 dark:text-gray-300">Chargement du PDF...</div>}
                error={<div className="text-center text-red-500 p-4">Erreur chargement document.</div>}
                className="flex justify-center pdf-document-wrapper min-h-[70vh]" // min-height pour éviter saut
            >
                {/* Affiche la page courante */}
                <Page
                    key={`page_${pageNumber}`} // Ajout d'une clé pour forcer le re-rendu si nécessaire
                    pageNumber={pageNumber}
                    width={containerWidth ? Math.min(containerWidth * 0.95, 800) : undefined} // Largeur responsive
                    renderTextLayer={true} // Permet la sélection de texte
                    renderAnnotationLayer={true} // Permet les liens cliquables
                    loading={<div className="text-center p-2 min-h-[70vh] flex items-center justify-center text-gray-500">Chargement page {pageNumber}...</div>}
                    className="pdf-page-wrapper shadow-lg" // Ombre sur la page
                />
            </Document>

            {/* Contrôles de pagination */}
            {numPages && (
                <div className="pagination-controls flex justify-center items-center mt-4 space-x-4">
                    <button
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={goToPreviousPage}
                        className="px-3 py-1 rounded bg-primary dark:bg-primary-dark text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark dark:hover:bg-primary-dark-dark transition-colors shadow-sm"
                    >
                        Précédent
                    </button>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 bg-white/30 dark:bg-black/20 px-3 py-1 rounded-md">
                        Page {pageNumber} sur {numPages}
                    </p>
                    <button
                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={goToNextPage}
                        className="px-3 py-1 rounded bg-primary dark:bg-primary-dark text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark dark:hover:bg-primary-dark-dark transition-colors shadow-sm"
                    >
                        Suivant
                    </button>
                </div>
            )}
        </div>
    );
}

export default PdfViewer;
