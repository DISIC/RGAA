---
title: Méthodologie de test - RGAA
permalink: "/publications/rgaa-accessibilite/documentation-rgaa/methodologie-test/"
menu:
  title: Méthodologie de test
  weight: 51
layout: rgaa-accessibilite
---

### Introduction

Ce document a été établi dans le cadre des ressources venant accompagner la prise en main de la version 4.0 du référentiel général d'amélioration de l'accessibilité (RGAA 4).

À noter qu'une mise à jour prochaine sera publiée pour la version RGAA 4.1.

Il est destiné à toute personne soucieuse de vérifier la conformité d'un contenu web au RGAA 4. Il s'agit d'une méthodologie de tests documentant les étapes permettant de vérifier si un critère du RGAA 4 est conforme ou non. Cette méthodologie est donc à utiliser en complément du référentiel technique du RGAA et ne peut être utilisée seule. Elle ne dispense donc pas d'une lecture approfondie du référentiel technique, ni d'une formation au RGAA.

Pour chacun des tests d'un critère correspond une procédure de test ; la mise en oeuvre de cette procédure peut recourir parfois l'usage d'outils spécifiques, autrement un navigateur suffit pour effectuer la majorité des tests.

Une liste d'outils est aussi proposée pour aider à la réalisation des tests ; ils ont été retenus à la fois parce qu'ils sont fréquemment utilisés par les experts du métier et parce qu'ils facilitent la recherche de certains résultats.

### Outils

L'outil le plus utile reste l'inspecteur de code que propose chaque navigateur. Il permet de rechercher facilement les éléments et les attributs requis pour un examen par un test d'accessibilité.

Les aides techniques listées dans l’environnement de test retenu constituent un second ensemble d'outils indispensables (voir la rubrique [Environnement de test](environnement/#contenu)) ; ils sont, en effet, requis pour s'assurer d'une restitution correcte de contenus accessibles (les alternatives aux images, les intitulés de lien, les titres de tableau, ...) dans le cas notamment où l'examen du code seul ne suffirait pas. <!-- ref sur numerique /publications/rgaa-accessibilite/methode-rgaa/environnement/#contenu -->

D'autres outils sont disponibles pour aider à la recherche des éléments de contenu ; ils se présentent souvent comme des extensions au navigateur et permettent d'explorer un ou plusieurs aspects d'un test d'accessibilité.

Les barres d'outils sont des extensions du navigateur qui vont faciliter le repérage visuel de certains éléments dans un document :

* Web Accessibility Toolbar pour Internet Explorer (<https://developer.paciellogroup.com/resources/wat/>) : barre d'outils de vérification de certains points d'accessibilité d'un document ;
* Web Developer Toolbar pour Firefox (<https://addons.mozilla.org/fr/firefox/addon/web-developer/>) : barre d'outils pour les développeurs qui peut aider à retrouver visuellement certains éléments dans un document pour en contrôler l'accessibilité ;
* Web Developer Toolbar pour Chrome (<https://chrome.google.com/webstore/detail/web-developer/>) : la même barre d'outils que précédemment, pour Chrome.

Au-delà de la simple barre d'outil, d'autres outils fournissent une analyse complète du document en signalant visuellement sur la page les erreurs d'accessibilité ou à l'inverse les éléments qui lui sont bénéfiques ; des filtres permettent alors souvent de n'afficher que certains de ces aspects. C'est ce que propose Wave, une solution disponible à la fois en ligne (<http://wave.webaim.org>) et comme extension de navigateur (<https://wave.webaim.org/extension/>).

La validation du code source d'un document HTML utilise le validateur en ligne du W3C (<https://validator.w3.org/>) ; À noter que pour valider le code source généré par le navigateur, il faut utiliser l'option "Validate by Direct Input" en y copiant la source HTML proposée par l'inspecteur de code du navigateur. Des extensions de navigateur sont aussi disponibles, mais il faut être vigilant, car les algorithmes de validation de ces extensions ne sont pas forcément à jour par rapport au validateur du W3C et les résultats obtenus peuvent donc être différents.

La vérification des contrastes de couleurs bénéficie de différents outils :

* WCAG Contrast checker (<https://addons.mozilla.org/fr/firefox/addon/wcag-contrast-checker/>) : extension Firefox qui permet un contrôle automatique des contrastes de couleurs des textes d'un document ;
* Color Contrast Analyser (<https://developer.paciellogroup.com/resources/contrastanalyser/>) : Application Windows ou Mac qui permet de contrôler des contrastes de couleurs.

La vérification de l'arborescence du document et de la hiérarchie des titres dispose d'une extension très utile :

* HeadingsMap pour Firefox (<https://addons.mozilla.org/fr/firefox/addon/headingsmap/>) : extension Firefox qui permet de donner un aperçu du plan du document et de son arborescence ;
* HeadingsMap pour Chrome (<https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi>) : même extension que la précédente pour Chrome.

L'analyse des fichiers bureautiques peut être réalisée au moyen de différents outils en fonction du format du fichier :

* PAC (PDF Accessibility Checker) version 3 pour Windows (<https://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html>) : logiciel qui permet de contrôler certains points d'accessibilité des documents PDF ;
* Word Accessibility Plug-in pour Microsoft Office Windows (<http://accessibility.zhaw.ch/index.php?id=6&L=1>) : extension du logiciel Microsoft Word qui permet d'éditer et de contrôler l'accessibilité d'un document bureautique éditable au format .doc ; à noter que les versions récentes des outils bureautiques de Microsoft offrent une fonctionnalité intégrée de validation de l'accessibilité.
* AccessODF pour LibreOffice (<https://extensions.libreoffice.org/extensions/accessodf>) : extension pour vérifier l'accessibilité d'un document LibreOffice Writer ; à noter que cette extension n'est plus compatible avec les dernières versions de LibreOffice (supérieures à la version 4.0) ;
* Ace by DAISY App (<https://inclusivepublishing.org/toolbox/ace-by-daisy-app/>) est un utilitaire pour vérifier l'accessibilité d'un fichier EPUB.

Enfin, un logiciel ancien mais toujours utile pour évaluer la potentialité de certains contenus web à causer des crises d'épilepsie : PEAT (Photosensitive Epilepsy Analysis Tool) pour Windows (<https://trace.umd.edu/peat>).

### Images

#### Critère 1.1 Chaque image porteuse d'information a-t-elle une alternative textuelle ?

##### Test 1.1.1

1. Retrouver dans le document les images structurées au moyen d’un élément `<img>` ou d’un élément possédant l'attribut WAI-ARIA `role="img"` ;
2. Pour chaque image, déterminer si l’image est porteuse d'information ;
3. Dans le cas où il s’agit d’un élément `<img>`, vérifier que l’image est pourvue au moins d’une alternative textuelle parmi les suivantes :
    1. Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
    2. Contenu de l’attribut WAI-ARIA `aria-label` ;
    3. Contenu de l’attribut `alt` ;
    4. Contenu de l’attribut `title`.
4. Dans le cas où il s’agit d’un élément possédant l'attribut WAI-ARIA `role="img"`, vérifier que l’image est pourvue au moins d’une alternative textuelle parmi les suivantes :
    1. Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
    2. Contenu de l’attribut WAI-ARIA `aria-label`.
5. Si au moins une alternative textuelle est trouvée, le test est validé.

##### Test 1.1.2

1. Retrouver dans le document les éléments `<area>` ;
2. Pour chaque élément `<area>`, déterminer si la zone réactive est porteuse d'information ;
3. Vérifier que la zone réactive est pourvue au moins d’une alternative textuelle parmi les suivantes :
    1. Contenu de l’attribut WAI-ARIA `aria-label` ;
    2. Contenu de l’attribut `alt` ;
4. Si au moins une alternative textuelle est trouvée, le test est validé.

##### Test 1.1.3

1. Retrouver dans le document les éléments `<input>` pourvus de l’attribut `type="image"` ;
2. Pour chaque élément `<input>` pourvu de l’attribut `type="image"`, déterminer si l’image utilisée est porteuse d'information ;
3. Vérifier que l’élément `<input>` est pourvu au moins d’une alternative textuelle parmi les suivantes :
    1. Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
    2. Contenu de l’attribut WAI-ARIA `aria-label` ;
    3. Contenu de l’attribut `alt` ;
    4. Contenu de l’attribut `title`.
4. Si au moins une alternative textuelle est trouvée, le test est validé.

##### Test 1.1.4

1. Retrouver dans le document les éléments `<img>` pourvus de l’attribut `ismap` ;
2. Pour chaque élément `<img>` pourvu de l’attribut `ismap`, vérifier la présence d’un lien ou d’un ensemble de liens (ou bien d'un autre type de composant d'interface qui jouerait un rôle similaire comme une liste de sélection, par exemple) permettant d'accéder aux mêmes ressources que lorsque l'image fait l’objet d’un clic.
3. Si c'est le cas, le test est validé.

<!--  => le test initial est faux
La présence de ce test au sein d’un critère portant sur l’existence d’une alternative textuelle pour une image porteuse d’information est finalement douteuse ; en effet, l’image peut très bien disposer d’une alternative textuelle valide sans qu’un lien alternatif ne soit présent, car ce sont deux considérations différentes. Ce test aurait plus sa place dans la thématique navigation. De plus une liste de liens n’est pas la seule façon d’assurer l’alternative à ce type d’image, par exemple une liste de sélection (<select>) présentant l’ensemble des possibilités de navigation dans l’image. -->

##### Test 1.1.5

1. Retrouver dans le document les éléments `<svg>` ;
2. Pour chaque élément `<svg>`, déterminer si l’image est porteuse d'information ;
3. S’assurer que l’élément `<svg>` est pourvu d’un attribut WAI-ARIA `role="img"` ;
4. Si ce n’est pas le cas, le test est invalidé.
5. Le cas échéant, vérifier que l’élément `<svg>` est pourvu au moins d’une alternative textuelle parmi les suivantes :
    1. Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
    2. Contenu de l’attribut WAI-ARIA `aria-label` ;
6. Si au moins une alternative textuelle est trouvée, le test est validé.

##### Test 1.1.6

1. Retrouver dans le document les éléments `<object>` pourvus de l'attribut `type="image/…"` ;
2. Pour chaque élément `<object>` pourvu de l'attribut `type="image/…"`, déterminer si l’image utilisée est porteuse d'information ;
3. Vérifier que l’élément `<object>` est pourvu au moins d’une alternative textuelle parmi les suivantes :
    1. Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
    2. Contenu de l’attribut WAI-ARIA `aria-label` ;
    3. Contenu de l’attribut `title`.
4. Si au moins une alternative textuelle est trouvée, le test est validé ;
5. Sinon, vérifier que l'élément `<object>` est :
    * Soit immédiatement suivi d'un lien ou bouton adjacent permettant d'accéder à un contenu alternatif ;
    * Soit un mécanisme permet à l'utilisateur de remplacer l'élément `<object>` par un contenu alternatif.
6. Si c'est le cas, le test est validé.

##### Test 1.1.7

1. Retrouver dans le document les éléments `<embed>` pourvus de l'attribut `type="image/…"` ;
2. Pour chaque élément `<embed>` pourvu de l'attribut `type="image/…"`, déterminer si l’image utilisée est porteuse d'information ;
3. Vérifier que l’élément `<embed>` est pourvu au moins d’une alternative textuelle parmi les suivantes :
    1. Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
    2. Contenu de l’attribut WAI-ARIA `aria-label` ;
    3. Contenu de l’attribut `title`.
4. Si au moins une alternative textuelle est trouvée, le test est validé ;
5. Sinon, vérifier que l'élément `<embed>` est :
    * Soit immédiatement suivi d'un lien ou bouton adjacent permettant d'accéder à un contenu alternatif ;
    * Soit un mécanisme permet à l'utilisateur de remplacer l'élément `<embed>` par un contenu alternatif.
6. Si c'est le cas, le test est validé.

##### Test 1.1.8

1. Retrouver dans le document les éléments `<canvas>` ;
2. Pour chaque élément `<canvas>`, déterminer si l’image utilisée est porteuse d'information ;
3. Vérifier que l’élément `<canvas>` est pourvu au moins d’une alternative textuelle parmi les suivantes :
    1. Passage de texte associé via l’attribut WAI-ARIA `aria-labelledby` ;
    2. Contenu de l’attribut WAI-ARIA `aria-label`.
4. Si au moins une alternative textuelle est trouvée, le test est validé.
5. Sinon, vérifier que l'élément `<canvas>` est :
    * Soit pourvu d'un contenu alternatif présent entre les balises `<canvas>` et `</canvas>` ;
    * Soit immédiatement suivi d'un lien ou bouton adjacent permettant d'accéder à un contenu alternatif ;
    * Soit un mécanisme permet à l'utilisateur de remplacer l'élément `<canvas>` par un contenu alternatif.
6. Si c'est le cas, le test est validé.

#### Critère 1.2 Chaque image de décoration est-elle correctement ignorée par les technologies d'assistance ?

##### Test 1.2.1

1. Retrouver dans le document les images décoratives structurées au moyen d’un élément `<img>` ;
2. Pour chaque image, vérifier que l’image ne possède pas d'attributs `aria-labelledby`, `aria-label` ou `title` et qu'elle possède :
    * Soit un attribut `alt` vide (`alt=""`) ;
    * Soit un attribut WAI-ARIA `aria-hidden="true"` ou `role="presentation"`.
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.2.2

1. Retrouver dans le document les images décoratives structurées au moyen d’un élément `<area>` (sans attribut `href`) ;
2. Pour chaque image, vérifier que l'élément `<area>` ne possède pas d'attributs `aria-labelledby`, `aria-label` ou `title` et qu'il possède :
    * Soit un attribut `alt` vide (`alt=""`) ;
    * Soit un attribut WAI-ARIA `aria-hidden="true"` ou `role="presentation"`.
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.2.3

1. Retrouver dans le document les images décoratives structurées au moyen d’un élément `<object>` (avec un attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que l'élément `<object>` ne possède pas d'attributs `aria-labelledby`, `aria-label` ou `title` et qu'il :
    * Possède un attribut WAI-ARIA `aria-hidden="true"` ;
    * Et est dépourvu d'alternative textuelle ;
    * Et est dépourvu d'un contenu alternatif présent entre les balises `<object>` et `</object>`.
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.2.4

1. Retrouver dans le document les images décoratives structurées au moyen d’un élément `<svg>` ;
2. Pour chaque image, vérifier que l'élément `<svg>` ne possède pas d'attributs `aria-labelledby` ou `aria-label` et qu'il :
    * Possède un attribut WAI-ARIA `aria-hidden="true"` ;
    * Et est dépourvu d'alternative textuelle (ainsi que ses éléments enfants) ;
    * Et ne contient pas d'éléments `<title>` et `<desc>` à moins que vides de contenu ;
    * Et est dépourvu d'attribut `title` (ainsi que ses éléments enfants).
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.2.5

1. Retrouver dans le document les images décoratives structurées au moyen d’un élément `<canvas>` ;
2. Pour chaque image, vérifier que l'élément `<canvas>` ne possède pas d'attributs `aria-labelledby`, `aria-label` ou `title` et qu'il :
    * Possède un attribut WAI-ARIA `aria-hidden="true"` ;
    * Et est dépourvu d'alternative textuelle ;
    * Et est dépourvu d'un contenu alternatif présent entre les balises `<canvas>` et `</canvas>`.
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.2.6

1. Retrouver dans le document les images décoratives structurées au moyen d’un élément `<embed>` (avec un attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que l'élément `<embed>` ne possède pas d'attributs `aria-labelledby`, `aria-label` ou `title` et qu'il :
    * Possède un attribut WAI-ARIA `aria-hidden="true"` ;
    * Et est dépourvu d'alternative textuelle ;
3. Si c'est le cas pour chaque image, le test est validé.

#### Critère 1.3 Pour chaque image porteuse d'information ayant une alternative textuelle, cette alternative est-elle pertinente (hors cas particuliers) ?

##### Test 1.3.1

1. Retrouver dans le document les images structurées au moyen d’un élément `<img>` (ou d’un élément possédant l'attribut WAI-ARIA `role="img"`) pourvues d'une alternative textuelle ;
2. Pour chaque image, vérifier que l’alternative textuelle est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.3.2

1. Retrouver dans le document les éléments `<area>` pourvus d'une alternative textuelle ;
2. Pour chaque élément `<area>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.3.3

1. Retrouver dans le document les éléments `<input>` pourvus de l’attribut `type="image"` et d'une alternative textuelle ;
2. Pour chaque élément `<input>` pourvu de l’attribut `type="image"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.3.4

1. Retrouver dans le document les éléments `<object>` pourvus de l'attribut `type="image/…"` et d'une alternative textuelle ;
2. Pour chaque élément `<object>` pourvu de l'attribut `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.3.5

1. Retrouver dans le document les éléments `<embed>` pourvus de l'attribut `type="image/…"` et d'une alternative textuelle ;
2. Pour chaque élément `<embed>` pourvu de l'attribut `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.3.6

1. Retrouver dans le document les éléments `<svg>` pourvus d'une alternative textuelle ;
2. Pour chaque élément `<svg>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.3.7

1. Retrouver dans le document les éléments `<canvas>` pourvus d'une alternative textuelle ;
2. Pour chaque élément `<canvas>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.3.8

1. Retrouver dans le document les éléments `<canvas>` pourvus d'un contenu alternatif entre les balises `<canvas>` et `</canvas>` ;
2. Pour chaque élément `<canvas>`, vérifier que le contenu alternatif est correctement restitué par les technologies d'assistance ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.3.9

1. Retrouver dans le document les images pourvues d'une alternative textuelle ;
2. Pour chaque image, vérifier l'alternative textuelle est courte et concise ;
3. Si c'est le cas pour chaque image, le test est validé.

#### Critère 1.4 Pour chaque image utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle, cette alternative permet-elle d'identifier la nature et la fonction de l'image ?

##### Test 1.4.1

1. Retrouver dans le document les images structurées au moyen d’un élément `<img>` pourvues d'une alternative textuelle et utilisées comme CAPTCHA ou comme image-test ;
2. Pour chaque image, vérifier que l’alternative textuelle est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.4.2

1. Retrouver dans le document les éléments `<area>` pourvus d'une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<area>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.4.3

1. Retrouver dans le document les éléments `<input>` pourvus de l’attribut `type="image"` et d'une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<input>` pourvu de l’attribut `type="image"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.4.4

1. Retrouver dans le document les éléments `<object>` pourvus de l'attribut `type="image/…"` et d'une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<object>` pourvu de l'attribut `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.4.5

1. Retrouver dans le document les éléments `<embed>` pourvus de l'attribut `type="image/…"` et d'une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<embed>` pourvu de l'attribut `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.4.6

1. Retrouver dans le document les éléments `<svg>` pourvus d'une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<svg>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.4.7

1. Retrouver dans le document les éléments `<canvas>` pourvus d'une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque élément `<canvas>`, vérifier que l’alternative textuelle est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

#### Critère 1.5 Pour chaque image utilisée comme CAPTCHA, une solution d'accès alternatif au contenu ou à la fonction du CAPTCHA est-elle présente ?

##### Test 1.5.1

1. Retrouver dans le document les images (éléments `<img>`, `<area>`, `<object>`, `<embed>`, `<svg>`, `<canvas>` ou possédant un attribut WAI-ARIA `role="img"`) utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque image, vérifier qu'il existe :
    * Soit une autre forme de CAPTCHA non graphique, au moins ;
    * Soit une autre solution d'accès à la fonctionnalité qui est sécurisée par le CAPTCHA.
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.5.2

1. Retrouver dans le document les boutons associés à une image (éléments `<input>` avec l'attribut `type="image"`) utilisés comme CAPTCHA ou comme image-test ;
2. Pour chaque bouton associé à une image, vérifier qu'il existe :
    * Soit une autre forme de CAPTCHA non graphique, au moins ;
    * Soit une autre solution d'accès à la fonctionnalité qui est sécurisée par le CAPTCHA.
3. Si c'est le cas pour chaque image, le test est validé.

<!--
En quoi finalement 1.5.1 est-il différent de 1.5.2 ? Les deux disent la même chose.
-->

#### Critère 1.6 Chaque image porteuse d'information a-t-elle, si nécessaire, une description détaillée ?

##### Test 1.6.1

1. Retrouver dans le document les images structurées au moyen d’un élément `<img>` (ou d’un élément possédant l'attribut WAI-ARIA `role="img"`) porteuses d'information qui nécessitent une description détaillée ;
2. Pour chaque image, vérifier qu'il existe :
    * Soit un attribut `longdesc` qui donne l'adresse (url) d'une page ou d'un emplacement dans la page contenant la description détaillée ;
    * Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l'image ;
    * Soit un lien ou un bouton adjacent permettant d'accéder à la description détaillée.
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.6.2

1. Retrouver dans le document les éléments `<object>` pourvus de l'attribut `type="image/…"`, porteurs d'information qui nécessitent une description détaillée ;
2. Pour chaque élément `<object>` pourvu de l'attribut `type="image/…"`, vérifier qu'il existe :
    * Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l'image ;
    * Soit un lien ou un bouton adjacent permettant d'accéder à la description détaillée.
3. Si c'est le cas pour chaque élément `<object>` pourvu de l'attribut `type="image/…"`, le test est validé.

##### Test 1.6.3

1. Retrouver dans le document les éléments `<embed>` pourvus de l'attribut `type="image/…"`, porteurs d'information qui nécessitent une description détaillée ;
2. Pour chaque élément `<embed>` pourvu de l'attribut `type="image/…"`, vérifier qu'il existe :
    * Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l'image ;
    * Soit un lien ou un bouton adjacent permettant d'accéder à la description détaillée.
3. Si c'est le cas pour chaque élément `<embed>` pourvu de l'attribut `type="image/…"`, le test est validé.

##### Test 1.6.4

1. Retrouver dans le document les éléments `<input>` pourvus de l’attribut `type="image"`, porteurs d'information qui nécessitent une description détaillée ;
2. Pour chaque élément `<input>` pourvu de l’attribut `type="image"`, vérifier qu'il existe :
    * Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l'image ;
    * Soit un lien ou un bouton adjacent permettant d'accéder à la description détaillée ;
    * Soit un attribut WAI-ARIA `aria-describedby` associant un passage de texte faisant office de description détaillée.
3. Si c'est le cas pour chaque élément `<input>` pourvu de l’attribut `type="image"`, le test est validé.

##### Test 1.6.5

1. Retrouver dans le document les éléments `<svg>` porteurs d'information qui nécessitent une description détaillée ;
2. Pour chaque élément `<svg>`, vérifier qu'il existe :
    * Soit un attribut WAI-ARIA `aria-label` contenant l'alternative textuelle et une référence à une description détaillée adjacente ;
    * Soit un attribut WAI-ARIA `aria-labelledby` associant un passage de texte faisant office d'alternative textuelle et un autre faisant office de description détaillée ;
    * Soit un attribut WAI-ARIA `aria-describedby` associant un passage de texte faisant office de description détaillée.
    * Soit un lien ou un bouton adjacent permettant d'accéder à la description détaillée.
3. Si c'est le cas pour chaque élément `<svg>`, le test est validé.

##### Test 1.6.6

1. Retrouver dans le document les éléments `<svg>` porteurs d'information dont la description détaillée est fournie au moyen d'un attribut `aria-label`, `aria-labelledby` ou `aria-describedby` ;
2. Pour chaque élément `<svg>`, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d'assistance ;
3. Si c'est le cas pour chaque élément `<svg>`, le test est validé.

##### Test 1.6.7

1. Retrouver dans le document les éléments `<canvas>` porteurs d'information qui nécessitent une description détaillée ;
2. Pour chaque élément `<canvas>`,  vérifier qu'il existe :
    * Soit un attribut WAI-ARIA `aria-label` contenant l'alternative textuelle et une référence à une description détaillée adjacente ;
    * Soit un attribut WAI-ARIA `aria-labelledby` associant un passage de texte faisant office d'alternative textuelle et un autre faisant office de description détaillée ;
    * Soit un contenu textuel entre `<canvas>` et `</canvas>` faisant référence à une description détaillée adjacente à l'image bitmap.
    * Soit un contenu textuel entre `<canvas>` et `</canvas>` faisant office de description détaillée.
    * Soit un lien ou un bouton adjacent permettant d'accéder à la description détaillée.
3. Si c'est le cas pour chaque élément `<canvas>`, le test est validé.

##### Test 1.6.8

1. Retrouver dans le document les éléments `<canvas>` porteurs d'information dont la description détaillée est fournie au moyen d'un attribut `aria-label`, `aria-labelledby` ou `aria-describedby` ;
2. Pour chaque élément `<canvas>`, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d'assistance ;
3. Si c'est le cas pour chaque élément `<canvas>`, le test est validé.

##### Test 1.6.9

1. Retrouver dans le document les images (éléments `<img>`, `<input>` avec l'attribut `type="image"`, `<area>`, `<object>`, `<embed>`, `<svg>`, `<canvas>` ou possédant un attribut WAI-ARIA `role="img"`) porteuses d'information dont la description détaillée utilise un attribut WAI-ARIA `aria-describedby` ;
2. Pour chaque image, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d'assistance ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.6.10

1. Retrouver dans le document les éléments pourvu d'un attribut WAI-ARIA `role="img"` porteurs d'information qui nécessitent une description détaillée ;
2. Pour chaque élément `role="img"`, vérifier qu'il existe :
    * Soit un attribut WAI-ARIA `aria-label` contenant l'alternative textuelle et une référence à une description détaillée adjacente ;
    * Soit un attribut WAI-ARIA `aria-labelledby` associant un passage de texte faisant office d'alternative textuelle et un autre faisant office de description détaillée ;
    * Soit un attribut WAI-ARIA `aria-describedby` associant un passage de texte faisant office de description détaillée.
    * Soit un lien ou un bouton adjacent permettant d'accéder à la description détaillée.
3. Si c'est le cas pour chaque élément `role="img"`, le test est validé.

#### Critère 1.7 Pour chaque image porteuse d'information ayant une description détaillée, cette description est-elle pertinente ?

##### Test 1.7.1

1. Retrouver dans le document les images structurées au moyen d’un élément `<img>` qui possèdent une description détaillée ;
2. Pour chaque image, vérifier que la description détaillée est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.7.2

1. Retrouver dans le document les éléments `<input>` pourvus de l’attribut `type="image"` qui possèdent une description détaillée ;
2. Pour chaque élément `<input>` pourvu de l’attribut `type="image"`, vérifier que la description détaillée est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.7.3

1. Retrouver dans le document les éléments `<object>` pourvus de l'attribut `type="image/…"` qui possèdent une description détaillée ;
2. Pour chaque élément `<object>` pourvu de l'attribut `type="image/…"`, vérifier que la description détaillée est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.7.4

1. Retrouver dans le document les éléments `<embed>` pourvus de l'attribut `type="image/…"` qui possèdent une description détaillée ;
2. Pour chaque élément `<embed>` pourvu de l'attribut `type="image/…"`, vérifier que la description détaillée est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.7.5

1. Retrouver dans le document les éléments `<svg>` qui possèdent une description détaillée ;
2. Pour chaque élément `<svg>`, vérifier que la description détaillée est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.7.6

1. Retrouver dans le document les éléments `<canvas>` qui possèdent une description détaillée ;
2. Pour chaque élément `<canvas>`, vérifier que la description détaillée est pertinente ;
3. Si c'est le cas pour chaque image, le test est validé.

#### Critère 1.8 Chaque image texte porteuse d'information, en l'absence d'un mécanisme de remplacement, doit si possible être remplacée par du texte stylé. Cette règle est-elle respectée ?

##### Test 1.8.1

1. Retrouver dans le document les images texte structurées au moyen d’un élément `<img>` (ou d’un élément possédant l'attribut WAI-ARIA `role="img"`) ;
2. Pour chaque image, vérifier que :
    * Soit il existe un mécanisme de remplacement ;
    * Soit l'image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.8.2

1. Retrouver dans le document les boutons "images texte" (élément `<input>` avec l'attribut `type="image"`) ;
2. Pour chaque image, vérifier que :
    * Soit il existe un mécanisme de remplacement ;
    * Soit l'image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.8.3

1. Retrouver dans le document les images texte objet (élément `<object>` avec l'attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que :
    * Soit il existe un mécanisme de remplacement ;
    * Soit l'image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.8.4

1. Retrouver dans le document les images texte embarquées (élément `<embed>` avec l'attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que :
    * Soit il existe un mécanisme de remplacement ;
    * Soit l'image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.8.5

1. Retrouver dans le document les images texte bitmap (élément `<canvas>`) ;
2. Pour chaque image, vérifier que :
    * Soit il existe un mécanisme de remplacement ;
    * Soit l'image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3. Si c'est le cas pour chaque image, le test est validé.

#### Critère 1.9 Chaque légende d'image est-elle, si nécessaire, correctement reliée à l'image correspondante ?

##### Test 1.9.1

1. Retrouver dans le document les images pourvues d'une légende structurées au moyen d'élément `<img>`, d'un élément `<input>` avec l'attribut `type="image"` ou d'un élément possédant l'attribut WAI-ARIA `role="img"` ;
2. Pour chaque image, vérifier que :
    * L'image et sa légende sont contenues dans une balise `<figure>` ;
    * La balise `<figure>` possède une propriété WAI-ARIA `role="figure"` ou `role="group"` ;
    * La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
    * La légende est contenue dans une balise `<figcaption>`.
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.9.2

1. Retrouver dans le document les images objet pourvues d'une légende (élément `<object>` avec l'attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que :
    * L'image et sa légende sont contenues dans une balise `<figure>` ;
    * La balise `<figure>` possède une propriété WAI-ARIA `role="figure"` ou `role="group"` ;
    * La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
    * La légende est contenue dans une balise `<figcaption>`.
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.9.3

1. Retrouver dans le document les images embarquées pourvues d'une légende (élément `<embed>` avec l'attribut `type="image/…"`) ;
2. Pour chaque image, vérifier que :
    * L'image et sa légende sont contenues dans une balise `<figure>` ;
    * La balise `<figure>` possède une propriété WAI-ARIA `role="figure"` ou `role="group"` ;
    * La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
    * La légende est contenue dans une balise `<figcaption>`.
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.9.4

1. Retrouver dans le document les images vectorielles pourvues d'une légende (élément `<svg>`) ;
2. Pour chaque image, vérifier que :
    * L'image et sa légende sont contenues dans une balise `<figure>` ;
    * La balise `<figure>` possède une propriété WAI-ARIA `role="figure"` ou `role="group"` ;
    * La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
    * La légende est contenue dans une balise `<figcaption>`.
3. Si c'est le cas pour chaque image, le test est validé.

##### Test 1.9.5

1. Retrouver dans le document les images bitmap (élément `<canvas>`) ;
2. Pour chaque image, vérifier que :
    * L'image et sa légende sont contenues dans une balise `<figure>` ;
    * La balise `<figure>` possède une propriété WAI-ARIA `role="figure"` ou `role="group"` ;
    * La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende ;
    * La légende est contenue dans une balise `<figcaption>`.
3. Si c'est le cas pour chaque image, le test est validé.

### Cadres

#### Critère 2.1 Chaque cadre a-t-il un titre de cadre ?

##### Test 2.1.1

1. Retrouver dans le document les cadres (élément `<iframe>` ou `<frame>`) ;
2. Pour chaque cadre, vérifier qu'il possède un attribut `title` ;
3. Si c'est le cas pour chaque cadre, le test est validé.

#### Critère 2.2 Pour chaque cadre ayant un titre de cadre, ce titre de cadre est-il pertinent ?

##### Test 2.2.1

1. Retrouver dans le document les cadres (élément `<iframe>` ou `<frame>`) ;
2. Pour chaque cadre pourvu d'un attribut `title`, vérifier que son contenu est pertinent ;
3. Si c'est le cas pour chaque cadre, le test est validé.

### Couleurs

#### Critère 3.1 Dans chaque page web, l'information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?

##### Test 3.1.1

1. Retrouver dans le document les informations données par la couleur dans un mot ou un ensemble de mots ;
2. Pour chacune de ces informations, vérifier qu'il existe un autre moyen de récupérer cette information (présence d'un attribut `title`, d'une icône ou d'un effet graphique de forme ou de position, un effet typographique...) ;
3. Si c'est le cas pour chaque information, le test est validé.

##### Test 3.1.2

1. Retrouver dans le document les informations données par la couleur dans un texte ;
2. Pour chacune de ces informations, vérifier qu'il existe un autre moyen de récupérer cette information (présence d'un attribut `title`, d'une icône ou d'un effet graphique de forme ou de position, un effet typographique...) ;
3. Si c'est le cas pour chaque information, le test est validé.

##### Test 3.1.3

1. Retrouver dans le document les informations données par la couleur dans une image ;
2. Pour chacune de ces informations, vérifier qu'il existe un autre moyen de récupérer cette information (présence d'un attribut `title`, d'une icône ou d'un effet graphique de forme ou de position, un effet typographique...) ;
3. Si c'est le cas pour chaque information, le test est validé.

##### Test 3.1.4

1. Retrouver dans le document les informations données par la couleur dans une propriété CSS ;
2. Pour chacune de ces informations, vérifier qu'il existe un autre moyen de récupérer cette information (présence d'un attribut `title`, d'une icône ou d'un effet graphique de forme ou de position, un effet typographique...) ;
3. Si c'est le cas pour chaque information, le test est validé.

##### Test 3.1.5

1. Retrouver dans le document les informations données par la couleur dans un média temporel ;
2. Pour chacune de ces informations, vérifier qu'il existe un autre moyen de récupérer cette information (présence d'un attribut `title`, d'une icône ou d'un effet graphique de forme ou de position, un effet typographique...) ;
3. Si c'est le cas pour chaque information, le test est validé.

##### Test 3.1.6

1. Retrouver dans le document les informations données par la couleur dans un média non temporel ;
2. Pour chacune de ces informations, vérifier qu'il existe un autre moyen de récupérer cette information (présence d'un attribut `title`, d'une icône ou d'un effet graphique de forme ou de position, un effet typographique...) ;
3. Si c'est le cas pour chaque information, le test est validé.

#### Critère 3.2 Dans chaque page web, le contraste entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé (hors cas particuliers) ?

##### Test 3.2.1

1. Retrouver dans le document les textes et les textes en image sans effet de graisse d'une taille restituée inférieure à 24px qui pourraient poser des problèmes de contraste ;
2. Pour chacun de ces textes, vérifier que :
    * Soit le rapport de contraste entre le texte et son arrière-plan est de 4.5:1, au moins ;
    * Soit un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 4.5:1, au moins.
3. Si c'est le cas pour chaque texte, le test est validé.

##### Test 3.2.2

1. Retrouver dans le document les textes et les textes en image en gras d'une taille restituée inférieure à 18,5px qui pourraient poser des problèmes de contraste ;
2. Pour chacun de ces textes, vérifier que :
    * Soit le rapport de contraste entre le texte et son arrière-plan est de 4.5:1, au moins ;
    * Soit un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 4.5:1, au moins.
3. Si c'est le cas pour chaque texte, le test est validé.

##### Test 3.2.3

1. Retrouver dans le document les textes et les textes en image sans effet de graisse d'une taille restituée supérieure ou égale à 24px qui pourraient poser des problèmes de contraste ;
2. Pour chacun de ces textes, vérifier que :
    * Soit le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins ;
    * Soit un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 3:1, au moins.
3. Si c'est le cas pour chaque texte, le test est validé.

##### Test 3.2.4

1. Retrouver dans le document les textes et les textes en image en gras d'une taille restituée supérieure ou égale à 18,5px qui pourraient poser des problèmes de contraste ;
2. Pour chacun de ces textes, vérifier que :
    * Soit le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins ;
    * Soit un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 3:1, au moins.
3. Si c'est le cas pour chaque texte, le test est validé.

##### Test 3.2.5

1. Retrouver dans le document les mécanismes qui permettent d'afficher un rapport de contraste conforme ;
2. Pour chacun de ces mécanismes, vérifier que le rapport de contraste entre le texte et la couleur d’arrière-plan est suffisamment élevé ;
3. Si c'est le cas pour chaque mécanisme, le test est validé.

Note : le critère est non applicable dans les situations où :

* Le texte fait partie d'un logo ou d'un nom de marque d'un organisme ou d'une société ;
* Le texte ou l'image de texte est purement décoratif ;
* Le texte fait partie d'une image véhiculant une information mais le texte lui-même n'apporte aucune information essentielle ;
* Le texte ou l'image de texte fait partie d'un élément d'interface sur lequel aucune action n'est possible (par exemple un bouton avec l'attribut `disabled`).

#### Critère 3.3 Dans chaque page web, les couleurs utilisées dans les composants d'interface ou les éléments graphiques porteurs d'informations sont-elles suffisamment contrastées (hors cas particuliers) ?

##### Test 3.3.1

1. Retrouver dans le document les composants d'interface qui pourraient poser des problèmes de contraste ;
2. Pour chacun de ces composants, vérifier que :
    * Soit le rapport de contraste entre les couleurs du composant dans ses différents états et la couleur d'arrière-plan contiguë est de 3:1, au moins ;
    * Soit un mécanisme permet à l'utilisateur d'afficher le composant avec un rapport de contraste de 3:1, au moins.
3. Si c'est le cas pour chaque composant, le test est validé.

##### Test 3.3.2

1. Retrouver dans le document les éléments graphiques qui pourraient poser des problèmes de contraste ;
2. Pour chacun de ces éléments, vérifier que :
    * Soit le rapport de contraste entre les couleurs de l'élément graphique nécessaires à sa compréhension et la couleur d'arrière-plan contiguë est de 3:1, au moins ;
    * Soit un mécanisme permet à l'utilisateur d'afficher l'élément graphique avec un rapport de contraste de 3:1, au moins.
3. Si c'est le cas pour chaque composant, le test est validé.

##### Test 3.3.3

1. Retrouver dans le document les éléments graphiques qui pourraient poser des problèmes de contraste ;
2. Pour chacun de ces éléments, vérifier que :
    * Soit le rapport de contraste des différentes couleurs contiguës de l'élément graphique entre elles, lorsqu'elles sont nécessaires à sa compréhension, est de 3:1, au moins ;
    * Soit un mécanisme permet à l'utilisateur d'afficher l'élément graphique avec un rapport de contraste de 3:1, au moins.
3. Si c'est le cas pour chaque élément graphique, le test est validé.

##### Test 3.3.4

1. Retrouver dans le document les mécanismes qui permettent d'afficher un rapport de contraste conforme ;
2. Pour chacun de ces mécanismes, vérifier que le rapport de contraste entre les couleurs du composant ou des éléments graphiques porteurs d’informations qui le composent est suffisamment élevé ;
3. Si c'est le cas pour chaque mécanisme, le test est validé.

Note : le critère est non applicable dans ces situations :

* Composant d'interface inactif (par exemple, un bouton avec un attribut `disabled`) sur lequel aucune action n'est possible ;
* Composant d'interface pour lequel l'apparence est gérée par les styles natifs du navigateur sans aucune modification par l'auteur (par exemple, le style au focus natif dans Chrome ou Firefox) ;
* Composant d'interface pour lequel la couleur n'est pas nécessaire pour identifier le composant ou son état (par exemple, un groupe de liens faisant office de navigation dont la position dans la page, la taille et la couleur du texte permettent de comprendre qu'il s'agit de liens même si la couleur du soulignement des liens avec le fond blanc n'a pas un ratio de 3:1 et que le texte lui a un ratio de 4.5:1) ;
* Élément graphique ou parties d'élément graphique non porteur d'information ou ayant une alternative (description longue, informations identiques visibles dans la page) ;
* Élément graphique ou parties d'élément graphique faisant partie d'un logo ou du nom de marque d'un organisme ou d'une société ;
* Élément graphique ou parties d'élément graphique dont la présentation est essentielle à l'information véhiculée (exemple drapeaux, logotypes, photos de personnes ou de scènes, captures d'écran, diagrammes médicaux, carte de chaleurs) ;
* Élément graphique ou parties d'élément graphique dynamiques dont le contraste au survol / focus est suffisant.

### Multimédia

#### Critère 4.1 Chaque média temporel pré-enregistré a-t-il, si nécessaire, une transcription textuelle ou une audiodescription (hors cas particuliers) ?

##### Test 4.1.1

1. Retrouver dans le document les médias temporels (éléments `<audio>`, `<video>` ou `<object>`) seulement audio qui nécessitent une transcription textuelle ;
2. Pour chaque média temporel seulement audio, vérifier la présence d'une transcription textuelle :
    * Soit accessible au moyen d'un lien adjacent (une URL ou une ancre) ;
    * Soit adjacente clairement identifiable.
3. Si c'est le cas pour chaque média temporel, le test est validé.

##### Test 4.1.2

1. Retrouver dans le document les médias temporels (éléments `<video>` ou `<object>`) seulement vidéo qui nécessitent une transcription textuelle ;
2. Pour chaque média temporel seulement vidéo, vérifier la présence :
    * Soit d'une version alternative audio seulement accessible au moyen d'un lien adjacent (une URL ou une ancre) ;
    * Soit d'une version alternative audio seulement adjacente ;
    * Soit d'une transcription textuelle accessible au moyen d'un lien adjacent (une URL ou d'une ancre) ;
    * Soit d'une transcription textuelle adjacente clairement identifiable ;
    * Soit d'une audiodescription synchronisée ;
    * Soit d'une version alternative avec une audiodescription synchronisée accessible au moyen d'un lien adjacent (une URL ou une ancre).
3. Si c'est le cas pour chaque média temporel, le test est validé.

##### Test 4.1.3

1. Retrouver dans le document les médias temporels (éléments `<video>` ou `<object>`) synchronisés qui nécessitent une transcription textuelle ;
2. Pour chaque média temporel synchronisé, vérifier la présence :
    * Soit d'une transcription textuelle accessible au moyen d'un lien adjacent (une URL ou d'une ancre) ;
    * Soit d'une transcription textuelle adjacente clairement identifiable ;
    * Soit d'une audiodescription synchronisée ;
    * Soit d'une version alternative avec une audiodescription synchronisée accessible au moyen d'un lien adjacent (une URL ou une ancre).
3. Si c'est le cas pour chaque média temporel, le test est validé.

Note : le critère est non applicable dans les situations où :

* Le média temporel est utilisé à des fins décoratives (c'est-à-dire qu'il n'apporte aucune information) ;
* Le média temporel est lui-même une alternative à un contenu de la page (une vidéo en langue des signes ou la vocalisation d'un texte, par exemple) ;
* Le média temporel est utilisé pour accéder à une version agrandie ;
* Le média temporel est utilisé comme un CAPTCHA ;
* Le média temporel fait partie d'un test qui deviendrait inutile si la transcription textuelle, les sous-titres synchronisés ou l'audiodescription étaient communiqués ;
* Pour les services de l’État, les collectivités territoriales et leurs établissements : si le média temporel a été publié entre le 23 septembre 2019 et le 23 septembre 2020 sur un site internet, intranet ou extranet créé depuis le 23 septembre 2018, il est exempté de l’obligation d’accessibilité ;
* Pour les personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si le média temporel a été publié avant le 23 septembre 2020, il est exempté de l’obligation d’accessibilité.

#### Critère 4.2 Pour chaque média temporel pré-enregistré ayant une transcription textuelle ou une audiodescription synchronisée, celles-ci sont-elles pertinentes (hors cas particuliers) ?

##### Test 4.2.1

1. Retrouver dans le document les médias temporels pré-enregistrés seulement audio qui possèdent une transcription textuelle ;
2. Pour chaque média temporel seulement audio, vérifier que transcription textuelle est pertinente ;
3. Si c'est le cas pour chaque média temporel, le test est validé.

##### Test 4.2.2

1. Retrouver dans le document les médias temporels pré-enregistrés seulement vidéo qui possèdent une transcription textuelle ;
2. Pour chaque média temporel seulement vidéo, vérifier la pertinence :
    * Soit de la transcription textuelle ;
    * Soit de l'audiodescription synchronisée ;
    * Soit de l'audiodescription synchronisée de la version alternative ;
    * Soit de la version alternative audio seulement.
3. Si c'est le cas pour chaque média temporel, le test est validé.

##### Test 4.2.3

1. Retrouver dans le document les médias temporels pré-enregistrés synchronisés ;
2. Pour chaque média temporel synchronisé, vérifier la pertinence :
    * Soit de la transcription textuelle ;
    * Soit de l'audiodescription synchronisée ;
    * Soit de l'audiodescription synchronisée de la version alternative.
3. Si c'est le cas pour chaque média temporel, le test est validé.

#### Critère 4.3 Chaque média temporel synchronisé pré-enregistré a-t-il, si nécessaire, des sous-titres synchronisés (hors cas particuliers) ?

##### Test 4.3.1

1. Retrouver dans le document les médias temporels pré-enregistrés synchronisés ;
2. Pour chaque média temporel synchronisé, vérifier la présence :
    * Soit de sous-titres synchronisés ;
    * Soit d'une version alternative possédant des sous-titres synchronisés accessible au moyen d'un lien ou d'un bouton adjacent.
3. Si c'est le cas pour chaque média temporel, le test est validé.

##### Test 4.3.2

1. Retrouver dans le document les médias temporels synchronisés possédant des sous-titres synchronisés au moyen d'un élément `<track>` ;
2. Pour chaque média temporel synchronisé, vérifier que la balise `<track>` possède un attribut `kind="caption"` ;
3. Si c'est le cas pour chaque média temporel synchronisé, le test est validé.

#### Critère 4.4 Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents ?

##### Test 4.4.1

1. Retrouver dans le document les médias temporels synchronisés possédant des sous-titres synchronisés ;
2. Pour chaque média temporel synchronisé, vérifier que les sous-titres sont :
    * Pertinents (toutes les informations sonores importantes sont présentes, les dialogues notamment) ;
    * Et correctement synchronisés.
3. Si c'est le cas pour chaque média temporel synchronisé, le test est validé.

#### Critère 4.5 Chaque média temporel pré-enregistré a-t-il, si nécessaire, une audiodescription synchronisée (hors cas particuliers) ?

##### Test 4.5.1

1. Retrouver dans le document les médias temporels pré-enregistrés seulement vidéo qui nécessitent une audiodescription ;
2. Pour chaque média temporel seulement vidéo, vérifier la présence :
    * Soit d'une audiodescription synchronisée ;
    * Soit d'une version alternative avec une audiodescription synchronisée.
3. Si c'est le cas pour chaque média temporel seulement vidéo, le test est validé.

##### Test 4.5.2

1. Retrouver dans le document les médias temporels pré-enregistrés synchronisés qui nécessitent une audiodescription ;
2. Pour chaque média temporel synchronisé, vérifier la présence :
    * Soit d'une audiodescription synchronisée ;
    * Soit d'une version alternative avec une audiodescription synchronisée.
3. Si c'est le cas pour chaque média temporel synchronisé, le test est validé.

#### Critère 4.6 Pour chaque média temporel pré-enregistré ayant une audiodescription synchronisée, celle-ci est-elle pertinente ?

##### Test 4.6.1

1. Retrouver dans le document les médias temporels seulement vidéo qui possèdent une audiodescription ;
2. Pour chaque média temporel, vérifier que l'audiodescription synchronisée est pertinente (toutes les informations visuelles qu'il est possible de vocaliser dans les blancs de la bande son principale sont présentes, les textes incrustés notamment) ;
3. Si c'est le cas pour chaque média temporel seulement vidéo, le test est validé.

##### Test 4.6.2

1. Retrouver dans le document les médias temporels synchronisés qui possèdent une audiodescription ;
2. Pour chaque média temporel, vérifier que l'audiodescription synchronisée est pertinente (toutes les informations visuelles qu'il est possible de vocaliser dans les blancs de la bande son principale sont présentes, les textes incrustés notamment) ;
3. Si c'est le cas pour chaque média temporel synchronisé, le test est validé.

#### Critère 4.7 Chaque média temporel est-il clairement identifiable (hors cas particuliers) ?

##### Test 4.7.1

1. Retrouver dans le document les médias temporels pré-enregistrés seulement vidéo, audio ou synchronisés ;
2. Pour chaque média temporel, vérifier que :
    * Un passage de texte (un titre ou un paragraphe, par exemple) qui précède ou suit immédiatement le média temporel, permet de l'identifier ;
    * Et le passage de texte est situé à l'extérieur du lecteur de contenu multimédia si ce dernier fait appel à la technologie Flash.
3. Si c'est le cas pour chaque média temporel, le test est validé.

#### Critère 4.8 Chaque média non temporel a-t-il, si nécessaire, une alternative (hors cas particuliers) ?

##### Test 4.8.1

1. Retrouver dans le document les médias non temporels ;
2. Pour chaque média non temporel, vérifier qu'un lien ou un bouton adjacent, clairement identifiable :
    * Soit contient l'adresse (url) d'une page contenant une alternative ;
    * Soit permet d'accéder à une alternative dans la page.
3. Si c'est le cas pour chaque média non temporel, le test est validé.

##### Test 4.8.2

1. Retrouver dans le document les médias non temporels associés à une alternative ;
2. Pour chaque média non temporel, vérifier que :
    * La page référencée par le lien ou le bouton adjacent est accessible ;
    * L'alternative dans la page, référencée par le lien ou le bouton adjacent, est accessible.
3. Si c'est le cas pour chaque média non temporel, le test est validé.

Note : le critère est non applicable dans les situations où :

* Le média non temporel est utilisé à des fins décoratives (c'est-à-dire qu'il n'apporte aucune information) ;
* Le média non temporel est diffusé dans un environnement maîtrisé ;
* Le média non temporel est inséré via JavaScript en vérifiant la présence et la version du plug-in, en remplacement d'un contenu alternatif déjà présent.

#### Critère 4.9 Pour chaque média non temporel ayant une alternative, cette alternative est-elle pertinente ?

##### Test 4.9.1

1. Retrouver dans le document les médias non temporels associés à une alternative ;
2. Pour chaque média non temporel, vérifier que l'alternative est pertinente (elle permet d'accéder au même contenu et à des fonctionnalités similaires) ;
3. Si c'est le cas pour chaque média non temporel, le test est validé.

#### Critère 4.10 Chaque son déclenché automatiquement est-il contrôlable par l'utilisateur ?

##### Test 4.10.1

1. Au chargement du document, si un son se déclenche automatiquement, vérifier que :
    * Soit la séquence sonore a une durée inférieure ou égale à 3 secondes ;
    * Soit un dispositif (un bouton par exemple), sur l'élément ayant déclenché le son (voir note), ou dans la page, permet de le stopper ;
    * Soit le volume de la séquence peut être contrôlé par l'utilisateur, indépendamment du contrôle de volume du système.
2. Si c'est le cas, le test est validé.

Note : les éléments suivants sont susceptibles de déclencher des sons au chargement de la page : éléments  `<audio>`, `<video>`, `<object>`, `<embed>`, `<bgsound>` ou un code JavaScript (utilisation de la `Web Audio API`, par exemple).

#### Critère 4.11 La consultation de chaque média temporel est-elle, si nécessaire, contrôlable par le clavier et tout dispositif de pointage ?

##### Test 4.11.1

1. Retrouver dans le document les médias temporels ;
2. Pour chaque média temporel, vérifier la présence des fonctionnalités obligatoires de contrôle de la consultation :
    * Au minimum : lecture, pause ou stop ;
    * Si le média a du son, il doit avoir une fonctionnalité d'activation / désactivation du son ;
    * Si le média a des sous-titres, il doit avoir une fonctionnalité de contrôle de l'apparition/disparition des sous-titres ;
    * Si le média a une audiodescription, il doit avoir une fonctionnalité de contrôle de l'apparition/disparition de l'audiodescription.
3. Si c'est le cas pour chaque média temporel, le test est validé.

##### Test 4.11.2

1. Retrouver dans le document les médias temporels pourvus de fonctionnalités de contrôle ;
2. Pour chaque média temporel, vérifier que :
    * Soit la fonctionnalité est accessible par le clavier et tout dispositif de pointage ;
    * Soit une fonctionnalité accessible par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.
3. Si c'est le cas pour chaque média temporel, le test est validé.

##### Test 4.11.3

1. Retrouver dans le document les médias temporels pourvus de fonctionnalités de contrôle ;
2. Pour chaque média temporel, vérifier que :
    * Soit la fonctionnalité est activable par le clavier et tout dispositif de pointage ;
    * Soit une fonctionnalité activable par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.
3. Si c'est le cas pour chaque média temporel, le test est validé.

#### Critère 4.12 La consultation de chaque média non temporel est-elle contrôlable par le clavier et tout dispositif de pointage ?

##### Test 4.12.1

1. Retrouver dans le document les médias non temporels pourvus de fonctionnalités de contrôle ;
2. Pour chaque média non temporel, vérifier que :
    * Soit la fonctionnalité est accessible par le clavier et tout dispositif de pointage ;
    * Soit une fonctionnalité accessible par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.
3. Si c'est le cas pour chaque média non temporel, le test est validé.

##### Test 4.12.2

1. Retrouver dans le document les médias non temporels pourvus de fonctionnalités de contrôle ;
2. Pour chaque média non temporel, vérifier que :
    * Soit la fonctionnalité est activable par le clavier et tout dispositif de pointage ;
    * Soit une fonctionnalité activable par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.
3. Si c'est le cas pour chaque média non temporel, le test est validé.

#### Critère 4.13 Chaque média temporel et non temporel est-il compatible avec les technologies d'assistance (hors cas particuliers) ?

##### Test 4.13.1

1. Retrouver dans le document les médias temporels et non temporels ;
2. Pour chaque média, vérifier que :
    * Soit le nom, le rôle, la valeur, le paramétrage et les changements d'états des composants d'interfaces sont accessibles aux technologies d'assistance via une API d'accessibilité (par exemple, les zones mises à jour dynamiquement dans un lecteur vidéo sont correctement restituées) ;
    * Soit une alternative compatible avec une API d'accessibilité permet d'accéder aux mêmes fonctionnalités.
3. Si c'est le cas pour chaque média temporel ou non temporel, le test est validé.

##### Test 4.13.2

1. Retrouver dans le document les médias temporels et non temporels qui possèdent une alternative compatible avec les technologies d'assistance ;
2. Pour chaque média, vérifier que :
    * Soit l'alternative est adjacente au média temporel ou non temporel ;
    * Soit l'alternative est accessible au moyen d'un lien ou d'un bouton adjacent ;
    * Soit un mécanisme permet de remplacer le média temporel ou non temporel par son alternative.
3. Si c'est le cas pour chaque média temporel ou non temporel, le test est validé.

### Tableaux

#### Critère 5.1 Chaque tableau de données complexe a-t-il un résumé ?

##### Test 5.1.1

1. Retrouver dans le document les tableaux de données complexes (tableau de données - élément `<table>` ou élément pourvu d'un attribut WAI-ARIA `role="table"` - contenant des en-têtes qui ne sont pas répartis uniquement sur la première ligne et/ou la première colonne de la grille ou dont la portée n'est pas valable pour l'ensemble de la colonne ou de la ligne) ;
2. Pour chaque tableau de données complexe, vérifier qu'un passage de texte permettant de comprendre la nature et la structure du tableau, est présent :
    * Soit dans l'élément `<caption>` ;
    * Soit dans l'attribut `summary` de l'élément `<table>`.
3. Si c'est le cas pour chaque tableau de données complexe, le test est validé.

#### Critère 5.2 Pour chaque tableau de données complexe ayant un résumé, celui-ci est-il pertinent ?

##### Test 5.2.1

1. Retrouver dans le document les résumés de tableaux de données complexes (tels que déterminés par le test 5.1.1) ;
2. Pour chaque résumé, vérifier que son contenu est pertinent ;
3. Si c'est le cas pour chaque résumé de tableaux de données complexes, le test est validé.

#### Critère 5.3 Pour chaque tableau de mise en forme, le contenu linéarisé reste-t-il compréhensible (hors cas particuliers) ?

##### Test 5.3.1

1. Retrouver dans le document les tableaux de mise en forme ;
2. Pour chaque tableau de mise en forme, vérifier que :
    * L'ordre d'accès aux cellules est cohérent avec le contenu ;
    * L'élément `<table>` est pourvu d'un attribut WAI-ARIA `role="presentation"`.
3. Si c'est le cas pour chaque tableau de mise en forme, le test est validé.

#### Critère 5.4 Pour chaque tableau de données ayant un titre, le titre est-il correctement associé au tableau de données ?

##### Test 5.4.1

1. Retrouver dans le document les tableaux de données pourvus d'un titre ;
2. Pour chaque titre, vérifier qu'il est fourni au moyen :
    * Soit d'un élément `<caption>` ;
    * Soit d'un attribut `title` ;
    * Soit d'un attribut WAI-ARIA `aria-label` ;
    * Soit d'un attribut WAI-ARIA `aria-labelledby` référençant un passage de texte.
3. Si c'est le cas pour chaque titre de tableau de données, le test est validé.

<!--
La déf "Passage de texte associé au tableau de données :
Texte dans une balise <caption> ou dans une balise associée au tableau donnée via l'attribut WAI-ARIA aria-labelledby sur le tableau."
n'est pas à jour par rapport à la déf fournie pour "Tableau de données ayant un titre
Tableau de données ayant un attribut ou contenant une balise dont le contenu fait office de titre.
Tableau de données précédé ou suivi d'un passage de texte associé au tableau faisant office de titre.
Dans la mesure où il est bien correctement restitué et associé par les technologies d'assistance au tableau de données, le titre associé peut être :
    • Dans une balise <caption> ;
    • Dans un attribut title ;
    • Dans un attribut WAI-ARIA aria-label ;
    • Dans une balise associée au tableau de données via un attribut WAI-ARIA aria-labelledby sur le tableau.
"
-->

#### Critère 5.5 Pour chaque tableau de données ayant un titre, celui-ci est-il pertinent ?

##### Test 5.5.1

1. Retrouver dans le document les tableaux de données pourvus d'un titre ;
2. Pour chaque titre, vérifier qu'il est pertinent ;
3. Si c'est le cas pour chaque titre de tableau de données, le test est validé.

#### Critère 5.6 Pour chaque tableau de données, chaque en-tête de colonnes et chaque en-tête de lignes sont-ils correctement déclarés ?

##### Test 5.6.1

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque en-tête de colonnes s'appliquant à la totalité de la colonne, vérifier que l'en-tête de colonne est structuré au moyen :
    * Soit d'un élément `<th>` ;
    * Soit d'un élément pourvu d'un attribut WAI-ARIA `role="columnheader"`.
3. Si c'est le cas pour chaque en-tête de colonne s'appliquant à la totalité de la colonne, le test est validé.

##### Test 5.6.2

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque en-tête de ligne s'appliquant à la totalité de la ligne, vérifier que l'en-tête de ligne est structuré au moyen :
    * Soit d'un élément `<th>` ;
    * Soit d'un élément pourvu d'un attribut WAI-ARIA `role="rowheader"`.
3. Si c'est le cas pour chaque en-tête de ligne s'appliquant à la totalité de la ligne, le test est validé.

##### Test 5.6.3

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque en-tête ne s'appliquant pas à la totalité de la ligne ou de la colonne, vérifier que l'en-tête de ligne est structuré au moyen d'un élément `<th>` ;
3. Si c'est le cas pour chaque en-tête ne s'appliquant pas à la totalité de la ligne ou de la colonne, le test est validé.

#### Critère 5.7 Pour chaque tableau de données, la technique appropriée permettant d'associer chaque cellule avec ses en-têtes est-elle utilisée ?

##### Test 5.7.1

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque en-tête (élément `<th>`) s'appliquant à la totalité de la ligne ou de la colonne, vérifier que l'élément `<th>` possède :
    * Soit un attribut `id` unique ;
    * Soit un attribut `scope` ;
    * Soit un attribut WAI-ARIA `role="rowheader"` ou `"columnheader"`.
3. Si c'est le cas pour chaque en-tête s'appliquant à la totalité de la ligne ou de la colonne, le test est validé.

##### Test 5.7.2

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque en-tête (élément `<th>`) s'appliquant à la totalité de la ligne ou de la colonne et pourvu d'un attribut `scope`, vérifier que l'attribut `scope` possède :
    * Soit une valeur `"row"` pour les en-têtes de ligne ;
    * Soit une valeur `"col"` pour les en-têtes de colonne.
3. Si c'est le cas pour chaque en-tête s'appliquant à la totalité de la ligne ou de la colonne et pourvu d'un attribut `scope`, le test est validé.

##### Test 5.7.3

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque en-tête (élément `<th>`) ne s'appliquant pas à la totalité de la ligne ou de la colonne, vérifier que l'élément `<th>` :
    * Possède un attribut `id` unique ;
    * Et ne possède pas d'attribut `scope` ;
    * Et ne possède pas d'attribut WAI-ARIA `role="rowheader"` ou `"columnheader"`.
3. Si c'est le cas pour chaque en-tête ne s'appliquant pas à la totalité de la ligne ou de la colonne, le test est validé.

##### Test 5.7.4

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque élément `<td>` ou `<th>` associé à un ou plusieurs en-têtes possédant un attribut `id`, vérifier que :
    * L'élément `<td>` ou `<th>` possède un attribut `headers` ;
    * Et l'attribut `headers` possède la liste des valeurs d'attribut `id` des en-têtes associés.
3. Si c'est le cas pour chaque élément `<td>` ou `<th>` associé à un ou plusieurs en-têtes possédant un attribut `id`, le test est validé.

##### Test 5.7.5

1. Retrouver dans le document les tableaux de données ;
2. Pour chaque en-tête s'appliquant à la totalité de la ligne ou de la colonne et pourvu d'un attribut WAI-ARIA `role="rowheader"` ou `"columnheader"`, vérifier que l'élément possède :
    * Soit un attribut WAI-ARIA `role="rowheader"` pour les en-têtes de ligne ;
    * Soit un attribut WAI-ARIA `role="columnheader"` pour les en-têtes de colonne.
3. Si c'est le cas pour chaque en-tête s'appliquant à la totalité de la ligne ou de la colonne et pourvu d'un attribut WAI-ARIA `role="rowheader"` ou `"columnheader"`, le test est validé.

#### Critère 5.8 Chaque tableau de mise en forme ne doit pas utiliser d'éléments propres aux tableaux de données. Cette règle est-elle respectée ?

##### Test 5.8.1

1. Retrouver dans le document les tableaux de mise en forme ;
2. Pour chaque tableau de mise en forme, vérifier que :
    * L'élément `<table>` ne possède pas d'éléments enfant `<caption>`, `<thead>`, `<th>`, `<tfoot>`, `<colgroup>` ou d'éléments pourvus d'un attribut WAI-ARIA `role="rowheader"` ou `role="columnheader"` ;
    * Les éléments `<td>` ne possèdent pas d'attributs `<scope>`, `<headers>` et `<axis>`.
3. Si c'est le cas pour chaque tableau de mise en forme, le test est validé.

### Liens

#### Critère 6.1 Chaque lien est-il explicite (hors cas particuliers) ?

##### Test 6.1.1

1. Retrouver dans le document les liens texte ;
2. Pour chaque lien texte, vérifier que ce qui permet d'en comprendre la fonction et la destination est :
    * Soit l'intitulé du lien seul ;
    * Soit le contexte du lien.
3. Si c'est le cas pour chaque lien texte, le test est validé.

##### Test 6.1.2

1. Retrouver dans le document les liens image (lien avec pour contenu un élément `<img>` ou un élément ayant l'attribut WAI-ARIA `role="img"`, un élément `<area>` possédant un attribut `href`, un élément `<object>`, un élément `<canvas>` ou un élément `<svg>`) ;
2. Pour chaque lien image, vérifier que ce qui permet d'en comprendre la fonction et la destination est :
    * Soit l'intitulé du lien seul, fourni par l'alternative textuelle de l'image ;
    * Soit le contexte du lien.
3. Si c'est le cas pour chaque lien image, le test est validé.

##### Test 6.1.3

1. Retrouver dans le document les liens composites (lien composé à la fois de contenu texte et d'éléments de type image) ;
2. Pour chaque lien composite, vérifier que ce qui permet d'en comprendre la fonction et la destination est :
    * Soit l'intitulé du lien seul, fourni par la combinaison du contenu texte et de l'alternative textuelle de l'image ;
    * Soit le contexte du lien.
3. Si c'est le cas pour chaque lien composite, le test est validé.

##### Test 6.1.4

1. Retrouver dans le document les liens SVG (élément `<svg>` qui possède un élément `<a>` pourvu d'un attribut `xlink-href` (SVG 1.1) ou `href` (SVG 2)) ;
2. Pour chaque lien SVG, vérifier que ce qui permet d'en comprendre la fonction et la destination est :
    * Soit l'intitulé du lien seul, fourni par le nom accessible de l'élément `<svg>` (résolu généralement à partir du contenu d'un élément `<text>`) ;
    * Soit le contexte du lien.
3. Si c'est le cas pour chaque lien SVG, le test est validé.

##### Test 6.1.5

1. Retrouver dans le document les liens autres que SVG dont le contenu est fourni à la fois par un intitulé visible et par le contenu soit d'un attribut `title` ou d'un attribut `aria-label` ou d'un attribut `aria-labelledby` ;
2. Pour chaque lien, vérifier que le contenu de l'attribut `title` ou de l'attribut `aria-label` ou de l'attribut `aria-labelledby` contient l'intitulé visible ;
3. Si c'est le cas pour chaque lien, le test est validé pour les liens autres que SVG.
4. Retrouver dans le document les liens SVG dont le contenu est fourni à la fois par un intitulé visible et par le contenu soit d'un attribut `aria-labelledby`, ou d'un attribut `aria-label` ou d'un élément `title` (enfant direct de l'élément `<svg>`) ou d'un attribut `x-link:title` (SVG 1.1) ou d'un ou plusieurs éléments `<text>`;
5. Pour chaque lien SVG, vérifier que le contenu de l'attribut `aria-labelledby` ou de l'attribut `aria-label` ou de l'élément `<title>` ou de l'attribut `x-link:title` ou d'un ou plusieurs éléments `<text>` contient l'intitulé visible ;
6. Si c'est le cas pour chaque lien SVG, le test est validé pour les liens SVG.
7. Si le test est validé à la fois pour les liens non SVG et pour les liens SVG, le test est globalement validé.

Note : considérant la détermination du nom accessible, il existe deux cas particuliers et une particularité liée aux expressions mathématiques :

* La ponctuation et les lettres majuscules présentes dans le texte de l’intitulé visible peuvent être ignorées dans le nom accessible sans porter à conséquence.
* Si le texte de l’intitulé visible sert de symbole, il ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, "B" au niveau d'un éditeur de texte aura pour nom accessible "Mettre en gras", le signe ">" en fonction du contexte signifiera "Suivant" ou "Lancer la vidéo"). Le cas des symboles mathématiques fait cependant exception (voir le point ci-dessous).
* Si l'étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d'étiquette au nom accessible (par exemple, "A>B"). Il est laissé à l'utilisateur le soin d'opérer la correspondance entre l'expression et ce qu'il doit épeler compte tenu de la connaissance qu'il a du fonctionnement de son logiciel de saisie vocale ("A plus grand que B" ou "A supérieur à B").

#### Critère 6.2 Dans chaque page web, chaque lien, à l'exception des ancres, a-t-il un intitulé ?

##### Test 6.2.1

1. Retrouver dans le document les liens quels qu'ils soient ;
2. Pour chaque lien, vérifier que le contenu de l'élément `<a>` (ou d'un élément pourvu d'un attribut WAI-ARIA `role=link`) contient un intitulé (texte ou alternative) ;
3. Si c'est le cas pour chaque lien, le test est validé.

### Scripts

#### Critère 7.1 Chaque script est-il, si nécessaire, compatible avec les technologies d'assistance ?

##### Test 7.1.1

1. Retrouver dans le document tous les composants d'interface générés ou contrôlés au moyen de JavaScript ;
2. Vérifier que :
    1. Le composant possède un rôle cohérent avec son usage (généralement un bouton ou un lien) ;
    2. Le composant possède un nom explicite ;
    3. Le nom du composant est cohérent avec l'état de la fonctionnalité ou des contenus contrôlés (par exemple pour une fonctionnalité permettant d'afficher ou de masquer une zone de contenu).
3. Sinon, vérifier la présence d'un composant d'interface accessible permettant d'accéder aux mêmes fonctionnalités ;
4. Sinon, vérifier la présence d'une alternative accessible permettant d'accéder aux mêmes fonctionnalités.
5. Si c'est le cas, le test est validé.

##### Test 7.1.2

1. Pour chacun des composants d'interface ayant validé le test 7.1.1, vérifier que le composant d'interface est correctement restitué par les technologies d'assistance ;
2. Sinon, vérifier qu'une alternative accessible au composant d'interface permet d'accéder aux mêmes fonctionnalités ;
3. Si c'est le cas, le test est validé.

##### Test 7.1.3

1. Pour chacun des composants d'interface ayant validé le test 7.1.1, vérifier que le composant d'interface possède :
    1. Un nom pertinent (intitulé visible) ;
    2. Un rôle pertinent.
2. Si le composant d'interface possède un nom accessible, vérifier que ce nom est pertinent et contient au moins l'intitulé visible.
3. Si c'est le cas, le test est validé.

#### Critère 7.2 Pour chaque script ayant une alternative, cette alternative est-elle pertinente ?

##### Test 7.2.1

1. Retrouver les alternatives aux fonctionnalités JavaScript :
    1. Chercher dans la page, les alternatives à un composant ou une fonctionnalité JavaScript mises à disposition.
    2. Désactiver JavaScript dans le document et retrouver les alternatives proposées.
2. Pour chacune des alternatives proposées, vérifier qu'elle permet d'accéder aux mêmes contenus et à des fonctionnalités similaires.
3. Si c'est le cas, le test est validé.

#### Test 7.2.2

1. Retrouver dans le document tous les éléments non textuels mis à jour par une fonctionnalité JavaScript.
2. Si l'élément non textuel a une alternative, vérifier que :
    1. L'alternative est mise à jour lorsque le contenu non textuel est mis à jour ;
    2. L'alternative mise à jour est pertinente.
3. Si c'est le cas, le test est validé.

#### Critère 7.3 Chaque script est-il contrôlable par le clavier et par tout dispositif de pointage (hors cas particuliers) ?

##### Test 7.3.1

1. Retrouver dans le document, tous les éléments sur lesquels est implémenté un gestionnaire d'événements JavaScript (par exemple `click`, `focus`, `mouseover`, `blur`, `keydown`, `touch`, ...).
2. Vérifier que l'élément est accessible au moyen du clavier :
    1. Il est atteignable avec la touche de tabulation (tab) ;
    2. Si l'élément gère une action simple, il est activable au clavier avec la touche entrée (Entrée) ;
    3. Si l'élément gère une action complexe, il est utilisable avec le clavier (généralement avec les touches de direction).
3. Sinon, vérifier qu'un élément accessible par le clavier permettant de réaliser la même action est présent dans la page.
4. Vérifier que l'élément est accessible par tout dispositif de pointage (souris, toucher, stylet, ...).
5. Sinon, vérifier qu'un élément accessible au moyen d'un dispositif de pointage et permettant de réaliser la même action est présent dans la page.
6. Si c'est le cas, le test est validé.

##### Test 7.3.2

1. Activer, l'un après l'autre, tous les éléments capables de recevoir le focus.
2. Vérifier que le focus n'est pas supprimé via une fonctionnalité JavaScript.
3. Si c'est le cas, le test est validé.

#### Critère 7.4 Pour chaque script qui initie un changement de contexte, l'utilisateur est-il averti ou en a-t-il le contrôle ?

##### Test 7.4.1

1. Retrouver dans le document tous les événements JavaScript qui initient un changement de contexte, par exemple :
    * Une mise à jour dynamique de champs de formulaire ;
    * L'ouverture d'une nouvelle page à l'activation d'une option d'une liste de sélection (élément `select`) ;
    * La mise à jour, via un procédé AJAX d'une partie essentielle de la page ;
    * Le lancement automatique d'un lecteur vidéo suite à la sélection d'une playlist ;
    * La manipulation du focus ayant pour résultat de modifier la position courante de l'utilisateur dans la page.
2. Vérifier que :
    1. L'utilisateur est averti par un message de l'action du script et du type de changement avant son déclenchement ;
    2. Ou bien le changement de contexte est initié par un bouton (`input` de type `submit`, `button` ou `image` ou la balise `button`) explicite ;
    3. Ou bien le changement de contexte est initié par un lien explicite.
3. Si c'est le cas, le test est validé.

#### Critère 7.5 Dans chaque page web, les messages de statut sont-ils correctement restitués par les technologies d'assistance ?

##### Tests 7.5.1, 7.5.2 et 7.5.3

1. Retrouver dans le document les messages qui valent pour message de statut.
2. Pour chacun de ces messages, déterminer la nature de l'information dont est porteur le message :
3. Si le message informe de la réussite, du résultat d'une action ou bien de l'état d'une application, vérifier que l'élément qui contient le message :
    1. Soit utilise l'attribut WAI-ARIA role="status" ;
    2. Soit utilise les attributs WAI-ARIA aria-live="polite" et aria-atomic="true".
4. Si le message présente une suggestion, ou avertit de l'existence d'une erreur, vérifier que l'élément qui contient le message :
    1. Soit utilise l'attribut WAI-ARIA role="alert" ;
    2. Soit utilise les attributs aria-live="assertive" et aria-atomic="true".
5. Si le message indique la progression d'un processus, vérifier que l'élément qui contient le message :
    1. Soit utilise l'un des attributs WAI-ARIA role="log", role="progressbar" ou role="status" ;
    2. Soit utilise l'attribut WAI-ARIA aria-live="polite" si l'intention est de signaler l'équivalent d'un rôle "log" ;
    3. Soit utilise les attributs WAI-ARIA aria-live="polite" et aria-atomic="true si l'intention est de signaler l'équivalent d'un rôle "status".
6. Si c'est le cas, le test est validé.

### Éléments Obligatoires

#### Critère 8.1 Chaque page web est-elle définie par un type de document ?

##### Tests 8.1.1, 8.1.2 et 8.1.3

1. Retrouver dans le document la balise `DOCTYPE` (par exemple <!DOCTYPE html>) ;
2. Vérifier que :
    1. La balise `DOCTYPE` est placée avant la balise `<html>`.
    2. Le type de document est valide.
3. Si c'est le cas, le test est validé.

#### Critère 8.2 Pour chaque page web, le code source généré est-il valide selon le type de document spécifié (hors cas particuliers) ?

##### Test 8.2.1

1. Dans le menu « Check », activer l'option « W3C Nu markup checker (all frames) ».
2. Dans la page de résultats, vérifier que :
    1. Les balises, attributs et valeurs d'attributs respectent les règles d'écriture ;
    2. L'imbrication des balises est conforme ;
    3. L'ouverture et la fermeture des balises sont conformes ;
    4. Les valeurs d'attribut `id` sont uniques dans la page ;
    5. Les attributs ne sont pas doublés sur un même élément.
3. Si c'est le cas, le test est validé.

#### Critère 8.3 Dans chaque page web, la langue par défaut est-elle présente ?

##### Test 8.3.1

1. Retrouver dans le document l'indication de langue par défaut ;
2. Vérifier la présence d'une indication de langue :
    * Soit au moyen de l'attribut `lang` sur la balise `html` si le code est du HTML5 ou du HTML4 ;
    * Soit au moyen des attributs `lang` et `xml:lang` sur la balise `html` si le code est du XHTML 1.0 ;
    * Soit au moyen de l'attribut `xml:lang` sur la balise `html` si le code est du XHTML 1.1 ;
3. Sinon, vérifier la présence d'une indication de langue sur chaque élément de texte ou l'un de ses parents ;
4. Si c'est le cas, le test est validé.

#### Critère 8.4 Pour chaque page web ayant une langue par défaut, le code de langue est-il pertinent ?

##### Test 8.4.1

1. Retrouver dans le document l'indication de langue par défaut ;
2. Vérifier la présence d'un code de langue :
    * Valide (conforme à la norme ISO 639-1 ou ISO 639-2 et suivantes) ;
    * Et pertinent (qui indique la langue principale du document).
3. Si c'est le cas, le test est validé.

#### Critère 8.5 Chaque page web a-t-elle un titre de page ?

##### Test 8.5.1

1. Retrouver dans le document le titre structuré au moyen d’un élément `<title>` ;
2. Si c'est le cas, le test est validé.

#### Critère 8.6 Pour chaque page web ayant un titre de page, ce titre est-il pertinent ?

##### Test 8.6.1

1. Retrouver dans le document le titre structuré au moyen d’un élément `<title>` ;
2. Vérifier si le contenu de l'élément `<title>` est suffisamment pertinent (il permet de retrouver la page dans l'historique de navigation ou la liste des onglets).
3. Si c'est le cas, le test est validé.

#### Critère 8.7 Dans chaque page web, chaque changement de langue est-il indiqué dans le code source (hors cas particuliers) ?

##### Test 8.7.1

1. Retrouver les passages de texte en langue étrangère, à l'exception :
    1. Des noms propres ;
    2. Des mots d'origine étrangère, présents dans le dictionnaire de la langue du document ;
    3. Des mots d'origine étrangère et d'usage courant dont la prononciation ne provoque pas d'incompréhension.
2. Vérifier que chaque passage de texte retenu possède une indication de langue (attribut lang et/ou xml:lang sur l'élément lui-même ou l'un de ses parents).
3. Si c'est le cas, le test est validé.

#### Critère 8.8 Dans chaque page web, le code de langue de chaque changement de langue est-il valide et pertinent ?

##### Test 8.8.1

1. Pour chaque passage de texte validé au test 8.7.1, vérifier que :
    1. L'indication de langue est valide ;
    2. L'indication de langue est pertinente.
2. Si c'est le cas, le test est validé.

#### Critère 8.9 Dans chaque page web, les balises ne doivent pas être utilisées uniquement à des fins de présentation. Cette règle est-elle respectée ?

##### Test 8.9.1

1. Retrouver dans le document l'ensemble des éléments sémantiques utilisés à des fins de présentation ;
2. Pour chacun de ces éléments, vérifier que :
    1. L'élément est pourvu d'un attribut `role="presentation"` ;
    2. L'utilisation de cet élément à des fins de présentation reste justifée.
3. Si c'est le cas, le test est validé.

Note : Quelques exemples, non exhaustifs de détournement de balisage : un élément `<div>` utilisé comme paragraphe, un titre utilisé comme légende, un élément `<blockquote>` ou des paragraphes vides ou encore des espaces utilisés pour créer des effets de marges.

L'utilisation d'un `role="presentation"` est formellement déconseillée, mais peut toutefois se justifier dans de rares cas. Cela peut être acceptable sur un élément `<blockquote>` ou un paragraphe vide, mais sera considéré comme non-conforme sur un titre.

Le cas des tableaux : à noter que ce test aborde les tableaux de présentation qui ne devraient finalement pas apparaître au sein de la thématique Tableaux.

#### Critère 8.10 Dans chaque page web, les changements du sens de lecture sont-ils signalés ?

##### Test 8.10.1

1. Retrouver dans le document les passages de textes qui utilisent une langue qui se lit dans le sens inverse de la langue du document (comme l'arabe ou l'hébreu pour le français par exemple).
2. Pour chaque passage de texte, vérifier que le passage de texte est contenu dans une balise qui possède un attribut `dir`.
3. Si c'est le cas pour chaque passage de texte, le test est validé.

##### Test 8.10.2

1. Pour chaque passage de texte validé au test 8.10.1, vérifier que :
    1. L'indication de sens de lecture est conforme (`ltr`, pour le sens « de gauche à droite » et `rtl` pour le sens « de droite à gauche ») ;
    2. L'indication de sens de lecture est pertinente.
2. Si c'est le cas pour chaque passage de texte, le test est validé.

### Structuration de l'information

#### Critère 9.1 Dans chaque page web, l'information est-elle structurée par l'utilisation appropriée de titres ?

##### Test 9.1.1

1. Retrouver dans le document les titres (balise `<hx>` ou balise possédant un attribut WAI-ARIA `role="heading"` associé à un attribut WAI-ARIA `aria-level`) ;
2. Vérifier que la hiérarchie entre les titres est pertinente ;
3. Si c'est le cas, le test est validé.

<!--
// Le test 1 suppose que tout titre est pourvu d'une balise, ce qui ne devrait pas être le cas.
1. Retrouver dans le document les passages de texte faisant office de titre ;
-->

##### Test 9.1.2

1. Pour chaque titre identifié au test 9.1.1, vérifier que son contenu est pertinent ;
2. Si c'est le cas pour chaque titre, le test est validé.

##### Test 9.1.3

1. Pour chaque titre identifié au test 9.1.1, vérifier que :
    1. Soit il est structuré au moyen d'une balise `<hx>` ("x" désignant une valeur numérique comprise entre 1 et 6);
    2. Soit il est structuré au moyen d'une balise possédant un attribut WAI-ARIA `role="heading"` et un attribut WAI-ARIA `aria-level=x` ("x" désignant une valeur numérique).
2. Si c'est le cas pour chaque titre, le test est validé.

#### Critère 9.2 Dans chaque page web, la structure du document est-elle cohérente (hors cas particuliers) ?

##### Test 9.2.1

1. Vérifier que la zone d'en-tête est structurée au moyen d'un élément `<header>` ;
2. Vérifier que les zones de n­avigation principales et secondaires sont structurées au moyen d'un élément `<nav>`.
3. Vérifier que l'élément `<nav>` n'est pas utilisé en dehors de la structuration des zones de navigation principales et secondaires ;
4. Vérifier que la zone de contenu principal est structurée au moyen d'un élément `<main>` ;
5. Si le document possède plusieurs éléments `<main>`, vérifier qu'un seul de ces éléments est visible (les autres occurrences de l'élément sont pourvues d'un attribut `hidden`) ;
6. Vérifier que la zone de pied de page est structurée au moyen d'un élément `<footer>`.
7. Si c'est le cas pour chaque zone de contenu, le test est validé.

#### Critère 9.3 Dans chaque page web, chaque liste est-elle correctement structurée ?

##### Test 9.3.1

1. Retrouver dans le document les éléments regroupés visuellement sous la forme d'une liste non ordonnée ;
2. Pour chaque liste, vérifier que la liste est structurée :
    1. Soit au moyen des éléments `<ul>` et `<li>` ;
    2. Soit au moyen d'éléments pourvus d'attributs WAI-ARIA `role="list"` et `role="listitem"`.
3. Si c'est le cas pour chaque liste non ordonnée, le test est validé.

##### Test 9.3.2

1. Retrouver dans le document les éléments regroupés visuellement sous la forme d'une liste ordonnée ;
2. Pour chaque liste, vérifier que la liste est structurée :
    1. Soit au moyen des éléments `<ol>` et `<li>` ;
    2. Soit au moyen d'éléments pourvus d'attributs WAI-ARIA `role="list"` et `role="listitem"`.
3. Si c'est le cas pour chaque liste ordonnée, le test est validé.

##### Test 9.3.3

1. Retrouver dans le document les éléments regroupés visuellement sous la forme d'une liste de description ;
2. Pour chaque liste, vérifier que la liste est structurée au moyen des éléments `<dl>`, `<dt>` et `<dd>` ;
3. Si c'est le cas pour chaque liste de description, le test est validé.

#### Critère 9.4 Dans chaque page web, chaque citation est-elle correctement indiquée ?

##### Test 9.4.1

1. Retrouver dans le document les citations courtes (ou en ligne) ;
2. Pour chaque citation, vérifier que la citation est structurée au moyen d'un élément `<q>` ;
3. Si c'est le cas pour chaque citation courte, le test est validé.

##### Test 9.4.2

1. Retrouver dans le document les blocs de citation ;
2. Pour chaque bloc de citation, vérifier que le bloc de citation est structurée au moyen d'un élément `<blockquote>` ;
3. Si c'est le cas pour chaque bloc de citation, le test est validé.

### Présentation de l'information

#### Critère 10.1 Dans le site web, des feuilles de styles sont-elles utilisées pour contrôler la présentation de l'information ?

##### Test 10.1.1

1. Vérifier l'absence des éléments de présentation `<basefont>`, `<blink>`, `<center>`, `<font>`, `<marquee>`, `<s>`, `<strike>`, `<tt>`, `<big>` ;
2. Vérifier l'absence de l'élément `<u>` uniquement si le DOCTYPE du document ne correspond pas à HTML 5 ;
3. Si c'est le cas, le test est validé.

##### Test 10.1.2

1. Vérifier l'absence des attributs de présentation : `align`, `alink`, `background`, `basefont`, `bgcolor`, `border`, `cellpadding`, `cellspacing`, `char`, `charoff`, `clear`, `color`, `compact`, `frameborder`, `hspace`, `link`, `marginheight`, `marginwidth`, `text`, `valign`, `vlink`, `vspace`, `size`, `width` (exception faite des éléments `<img>`, `<object>`, `<embed>`, `<canvas>` et `<svg>`), `height` (exception faite des éléments `<img>`, `<object>`, `<embed>`, `<canvas>` et `<svg>`) ;
2. Si c'est le cas, le test est validé.

##### Test 10.1.3

1. Désactiver les styles (CSS) du document ;
2. Vérifier l'absence d'espaces utilisées :
    1. Entre les lettres d'un mot ;
    2. Pour créer des effets de marges ou d'alignement ;
    3. Pour simuler des tableaux ou des colonnes.
3. Si c'est le cas, le test est validé.

#### Critère 10.2 Dans chaque page web, le contenu visible reste-t-il présent lorsque les feuilles de styles sont désactivées ?

##### Test 10.2.1

1. Désactiver les styles (CSS) du document ;
2. Comparer le document dépourvu de styles avec le document mis en forme ;
3. Vérifier si dans le document dépourvu de styles, les contenus visibles restent présents ;
4. Si c'est le cas, le test est validé.

#### Critère 10.3 Dans chaque page web, l'information reste-t-elle compréhensible lorsque les feuilles de styles sont désactivées ?

##### Test 10.3.1

1. Désactiver les styles (CSS) du document ;
2. Vérifier que l'ordre dans lequel les contenus sont implémentés ne pose pas de problème de compréhension ;
3. Si c'est le cas, le test est validé.

#### Critère 10.4 Dans chaque page web, le texte reste-t-il lisible lorsque la taille des caractères est augmentée jusqu'à 200%, au moins (hors cas particuliers) ?

##### Test 10.4.1

1. Vérifier dans le document si les textes restent présents et lisibles lorsque :
    1. Le zoom texte du navigateur est réglé à 200% ;
    2. Le zoom graphique du navigateur est réglé à 200% ;
    3. Les fonctionnalités de zoom personnalisées proposé par le document sont utilisés.
2. Si c'est le cas, le test est validé.

##### Test 10.4.2

1. Vérifier dans le document si les textes sont effectivement agrandis lorsque :
    1. Le zoom texte du navigateur est réglé à 200% ;
    2. Le zoom graphique du navigateur est réglé à 200% ;
    3. Les fonctionnalités de zoom personnalisées proposé par le document sont utilisés.
2. Si c'est le cas, le test est validé.

<!-- Les tests 10.4.2 et 10.4.3 devraient être inversés pour plus de cohérence car le test 3 s'assure que le texte réagit correctement aux fonctionnalités de zoom et le 2 que le texte qui est effectivement zoomé reste présent et lisible. -->

#### Critère 10.5 Dans chaque page web, les déclarations CSS de couleurs de fond d'élément et de police sont-elles correctement utilisées ?

##### Test 10.5.1

1. Retrouver dans le document les textes mis en couleur, à l'exception des couleurs par défaut (par exemple les liens, etc.) ;
2. Déterminer l'élément qui contient le texte et vérifier la présence d'une valeur calculée pour la propriété `background-color` de l'élément ;
3. Si c'est le cas, le test est validé.

<!-- Ce test est toujours validé, car c'est toujours le cas, la propriété background-color étant une propriété de style inhérente à tout noeud élément du DOM. -->

##### Test 10.5.2

1. Retrouver dans le document les textes mis en couleur, à l'exception des couleurs par défaut (par exemple les liens, etc.) ;
2. Déterminer l'élément qui contient le texte et vérifier la présence d'une valeur calculée pour la propriété `color` de l'élément ;
3. Si c'est le cas, le test est validé.

<!-- Ce test est toujours validé, car c'est toujours le cas, la propriété color étant une propriété de style inhérente à tout noeud élément du DOM. -->

##### Test 10.5.3

1. Retrouver dans le document les textes dont l'arrière-plan est constitué d'une image (propriété `background-image`) ;
2. Déterminer l'élément qui contient le texte et vérifier que si l'image d'arrière-plan est absente, le texte reste lisible ;
3. Si c'est le cas, le test est validé.

<!-- Ce test n'est finalement qu'un cas particulier du critère de contraste car au final la lisibilité dont il est question consiste à s'assurer qu'en l'absence d'une image d'arrière-plan le contraste avec la couleur du texte reste suffisante. -->

<!-- Au final, c'est le critère 10.5 dans sa totalité qui n'a a priori plus lieu d'être -->

#### Critère 10.6 Dans chaque page web, chaque lien dont la nature n'est pas évidente est-il visible par rapport au texte environnant ?

##### Test 10.6.1

1. Retrouver dans le document les éléments de type lien (élément `<a>` ou élément pourvu d'un attribut WAI-ARIA `role="link"`) ;
2. Pour chaque élément de type lien, s'il peut être confondu avec un texte normal lorsqu'il est signalé uniquement par la couleur, vérifier que le contraste entre la couleur de police du lien et la couleur de police du texte environnant est de 3:1, au moins ;
3. Cette vérification doit être faite pour les différents états du lien s'ils sont présentés au moyen d'une couleur différente : l'état non visité, l'état visité, l'état activé, l'état au survol et l'état à la prise de focus ;
4. Si c'est le cas pour chaque élément de type lien, le test est validé.

#### Critère 10.7 Dans chaque page web, pour chaque élément recevant le focus, la prise de focus est-elle visible ?

##### Test 10.7.1

1. Retrouver dans le document les éléments susceptibles de recevoir le focus (les éléments d'interface tels que les liens ou les contrôles de formulaire, ainsi que tout élément pourvu d'un attribut `tabindex` d'une valeur égale ou supérieure à 1) ;
2. Pour chaque élément susceptible de recevoir le focus, vérifier que l'indication visuelle de la prise de focus est présente (propriétés `outline`, `outline-width`, `outline-style`, `outline-color`) et suffisamment contrastée (ratio de contraste égal ou supérieur à 3.0).
3. Si c'est le cas pour chaque élément susceptible de recevoir le focus, le test est validé.

#### Critère 10.8 Pour chaque page web, les contenus cachés ont-ils vocation à être ignorés par les technologies d'assistance ?

##### Test 10.8.1

1. Retrouver les contenus cachés (éléments pourvus de l'attribut `hidden` ou de l'attribut WAI-ARIA `aria-hidden`, ou bien d'une classe ou d'un ensemble de styles CSS susceptibles de masquer le contenu).
2. Pour chaque contenu caché, vérifier que :
    1. Soit le contenu caché a vocation à être ignoré par les technologies d'assistance (un élément statistique de visites par exemple) ;
    2. Soit le contenu caché n’a pas vocation à être ignoré par les technologies d’assistance, et dans ce cas il est rendu restituable par les technologies d'assistance au moyen :
        1. Soit d'une action de l'utilisateur réalisable au clavier ou par tout dispositif de pointage sur un élément précédent le contenu caché
        2. Soit d'une fonction de programmation qui repositionne le focus sur le contenu.
3. Si c'est le cas pour chaque contenu caché, le test est validé.

<!--
ou que le dispositif qui permet de rendre le contenu visible est situé avant le contenu caché ;
ou que le contenu caché fait partir d'un composant d'interface ARIA qui gère le contenu caché (par exemple dans un système d'onglet).
Si le texte caché fait appel à la propriété aria-hidden ou hidden (repéré via l'utilisation de la feuille de style importée), vérifier que l'état de l'attribut est cohérent avec l'état masqué ou affiché du contenu.
Si c'est le cas, le test est validé.

*:before,*:after{ display:block; background:#f2f2f2; font-weight:bold; font-size:100%; font-size:1rem; color:red; font-weight:bold;}
[hidden]{ content: "[hidden]";}
[aria-hidden]{ content: "[attr:aria-hidden]";}
[role]{ content: "[role: "attr(role)"]";}

        ◦ Le contenu caché n’a pas vocation à être ignoré par les technologies d’assistances et est rendu restituable par les technologies d'assistance suite à une action de l'utilisateur réalisable au clavier ou par tout dispositif de pointage sur un élément précédent le contenu caché ou suite à un repositionnement du focus dessus.

-->

#### Critère 10.9 Dans chaque page web, l'information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?

##### Test 10.9.1

1. Retrouver dans le document les informations d'un texte données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier qu'il existe un autre moyen de récupérer cette information ;
3. Si c'est le cas pour chaque information, le test est validé.

##### Test 10.9.2

1. Retrouver dans le document les informations d'une image données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier qu'il existe un autre moyen de récupérer cette information ;
3. Si c'est le cas pour chaque information, le test est validé.

##### Test 10.9.3

1. Retrouver dans le document les informations d'un média temporel données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier qu'il existe un autre moyen de récupérer cette information ;
3. Si c'est le cas pour chaque information, le test est validé.

##### Test 10.9.4

1. Retrouver dans le document les informations d'un média non temporel données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier qu'il existe un autre moyen de récupérer cette information ;
3. Si c'est le cas pour chaque information, le test est validé.

#### Critère 10.10 Dans chaque page web, l'information ne doit pas être donnée par la forme, taille ou position uniquement. Cette règle est-elle implémentée de façon pertinente ?

##### Test 10.10.1

1. Retrouver dans le document les informations d'un texte données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c'est-à-dire qu'il permet de transmettre l'information dans tous les contextes de consultation et pour tous les utilisateurs.
3. Si c'est le cas pour chaque information, le test est validé.

##### Test 10.10.2

1. Retrouver dans le document les informations d'une image données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c'est-à-dire qu'il permet de transmettre l'information dans tous les contextes de consultation et pour tous les utilisateurs.
3. Si c'est le cas pour chaque information, le test est validé.

##### Test 10.10.3

1. Retrouver dans le document les informations d'un média temporel données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c'est-à-dire qu'il permet de transmettre l'information dans tous les contextes de consultation et pour tous les utilisateurs.
3. Si c'est le cas pour chaque information, le test est validé.

##### Test 10.10.4

1. Retrouver dans le document les informations d'un média non temporel données par la forme, la taille ou la position ;
2. Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c'est-à-dire qu'il permet de transmettre l'information dans tous les contextes de consultation et pour tous les utilisateurs.
3. Si c'est le cas pour chaque information, le test est validé.

<!--
Pour ces deux critères, il serait inutile d'avoir 4 tests différents.
A voir s'il est utile de conserver séparée en deux critères la distinction entre présence et pertinence.
-->

#### Critère 10.11 Pour chaque page web, les contenus peuvent-ils être présentés sans avoir recours à la fois à un défilement vertical pour une fenêtre ayant une hauteur de 256px ou une largeur de 320px (hors cas particuliers) ?

##### Test 10.11.1

1. Retrouver dans le document si son contenu est conçu pour défiler verticalement (le sens de lecture du texte est horizontal), les informations et fonctionnalités ;
2. Réduire la fenêtre d'affichage à une largeur de 320px et vérifier que les informations et les fonctionnalités restent disponibles sans aucun défilement horizontal ;
3. Si c'est le cas, le test est validé.

##### Test 10.11.2

1. Retrouver dans le document si son contenu est conçu pour défiler horizontalement (le sens de lecture du texte est vertical), les informations et fonctionnalités ;
2. Réduire la fenêtre d'affichage à une largeur de 256px et vérifier que les informations et les fonctionnalités restent disponibles sans aucun défilement vertical ;
3. Si c'est le cas, le test est validé.

#### Critère 10.12 Dans chaque page web, les propriétés d'espacement du texte peuvent-elles être redéfinies par l'utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?

##### Test 10.12.1

1. Modifier les styles du document en donnant :
    1. Une valeur de 1.5 à la propriété `line-height` de tous les éléments du document ;
    2. Une valeur de 2em à la propriété `margin-bottom`des éléments `<p>` ;
    3. Une valeur de 0.12em à la propriété `letter-spacing` de tous les éléments du document ;
    4. Une valeur de 0.16em à la propriété `word-spacing` de tous les éléments du document ;
2. Pour chaque passage de texte, vérifier qu'il reste lisible, à l'exception :
    1. Des sous-titres directement intégrés à une vidéo ;
    2. Des images texte ;
    3. Des textes au sein d'une balise `<canvas>`.
3. Si c'est le cas pour chaque passage de texte, le test est validé.

Note : une implémentation de ces règles de modification est disponible dans les ressources du critère de succès WCAG 1.4.12 ([https://github.com/alastc/adaptation-scripts/blob/master/scripts/text-adaptation.js](https://github.com/alastc/adaptation-scripts/blob/master/scripts/text-adaptation.js)).

#### Critère 10.13 Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d'un composant d'interface sont-ils contrôlables par l'utilisateur (hors cas particuliers) ?

##### Test 10.13.1

1. Retrouver dans le document les contenus additionnels devenant visible à la prise de focus ou au survol d'un composant d'interface, à l'exception :
    1. Des contenus additionnels contrôlés par l'agent utilisateur (par exemple, les infobulles associées à l'attribut title ou à la validation native d'un formulaire) ;
    2. Des contenus additionnels devenant visibles par une activation de l'utilisateur (par exemple, une fenêtre de dialogue).
2. Pour chaque contenu additionnel, vérifier que :
    1. Soit le contenu additionnel est positionné de façon à ce qu'il ne gêne pas la consultation des autres contenus informatifs sur lesquels il viendrait se superposer (y compris le composant d'interface qui a déclenché son apparition), quelles que soient les conditions de consultation (y compris lors de l'utilisation d'un mécanisme de zoom) ;
    2. Soit un mécanisme (au clavier) permet de faire disparaître le contenu additionnel (par exemple, la touche Echap).
3. Si c'est le cas pour chaque contenu additionnel, le test est validé.

##### Test 10.13.2

1. Retrouver dans le document les contenus additionnels devenant visible au survol d'un composant d'interface, à l'exception :
    1. Des contenus additionnels contrôlés par l'agent utilisateur (par exemple, les infobulles associées à l'attribut title ou à la validation native d'un formulaire) ;
    2. Des contenus additionnels devenant visibles par une activation de l'utilisateur (par exemple, une fenêtre de dialogue).
2. Pour chaque contenu additionnel, vérifier qu'il peut être survolé par le pointeur de la souris sans disparaître ;
3. Si c'est le cas pour chaque contenu additionnel, le test est validé.

##### Test 10.13.3

1. Retrouver dans le document les contenus additionnels devenant visible à la prise de focus ou au survol d'un composant d'interface, à l'exception :
    1. Des contenus additionnels contrôlés par l'agent utilisateur (par exemple, les infobulles associées à l'attribut title ou à la validation native d'un formulaire) ;
    2. Des contenus additionnels devenant visibles par une activation de l'utilisateur (par exemple, une fenêtre de dialogue).
2. Pour chaque contenu additionnel, vérifier qu'il reste visible :
    1. Jusqu'à ce que l'utilisateur retire le pointeur souris ou le focus du contenu additionnel ou du composant d'interface ayant déclenché son apparition ;
    2. Jusqu'à ce l'utilisateur déclenche le mécanisme prévu pour faire disparaître le contenu additionnel ;
    3. Jusqu'à ce que l'information proposée par le contenu additionnel ne soit plus valide (par exemple un contenu additionnel signalant l'état "occupé" du composant d'interface que l'utilisateur souhaite activer ou encore un message d'erreur signalé sous la forme d'un contenu additionnel tant que l'utilisateur n'a pas rectifié sa saisie).
3. Si c'est le cas pour chaque contenu additionnel, le test est validé.

<!-- Le SC 1.4.13 signale explicitement désormais le cas des messages d'erreur de champ de saisie : they may "persist as there are cases that require attention, explicit confirmation or remedial action" ; ils peuvent donc ne pas être "dismissible" de la manière qui est demandée.  -->

#### Critère 10.14 Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?

##### Test 10.14.1

1. Retrouver dans le document les contenus additionnels devenant visible au survol d'un composant d'interface au moyen d'un mécanisme CSS (pseudo-classe `:hover`);
2. Pour chaque contenu additionnel, vérifier que les contenus additionnels apparaissent également :
    1. À l'activation du composant au moyen du clavier ou de tout autre dispositif de pointage ;
    2. À la prise de focus du composant ;
    3. À l'activation ou à la prise de focus d'un autre composant.
3. Si c'est le cas pour chaque contenu additionnel, le test est validé.

##### Test 10.14.2

1. Retrouver dans le document les contenus additionnels devenant visible à la prise de focus d'un composant d'interface au moyen d'un mécanisme CSS (pseudo-classe `:focus`);
2. Pour chaque contenu additionnel, vérifier que les contenus additionnels apparaissent également :
    1. À l'activation du composant au moyen du clavier ou de tout autre dispositif de pointage ;
    2. Au survol du composant ;
    3. À l'activation ou du survol d'un autre composant.
3. Si c'est le cas pour chaque contenu additionnel, le test est validé.

<!-- Le critère est mal exprimé, car en présupposant l'apparition d'un contenu additionnel uniquement sous l'effet d'un mécanisme CSS, il est inutile de vérifier si d'autres mécanismes produisent le même effet.  -->

### Formulaires

#### Critère 11.1 Chaque champ de formulaire a-t-il une étiquette ?

##### Test 11.1.1

1. Retrouver dans le document les champs de formulaire ;
2. Pour chaque champ de formulaire, vérifier que le champ de formulaire :
    1. Possède un attribut WAI-ARIA `aria-labelledby` référençant un passage de texte identifié ;
    2. Possède un attribut WAI-ARIA `aria-label` ;
    3. Est associé à un élément `<label>` ayant un attribut `for` ;
    4. Possède un attribut `title` ;
    5. Un bouton adjacent au champ de formulaire lui fournit une étiquette visible et un attribut WAI-ARIA `aria-label`, `aria-labelledby` ou `title` lui fournit un nom accessible.
3. Si c'est le cas pour champ de formulaire, le test est validé.

##### Test 11.1.2

1. Retrouver dans le document les champs de formulaire associé à un élément `<label>` ;
2. Pour chaque champ de formulaire, vérifier que :
    1. Le champ de formulaire possède un attribut `id` ;
    2. La valeur de l'attribut `for` de l'élément `<label>` est égale à la valeur de l'attribut `id`.
3. Si c'est le cas pour champ de formulaire, le test est validé.

##### Test 11.1.3

1. Retrouver dans le document les champs de formulaire dont l'étiquette n'est pas visible ou à proximité (masquée, utilisation de l'attribut `aria-label`) ou n’est pas accolée au champ (utilisation de l'attribut `aria-labelledby`) ;
2. Pour chaque champ de formulaire, vérifier que le champ de formulaire :
    1. soit possède un attribut `title` dont le contenu permet de comprendre la nature de la saisie attendue ;
    2. est accompagné d'un passage de texte accolé au champ qui devient visible à la prise de focus permettant de comprendre la nature de la saisie attendue.
    3. est accompagné d'un passage de texte visible accolé au champ permettant de comprendre la nature de la saisie attendue.

<!-- La condition "Un bouton adjacent au champ de formulaire lui fournit une étiquette visible et un attribut WAI-ARIA aria-label, aria-labelledby ou title lui fournit un nom accessible." de 11.1.1 est déjà couverte par la condition 3 de 11.1.3 dont le libellé d'un bouton n'est qu'un cas particulier.-->

#### Critère 11.2 Chaque étiquette associée à un champ de formulaire est-elle pertinente (hors cas particuliers) ?

##### Test 11.2.1

1. Retrouver dans le document les champs de formulaire dont l'étiquette est fournie par un élément `<label>` ;
2. Pour chaque champ de formulaire, vérifier que le contenu de l'élément est pertinent ;
3. Si c'est le cas pour chaque champ de formulaire, le test est validé.

##### Test 11.2.2

1. Retrouver dans le document les champs de formulaire dont l'étiquette est fournie par un attribut `title` ;
2. Pour chaque champ de formulaire, vérifier que le contenu de l'attribut est pertinent ;
3. Si c'est le cas pour chaque champ de formulaire, le test est validé.

##### Test 11.2.3

1. Retrouver dans le document les champs de formulaire dont l'étiquette est fournie par un attribut WAI-ARIA `aria-label` ;
2. Pour chaque champ de formulaire, vérifier que le contenu de l'attribut est pertinent ;
3. Si c'est le cas pour chaque champ de formulaire, le test est validé.

##### Test 11.2.4

1. Retrouver dans le document les champs de formulaire dont l'étiquette est fournie par un attribut WAI-ARIA `aria-labelledby` ;
2. Pour chaque champ de formulaire, vérifier que le contenu du passage de texte référencé est pertinent ;
3. Si c'est le cas pour chaque champ de formulaire, le test est validé.

##### Test 11.2.5

1. Retrouver dans le document les champs de formulaire dont l'étiquette est fournie à la fois par un intitulé visible et par le contenu soit d'un élément `<label>`, soit d'un attribut `title` ou d'un attribut `aria-label` ou d'un attribut `aria-labelledby` ;
2. Pour chaque champ de formulaire, vérifier que le contenu de l'élément `<label>` ou de l'attribut `title` ou de l'attribut `aria-label` ou de l'attribut `aria-labelledby` contient l'intitulé visible ;
3. Si c'est le cas pour chaque champ de formulaire, le test est validé.

##### Test 11.2.6

1. Retrouver dans le document les champs de formulaire dont l'étiquette visible est fournie par un bouton adjacent ;
2. Pour chaque champ de formulaire, vérifier que le contenu visible du bouton est pertinent ;
3. Si c'est le cas pour chaque champ de formulaire, le test est validé.

<!-- De nouveau, 11.2.6 est un cas particulier problématique, car c'est la pertinence supposée du contenu visible du bouton qui nous permet de le considérer comme étiquette de subtitution possible à un champ de formulaire. Le reconnaître comme tel, c'est déjà avoir validé sa pertinence. -->

#### Critère 11.3 Dans chaque formulaire, chaque étiquette associée à un champ de formulaire ayant la même fonction et répété plusieurs fois dans une même page ou dans un ensemble de pages est-elle cohérente ?

##### Test 11.3.1

1. Retrouver dans le document les champs de formulaire ayant une même fonction (par exemple plusieurs champs d'adresse) ;
2. Pour chaque champ de formulaire, vérifier que les étiquettes sont cohérentes (elles permettent de comprendre qu'il s'agit de saisies de natures identiques) ;
3. Si c'est le cas pour chaque champ de formulaire, le test est validé.

##### Test 11.3.2

1. Retrouver dans l'ensemble des pages considérées les champs de formulaire ayant une même fonction (par exemple le champ de saisie d'un moteur de recherche ou le champ de saisie d'inscription à une newsletter) ;
2. Pour chaque champ de formulaire, vérifier que les étiquettes sont cohérentes (elles permettent de comprendre qu'il s'agit de saisies de natures identiques) ;
3. Si c'est le cas pour chaque champ de formulaire de l'ensemble des pages considérées, le test est validé.

#### Critère 11.4 Dans chaque formulaire, chaque étiquette de champ et son champ associé sont-ils accolés (hors cas particuliers) ?

##### Test 11.4.1

1. Retrouver dans le document les champs de formulaire ;
2. Pour chaque champ de formulaire, vérifier qu'il est accolé à son étiquette ;
3. Si c'est le cas pour chaque champ de formulaire, le test est validé.

<!-- Sous-entendu étiquette visible -->

##### Test 11.4.2

1. Retrouver dans le document les champs de formulaire qui ne sont pas des éléments `<input>` de type `checkbox` ou de type `radio` ou des éléments ayant un attribut WAI-ARIA `role="checkbox"`, `role="radio"` ou `role="switch"`;
2. Pour chaque champ de formulaire, vérifier que l'étiquette est visuellement accolée :
    * Immédiatement au-dessus ou à gauche du champ de formulaire lorsque le sens de lecture de la langue de l'étiquette est de gauche à droite ;
    * Immédiatement au-dessus ou à droite du champ de formulaire lorsque le sens de lecture de la langue de l'étiquette est de droite à gauche.
3. Si c'est le cas pour chaque champ de formulaire, le test est validé.

##### Test 11.4.3

1. Retrouver dans le document les champs de formulaire qui sont `<input>` de type `checkbox` ou de type `radio` ou des éléments ayant un attribut WAI-ARIA `role="checkbox"`, `role="radio"` ou `role="switch"`;
2. Pour chaque champ de formulaire, vérifier que l'étiquette est visuellement accolée :
    * Immédiatement au-dessus ou à droite du champ de formulaire lorsque le sens de lecture de la langue de l'étiquette est de gauche à droite ;
    * Immédiatement au-dessus ou à gauche du champ de formulaire lorsque le sens de lecture de la langue de l'étiquette est de droite à gauche.
3. Si c'est le cas pour chaque champ de formulaire, le test est validé.

#### Critère 11.5 Dans chaque formulaire, les champs de même nature sont-ils regroupés, si nécessaire ?

##### Test 11.5.1

1. Retrouver dans le document les champs de formulaire de même nature (par exemple un groupe de saisie d'informations d'identité, une série de cases à cocher, une saisie de date sur plusieurs champs successifs...) ;
2. Pour chaque groupe de champs de formulaire de même nature, vérifier que ces champs de même nature sont regroupés :
    * Soit dans un élément `<fieldset>` ;
    * Soit dans un élément possédant un attribut WAI-ARIA `role="group"` ;
    * Soit dans un élément possédant un attribut WAI-ARIA `role="radiogroup"` ou `"group"`, s'il s'agit d'éléments `<input>` de type `radio` ( ou d'éléments possédant un attribut WAI-ARIA `role="radio"`).
3. Si c'est le cas pour chaque groupe de champs de formulaire de même nature, le test est validé.

#### Critère 11.6 Dans chaque formulaire, chaque regroupement de champs de formulaire a-t-il une légende ?

##### Test 11.6.1

1. Retrouver dans le document les groupes de champs de formulaire de même nature ;
2. Pour chaque groupe de champs de formulaire de même nature, vérifier que :
    * Si le regroupement utilise un élément `<fieldset>`, l'élément `<fieldset>` possède un élément `<legend>` ;
    * Si l'élément de regroupement utilise un attribut WAI-ARIA `role="group"` ou `"radiogroup"`, il possède un attribut WAI-ARIA `aria-label` ou `aria-labelledby`.
3. Sinon, pour chacun des champs de même nature, vérifier la présence :
    * Soit d'un attribut `title` permettant de déterminer l'appartenance du champ au groupement de champ ;
    * Soit d'un attribut `aria-label` permettant de déterminer l'appartenance du champ au groupement de champ ;
    * Soit d'un attribut `aria-labelledby` qui référence un passage de texte permettant de déterminer l'appartenance du champ au groupement de champ.
    * Soit d'un attribut `aria-describedby` qui référence un passage de texte permettant de déterminer l'appartenance du champ au groupement de champ.
4. Si c'est le cas pour chaque groupe de champs de formulaire ou pour chacun des champs de même nature, le test est validé.

#### Critère 11.7 Dans chaque formulaire, chaque légende associée à un regroupement de champs de même nature est-elle pertinente ?

##### Test 11.7.1

1. Retrouver dans le document les groupes de champs de formulaire de même nature ;
2. Pour chaque groupe de champs de formulaire de même nature ou pour chacun des champs de même nature qui dispose d'une légende, vérifier que le texte de cette légende est pertinent ;
3. Si c'est le cas pour chaque groupe de champs de formulaire ou pour chacun des champs de même nature, le test est validé.

#### Critère 11.8 Dans chaque formulaire, les items de même nature d'une liste de choix sont-ils regroupés de manière pertinente ?

##### Test 11.8.1

1. Retrouver dans le document les listes de sélection (élément `<select>`) ;
2. Pour chaque liste de sélection proposant des groupes d'items de même nature, vérifier que ces items sont regroupés au moyen d'éléments `<optgroup>` ;
3. Si c'est le cas pour chaque liste de sélection proposant des groupes d'items de même nature, le test est validé.

##### Test 11.8.2

1. Retrouver dans le document les listes de sélection (élément `<select>`) qui possèdent des éléments `<optgroup>` ;
2. Pour chaque élément `<optgroup>`, vérifier qu'il possède un attribut `label` ;
3. Si c'est le cas pour chaque élément `<optgroup>`, le test est validé.

##### Test 11.8.3

1. Retrouver dans le document les listes de sélection (élément `<select>`) qui possèdent des éléments `<optgroup>` pourvus d'un attribut `label` ;
2. Pour chaque attribut `label`, vérifier que son contenu est pertinent ;
3. Si c'est le cas pour chaque attribut `label`, le test est validé.

#### Critère 11.9 Dans chaque formulaire, l'intitulé de chaque bouton est-il pertinent ?

##### Test 11.9.1

1. Retrouver dans le document les boutons présents au sein d'un formulaire ;
2. Pour chaque bouton, vérifier que son intitulé visible et son nom accessible sont pertinents ;
3. Si c'est le cas pour chaque bouton, le test est validé.

<!-- Fournir de manière générale une procédure de détermination du nom accessible
        ◦ S'il est présent, le contenu de l'attribut WAI-ARIA aria-label est pertinent.
        ◦ S'il est présent, le passage de texte lié au bouton via un attribut WAI-ARIA aria-labelledby est pertinent.
        ◦ S'il est présent, le contenu de l'attribut value d'une balise <input> de type submit, reset ou button est pertinent.
        ◦ S'il est présent, le contenu de la balise <button> est pertinent.
        ◦ S'il est présent, le contenu de l'attribut alt d'une balise <input> de type image est pertinent.
        ◦ S'il est présent, le contenu de l'attribut title est pertinent.
 -->

##### Test 11.9.2

1. Retrouver dans le document les boutons présents au sein d'un formulaire ;
2. Pour chaque bouton, vérifier que son nom accessible contient au moins son intitulé visible ;
3. Si c'est le cas pour chaque bouton, le test est validé.

<!-- Même chose
        ◦ S'il est présent, le contenu de l'attribut WAI-ARIA aria-label est pertinent.
        ◦ S'il est présent, le passage de texte lié au bouton via un attribut WAI-ARIA aria-labelledby est pertinent.
        ◦ S'il est présent, le contenu de l'attribut value d'une balise <input> de type submit, reset ou button est pertinent.
        ◦ S'il est présent, le contenu de la balise <button> est pertinent.
        ◦ S'il est présent, le contenu de l'attribut alt d'une balise <input> de type image est pertinent.
        ◦ S'il est présent, le contenu de l'attribut title est pertinent.
 -->

#### Critère 11.10 Dans chaque formulaire, le contrôle de saisie est-il utilisé de manière pertinente ?

##### Test 11.10.1

1. Retrouver dans le document les champs de formulaire obligatoires ;
2. Pour chaque champ de formulaire, vérifier que préalablement à la validation du formulaire :
    * Soit une indication de champ obligatoire est visible et permet d'identifier nommément le champ concerné ;
    * Soit le champ possède un attribut `aria-required="true"` ou `required`.
3. Si c'est le cas pour chaque champ de formulaire obligatoire, le test est validé.

##### Test 11.10.2

1. Retrouver dans le document les champs de formulaire obligatoires qui possèdent un attribut `aria-required="true"` ou `required` ;
2. Pour chaque champ de formulaire, vérifier que préalablement à la validation du formulaire :
    * Soit une indication de champ obligatoire est visible et située dans l'étiquette associée au champ ;
    * Soit une indication de champ obligatoire est visible et située dans le passage de texte associé au champ.
3. Si c'est le cas pour chaque champ de formulaire obligatoire qui possèdent un attribut `aria-required="true"` ou `required`, le test est validé.

##### Test 11.10.3

1. Retrouver dans le document les messages d'erreur indiquant l'absence de saisie d'un champ obligatoire ;
2. Pour chaque message d'erreur, vérifier que :
    * Soit le message d'erreur est visible et permet d'identifier nommément le champ concerné ;
    * Soit le champ obligatoire associé au message d'erreur possède un attribut `aria-invalid="true"`.
3. Si c'est le cas pour chaque message d'erreur indiquant l'absence de saisie d'un champ obligatoire, le test est validé.

##### Test 11.10.4

1. Retrouver dans le document les champs de formulaire obligatoires qui possèdent un attribut `aria-invalid="true"` ;
2. Pour chaque champ de formulaire, vérifier que :
    * Soit une indication de champ obligatoire est visible et située dans l'étiquette associée au champ ;
    * Soit une indication de champ obligatoire est visible et située dans le passage de texte associé au champ.
3. Si c'est le cas pour chaque champ de formulaire obligatoire qui possède un attribut `aria-invalid="true"`, le test est validé.

<!-- Les conditions ne sont pas les bonnes copier/coller de 11.10.2 -->

##### Test 11.10.5

1. Retrouver dans le document les champs de formulaire obligatoires auxquels est associée une instruction ou une indication du type de données et/ou de format obligatoire ;
2. Pour chaque champ de formulaire, vérifier que l'instruction ou l'indication du type de données et/ou de format obligatoire est préalablement à la validation du formulaire :
    * Soit visible et permet d'identifier nommément le champ concerné ;
    * Soit visible dans l'étiquette ou le passage de texte associé au champ.
3. Si c'est le cas pour chaque champ de formulaire obligatoire auxquel est associée une instruction ou une indication du type de données et/ou de format obligatoire, le test est validé.

<!-- 
* Soit visible et permet d'identifier nommément le champ concerné ;
* Soit visible dans l'étiquette ou le passage de texte associé au champ.
=> La seconde condition n'est qu'un cas particulier de la première... 
-->

##### Test 11.10.6

1. Retrouver dans le document les messages d'erreur fournissant une instruction ou une indication du type de données et/ou de format obligatoire d'un champ ;
2. Pour chaque message d'erreur, vérifier que :
    * Soit le message d'erreur est visible et permet d'identifier nommément le champ concerné ;
    * Soit le champ associé au message d'erreur possède un attribut `aria-invalid="true"`.
3. Si c'est le cas pour chaque message d'erreur indiquant l'absence de saisie d'un champ obligatoire, le test est validé.

<!-- 
Les conditions de 11.10.3 et 11.10.6 sont finalement les mêmes à l'exception que 11.10.3 concernent les champs obligatoires et 11.10.6 tous les champs
-->

##### Test 11.10.7

1. Retrouver dans le document les champs de formulaire qui possèdent un attribut `aria-invalid="true"` ;
2. Pour chaque champ de formulaire, vérifier que :
    * Soit une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans l'élément `<label>` associé au champ ;
    * Soit une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans le passage de texte associé au champ.
3. Si c'est le cas pour chaque champ de formulaire qui possède un attribut `aria-invalid="true"`, le test est validé.

<!-- 
Les conditions sont les mêmes que 11.10.4 qui ne concerne que des champs obligatoires :
* Soit une indication de champ obligatoire est visible et située dans l'étiquette associée au champ ;
* Soit une indication de champ obligatoire est visible et située dans le passage de texte associé au champ.
-->

#### Critère 11.11 Dans chaque formulaire, le contrôle de saisie est-il accompagné, si nécessaire, de suggestions facilitant la correction des erreurs de saisie ?

##### Test 11.11.1

1. Retrouver dans le document les messages d'erreur ;
2. Pour chaque message d'erreur, vérifier que les types et les formats de données attendus sont suggérés ;
3. Si c'est le cas pour chaque message d'erreur , le test est validé.

##### Test 11.11.2

1. Retrouver dans le document les messages d'erreur ;
2. Pour chaque message d'erreur, vérifier que des exemples de valeurs attendues sont suggérés ;
3. Si c'est le cas pour chaque message d'erreur , le test est validé.

<!-- Ce critère revient à dire que les messages d'erreur sont pertinents -->

#### Critère 11.12 Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, la saisie des données vérifie-t-elle une de ces conditions ?

##### Test 11.12.1

1. Retrouver dans le document les formulaires qui modifient ou suppriment des données, ou qui transmettent des réponses à un test ou un examen, ou dont la validation a des conséquences financières ou juridiques ;
2. Pour chaque formulaire, vérifier que l'utilisateur peut :
    * Soit modifier ou annuler les données et les actions effectuées sur ces données après la validation du formulaire ;
    * Soit vérifier et corriger les données avant la validation d'un formulaire en plusieurs étapes ;
    * Soit disposer d'un mécanisme de confirmation explicite (par exemple, une case à cocher ou une étape supplémentaire).
3. Si c'est le cas pour chaque formulaire retrouvé, le test est validé.

##### Test 11.12.2

1. Retrouver dans le document les formulaires qui modifient ou suppriment des données à caractère financier, juridique ou personnel ;
2. Pour chaque formulaire, vérifier que l'utilisateur dispose :
    * Soit d'un mécanisme qui permet de récupérer les données supprimées ou modifiées ;
    * Soit d'un mécanisme de demande de confirmation explicite de la suppression ou de la modification (par exemple, une case à cocher ou une étape supplémentaire).
3. Si c'est le cas pour chaque formulaire retrouvé, le test est validé.

<!-- Les deux tests semblent se recouper en grande partie -->

#### Critère 11.13 La finalité d'un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique des champs avec les données de l'utilisateur ?

##### Test 11.13.1

1. Retrouver dans le document les champs de formulaire qui se rapportent à une information concernant l'utilisateur (nom, prénom, numéro de téléphone, etc.) ;
2. Pour chaque champ de formulaire, vérifier que :
    1. Le champ de formulaire possède un attribut `autocomplete` ;
    2. L'attribut `autocomplete` est pourvu d'une valeur présente dans la liste des valeurs possibles (voir <https://www.w3.org/TR/html52/sec-forms.html#autofill-processing-model>) ;
    3. La valeur indiquée pour l'attribut `autocomplete` est pertinente au regard du type d'information attendu.
3. Si c'est le cas pour chaque champ de formulaire retrouvé, le test est validé.

### Navigation

#### Critère 12.1 Chaque ensemble de pages dispose-t-il de deux systèmes de navigation différents, au moins (hors cas particuliers) ?

##### Test 12.1.1

1. Pour chaque ensemble de pages du site, vérifier la présence :
    * Soit d'un menu de navigation et d'un plan du site ;
    * Soit d'un menu de navigation et d'un moteur de recherche ;
    * Soit d'un moteur de recherche et d'un plan du site.
2. Si c'est le cas pour chaque ensemble de pages du site, le test est validé.

#### Critère 12.2 Dans chaque ensemble de pages, le menu et les barres de navigation sont-ils toujours à la même place ?

##### Test 12.2.1

1. Choisir une page de l'échantillon appartenant au même ensemble que la page en cours d'audit ;
2. Comparer visuellement les deux pages et vérifier que le menu ou les barres de navigation sont toujours à la même place dans la présentation ;
3. Comparer le code source (généré côté client) des deux pages et vérifier que le menu ou les barres de navigation se présentent toujours dans le même ordre relatif dans la structure ;
4. Si c'est le cas, le test est validé.

Note : le critère est non applicable dans les situations où :

* Les pages d'un ensemble de pages sont le résultat ou une partie d'un processus (un processus de paiement ou de prise de commande, par exemple) ;
* La page est la page d'accueil ;
* le site web est constitué d'une seule page.

#### Critère 12.3 La page « plan du site » est-elle pertinente ?

##### Test 12.3.1

1. Vérifier que le plan du site est représentatif de l'architecture générale du site (cf. note) ;
2. Si c'est le cas, le test est validé.

Note : Un plan du site trop complexe ou trop profond n'est pas recommandé pour aider à la navigation. Il n'est pas obligatoire que toutes les pages soient présentes dans le plan du site si elles peuvent être atteintes, par exemple, à partir de la page d'accueil d'une rubrique ou d'un catalogue.

##### Test 12.3.2

1. Pour tous les liens du plan du site, vérifier qu'ils sont fonctionnels ;
2. Si c'est le cas, le test est validé.

##### Test 12.3.3

1. Pour tous les liens du plan du site, vérifier qu'ils sont à jour (ni obsolètes ni en erreur) et conduisent à la page indiquée par leur intitulé ;
2. Si c'est le cas, le test est validé.

#### Critère 12.4 Dans chaque ensemble de pages, la page « plan du site » est-elle atteignable de manière identique ?

##### Test 12.4.1

1. Choisir une page de l'échantillon appartenant au même ensemble que la page en cours d'audit ;
2. Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d'accès au plan du site est toujours le même (un lien ou un bouton, par exemple) ;
3. Si c'est le cas, le test est validé.

##### Test 12.4.2

1. Choisir une page de l'échantillon appartenant au même ensemble que la page en cours d'audit ;
2. Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d'accès au plan du site est toujours à la même place dans la structure (par rapport à l'ordre relatif des éléments de la page, par exemple il est toujours en haut de page) ;
3. Si c'est le cas, le test est validé.

##### Test 12.4.3

1. Choisir une page de l'échantillon appartenant au même ensemble que la page en cours d'audit ;
2. Comparer visuellement les deux pages et vérifier que le moyen d'accès au plan du site est toujours à la même place dans la présentation ;
3. Si c'est le cas, le test est validé.

#### Critère 12.5 Dans chaque ensemble de pages, le moteur de recherche est-il atteignable de manière identique ?

##### Test 12.5.1

1. Choisir une page de l'échantillon appartenant au même ensemble que la page en cours d'audit ;
2. Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d'accès au moteur de recherche est toujours le même (un champ de formulaire, par exemple) ;
3. Si c'est le cas, le test est validé.

##### Test 12.5.2

1. Choisir une page de l'échantillon appartenant au même ensemble que la page en cours d'audit ;
2. Comparer visuellement les deux pages et vérifier que le moyen d'accès au moteur de recherche est toujours à la même place dans la présentation ;
3. Si c'est le cas, le test est validé.

##### Test 12.5.3

1. Choisir une page de l'échantillon appartenant au même ensemble que la page en cours d'audit ;
2. Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d'accès au moteur de recherche est toujours à la même place dans la structure (par rapport à l'ordre relatif des éléments de la page, par exemple il est toujours en haut de page) ;
3. Si c'est le cas, le test est validé.

#### Critère 12.6 Les zones de regroupement de contenus présentes dans plusieurs pages web (zones d'en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche) peuvent-elles être atteintes ou évitées ?

##### Test 12.6.1

1. Retrouver dans le document les zones de regroupement de contenus (zones d'en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche) ;
2. Pour chaque zone, vérifier que la zone :
    * Soit possède un rôle WAI-ARIA de type `landmark` correspondant à sa nature ;
    * Soit possède un titre de hiérarchie dont le contenu permet de comprendre la nature du contenu de la zone ;
    * Soit peut être masquée au moyen d'un bouton précédant directement la zone dans l'ordre du code source ;
    * Soit peut être évitée au moyen d'un lien d'évitement précédant directement la zone dans l'ordre du code source ;
    * Soit peut être atteinte au moyen d'un lien d'accès rapide visible à la prise de focus lors d’une tabulation.
3. Si c'est le cas pour chaque zone de regroupement de contenus, le test est validé.

#### Critère 12.7 Dans chaque page web, un lien d'évitement ou d'accès rapide à la zone de contenu principal est-il présent (hors cas particuliers) ?

##### Test 12.7.1

1. Retrouver dans le document la zone de contenu principal (indiquée par l'élément `main` visible) ;
2. Vérifier que la zone :
    * Soit peut être évitée au moyen d'un lien d'évitement précédant directement la zone dans l'ordre du code source ;
    * Soit peut être atteinte au moyen d'un lien d'accès rapide visible à la prise de focus lors d’une tabulation.
3. Si c'est le cas, le test est validé.

<!-- Ce n'est qu'un cas particulier de 12.6.1 -->

##### Test 12.7.2

1. Retrouver dans le document la zone de contenu principal (indiquée par l'élément `main` visible) ;
2. Vérifier que le lien d'évitement ou d'accès rapide à la zone est :
    * Situé à la même place dans la présentation ;
    * Présent toujours dans le même ordre relatif dans le code source (généré côté client) ;
    * Visible à la prise de focus lors d’une tabulation.
3. Si c'est le cas, le test est validé.

Note : lorsque le site web est constitué d'une seule page, l'obligation de la présence d'un lien d'accès rapide est liée au contexte de la page (présence ou absence de navigation ou de contenus additionnels, par exemple). Le critère peut être considéré comme non applicable lorsqu'il est avéré qu'un lien d'accès rapide est inutile.

#### Critère 12.8 Dans chaque page web, l'ordre de tabulation est-il cohérent ?

##### Test 12.8.1

1. Parcourir dans le document l'ensemble des contenus au moyen de la touche de tabulation vers l'avant (touche Tab) et vers l'arrière (touches Maj+Tab) ;
2. Vérifier que l'ordre de déplacement du focus reste cohérent relativement au contenu considéré (par exemple, l'ordre de tabulation dans une fenêtre modale ne doit considérer que les éléments d'interface présents au sein de cette fenêtre) ;
3. Si c'est le cas, le test est validé.

Note : il n'est pas obligatoire que la tabulation suive l'ordre de lecture naturel (de gauche à droite et de haut en bas par exemple) tant que les éléments sont accessibles dans un ordre cohérent.

##### Test 12.8.2

1. Retrouver dans le document l'ensemble des contenus insérés au moyen d'un script (affichage d'éléments masqués, mise jour de contenu via AJAX par exemple) ;
2. Positionner la tabulation sur l'élément déclencheur et l'activer ;
3. Après l'affichage du contenu mis à jour, vérifier que la tabulation reste cohérente (repositionnement correct du focus) ;
4. Si c'est le cas, le test est validé.

#### Critère 12.9 Dans chaque page web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée ?

##### Test 12.9.1

1. Retrouver dans le document l'ensemble des éléments d'interface susceptibles de recevoir le focus (au moyen de la tabulation ou au moyen d'un script) ;
2. Pour chaque élément d'interface, vérifier que l'utilisateur peut atteindre l'élément suivant ou précédent pouvant recevoir le focus :
    * Soit au moyen de la touche de tabulation (Tab ou Maj+Tab) ;
    * Soit au moyen d'une autre interaction clavier dont l'utilisateur est informé (par exemple, les flèches de direction).
3. Si c'est le cas pour chaque élément d'interface, le test est validé.

Note : certains éléments d'interface complexes, comme un groupe de boutons radio, une liste de sélection et tous les composants développés avec WAI-ARIA font appel à des navigations optimisées qui utilisent généralement les flèches de direction pour passer d'une partie du composant à l'autre. Par exemple, dans un groupe de boutons radio les options sont navigables avec les flèches de direction. De même dans un système d'onglets l'utilisateur active les onglets avec les flèches de direction.
Le test sur le piège au clavier se limite alors à vérifier que le composant est atteint avec la tabulation et qu'il est possible de passer au composant suivant ou revenir au composant précédent.

#### Critère 12.10 Dans chaque page web, les raccourcis clavier n'utilisant qu'une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) sont-ils contrôlables par l’utilisateur ?

##### Test 12.10.1

1. Retrouver dans le document l'ensemble des raccourcis clavier proposés à l'utilisateur ;
2. Pour chaque raccourci clavier, vérifier que :
    * Soit un mécanisme est disponible pour désactiver le raccourci clavier ;
    * Soit un mécanisme est disponible pour configurer la touche de raccourci clavier au moyen des touches de modification (Ctrl, Alt, Maj, etc.).
    * Soit, dans le cas d'un composant d'interface utilisateur, le raccourci clavier qui lui est associé ne peut être activé que si le focus clavier est sur ce composant.
3. Si c'est le cas pour chaque raccourci clavier, le test est validé.

#### Critère 12.11 Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l'activation d'un composant d'interface sont-ils, si nécessaire, atteignables au clavier ?

##### Test 12.11.1

1. Retrouver dans le document l'ensemble des contenus additionnels apparaissant au survol, à la prise de focus ou à l'activation d'un composant d'interface ;
2. Pour chaque contenu additionnel, s'il contient des composants d'interface avec lesquels l'utilisateur peut interagir au clavier (par exemple, une infobulle personnalisée qui propose un lien dans son contenu), vérifier que ces composants d'interface sont atteignables au clavier ;
3. Si c'est le cas pour chaque contenu additionnel, le test est validé.

### Consultation

#### Critère 13.1 Pour chaque page web, l'utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu (hors cas particuliers) ?

##### Test 13.1.1

1. Retrouver dans le document les rafraîchissements initiés dans le contenu par un élément `<object>`, `<embed>`, `<svg>`, `<canvas>` ou par un élément `<meta http-equiv="refresh" content="[compteur]">` (dans l'élément `<head>` de la page) ;
2. Pour chaque rafraîchissement, vérifier que :
    * Soit la présence d'un mécanisme permet à l'utilisateur de stopper et de relancer le rafraîchissement ;
    * Soit la présence d'un mécanisme permet à l'utilisateur d'augmenter la limite de temps entre deux rafraîchissements de dix fois, au moins ;
    * Soit la présence d'un mécanisme qui avertit l'utilisateur de l'imminence du rafraîchissement, laisse 20 secondes, au moins, à l'utilisateur, pour augmenter la limite de temps avant le prochain rafraîchissement ;
    * Soit la limite de temps entre deux rafraîchissements est de vingt heures, au moins.
3. Si c'est le cas, le test est validé.

##### Test 13.1.2

1. Retrouver dans le document une redirection automatique initiée par un élément `<meta http-equiv="refresh" content="0;URL='[URL ciblée]'" />` ;
2. Vérifier que la redirection est immédiate ;
3. Si c'est le cas, le test est validé.

##### Test 13.1.3

1. Retrouver dans le document les redirections automatiques initiées par un script (sous la forme d'un décompte par exemple) ;
2. Pour chaque redirection automatique, vérifier que :
    * Soit la présence d'un mécanisme permet à l'utilisateur de stopper et relancer la redirection ;
    * Soit la présence d'un mécanisme permet à l'utilisateur d'augmenter la limite de temps avant le rafraîchissement de dix fois, au moins ;
    * Soit la présence d'un mécanisme qui avertit l'utilisateur de l'imminence du rafraîchissement, laisse 20 secondes, au moins, à l'utilisateur, pour augmenter la limite de temps avant le prochain rafraîchissement ;
    * Soit la limite de temps avant la redirection est de vingt heures, au moins.
3. Si c'est le cas, le test est validé.

<!-- Même procédure que 13.1.1 -->

##### Test 13.1.4

1. Retrouver dans le document les procédés limitant le temps d'une session (par exemple, après une authentification) ;
2. Pour chaque procédé, vérifier que :
    * Soit la présence d'un mécanisme permet à l'utilisateur de supprimer la limite de temps ;
    * Soit la présence d'un mécanisme permet à l'utilisateur d'augmenter la limite de temps ;
    * Soit la limite de temps est de vingt heures, au moins.
3. Si c'est le cas, le test est validé.

Note : lorsque la limite de temps est essentielle, notamment lorsqu'elle ne pourrait pas être supprimée sans changer fondamentalement le contenu ou les fonctionnalités liées au contenu, le critère est non applicable. Par exemple, le rafraîchissement d'un flux RSS dans une page n'est pas une limite de temps essentielle ; le critère est applicable. En revanche, une redirection automatique qui amène vers la nouvelle version d'une page à partir d'une url obsolète est essentielle ; le critère est non applicable.

#### Critère 13.2 Dans chaque page web, l'ouverture d'une nouvelle fenêtre ne doit pas être déclenchée sans action de l'utilisateur. Cette règle est-elle respectée ?

##### Test 13.2.1

1. Vérifier qu'à l'ouverture du document, aucune nouvelle fenêtre (pop-up ou pop-under, par exemple) n'est ouverte.
2. Si c'est le cas, le test est validé.

#### Critère 13.3 Dans chaque page web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une version accessible ?

##### Test 13.3.1

1. Retrouver dans le document les liens et les contrôles de formulaire (un bouton de formulaire ou un formulaire de téléchargement par exemple) permettant de télécharger un fichier au format bureautique ;
2. Pour chaque fichier au format bureautique, vérifier la présence d'une version alternative présentée comme accessible :
    * Pour les documents au format .pdf, analyser le fichier avec l'outil PAC (PDF Accessibility Checker) et vérifier l'absence d'erreur d'accessibilité dans le document (cf. note) ;
    * Pour les documents au format .doc ou .docx, analyser le fichier avec l'outil de vérification d'accessibilité de Microsoft Office (à partir de la version 2010) et vérifier l'absence d'erreur d'accessibilité (cf. note) ;
    * Pour les documents au format .odt, analyser le document avec l'éditeur OpenOffice et vérifier que l'ensemble des contenus est conforme avec la liste des critères « Liste document bureautique en téléchargement » (cf. note pour une méthode alternative) ;
    * Pour les documents au format EPUB/DAISY, analyser le document avec un éditeur EPUB/DAISY et vérifier que l'ensemble des contenus est conforme avec la liste des critères « Liste document bureautique en téléchargement ».
    * Pour les documents eux-mêmes au format .html, analyser l'accessibilité du document.
3. Si c'est le cas pour chaque fichier au format bureautique, le test est validé.

Note au sujet de l'outil PAC : l'outil analyse le document PDF du point de vue de l'accessibilité mais également de critères de qualité (par exemple la norme PDF/UA). Seules les erreurs relatives à des critères présents dans la liste des critères « Liste document bureautique en téléchargement » rendent le critère « Non conforme ». Par ailleurs, cet outil ne fonctionne que sur la plateforme Windows. Sur Mac, le contrôle doit se faire manuellement.

Note au sujet Microsoft Office : le logiciel offre un vérificateur d'accessibilité en standard, (accessible via le menu « Fichier > Informations > Vérifier la présence de problèmes > Vérifier l'accessibilité »). Ce vérificateur peut être considérablement amélioré via le plugin Word Accessibility Plug-in (voir dans la section Outils). Ce plugin ne fonctionne que sur Windows. Sur Mac, le contrôle doit se faire manuellement.

Note au sujet des documents au format .odt : OpenOffice et LibreOffice ne possèdent pas de vérificateur d'accessibilité. Une méthode plus rapide qu'une analyse manuelle peut consister à enregistrer le document au format .docx et le vérifier via le vérificateur d'accessibilité de Microsoft Office 2010. Attention cependant : cette méthode rapide est à réserver aux documents très simples car certaines informations liées à l'accessibilité ne sont pas correctement transcodées. C'est le cas des indications de langue, de certaines alternatives d'images ou d'en-têtes fusionnées sur les tableaux par exemple.

Note au sujet du format EPUB : l'utilitaire Ace by DAISY App permet d'effectuer le travail de validation d'un fichier EPUB 3 de manière efficace.

Note au sujet des documents dérogés : le référentiel propose un statut de dérogation dans certains cas (cf. guide d'accompagnement). Dans ce cas, les tests ne sont pas à réaliser, la version accessible étant fournie sur demande de l'utilisateur.

Note à l'attention des personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si les fichiers bureautiques (ex : PDF, documents Microsoft ou libreOffice, etc.) ont été publiés avant le 23 septembre 2018 (sauf si ce sont des documents nécessaires pour accomplir une démarche administrative relevant des tâches effectuées par l'organisme concerné), ils sont exemptés de l’obligation d’accessibilité.

#### Critère 13.4 Pour chaque document bureautique ayant une version accessible, cette version offre-t-elle la même information ?

##### Test 13.4.1

1. Retrouver dans le document les fichiers en téléchargement au format bureautique accompagné de leur version alternative accessible ;
2. Pour chaque couple de fichiers, ouvrir les deux documents (le document d'origine et le document accessible) et vérifier que les deux documents apportent la même information ;
3. Si c'est le cas pour chaque couple de fichiers, le test est validé.

#### Critère 13.5 Dans chaque page web, chaque contenu cryptique (art ASCII, émoticon, syntaxe cryptique) a-t-il une alternative ?

##### Test 13.5.1

1. Retrouver dans le document les contenus cryptiques (art ASCII, émoticône, syntaxe cryptique) ;
2. Pour chaque contenu cryptique, vérifier que :
    * Soit une définition est disponible au moyen d'un attribut `title`, sur un lien, un contrôle de formulaire, une abréviation (élément `<abbr>`) par exemple ;
    * Soit une définition est donnée dans le contexte adjacent (immédiatement avant ou après).
3. Si c'est le cas pour chaque contenu cryptique, le test est validé.

#### Critère 13.6 Dans chaque page web, pour chaque contenu cryptique (art ASCII, émoticon, syntaxe cryptique) ayant une alternative, cette alternative est-elle pertinente ?

##### Test 13.6.1

1. Retrouver dans le document les contenus cryptiques (art ASCII, émoticône, syntaxe cryptique) ;
2. Pour chaque contenu cryptique, vérifier que la définition donnée est pertinente.
3. Si c'est le cas pour chaque contenu cryptique, le test est validé.

#### Critère 13.7 Dans chaque page web, les changements brusques de luminosité ou les effets de flash sont-ils correctement utilisés ?

##### Test 13.7.1

1. Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash de type image animée, vidéo (cf. note) ou animation (éléments `<img>`, `<svg>`, `<canvas>`, `<embed>`, `<object>` ou `<video>`) ;
2. Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
    * Soit la fréquence de l'effet est inférieur à 3 par seconde ;
    * Soit la surface cumulée est inférieure à 21824 pixels.
3. Si c'est le cas pour chaque contenu clignotant ou provoquant des effets de flash, le test est validé.

Note : l'évaluation de ce critère peut être complexe. Lorsque l'effet est géré par un script ou au moyen de CSS, l'analyse du code est suffisante. L'outil PEAT permet d'analyser les vidéos au format .avi, par exemple. Un exemple de vidéo ayant provoquée des crises d'épilepsie peut être consulté ici : London 2012 Olympics Seizure (<https://www.youtube.com/watch?v=vs0hfhSje9M>).

##### Test 13.7.2

1. Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash obtenus au moyen d'un script ;
2. Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
    * Soit la fréquence de l'effet est inférieur à 3 par seconde ;
    * Soit la surface cumulée est inférieure à 21824 pixels.
3. Si c'est le cas pour chaque contenu clignotant ou provoquant des effets de flash, le test est validé.

##### Test 13.7.3

1. Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash obtenus au moyen d'une animation CSS ;
2. Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
    * Soit la fréquence de l'effet est inférieur à 3 par seconde ;
    * Soit la surface cumulée est inférieure à 21824 pixels.
3. Si c'est le cas pour chaque contenu clignotant ou provoquant des effets de flash, le test est validé.

#### Critère 13.8 Dans chaque page web, chaque contenu en mouvement ou clignotant est-il contrôlable par l'utilisateur ?

##### Test 13.8.1

1. Retrouver dans le document les contenus en mouvement (obtenus au moyen d'une image, d'un script ou d'un effet CSS) déclenchés automatiquement au chargement de la page ou lors de l'affichage d'un contenu (cf. note) ;
2. Pour chaque contenu, vérifier que :
    * Soit la durée du mouvement est inférieure à 5 secondes ;
    * Soit la présence d'un mécanisme (un bouton, par exemple) permet d'arrêter et de relancer le mouvement ;
    * Soit la présence d'un mécanisme (un bouton, par exemple) permet de cacher et d'afficher à nouveau le contenu en mouvement ;
    * Soit la présence d'un mécanisme (un bouton, par exemple) permet d'afficher la totalité du contenu sans mouvement.
3. Si c'est le cas pour chaque contenu en mouvement, le test est validé.

##### Test 13.8.2

1. Retrouver dans le document les contenus clignotants (obtenus au moyen d'une image, d'un script ou d'un effet CSS) déclenchés automatiquement au chargement de la page ou lors de l'affichage d'un contenu (cf. note).
2. Pour chaque contenu, vérifier que :
    * Soit la durée du clignotement est inférieure à 5 secondes ;
    * Soit la présence d'un mécanisme (un bouton, par exemple) permet d'arrêter et de relancer le clignotement ;
    * Soit la présence d'un mécanisme (un bouton, par exemple) permet de cacher et d'afficher à nouveau le contenu clignotant ;
    * Soit la présence d'un mécanisme (un bouton, par exemple) permet d'afficher la totalité du contenu clignotement.
3. Si c'est le cas pour chaque contenu clignotant, le test est validé.

Note : l'arrêt ou la mise en pause d'un contenu en mouvement ou clignotant au moyen de la prise de focus (par exemple, l'effet est suspendu uniquement pendant la prise de focus) n'est pas considéré comme un procédé conforme. Dans certains cas, le mouvement ne peut pas être arrêté, par exemple dans le cas d'une barre de progression, dans ce cas, le critère est non applicable.

#### Critère 13.9 Dans chaque page web, le contenu proposé est-il consultable quelle que soit l'orientation de l'écran (portait ou paysage) (hors cas particuliers) ?

##### Test 13.9.1

1. Consulter le document dans un mode d'orientation portrait puis dans un mode d'orientation paysage ;
2. Vérifier que :
    * La consultation est possible quel que soit le mode d'orientation de l'écran.
    * Le contenu proposé reste le même quel que soit le mode d'orientation de l'écran utilisé même si sa présentation et le moyen d'y accéder peut différer.
3. Si c'est le cas, le test est validé.

Note : il existe des interfaces pour lesquelles l'orientation du périphérique est essentielle à leur utilisation. Dans ces situations, le critère est non applicable. Il peut s'agir d'interfaces de jeu, de piano, de dépôt de chèques bancaires, etc. Si l'interface est le seul moyen d'accéder au service proposé, une alternative devrait être mise en place pour pallier cette carence.

#### Critère 13.10 Dans chaque page web, les fonctionnalités utilisables ou disponibles au moyen d'un geste complexe peuvent-elles être également disponibles au moyen d'un geste simple (hors cas particuliers) ?

##### Test 13.10.1

1. Retrouver dans le document les fonctionnalités utilisables ou disponibles au moyen d'une interaction au toucher de type contact multipoint ;
2. Pour chaque fonctionnalité, vérifier qu'elle reste disponible au moyen d'une interaction au toucher de type contact en un point unique de l'écran (par exemple, la possibilité de consulter les éléments d'une liste par un mouvement de balayage horizontal droit ou gauche doit aussi être disponible au moyen de boutons "précédent" et "suivant" ou encore un geste de pincer et zoomer qui peut être alternativement  réalisé au moyen de boutons "plus" et "moins") ;
3. Si c'est le cas pour chaque fonctionnalité utilisable ou disponible au moyen d'une interaction au toucher de type contact multipoint, le test est validé.

##### Test 13.10.2

1. Retrouver dans le document les fonctionnalités utilisables ou disponibles au moyen d'une interaction au toucher qui implique le suivi d'une trajectoire sur l'écran ;
2. Pour chaque fonctionnalité, vérifier qu'elle reste disponible au moyen d'une interaction au toucher de type contact en un point unique de l'écran (par exemple, la possibilité de composer son mot de passe en suivant une trajectoire sur un clavier virtuel doit aussi être disponible au moyen de pressions successives sur les touches du clavier) ;
3. Si c'est le cas pour chaque fonctionnalité utilisable ou disponible au moyen d'une interaction au toucher qui implique le suivi d'une trajectoire sur l'écran, le test est validé.

<!-->
Cas particuliers
Il existe une gestion de cas particuliers dans deux types de situation :
    • Le critère ne s'applique qu'à des fonctionnalités mises en place par l'auteur du site. Il ne concerne donc pas les gestes requis par l'agent utilisateur ou le système d'exploitation.
    • Le critère ne s'applique pas aux fonctionnalités dont la réalisation d'un geste complexe est essentielle (exécuter le tracé d'une signature, par exemple).
    -->

#### Critère 13.11 Dans chaque page web, les actions déclenchées au moyen d'un dispositif de pointage sur un point unique de l'écran peuvent-elles faire l'objet d'une annulation (hors cas particuliers) ?

##### Test 13.11.1

1. Retrouver dans le document les actions déclenchées au moyen d'un dispositif de pointage sur un point unique de l'écran ;
2. Pour chaque action, vérifier que :
    * Soit l'action est déclenchée au moment où le dispositif de pointage est relâché ou relevé ;
    * Soit l'action est déclenchée au moment où le dispositif de pointage est pressé ou posé puis annulée lorsque le dispositif de pointage est relâché ou relevé ;
    * Soit il existe un mécanisme pour abandonner (avant achèvement de l'action) ou annuler (après achèvement) l'exécution de l'action ; par exemple, lors d'une interaction de type glisser-déposer un relâchement du dispositif de pointage doit permettre d'abandonner l'interaction en cours et une fois la zone de dépôt atteinte, l'utilisateur doit rester en mesure d'annuler son opération de dépôt au moyen d'un dialogue de confirmation (choix de confirmer ou d'annuler le dépôt) ou par le fait de pouvoir replacer l'élément déposé à sa position initiale.
3. Si c'est le cas pour chaque action déclenchée au moyen d'un dispositif de pointage sur un point unique de l'écran, le test est validé.

#### Critère 13.12 Dans chaque page web, les fonctionnalités qui impliquent un mouvement de l'appareil ou vers l'appareil peuvent-elles être satisfaites de manière alternative (hors cas particuliers) ?

##### Test 13.12.1

1. Retrouver dans le document les fonctionnalités disponibles en bougeant l'appareil ;
2. Pour chaque fonctionnalité, vérifier qu'elle peut être accomplie au moyen de composants d'interface utilisateur ;
3. Si c'est le cas pour chaque fonctionnalité disponible en bougeant l'appareil, le test est validé.

##### Test 13.12.2

1. Retrouver dans le document les fonctionnalités disponibles en faisant un geste en direction de l'appareil ;
2. Pour chaque fonctionnalité, vérifier qu'elle peut être accomplie au moyen de composants d'interface utilisateur ;
3. Si c'est le cas pour chaque fonctionnalité disponible en faisant un geste en direction de l'appareil, le test est validé.

##### Test 13.12.3

1. Retrouver dans le document les fonctionnalités disponibles en mettant en mouvement l'appareil ;
2. Vérifier si l'utilisateur à la possibilité de désactiver la détection du mouvement ;
3. Si c'est le cas, pour chaque fonctionnalité, vérifier qu'elle ne peut pas être déclenchée ;
4. Si c'est le cas pour chaque fonctionnalité disponible en mettant en mouvement l'appareil, le test est validé.

<!-->
Cas particuliers
Il existe une gestion de cas particulier lorsque :
    • Le mouvement est essentiel à l'accomplissement de la fonctionnalité (par exemple dans le cas d'un podomètre).
    • La détection du mouvement est utilisée pour contrôler une fonctionnalité au travers d'une interface compatible avec l'accessibilité.
-->
