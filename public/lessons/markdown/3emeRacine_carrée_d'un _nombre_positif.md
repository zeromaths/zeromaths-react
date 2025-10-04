---
title: "Racines Carrées d'un Nombre Positif"
level: "3ème"
subject: "Nombres et Calculs"
keywords: ["racine carrée", "carré parfait", "valeur exacte", "valeur approchée", "encadrement"]
related_concepts: ["theoreme_de_pythagore", "simplification_racines"]
---

# Racines Carrées d'un Nombre Positif

---

## 🎯 Objectifs de la Leçon

À la fin de cette leçon, tu seras capable de :
* Définir et calculer la racine carrée d'un nombre positif.
* Connaître par cœur la liste des carrés parfaits jusqu'à $15^2 = 225$.
* Faire la différence cruciale entre une **valeur exacte** et une **valeur approchée**.
* **Encadrer** la racine carrée d'un nombre entre deux entiers consécutifs.

---

## 🚀 Mise en Situation

Imagine un jardinier qui souhaite créer un potager carré d'une superficie exacte de 20 mètres carrés. Pour délimiter son potager, il a besoin de connaître la longueur précise de son côté.
Il sait que Aire = côté × côté = côté². Donc, côté = $\sqrt{20}$ mètres.

En utilisant sa calculatrice, il trouve environ 4,47 mètres. Mais ce n'est qu'une **valeur approchée**. S'il utilise cette mesure, l'aire ne sera pas *exactement* de 20 m². Comment peut-il travailler avec la valeur exacte ? Comment peut-il estimer rapidement sa mesure sans calculatrice ? Ce chapitre répond à ces questions !

---

## Pré-requis

Pour être à l'aise avec ce chapitre, il est important de :
* Bien connaître ses **tables de multiplication**.
* Savoir ce qu'est le **carré d'un nombre** (calculer $x^2$).
* Savoir comparer des nombres décimaux.

---

## 📚 Cours

### A. Définition de la Racine Carrée

La **racine carrée** d'un nombre positif $a$, notée $\sqrt{a}$, est le **nombre positif** qui, multiplié par lui-même, donne $a$.

On a donc :
$$ (\sqrt{a})^2 = a \quad \text{et} \quad \sqrt{a} \ge 0 $$

* **Exemple :**
    * $\sqrt{49} = 7$ car $7 \times 7 = 49$ et $7$ est un nombre positif.
* **Contre-exemple :**
    * On ne peut pas calculer la racine carrée d'un nombre négatif. $\sqrt{-16}$ n'existe pas dans les nombres que nous utilisons au collège.
    * Attention, bien que $(-7)^2 = 49$, la racine carrée de 49 n'est que $7$. Par définition, le symbole $\sqrt{...}$ désigne toujours le résultat positif.

### B. Les Carrés Parfaits (à mémoriser)

Un **carré parfait** est un nombre dont la racine carrée est un nombre entier. Il est essentiel de les connaître pour aller vite dans les calculs et les estimations.

| $x$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| :--: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| $x^2$ | 0 | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 | 121 | 144 | 169 | 196 | 225 |
| $\sqrt{x^2}$| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |

### C. Valeur Exacte vs. Valeur Approchée

Il est crucial de faire la différence entre ces deux notions.

* **Valeur Exacte :** C'est la valeur précise, non modifiée. La forme $\sqrt{a}$ est une valeur exacte.
* **Valeur Approchée :** C'est une valeur décimale que l'on a arrondie ou tronquée, car la division "ne se termine pas". On utilise le symbole $\approx$.

* **Exemple :** On veut calculer le côté d'un carré d'aire 10 cm².
    * La longueur exacte du côté est $\sqrt{10}$ cm.
    * Une valeur approchée au centième est $3,16$ cm, car $3,16^2 = 9,9856$, ce qui est proche de 10.

* **Contre-exemple :** On veut calculer le côté d'un carré d'aire 36 cm².
    * La longueur exacte du côté est $\sqrt{36}$ cm, ce qui est égal à $6$ cm.
    * Ici, la valeur exacte est un nombre entier. Il n'y a pas besoin de valeur approchée.

> **Règle d'or :** En mathématiques, on garde toujours la valeur exacte ($\sqrt{10}$) dans les calculs. On ne donne une valeur approchée ($3,16$) que si l'énoncé le demande explicitement à la fin.

---

## 🛠️ Méthode(s)

### Méthode : Encadrer une racine carrée entre deux entiers consécutifs

Pour trouver rapidement une estimation de $\sqrt{N}$ sans calculatrice.

1.  **Trouver les carrés parfaits** qui se situent juste avant et juste après le nombre $N$.
2.  Écrire l'inégalité correspondante.
3.  Passer à la racine carrée pour trouver l'encadrement de $\sqrt{N}$.

* **Exemple :** Encadrer $\sqrt{57}$.
    1.  Je cherche les carrés parfaits autour de 57. Dans la liste, je vois $49$ ($=7^2$) et $64$ ($=8^2$).
    2.  J'écris l'inégalité : $49 < 57 < 64$.
    3.  Je passe à la racine carrée : $\sqrt{49} < \sqrt{57} < \sqrt{64}$.
    4.  Donc, $7 < \sqrt{57} < 8$.

* **Illustration Visuelle :**
    ```jsxgraph
    {
      "width": "500px",
      "height": "150px",
      "options": { "boundingbox": [-1, 12, 12, -2], "axis": true, "showNavigation": false }
    }
    ---
    // 'board' est une variable spéciale qui représente le conteneur de cette figure.
    const p1 = board.create('point', [Math.sqrt(57), 0], {name: '√57', fixed: true, size: 4, label: {offset: [0,10]}});
    const p2 = board.create('point', [7, 0], {name: '7', fixed: true, size: 2, face:'x'});
    const p3 = board.create('point', [8, 0], {name: '8', fixed: true, size: 2, face:'x'});
    const text = board.create('text', [1,-1], "On voit bien que √57 est situé entre 7 et 8.");
    ```

---

## ⚠️ Erreurs Fréquentes à Éviter

* **Penser que $\sqrt{a+b} = \sqrt{a} + \sqrt{b}$ :** C'est **TOTALEMENT FAUX !**
    * *Contre-exemple :* $\sqrt{16+9} = \sqrt{25} = 5$. Mais $\sqrt{16} + \sqrt{9} = 4 + 3 = 7$. On voit bien que $5 \neq 7$. La même erreur s'applique à la soustraction.
* **Confondre $x^2 = 25$ et $\sqrt{25}$ :**
    * L'équation $x^2 = 25$ a **deux** solutions : $x=5$ et $x=-5$.
    * Le calcul de $\sqrt{25}$ n'a qu'**un seul** résultat : $5$ (car la racine carrée est par définition positive).
* **Donner une valeur approchée quand on demande une valeur exacte.**

---

## ✅ Quiz de Compréhension Rapide

---
**Question 1 :** Quelle est la valeur de $\sqrt{169}$ ?
* A) 12
* B) 13
* C) 14
**Réponse :** B
**Explication :** $13 \times 13 = 169$. C'est un des carrés parfaits à connaître.
---
**Question 2 :** Un carré a une aire de 19 cm². Quelle est la longueur **exacte** de son côté ?
* A) $4,36$ cm
* B) $4,35$ cm
* C) $\sqrt{19}$ cm
**Réponse :** C
**Explication :** $\sqrt{19}$ est la seule valeur exacte. Les autres sont des valeurs approchées.
---
**Question 3 :** La racine carrée de 110 est comprise entre :
* A) 9 et 10
* B) 10 et 11
* C) 11 et 12
**Réponse :** B
**Explication :** $10^2 = 100$ et $11^2 = 121$. Comme $100 < 110 < 121$, alors $10 < \sqrt{110} < 11$.
---
**Question 4 :** Vrai ou Faux : $(\sqrt{3})^2 = 9$.
* A) Vrai
* B) Faux
**Réponse :** B
**Explication :** Faux. Par définition, $(\sqrt{a})^2 = a$. Donc, $(\sqrt{3})^2 = 3$.
---
**Question 5 :** Lequel de ces nombres n'a pas de racine carrée ?
* A) 0
* B) -25
* C) 0.5
**Réponse :** B
**Explication :** On ne peut pas calculer la racine carrée d'un nombre négatif.
---

---

## ✍️ Exercices d'Application

1.  **Encadrement de racines :**
    Pour chaque nombre suivant, donnez un encadrement par deux nombres entiers consécutifs, sans utiliser la touche $\sqrt{}$ de la calculatrice.
    a) $\sqrt{20}$
    b) $\sqrt{90}$
    c) $\sqrt{150}$

2.  **Application avec Pythagore :**
    Soit un triangle ABC rectangle en A tel que AB = 5 cm et AC = 8 cm.
    a. Calculer la valeur exacte de la longueur de l'hypoténuse BC.
    b. En utilisant votre calculatrice, donner une valeur approchée de BC arrondie au millimètre près.

3.  **Le terrain carré :**
    Un agriculteur possède un terrain carré d'une superficie de 15 000 m². Il souhaite l'entourer d'une clôture.
    a. Donner la longueur exacte d'un côté de son terrain.
    b. Sans calculatrice, donner un encadrement de cette longueur entre deux entiers consécutifs en mètres.
    c. Le magasin ne vend la clôture qu'en rouleaux de 50 mètres. Combien de rouleaux l'agriculteur doit-il acheter au minimum ? (Utiliser la touche $\sqrt{}$ pour cette question).