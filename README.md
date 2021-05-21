# Référentiel général d'amélioration de l'accessibilité (RGAA)

Ce dépôt contient les __fichiers de référence__ du RGAA à partir de la version 4.0

Le RGAA 4 est mis à disposition sous plusieurs formats :
* un document téléchargeable en format ODT et en format PDF,
* une version HTML disponible uniquement en ligne et publiée sur le site web de la Direction interministérielle du numérique (DINUM).

__À noter__ : le site web de la DINUM publie le RGAA pour la version _en cours_. 
Les fichiers de référence des versions antérieures du RGAA sont disponibles dans Github.

## Consulter les Releases pour plus d'informations et accéder aux fichiers

********************

## [version RGAA 4.1](https://github.com/DISIC/RGAA/releases/tag/v4.1)

La version en ligne du RGAA est publiée sur le site de la DINUM dans la rubrique `Publications\rgaa_accessibilité` depuis le 18 février 2021.

Les pages HTML sont organisées de la manière suivante :
_Note : l'organisation des pages a été modifiée en version 4.1 par rapport à la version 4.0_
* Accueil
* Obligations d'accessibilité
* Méthode technique
  * Critères et tests
  * Glossaire
  * Environnement de test
  * Références
  * Licence
* Kit d'audit
* Documentation RGAA
  * Méthodologie de test
  * Annexe – Critères de succès triple A (AAA) des WCAG 2.1
  * Notes de révision du RGAA 3 2017 vers RGAA 4
  * Notes de révision du RGAA 4.0 vers RGAA 4.1
* Questions

### Création des pages HTML de la version web du RGAA 4.1
Les pages HTML sont générées à partir de fichiers en format Markdown et en format JSON.

Les pages HTML `Accueil`, `Obligations d'accessibilité`, `Méthode technique`, `Kit d'audit`, `Méthodologie de test`, `Documentation`, `Questions`, `Annexe – Critères de succès triple A (AAA) des WCAG 2.1`, `Notes de révision du RGAA 3 2017 vers RGAA 4` et `Notes de révision du RGAA 4.0 vers RGAA 4.1` sont générées à partir de fichiers en format Markdown (md).

Les pages HTML `Critères et tests` sont générées à partir du fichier `criteres.json` au format JSON.
Les pages HTML `Glossaire`, `Environnement de test`, `Références` et `Licence` sont générées à partir du fichier `glossaire.json` au format JSON.

Chaque fichier en format Markdown est mis à disposition individuellement ou regroupé dans un ensemble (_package_).
Les fichiers en format JSON sont mis à disposition individuellement.

*****************

## [version RGAA 4.0](https://github.com/DISIC/RGAA/releases/tag/v4.0)

La version en ligne du RGAA a été publiée sur le site de la DINUM dans la rubrique `Publications\rgaa_accessibilité` dès le 16 septembre 2019 avant la mise à jour par la [release 4.1](https://github.com/DISIC/RGAA/releases/tag/v4.1)

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

### Création des pages HTML de la version web du RGAA 4.0
Les pages HTML sont générées à partir de fichiers en format Markdown et en format JSON.

Les pages HTML `Accueil`, `Obligations d'accessibilité`, `Méthode technique`, `Kit d'audit`, `Méthodologie de test`, `Documentation`, `Questions` et `Notes de révision` sont générées à partir de fichiers en format Markdown (md).

Les pages HTML `Critères et tests` sont générées à partir du fichier `criteres.json` au format JSON.
Les pages HTML `Glossaire`, `Environnement de test`, `Références` et `Licence` sont générées à partir du fichier `glossaire.json` au format JSON.

Chaque fichier en format Markdown est mis à disposition individuellement ou regroupé dans un ensemble (_package_).
Les fichiers en format JSON sont mis à disposition individuellement.

********************

## Licence

Le contenu de ce dépôt est publié sous [licence Ouverte 2.0](LICENSE.md).
