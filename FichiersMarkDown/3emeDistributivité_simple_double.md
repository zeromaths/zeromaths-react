---
title: "Le Calcul Littéral : Développer et Factoriser"
level: "3ème"
subject: "Algèbre"
keywords: ["calcul littéral", "développer", "factoriser", "distributivité", "identité remarquable", "a²-b²"]
related_concepts: ["equations_produit_nul", "fonctions_affines"]
---

# Le Calcul Littéral : Développer et Factoriser

---

## 🎯 Objectifs de la Leçon

À la fin de cette leçon, tu seras capable de :
* Comprendre le rôle de la lettre « x » et les différents sens du signe « = ».
* Appliquer la **distributivité simple et double** pour développer des expressions.
* **Réduire** une expression littérale.
* **Factoriser** une expression en identifiant un facteur commun.
* Reconnaître et utiliser l'identité remarquable $a^2 - b^2 = (a-b)(a+b)$ pour factoriser.

---

## 🚀 Mise en Situation

On te demande de calculer de tête et en quelques secondes les deux opérations suivantes. Impossible ?

**Calcul 1 :** $27 \times 995$
**Calcul 2 :** $19,375 \times 93 + 19,375 \times 7$

À première vue, cela semble très difficile sans calculatrice. Pourtant, à la fin de ce chapitre, tu auras les "super-pouvoirs" pour résoudre ces calculs mentalement ! Le secret ne réside pas dans la vitesse de calcul, mais dans la **transformation intelligente** des expressions.

* Pour le calcul 1, on peut écrire $995$ comme $(1000-5)$, ce qui donne $27 \times (1000-5)$. C'est une expression à **développer**.
* Pour le calcul 2, on voit que $19,375$ est un facteur commun. On peut donc l'écrire $19,375 \times (93+7)$. C'est une expression à **factoriser**.

Ce chapitre sur le calcul littéral va te montrer comment manipuler ces expressions pour rendre les problèmes complexes beaucoup plus simples !

---

## Pré-requis

Pour être à l'aise avec ce chapitre, il est important de :
* Maîtriser les opérations avec les **nombres relatifs** (règles des signes).
* Comprendre qu'une lettre peut représenter un nombre (**variable**).
* Savoir calculer l'aire d'un rectangle.

---

## 📚 Cours

### 1. La Lettre « x » et le Signe « = »

* **La lettre « x » (l'indéterminée) :** En algèbre, une lettre comme $x$ représente un nombre dont on ne connaît pas la valeur, ou qui peut varier. C'est une **variable**.

* **Le signe « = » :** Ce signe peut avoir plusieurs sens :
    * **Un résultat de calcul :** $3 + 4 = 7$.
    * **Une équation :** $2x + 1 = 5$. L'égalité n'est vraie que pour une certaine valeur de $x$ (ici, $x=2$).
    * **Une identité :** $2(x+1) = 2x + 2$. L'égalité est vraie **pour toutes les valeurs de $x$**. C'est dans ce contexte que l'on va développer et factoriser.

### 2. Développer une Expression

**Définition :** Développer, c'est transformer un **produit** en une **somme** (ou une différence).

#### a. La Distributivité Simple : $k(a+b)$
On distribue le facteur $k$ à chaque terme à l'intérieur de la parenthèse.
$$k \times (a+b) = k \times a + k \times b$$
$$k \times (a-b) = k \times a - k \times b$$
* **Exemple :** Développer $3(x+7)$.
    $3(x+7) = 3 \times x + 3 \times 7 = 3x + 21$.
* **Exemple avec un signe négatif :** Développer $-2(y-4)$.
    $-2(y-4) = (-2) \times y - (-2) \times 4 = -2y - (-8) = -2y + 8$.

#### b. La Distributivité Double : $(a+b)(c+d)$
Chaque terme de la première parenthèse multiplie chaque terme de la seconde.
$$(a+b)(c+d) = a \times c + a \times d + b \times c + b \times d$$
* **Exemple :** Développer $(x+2)(y+5)$.
    $(x+2)(y+5) = x \times y + x \times 5 + 2 \times y + 2 \times 5 = xy + 5x + 2y + 10$.

### 3. Réduire une Expression

**Définition :** Réduire une expression, c'est la simplifier en regroupant les termes de la même "famille" (les constantes, les termes en $x$, les termes en $x^2$, etc.) et en effectuant les calculs.

* **Exemple :** Réduire l'expression $A = 5x + 3 - 2x + 7 + 3x^2$.
    * On regroupe les termes en $x^2$ : $3x^2$.
    * On regroupe les termes en $x$ : $5x - 2x = 3x$.
    * On regroupe les constantes : $3 + 7 = 10$.
    * **Résultat réduit :** $A = 3x^2 + 3x + 10$.
* **Contre-exemple :** On ne peut pas additionner $3x^2$ et $3x$. Ce ne sont pas des termes de la même famille !

### 4. Factoriser une Expression

**Définition :** Factoriser, c'est l'opération inverse du développement. C'est transformer une **somme** (ou une différence) en un **produit**.

#### a. Le Facteur Commun : $ka+kb$
On cherche le plus grand facteur commun à tous les termes de la somme/différence, et on le met en "facteur".
$$ka + kb = k(a+b)$$
* **Exemple :** Factoriser $6x + 18$.
    * Le facteur commun est 6, car $6x = 6 \times x$ et $18 = 6 \times 3$.
    * $6x + 18 = 6 \times x + 6 \times 3 = 6(x+3)$.

### 5. L'Identité Remarquable : $a^2 - b^2$

#### a. Sens Développement
Si on développe $(a-b)(a+b)$ avec la double distributivité :
$$(a-b)(a+b) = a \times a + a \times b - b \times a - b \times b = a^2 + ab - ab - b^2 = a^2 - b^2$$

#### b. Sens Factorisation
C'est la formule la plus importante à retenir pour factoriser quand il n'y a pas de facteur commun évident.
$$a^2 - b^2 = (a-b)(a+b)$$
* **Exemple :** Factoriser $x^2 - 49$.
    * On reconnaît la forme $a^2 - b^2$ avec $a=x$ et $b=7$ (car $49=7^2$).
    * Donc, $x^2 - 49 = (x-7)(x+7)$.
* **Contre-exemple :** L'expression $x^2 + 49$ ne peut pas être factorisée avec cette identité (ce n'est pas une différence).

---

## ⚙️ Méthode(s)

### Méthode : Développer et réduire une expression comme $(a+b)(c+d)$
1.  **Appliquer la double distributivité** en utilisant des flèches pour ne rien oublier.
2.  **Calculer** chacun des quatre produits obtenus, en faisant attention aux règles des signes.
3.  **Réduire l'expression** en regroupant les termes de même nature.

* **Exemple :** Développer et réduire $(2x-3)(x+5)$.
    1.  $(2x-3)(x+5) = 2x \times x + 2x \times 5 - 3 \times x - 3 \times 5$
    2.  $= 2x^2 + 10x - 3x - 15$
    3.  $= 2x^2 + 7x - 15$

### Méthode : Factoriser avec l'identité $a^2 - b^2$
1.  **Vérifier** que l'expression est bien une **différence** de deux termes.
2.  **Identifier** qui joue le rôle de $a$ et de $b$ en trouvant de quels nombres ou expressions les deux termes sont les carrés.
3.  **Appliquer la formule** $(a-b)(a+b)$ en remplaçant $a$ et $b$.
4.  **Simplifier** l'intérieur des parenthèses si nécessaire.

* **Exemple :** Factoriser $(2x+1)^2 - 81$.
    1.  C'est bien une différence de deux termes.
    2.  Le premier terme est le carré de $(2x+1) \rightarrow a = (2x+1)$.
    3.  Le deuxième terme est $81 = 9^2 \rightarrow b=9$.
    4.  On applique $(a-b)(a+b)$ :
        $[(2x+1) - 9][(2x+1) + 9]$
    5.  On simplifie : $(2x - 8)(2x + 10)$.

---

## ⚠️ Erreurs Fréquentes à Éviter

* **Erreurs de signe :** La plus courante ! Surtout en distribuant un facteur négatif. Ex: $-3(x-5) = -3x + 15$ et non $-3x - 15$.
* **Erreurs de réduction :** Additionner des termes qui ne sont pas de la même "famille" (ex: $5x^2 + 2x \neq 7x^3$).
* **Oublier la double distributivité :** Ne multiplier que le premier terme avec le premier, et le deuxième avec le deuxième.
* **Factoriser $a^2+b^2$ :** Cette expression ne se factorise pas (au collège). L'identité remarquable ne fonctionne que pour une **différence** de deux carrés.
* **Mal identifier $a$ et $b$ dans $a^2-b^2$ :** Par exemple, pour $9x^2-16$, $a=3x$ et non $9x$.

---

## ✅ Quiz de Compréhension Rapide

---
**Question 1 :** Le développement de $5(x-2)$ est :
* A) $5x - 2$
* B) $5x - 10$
* C) $3x$
**Réponse :** B
**Explication :** Il faut distribuer le 5 à la fois au $x$ et au $-2$. $5 \times x - 5 \times 2 = 5x - 10$.
---
**Question 2 :** La factorisation de $7x - 21$ est :
* A) $7(x-21)$
* B) $7(x-3)$
* C) $-14x$
**Réponse :** B
**Explication :** Le plus grand facteur commun entre $7x$ et $21$ est 7. $7x = 7 \times x$ et $21 = 7 \times 3$.
---
**Question 3 :** La factorisation de $x^2 - 36$ est :
* A) $(x-6)^2$
* B) $(x-6)(x+6)$
* C) $(x-18)(x+18)$
**Réponse :** B
**Explication :** C'est l'identité remarquable $a^2-b^2 = (a-b)(a+b)$ avec $a=x$ et $b=6$.
---
**Question 4 :** Vrai ou Faux : $(x+3)^2 = x^2 + 9$.
* A) Vrai
* B) Faux
**Réponse :** B
**Explication :** Faux. C'est une autre identité remarquable : $(a+b)^2 = a^2 + 2ab + b^2$. Donc $(x+4)^2 = x^2 + 8x + 16$.
---
**Question 5 :** L'expression $5x^2 - 3x + 9$ peut-elle être réduite davantage ?
* A) Oui
* B) Non
**Réponse :** B
**Explication :** Non, car les termes $5x^2$, $-3x$ et $9$ ne sont pas de la même "famille".
---

---

## ✍️ Exercices d'Application

1.  **Développement et Réduction :**
    Développer et réduire les expressions suivantes :
    a) $A = 5(2x-3) - (x+1)$
    b) $B = (3x+2)(x-4)$
    c) $C = (x-5)^2 + (x-5)(x+5)$ (Indice : développer chaque partie séparément avant de réduire).

2.  **Factorisation :**
    Factoriser les expressions suivantes le plus possible :
    a) $D = 12x - 18y + 6$ (facteur commun)
    b) $E = (x+4)(2x-1) - (x+4)(x+3)$ (le facteur commun est une expression)
    c) $F = 49x^2 - 64$ (identité remarquable)

3.  **Programme de Calcul :**
    On considère le programme de calcul suivant :
    * Choisir un nombre.
    * Lui ajouter 3.
    * Élever le résultat au carré.
    * Soustraire 16 au résultat.
    a. Appliquer ce programme au nombre 2.
    b. Soit $x$ le nombre choisi au départ. Montrer que le résultat final du programme peut s'écrire $P(x) = (x+3)^2 - 16$.
    c. Factoriser l'expression $P(x)$.
    d. Pour quels nombres de départ le programme donne un résultat de 0.