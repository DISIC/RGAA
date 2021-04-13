# Version 4.0 du référentiel général d'amélioration de l'accessibilité (RGAA v4.0)

Ce dépôt contient les __fichiers de référence__ de la version 4.0 du RGAA

Le RGAA 4.0 est mis à disposition sous plusieurs formats :
* un document téléchargeable en format ODT et en format PDF,
* une version HTML disponible uniquement en ligne et publiée sur le site web de la Direction interministérielle du numérique (DINUM).

__À noter__ : le site web de la DINUM met à disposition le RGAA pour la version _en cours_. Les fichiers de référence des versions antérieures du RGAA sont disponibles dans Github.

## Documents téléchargeables du RGAA 4.0
* ### Fichier [RGAA-v4.0.odt](RGAA-v4.0.odt "Télécharger le RGAA 4.0 au format ODT (261 Ko)")
Le fichier `RGAA-v4.0.odt` représente la version 4.0 de référence du RGAA en format ODT.

* ### Fichier [RGAA-v4.0.pdf](RGAA-v4.0.pdf "Télécharger le RGAA 4.0 au format PDF (3,04 Mo)")
Le fichier `RGAA-v4.0.pdf` représente la version 4.0 de référence du RGAA en format PDF. Il résulte d'une conversion du fichier ODT en format PDF.

* ### Fichier [rgaa4.0.modele-de-grille-d-audit.ods](rgaa4.0.modele-de-grille-d-audit.ods "Télécharger le modèle de grille d'audit RGAA 4.0 au format ODS (235 Ko)")

Le fichier `rgaa4.0.modele-de-grille-d-audit.ods` fournit un modèle de grille de vérification des critères du RGAA 4.0 sur un échantillon de pages pour la réalisation d'une inspection d'accessibilité numérique (_audit_) au format ODS.

* ### Fichier [rgaa4-2019-modele-rapport-audit.odt](rgaa4-2019-modele-rapport-audit.odt "Télécharger le modèle de rapport d'audit RGAA 4 au format ODT (115 Ko)")
Le fichier `rgaa4-2019-modele-rapport-audit.odt` fournit un modèle de rapport de résultats d'une inspection d'accessibilité numérique (_audit_) au format ODT.

* ### Fichier [rgaa4-2019-modele-rapport-audit.pdf](rgaa4-2019-modele-rapport-audit.pdf "Télécharger le modèle de rapport d'audit RGAA 4 au format PDF (117 Ko)")
Le fichier `rgaa4-2019-modele-rapport-audit.pdt` fournit un modèle de rapport de résultats d'une inspection d'accessibilité numérique (_audit_) au format PDF. Il résulte d'une conversion du fichier ODT en format PDF.

* ### Fichier [rgaa4-2019-exemple-declaration.odt](rgaa4-2019-exemple-declaration.odt "Télécharger l'exemple de déclaration d'accessibilité au format ODT (115 Ko)")
Le fichier `rgaa4-2019-exemple-declaration.odt` fournit un exemple pour la rédaction d'une déclaration d'accessibilité au format ODT.

* ### Fichier [rgaa4-2019-exemple-declaration.pdf](rgaa4-2019-exemple-declaration.pdf "Télécharger l'exemple de déclaration d'accessibilité au format PDF (117 Ko)")
Le fichier `rgaa4-2019-exemple-declaration.pdf` fournit un exemple pour la rédaction d'une déclaration d'accessibilité au format PDF. Il résulte d'une conversion du fichier ODT en format PDF.

*****************

## Version en ligne du RGAA 4.0

La version en ligne du RGAA est publiée sur le site de la DINUM dans la rubrique `Publications\rgaa_accessibilité`.
Les pages HTML sont organisées de la manière suivante :
* Accueil
* Obligations d'accessibilité
* Méthode technique
  * Critères et tests
  * Glossaire
  * Environnement de test
  * Références
  * Licence
* Kit d'audit
* Méthodologie de test
* Documentation
* Questions
* Notes de révision

## Création des pages HTML de la version web du RGAA 4.0

Les pages HTML `Accueil`, `Obligations d'accessibilité`, `Méthode technique`, `Kit d'audit`, `Méthodologie de test`, `Documentation`, `Questions` et `Notes de révision` sont générées à partir de fichiers en format Markdown (md).

Les pages HTML `Critères et tests` sont générées à partir du fichier `criteres.json` au format JSON.
Les pages HTML `Glossaire`, `Environnement de test`, `Références` et `Licence` sont générées à partir du fichier `glossaire.json` au format JSON.

Chaque fichier en format Markdown est mis à disposition individuellement ou regroupé dans un ensemble (_package_).
Les fichiers en format JSON sont mis à disposition individuellement.

## Package RGAA 4 initial version web

* ### Fichier [package RGAA 4 initial version web.zip](package%20RGAA%204%20initial%20version%20web.zip "Télécharger le package de la version web du RGAA 4.0 (355 Ko)")
Le fichier `package RGAA 4 initial version web.zip` contient les fichiers suivants

| NOM du fichier    | OBJET du fichier |
|:------------------|:-------|
|rgaa-accessibilite.html    | pour la création du menu de navigation dans les pages HTML du RGAA sur le site de la DINUM
|accueil.md        | pour la page d'accueil de la publication du RGAA sur le site de la DINUM
|obligations.md    | pour les pages de règles de mise en œuvre des obligations en matière d'accessibilité numérique du RGAA sur le site de la DINUM
|methode.md        | pour la page d'introduction de la méthode technique du RGAA sur le site de la DINUM
|criteres.html     | pour gérer un filtre d'affichage des critères du RGAA sur le site de la DINUM
|kit.md            | pour la page du kit d'audit du RGAA sur le site de la DINUM
|methodologie.md   | pour la page de méthodologie de tests du RGAA sur le site de la DINUM
|documentation.md  | pour la page de documentation du RGAA sur le site de la DINUM
|questions.md       | pour la page questions du RGAA sur le site de la DINUM
|notes-revision.md | pour la page des notes de révision du RGAA 3 2017 vers le RGAA 4 sur le site de la DINUM

## Téléchargement unitaire des fichiers

* ### Fichier [rgaa-accessibilite.html](rgaa-accessibilite.html "Télécharger (139 Ko)")
Le fichier `rgaa-accessibilite.html` permet de créer le menu de navigation dans les pages HTML du RGAA 4.0 sur le site de la DINUM.

* ### Fichier [accueil.md](accueil.md "Télécharger (107 Ko)")
Le fichier `accueil.md` correspond à la page d'accueil qui permet de télécharger le document du RGAA 4.0 au format ODT ou au format PDF, et d'aller consulter le RGAA 4.0 en version HTML sur le site de la DINUM.

* ### Fichier [obligations.md](obligations.md "Télécharger (157 Ko)")
Le fichier `obligations.md` correspond à la rubrique Règles de mise en œuvre des obligations en matière d'accessibilité numérique du RGAA 4.0 en version HTML sur le site de la DINUM.

* ### Fichier [methode.md](methode.md "Télécharger (106 Ko)")
Le fichier `methode.md` correspond à la page d'introduction de la rubrique Méthode technique du RGAA 4.0 en version HTML sur le site de la DINUM.

* ### Fichier [criteres.html](criteres.html "Télécharger (161 Ko)")
Le fichier `criteres.html` permet de mettre un filtre d'affichage des critères du RGAA 4.0 avec un filtrage par thématique, avec ou sans les tests, par niveau A ou AA des WCAG.

* ### Fichier [kit.md](kit.md "Télécharger (106 Ko)")
Le fichier `kit.md` correspond à la page Kit d'audit qui permet de télécharger sur le site de la DINUM :
* un modèle de grille de vérification des critères du RGAA 4.0 sur un échantillon de pages pour la réalisation d'une inspection d'accessibilité numérique (_audit_) au format ODS ;
* un modèle de rapport de résultats d'une inspection d'accessibilité numérique (_audit_) au format ODT ou au format PDF ;
* un exemple pour la rédaction d'une déclaration d'accessibilité au format ODT ou au format PDF.

* ### Fichier [methodologie.md](methodologie.md "Télécharger (520 Ko)")
Le fichier `methodologie.md` correspond à la page Méthodologie de test du RGAA 4.0 en version HTML sur le site de la DINUM.

* ### Fichier [documentation.md](documentation.md "Télécharger (105 Ko)")
Le fichier `documentation.md` correspond à une page _temporaire_ Documentation RGAA sur le site de la DINUM.

* ### Fichier [questions.md](questions.md "Télécharger (104 Ko)")
Le fichier `questions.md` correspond à la page Questions du RGAA 4.0 en version HTML sur le site de la DINUM.

* ### Fichier [notes-revision.md](notes-revision.md "Télécharger (1,01 Mo)")
Le fichier `notes-revision.md` correspond à la page des notes de révision du RGAA 3 2017 vers le RGAA 4.0 en version HTML sur le site de la DINUM.

**********************

* ### Fichier [criteres.json](criteres.json "Télécharger (1,38 Mo)")
Le fichier `criteres.json` contient la liste des 106 critères du RGAA 4.0 regroupés par thématiques.
Il permet la création des pages HTML relatives aux critères et tests de la méthode technique du RGAA 4.0

Chaque critère RGAA contient les informations suivantes :
* Numéro ;
* Titre ;
* Liste des tests associés, certains tests pouvant contenir eux-mêmes une liste de conditions d'application ;
* Section note technique (optionnelle) ;
* Section cas particuliers (optionnelle) ;
* Section références divisée en deux parties :
  * Références aux critères WCAG associés ;
  * Références aux techniques WCAG associées.

* ### Fichier [glossaire.json](glossaire.json "Télécharger (681 Ko)")
Le fichier `glossaire.json` contient les entrées de glossaire utilisées dans le fichier `criteres.json`.
Il permet la création des pages HTML de la méthode technique du RGAA 4.0 relatives aux rubriques Glossaire, Environnement de test, Références et Licence.

Ces entrées sont regroupées par ordre alphabétique à la manière d'un abécédaire.
Chaque entrée de glossaire contient un ou plusieurs paragraphes explicatifs qui peuvent être assortis de liens et d'exemples.

#### Structure des contenus des fichiers JSON

Il est à noter que pour le fichier `criteres.json` :
* La propriété `tests` a pour contenu un objet qui regroupe l'ensemble des tests du critère.
* Chaque test est référencé directement par son numéro (`1`, par exemple) et a pour valeur : 
  * Soit une chaîne de caractères lorsque le test ne possède pas de conditions ;
  * Soit un tableau de chaînes de caractères lorsqu'il possède des conditions. Dans ce cas, le premier élément du tableau correspond à l'intitulé du test et les éléments suivants aux conditions associées.
* Les sections `technicalNote` et `particularCases` ont pour valeur un tableau avec pour éléments :
  * Soit une chaîne de caractères correspondant à l'équivalent d'un paragraphe ;
  * Soit un objet avec pour contenu une propriété `ol` ou `ul` correspondant à l'équivalent d'une liste ordonnée ou non ordonnée et ayant pour valeur un tableau contenant soit une chaîne de caractères, soit un objet avec pour contenu une propriété `ol` ou `ul` correspondant alors à un tableau imbriqué.

Il est à noter que pour le fichier `glossaire.json` :
* La description de l'entrée de glossaire est référencée par une propriété `dd` qui a pour valeur un tableau avec pour éléments :
  * Soit une chaîne de caractères correspondant à l'équivalent d'un paragraphe;
  * Soit un objet avec pour contenu une propriété `ol` ou `ul` correspondant à l'équivalent d'une liste ordonnée ou non ordonnée et ayant pour valeur un tableau contenant soit une chaîne de caractères, soit un objet avec pour contenu une propriété `ol` ou `ul` correspondant alors à un tableau imbriqué.

De manière générale, le contenu de certaines propriétés JSON contient un balisage interne en markdown :
* Les liens qu'ils soient internes ou externes; par exemple, le renvoi vers un critère du fichier `criteres.json` est représenté ainsi : `[critère 9.1](#crit-9-1)`.
* L'indication d'un terme ou d'une instruction relevant d'un langage informatique est signalée au moyen du délimiteur accent grave (`).

********************

## Licence

Le contenu de ce dépôt est publié sous [licence Ouverte 2.0](LICENSE.md).
