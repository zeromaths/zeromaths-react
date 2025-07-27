

-----

````markdown
---
title: "Calculer une Longueur avec le Théorème de Pythagore"
level: "3ème"
subject: "Géométrie"
keywords: ["pythagore", "théorème", "longueur", "hypoténuse", "triangle rectangle", "calcul"]
related_concepts: ["racines_carrees", "theoreme_de_thales"]
---

# Calculer une Longueur avec le Théorème de Pythagore

---

## 🎯 Objectifs de la Leçon

À la fin de cette leçon, tu seras capable de :
* Énoncer rigoureusement le théorème de Pythagore.
* Identifier l'hypoténuse dans un triangle rectangle.
* Calculer la longueur de l'hypoténuse connaissant les deux autres côtés.
* Calculer la longueur d'un côté de l'angle droit connaissant les deux autres côtés.
* Rédiger une solution structurée et claire pour un problème utilisant Pythagore.

---

## 🚀 Mise en Situation

Imagine un charpentier qui construit le cadre rectangulaire d'un mur. Le cadre mesure 4 mètres de long et 3 mètres de haut. Pour le solidifier, il doit ajouter une poutre en bois en diagonale. Pour éviter le gaspillage, il doit couper cette poutre à la longueur exacte.

Comment peut-il calculer cette longueur diagonale avec certitude ? Le théorème de Pythagore est l'outil parfait pour résoudre ce problème concret !

```jsxgraph
{
  "width": "400px",
  "height": "250px",
  "options": {
    "boundingbox": [-1, 4, 5, -1],
    "axis": false,
    "showCopyright": false,
    "showNavigation": false
  }
}
---
// Figure illustrant la mise en situation
const A = board.create('point', [0,0], {name:'A', fixed: true, visible: false});
const B = board.create('point', [4,0], {name:'B', fixed: true});
const C = board.create('point', [4,3], {name:'C', fixed: true});
const D = board.create('point', [0,3], {name:'D', fixed: true});
board.create('polygon', [A,B,C,D], {fillColor:'lightblue', fillOpacity:0.3});
board.create('segment', [B,D], {strokeColor:'red', strokeWidth:3, name:'?', label:{offset:[5,-10]}});
board.create('text', [2,-0.5], "4 m");
board.create('text', [4.2, 1.5], "3 m");
````

-----

## Pré-requis

Pour être à l'aise avec ce chapitre, il est important de :

  * Savoir reconnaître un **triangle rectangle** et son **hypoténuse**.
  * Savoir calculer le **carré d'un nombre** (calculer $x^2$).
  * Savoir calculer la **racine carrée** d'un nombre positif ($\\sqrt{x}$).
  * Être capable de résoudre des équations simples.

-----

## 📚 Cours

### Énoncé Rigoureux du Théorème de Pythagore

Le théorème de Pythagore établit une relation entre les longueurs des côtés d'un triangle rectangle.

**Définition :**
Si un triangle est **rectangle**, alors le carré de la longueur de l'**hypoténuse** est égal à la **somme des carrés** des longueurs des deux autres côtés (les côtés de l'angle droit).

Si un triangle $ABC$ est rectangle en $A$, alors $BC$ est l'hypoténuse, et on a l'égalité :
$$BC^2 = AB^2 + AC^2$$

  * **Illustration :**
    ```jsxgraph
    {
      "width": "300px",
      "height": "300px",
      "options": { "boundingbox": [-1.5, 4, 4, -1], "axis": false, "showNavigation": false }
    }
    ---
    const A = board.create('point', [0,0], {name:'A', fixed:true});
    const B = board.create('point', [3,0], {name:'B', fixed:true});
    const C = board.create('point', [0,2], {name:'C', fixed:true});
    board.create('polygon', [A,B,C]);
    board.create('angle', [B,A,C], {name:' '});
    board.create('text', [1.5, -0.5], "côté 1 (AB)");
    board.create('text', [-1.2, 1], "côté 2 (AC)");
    board.create('text', [2, 1.5], "hypoténuse (BC)");
    ```
  * **Contre-Exemple / Point d'attention :**
    Ce théorème ne s'applique **que** dans les triangles rectangles. Si un triangle n'est pas rectangle, l'égalité de Pythagore est fausse.

-----

## ⚙️ Méthodes

On distingue deux cas d'utilisation principaux pour ce théorème.

### Méthode 1 : Calculer la longueur de l'Hypoténuse

C'est le cas le plus direct. On connaît les deux côtés de l'angle droit et on cherche le côté le plus long.

1.  **Vérifier** que le triangle est bien rectangle et identifier l'hypoténuse.
2.  **Écrire** l'égalité de Pythagore.
3.  **Remplacer** les longueurs connues.
4.  **Calculer** la somme des carrés.
5.  **Calculer** la racine carrée pour trouver la longueur.

<!-- end list -->

  * **Exemple Intégré :**
    Soit $RST$ un triangle rectangle en $R$ tel que $RS = 6$ cm et $RT = 8$ cm. Calculer $ST$.
      * Le triangle $RST$ est rectangle en $R$, donc l'hypoténuse est le côté $[ST]$.
      * D'après le théorème de Pythagore, on a :
        $ST^2 = RS^2 + RT^2$
        $ST^2 = 6^2 + 8^2$
        $ST^2 = 36 + 64$
        $ST^2 = 100$
        $ST = \\sqrt{100} = 10$
      * **Conclusion :** La longueur du segment $[ST]$ est de 10 cm.

### Méthode 2 : Calculer la longueur d'un Côté de l'Angle Droit

Ici, on connaît l'hypoténuse et un des deux autres côtés.

1.  **Vérifier** que le triangle est bien rectangle et identifier l'hypoténuse.
2.  **Écrire** l'égalité de Pythagore et la transformer pour isoler le côté recherché (ex: $AB^2 = BC^2 - AC^2$).
3.  **Remplacer** les longueurs connues.
4.  **Calculer** la différence des carrés.
5.  **Calculer** la racine carrée pour trouver la longueur.

<!-- end list -->

  * **Exemple Intégré :**
    Soit $LMN$ un triangle rectangle en $M$ tel que $LN = 13$ cm et $MN = 12$ cm. Calculer $LM$.
      * Le triangle $LMN$ est rectangle en $M$, donc l'hypoténuse est le côté $[LN]$.
      * D'après le théorème de Pythagore, on a :
        $LN^2 = LM^2 + MN^2$
      * On transforme l'égalité :
        $LM^2 = LN^2 - MN^2$
        $LM^2 = 13^2 - 12^2$
        $LM^2 = 169 - 144$
        $LM^2 = 25$
        $LM = \\sqrt{25} = 5$
      * **Conclusion :** La longueur du segment $[LM]$ est de 5 cm.

-----

## ⚠️ Erreurs Fréquentes à Éviter

  * **Mal identifier l'hypoténuse :** L'hypoténuse est TOUJOURS le côté opposé à l'angle droit, et c'est TOUJOURS lui qui est seul d'un côté de l'égalité. C'est l'erreur la plus critique.
  * **Se tromper d'opération :** Additionner les carrés quand il faut les soustraire (lorsqu'on cherche un côté de l'angle droit).
  * **Oublier les carrés :** Écrire $BC = AB + AC$ est complètement faux \!
  * **Oublier la racine carrée :** Donner $100$ comme réponse au lieu de $\\sqrt{100}=10$ à la fin du calcul.
  * **Utiliser le théorème dans un triangle qui n'est pas rectangle.**

-----

## ✅ Quiz de Compréhension Rapide

-----

**Question 1 :** Dans un triangle $IJK$ rectangle en $K$, quelle est l'égalité de Pythagore correcte ?

  * A) $IJ^2 = IK^2 + KJ^2$
  * B) $IK^2 = IJ^2 + KJ^2$
  * C) $KJ^2 = IK^2 + IJ^2$
    **Réponse :** A
    **Explication :** L'angle droit est en K, donc l'hypoténuse (le côté opposé) est [IJ]. C'est donc $IJ^2$ qui doit être seul.

-----

**Question 2 :** Un triangle rectangle a les côtés de l'angle droit qui mesurent 9 cm et 12 cm. Combien mesure l'hypoténuse ?

  * A) 21 cm
  * B) 225 cm
  * C) 15 cm
    **Réponse :** C
    **Explication :** $9^2 + 12^2 = 81 + 144 = 225$. Et $\\sqrt{225} = 15$.

-----

**Question 3 :** Un triangle rectangle a une hypoténuse de 25 cm et un côté de l'angle droit de 24 cm. Quel est le carré de la longueur du troisième côté ?

  * A) 49
  * B) 1201
  * C) 1
    **Réponse :** A
    **Explication :** Le carré du troisième côté est $25^2 - 24^2 = 625 - 576 = 49$.

-----

**Question 4 :** Vrai ou Faux : On peut utiliser le théorème de Pythagore pour calculer une longueur dans n'importe quel triangle isocèle.

  * A) Vrai
  * B) Faux
    **Réponse :** B
    **Explication :** Faux. On ne peut l'utiliser que si le triangle est rectangle. (Exception : un triangle isocèle-rectangle, ou si on trace une hauteur pour faire apparaître deux triangles rectangles).

-----

**Question 5 :** La dernière étape pour trouver une longueur avec le théorème de Pythagore est presque toujours...

  * A) Une addition.
  * B) Une multiplication.
  * C) Une racine carrée.
    **Réponse :** C
    **Explication :** Le théorème nous donne le carré de la longueur, on doit donc calculer la racine carrée pour trouver la longueur elle-même.

-----

-----

## ✍️ Exercices d'Application

1.  **La Diagonale du Carré :**
    Soit un carré $ABCD$ de côté 5 cm.
    a. Faire un schéma.
    b. Calculer la valeur exacte de la longueur de sa diagonale $[AC]$.
    c. Donner une valeur approchée de cette longueur au millimètre près.

2.  **L'Échelle :**
    Une échelle de 5 mètres de long est posée contre un mur vertical. Le sommet de l'échelle est placé à une hauteur de 4.5 mètres sur le mur.
    a. Faire un schéma de la situation.
    b. Calculer à quelle distance du pied du mur se trouve le pied de l'échelle (donner la valeur approchée au centimètre près).

3.  **Le Losange :**
    Soit un losange $EFGH$ dont les diagonales $[EG]$ et $[FH]$ se coupent en leur milieu $O$. On sait que $EG = 16$ cm et $FH = 12$ cm.
    a. Faire un schéma et rappeler les propriétés des diagonales d'un losange.
    b. Calculer la longueur d'un côté du losange (par exemple, le côté $[EF]$). (Indice : Travaillez dans le triangle $EOF$).

<!-- end list -->

```
```