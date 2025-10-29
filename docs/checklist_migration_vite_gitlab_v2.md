# ✅ Check-list mise à jour — Corriger les 404 et la page blanche (Vite + GitLab Pages)

**Date :** 2025‑10‑04  
**But :** Éliminer les 404 sur `index-*.css/js`, fixer le *base path*, éviter les URLs absolues et publier correctement sur GitLab Pages.

---

## 0) Pré‑requis
- Node 20+ (`node -v`), npm 10+ (`npm -v`)
- Projet migré vers **Vite** (pas `react-scripts`)
- Arbo : `public/` pour les assets statiques (PDF, favicon…), `src/` pour le code

---

## 1) `package.json` (scripts Vite)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port 4173"
  }
}
```
- ❌ Supprimer `react-scripts`
- ✅ `npm i -D vite @vitejs/plugin-react` (et Tailwind si utilisé)

---

## 2) `vite.config.js` — définir le *base path*
> Remplacer `<repo>` par le **nom exact** du dépôt GitLab Pages.
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/<repo>/'      // ex: '/zeromaths-react/'
})
```
> Alternative portable : `base: './'` (chemins relatifs).

---

## 3) `index.html` — éviter les URLs absolues
- Utiliser des **chemins relatifs** pour les ressources statiques :
  - **Avant** : `<link rel="icon" href="/favicon.ico">`
  - **Après** : `<link rel="icon" href="favicon.ico">`
- Garder le script Vite :
```html
<script type="module" src="/src/main.jsx"></script>
```
> Vite réécrit automatiquement en prod. Les autres liens (favicon, images) **ne sont pas** réécrits : **pas de `/` en tête**.

### (Optionnel) Police Material Icons
- Retirer le `preload` si non utilisée immédiatement (évite le warning) :
```html
<!-- <link rel="preload" href="https://fonts.gstatic.com/…materialicons….woff2" as="font" type="font/woff2" crossorigin> -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

---

## 4) `src/main.jsx`
```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

---

## 5) Tailwind (si utilisé)
Dans `tailwind.config.js` :
```js
content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"]
```

---

## 6) CI GitLab Pages — publier `dist/` en `public/`
`.gitlab-ci.yml` :
```yaml
image: node:20

pages:
  stage: deploy
  cache:
    paths:
      - node_modules/
  script:
    - npm ci
    - npm run build      # -> génère dist/
    - rm -rf public      # supprimer ancienne publication
    - mv dist public     # publier le build
  artifacts:
    paths:
      - public
  only:
    - main
```
> ⚠️ Ne **supprime pas** le dossier source `public/` **avant** le build : Vite doit le copier dans `dist/`.

---

## 7) Contrôles après build (locaux & prod)
- [ ] Ouvrir `dist/index.html` et vérifier que les liens **CSS/JS** pointent vers `/<repo>/assets/...` (ou chemins relatifs si `base: './'`)
- [ ] Dans l’onglet **Network** du navigateur, aucun 404 pour `index-*.css` / `index-*.js`
- [ ] Les PDFs/images de `public/` sont présents dans la publication
- [ ] L’URL de prod est bien `https://<username>.gitlab.io/<repo>/` et **s’affiche sans page blanche**

---

## 8) Dépannage rapide (si 404 persistent)
- [ ] `vite.config.js` : le `base` correspond exactement au **nom du repo**
- [ ] `index.html` : pas de `href="/…"` ni `src="/…"` hors script Vite
- [ ] `.gitlab-ci.yml` : `mv dist public` bien exécuté **après** `npm run build`
- [ ] Vider le cache GitLab Pages (forcer un nouveau pipeline / commit)
- [ ] Tester `base: './'` si le site doit fonctionner à plusieurs emplacements

---

## 9) Option CRA (non recommandé mais possible)
- Garder `react-scripts`
- `package.json` → `"homepage": "https://<username>.gitlab.io/<repo>/"` (ou `"."`)
- CI : `npm run build && mv build public`

---

**OK final attendu**
- Aucune 404, pas de “Unexpected token '<'”
- Page charge correctement le CSS/JS sous `/<repo>/`
- Les PDF/images sont accessibles
