/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
       fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
      // ★★★ Couleurs Rétablies (Orange = Clair, Bleu = Sombre) ★★★
      colors: {
       // --- Mode Clair (Bleu/Violet/Indigo) ---
        'primary': { // Bleu principal
          light: '#93c5fd',    // blue-300 (pour hover très léger ou fond)
          DEFAULT: '#3b82f6', // blue-500 (couleur principale)
          dark: '#2563eb'     // blue-600 (pour hover foncé/dégradé)
        },
        'secondary': { // Violet/Pourpre secondaire
          light: '#c4b5fd',    // violet-300
          DEFAULT: '#8b5cf6', // violet-500 (couleur principale)
          dark: '#7c3aed'     // violet-600
        },
        // --- Mode Sombre (Orange/Ambre) ---
        'primary-dark': { // Orange principal
           light: '#fdba74',   // orange-300 (pour hover léger ou fond)
           DEFAULT: '#f97316', // orange-500 (couleur principale)
           dark: '#ea580c'    // orange-600 (pour hover foncé/dégradé)
        },
        'secondary-dark': { // Ambre secondaire
            light: '#fcd34d',   // amber-300
            DEFAULT: '#fbbf24', // amber-400 (couleur principale)
            dark: '#f59e0b'    // amber-500
        },
        // --- Autres couleurs sémantiques (inchangées) ---
        'accent': {
            DEFAULT: '#ec4899', // pink-500
            dark: '#f472b6'    // pink-400
        },
      },
      // ... autres extensions (keyframes, animation, perspective) ...
      keyframes: {
        fadeInUp: { 'from': { opacity: '0', transform: 'translateY(20px)' }, 'to': { opacity: '1', transform: 'translateY(0)' }, },
         scaleUp: { 'from': { transform: 'scale(0.95)' }, 'to': { transform: 'scale(1)' }, }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
         scaleUp: 'scaleUp 0.5s ease-out forwards',
      },
      perspective: { '1000': '1000px', },
    },
  },
  plugins: [],
}



