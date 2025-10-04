---
title: "Visualiser et se Repérer dans l'Espace"
level: "3ème"
subject: "Géométrie dans l'Espace"
keywords: ["espace", "coordonnées", "latitude", "longitude", "pavé droit", "section plane", "volume", "conversion"]
related_concepts: ["theoreme_de_thales", "agrandissement_reduction", "geogebra"]
---

# Visualiser et se Repérer dans l'Espace

---

## 🎯 Objectifs de la Leçon

À la fin de cette leçon, tu seras capable de :
* Te repérer sur une sphère en utilisant la **latitude** et la **longitude**.
* Te repérer dans un **pavé droit** en utilisant les coordonnées $(x, y, z)$.
* Reconnaître la nature des **sections planes** d'un cube, pavé, cylindre, cône, pyramide et sphère.
* Connaître et utiliser les formules pour **calculer le volume** des solides usuels.
* **Convertir** des unités de volume et de capacité.

---

## 🚀 Mise en Situation

Tu utilises Google Maps pour trouver un restaurant ? Ton téléphone utilise des coordonnées (latitude et longitude) pour te situer sur la Terre, qui est une sphère. Quand tu joues à un jeu vidéo comme Minecraft, ton personnage se déplace dans un monde fait de blocs (des pavés droits) et sa position est définie par des coordonnées $(x, y, z)$.

L'espace qui nous entoure est en 3 dimensions. Ce chapitre va te donner les outils pour te repérer, visualiser et mesurer des objets dans cet espace 3D.

---

## Pré-requis

Pour être à l'aise avec ce chapitre, il est utile de :
* Savoir se repérer dans un repère plan (2D).
* Connaître les figures géométriques planes (carré, rectangle, triangle, cercle).
* Maîtriser les formules de calcul d'aires.
* Connaître le théorème de Pythagore et de Thalès (pour certains exercices).

---

## 📚 Cours

### 1. Se Repérer dans l'Espace

#### a. Sur une Sphère (La Terre)
Pour se repérer sur une surface sphérique comme la Terre, on utilise un système de deux coordonnées angulaires :

* **La Latitude :** Elle mesure la position Nord-Sud par rapport à l'**Équateur**.
* **La Longitude :** Elle mesure la position Est-Ouest par rapport à un méridien de référence, le **méridien de Greenwich**.

* **Illustration :**
    ![Figure 3D de la Terre montrant l'Équateur (en rouge), le méridien de Greenwich (en vert), un parallèle (latitude) et un méridien (longitude) passant par un point P.](URL_VERS_VOTRE_IMAGE/sphere_coordonnees.svg)

#### b. Dans un Pavé Droit (Repère 3D)
Pour se repérer dans un solide, on utilise un repère à 3 dimensions. Chaque point est repéré par un triplet de nombres appelé **coordonnées** : $(x ; y ; z)$.
* $x$ : l'**abscisse** (longueur)
* $y$ : l'**ordonnée** (largeur)
* $z$ : l'**altitude** (hauteur)

* **Illustration :**
    ![Figure 3D d'un pavé droit ABCDEFGH. Un repère est visible avec son origine en A. L'axe des x suit [AB], l'axe des y suit [AD] et l'axe des z suit [AE].](URL_VERS_VOTRE_IMAGE/pave_coordonnees.svg)

### 2. Sections Planes d'un Solide

Une section plane est la figure que l'on obtient en "coupant" un solide par un plan.

* **Cube / Pavé droit :** Coupé par un plan parallèle à une face, la section est un **rectangle** (ou un carré).
* **Cylindre :** Coupé par un plan parallèle aux bases, la section est un **cercle**. Coupé par un plan parallèle à l'axe, la section est un **rectangle**.
* **Pyramide / Cône :** Coupé par un plan parallèle à la base, la section est une **réduction** de la base.
* **Sphère :** Coupé par un plan, la section est un **cercle**.

* **Illustration :**
    ![Composition de 4 figures 3D : 1. Un cylindre coupé par un plan horizontal et un plan vertical. 2. Un cône coupé par un plan horizontal. 3. Une pyramide coupée par un plan horizontal. 4. Une sphère coupée par un plan.](URL_VERS_VOTRE_IMAGE/sections_solides.svg)

### 3. Calculs de Volume

#### Formules à Connaître
| Solide | Formule du Volume ($\mathcal{V}$) | Figure (Suggestion d'image) |
| :--- | :--- | :--- |
| **Cube** | $\mathcal{V} = c^3$ | ![Figure 3D d'un cube avec son arête 'c' annotée.](URL_VERS_VOTRE_IMAGE/cube.svg) |
| **Pavé Droit** | $\mathcal{V} = L \times l \times h$ | ![Figure 3D d'un pavé droit avec L, l, et h annotés.](URL_VERS_VOTRE_IMAGE/pave.svg) |
| **Cylindre** | $\mathcal{V} = \pi r^2 \times h$ | ![Figure 3D d'un cylindre avec son rayon 'r' et sa hauteur 'h' annotés.](URL_VERS_VOTRE_IMAGE/cylindre.svg) |
| **Cône** | $\mathcal{V} = \frac{1}{3} \times \pi r^2 \times h$ | ![Figure 3D d'un cône avec son rayon 'r' et sa hauteur 'h' annotés.](URL_VERS_VOTRE_IMAGE/cone.svg) |
| **Pyramide** | $\mathcal{V} = \frac{1}{3} \times \text{Aire de la base} \times h$ | ![Figure 3D d'une pyramide à base carrée avec sa hauteur 'h' annotée.](URL_VERS_VOTRE_IMAGE/pyramide.svg) |
| **Boule** | $\mathcal{V} = \frac{4}{3} \pi r^3$ | ![Figure 3D d'une sphère avec son rayon 'r' annoté.](URL_VERS_VOTRE_IMAGE/sphere.svg) |

### 4. Conversions d'Unités

Le lien à connaître par cœur est :
$$ 1 \text{ L} = 1 \text{ dm}^3 $$

---

## ⚙️ Méthode(s)

### Méthode : Se repérer dans un pavé droit
1.  Identifier l'origine O et les directions des 3 axes (abscisses $x$, ordonnées $y$, altitude $z$).
2.  Pour trouver les coordonnées d'un point P, compter les unités nécessaires pour l'atteindre depuis l'origine en se déplaçant parallèlement aux axes, dans l'ordre $x$, puis $y$, puis $z$.

### Méthode : Convertir des unités de volume et de capacité
1.  Utiliser l'équivalence $1 \text{ L} = 1 \text{ dm}^3$.
2.  Convertir la mesure initiale en Litres ou en $dm^3$.
3.  Utiliser un tableau de conversion si nécessaire (en se rappelant que les unités en $m^3, dm^3, ...$ ont 3 colonnes chacune).

---

## ⚠️ Erreurs Fréquentes à Éviter

* **Confondre latitude (Nord/Sud) et longitude (Est/Ouest).**
* **Inverser les coordonnées $(x, y, z)$** dans un pavé droit.
* **Oublier le facteur $\frac{1}{3}$** dans la formule du volume des pyramides et des cônes.
* **Confondre le volume de la boule ($\frac{4}{3}\pi r^3$) avec l'aire de la sphère ($4\pi r^2$)**.
* **Utiliser une seule colonne par unité** pour les conversions de volume ($m^3, dm^3...$). Il en faut **trois** !

---

## ✅ Quiz de Compréhension Rapide

---
**Question 1 :** Pour se repérer sur Terre, les cercles parallèles à l'Équateur mesurent la...
* A) Longitude
* B) Latitude
* C) Altitude
**Réponse :** B
**Explication :** La latitude mesure la position Nord/Sud par rapport à l'Équateur.
---
**Question 2 :** La section d'un cylindre par un plan parallèle à son axe est un...
* A) Cercle
* B) Triangle
* C) Rectangle
**Réponse :** C
**Explication :** Couper un cylindre "verticalement" donne un rectangle.
---
**Question 3 :** La formule du volume d'un cône de rayon $r$ et de hauteur $h$ est :
* A) $\pi r^2 h$
* B) $\frac{1}{3}\pi r^2 h$
* C) $\frac{4}{3}\pi r^3$
**Réponse :** B
**Explication :** Il ne faut pas oublier le facteur $\frac{1}{3}$ pour les solides "pointus" comme le cône et la pyramide.
---
**Question 4 :** Un volume de 1 mètre cube ($1 \text{ m}^3$) est égal à :
* A) 1 Litre
* B) 100 Litres
* C) 1000 Litres
**Réponse :** C
**Explication :** $1 \text{ m}^3 = 1000 \text{ dm}^3$, et comme $1 \text{ dm}^3 = 1 \text{ L}$, alors $1 \text{ m}^3 = 1000 \text{ L}$.
---
**Question 5 :** Dans un repère d'origine A d'un cube ABCDEFGH, quel point a pour coordonnées (1; 1; 1) si l'arête du cube est 1 ?
* A) Le point E
* B) Le point C
* C) Le point G
**Réponse :** C
**Explication :** Pour aller de A à G, on se déplace sur l'abscisse (vers B), puis l'ordonnée (vers C), puis l'altitude (vers G).
---

---

## ✍️ Exercices d'Application

1.  **Coordonnées dans un Pavé :**
    Un pavé droit $OIKLMNPQ$ est tel que $O$ est l'origine d'un repère. On a $OI=5$, $OK=4$, $OM=3$. Les axes sont $(OI)$, $(OK)$ et $(OM)$.
    a. Faire un schéma en perspective.
    b. Donner les coordonnées de tous les sommets du pavé.
    c. Calculer la longueur de la grande diagonale $[OQ]$ (valeur exacte puis approchée au dixième). (Indice : utiliser Pythagore deux fois).

2.  **Le Cornet de Glace :**
    Un cornet de glace est un cône de révolution de hauteur 10 cm, surmonté d'une demi-boule de même rayon. Le rayon de la base du cône est de 3 cm.
    a. Calculer le volume exact du cône.
    b. Calculer le volume exact de la demi-boule de glace.
    c. En déduire le volume total exact du cornet de glace. Donner une valeur approchée au $cm^3$ près.

3.  **La Pyramide du Louvre :**
    La pyramide du Louvre est une pyramide régulière à base carrée. Côté de la base : environ 35 m. Hauteur : environ 22 m. Un projet de rénovation prévoit de la "remplir" à partir du sommet à $\frac{1}{4}$ de sa hauteur avec un matériau spécial. Ce "remplissage" formera une petite pyramide à l'intérieur de la grande.
    a. Calculer le volume total de la pyramide du Louvre (arrondir à l'entier).
    b. La petite pyramide est une réduction de la grande. Quel est le rapport $k$ de cette réduction ?
    c. En utilisant les effets sur les volumes, calculer le volume de la petite pyramide de matériau.