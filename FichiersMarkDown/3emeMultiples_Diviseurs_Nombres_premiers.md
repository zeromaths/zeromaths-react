---
title: "Diviseurs, Nombres Premiers et Applications"
level: "3ème"
subject: "Arithmétique"
keywords: ["diviseur", "multiple", "nombre premier", "décomposition", "facteurs premiers", "fraction irréductible", "PPCM", "phénomène périodique"]
related_concepts: ["fractions_simplification", "ppcm_pgcd"]
---

# Diviseurs, Nombres Premiers et Applications

---

## 🎯 Objectifs de la Leçon

À la fin de cette leçon, tu seras capable de :
* Déterminer les diviseurs d'un nombre entier.
* Reconnaître un nombre premier et connaître la liste de ceux inférieurs à 50.
* **Décomposer** n'importe quel entier en un produit de facteurs premiers.
* Utiliser cette décomposition pour rendre une **fraction irréductible**.
* Résoudre des problèmes simples de **phénomènes périodiques** en utilisant les multiples.

---

## 🚀 Mise en Situation

Deux phares s'allument en même temps à 20h00. Le premier phare a un cycle de 10 secondes (il s'allume toutes les 10 secondes). Le second a un cycle de 12 secondes. On se demande : **à quelle heure les deux phares s'allumeront-ils à nouveau exactement en même temps ?**

Pour résoudre ce genre de problème de "rendez-vous" ou de cycles, nous avons besoin d'outils pour étudier les multiples des nombres. La décomposition en nombres premiers va nous y aider !

---

## Pré-requis

Pour être à l'aise avec ce chapitre, il est important de :
* Maîtriser les **quatre opérations**, en particulier la multiplication et la division.
* Connaître ses **tables de multiplication**.
* Connaître les **critères de divisibilité** de base (par 2, 3, et 5).

---

## 📚 Cours

### 1. Diviseurs et Multiples

#### Définition
Soient $a$ et $b$ deux nombres entiers. On dit que $a$ est un **diviseur** de $b$ si la division de $b$ par $a$ tombe juste (le reste est 0). On dit alors que $b$ est un **multiple** de $a$.

* **Exemple :**
    * Les diviseurs de 12 sont : 1, 2, 3, 4, 6 et 12.
    * Les multiples de 12 sont : 12, 24, 36, 48, ...
* **Contre-exemple :**
    * 5 n'est pas un diviseur de 12, car la division de 12 par 5 ne tombe pas juste.

### 2. Nombres Premiers

#### Définition
Un nombre entier est dit **premier** s'il possède **exactement deux diviseurs** distincts : **1 et lui-même**.

* **Exemple :**
    * 7 est un nombre premier car ses seuls diviseurs sont 1 et 7.
* **Contre-exemple :**
    * 9 n'est pas premier car ses diviseurs sont 1, 3, et 9 (il en a plus que deux).
    * 1 n'est pas premier car il n'a qu'un seul diviseur (lui-même).

#### Liste des Nombres Premiers inférieurs à 50 (à mémoriser)
Il est très utile de connaître le début de cette liste par cœur :
**2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47**
* **Point d'attention :** 2 est le seul nombre premier pair.

### 3. Décomposition en Produit de Facteurs Premiers

#### Propriété Fondamentale
Tout nombre entier (plus grand que 1) peut s'écrire de manière **unique** comme un produit de nombres premiers. C'est comme l'ADN d'un nombre.

* **Exemple :** La décomposition de 60 est $2^2 \times 3 \times 5$. Il n'y a pas d'autre façon de décomposer 60 en un produit de nombres premiers.

### 4. Application : Rendre une Fraction Irréductible

Rendre une fraction irréductible, c'est la simplifier au maximum. La décomposition en facteurs premiers est la méthode la plus puissante pour y arriver.

* **Exemple :** Pour rendre la fraction $\frac{60}{84}$ irréductible :
    * On décompose 60 : $60 = 2^2 \times 3 \times 5$.
    * On décompose 84 : $84 = 2^2 \times 3 \times 7$.
    * On réécrit la fraction et on simplifie les facteurs communs :
    $$ \frac{60}{84} = \frac{\cancel{2^2} \times \cancel{3} \times 5}{\cancel{2^2} \times \cancel{3} \times 7} = \frac{5}{7} $$

### 5. Application : Phénomènes Périodiques et PPCM

Pour résoudre les problèmes de cycles (comme celui des phares), on cherche le **Plus Petit Commun Multiple (PPCM)** des durées. C'est le premier moment où les cycles coïncideront à nouveau.

* **Exemple :** Un événement se produit toutes les 6 minutes, un autre toutes les 8 minutes. Quand se produiront-ils à nouveau en même temps ?
    * Multiples de 6 : 6, 12, 18, **24**, 30...
    * Multiples de 8 : 8, 16, **24**, 32...
    * Le PPCM de 6 et 8 est 24. Ils se produiront à nouveau ensemble dans 24 minutes.

---

## ⚙️ Méthode(s)

### Méthode : Décomposer un entier en produit de facteurs premiers
On utilise les divisions successives par les nombres premiers, en commençant par le plus petit (2).

* **Exemple :** Décomposer 140.
    ```
    140 | 2
     70 | 2
     35 | 5  (n'est pas divisible par 3)
      7 | 7
      1 |
    ```
    **Conclusion :** La décomposition de 140 est $2 \times 2 \times 5 \times 7 = 2^2 \times 5 \times 7$.

### Méthode : Rendre une fraction irréductible
1.  Décomposer le numérateur en produit de facteurs premiers.
2.  Décomposer le dénominateur en produit de facteurs premiers.
3.  Réécrire la fraction avec les décompositions et simplifier les facteurs communs.

* **Exemple :** Rendre $\frac{72}{108}$ irréductible.
    1.  $72 = 2^3 \times 3^2$
    2.  $108 = 2^2 \times 3^3$
    3.  $$ \frac{72}{108} = \frac{2^3 \times 3^2}{2^2 \times 3^3} = \frac{\cancel{2^2} \times 2 \times \cancel{3^2}}{\cancel{2^2} \times \cancel{3^2} \times 3} = \frac{2}{3} $$

### Méthode : Trouver le PPCM avec la décomposition
1.  Décomposer chaque nombre en produit de facteurs premiers.
2.  Prendre **tous les facteurs premiers** qui apparaissent dans l'une OU l'autre des décompositions.
3.  Pour chaque facteur, prendre la **plus grande puissance** qui apparaît.
4.  Multiplier ces facteurs ensemble.

* **Exemple :** Résoudre le problème des phares (périodes de 10 et 12 secondes).
    1.  $10 = 2 \times 5$ (soit $2^1 \times 5^1$)
    2.  $12 = 2 \times 6 = 2 \times 2 \times 3 = 2^2 \times 3$ (soit $2^2 \times 3^1$)
    3.  Les facteurs premiers qui apparaissent sont 2, 3 et 5.
        * La plus grande puissance de 2 est $2^2$.
        * La plus grande puissance de 3 est $3^1$.
        * La plus grande puissance de 5 est $5^1$.
    4.  $PPCM(10, 12) = 2^2 \times 3^1 \times 5^1 = 4 \times 3 \times 5 = 60$.
    * **Conclusion :** Les phares s'allumeront à nouveau ensemble au bout de 60 secondes (1 minute), soit à 20h01.

---

## ⚠️ Erreurs Fréquentes à Éviter

* **Penser que 1 est un nombre premier.** (Faux, il n'a qu'un seul diviseur).
* **Penser que tous les nombres impairs sont premiers.** (Faux, 9, 15, 21, 25... ne le sont pas).
* **S'arrêter trop tôt dans la décomposition.** (Ex: $84 = 4 \times 21$. Ce n'est pas fini car 4 et 21 ne sont pas premiers).
* **Confondre PPCM (Plus Petit Commun Multiple) et PGCD (Plus Grand Commun Diviseur).** Le PPCM est toujours plus grand ou égal aux nombres de départ.
* **Mal simplifier les puissances dans les fractions.** ($ \frac{2^5}{2^2} = 2^{5-2} = 2^3 $, pas $2^{5/2}$ ou autre).

---

## ✅ Quiz de Compréhension Rapide

---
**Question 1 :** Lequel de ces nombres est un nombre premier ?
* A) 15
* B) 27
* C) 31
**Réponse :** C
**Explication :** 15 est divisible par 3 et 5. 27 est divisible par 3 et 9. 31 n'est divisible que par 1 et 31.
---
**Question 2 :** Quelle est la décomposition en produit de facteurs premiers de 24 ?
* A) $4 \times 6$
* B) $2 \times 12$
* C) $2^3 \times 3$
**Réponse :** C
**Explication :** 4, 6 et 12 ne sont pas des nombres premiers. La seule décomposition avec uniquement des facteurs premiers est $2 \times 2 \times 2 \times 3 = 2^3 \times 3$.
---
**Question 3 :** La forme irréductible de la fraction $\frac{18}{30}$ est...
* A) $\frac{9}{15}$
* B) $\frac{3}{5}$
* C) $\frac{6}{10}$
**Réponse :** B
**Explication :** On divise le numérateur et le dénominateur par leur plus grand diviseur commun, qui est 6.
---
**Question 4 :** Deux cyclistes font des tours de piste. Le premier met 40 secondes par tour, le second 50 secondes. Ils partent en même temps. Au bout de combien de secondes franchiront-ils à nouveau la ligne de départ ensemble ?
* A) 100 secondes
* B) 200 secondes
* C) 400 secondes
**Réponse :** B
**Explication :** On cherche le PPCM de 40 ($=2^3 \times 5$) et 50 ($=2 \times 5^2$). Le PPCM est $2^3 \times 5^2 = 8 \times 25 = 200$.
---
**Question 5 :** Vrai ou Faux : 51 est un nombre premier.
* A) Vrai
* B) Faux
**Réponse :** B
**Explication :** Faux. On peut vérifier la divisibilité par 3 : la somme de ses chiffres est $5+1=6$, qui est un multiple de 3. Donc 51 est divisible par 3 ($51 = 3 \times 17$).
---

---

## ✍️ Exercices d'Application

1.  **Simplification de Fraction Complexe :**
    Rendre la fraction suivante irréductible en utilisant la décomposition en produit de facteurs premiers :
    $$ \frac{396}{420} $$

2.  **Les Engrenages :**
    Une petite roue dentée A de 12 dents est en contact avec une grande roue dentée B de 18 dents. Au départ, les dents marquées d'un point rouge sur chaque roue sont en contact. Combien de tours la petite roue A doit-elle faire au minimum pour que les deux points rouges soient à nouveau en contact ?
    (Indice : On cherche le PPCM du nombre de dents).

    ![Schéma de deux roues dentées A et B en contact](URL_VERS_VOTRE_IMAGE/engrenages_exercice.svg)

3.  **Le terrain du jardinier :**
    Un jardinier veut carreler une terrasse rectangulaire de 4,20 m de long sur 3,60 m de large avec des dalles carrées identiques, sans faire de découpe.
    a. Convertir les dimensions en centimètres.
    b. Il veut utiliser les plus grandes dalles possibles. Quelle sera la dimension (côté en cm) de ces dalles ? (Indice : On cherche le Plus Grand Commun Diviseur, le PGCD).
    c. Combien de dalles devra-t-il utiliser ?