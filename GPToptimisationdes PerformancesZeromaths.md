# Rapport d’optimisation de performance

Ce document détaille les actions à entreprendre pour optimiser les performances de votre projet, en s’appuyant sur l’audit Lighthouse fourni.

---

## 1. Éliminer les ressources bloquantes

**Fichier concerné** : `public/index.html`

- **Préconnexion aux ressources externes**  
  ```html
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  ```
- **Préchargement des polices critiques**  
  ```html
  <link
    rel="preload"
    as="font"
    href="/fonts/Inter-VariableFont_slnt,wght.ttf"
    type="font/ttf"
    crossorigin>
  ```
- **Chargement différé du CSS non critique**  
  ```html
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    media="print"
    onload="this.media='all'">
  <noscript>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  </noscript>
  ```

**Objectif** : réduire le temps avant premier rendu en ne bloquant pas le thread principal avec des ressources non essentielles.

---

## 2. Purger le CSS superflu

**Fichiers concernés** : `tailwind.config.js`, `postcss.config.js`, `src/index.css`

- **Configuration de Tailwind pour extraire uniquement le CSS utilisé**  
  ```js
  // tailwind.config.js
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    // ...
  }
  ```
- **PurgeCSS dans PostCSS**  
  ```js
  // postcss.config.js
  module.exports = {
    plugins: [
      require('tailwindcss'),
      process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.jsx', './public/index.html'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }),
      require('autoprefixer')
    ].filter(Boolean)
  }
  ```

**Objectif** : diminuer la taille finale du CSS en éliminant plus de 30 KiB de règles inutilisées.

---

## 3. Fractionner et alléger le JavaScript

**Fichiers concernés** : `src/App.jsx`, composants lourds (`src/components/...`), `package.json`

- **Utilisation de `React.lazy` et `Suspense`**  
  ```jsx
  import React, { Suspense, lazy } from 'react';

  const MathJax = lazy(() => import('./components/MathJaxLoader'));

  function App() {
    return (
      <Suspense fallback={<div>Chargement…</div>}>
        <MathJax />
        {/* … */}
      </Suspense>
    );
  }
  ```
- **Minification et tree‑shaking**  
  - Vérifier les flags de build (`react-scripts build` ou équivalent).
  - Utiliser `Terser` / `esbuild` pour réduire la taille des bundles.

**Objectif** : réduire le Total Blocking Time et la taille des bundles JS (~4 s de gain potentiel).

---

## 4. Scinder les tâches longues sur le main thread

**Fichier concerné** : `src/workers/heavyTask.worker.js` et appels dans le code principal

- **Création d’un Web Worker**  
  ```js
  // src/workers/heavyTask.worker.js
  self.onmessage = ({ data }) => {
    const result = heavyComputation(data);
    self.postMessage(result);
  };
  ```
  ```js
  // dans votre code principal (ex. src/main.js)
  const worker = new Worker(new URL('./workers/heavyTask.worker.js', import.meta.url));
  worker.postMessage(inputData);
  worker.onmessage = ({ data }) => {
    // traitement du résultat
  };
  ```

**Objectif** : éviter les blocages > 50 ms sur le thread principal pour conserver une interface fluide.

---

## 5. Améliorer le Largest Contentful Paint (LCP)

**Fichiers concernés** : `src/index.css`, `public/index.html`

- **Font-face avec `font-display: swap`**  
  ```css
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-VariableFont_slnt,wght.ttf') format('truetype');
    font-display: swap;
  }
  ```
- **Prélèvement des polices critiques** (voir section 1).

**Objectif** : accélérer l’affichage du contenu principal (LCP ~8,3 s → gain potentiel ≥ 1,5 s).

---

## 6. Réduire la complexité du DOM

**Fichiers concernés** : composants de navigation (`src/components/Navigation.jsx`, `Menu.jsx`, etc.)

- **Virtualisation des listes volumineuses**  
  Installer et utiliser `react-window` :
  ```bash
  npm install react-window
  ```
  ```jsx
  import { FixedSizeList as List } from 'react-window';

  <List
    height={500}
    itemCount={items.length}
    itemSize={35}
  >
    {({ index, style }) => (
      <div style={style}>{items[index]}</div>
    )}
  </List>
  ```
- Réduire la profondeur des composants imbriqués (viser ≤ 5 niveaux).

**Objectif** : réduire les calculs de style/layout et améliorer le First Input Delay (FID).

---

## 7. Exclure le code de développement en production

**Fichier concerné** : `webpack.config.js` ou équivalent

- **Désactivation des plugins dev**  
  ```js
  if (process.env.NODE_ENV === 'production') {
    config.plugins = config.plugins.filter(
      p => p.constructor.name !== 'ReactRefreshPlugin'
    );
  }
  ```
- Vérifier que `react-devtools` n’est pas injecté en production.

**Objectif** : alléger le bundle final en supprimant les surcouches de debug et profiler.

---

## Conclusion

En appliquant ces actions ciblées dans les fichiers mentionnés, votre projet verra :
- Un rendu plus rapide (FCP, LCP accélérés)
- Des interactions plus fluides (FID, TBT réduits)
- Une empreinte réseau diminuée (CSS & JS optimisés)

Prêt à passer à la mise en œuvre ? 🚀
