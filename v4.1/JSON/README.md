
## Ce dossier contient les fichiers au format JSON du RGAA 4.1

Les fichiers au format JSON correspondent __uniquement à la méthode technique__ du RGAA 4.1. Ils permettent de générer les pages HTML suivantes :
  * Critères et tests
  * Glossaire
  * Environnement de test
  * Références
  * Licence

### Fichier [criteres.json](criteres.json "Télécharger le fichier criteres.json (1,37 Mo)")
Le fichier `criteres.json` contient la liste des 106 critères du RGAA 4.0 regroupés par thématiques.
Il permet la création des pages HTML relatives aux critères et tests de la méthode technique du RGAA 4.1

Chaque critère RGAA contient les informations suivantes :
* Numéro ;
* Titre ;
* Liste des tests associés, certains tests pouvant contenir eux-mêmes une liste de conditions d'application ;
* Section note technique (optionnelle) ;
* Section cas particuliers (optionnelle) ;
* Section références divisée en deux parties :
  * Références aux critères WCAG associés ;
  * Références aux techniques WCAG associées.

### Fichier [glossaire.json](glossaire.json "Télécharger le fichier glossaire.json (676 Ko)")
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

Le contenu de ce dépôt est publié sous [licence Ouverte 2.0](https://github.com/DISIC/RGAA/blob/master/LICENSE.md).
