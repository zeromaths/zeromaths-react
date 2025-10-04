---
title: "Notion de Fonction et Vocabulaire"
level: "3ème"
subject: "Fonctions"
keywords: ["fonction", "variable", "image", "antécédent", "notation", "graphique", "tableau"]
related_concepts: ["calcul_litteral", "equations", "fonctions_affines"]
---

# Notion de Fonction et Vocabulaire

---

## 🎯 Objectifs de la Leçon

À la fin de cette leçon, tu seras capable de :
* Définir ce qu'est une **fonction** et comprendre le rôle de la variable $x$.
* Utiliser les notations $f(x)$ et $f: x \mapsto ...$
* Faire la différence fondamentale entre une **image** et un **antécédent**.
* **Calculer** l'image d'un nombre à partir d'une formule.
* **Déterminer** l'image et le(s) antécédent(s) d'un nombre à partir d'un **tableau de valeurs** et d'une **représentation graphique**.

---

## 🚀 Mise en Situation

Imagine une machine mystérieuse. Quand tu lui donnes un nombre, elle effectue une série de calculs secrets et te renvoie un unique autre nombre.
* Si tu lui donnes **2**, elle te renvoie **5**.
* Si tu lui donnes **10**, elle te renvoie **21**.
* Si tu lui donnes **-3**, elle te renvoie **-5**.
* Que renvoie cette machine si on lui donne **7**?

Cette machine est une **fonction**. Elle associe à un nombre de départ un unique nombre d'arrivée. Dans ce chapitre, nous allons ouvrir cette machine pour comprendre comment elle fonctionne, comment la décrire en langage mathématique et comment utiliser ses différentes représentations (formule, tableau, graphique).

---

## Pré-requis

Pour être à l'aise avec ce chapitre, il est utile de :
* Savoir **substituer une lettre par une valeur** dans une expression (calcul littéral).
* Savoir **lire les coordonnées** d'un point dans un repère (abscisse et ordonnée).
* Savoir **résoudre une équation simple** du premier degré.

---

## 📚 Cours

### 1. Notion de Fonction

#### Définition
Une **fonction** est un processus qui, à un nombre de départ, associe **au plus un** nombre d'arrivée.
C'est comme une "recette de cuisine" qui transforme un ingrédient (le nombre de départ) en un plat final (le nombre d'arrivée).

* **La lettre « x » est une variable :** Le nombre de départ est souvent noté par une lettre, comme $x$. On l'appelle la **variable** car on peut la "faire varier" en choisissant différents nombres de départ.

#### Fonctions et Notations
Il y a deux manières courantes de nommer et de décrire une fonction (appelons-la $f$) :
1.  **Notation avec une flèche :** $f: x \mapsto 2x+1$
    * Se lit : "$f$ est la fonction qui au nombre $x$ associe le nombre $2x+1$".
2.  **Notation avec des parenthèses (formule de calcul) :** $f(x) = 2x+1$
    * Se lit : "$f$ de $x$ est égal à $2x+1$". C'est l'écriture la plus utilisée pour les calculs.

### 2. Image et Antécédent

C'est le vocabulaire le plus important à maîtriser !

#### a. L'Image
**Définition :** L'**image** d'un nombre $x$ par une fonction $f$ est le nombre d'arrivée, le résultat obtenu, noté $f(x)$.

* **Propriété clé :** Un nombre de départ n'a qu'**une seule image** (au maximum).
* **Exemple (avec une formule) :**
    Soit la fonction $f(x) = x^2 - 4$.
    L'image de 3 par $f$ est $f(3) = 3^2 - 4 = 9 - 4 = 5$.
    On dit que **5 est l'image de 3** par $f$.

#### b. L'Antécédent
**Définition :** Un **antécédent** d'un nombre $y$ par une fonction $f$ est un nombre de départ $x$ tel que son image est $y$ (c'est-à-dire $f(x)=y$).

* **Propriété clé :** Un nombre d'arrivée peut avoir **zéro, un ou plusieurs** antécédents.
* **Exemple (avec une formule) :**
    Soit la fonction $f(x) = x^2 - 4$.
    Cherchons le ou les antécédents de 5. On résout l'équation $f(x) = 5$.
    $x^2 - 4 = 5$
    $x^2 = 9$
    Les solutions sont $x=3$ et $x=-3$.
    On dit que **3 et -3 sont les antécédents de 5** par $f$.

### 3. Les Trois Représentations d'une Fonction

Une même fonction peut être décrite de trois manières :
1.  Par une **expression algébrique** (une formule).
2.  Par un **tableau de valeurs**.
3.  Par une **représentation graphique** (une courbe).

---

## ⚙️ Méthode(s)

### Méthode 1 : Trouver l'Image d'un Nombre

* **Avec une Formule :**
    1. On remplace $x$ par le nombre de départ dans la formule.
    2. On effectue le calcul.
    * **Exemple :** Quelle est l'image de -2 par la fonction $g(x) = 3x + 7$ ?
        $g(-2) = 3 \times (-2) + 7 = -6 + 7 = 1$. L'image de -2 est 1.

* **Avec un Tableau de Valeurs :**
    1. On repère le nombre de départ dans la **première ligne** (ligne des $x$).
    2. On lit le nombre correspondant dans la **deuxième ligne** (ligne des $f(x)$).
    * **Exemple :**
        | $x$    | -1 | 0 | 1 | 2 |
        | :---   | :-:| :-:| :-:|:-:|
        | $f(x)$ | 5  | 3 | 4 | 5 |
        L'image de 1 est 4.

* **Avec un Graphique :**
    1. On se place sur l'**axe des abscisses** (horizontal) à la valeur de départ.
    2. On se déplace **verticalement** (vers le haut ou le bas) jusqu'à la courbe.
    3. On se déplace **horizontalement** depuis ce point jusqu'à l'**axe des ordonnées** (vertical).
    4. On lit la valeur : c'est l'image.
    * **Illustration :**
    ```jsxgraph
    {
      "width": "400px", "height": "350px",
      "options": { "boundingbox": [-5, 5, 5, -5], "axis": true }
    }
    ---
    // On suppose une courbe 'f'
    const f = board.create('functiongraph', [function(x){return 0.1*x*x*x - 0.5*x + 1;}]);
    
    // Lecture de l'image de 2
    const p1 = board.create('point', [2, f.Y(2)], {name: ' ', size: 1, color: 'red'});
    const line_v = board.create('segment', [[2,0], p1], {dash: 2, color: 'red'});
    const line_h = board.create('segment', [p1, [0, f.Y(2)]], {dash: 2, color: 'red'});
    board.create('text', [2, -0.5], "1. On part de x=2", {color:'red'});
    board.create('text', [-3, f.Y(2)], "3. On lit l'image y ≈ "+f.Y(2).toFixed(1), {color:'red'});
    ```

### Méthode 2 : Trouver le(s) Antécédent(s) d'un Nombre

* **Avec une Formule :**
    1. On pose l'équation $f(x) = \text{nombre d'arrivée}$.
    2. On résout cette équation pour trouver $x$.
    * **Exemple :** Quels sont les antécédents de 13 par la fonction $g(x) = 3x + 7$ ?
        $3x + 7 = 13 \implies 3x = 6 \implies x = 2$. Le seul antécédent de 13 est 2.

* **Avec un Tableau de Valeurs :**
    1. On repère le nombre d'arrivée dans la **deuxième ligne** (ligne des $f(x)$).
    2. On lit le ou les nombres correspondants dans la **première ligne** (ligne des $x$).
    * **Exemple :**
        | $x$    | -1 | 0 | 1 | 2 |
        | :---   | :-:| :-:| :-:|:-:|
        | $f(x)$ | 5  | 3 | 4 | 5 |
        Les antécédents de 5 sont -1 et 2.

* **Avec un Graphique :**
    1. On se place sur l'**axe des ordonnées** (vertical) à la valeur d'arrivée.
    2. On trace une ligne **horizontale**. Elle peut couper la courbe en plusieurs points.
    3. Depuis **chaque point d'intersection**, on se déplace **verticalement** jusqu'à l'**axe des abscisses** (horizontal).
    4. On lit les valeurs : ce sont les antécédents.
    * **Illustration :** (reprendre la même courbe et chercher les antécédents de 2)
        `board.create('text', [-3.5, 2], "1. On part de y=2", {color:'blue'});` (et dessiner les lignes correspondantes)

---

## ⚠️ Erreurs Fréquentes à Éviter

* **Confondre image et antécédent :** L'image est sur l'axe vertical (ordonnée), l'antécédent sur l'axe horizontal (abscisse).
* **Inverser les axes** lors de la lecture graphique.
* **Penser qu'un nombre n'a qu'un seul antécédent :** C'est faux, il peut en avoir plusieurs ! On dit "un" ou "des" antécédent(s).
* **Écrire $f(x)$ pour parler de la fonction :** $f$ est le nom de la fonction (la machine), $f(x)$ est le résultat (l'image).
* **Lors du calcul d'antécédents, oublier des solutions à l'équation.**

---

## ✅ Quiz de Compréhension Rapide

---
**Question 1 :** Soit la fonction $f(x) = 4x - 3$. Quelle est l'image de 2 ?
* A) 5
* B) 8
* C) 1
**Réponse :** A
**Explication :** $f(2) = 4 \times 2 - 3 = 8 - 3 = 5$.
---
**Question 2 :** D'après le tableau de valeurs ci-dessous, quel est un antécédent de 10 ?
| $x$    | 0 | 2 | 4  | 6 |
| :---   | :-:|:-:| :-:|:-:|
| $g(x)$ | 4 | 10| 12 | 10|
* A) 4
* B) 12
* C) 2 et 6
**Réponse :** C
**Explication :** On cherche 10 dans la deuxième ligne et on lit les valeurs correspondantes dans la première ligne.
---
**Question 3 :** Sur un graphique, pour lire l'image de 3, je commence par me placer sur...
* A) l'axe des ordonnées à la valeur 3.
* B) l'origine du repère.
* C) l'axe des abscisses à la valeur 3.
**Réponse :** C
**Explication :** On part toujours de l'axe des abscisses (les antécédents) pour lire une image.
---
**Question 4 :** Vrai ou Faux : Par une fonction, un nombre peut avoir plusieurs images.
* A) Vrai
* B) Faux
**Réponse :** B
**Explication :** Faux. C'est la définition même d'une fonction : un nombre de départ a au maximum une seule image.
---
**Question 5 :** Soit la fonction $h(x) = x+5$. Quel est l'antécédent de 9 ?
* A) 14
* B) 4
* C) 9
**Réponse :** B
**Explication :** On résout l'équation $x+5 = 9$, ce qui donne $x = 9-5 = 4$.
---

---

## ✍️ Exercices d'Application

1.  **Avec une formule :**
    Soit la fonction $f$ définie par l'expression $f(x) = x^2 + 2x - 5$.
    a. Calculer l'image de 0.
    b. Calculer $f(3)$.
    c. Calculer $f(-1)$.

2.  **Avec un tableau :**
    Le tableau suivant donne quelques valeurs pour une fonction $g$.
| $x$    | -4 | -2 | 0 | 1 | 3 | 5 |
| :---   | :-:| :-:|:-:|:-:|:-:|:-:|
| $g(x)$ | 0  | 3  |-2 | 5 | 0 | 3 |
    a. Quelle est l'image de 1 ?
    b. Quelle est l'image de -2 ?
    c. Donner le(s) antécédent(s) de 0.
    d. Donner le(s) antécédent(s) de 3.

3.  **Avec un graphique :**
    Soit la fonction $h$ dont la courbe est représentée ci-dessous.
    ![Graphique d'une courbe pour l'exercice 3. La courbe passe par les points (-2, 3), (0, -1), (2, 0) et (4, 3).](URL_VERS_VOTRE_IMAGE/fonction_exercice3.svg)
    a. Lire l'image de -2.
    b. Lire $h(0)$.
    c. Lire le(s) antécédent(s) de 0.
    d. Lire le(s) antécédent(s) de 3.