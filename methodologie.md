      
  <div id="readme" class="Box-body readme blob js-code-block-container p-5 p-xl-6 gist-border-0">
    <article class="markdown-body entry-content container-lg" itemprop="text"><table data-table-type="yaml-metadata">
  <thead>
  <tr>
  <th>title</th>
  <th>permalink</th>
  <th>menu</th>
  <th>layout</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><div>Méthodologie de test - RGAA</div></td>
  <td><div>/publications/rgaa-accessibilite/methodologie-test/</div></td>
  <td><div><table>
  <thead>
  <tr>
  <th>title</th>
  <th>weight</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><div>Méthodologie de test</div></td>
  <td><div>41</div></td>
  </tr>
  </tbody>
</table>
</div></td>
  <td><div>rgaa-accessibilite</div></td>
  </tr>
  </tbody>
</table>

<h3><a id="user-content-introduction" class="anchor" aria-hidden="true" href="#introduction"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Introduction</h3>
<p>Ce document a été établi dans le cadre des ressources venant accompagner la prise en main de la version 4 du référentiel général d'amélioration de l'accessibilité (RGAA 4).</p>
<p>Il est destiné à toute personne soucieuse de vérifier la conformité d'un contenu web au RGAA 4. Il s'agit d'une méthodologie de tests documentant les étapes permettant de vérifier si un critère du RGAA 4 est conforme ou non. Cette méthodologie est donc à utiliser en complément du référentiel technique du RGAA et ne peut être utilisée seule. Elle ne dispense donc pas d'une lecture approfondie du référentiel technique, ni d'une formation au RGAA.</p>
<p>Pour chacun des tests d'un critère correspond une procédure de test ; la mise en oeuvre de cette procédure peut recourir parfois l'usage d'outils spécifiques, autrement un navigateur suffit pour effectuer la majorité des tests.</p>
<p>Une liste d'outils est aussi proposée pour aider à la réalisation des tests ; ils ont été retenus à la fois parce qu'ils sont fréquemment utilisés par les experts du métier et parce qu'ils facilitent la recherche de certains résultats.</p>
<h3><a id="user-content-outils" class="anchor" aria-hidden="true" href="#outils"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Outils</h3>
<p>L'outil le plus utile reste l'inspecteur de code que propose chaque navigateur. Il permet de rechercher facilement les éléments et les attributs requis pour un examen par un test d'accessibilité.</p>
<p>Les aides techniques listées dans l’environnement de test retenu constituent un second ensemble d'outils indispensables (voir la rubrique <a href="https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode/environnement/#contenu" rel="nofollow">Environnement de test</a>) ; ils sont, en effet, requis pour s'assurer d'une restitution correcte de contenus accessibles (les alternatives aux images, les intitulés de lien, les titres de tableau, ...) dans le cas notamment où l'examen du code seul ne suffirait pas.</p>
<p>D'autres outils sont disponibles pour aider à la recherche des éléments de contenu ; ils se présentent souvent comme des extensions au navigateur et permettent d'explorer un ou plusieurs aspects d'un test d'accessibilité.</p>
<p>Les barres d'outils sont des extensions du navigateur qui vont faciliter le repérage visuel de certains éléments dans un document :</p>
<ul>
<li>Web Accessibility Toolbar pour Internet Explorer (<a href="https://developer.paciellogroup.com/resources/wat/" rel="nofollow">https://developer.paciellogroup.com/resources/wat/</a>) : barre d'outils de vérification de certains points d'accessibilité d'un document ;</li>
<li>Web Developer Toolbar pour Firefox (<a href="https://addons.mozilla.org/fr/firefox/addon/web-developer/" rel="nofollow">https://addons.mozilla.org/fr/firefox/addon/web-developer/</a>) : barre d'outils pour les développeurs qui peut aider à retrouver visuellement certains éléments dans un document pour en contrôler l'accessibilité ;</li>
<li>Web Developer Toolbar pour Chrome (<a href="https://chrome.google.com/webstore/detail/web-developer/" rel="nofollow">https://chrome.google.com/webstore/detail/web-developer/</a>) : la même barre d'outils que précédemment, pour Chrome.</li>
</ul>
<p>Au-delà de la simple barre d'outil, d'autres outils fournissent une analyse complète du document en signalant visuellement sur la page les erreurs d'accessibilité ou à l'inverse les éléments qui lui sont bénéfiques ; des filtres permettent alors souvent de n'afficher que certains de ces aspects. C'est ce que propose Wave, une solution disponible à la fois en ligne (<a href="http://wave.webaim.org" rel="nofollow">http://wave.webaim.org</a>) et comme extension de navigateur (<a href="https://wave.webaim.org/extension/" rel="nofollow">https://wave.webaim.org/extension/</a>).</p>
<p>La validation du code source d'un document HTML utilise le validateur en ligne du W3C (<a href="https://validator.w3.org/" rel="nofollow">https://validator.w3.org/</a>) ; À noter que pour valider le code source généré par le navigateur, il faut utiliser l'option "Validate by Direct Input" en y copiant la source HTML proposée par l'inspecteur de code du navigateur. Des extensions de navigateur sont aussi disponibles, mais il faut être vigilant, car les algorithmes de validation de ces extensions ne sont pas forcément à jour par rapport au validateur du W3C et les résultats obtenus peuvent donc être différents.</p>
<p>La vérification des contrastes de couleurs bénéficie de différents outils :</p>
<ul>
<li>WCAG Contrast checker (<a href="https://addons.mozilla.org/fr/firefox/addon/wcag-contrast-checker/" rel="nofollow">https://addons.mozilla.org/fr/firefox/addon/wcag-contrast-checker/</a>) : extension Firefox qui permet un contrôle automatique des contrastes de couleurs des textes d'un document ;</li>
<li>Color Contrast Analyser (<a href="https://developer.paciellogroup.com/resources/contrastanalyser/" rel="nofollow">https://developer.paciellogroup.com/resources/contrastanalyser/</a>) : Application Windows ou Mac qui permet de contrôler des contrastes de couleurs.</li>
</ul>
<p>La vérification de l'arborescence du document et de la hiérarchie des titres dispose d'une extension très utile :</p>
<ul>
<li>HeadingsMap pour Firefox (<a href="https://addons.mozilla.org/fr/firefox/addon/headingsmap/" rel="nofollow">https://addons.mozilla.org/fr/firefox/addon/headingsmap/</a>) : extension Firefox qui permet de donner un aperçu du plan du document et de son arborescence ;</li>
<li>HeadingsMap pour Chrome (<a href="https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi" rel="nofollow">https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi</a>) : même extension que la précédente pour Chrome.</li>
</ul>
<p>L'analyse des fichiers bureautiques peut être réalisée au moyen de différents outils en fonction du format du fichier :</p>
<ul>
<li>PAC (PDF Accessibility Checker) version 3 pour Windows (<a href="https://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html" rel="nofollow">https://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html</a>) : logiciel qui permet de contrôler certains points d'accessibilité des documents PDF ;</li>
<li>Word Accessibility Plug-in pour Microsoft Office Windows (<a href="http://accessibility.zhaw.ch/index.php?id=6&amp;L=1" rel="nofollow">http://accessibility.zhaw.ch/index.php?id=6&amp;L=1</a>) : extension du logiciel Microsoft Word qui permet d'éditer et de contrôler l'accessibilité d'un document bureautique éditable au format .doc ; à noter que les versions récentes des outils bureautiques de Microsoft offrent une fonctionnalité intégrée de validation de l'accessibilité.</li>
<li>AccessODF pour LibreOffice (<a href="https://extensions.libreoffice.org/extensions/accessodf" rel="nofollow">https://extensions.libreoffice.org/extensions/accessodf</a>) : extension pour vérifier l'accessibilité d'un document LibreOffice Writer ; à noter que cette extension n'est plus compatible avec les dernières versions de LibreOffice (supérieures à la version 4.0) ;</li>
<li>Ace by DAISY App (<a href="https://inclusivepublishing.org/toolbox/ace-by-daisy-app/" rel="nofollow">https://inclusivepublishing.org/toolbox/ace-by-daisy-app/</a>) est un utilitaire pour vérifier l'accessibilité d'un fichier EPUB.</li>
</ul>
<p>Enfin, un logiciel ancien mais toujours utile pour évaluer la potentialité de certains contenus web à causer des crises d'épilepsie : PEAT (Photosensitive Epilepsy Analysis Tool) pour Windows (<a href="https://trace.umd.edu/peat" rel="nofollow">https://trace.umd.edu/peat</a>).</p>
<h3><a id="user-content-images" class="anchor" aria-hidden="true" href="#images"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Images</h3>
<h4><a id="user-content-critère-11-chaque-image-porteuse-dinformation-a-t-elle-une-alternative-textuelle-" class="anchor" aria-hidden="true" href="#critère-11-chaque-image-porteuse-dinformation-a-t-elle-une-alternative-textuelle-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 1.1 Chaque image porteuse d'information a-t-elle une alternative textuelle ?</h4>
<h5><a id="user-content-test-111" class="anchor" aria-hidden="true" href="#test-111"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.1.1</h5>
<ol>
<li>Retrouver dans le document les images structurées au moyen d’un élément <code>&lt;img&gt;</code> ou d’un élément possédant l'attribut WAI-ARIA <code>role="img"</code> ;</li>
<li>Pour chaque image, déterminer si l’image est porteuse d'information ;</li>
<li>Dans le cas où il s’agit d’un élément <code>&lt;img&gt;</code>, vérifier que l’image est pourvue au moins d’une alternative textuelle parmi les suivantes :
<ol>
<li>Passage de texte associé via l’attribut WAI-ARIA <code>aria-labelledby</code> ;</li>
<li>Contenu de l’attribut WAI-ARIA <code>aria-label</code> ;</li>
<li>Contenu de l’attribut <code>alt</code> ;</li>
<li>Contenu de l’attribut <code>title</code>.</li>
</ol>
</li>
<li>Dans le cas où il s’agit d’un élément possédant l'attribut WAI-ARIA <code>role="img"</code>, vérifier que l’image est pourvue au moins d’une alternative textuelle parmi les suivantes :
<ol>
<li>Passage de texte associé via l’attribut WAI-ARIA <code>aria-labelledby</code> ;</li>
<li>Contenu de l’attribut WAI-ARIA <code>aria-label</code>.</li>
</ol>
</li>
<li>Si au moins une alternative textuelle est trouvée, le test est validé.</li>
</ol>
<h5><a id="user-content-test-112" class="anchor" aria-hidden="true" href="#test-112"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.1.2</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;area&gt;</code> ;</li>
<li>Pour chaque élément <code>&lt;area&gt;</code>, déterminer si la zone réactive est porteuse d'information ;</li>
<li>Vérifier que la zone réactive est pourvue au moins d’une alternative textuelle parmi les suivantes :
<ol>
<li>Contenu de l’attribut WAI-ARIA <code>aria-label</code> ;</li>
<li>Contenu de l’attribut <code>alt</code> ;</li>
</ol>
</li>
<li>Si au moins une alternative textuelle est trouvée, le test est validé.</li>
</ol>
<h5><a id="user-content-test-113" class="anchor" aria-hidden="true" href="#test-113"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.1.3</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;input&gt;</code> pourvus de l’attribut <code>type="image"</code> ;</li>
<li>Pour chaque élément <code>&lt;input&gt;</code> pourvu de l’attribut <code>type="image"</code>, déterminer si l’image utilisée est porteuse d'information ;</li>
<li>Vérifier que l’élément <code>&lt;input&gt;</code> est pourvu au moins d’une alternative textuelle parmi les suivantes :
<ol>
<li>Passage de texte associé via l’attribut WAI-ARIA <code>aria-labelledby</code> ;</li>
<li>Contenu de l’attribut WAI-ARIA <code>aria-label</code> ;</li>
<li>Contenu de l’attribut <code>alt</code> ;</li>
<li>Contenu de l’attribut <code>title</code>.</li>
</ol>
</li>
<li>Si au moins une alternative textuelle est trouvée, le test est validé.</li>
</ol>
<h5><a id="user-content-test-114" class="anchor" aria-hidden="true" href="#test-114"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.1.4</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;img&gt;</code> pourvus de l’attribut <code>ismap</code> ;</li>
<li>Pour chaque élément <code>&lt;img&gt;</code> pourvu de l’attribut <code>ismap</code>, vérifier la présence d’un lien ou d’un ensemble de liens (ou bien d'un autre type de composant d'interface qui jouerait un rôle similaire comme une liste de sélection, par exemple) permettant d'accéder aux mêmes ressources que lorsque l'image fait l’objet d’un clic.</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>

<h5><a id="user-content-test-115" class="anchor" aria-hidden="true" href="#test-115"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.1.5</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;svg&gt;</code> ;</li>
<li>Pour chaque élément <code>&lt;svg&gt;</code>, déterminer si l’image est porteuse d'information ;</li>
<li>S’assurer que l’élément <code>&lt;svg&gt;</code> est pourvu d’un attribut WAI-ARIA <code>role="img"</code> ;</li>
<li>Si ce n’est pas le cas, le test est invalidé.</li>
<li>Le cas échéant, vérifier que l’élément <code>&lt;svg&gt;</code> est pourvu au moins d’une alternative textuelle parmi les suivantes :
<ol>
<li>Passage de texte associé via l’attribut WAI-ARIA <code>aria-labelledby</code> ;</li>
<li>Contenu de l’attribut WAI-ARIA <code>aria-label</code> ;</li>
</ol>
</li>
<li>Si au moins une alternative textuelle est trouvée, le test est validé.</li>
</ol>
<h5><a id="user-content-test-116" class="anchor" aria-hidden="true" href="#test-116"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.1.6</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;object&gt;</code> pourvus de l'attribut <code>type="image/…"</code> ;</li>
<li>Pour chaque élément <code>&lt;object&gt;</code> pourvu de l'attribut <code>type="image/…"</code>, déterminer si l’image utilisée est porteuse d'information ;</li>
<li>Vérifier que l’élément <code>&lt;object&gt;</code> est pourvu au moins d’une alternative textuelle parmi les suivantes :
<ol>
<li>Passage de texte associé via l’attribut WAI-ARIA <code>aria-labelledby</code> ;</li>
<li>Contenu de l’attribut WAI-ARIA <code>aria-label</code> ;</li>
<li>Contenu de l’attribut <code>title</code>.</li>
</ol>
</li>
<li>Si au moins une alternative textuelle est trouvée, le test est validé ;</li>
<li>Sinon, vérifier que l'élément <code>&lt;object&gt;</code> est :
<ul>
<li>Soit immédiatement suivi d'un lien ou bouton adjacent permettant d'accéder à un contenu alternatif ;</li>
<li>Soit un mécanisme permet à l'utilisateur de remplacer l'élément <code>&lt;object&gt;</code> par un contenu alternatif.</li>
</ul>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-117" class="anchor" aria-hidden="true" href="#test-117"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.1.7</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;embed&gt;</code> pourvus de l'attribut <code>type="image/…"</code> ;</li>
<li>Pour chaque élément <code>&lt;embed&gt;</code> pourvu de l'attribut <code>type="image/…"</code>, déterminer si l’image utilisée est porteuse d'information ;</li>
<li>Vérifier que l’élément <code>&lt;embed&gt;</code> est pourvu au moins d’une alternative textuelle parmi les suivantes :
<ol>
<li>Passage de texte associé via l’attribut WAI-ARIA <code>aria-labelledby</code> ;</li>
<li>Contenu de l’attribut WAI-ARIA <code>aria-label</code> ;</li>
<li>Contenu de l’attribut <code>title</code>.</li>
</ol>
</li>
<li>Si au moins une alternative textuelle est trouvée, le test est validé ;</li>
<li>Sinon, vérifier que l'élément <code>&lt;embed&gt;</code> est :
<ul>
<li>Soit immédiatement suivi d'un lien ou bouton adjacent permettant d'accéder à un contenu alternatif ;</li>
<li>Soit un mécanisme permet à l'utilisateur de remplacer l'élément <code>&lt;embed&gt;</code> par un contenu alternatif.</li>
</ul>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-118" class="anchor" aria-hidden="true" href="#test-118"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.1.8</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;canvas&gt;</code> ;</li>
<li>Pour chaque élément <code>&lt;canvas&gt;</code>, déterminer si l’image utilisée est porteuse d'information ;</li>
<li>Vérifier que l’élément <code>&lt;canvas&gt;</code> est pourvu au moins d’une alternative textuelle parmi les suivantes :
<ol>
<li>Passage de texte associé via l’attribut WAI-ARIA <code>aria-labelledby</code> ;</li>
<li>Contenu de l’attribut WAI-ARIA <code>aria-label</code>.</li>
</ol>
</li>
<li>Si au moins une alternative textuelle est trouvée, le test est validé.</li>
<li>Sinon, vérifier que l'élément <code>&lt;canvas&gt;</code> est :
<ul>
<li>Soit pourvu d'un contenu alternatif présent entre les balises <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code> ;</li>
<li>Soit immédiatement suivi d'un lien ou bouton adjacent permettant d'accéder à un contenu alternatif ;</li>
<li>Soit un mécanisme permet à l'utilisateur de remplacer l'élément <code>&lt;canvas&gt;</code> par un contenu alternatif.</li>
</ul>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-12-chaque-image-de-décoration-est-elle-correctement-ignorée-par-les-technologies-dassistance-" class="anchor" aria-hidden="true" href="#critère-12-chaque-image-de-décoration-est-elle-correctement-ignorée-par-les-technologies-dassistance-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 1.2 Chaque image de décoration est-elle correctement ignorée par les technologies d'assistance ?</h4>
<h5><a id="user-content-test-121" class="anchor" aria-hidden="true" href="#test-121"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.2.1</h5>
<ol>
<li>Retrouver dans le document les images décoratives structurées au moyen d’un élément <code>&lt;img&gt;</code> ;</li>
<li>Pour chaque image, vérifier que l’image ne possède pas d'attributs <code>aria-labelledby</code>, <code>aria-label</code> ou <code>title</code> et qu'elle possède :
<ul>
<li>Soit un attribut <code>alt</code> vide (<code>alt=""</code>) ;</li>
<li>Soit un attribut WAI-ARIA <code>aria-hidden="true"</code> ou <code>role="presentation"</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-122" class="anchor" aria-hidden="true" href="#test-122"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.2.2</h5>
<ol>
<li>Retrouver dans le document les images décoratives structurées au moyen d’un élément <code>&lt;area&gt;</code> (sans attribut <code>href</code>) ;</li>
<li>Pour chaque image, vérifier que l'élément <code>&lt;area&gt;</code> ne possède pas d'attributs <code>aria-labelledby</code>, <code>aria-label</code> ou <code>title</code> et qu'il possède :
<ul>
<li>Soit un attribut <code>alt</code> vide (<code>alt=""</code>) ;</li>
<li>Soit un attribut WAI-ARIA <code>aria-hidden="true"</code> ou <code>role="presentation"</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-123" class="anchor" aria-hidden="true" href="#test-123"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.2.3</h5>
<ol>
<li>Retrouver dans le document les images décoratives structurées au moyen d’un élément <code>&lt;object&gt;</code> (avec un attribut <code>type="image/…"</code>) ;</li>
<li>Pour chaque image, vérifier que l'élément <code>&lt;object&gt;</code> ne possède pas d'attributs <code>aria-labelledby</code>, <code>aria-label</code> ou <code>title</code> et qu'il :
<ul>
<li>Possède un attribut WAI-ARIA <code>aria-hidden="true"</code> ;</li>
<li>Et est dépourvu d'alternative textuelle ;</li>
<li>Et est dépourvu d'un contenu alternatif présent entre les balises <code>&lt;object&gt;</code> et <code>&lt;/object&gt;</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-124" class="anchor" aria-hidden="true" href="#test-124"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.2.4</h5>
<ol>
<li>Retrouver dans le document les images décoratives structurées au moyen d’un élément <code>&lt;svg&gt;</code> ;</li>
<li>Pour chaque image, vérifier que l'élément <code>&lt;svg&gt;</code> ne possède pas d'attributs <code>aria-labelledby</code> ou <code>aria-label</code> et qu'il :
<ul>
<li>Possède un attribut WAI-ARIA <code>aria-hidden="true"</code> ;</li>
<li>Et est dépourvu d'alternative textuelle (ainsi que ses éléments enfants) ;</li>
<li>Et ne contient pas d'éléments <code>&lt;title&gt;</code> et <code>&lt;desc&gt;</code> à moins que vides de contenu ;</li>
<li>Et est dépourvu d'attribut <code>title</code> (ainsi que ses éléments enfants).</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-125" class="anchor" aria-hidden="true" href="#test-125"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.2.5</h5>
<ol>
<li>Retrouver dans le document les images décoratives structurées au moyen d’un élément <code>&lt;canvas&gt;</code> ;</li>
<li>Pour chaque image, vérifier que l'élément <code>&lt;canvas&gt;</code> ne possède pas d'attributs <code>aria-labelledby</code>, <code>aria-label</code> ou <code>title</code> et qu'il :
<ul>
<li>Possède un attribut WAI-ARIA <code>aria-hidden="true"</code> ;</li>
<li>Et est dépourvu d'alternative textuelle ;</li>
<li>Et est dépourvu d'un contenu alternatif présent entre les balises <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-126" class="anchor" aria-hidden="true" href="#test-126"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.2.6</h5>
<ol>
<li>Retrouver dans le document les images décoratives structurées au moyen d’un élément <code>&lt;embed&gt;</code> (avec un attribut <code>type="image/…"</code>) ;</li>
<li>Pour chaque image, vérifier que l'élément <code>&lt;embed&gt;</code> ne possède pas d'attributs <code>aria-labelledby</code>, <code>aria-label</code> ou <code>title</code> et qu'il :
<ul>
<li>Possède un attribut WAI-ARIA <code>aria-hidden="true"</code> ;</li>
<li>Et est dépourvu d'alternative textuelle ;</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-13-pour-chaque-image-porteuse-dinformation-ayant-une-alternative-textuelle-cette-alternative-est-elle-pertinente-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-13-pour-chaque-image-porteuse-dinformation-ayant-une-alternative-textuelle-cette-alternative-est-elle-pertinente-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 1.3 Pour chaque image porteuse d'information ayant une alternative textuelle, cette alternative est-elle pertinente (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-131" class="anchor" aria-hidden="true" href="#test-131"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.3.1</h5>
<ol>
<li>Retrouver dans le document les images structurées au moyen d’un élément <code>&lt;img&gt;</code> (ou d’un élément possédant l'attribut WAI-ARIA <code>role="img"</code>) pourvues d'une alternative textuelle ;</li>
<li>Pour chaque image, vérifier que l’alternative textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-132" class="anchor" aria-hidden="true" href="#test-132"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.3.2</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;area&gt;</code> pourvus d'une alternative textuelle ;</li>
<li>Pour chaque élément <code>&lt;area&gt;</code>, vérifier que l’alternative textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-133" class="anchor" aria-hidden="true" href="#test-133"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.3.3</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;input&gt;</code> pourvus de l’attribut <code>type="image"</code> et d'une alternative textuelle ;</li>
<li>Pour chaque élément <code>&lt;input&gt;</code> pourvu de l’attribut <code>type="image"</code>, vérifier que l’alternative textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-134" class="anchor" aria-hidden="true" href="#test-134"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.3.4</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;object&gt;</code> pourvus de l'attribut <code>type="image/…"</code> et d'une alternative textuelle ;</li>
<li>Pour chaque élément <code>&lt;object&gt;</code> pourvu de l'attribut <code>type="image/…"</code>, vérifier que l’alternative textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-135" class="anchor" aria-hidden="true" href="#test-135"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.3.5</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;embed&gt;</code> pourvus de l'attribut <code>type="image/…"</code> et d'une alternative textuelle ;</li>
<li>Pour chaque élément <code>&lt;embed&gt;</code> pourvu de l'attribut <code>type="image/…"</code>, vérifier que l’alternative textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-136" class="anchor" aria-hidden="true" href="#test-136"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.3.6</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;svg&gt;</code> pourvus d'une alternative textuelle ;</li>
<li>Pour chaque élément <code>&lt;svg&gt;</code>, vérifier que l’alternative textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-137" class="anchor" aria-hidden="true" href="#test-137"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.3.7</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;canvas&gt;</code> pourvus d'une alternative textuelle ;</li>
<li>Pour chaque élément <code>&lt;canvas&gt;</code>, vérifier que l’alternative textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-138" class="anchor" aria-hidden="true" href="#test-138"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.3.8</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;canvas&gt;</code> pourvus d'un contenu alternatif entre les balises <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code> ;</li>
<li>Pour chaque élément <code>&lt;canvas&gt;</code>, vérifier que le contenu alternatif est correctement restitué par les technologies d'assistance ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-139" class="anchor" aria-hidden="true" href="#test-139"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.3.9</h5>
<ol>
<li>Retrouver dans le document les images pourvues d'une alternative textuelle ;</li>
<li>Pour chaque image, vérifier l'alternative textuelle est courte et concise ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-14-pour-chaque-image-utilisée-comme-captcha-ou-comme-image-test-ayant-une-alternative-textuelle-cette-alternative-permet-elle-didentifier-la-nature-et-la-fonction-de-limage" class="anchor" aria-hidden="true" href="#critère-14-pour-chaque-image-utilisée-comme-captcha-ou-comme-image-test-ayant-une-alternative-textuelle-cette-alternative-permet-elle-didentifier-la-nature-et-la-fonction-de-limage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 1.4 Pour chaque image utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle, cette alternative permet-elle d'identifier la nature et la fonction de l'image ?</h4>
<h5><a id="user-content-test-141" class="anchor" aria-hidden="true" href="#test-141"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.4.1</h5>
<ol>
<li>Retrouver dans le document les images structurées au moyen d’un élément <code>&lt;img&gt;</code> pourvues d'une alternative textuelle et utilisées comme CAPTCHA ou comme image-test ;</li>
<li>Pour chaque image, vérifier que l’alternative textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-142" class="anchor" aria-hidden="true" href="#test-142"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.4.2</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;area&gt;</code> pourvus d'une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;</li>
<li>Pour chaque élément <code>&lt;area&gt;</code>, vérifier que l’alternative textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-143" class="anchor" aria-hidden="true" href="#test-143"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.4.3</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;input&gt;</code> pourvus de l’attribut <code>type="image"</code> et d'une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;</li>
<li>Pour chaque élément <code>&lt;input&gt;</code> pourvu de l’attribut <code>type="image"</code>, vérifier que l’alternative textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-144" class="anchor" aria-hidden="true" href="#test-144"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.4.4</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;object&gt;</code> pourvus de l'attribut <code>type="image/…"</code> et d'une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;</li>
<li>Pour chaque élément <code>&lt;object&gt;</code> pourvu de l'attribut <code>type="image/…"</code>, vérifier que l’alternative textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-145" class="anchor" aria-hidden="true" href="#test-145"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.4.5</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;embed&gt;</code> pourvus de l'attribut <code>type="image/…"</code> et d'une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;</li>
<li>Pour chaque élément <code>&lt;embed&gt;</code> pourvu de l'attribut <code>type="image/…"</code>, vérifier que l’alternative textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-146" class="anchor" aria-hidden="true" href="#test-146"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.4.6</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;svg&gt;</code> pourvus d'une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;</li>
<li>Pour chaque élément <code>&lt;svg&gt;</code>, vérifier que l’alternative textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-147" class="anchor" aria-hidden="true" href="#test-147"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.4.7</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;canvas&gt;</code> pourvus d'une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;</li>
<li>Pour chaque élément <code>&lt;canvas&gt;</code>, vérifier que l’alternative textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-15-pour-chaque-image-utilisée-comme-captcha-une-solution-daccès-alternatif-au-contenu-ou-à-la-fonction-du-captcha-est-elle-présente" class="anchor" aria-hidden="true" href="#critère-15-pour-chaque-image-utilisée-comme-captcha-une-solution-daccès-alternatif-au-contenu-ou-à-la-fonction-du-captcha-est-elle-présente"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 1.5 Pour chaque image utilisée comme CAPTCHA, une solution d'accès alternatif au contenu ou à la fonction du CAPTCHA est-elle présente ?</h4>
<h5><a id="user-content-test-151" class="anchor" aria-hidden="true" href="#test-151"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.5.1</h5>
<ol>
<li>Retrouver dans le document les images (éléments <code>&lt;img&gt;</code>, <code>&lt;area&gt;</code>, <code>&lt;object&gt;</code>, <code>&lt;embed&gt;</code>, <code>&lt;svg&gt;</code>, <code>&lt;canvas&gt;</code> ou possédant un attribut WAI-ARIA <code>role="img"</code>) utilisés comme CAPTCHA ou comme image-test ;</li>
<li>Pour chaque image, vérifier qu'il existe :
<ul>
<li>Soit une autre forme de CAPTCHA non graphique, au moins ;</li>
<li>Soit une autre solution d'accès à la fonctionnalité qui est sécurisée par le CAPTCHA.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-152" class="anchor" aria-hidden="true" href="#test-152"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.5.2</h5>
<ol>
<li>Retrouver dans le document les boutons associés à une image (éléments <code>&lt;input&gt;</code> avec l'attribut <code>type="image"</code>) utilisés comme CAPTCHA ou comme image-test ;</li>
<li>Pour chaque bouton associé à une image, vérifier qu'il existe :
<ul>
<li>Soit une autre forme de CAPTCHA non graphique, au moins ;</li>
<li>Soit une autre solution d'accès à la fonctionnalité qui est sécurisée par le CAPTCHA.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>

<h4><a id="user-content-critère-16-chaque-image-porteuse-dinformation-a-t-elle-si-nécessaire-une-description-détaillée" class="anchor" aria-hidden="true" href="#critère-16-chaque-image-porteuse-dinformation-a-t-elle-si-nécessaire-une-description-détaillée"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 1.6 Chaque image porteuse d'information a-t-elle, si nécessaire, une description détaillée ?</h4>
<h5><a id="user-content-test-161" class="anchor" aria-hidden="true" href="#test-161"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.6.1</h5>
<ol>
<li>Retrouver dans le document les images structurées au moyen d’un élément <code>&lt;img&gt;</code> (ou d’un élément possédant l'attribut WAI-ARIA <code>role="img"</code>) porteuses d'information qui nécessitent une description détaillée ;</li>
<li>Pour chaque image, vérifier qu'il existe :
<ul>
<li>Soit un attribut <code>longdesc</code> qui donne l'adresse (url) d'une page ou d'un emplacement dans la page contenant la description détaillée ;</li>
<li>Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l'image ;</li>
<li>Soit un lien ou un bouton adjacent permettant d'accéder à la description détaillée.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-162" class="anchor" aria-hidden="true" href="#test-162"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.6.2</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;object&gt;</code> pourvus de l'attribut <code>type="image/…"</code>, porteurs d'information qui nécessitent une description détaillée ;</li>
<li>Pour chaque élément <code>&lt;object&gt;</code> pourvu de l'attribut <code>type="image/…"</code>, vérifier qu'il existe :
<ul>
<li>Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l'image ;</li>
<li>Soit un lien ou un bouton adjacent permettant d'accéder à la description détaillée.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque élément <code>&lt;object&gt;</code> pourvu de l'attribut <code>type="image/…"</code>, le test est validé.</li>
</ol>
<h5><a id="user-content-test-163" class="anchor" aria-hidden="true" href="#test-163"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.6.3</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;embed&gt;</code> pourvus de l'attribut <code>type="image/…"</code>, porteurs d'information qui nécessitent une description détaillée ;</li>
<li>Pour chaque élément <code>&lt;embed&gt;</code> pourvu de l'attribut <code>type="image/…"</code>, vérifier qu'il existe :
<ul>
<li>Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l'image ;</li>
<li>Soit un lien ou un bouton adjacent permettant d'accéder à la description détaillée.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque élément <code>&lt;embed&gt;</code> pourvu de l'attribut <code>type="image/…"</code>, le test est validé.</li>
</ol>
<h5><a id="user-content-test-164" class="anchor" aria-hidden="true" href="#test-164"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.6.4</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;input&gt;</code> pourvus de l’attribut <code>type="image"</code>, porteurs d'information qui nécessitent une description détaillée ;</li>
<li>Pour chaque élément <code>&lt;input&gt;</code> pourvu de l’attribut <code>type="image"</code>, vérifier qu'il existe :
<ul>
<li>Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l'image ;</li>
<li>Soit un lien ou un bouton adjacent permettant d'accéder à la description détaillée ;</li>
<li>Soit un attribut WAI-ARIA <code>aria-describedby</code> associant un passage de texte faisant office de description détaillée.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque élément <code>&lt;input&gt;</code> pourvu de l’attribut <code>type="image"</code>, le test est validé.</li>
</ol>
<h5><a id="user-content-test-165" class="anchor" aria-hidden="true" href="#test-165"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.6.5</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;svg&gt;</code> porteurs d'information qui nécessitent une description détaillée ;</li>
<li>Pour chaque élément <code>&lt;svg&gt;</code>, vérifier qu'il existe :
<ul>
<li>Soit un attribut WAI-ARIA <code>aria-label</code> contenant l'alternative textuelle et une référence à une description détaillée adjacente ;</li>
<li>Soit un attribut WAI-ARIA <code>aria-labelledby</code> associant un passage de texte faisant office d'alternative textuelle et un autre faisant office de description détaillée ;</li>
<li>Soit un attribut WAI-ARIA <code>aria-describedby</code> associant un passage de texte faisant office de description détaillée.</li>
<li>Soit un lien ou un bouton adjacent permettant d'accéder à la description détaillée.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque élément <code>&lt;svg&gt;</code>, le test est validé.</li>
</ol>
<h5><a id="user-content-test-166" class="anchor" aria-hidden="true" href="#test-166"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.6.6</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;svg&gt;</code> porteurs d'information dont la description détaillée est fournie au moyen d'un attribut <code>aria-label</code>, <code>aria-labelledby</code> ou <code>aria-describedby</code> ;</li>
<li>Pour chaque élément <code>&lt;svg&gt;</code>, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d'assistance ;</li>
<li>Si c'est le cas pour chaque élément <code>&lt;svg&gt;</code>, le test est validé.</li>
</ol>
<h5><a id="user-content-test-167" class="anchor" aria-hidden="true" href="#test-167"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.6.7</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;canvas&gt;</code> porteurs d'information qui nécessitent une description détaillée ;</li>
<li>Pour chaque élément <code>&lt;canvas&gt;</code>,  vérifier qu'il existe :
<ul>
<li>Soit un attribut WAI-ARIA <code>aria-label</code> contenant l'alternative textuelle et une référence à une description détaillée adjacente ;</li>
<li>Soit un attribut WAI-ARIA <code>aria-labelledby</code> associant un passage de texte faisant office d'alternative textuelle et un autre faisant office de description détaillée ;</li>
<li>Soit un contenu textuel entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code> faisant référence à une description détaillée adjacente à l'image bitmap.</li>
<li>Soit un contenu textuel entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code> faisant office de description détaillée.</li>
<li>Soit un lien ou un bouton adjacent permettant d'accéder à la description détaillée.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque élément <code>&lt;canvas&gt;</code>, le test est validé.</li>
</ol>
<h5><a id="user-content-test-168" class="anchor" aria-hidden="true" href="#test-168"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.6.8</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;canvas&gt;</code> porteurs d'information dont la description détaillée est fournie au moyen d'un attribut <code>aria-label</code>, <code>aria-labelledby</code> ou <code>aria-describedby</code> ;</li>
<li>Pour chaque élément <code>&lt;canvas&gt;</code>, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d'assistance ;</li>
<li>Si c'est le cas pour chaque élément <code>&lt;canvas&gt;</code>, le test est validé.</li>
</ol>
<h5><a id="user-content-test-169" class="anchor" aria-hidden="true" href="#test-169"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.6.9</h5>
<ol>
<li>Retrouver dans le document les images (éléments <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code> avec l'attribut <code>type="image"</code>, <code>&lt;area&gt;</code>, <code>&lt;object&gt;</code>, <code>&lt;embed&gt;</code>, <code>&lt;svg&gt;</code>, <code>&lt;canvas&gt;</code> ou possédant un attribut WAI-ARIA <code>role="img"</code>) porteuses d'information dont la description détaillée utilise un attribut WAI-ARIA <code>aria-describedby</code> ;</li>
<li>Pour chaque image, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d'assistance ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1610" class="anchor" aria-hidden="true" href="#test-1610"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.6.10</h5>
<ol>
<li>Retrouver dans le document les éléments pourvu d'un attribut WAI-ARIA <code>role="img"</code> porteurs d'information qui nécessitent une description détaillée ;</li>
<li>Pour chaque élément <code>role="img"</code>, vérifier qu'il existe :
<ul>
<li>Soit un attribut WAI-ARIA <code>aria-label</code> contenant l'alternative textuelle et une référence à une description détaillée adjacente ;</li>
<li>Soit un attribut WAI-ARIA <code>aria-labelledby</code> associant un passage de texte faisant office d'alternative textuelle et un autre faisant office de description détaillée ;</li>
<li>Soit un attribut WAI-ARIA <code>aria-describedby</code> associant un passage de texte faisant office de description détaillée.</li>
<li>Soit un lien ou un bouton adjacent permettant d'accéder à la description détaillée.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque élément <code>role="img"</code>, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-17-pour-chaque-image-porteuse-dinformation-ayant-une-description-détaillée-cette-description-est-elle-pertinente" class="anchor" aria-hidden="true" href="#critère-17-pour-chaque-image-porteuse-dinformation-ayant-une-description-détaillée-cette-description-est-elle-pertinente"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 1.7 Pour chaque image porteuse d'information ayant une description détaillée, cette description est-elle pertinente ?</h4>
<h5><a id="user-content-test-171" class="anchor" aria-hidden="true" href="#test-171"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.7.1</h5>
<ol>
<li>Retrouver dans le document les images structurées au moyen d’un élément <code>&lt;img&gt;</code> qui possèdent une description détaillée ;</li>
<li>Pour chaque image, vérifier que la description détaillée est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-172" class="anchor" aria-hidden="true" href="#test-172"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.7.2</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;input&gt;</code> pourvus de l’attribut <code>type="image"</code> qui possèdent une description détaillée ;</li>
<li>Pour chaque élément <code>&lt;input&gt;</code> pourvu de l’attribut <code>type="image"</code>, vérifier que la description détaillée est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-173" class="anchor" aria-hidden="true" href="#test-173"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.7.3</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;object&gt;</code> pourvus de l'attribut <code>type="image/…"</code> qui possèdent une description détaillée ;</li>
<li>Pour chaque élément <code>&lt;object&gt;</code> pourvu de l'attribut <code>type="image/…"</code>, vérifier que la description détaillée est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-174" class="anchor" aria-hidden="true" href="#test-174"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.7.4</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;embed&gt;</code> pourvus de l'attribut <code>type="image/…"</code> qui possèdent une description détaillée ;</li>
<li>Pour chaque élément <code>&lt;embed&gt;</code> pourvu de l'attribut <code>type="image/…"</code>, vérifier que la description détaillée est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-175" class="anchor" aria-hidden="true" href="#test-175"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.7.5</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;svg&gt;</code> qui possèdent une description détaillée ;</li>
<li>Pour chaque élément <code>&lt;svg&gt;</code>, vérifier que la description détaillée est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-176" class="anchor" aria-hidden="true" href="#test-176"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.7.6</h5>
<ol>
<li>Retrouver dans le document les éléments <code>&lt;canvas&gt;</code> qui possèdent une description détaillée ;</li>
<li>Pour chaque élément <code>&lt;canvas&gt;</code>, vérifier que la description détaillée est pertinente ;</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-18-chaque-image-texte-porteuse-dinformation-en-labsence-dun-mécanisme-de-remplacement-doit-si-possible-être-remplacée-par-du-texte-stylé-cette-règle-est-elle-respectée" class="anchor" aria-hidden="true" href="#critère-18-chaque-image-texte-porteuse-dinformation-en-labsence-dun-mécanisme-de-remplacement-doit-si-possible-être-remplacée-par-du-texte-stylé-cette-règle-est-elle-respectée"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 1.8 Chaque image texte porteuse d'information, en l'absence d'un mécanisme de remplacement, doit si possible être remplacée par du texte stylé. Cette règle est-elle respectée ?</h4>
<h5><a id="user-content-test-181" class="anchor" aria-hidden="true" href="#test-181"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.8.1</h5>
<ol>
<li>Retrouver dans le document les images texte structurées au moyen d’un élément <code>&lt;img&gt;</code> (ou d’un élément possédant l'attribut WAI-ARIA <code>role="img"</code>) ;</li>
<li>Pour chaque image, vérifier que :
<ul>
<li>Soit il existe un mécanisme de remplacement ;</li>
<li>Soit l'image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-182" class="anchor" aria-hidden="true" href="#test-182"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.8.2</h5>
<ol>
<li>Retrouver dans le document les boutons "images texte" (élément <code>&lt;input&gt;</code> avec l'attribut <code>type="image"</code>) ;</li>
<li>Pour chaque image, vérifier que :
<ul>
<li>Soit il existe un mécanisme de remplacement ;</li>
<li>Soit l'image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-183" class="anchor" aria-hidden="true" href="#test-183"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.8.3</h5>
<ol>
<li>Retrouver dans le document les images texte objet (élément <code>&lt;object&gt;</code> avec l'attribut <code>type="image/…"</code>) ;</li>
<li>Pour chaque image, vérifier que :
<ul>
<li>Soit il existe un mécanisme de remplacement ;</li>
<li>Soit l'image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-184" class="anchor" aria-hidden="true" href="#test-184"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.8.4</h5>
<ol>
<li>Retrouver dans le document les images texte embarquées (élément <code>&lt;embed&gt;</code> avec l'attribut <code>type="image/…"</code>) ;</li>
<li>Pour chaque image, vérifier que :
<ul>
<li>Soit il existe un mécanisme de remplacement ;</li>
<li>Soit l'image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-185" class="anchor" aria-hidden="true" href="#test-185"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.8.5</h5>
<ol>
<li>Retrouver dans le document les images texte bitmap (élément <code>&lt;canvas&gt;</code>) ;</li>
<li>Pour chaque image, vérifier que :
<ul>
<li>Soit il existe un mécanisme de remplacement ;</li>
<li>Soit l'image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-19-chaque-légende-dimage-est-elle-si-nécessaire-correctement-reliée-à-limage-correspondante" class="anchor" aria-hidden="true" href="#critère-19-chaque-légende-dimage-est-elle-si-nécessaire-correctement-reliée-à-limage-correspondante"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 1.9 Chaque légende d'image est-elle, si nécessaire, correctement reliée à l'image correspondante ?</h4>
<h5><a id="user-content-test-191" class="anchor" aria-hidden="true" href="#test-191"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.9.1</h5>
<ol>
<li>Retrouver dans le document les images pourvues d'une légende structurées au moyen d'élément <code>&lt;img&gt;</code>, d'un élément <code>&lt;input&gt;</code> avec l'attribut <code>type="image"</code> ou d'un élément possédant l'attribut WAI-ARIA <code>role="img"</code> ;</li>
<li>Pour chaque image, vérifier que :
<ul>
<li>L'image et sa légende sont contenues dans une balise <code>&lt;figure&gt;</code> ;</li>
<li>La balise <code>&lt;figure&gt;</code> possède une propriété WAI-ARIA <code>role="figure"</code> ou <code>role="group"</code> ;</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>aria-label</code> dont le contenu est identique au contenu de la légende ;</li>
<li>La légende est contenue dans une balise <code>&lt;figcaption&gt;</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-192" class="anchor" aria-hidden="true" href="#test-192"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.9.2</h5>
<ol>
<li>Retrouver dans le document les images objet pourvues d'une légende (élément <code>&lt;object&gt;</code> avec l'attribut <code>type="image/…"</code>) ;</li>
<li>Pour chaque image, vérifier que :
<ul>
<li>L'image et sa légende sont contenues dans une balise <code>&lt;figure&gt;</code> ;</li>
<li>La balise <code>&lt;figure&gt;</code> possède une propriété WAI-ARIA <code>role="figure"</code> ou <code>role="group"</code> ;</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>aria-label</code> dont le contenu est identique au contenu de la légende ;</li>
<li>La légende est contenue dans une balise <code>&lt;figcaption&gt;</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-193" class="anchor" aria-hidden="true" href="#test-193"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.9.3</h5>
<ol>
<li>Retrouver dans le document les images embarquées pourvues d'une légende (élément <code>&lt;embed&gt;</code> avec l'attribut <code>type="image/…"</code>) ;</li>
<li>Pour chaque image, vérifier que :
<ul>
<li>L'image et sa légende sont contenues dans une balise <code>&lt;figure&gt;</code> ;</li>
<li>La balise <code>&lt;figure&gt;</code> possède une propriété WAI-ARIA <code>role="figure"</code> ou <code>role="group"</code> ;</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>aria-label</code> dont le contenu est identique au contenu de la légende ;</li>
<li>La légende est contenue dans une balise <code>&lt;figcaption&gt;</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-194" class="anchor" aria-hidden="true" href="#test-194"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.9.4</h5>
<ol>
<li>Retrouver dans le document les images vectorielles pourvues d'une légende (élément <code>&lt;svg&gt;</code>) ;</li>
<li>Pour chaque image, vérifier que :
<ul>
<li>L'image et sa légende sont contenues dans une balise <code>&lt;figure&gt;</code> ;</li>
<li>La balise <code>&lt;figure&gt;</code> possède une propriété WAI-ARIA <code>role="figure"</code> ou <code>role="group"</code> ;</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>aria-label</code> dont le contenu est identique au contenu de la légende ;</li>
<li>La légende est contenue dans une balise <code>&lt;figcaption&gt;</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-195" class="anchor" aria-hidden="true" href="#test-195"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 1.9.5</h5>
<ol>
<li>Retrouver dans le document les images bitmap (élément <code>&lt;canvas&gt;</code>) ;</li>
<li>Pour chaque image, vérifier que :
<ul>
<li>L'image et sa légende sont contenues dans une balise <code>&lt;figure&gt;</code> ;</li>
<li>La balise <code>&lt;figure&gt;</code> possède une propriété WAI-ARIA <code>role="figure"</code> ou <code>role="group"</code> ;</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>aria-label</code> dont le contenu est identique au contenu de la légende ;</li>
<li>La légende est contenue dans une balise <code>&lt;figcaption&gt;</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque image, le test est validé.</li>
</ol>
<h3><a id="user-content-cadres" class="anchor" aria-hidden="true" href="#cadres"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Cadres</h3>
<h4><a id="user-content-critère-21-chaque-cadre-a-t-il-un-titre-de-cadre" class="anchor" aria-hidden="true" href="#critère-21-chaque-cadre-a-t-il-un-titre-de-cadre"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 2.1 Chaque cadre a-t-il un titre de cadre ?</h4>
<h5><a id="user-content-test-211" class="anchor" aria-hidden="true" href="#test-211"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 2.1.1</h5>
<ol>
<li>Retrouver dans le document les cadres (élément <code>&lt;iframe&gt;</code> ou <code>&lt;frame&gt;</code>) ;</li>
<li>Pour chaque cadre, vérifier qu'il possède un attribut <code>title</code> ;</li>
<li>Si c'est le cas pour chaque cadre, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-22-pour-chaque-cadre-ayant-un-titre-de-cadre-ce-titre-de-cadre-est-il-pertinent" class="anchor" aria-hidden="true" href="#critère-22-pour-chaque-cadre-ayant-un-titre-de-cadre-ce-titre-de-cadre-est-il-pertinent"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 2.2 Pour chaque cadre ayant un titre de cadre, ce titre de cadre est-il pertinent ?</h4>
<h5><a id="user-content-test-221" class="anchor" aria-hidden="true" href="#test-221"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 2.2.1</h5>
<ol>
<li>Retrouver dans le document les cadres (élément <code>&lt;iframe&gt;</code> ou <code>&lt;frame&gt;</code>) ;</li>
<li>Pour chaque cadre pourvu d'un attribut <code>title</code>, vérifier que son contenu est pertinent ;</li>
<li>Si c'est le cas pour chaque cadre, le test est validé.</li>
</ol>
<h3><a id="user-content-couleurs" class="anchor" aria-hidden="true" href="#couleurs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Couleurs</h3>
<h4><a id="user-content-critère-31-dans-chaque-page-web-linformation-ne-doit-pas-être-donnée-uniquement-par-la-couleur-cette-règle-est-elle-respectée" class="anchor" aria-hidden="true" href="#critère-31-dans-chaque-page-web-linformation-ne-doit-pas-être-donnée-uniquement-par-la-couleur-cette-règle-est-elle-respectée"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 3.1 Dans chaque page web, l'information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?</h4>
<h5><a id="user-content-test-311" class="anchor" aria-hidden="true" href="#test-311"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.1.1</h5>
<ol>
<li>Retrouver dans le document les informations données par la couleur dans un mot ou un ensemble de mots ;</li>
<li>Pour chacune de ces informations, vérifier qu'il existe un autre moyen de récupérer cette information (présence d'un attribut <code>title</code>, d'une icône ou d'un effet graphique de forme ou de position, un effet typographique...) ;</li>
<li>Si c'est le cas pour chaque information, le test est validé.</li>
</ol>
<h5><a id="user-content-test-312" class="anchor" aria-hidden="true" href="#test-312"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.1.2</h5>
<ol>
<li>Retrouver dans le document les informations données par la couleur dans un texte ;</li>
<li>Pour chacune de ces informations, vérifier qu'il existe un autre moyen de récupérer cette information (présence d'un attribut <code>title</code>, d'une icône ou d'un effet graphique de forme ou de position, un effet typographique...) ;</li>
<li>Si c'est le cas pour chaque information, le test est validé.</li>
</ol>
<h5><a id="user-content-test-313" class="anchor" aria-hidden="true" href="#test-313"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.1.3</h5>
<ol>
<li>Retrouver dans le document les informations données par la couleur dans une image ;</li>
<li>Pour chacune de ces informations, vérifier qu'il existe un autre moyen de récupérer cette information (présence d'un attribut <code>title</code>, d'une icône ou d'un effet graphique de forme ou de position, un effet typographique...) ;</li>
<li>Si c'est le cas pour chaque information, le test est validé.</li>
</ol>
<h5><a id="user-content-test-314" class="anchor" aria-hidden="true" href="#test-314"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.1.4</h5>
<ol>
<li>Retrouver dans le document les informations données par la couleur dans une propriété CSS ;</li>
<li>Pour chacune de ces informations, vérifier qu'il existe un autre moyen de récupérer cette information (présence d'un attribut <code>title</code>, d'une icône ou d'un effet graphique de forme ou de position, un effet typographique...) ;</li>
<li>Si c'est le cas pour chaque information, le test est validé.</li>
</ol>
<h5><a id="user-content-test-315" class="anchor" aria-hidden="true" href="#test-315"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.1.5</h5>
<ol>
<li>Retrouver dans le document les informations données par la couleur dans un média temporel ;</li>
<li>Pour chacune de ces informations, vérifier qu'il existe un autre moyen de récupérer cette information (présence d'un attribut <code>title</code>, d'une icône ou d'un effet graphique de forme ou de position, un effet typographique...) ;</li>
<li>Si c'est le cas pour chaque information, le test est validé.</li>
</ol>
<h5><a id="user-content-test-316" class="anchor" aria-hidden="true" href="#test-316"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.1.6</h5>
<ol>
<li>Retrouver dans le document les informations données par la couleur dans un média non temporel ;</li>
<li>Pour chacune de ces informations, vérifier qu'il existe un autre moyen de récupérer cette information (présence d'un attribut <code>title</code>, d'une icône ou d'un effet graphique de forme ou de position, un effet typographique...) ;</li>
<li>Si c'est le cas pour chaque information, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-32-dans-chaque-page-web-le-contraste-entre-la-couleur-du-texte-et-la-couleur-de-son-arrière-plan-est-il-suffisamment-élevé-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-32-dans-chaque-page-web-le-contraste-entre-la-couleur-du-texte-et-la-couleur-de-son-arrière-plan-est-il-suffisamment-élevé-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 3.2 Dans chaque page web, le contraste entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-321" class="anchor" aria-hidden="true" href="#test-321"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.2.1</h5>
<ol>
<li>Retrouver dans le document les textes et les textes en image sans effet de graisse d'une taille restituée inférieure à 24px qui pourraient poser des problèmes de contraste ;</li>
<li>Pour chacun de ces textes, vérifier que :
<ul>
<li>Soit le rapport de contraste entre le texte et son arrière-plan est de 4.5:1, au moins ;</li>
<li>Soit un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 4.5:1, au moins.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque texte, le test est validé.</li>
</ol>
<h5><a id="user-content-test-322" class="anchor" aria-hidden="true" href="#test-322"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.2.2</h5>
<ol>
<li>Retrouver dans le document les textes et les textes en image en gras d'une taille restituée inférieure à 18,5px qui pourraient poser des problèmes de contraste ;</li>
<li>Pour chacun de ces textes, vérifier que :
<ul>
<li>Soit le rapport de contraste entre le texte et son arrière-plan est de 4.5:1, au moins ;</li>
<li>Soit un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 4.5:1, au moins.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque texte, le test est validé.</li>
</ol>
<h5><a id="user-content-test-323" class="anchor" aria-hidden="true" href="#test-323"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.2.3</h5>
<ol>
<li>Retrouver dans le document les textes et les textes en image sans effet de graisse d'une taille restituée supérieure ou égale à 24px qui pourraient poser des problèmes de contraste ;</li>
<li>Pour chacun de ces textes, vérifier que :
<ul>
<li>Soit le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins ;</li>
<li>Soit un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 3:1, au moins.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque texte, le test est validé.</li>
</ol>
<h5><a id="user-content-test-324" class="anchor" aria-hidden="true" href="#test-324"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.2.4</h5>
<ol>
<li>Retrouver dans le document les textes et les textes en image en gras d'une taille restituée supérieure ou égale à 18,5px qui pourraient poser des problèmes de contraste ;</li>
<li>Pour chacun de ces textes, vérifier que :
<ul>
<li>Soit le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins ;</li>
<li>Soit un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 3:1, au moins.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque texte, le test est validé.</li>
</ol>
<h5><a id="user-content-test-325" class="anchor" aria-hidden="true" href="#test-325"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.2.5</h5>
<ol>
<li>Retrouver dans le document les mécanismes qui permettent d'afficher un rapport de contraste conforme ;</li>
<li>Pour chacun de ces mécanismes, vérifier que le rapport de contraste entre le texte et la couleur d’arrière-plan est suffisamment élevé ;</li>
<li>Si c'est le cas pour chaque mécanisme, le test est validé.</li>
</ol>
<p>Note : le critère est non applicable dans les situations où :</p>
<ul>
<li>Le texte fait partie d'un logo ou d'un nom de marque d'un organisme ou d'une société ;</li>
<li>Le texte ou l'image de texte est purement décoratif ;</li>
<li>Le texte fait partie d'une image véhiculant une information mais le texte lui-même n'apporte aucune information essentielle ;</li>
<li>Le texte ou l'image de texte fait partie d'un élément d'interface sur lequel aucune action n'est possible (par exemple un bouton avec l'attribut <code>disabled</code>).</li>
</ul>
<h4><a id="user-content-critère-33-dans-chaque-page-web-les-couleurs-utilisées-dans-les-composants-dinterface-ou-les-éléments-graphiques-porteurs-dinformations-sont-elles-suffisamment-contrastées-hors-cas-particuliers-" class="anchor" aria-hidden="true" href="#critère-33-dans-chaque-page-web-les-couleurs-utilisées-dans-les-composants-dinterface-ou-les-éléments-graphiques-porteurs-dinformations-sont-elles-suffisamment-contrastées-hors-cas-particuliers-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 3.3 Dans chaque page web, les couleurs utilisées dans les composants d'interface ou les éléments graphiques porteurs d'informations sont-elles suffisamment contrastées (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-331" class="anchor" aria-hidden="true" href="#test-331"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.3.1</h5>
<ol>
<li>Retrouver dans le document les composants d'interface qui pourraient poser des problèmes de contraste ;</li>
<li>Pour chacun de ces composants, vérifier que :
<ul>
<li>Soit le rapport de contraste entre les couleurs du composant dans ses différents états et la couleur d'arrière-plan contiguë est de 3:1, au moins ;</li>
<li>Soit un mécanisme permet à l'utilisateur d'afficher le composant avec un rapport de contraste de 3:1, au moins.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque composant, le test est validé.</li>
</ol>
<h5><a id="user-content-test-332" class="anchor" aria-hidden="true" href="#test-332"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.3.2</h5>
<ol>
<li>Retrouver dans le document les éléments graphiques qui pourraient poser des problèmes de contraste ;</li>
<li>Pour chacun de ces éléments, vérifier que :
<ul>
<li>Soit le rapport de contraste entre les couleurs de l'élément graphique nécessaires à sa compréhension et la couleur d'arrière-plan contiguë est de 3:1, au moins ;</li>
<li>Soit un mécanisme permet à l'utilisateur d'afficher l'élément graphique avec un rapport de contraste de 3:1, au moins.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque composant, le test est validé.</li>
</ol>
<h5><a id="user-content-test-333" class="anchor" aria-hidden="true" href="#test-333"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.3.3</h5>
<ol>
<li>Retrouver dans le document les éléments graphiques qui pourraient poser des problèmes de contraste ;</li>
<li>Pour chacun de ces éléments, vérifier que :
<ul>
<li>Soit le rapport de contraste des différentes couleurs contiguës de l'élément graphique entre elles, lorsqu'elles sont nécessaires à sa compréhension, est de 3:1, au moins ;</li>
<li>Soit un mécanisme permet à l'utilisateur d'afficher l'élément graphique avec un rapport de contraste de 3:1, au moins.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque élément graphique, le test est validé.</li>
</ol>
<h5><a id="user-content-test-334" class="anchor" aria-hidden="true" href="#test-334"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 3.3.4</h5>
<ol>
<li>Retrouver dans le document les mécanismes qui permettent d'afficher un rapport de contraste conforme ;</li>
<li>Pour chacun de ces mécanismes, vérifier que le rapport de contraste entre les couleurs du composant ou des éléments graphiques porteurs d’informations qui le composent est suffisamment élevé ;</li>
<li>Si c'est le cas pour chaque mécanisme, le test est validé.</li>
</ol>
<p>Note : le critère est non applicable dans ces situations :</p>
<ul>
<li>Composant d'interface inactif (par exemple, un bouton avec un attribut <code>disabled</code>) sur lequel aucune action n'est possible ;</li>
<li>Composant d'interface pour lequel l'apparence est gérée par les styles natifs du navigateur sans aucune modification par l'auteur (par exemple, le style au focus natif dans Chrome ou Firefox) ;</li>
<li>Composant d'interface pour lequel la couleur n'est pas nécessaire pour identifier le composant ou son état (par exemple, un groupe de liens faisant office de navigation dont la position dans la page, la taille et la couleur du texte permettent de comprendre qu'il s'agit de liens même si la couleur du soulignement des liens avec le fond blanc n'a pas un ratio de 3:1 et que le texte lui a un ratio de 4.5:1) ;</li>
<li>Élément graphique ou parties d'élément graphique non porteur d'information ou ayant une alternative (description longue, informations identiques visibles dans la page) ;</li>
<li>Élément graphique ou parties d'élément graphique faisant partie d'un logo ou du nom de marque d'un organisme ou d'une société ;</li>
<li>Élément graphique ou parties d'élément graphique dont la présentation est essentielle à l'information véhiculée (exemple drapeaux, logotypes, photos de personnes ou de scènes, captures d'écran, diagrammes médicaux, carte de chaleurs) ;</li>
<li>Élément graphique ou parties d'élément graphique dynamiques dont le contraste au survol / focus est suffisant.</li>
</ul>
<h3><a id="user-content-multimédia" class="anchor" aria-hidden="true" href="#multimédia"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Multimédia</h3>
<h4><a id="user-content-critère-41-chaque-média-temporel-pré-enregistré-a-t-il-si-nécessaire-une-transcription-textuelle-ou-une-audiodescription-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-41-chaque-média-temporel-pré-enregistré-a-t-il-si-nécessaire-une-transcription-textuelle-ou-une-audiodescription-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 4.1 Chaque média temporel pré-enregistré a-t-il, si nécessaire, une transcription textuelle ou une audiodescription (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-411" class="anchor" aria-hidden="true" href="#test-411"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.1.1</h5>
<ol>
<li>Retrouver dans le document les médias temporels (éléments <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code> ou <code>&lt;object&gt;</code>) seulement audio qui nécessitent une transcription textuelle ;</li>
<li>Pour chaque média temporel seulement audio, vérifier la présence d'une transcription textuelle :
<ul>
<li>Soit accessible au moyen d'un lien adjacent (une URL ou une ancre) ;</li>
<li>Soit adjacente clairement identifiable.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel, le test est validé.</li>
</ol>
<h5><a id="user-content-test-412" class="anchor" aria-hidden="true" href="#test-412"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.1.2</h5>
<ol>
<li>Retrouver dans le document les médias temporels (éléments <code>&lt;video&gt;</code> ou <code>&lt;object&gt;</code>) seulement vidéo qui nécessitent une transcription textuelle ;</li>
<li>Pour chaque média temporel seulement vidéo, vérifier la présence :
<ul>
<li>Soit d'une version alternative audio seulement accessible au moyen d'un lien adjacent (une URL ou une ancre) ;</li>
<li>Soit d'une version alternative audio seulement adjacente ;</li>
<li>Soit d'une transcription textuelle accessible au moyen d'un lien adjacent (une URL ou d'une ancre) ;</li>
<li>Soit d'une transcription textuelle adjacente clairement identifiable ;</li>
<li>Soit d'une audiodescription synchronisée ;</li>
<li>Soit d'une version alternative avec une audiodescription synchronisée accessible au moyen d'un lien adjacent (une URL ou une ancre).</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel, le test est validé.</li>
</ol>
<h5><a id="user-content-test-413" class="anchor" aria-hidden="true" href="#test-413"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.1.3</h5>
<ol>
<li>Retrouver dans le document les médias temporels (éléments <code>&lt;video&gt;</code> ou <code>&lt;object&gt;</code>) synchronisés qui nécessitent une transcription textuelle ;</li>
<li>Pour chaque média temporel synchronisé, vérifier la présence :
<ul>
<li>Soit d'une transcription textuelle accessible au moyen d'un lien adjacent (une URL ou d'une ancre) ;</li>
<li>Soit d'une transcription textuelle adjacente clairement identifiable ;</li>
<li>Soit d'une audiodescription synchronisée ;</li>
<li>Soit d'une version alternative avec une audiodescription synchronisée accessible au moyen d'un lien adjacent (une URL ou une ancre).</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel, le test est validé.</li>
</ol>
<p>Note : le critère est non applicable dans les situations où :</p>
<ul>
<li>Le média temporel est utilisé à des fins décoratives (c'est-à-dire qu'il n'apporte aucune information) ;</li>
<li>Le média temporel est lui-même une alternative à un contenu de la page (une vidéo en langue des signes ou la vocalisation d'un texte, par exemple) ;</li>
<li>Le média temporel est utilisé pour accéder à une version agrandie ;</li>
<li>Le média temporel est utilisé comme un CAPTCHA ;</li>
<li>Le média temporel fait partie d'un test qui deviendrait inutile si la transcription textuelle, les sous-titres synchronisés ou l'audiodescription étaient communiqués ;</li>
<li>Pour les services de l’État, les collectivités territoriales et leurs établissements : si le média temporel a été publié entre le 23 septembre 2019 et le 23 septembre 2020 sur un site internet, intranet ou extranet créé depuis le 23 septembre 2018, il est exempté de l’obligation d’accessibilité ;</li>
<li>Pour les personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si le média temporel a été publié avant le 23 septembre 2020, il est exempté de l’obligation d’accessibilité.</li>
</ul>
<h4><a id="user-content-critère-42-pour-chaque-média-temporel-pré-enregistré-ayant-une-transcription-textuelle-ou-une-audiodescription-synchronisée-celles-ci-sont-elles-pertinentes-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-42-pour-chaque-média-temporel-pré-enregistré-ayant-une-transcription-textuelle-ou-une-audiodescription-synchronisée-celles-ci-sont-elles-pertinentes-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 4.2 Pour chaque média temporel pré-enregistré ayant une transcription textuelle ou une audiodescription synchronisée, celles-ci sont-elles pertinentes (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-421" class="anchor" aria-hidden="true" href="#test-421"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.2.1</h5>
<ol>
<li>Retrouver dans le document les médias temporels pré-enregistrés seulement audio qui possèdent une transcription textuelle ;</li>
<li>Pour chaque média temporel seulement audio, vérifier que transcription textuelle est pertinente ;</li>
<li>Si c'est le cas pour chaque média temporel, le test est validé.</li>
</ol>
<h5><a id="user-content-test-422" class="anchor" aria-hidden="true" href="#test-422"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.2.2</h5>
<ol>
<li>Retrouver dans le document les médias temporels pré-enregistrés seulement vidéo qui possèdent une transcription textuelle ;</li>
<li>Pour chaque média temporel seulement vidéo, vérifier la pertinence :
<ul>
<li>Soit de la transcription textuelle ;</li>
<li>Soit de l'audiodescription synchronisée ;</li>
<li>Soit de l'audiodescription synchronisée de la version alternative ;</li>
<li>Soit de la version alternative audio seulement.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel, le test est validé.</li>
</ol>
<h5><a id="user-content-test-423" class="anchor" aria-hidden="true" href="#test-423"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.2.3</h5>
<ol>
<li>Retrouver dans le document les médias temporels pré-enregistrés synchronisés ;</li>
<li>Pour chaque média temporel synchronisé, vérifier la pertinence :
<ul>
<li>Soit de la transcription textuelle ;</li>
<li>Soit de l'audiodescription synchronisée ;</li>
<li>Soit de l'audiodescription synchronisée de la version alternative.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-43-chaque-média-temporel-synchronisé-pré-enregistré-a-t-il-si-nécessaire-des-sous-titres-synchronisés-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-43-chaque-média-temporel-synchronisé-pré-enregistré-a-t-il-si-nécessaire-des-sous-titres-synchronisés-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 4.3 Chaque média temporel synchronisé pré-enregistré a-t-il, si nécessaire, des sous-titres synchronisés (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-431" class="anchor" aria-hidden="true" href="#test-431"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.3.1</h5>
<ol>
<li>Retrouver dans le document les médias temporels pré-enregistrés synchronisés ;</li>
<li>Pour chaque média temporel synchronisé, vérifier la présence :
<ul>
<li>Soit de sous-titres synchronisés ;</li>
<li>Soit d'une version alternative possédant des sous-titres synchronisés accessible au moyen d'un lien ou d'un bouton adjacent.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel, le test est validé.</li>
</ol>
<h5><a id="user-content-test-432" class="anchor" aria-hidden="true" href="#test-432"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.3.2</h5>
<ol>
<li>Retrouver dans le document les médias temporels synchronisés possédant des sous-titres synchronisés au moyen d'un élément <code>&lt;track&gt;</code> ;</li>
<li>Pour chaque média temporel synchronisé, vérifier que la balise <code>&lt;track&gt;</code> possède un attribut <code>kind="caption"</code> ;</li>
<li>Si c'est le cas pour chaque média temporel synchronisé, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-44-pour-chaque-média-temporel-synchronisé-pré-enregistré-ayant-des-sous-titres-synchronisés-ces-sous-titres-sont-ils-pertinents" class="anchor" aria-hidden="true" href="#critère-44-pour-chaque-média-temporel-synchronisé-pré-enregistré-ayant-des-sous-titres-synchronisés-ces-sous-titres-sont-ils-pertinents"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 4.4 Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents ?</h4>
<h5><a id="user-content-test-441" class="anchor" aria-hidden="true" href="#test-441"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.4.1</h5>
<ol>
<li>Retrouver dans le document les médias temporels synchronisés possédant des sous-titres synchronisés ;</li>
<li>Pour chaque média temporel synchronisé, vérifier que les sous-titres sont :
<ul>
<li>Pertinents (toutes les informations sonores importantes sont présentes, les dialogues notamment) ;</li>
<li>Et correctement synchronisés.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel synchronisé, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-45-chaque-média-temporel-pré-enregistré-a-t-il-si-nécessaire-une-audiodescription-synchronisée-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-45-chaque-média-temporel-pré-enregistré-a-t-il-si-nécessaire-une-audiodescription-synchronisée-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 4.5 Chaque média temporel pré-enregistré a-t-il, si nécessaire, une audiodescription synchronisée (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-451" class="anchor" aria-hidden="true" href="#test-451"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.5.1</h5>
<ol>
<li>Retrouver dans le document les médias temporels pré-enregistrés seulement vidéo qui nécessitent une audiodescription ;</li>
<li>Pour chaque média temporel seulement vidéo, vérifier la présence :
<ul>
<li>Soit d'une audiodescription synchronisée ;</li>
<li>Soit d'une version alternative avec une audiodescription synchronisée.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel seulement vidéo, le test est validé.</li>
</ol>
<h5><a id="user-content-test-452" class="anchor" aria-hidden="true" href="#test-452"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.5.2</h5>
<ol>
<li>Retrouver dans le document les médias temporels pré-enregistrés synchronisés qui nécessitent une audiodescription ;</li>
<li>Pour chaque média temporel synchronisé, vérifier la présence :
<ul>
<li>Soit d'une audiodescription synchronisée ;</li>
<li>Soit d'une version alternative avec une audiodescription synchronisée.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel synchronisé, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-46-pour-chaque-média-temporel-pré-enregistré-ayant-une-audiodescription-synchronisée-celle-ci-est-elle-pertinente" class="anchor" aria-hidden="true" href="#critère-46-pour-chaque-média-temporel-pré-enregistré-ayant-une-audiodescription-synchronisée-celle-ci-est-elle-pertinente"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 4.6 Pour chaque média temporel pré-enregistré ayant une audiodescription synchronisée, celle-ci est-elle pertinente ?</h4>
<h5><a id="user-content-test-461" class="anchor" aria-hidden="true" href="#test-461"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.6.1</h5>
<ol>
<li>Retrouver dans le document les médias temporels seulement vidéo qui possèdent une audiodescription ;</li>
<li>Pour chaque média temporel, vérifier que l'audiodescription synchronisée est pertinente (toutes les informations visuelles qu'il est possible de vocaliser dans les blancs de la bande son principale sont présentes, les textes incrustés notamment) ;</li>
<li>Si c'est le cas pour chaque média temporel seulement vidéo, le test est validé.</li>
</ol>
<h5><a id="user-content-test-462" class="anchor" aria-hidden="true" href="#test-462"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.6.2</h5>
<ol>
<li>Retrouver dans le document les médias temporels synchronisés qui possèdent une audiodescription ;</li>
<li>Pour chaque média temporel, vérifier que l'audiodescription synchronisée est pertinente (toutes les informations visuelles qu'il est possible de vocaliser dans les blancs de la bande son principale sont présentes, les textes incrustés notamment) ;</li>
<li>Si c'est le cas pour chaque média temporel synchronisé, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-47-chaque-média-temporel-est-il-clairement-identifiable-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-47-chaque-média-temporel-est-il-clairement-identifiable-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 4.7 Chaque média temporel est-il clairement identifiable (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-471" class="anchor" aria-hidden="true" href="#test-471"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.7.1</h5>
<ol>
<li>Retrouver dans le document les médias temporels pré-enregistrés seulement vidéo, audio ou synchronisés ;</li>
<li>Pour chaque média temporel, vérifier que :
<ul>
<li>Un passage de texte (un titre ou un paragraphe, par exemple) qui précède ou suit immédiatement le média temporel, permet de l'identifier ;</li>
<li>Et le passage de texte est situé à l'extérieur du lecteur de contenu multimédia si ce dernier fait appel à la technologie Flash.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-48-chaque-média-non-temporel-a-t-il-si-nécessaire-une-alternative-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-48-chaque-média-non-temporel-a-t-il-si-nécessaire-une-alternative-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 4.8 Chaque média non temporel a-t-il, si nécessaire, une alternative (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-481" class="anchor" aria-hidden="true" href="#test-481"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.8.1</h5>
<ol>
<li>Retrouver dans le document les médias non temporels ;</li>
<li>Pour chaque média non temporel, vérifier qu'un lien ou un bouton adjacent, clairement identifiable :
<ul>
<li>Soit contient l'adresse (url) d'une page contenant une alternative ;</li>
<li>Soit permet d'accéder à une alternative dans la page.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média non temporel, le test est validé.</li>
</ol>
<h5><a id="user-content-test-482" class="anchor" aria-hidden="true" href="#test-482"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.8.2</h5>
<ol>
<li>Retrouver dans le document les médias non temporels associés à une alternative ;</li>
<li>Pour chaque média non temporel, vérifier que :
<ul>
<li>La page référencée par le lien ou le bouton adjacent est accessible ;</li>
<li>L'alternative dans la page, référencée par le lien ou le bouton adjacent, est accessible.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média non temporel, le test est validé.</li>
</ol>
<p>Note : le critère est non applicable dans les situations où :</p>
<ul>
<li>Le média non temporel est utilisé à des fins décoratives (c'est-à-dire qu'il n'apporte aucune information) ;</li>
<li>Le média non temporel est diffusé dans un environnement maîtrisé ;</li>
<li>Le média non temporel est inséré via JavaScript en vérifiant la présence et la version du plug-in, en remplacement d'un contenu alternatif déjà présent.</li>
</ul>
<h4><a id="user-content-critère-49-pour-chaque-média-non-temporel-ayant-une-alternative-cette-alternative-est-elle-pertinente" class="anchor" aria-hidden="true" href="#critère-49-pour-chaque-média-non-temporel-ayant-une-alternative-cette-alternative-est-elle-pertinente"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 4.9 Pour chaque média non temporel ayant une alternative, cette alternative est-elle pertinente ?</h4>
<h5><a id="user-content-test-491" class="anchor" aria-hidden="true" href="#test-491"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.9.1</h5>
<ol>
<li>Retrouver dans le document les médias non temporels associés à une alternative ;</li>
<li>Pour chaque média non temporel, vérifier que l'alternative est pertinente (elle permet d'accéder au même contenu et à des fonctionnalités similaires) ;</li>
<li>Si c'est le cas pour chaque média non temporel, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-410-chaque-son-déclenché-automatiquement-est-il-contrôlable-par-lutilisateur" class="anchor" aria-hidden="true" href="#critère-410-chaque-son-déclenché-automatiquement-est-il-contrôlable-par-lutilisateur"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 4.10 Chaque son déclenché automatiquement est-il contrôlable par l'utilisateur ?</h4>
<h5><a id="user-content-test-4101" class="anchor" aria-hidden="true" href="#test-4101"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.10.1</h5>
<ol>
<li>Au chargement du document, si un son se déclenche automatiquement, vérifier que :
<ul>
<li>Soit la séquence sonore a une durée inférieure ou égale à 3 secondes ;</li>
<li>Soit un dispositif (un bouton par exemple), sur l'élément ayant déclenché le son (voir note), ou dans la page, permet de le stopper ;</li>
<li>Soit le volume de la séquence peut être contrôlé par l'utilisateur, indépendamment du contrôle de volume du système.</li>
</ul>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<p>Note : les éléments suivants sont susceptibles de déclencher des sons au chargement de la page : éléments  <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;object&gt;</code>, <code>&lt;embed&gt;</code>, <code>&lt;bgsound&gt;</code> ou un code JavaScript (utilisation de la <code>Web Audio API</code>, par exemple).</p>
<h4><a id="user-content-critère-411-la-consultation-de-chaque-média-temporel-est-elle-si-nécessaire-contrôlable-par-le-clavier-et-tout-dispositif-de-pointage" class="anchor" aria-hidden="true" href="#critère-411-la-consultation-de-chaque-média-temporel-est-elle-si-nécessaire-contrôlable-par-le-clavier-et-tout-dispositif-de-pointage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 4.11 La consultation de chaque média temporel est-elle, si nécessaire, contrôlable par le clavier et tout dispositif de pointage ?</h4>
<h5><a id="user-content-test-4111" class="anchor" aria-hidden="true" href="#test-4111"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.11.1</h5>
<ol>
<li>Retrouver dans le document les médias temporels ;</li>
<li>Pour chaque média temporel, vérifier la présence des fonctionnalités obligatoires de contrôle de la consultation :
<ul>
<li>Au minimum : lecture, pause ou stop ;</li>
<li>Si le média a du son, il doit avoir une fonctionnalité d'activation / désactivation du son ;</li>
<li>Si le média a des sous-titres, il doit avoir une fonctionnalité de contrôle de l'apparition/disparition des sous-titres ;</li>
<li>Si le média a une audiodescription, il doit avoir une fonctionnalité de contrôle de l'apparition/disparition de l'audiodescription.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel, le test est validé.</li>
</ol>
<h5><a id="user-content-test-4112" class="anchor" aria-hidden="true" href="#test-4112"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.11.2</h5>
<ol>
<li>Retrouver dans le document les médias temporels pourvus de fonctionnalités de contrôle ;</li>
<li>Pour chaque média temporel, vérifier que :
<ul>
<li>Soit la fonctionnalité est accessible par le clavier et tout dispositif de pointage ;</li>
<li>Soit une fonctionnalité accessible par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel, le test est validé.</li>
</ol>
<h5><a id="user-content-test-4113" class="anchor" aria-hidden="true" href="#test-4113"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.11.3</h5>
<ol>
<li>Retrouver dans le document les médias temporels pourvus de fonctionnalités de contrôle ;</li>
<li>Pour chaque média temporel, vérifier que :
<ul>
<li>Soit la fonctionnalité est activable par le clavier et tout dispositif de pointage ;</li>
<li>Soit une fonctionnalité activable par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-412-la-consultation-de-chaque-média-non-temporel-est-elle-contrôlable-par-le-clavier-et-tout-dispositif-de-pointage" class="anchor" aria-hidden="true" href="#critère-412-la-consultation-de-chaque-média-non-temporel-est-elle-contrôlable-par-le-clavier-et-tout-dispositif-de-pointage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 4.12 La consultation de chaque média non temporel est-elle contrôlable par le clavier et tout dispositif de pointage ?</h4>
<h5><a id="user-content-test-4121" class="anchor" aria-hidden="true" href="#test-4121"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.12.1</h5>
<ol>
<li>Retrouver dans le document les médias non temporels pourvus de fonctionnalités de contrôle ;</li>
<li>Pour chaque média non temporel, vérifier que :
<ul>
<li>Soit la fonctionnalité est accessible par le clavier et tout dispositif de pointage ;</li>
<li>Soit une fonctionnalité accessible par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média non temporel, le test est validé.</li>
</ol>
<h5><a id="user-content-test-4122" class="anchor" aria-hidden="true" href="#test-4122"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.12.2</h5>
<ol>
<li>Retrouver dans le document les médias non temporels pourvus de fonctionnalités de contrôle ;</li>
<li>Pour chaque média non temporel, vérifier que :
<ul>
<li>Soit la fonctionnalité est activable par le clavier et tout dispositif de pointage ;</li>
<li>Soit une fonctionnalité activable par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média non temporel, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-413-chaque-média-temporel-et-non-temporel-est-il-compatible-avec-les-technologies-dassistance-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-413-chaque-média-temporel-et-non-temporel-est-il-compatible-avec-les-technologies-dassistance-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 4.13 Chaque média temporel et non temporel est-il compatible avec les technologies d'assistance (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-4131" class="anchor" aria-hidden="true" href="#test-4131"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.13.1</h5>
<ol>
<li>Retrouver dans le document les médias temporels et non temporels ;</li>
<li>Pour chaque média, vérifier que :
<ul>
<li>Soit le nom, le rôle, la valeur, le paramétrage et les changements d'états des composants d'interfaces sont accessibles aux technologies d'assistance via une API d'accessibilité (par exemple, les zones mises à jour dynamiquement dans un lecteur vidéo sont correctement restituées) ;</li>
<li>Soit une alternative compatible avec une API d'accessibilité permet d'accéder aux mêmes fonctionnalités.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel ou non temporel, le test est validé.</li>
</ol>
<h5><a id="user-content-test-4132" class="anchor" aria-hidden="true" href="#test-4132"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 4.13.2</h5>
<ol>
<li>Retrouver dans le document les médias temporels et non temporels qui possèdent une alternative compatible avec les technologies d'assistance ;</li>
<li>Pour chaque média, vérifier que :
<ul>
<li>Soit l'alternative est adjacente au média temporel ou non temporel ;</li>
<li>Soit l'alternative est accessible au moyen d'un lien ou d'un bouton adjacent ;</li>
<li>Soit un mécanisme permet de remplacer le média temporel ou non temporel par son alternative.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque média temporel ou non temporel, le test est validé.</li>
</ol>
<h3><a id="user-content-tableaux" class="anchor" aria-hidden="true" href="#tableaux"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Tableaux</h3>
<h4><a id="user-content-critère-51-chaque-tableau-de-données-complexe-a-t-il-un-résumé" class="anchor" aria-hidden="true" href="#critère-51-chaque-tableau-de-données-complexe-a-t-il-un-résumé"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 5.1 Chaque tableau de données complexe a-t-il un résumé ?</h4>
<h5><a id="user-content-test-511" class="anchor" aria-hidden="true" href="#test-511"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 5.1.1</h5>
<ol>
<li>Retrouver dans le document les tableaux de données complexes (tableau de données - élément <code>&lt;table&gt;</code> ou élément pourvu d'un attribut WAI-ARIA <code>role="table"</code> - contenant des en-têtes qui ne sont pas répartis uniquement sur la première ligne et/ou la première colonne de la grille ou dont la portée n'est pas valable pour l'ensemble de la colonne ou de la ligne) ;</li>
<li>Pour chaque tableau de données complexe, vérifier qu'un passage de texte permettant de comprendre la nature et la structure du tableau, est présent :
<ul>
<li>Soit dans l'élément <code>&lt;caption&gt;</code> ;</li>
<li>Soit dans l'attribut <code>summary</code> de l'élément <code>&lt;table&gt;</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque tableau de données complexe, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-52-pour-chaque-tableau-de-données-complexe-ayant-un-résumé-celui-ci-est-il-pertinent" class="anchor" aria-hidden="true" href="#critère-52-pour-chaque-tableau-de-données-complexe-ayant-un-résumé-celui-ci-est-il-pertinent"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 5.2 Pour chaque tableau de données complexe ayant un résumé, celui-ci est-il pertinent ?</h4>
<h5><a id="user-content-test-521" class="anchor" aria-hidden="true" href="#test-521"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 5.2.1</h5>
<ol>
<li>Retrouver dans le document les résumés de tableaux de données complexes (tels que déterminés par le test 5.1.1) ;</li>
<li>Pour chaque résumé, vérifier que son contenu est pertinent ;</li>
<li>Si c'est le cas pour chaque résumé de tableaux de données complexes, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-53-pour-chaque-tableau-de-mise-en-forme-le-contenu-linéarisé-reste-t-il-compréhensible-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-53-pour-chaque-tableau-de-mise-en-forme-le-contenu-linéarisé-reste-t-il-compréhensible-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 5.3 Pour chaque tableau de mise en forme, le contenu linéarisé reste-t-il compréhensible (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-531" class="anchor" aria-hidden="true" href="#test-531"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 5.3.1</h5>
<ol>
<li>Retrouver dans le document les tableaux de mise en forme ;</li>
<li>Pour chaque tableau de mise en forme, vérifier que :
<ul>
<li>L'ordre d'accès aux cellules est cohérent avec le contenu ;</li>
<li>L'élément <code>&lt;table&gt;</code> est pourvu d'un attribut WAI-ARIA <code>role="presentation"</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque tableau de mise en forme, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-54-pour-chaque-tableau-de-données-ayant-un-titre-le-titre-est-il-correctement-associé-au-tableau-de-données-" class="anchor" aria-hidden="true" href="#critère-54-pour-chaque-tableau-de-données-ayant-un-titre-le-titre-est-il-correctement-associé-au-tableau-de-données-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 5.4 Pour chaque tableau de données ayant un titre, le titre est-il correctement associé au tableau de données ?</h4>
<h5><a id="user-content-test-541" class="anchor" aria-hidden="true" href="#test-541"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 5.4.1</h5>
<ol>
<li>Retrouver dans le document les tableaux de données pourvus d'un titre ;</li>
<li>Pour chaque titre, vérifier qu'il est fourni au moyen :
<ul>
<li>Soit d'un élément <code>&lt;caption&gt;</code> ;</li>
<li>Soit d'un attribut <code>title</code> ;</li>
<li>Soit d'un attribut WAI-ARIA <code>aria-label</code> ;</li>
<li>Soit d'un attribut WAI-ARIA <code>aria-labelledby</code> référençant un passage de texte.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque titre de tableau de données, le test est validé.</li>
</ol>

<h4><a id="user-content-critère-55-pour-chaque-tableau-de-données-ayant-un-titre-celui-ci-est-il-pertinent" class="anchor" aria-hidden="true" href="#critère-55-pour-chaque-tableau-de-données-ayant-un-titre-celui-ci-est-il-pertinent"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 5.5 Pour chaque tableau de données ayant un titre, celui-ci est-il pertinent ?</h4>
<h5><a id="user-content-test-551" class="anchor" aria-hidden="true" href="#test-551"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 5.5.1</h5>
<ol>
<li>Retrouver dans le document les tableaux de données pourvus d'un titre ;</li>
<li>Pour chaque titre, vérifier qu'il est pertinent ;</li>
<li>Si c'est le cas pour chaque titre de tableau de données, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-56-pour-chaque-tableau-de-données-chaque-en-tête-de-colonnes-et-chaque-en-tête-de-lignes-sont-ils-correctement-déclarés" class="anchor" aria-hidden="true" href="#critère-56-pour-chaque-tableau-de-données-chaque-en-tête-de-colonnes-et-chaque-en-tête-de-lignes-sont-ils-correctement-déclarés"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 5.6 Pour chaque tableau de données, chaque en-tête de colonnes et chaque en-tête de lignes sont-ils correctement déclarés ?</h4>
<h5><a id="user-content-test-561" class="anchor" aria-hidden="true" href="#test-561"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 5.6.1</h5>
<ol>
<li>Retrouver dans le document les tableaux de données ;</li>
<li>Pour chaque en-tête de colonnes s'appliquant à la totalité de la colonne, vérifier que l'en-tête de colonne est structuré au moyen :
<ul>
<li>Soit d'un élément <code>&lt;th&gt;</code> ;</li>
<li>Soit d'un élément pourvu d'un attribut WAI-ARIA <code>role="columnheader"</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque en-tête de colonne s'appliquant à la totalité de la colonne, le test est validé.</li>
</ol>
<h5><a id="user-content-test-562" class="anchor" aria-hidden="true" href="#test-562"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 5.6.2</h5>
<ol>
<li>Retrouver dans le document les tableaux de données ;</li>
<li>Pour chaque en-tête de ligne s'appliquant à la totalité de la ligne, vérifier que l'en-tête de ligne est structuré au moyen :
<ul>
<li>Soit d'un élément <code>&lt;th&gt;</code> ;</li>
<li>Soit d'un élément pourvu d'un attribut WAI-ARIA <code>role="rowheader"</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque en-tête de ligne s'appliquant à la totalité de la ligne, le test est validé.</li>
</ol>
<h5><a id="user-content-test-563" class="anchor" aria-hidden="true" href="#test-563"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 5.6.3</h5>
<ol>
<li>Retrouver dans le document les tableaux de données ;</li>
<li>Pour chaque en-tête ne s'appliquant pas à la totalité de la ligne ou de la colonne, vérifier que l'en-tête de ligne est structuré au moyen d'un élément <code>&lt;th&gt;</code> ;</li>
<li>Si c'est le cas pour chaque en-tête ne s'appliquant pas à la totalité de la ligne ou de la colonne, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-57-pour-chaque-tableau-de-données-la-technique-appropriée-permettant-dassocier-chaque-cellule-avec-ses-en-têtes-est-elle-utilisée" class="anchor" aria-hidden="true" href="#critère-57-pour-chaque-tableau-de-données-la-technique-appropriée-permettant-dassocier-chaque-cellule-avec-ses-en-têtes-est-elle-utilisée"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 5.7 Pour chaque tableau de données, la technique appropriée permettant d'associer chaque cellule avec ses en-têtes est-elle utilisée ?</h4>
<h5><a id="user-content-test-571" class="anchor" aria-hidden="true" href="#test-571"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 5.7.1</h5>
<ol>
<li>Retrouver dans le document les tableaux de données ;</li>
<li>Pour chaque en-tête (élément <code>&lt;th&gt;</code>) s'appliquant à la totalité de la ligne ou de la colonne, vérifier que l'élément <code>&lt;th&gt;</code> possède :
<ul>
<li>Soit un attribut <code>id</code> unique ;</li>
<li>Soit un attribut <code>scope</code> ;</li>
<li>Soit un attribut WAI-ARIA <code>role="rowheader"</code> ou <code>"columnheader"</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque en-tête s'appliquant à la totalité de la ligne ou de la colonne, le test est validé.</li>
</ol>
<h5><a id="user-content-test-572" class="anchor" aria-hidden="true" href="#test-572"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 5.7.2</h5>
<ol>
<li>Retrouver dans le document les tableaux de données ;</li>
<li>Pour chaque en-tête (élément <code>&lt;th&gt;</code>) s'appliquant à la totalité de la ligne ou de la colonne et pourvu d'un attribut <code>scope</code>, vérifier que l'attribut <code>scope</code> possède :
<ul>
<li>Soit une valeur <code>"row"</code> pour les en-têtes de ligne ;</li>
<li>Soit une valeur <code>"col"</code> pour les en-têtes de colonne.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque en-tête s'appliquant à la totalité de la ligne ou de la colonne et pourvu d'un attribut <code>scope</code>, le test est validé.</li>
</ol>
<h5><a id="user-content-test-573" class="anchor" aria-hidden="true" href="#test-573"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 5.7.3</h5>
<ol>
<li>Retrouver dans le document les tableaux de données ;</li>
<li>Pour chaque en-tête (élément <code>&lt;th&gt;</code>) ne s'appliquant pas à la totalité de la ligne ou de la colonne, vérifier que l'élément <code>&lt;th&gt;</code> :
<ul>
<li>Possède un attribut <code>id</code> unique ;</li>
<li>Et ne possède pas d'attribut <code>scope</code> ;</li>
<li>Et ne possède pas d'attribut WAI-ARIA <code>role="rowheader"</code> ou <code>"columnheader"</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque en-tête ne s'appliquant pas à la totalité de la ligne ou de la colonne, le test est validé.</li>
</ol>
<h5><a id="user-content-test-574" class="anchor" aria-hidden="true" href="#test-574"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 5.7.4</h5>
<ol>
<li>Retrouver dans le document les tableaux de données ;</li>
<li>Pour chaque élément <code>&lt;td&gt;</code> ou <code>&lt;th&gt;</code> associé à un ou plusieurs en-têtes possédant un attribut <code>id</code>, vérifier que :
<ul>
<li>L'élément <code>&lt;td&gt;</code> ou <code>&lt;th&gt;</code> possède un attribut <code>headers</code> ;</li>
<li>Et l'attribut <code>headers</code> possède la liste des valeurs d'attribut <code>id</code> des en-têtes associés.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque élément <code>&lt;td&gt;</code> ou <code>&lt;th&gt;</code> associé à un ou plusieurs en-têtes possédant un attribut <code>id</code>, le test est validé.</li>
</ol>
<h5><a id="user-content-test-575" class="anchor" aria-hidden="true" href="#test-575"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 5.7.5</h5>
<ol>
<li>Retrouver dans le document les tableaux de données ;</li>
<li>Pour chaque en-tête s'appliquant à la totalité de la ligne ou de la colonne et pourvu d'un attribut WAI-ARIA <code>role="rowheader"</code> ou <code>"columnheader"</code>, vérifier que l'élément possède :
<ul>
<li>Soit un attribut WAI-ARIA <code>role="rowheader"</code> pour les en-têtes de ligne ;</li>
<li>Soit un attribut WAI-ARIA <code>role="columnheader"</code> pour les en-têtes de colonne.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque en-tête s'appliquant à la totalité de la ligne ou de la colonne et pourvu d'un attribut WAI-ARIA <code>role="rowheader"</code> ou <code>"columnheader"</code>, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-58-chaque-tableau-de-mise-en-forme-ne-doit-pas-utiliser-déléments-propres-aux-tableaux-de-données-cette-règle-est-elle-respectée" class="anchor" aria-hidden="true" href="#critère-58-chaque-tableau-de-mise-en-forme-ne-doit-pas-utiliser-déléments-propres-aux-tableaux-de-données-cette-règle-est-elle-respectée"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 5.8 Chaque tableau de mise en forme ne doit pas utiliser d'éléments propres aux tableaux de données. Cette règle est-elle respectée ?</h4>
<h5><a id="user-content-test-581" class="anchor" aria-hidden="true" href="#test-581"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 5.8.1</h5>
<ol>
<li>Retrouver dans le document les tableaux de mise en forme ;</li>
<li>Pour chaque tableau de mise en forme, vérifier que :
<ul>
<li>L'élément <code>&lt;table&gt;</code> ne possède pas d'éléments enfant <code>&lt;caption&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;tfoot&gt;</code>, <code>&lt;colgroup&gt;</code> ou d'éléments pourvus d'un attribut WAI-ARIA <code>role="rowheader"</code> ou <code>role="columnheader"</code> ;</li>
<li>Les éléments <code>&lt;td&gt;</code> ne possèdent pas d'attributs <code>&lt;scope&gt;</code>, <code>&lt;headers&gt;</code> et <code>&lt;axis&gt;</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque tableau de mise en forme, le test est validé.</li>
</ol>
<h3><a id="user-content-liens" class="anchor" aria-hidden="true" href="#liens"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Liens</h3>
<h4><a id="user-content-critère-61-chaque-lien-est-il-explicite-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-61-chaque-lien-est-il-explicite-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 6.1 Chaque lien est-il explicite (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-611" class="anchor" aria-hidden="true" href="#test-611"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 6.1.1</h5>
<ol>
<li>Retrouver dans le document les liens texte ;</li>
<li>Pour chaque lien texte, vérifier que ce qui permet d'en comprendre la fonction et la destination est :
<ul>
<li>Soit l'intitulé du lien seul ;</li>
<li>Soit le contexte du lien.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque lien texte, le test est validé.</li>
</ol>
<h5><a id="user-content-test-612" class="anchor" aria-hidden="true" href="#test-612"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 6.1.2</h5>
<ol>
<li>Retrouver dans le document les liens image (lien avec pour contenu un élément <code>&lt;img&gt;</code> ou un élément ayant l'attribut WAI-ARIA <code>role="img"</code>, un élément <code>&lt;area&gt;</code> possédant un attribut <code>href</code>, un élément <code>&lt;object&gt;</code>, un élément <code>&lt;canvas&gt;</code> ou un élément <code>&lt;svg&gt;</code>) ;</li>
<li>Pour chaque lien image, vérifier que ce qui permet d'en comprendre la fonction et la destination est :
<ul>
<li>Soit l'intitulé du lien seul, fourni par l'alternative textuelle de l'image ;</li>
<li>Soit le contexte du lien.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque lien image, le test est validé.</li>
</ol>
<h5><a id="user-content-test-613" class="anchor" aria-hidden="true" href="#test-613"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 6.1.3</h5>
<ol>
<li>Retrouver dans le document les liens composites (lien composé à la fois de contenu texte et d'éléments de type image) ;</li>
<li>Pour chaque lien composite, vérifier que ce qui permet d'en comprendre la fonction et la destination est :
<ul>
<li>Soit l'intitulé du lien seul, fourni par la combinaison du contenu texte et de l'alternative textuelle de l'image ;</li>
<li>Soit le contexte du lien.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque lien composite, le test est validé.</li>
</ol>
<h5><a id="user-content-test-614" class="anchor" aria-hidden="true" href="#test-614"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 6.1.4</h5>
<ol>
<li>Retrouver dans le document les liens SVG (élément <code>&lt;svg&gt;</code> qui possède un élément <code>&lt;a&gt;</code> pourvu d'un attribut <code>xlink-href</code> (SVG 1.1) ou <code>href</code> (SVG 2)) ;</li>
<li>Pour chaque lien SVG, vérifier que ce qui permet d'en comprendre la fonction et la destination est :
<ul>
<li>Soit l'intitulé du lien seul, fourni par le nom accessible de l'élément <code>&lt;svg&gt;</code> (résolu généralement à partir du contenu d'un élément <code>&lt;text&gt;</code>) ;</li>
<li>Soit le contexte du lien.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque lien SVG, le test est validé.</li>
</ol>
<h5><a id="user-content-test-615" class="anchor" aria-hidden="true" href="#test-615"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 6.1.5</h5>
<ol>
<li>Retrouver dans le document les liens autres que SVG dont le contenu est fourni à la fois par un intitulé visible et par le contenu soit d'un attribut <code>title</code> ou d'un attribut <code>aria-label</code> ou d'un attribut <code>aria-labelledby</code> ;</li>
<li>Pour chaque lien, vérifier que le contenu de l'attribut <code>title</code> ou de l'attribut <code>aria-label</code> ou de l'attribut <code>aria-labelledby</code> contient l'intitulé visible ;</li>
<li>Si c'est le cas pour chaque lien, le test est validé pour les liens autres que SVG.</li>
<li>Retrouver dans le document les liens SVG dont le contenu est fourni à la fois par un intitulé visible et par le contenu soit d'un attribut <code>aria-labelledby</code>, ou d'un attribut <code>aria-label</code> ou d'un élément <code>title</code> (enfant direct de l'élément <code>&lt;svg&gt;</code>) ou d'un attribut <code>x-link:title</code> (SVG 1.1) ou d'un ou plusieurs éléments <code>&lt;text&gt;</code>;</li>
<li>Pour chaque lien SVG, vérifier que le contenu de l'attribut <code>aria-labelledby</code> ou de l'attribut <code>aria-label</code> ou de l'élément <code>&lt;title&gt;</code> ou de l'attribut <code>x-link:title</code> ou d'un ou plusieurs éléments <code>&lt;text&gt;</code> contient l'intitulé visible ;</li>
<li>Si c'est le cas pour chaque lien SVG, le test est validé pour les liens SVG.</li>
<li>Si le test est validé à la fois pour les liens non SVG et pour les liens SVG, le test est globalement validé.</li>
</ol>
<p>Note : considérant la détermination du nom accessible, il existe deux cas particuliers et une particularité liée aux expressions mathématiques :</p>
<ul>
<li>La ponctuation et les lettres majuscules présentes dans le texte de l’intitulé visible peuvent être ignorées dans le nom accessible sans porter à conséquence.</li>
<li>Si le texte de l’intitulé visible sert de symbole, il ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, "B" au niveau d'un éditeur de texte aura pour nom accessible "Mettre en gras", le signe "&gt;" en fonction du contexte signifiera "Suivant" ou "Lancer la vidéo"). Le cas des symboles mathématiques fait cependant exception (voir le point ci-dessous).</li>
<li>Si l'étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d'étiquette au nom accessible (par exemple, "A&gt;B"). Il est laissé à l'utilisateur le soin d'opérer la correspondance entre l'expression et ce qu'il doit épeler compte tenu de la connaissance qu'il a du fonctionnement de son logiciel de saisie vocale ("A plus grand que B" ou "A supérieur à B").</li>
</ul>
<h4><a id="user-content-critère-62-dans-chaque-page-web-chaque-lien-à-lexception-des-ancres-a-t-il-un-intitulé" class="anchor" aria-hidden="true" href="#critère-62-dans-chaque-page-web-chaque-lien-à-lexception-des-ancres-a-t-il-un-intitulé"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 6.2 Dans chaque page web, chaque lien, à l'exception des ancres, a-t-il un intitulé ?</h4>
<h5><a id="user-content-test-621" class="anchor" aria-hidden="true" href="#test-621"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 6.2.1</h5>
<ol>
<li>Retrouver dans le document les liens quels qu'ils soient ;</li>
<li>Pour chaque lien, vérifier que le contenu de l'élément <code>&lt;a&gt;</code> (ou d'un élément pourvu d'un attribut WAI-ARIA <code>role=link</code>) contient un intitulé (texte ou alternative) ;</li>
<li>Si c'est le cas pour chaque lien, le test est validé.</li>
</ol>
<h3><a id="user-content-scripts" class="anchor" aria-hidden="true" href="#scripts"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Scripts</h3>
<h4><a id="user-content-critère-71-chaque-script-est-il-si-nécessaire-compatible-avec-les-technologies-dassistance" class="anchor" aria-hidden="true" href="#critère-71-chaque-script-est-il-si-nécessaire-compatible-avec-les-technologies-dassistance"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 7.1 Chaque script est-il, si nécessaire, compatible avec les technologies d'assistance ?</h4>
<h5><a id="user-content-test-711" class="anchor" aria-hidden="true" href="#test-711"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 7.1.1</h5>
<ol>
<li>Retrouver dans le document tous les composants d'interface générés ou contrôlés au moyen de JavaScript ;</li>
<li>Vérifier que :
<ol>
<li>Le composant possède un rôle cohérent avec son usage (généralement un bouton ou un lien) ;</li>
<li>Le composant possède un nom explicite ;</li>
<li>Le nom du composant est cohérent avec l'état de la fonctionnalité ou des contenus contrôlés (par exemple pour une fonctionnalité permettant d'afficher ou de masquer une zone de contenu).</li>
</ol>
</li>
<li>Sinon, vérifier la présence d'un composant d'interface accessible permettant d'accéder aux mêmes fonctionnalités ;</li>
<li>Sinon, vérifier la présence d'une alternative accessible permettant d'accéder aux mêmes fonctionnalités.</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-712" class="anchor" aria-hidden="true" href="#test-712"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 7.1.2</h5>
<ol>
<li>Pour chacun des composants d'interface ayant validé le test 7.1.1, vérifier que le composant d'interface est correctement restitué par les technologies d'assistance ;</li>
<li>Sinon, vérifier qu'une alternative accessible au composant d'interface permet d'accéder aux mêmes fonctionnalités ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-713" class="anchor" aria-hidden="true" href="#test-713"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 7.1.3</h5>
<ol>
<li>Pour chacun des composants d'interface ayant validé le test 7.1.1, vérifier que le composant d'interface possède :
<ol>
<li>Un nom pertinent (intitulé visible) ;</li>
<li>Un rôle pertinent.</li>
</ol>
</li>
<li>Si le composant d'interface possède un nom accessible, vérifier que ce nom est pertinent et contient au moins l'intitulé visible.</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-72-pour-chaque-script-ayant-une-alternative-cette-alternative-est-elle-pertinente" class="anchor" aria-hidden="true" href="#critère-72-pour-chaque-script-ayant-une-alternative-cette-alternative-est-elle-pertinente"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 7.2 Pour chaque script ayant une alternative, cette alternative est-elle pertinente ?</h4>
<h5><a id="user-content-test-721" class="anchor" aria-hidden="true" href="#test-721"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 7.2.1</h5>
<ol>
<li>Retrouver les alternatives aux fonctionnalités JavaScript :
<ol>
<li>Chercher dans la page, les alternatives à un composant ou une fonctionnalité JavaScript mises à disposition.</li>
<li>Désactiver JavaScript dans le document et retrouver les alternatives proposées.</li>
</ol>
</li>
<li>Pour chacune des alternatives proposées, vérifier qu'elle permet d'accéder aux mêmes contenus et à des fonctionnalités similaires.</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-test-722" class="anchor" aria-hidden="true" href="#test-722"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 7.2.2</h4>
<ol>
<li>Retrouver dans le document tous les éléments non textuels mis à jour par une fonctionnalité JavaScript.</li>
<li>Si l'élément non textuel a une alternative, vérifier que :
<ol>
<li>L'alternative est mise à jour lorsque le contenu non textuel est mis à jour ;</li>
<li>L'alternative mise à jour est pertinente.</li>
</ol>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-73-chaque-script-est-il-contrôlable-par-le-clavier-et-par-tout-dispositif-de-pointage-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-73-chaque-script-est-il-contrôlable-par-le-clavier-et-par-tout-dispositif-de-pointage-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 7.3 Chaque script est-il contrôlable par le clavier et par tout dispositif de pointage (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-731" class="anchor" aria-hidden="true" href="#test-731"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 7.3.1</h5>
<ol>
<li>Retrouver dans le document, tous les éléments sur lesquels est implémenté un gestionnaire d'événements JavaScript (par exemple <code>click</code>, <code>focus</code>, <code>mouseover</code>, <code>blur</code>, <code>keydown</code>, <code>touch</code>, ...).</li>
<li>Vérifier que l'élément est accessible au moyen du clavier :
<ol>
<li>Il est atteignable avec la touche de tabulation (tab) ;</li>
<li>Si l'élément gère une action simple, il est activable au clavier avec la touche entrée (Entrée) ;</li>
<li>Si l'élément gère une action complexe, il est utilisable avec le clavier (généralement avec les touches de direction).</li>
</ol>
</li>
<li>Sinon, vérifier qu'un élément accessible par le clavier permettant de réaliser la même action est présent dans la page.</li>
<li>Vérifier que l'élément est accessible par tout dispositif de pointage (souris, toucher, stylet, ...).</li>
<li>Sinon, vérifier qu'un élément accessible au moyen d'un dispositif de pointage et permettant de réaliser la même action est présent dans la page.</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-732" class="anchor" aria-hidden="true" href="#test-732"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 7.3.2</h5>
<ol>
<li>Activer, l'un après l'autre, tous les éléments capables de recevoir le focus.</li>
<li>Vérifier que le focus n'est pas supprimé via une fonctionnalité JavaScript.</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-74-pour-chaque-script-qui-initie-un-changement-de-contexte-lutilisateur-est-il-averti-ou-en-a-t-il-le-contrôle" class="anchor" aria-hidden="true" href="#critère-74-pour-chaque-script-qui-initie-un-changement-de-contexte-lutilisateur-est-il-averti-ou-en-a-t-il-le-contrôle"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 7.4 Pour chaque script qui initie un changement de contexte, l'utilisateur est-il averti ou en a-t-il le contrôle ?</h4>
<h5><a id="user-content-test-741" class="anchor" aria-hidden="true" href="#test-741"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 7.4.1</h5>
<ol>
<li>Retrouver dans le document tous les événements JavaScript qui initient un changement de contexte, par exemple :
<ul>
<li>Une mise à jour dynamique de champs de formulaire ;</li>
<li>L'ouverture d'une nouvelle page à l'activation d'une option d'une liste de sélection (élément <code>select</code>) ;</li>
<li>La mise à jour, via un procédé AJAX d'une partie essentielle de la page ;</li>
<li>Le lancement automatique d'un lecteur vidéo suite à la sélection d'une playlist ;</li>
<li>La manipulation du focus ayant pour résultat de modifier la position courante de l'utilisateur dans la page.</li>
</ul>
</li>
<li>Vérifier que :
<ol>
<li>L'utilisateur est averti par un message de l'action du script et du type de changement avant son déclenchement ;</li>
<li>Ou bien le changement de contexte est initié par un bouton (<code>input</code> de type <code>submit</code>, <code>button</code> ou <code>image</code> ou la balise <code>button</code>) explicite ;</li>
<li>Ou bien le changement de contexte est initié par un lien explicite.</li>
</ol>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-75-dans-chaque-page-web-les-messages-de-statut-sont-ils-correctement-restitués-par-les-technologies-dassistance-" class="anchor" aria-hidden="true" href="#critère-75-dans-chaque-page-web-les-messages-de-statut-sont-ils-correctement-restitués-par-les-technologies-dassistance-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 7.5 Dans chaque page web, les messages de statut sont-ils correctement restitués par les technologies d'assistance ?</h4>
<h5><a id="user-content-tests-751-752-et-753" class="anchor" aria-hidden="true" href="#tests-751-752-et-753"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Tests 7.5.1, 7.5.2 et 7.5.3</h5>
<ol>
<li>Retrouver dans le document les messages qui valent pour message de statut.</li>
<li>Pour chacun de ces messages, déterminer la nature de l'information dont est porteur le message :</li>
<li>Si le message informe de la réussite, du résultat d'une action ou bien de l'état d'une application, vérifier que l'élément qui contient le message :
<ol>
<li>Soit utilise l'attribut WAI-ARIA role="status" ;</li>
<li>Soit utilise les attributs WAI-ARIA aria-live="polite" et aria-atomic="true".</li>
</ol>
</li>
<li>Si le message présente une suggestion, ou avertit de l'existence d'une erreur, vérifier que l'élément qui contient le message :
<ol>
<li>Soit utilise l'attribut WAI-ARIA role="alert" ;</li>
<li>Soit utilise les attributs aria-live="assertive" et aria-atomic="true".</li>
</ol>
</li>
<li>Si le message indique la progression d'un processus, vérifier que l'élément qui contient le message :
<ol>
<li>Soit utilise l'un des attributs WAI-ARIA role="log", role="progressbar" ou role="status" ;</li>
<li>Soit utilise l'attribut WAI-ARIA aria-live="polite" si l'intention est de signaler l'équivalent d'un rôle "log" ;</li>
<li>Soit utilise les attributs WAI-ARIA aria-live="polite" et aria-atomic="true si l'intention est de signaler l'équivalent d'un rôle "status".</li>
</ol>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h3><a id="user-content-éléments-obligatoires" class="anchor" aria-hidden="true" href="#éléments-obligatoires"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Éléments Obligatoires</h3>
<h4><a id="user-content-critère-81-chaque-page-web-est-elle-définie-par-un-type-de-document" class="anchor" aria-hidden="true" href="#critère-81-chaque-page-web-est-elle-définie-par-un-type-de-document"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 8.1 Chaque page web est-elle définie par un type de document ?</h4>
<h5><a id="user-content-tests-811-812-et-813" class="anchor" aria-hidden="true" href="#tests-811-812-et-813"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Tests 8.1.1, 8.1.2 et 8.1.3</h5>
<ol>
<li>Retrouver dans le document la balise <code>DOCTYPE</code> (par exemple ) ;</li>
<li>Vérifier que :
<ol>
<li>La balise <code>DOCTYPE</code> est placée avant la balise <code>&lt;html&gt;</code>.</li>
<li>Le type de document est valide.</li>
</ol>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-82-pour-chaque-page-web-le-code-source-généré-est-il-valide-selon-le-type-de-document-spécifié-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-82-pour-chaque-page-web-le-code-source-généré-est-il-valide-selon-le-type-de-document-spécifié-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 8.2 Pour chaque page web, le code source généré est-il valide selon le type de document spécifié (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-821" class="anchor" aria-hidden="true" href="#test-821"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 8.2.1</h5>
<ol>
<li>Dans le menu « Check », activer l'option « W3C Nu markup checker (all frames) ».</li>
<li>Dans la page de résultats, vérifier que :
<ol>
<li>Les balises, attributs et valeurs d'attributs respectent les règles d'écriture ;</li>
<li>L'imbrication des balises est conforme ;</li>
<li>L'ouverture et la fermeture des balises sont conformes ;</li>
<li>Les valeurs d'attribut <code>id</code> sont uniques dans la page ;</li>
<li>Les attributs ne sont pas doublés sur un même élément.</li>
</ol>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-83-dans-chaque-page-web-la-langue-par-défaut-est-elle-présente" class="anchor" aria-hidden="true" href="#critère-83-dans-chaque-page-web-la-langue-par-défaut-est-elle-présente"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 8.3 Dans chaque page web, la langue par défaut est-elle présente ?</h4>
<h5><a id="user-content-test-831" class="anchor" aria-hidden="true" href="#test-831"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 8.3.1</h5>
<ol>
<li>Retrouver dans le document l'indication de langue par défaut ;</li>
<li>Vérifier la présence d'une indication de langue :
<ul>
<li>Soit au moyen de l'attribut <code>lang</code> sur la balise <code>html</code> si le code est du HTML5 ou du HTML4 ;</li>
<li>Soit au moyen des attributs <code>lang</code> et <code>xml:lang</code> sur la balise <code>html</code> si le code est du XHTML 1.0 ;</li>
<li>Soit au moyen de l'attribut <code>xml:lang</code> sur la balise <code>html</code> si le code est du XHTML 1.1 ;</li>
</ul>
</li>
<li>Sinon, vérifier la présence d'une indication de langue sur chaque élément de texte ou l'un de ses parents ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-84-pour-chaque-page-web-ayant-une-langue-par-défaut-le-code-de-langue-est-il-pertinent" class="anchor" aria-hidden="true" href="#critère-84-pour-chaque-page-web-ayant-une-langue-par-défaut-le-code-de-langue-est-il-pertinent"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 8.4 Pour chaque page web ayant une langue par défaut, le code de langue est-il pertinent ?</h4>
<h5><a id="user-content-test-841" class="anchor" aria-hidden="true" href="#test-841"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 8.4.1</h5>
<ol>
<li>Retrouver dans le document l'indication de langue par défaut ;</li>
<li>Vérifier la présence d'un code de langue :
<ul>
<li>Valide (conforme à la norme ISO 639-1 ou ISO 639-2 et suivantes) ;</li>
<li>Et pertinent (qui indique la langue principale du document).</li>
</ul>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-85-chaque-page-web-a-t-elle-un-titre-de-page" class="anchor" aria-hidden="true" href="#critère-85-chaque-page-web-a-t-elle-un-titre-de-page"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 8.5 Chaque page web a-t-elle un titre de page ?</h4>
<h5><a id="user-content-test-851" class="anchor" aria-hidden="true" href="#test-851"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 8.5.1</h5>
<ol>
<li>Retrouver dans le document le titre structuré au moyen d’un élément <code>&lt;title&gt;</code> ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-86-pour-chaque-page-web-ayant-un-titre-de-page-ce-titre-est-il-pertinent" class="anchor" aria-hidden="true" href="#critère-86-pour-chaque-page-web-ayant-un-titre-de-page-ce-titre-est-il-pertinent"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 8.6 Pour chaque page web ayant un titre de page, ce titre est-il pertinent ?</h4>
<h5><a id="user-content-test-861" class="anchor" aria-hidden="true" href="#test-861"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 8.6.1</h5>
<ol>
<li>Retrouver dans le document le titre structuré au moyen d’un élément <code>&lt;title&gt;</code> ;</li>
<li>Vérifier si le contenu de l'élément <code>&lt;title&gt;</code> est suffisamment pertinent (il permet de retrouver la page dans l'historique de navigation ou la liste des onglets).</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-87-dans-chaque-page-web-chaque-changement-de-langue-est-il-indiqué-dans-le-code-source-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-87-dans-chaque-page-web-chaque-changement-de-langue-est-il-indiqué-dans-le-code-source-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 8.7 Dans chaque page web, chaque changement de langue est-il indiqué dans le code source (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-871" class="anchor" aria-hidden="true" href="#test-871"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 8.7.1</h5>
<ol>
<li>Retrouver les passages de texte en langue étrangère, à l'exception :
<ol>
<li>Des noms propres ;</li>
<li>Des mots d'origine étrangère, présents dans le dictionnaire de la langue du document ;</li>
<li>Des mots d'origine étrangère et d'usage courant dont la prononciation ne provoque pas d'incompréhension.</li>
</ol>
</li>
<li>Vérifier que chaque passage de texte retenu possède une indication de langue (attribut lang et/ou xml:lang sur l'élément lui-même ou l'un de ses parents).</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-88-dans-chaque-page-web-le-code-de-langue-de-chaque-changement-de-langue-est-il-valide-et-pertinent-" class="anchor" aria-hidden="true" href="#critère-88-dans-chaque-page-web-le-code-de-langue-de-chaque-changement-de-langue-est-il-valide-et-pertinent-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 8.8 Dans chaque page web, le code de langue de chaque changement de langue est-il valide et pertinent ?</h4>
<h5><a id="user-content-test-881" class="anchor" aria-hidden="true" href="#test-881"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 8.8.1</h5>
<ol>
<li>Pour chaque passage de texte validé au test 8.7.1, vérifier que :
<ol>
<li>L'indication de langue est valide ;</li>
<li>L'indication de langue est pertinente.</li>
</ol>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-89-dans-chaque-page-web-les-balises-ne-doivent-pas-être-utilisées-uniquement-à-des-fins-de-présentation-cette-règle-est-elle-respectée" class="anchor" aria-hidden="true" href="#critère-89-dans-chaque-page-web-les-balises-ne-doivent-pas-être-utilisées-uniquement-à-des-fins-de-présentation-cette-règle-est-elle-respectée"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 8.9 Dans chaque page web, les balises ne doivent pas être utilisées uniquement à des fins de présentation. Cette règle est-elle respectée ?</h4>
<h5><a id="user-content-test-891" class="anchor" aria-hidden="true" href="#test-891"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 8.9.1</h5>
<ol>
<li>Retrouver dans le document l'ensemble des éléments sémantiques utilisés à des fins de présentation ;</li>
<li>Pour chacun de ces éléments, vérifier que :
<ol>
<li>L'élément est pourvu d'un attribut <code>role="presentation"</code> ;</li>
<li>L'utilisation de cet élément à des fins de présentation reste justifée.</li>
</ol>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<p>Note : Quelques exemples, non exhaustifs de détournement de balisage : un élément <code>&lt;div&gt;</code> utilisé comme paragraphe, un titre utilisé comme légende, un élément <code>&lt;blockquote&gt;</code> ou des paragraphes vides ou encore des espaces utilisés pour créer des effets de marges.</p>
<p>L'utilisation d'un <code>role="presentation"</code> est formellement déconseillée, mais peut toutefois se justifier dans de rares cas. Cela peut être acceptable sur un élément <code>&lt;blockquote&gt;</code> ou un paragraphe vide, mais sera considéré comme non-conforme sur un titre.</p>
<p>Le cas des tableaux : à noter que ce test aborde les tableaux de présentation qui ne devraient finalement pas apparaître au sein de la thématique Tableaux.</p>
<h4><a id="user-content-critère-810-dans-chaque-page-web-les-changements-du-sens-de-lecture-sont-ils-signalés" class="anchor" aria-hidden="true" href="#critère-810-dans-chaque-page-web-les-changements-du-sens-de-lecture-sont-ils-signalés"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 8.10 Dans chaque page web, les changements du sens de lecture sont-ils signalés ?</h4>
<h5><a id="user-content-test-8101" class="anchor" aria-hidden="true" href="#test-8101"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 8.10.1</h5>
<ol>
<li>Retrouver dans le document les passages de textes qui utilisent une langue qui se lit dans le sens inverse de la langue du document (comme l'arabe ou l'hébreu pour le français par exemple).</li>
<li>Pour chaque passage de texte, vérifier que le passage de texte est contenu dans une balise qui possède un attribut <code>dir</code>.</li>
<li>Si c'est le cas pour chaque passage de texte, le test est validé.</li>
</ol>
<h5><a id="user-content-test-8102" class="anchor" aria-hidden="true" href="#test-8102"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 8.10.2</h5>
<ol>
<li>Pour chaque passage de texte validé au test 8.10.1, vérifier que :
<ol>
<li>L'indication de sens de lecture est conforme (<code>ltr</code>, pour le sens « de gauche à droite » et <code>rtl</code> pour le sens « de droite à gauche ») ;</li>
<li>L'indication de sens de lecture est pertinente.</li>
</ol>
</li>
<li>Si c'est le cas pour chaque passage de texte, le test est validé.</li>
</ol>
<h3><a id="user-content-structuration-de-linformation" class="anchor" aria-hidden="true" href="#structuration-de-linformation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Structuration de l'information</h3>
<h4><a id="user-content-critère-91-dans-chaque-page-web-linformation-est-elle-structurée-par-lutilisation-appropriée-de-titres" class="anchor" aria-hidden="true" href="#critère-91-dans-chaque-page-web-linformation-est-elle-structurée-par-lutilisation-appropriée-de-titres"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 9.1 Dans chaque page web, l'information est-elle structurée par l'utilisation appropriée de titres ?</h4>
<h5><a id="user-content-test-911" class="anchor" aria-hidden="true" href="#test-911"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 9.1.1</h5>
<ol>
<li>Retrouver dans le document les titres (balise <code>&lt;hx&gt;</code> ou balise possédant un attribut WAI-ARIA <code>role="heading"</code> associé à un attribut WAI-ARIA <code>aria-level</code>) ;</li>
<li>Vérifier que la hiérarchie entre les titres est pertinente ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>

<h5><a id="user-content-test-912" class="anchor" aria-hidden="true" href="#test-912"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 9.1.2</h5>
<ol>
<li>Pour chaque titre identifié au test 9.1.1, vérifier que son contenu est pertinent ;</li>
<li>Si c'est le cas pour chaque titre, le test est validé.</li>
</ol>
<h5><a id="user-content-test-913" class="anchor" aria-hidden="true" href="#test-913"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 9.1.3</h5>
<ol>
<li>Pour chaque titre identifié au test 9.1.1, vérifier que :
<ol>
<li>Soit il est structuré au moyen d'une balise <code>&lt;hx&gt;</code> ("x" désignant une valeur numérique comprise entre 1 et 6);</li>
<li>Soit il est structuré au moyen d'une balise possédant un attribut WAI-ARIA <code>role="heading"</code> et un attribut WAI-ARIA <code>aria-level=x</code> ("x" désignant une valeur numérique).</li>
</ol>
</li>
<li>Si c'est le cas pour chaque titre, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-92-dans-chaque-page-web-la-structure-du-document-est-elle-cohérente-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-92-dans-chaque-page-web-la-structure-du-document-est-elle-cohérente-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 9.2 Dans chaque page web, la structure du document est-elle cohérente (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-921" class="anchor" aria-hidden="true" href="#test-921"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 9.2.1</h5>
<ol>
<li>Vérifier que la zone d'en-tête est structurée au moyen d'un élément <code>&lt;header&gt;</code> ;</li>
<li>Vérifier que les zones de n­avigation principales et secondaires sont structurées au moyen d'un élément <code>&lt;nav&gt;</code>.</li>
<li>Vérifier que l'élément <code>&lt;nav&gt;</code> n'est pas utilisé en dehors de la structuration des zones de navigation principales et secondaires ;</li>
<li>Vérifier que la zone de contenu principal est structurée au moyen d'un élément <code>&lt;main&gt;</code> ;</li>
<li>Si le document possède plusieurs éléments <code>&lt;main&gt;</code>, vérifier qu'un seul de ces éléments est visible (les autres occurrences de l'élément sont pourvues d'un attribut <code>hidden</code>) ;</li>
<li>Vérifier que la zone de pied de page est structurée au moyen d'un élément <code>&lt;footer&gt;</code>.</li>
<li>Si c'est le cas pour chaque zone de contenu, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-93-dans-chaque-page-web-chaque-liste-est-elle-correctement-structurée" class="anchor" aria-hidden="true" href="#critère-93-dans-chaque-page-web-chaque-liste-est-elle-correctement-structurée"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 9.3 Dans chaque page web, chaque liste est-elle correctement structurée ?</h4>
<h5><a id="user-content-test-931" class="anchor" aria-hidden="true" href="#test-931"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 9.3.1</h5>
<ol>
<li>Retrouver dans le document les éléments regroupés visuellement sous la forme d'une liste non ordonnée ;</li>
<li>Pour chaque liste, vérifier que la liste est structurée :
<ol>
<li>Soit au moyen des éléments <code>&lt;ul&gt;</code> et <code>&lt;li&gt;</code> ;</li>
<li>Soit au moyen d'éléments pourvus d'attributs WAI-ARIA <code>role="list"</code> et <code>role="listitem"</code>.</li>
</ol>
</li>
<li>Si c'est le cas pour chaque liste non ordonnée, le test est validé.</li>
</ol>
<h5><a id="user-content-test-932" class="anchor" aria-hidden="true" href="#test-932"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 9.3.2</h5>
<ol>
<li>Retrouver dans le document les éléments regroupés visuellement sous la forme d'une liste ordonnée ;</li>
<li>Pour chaque liste, vérifier que la liste est structurée :
<ol>
<li>Soit au moyen des éléments <code>&lt;ol&gt;</code> et <code>&lt;li&gt;</code> ;</li>
<li>Soit au moyen d'éléments pourvus d'attributs WAI-ARIA <code>role="list"</code> et <code>role="listitem"</code>.</li>
</ol>
</li>
<li>Si c'est le cas pour chaque liste ordonnée, le test est validé.</li>
</ol>
<h5><a id="user-content-test-933" class="anchor" aria-hidden="true" href="#test-933"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 9.3.3</h5>
<ol>
<li>Retrouver dans le document les éléments regroupés visuellement sous la forme d'une liste de description ;</li>
<li>Pour chaque liste, vérifier que la liste est structurée au moyen des éléments <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code> et <code>&lt;dd&gt;</code> ;</li>
<li>Si c'est le cas pour chaque liste de description, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-94-dans-chaque-page-web-chaque-citation-est-elle-correctement-indiquée" class="anchor" aria-hidden="true" href="#critère-94-dans-chaque-page-web-chaque-citation-est-elle-correctement-indiquée"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 9.4 Dans chaque page web, chaque citation est-elle correctement indiquée ?</h4>
<h5><a id="user-content-test-941" class="anchor" aria-hidden="true" href="#test-941"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 9.4.1</h5>
<ol>
<li>Retrouver dans le document les citations courtes (ou en ligne) ;</li>
<li>Pour chaque citation, vérifier que la citation est structurée au moyen d'un élément <code>&lt;q&gt;</code> ;</li>
<li>Si c'est le cas pour chaque citation courte, le test est validé.</li>
</ol>
<h5><a id="user-content-test-942" class="anchor" aria-hidden="true" href="#test-942"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 9.4.2</h5>
<ol>
<li>Retrouver dans le document les blocs de citation ;</li>
<li>Pour chaque bloc de citation, vérifier que le bloc de citation est structurée au moyen d'un élément <code>&lt;blockquote&gt;</code> ;</li>
<li>Si c'est le cas pour chaque bloc de citation, le test est validé.</li>
</ol>
<h3><a id="user-content-présentation-de-linformation" class="anchor" aria-hidden="true" href="#présentation-de-linformation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Présentation de l'information</h3>
<h4><a id="user-content-critère-101-dans-le-site-web-des-feuilles-de-styles-sont-elles-utilisées-pour-contrôler-la-présentation-de-linformation" class="anchor" aria-hidden="true" href="#critère-101-dans-le-site-web-des-feuilles-de-styles-sont-elles-utilisées-pour-contrôler-la-présentation-de-linformation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 10.1 Dans le site web, des feuilles de styles sont-elles utilisées pour contrôler la présentation de l'information ?</h4>
<h5><a id="user-content-test-1011" class="anchor" aria-hidden="true" href="#test-1011"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.1.1</h5>
<ol>
<li>Vérifier l'absence des éléments de présentation <code>&lt;basefont&gt;</code>, <code>&lt;blink&gt;</code>, <code>&lt;center&gt;</code>, <code>&lt;font&gt;</code>, <code>&lt;marquee&gt;</code>, <code>&lt;s&gt;</code>, <code>&lt;strike&gt;</code>, <code>&lt;tt&gt;</code> ;</li>
<li>Vérifier l'absence de l'élément <code>&lt;u&gt;</code> uniquement si le DOCTYPE du document ne correspond pas à HTML 5 ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1012" class="anchor" aria-hidden="true" href="#test-1012"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.1.2</h5>
<ol>
<li>Vérifier l'absence des attributs de présentation : <code>align</code>, <code>alink</code>, <code>background</code>, <code>basefont</code>, <code>bgcolor</code>, <code>border</code>, <code>color</code>, <code>link</code>, <code>text</code>, <code>vlink</code>, <code>cellpadding</code>, <code>cellspacing</code>, <code>width</code> (exception faite de l'élément <code>&lt;img&gt;</code>), <code>height</code> (exception faite de l'élément <code>&lt;img&gt;</code>) ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1013" class="anchor" aria-hidden="true" href="#test-1013"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.1.3</h5>
<ol>
<li>Désactiver les styles (CSS) du document ;</li>
<li>Vérifier l'absence d'espaces utilisées :
<ol>
<li>Entre les lettres d'un mot ;</li>
<li>Pour créer des effets de marges ou d'alignement ;</li>
<li>Pour simuler des tableaux ou des colonnes.</li>
</ol>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-102-dans-chaque-page-web-le-contenu-visible-reste-t-il-présent-lorsque-les-feuilles-de-styles-sont-désactivées" class="anchor" aria-hidden="true" href="#critère-102-dans-chaque-page-web-le-contenu-visible-reste-t-il-présent-lorsque-les-feuilles-de-styles-sont-désactivées"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 10.2 Dans chaque page web, le contenu visible reste-t-il présent lorsque les feuilles de styles sont désactivées ?</h4>
<h5><a id="user-content-test-1021" class="anchor" aria-hidden="true" href="#test-1021"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.2.1</h5>
<ol>
<li>Désactiver les styles (CSS) du document ;</li>
<li>Comparer le document dépourvu de styles avec le document mis en forme ;</li>
<li>Vérifier si dans le document dépourvu de styles, les contenus visibles restent présents ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-103-dans-chaque-page-web-linformation-reste-t-elle-compréhensible-lorsque-les-feuilles-de-styles-sont-désactivées" class="anchor" aria-hidden="true" href="#critère-103-dans-chaque-page-web-linformation-reste-t-elle-compréhensible-lorsque-les-feuilles-de-styles-sont-désactivées"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 10.3 Dans chaque page web, l'information reste-t-elle compréhensible lorsque les feuilles de styles sont désactivées ?</h4>
<h5><a id="user-content-test-1031" class="anchor" aria-hidden="true" href="#test-1031"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.3.1</h5>
<ol>
<li>Désactiver les styles (CSS) du document ;</li>
<li>Vérifier que l'ordre dans lequel les contenus sont implémentés ne pose pas de problème de compréhension ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-104-dans-chaque-page-web-le-texte-reste-t-il-lisible-lorsque-la-taille-des-caractères-est-augmentée-jusquà-200-au-moins-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-104-dans-chaque-page-web-le-texte-reste-t-il-lisible-lorsque-la-taille-des-caractères-est-augmentée-jusquà-200-au-moins-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 10.4 Dans chaque page web, le texte reste-t-il lisible lorsque la taille des caractères est augmentée jusqu'à 200%, au moins (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-1041" class="anchor" aria-hidden="true" href="#test-1041"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.4.1</h5>
<ol>
<li>Vérifier dans les styles l'absence de valeurs exprimées au moyen des unités de type <code>pt</code>, <code>pc</code>, <code>mm</code>, <code>cm</code> et <code>in</code> pour les types de média <code>screen</code>, <code>tv</code>, <code>handheld</code> et <code>projection</code> ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1042" class="anchor" aria-hidden="true" href="#test-1042"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.4.2</h5>
<ol>
<li>Vérifier dans le document si les textes restent présents et lisibles lorsque :
<ol>
<li>Le zoom texte du navigateur est réglé à 200% ;</li>
<li>Le zoom graphique du navigateur est réglé à 200% ;</li>
<li>Les fonctionnalités de zoom personnalisées proposé par le document sont utilisés.</li>
</ol>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1043" class="anchor" aria-hidden="true" href="#test-1043"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.4.3</h5>
<ol>
<li>Vérifier dans le document si les textes sont effectivement agrandis lorsque :
<ol>
<li>Le zoom texte du navigateur est réglé à 200% ;</li>
<li>Le zoom graphique du navigateur est réglé à 200% ;</li>
<li>Les fonctionnalités de zoom personnalisées proposé par le document sont utilisés.</li>
</ol>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>

<h4><a id="user-content-critère-105-dans-chaque-page-web-les-déclarations-css-de-couleurs-de-fond-délément-et-de-police-sont-elles-correctement-utilisées-" class="anchor" aria-hidden="true" href="#critère-105-dans-chaque-page-web-les-déclarations-css-de-couleurs-de-fond-délément-et-de-police-sont-elles-correctement-utilisées-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 10.5 Dans chaque page web, les déclarations CSS de couleurs de fond d'élément et de police sont-elles correctement utilisées ?</h4>
<h5><a id="user-content-test-1051" class="anchor" aria-hidden="true" href="#test-1051"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.5.1</h5>
<ol>
<li>Retrouver dans le document les textes mis en couleur, à l'exception des couleurs par défaut (par exemple les liens, etc.) ;</li>
<li>Déterminer l'élément qui contient le texte et vérifier la présence d'une valeur calculée pour la propriété <code>background-color</code> de l'élément ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>

<h5><a id="user-content-test-1052" class="anchor" aria-hidden="true" href="#test-1052"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.5.2</h5>
<ol>
<li>Retrouver dans le document les textes mis en couleur, à l'exception des couleurs par défaut (par exemple les liens, etc.) ;</li>
<li>Déterminer l'élément qui contient le texte et vérifier la présence d'une valeur calculée pour la propriété <code>color</code> de l'élément ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>

<h5><a id="user-content-test-1053" class="anchor" aria-hidden="true" href="#test-1053"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.5.3</h5>
<ol>
<li>Retrouver dans le document les textes dont l'arrière-plan est constitué d'une image (propriété <code>background-image</code>) ;</li>
<li>Déterminer l'élément qui contient le texte et vérifier que si l'image d'arrière-plan est absente, le texte reste lisible ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>


<h4><a id="user-content-critère-106-dans-chaque-page-web-chaque-lien-dont-la-nature-nest-pas-évidente-est-il-visible-par-rapport-au-texte-environnant" class="anchor" aria-hidden="true" href="#critère-106-dans-chaque-page-web-chaque-lien-dont-la-nature-nest-pas-évidente-est-il-visible-par-rapport-au-texte-environnant"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 10.6 Dans chaque page web, chaque lien dont la nature n'est pas évidente est-il visible par rapport au texte environnant ?</h4>
<h5><a id="user-content-test-1061" class="anchor" aria-hidden="true" href="#test-1061"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.6.1</h5>
<ol>
<li>Retrouver dans le document les éléments de type lien (élément <code>&lt;a&gt;</code> ou élément pourvu d'un attribut WAI-ARIA <code>role="link"</code>) ;</li>
<li>Pour chaque élément de type lien, s'il peut être confondu avec un texte normal lorsqu'il est signalé uniquement par la couleur, vérifier que le contraste entre la couleur de police du lien et la couleur de police du texte environnant est de 3:1, au moins ;</li>
<li>Si c'est le cas pour chaque élément de type lien, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-107dans-chaque-page-web-pour-chaque-élément-recevant-le-focus-la-prise-de-focus-est-elle-visible" class="anchor" aria-hidden="true" href="#critère-107dans-chaque-page-web-pour-chaque-élément-recevant-le-focus-la-prise-de-focus-est-elle-visible"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 10.7 Dans chaque page web, pour chaque élément recevant le focus, la prise de focus est-elle visible ?</h4>
<h5><a id="user-content-test-1071" class="anchor" aria-hidden="true" href="#test-1071"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.7.1</h5>
<ol>
<li>Retrouver dans le document les éléments susceptibles de recevoir le focus (les éléments d'interface tels que les liens ou les contrôles de formulaire, ainsi que tout élément pourvu d'un attribut <code>tabindex</code> d'une valeur égale ou supérieure à 1) ;</li>
<li>Pour chaque élément susceptible de recevoir le focus, vérifier que l'indication visuelle de la prise de focus est présente (propriétés <code>outline</code>, <code>outline-width</code>, <code>outline-style</code>, <code>outline-color</code>) et suffisamment contrastée (ratio de contraste égal ou supérieur à 3.0).</li>
<li>Si c'est le cas pour chaque élément susceptible de recevoir le focus, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-108-pour-chaque-page-web-les-contenus-cachés-ont-ils-vocation-à-être-ignorés-par-les-technologies-dassistance-" class="anchor" aria-hidden="true" href="#critère-108-pour-chaque-page-web-les-contenus-cachés-ont-ils-vocation-à-être-ignorés-par-les-technologies-dassistance-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 10.8 Pour chaque page web, les contenus cachés ont-ils vocation à être ignorés par les technologies d'assistance ?</h4>
<h5><a id="user-content-test-1081" class="anchor" aria-hidden="true" href="#test-1081"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.8.1</h5>
<ol>
<li>Retrouver les contenus cachés (éléments pourvus de l'attribut <code>hidden</code> ou de l'attribut WAI-ARIA <code>aria-hidden</code>, ou bien d'une classe ou d'un ensemble de styles CSS susceptibles de masquer le contenu).</li>
<li>Pour chaque contenu caché, vérifier que :
<ol>
<li>Soit le contenu caché a vocation à être ignoré par les technologies d'assistance (un élément statistique de visites par exemple) ;</li>
<li>Soit le contenu caché n’a pas vocation à être ignoré par les technologies d’assistance, et dans ce cas il est rendu restituable par les technologies d'assistance au moyen :
<ol>
<li>Soit d'une action de l'utilisateur réalisable au clavier ou par tout dispositif de pointage sur un élément précédent le contenu caché</li>
<li>Soit d'une fonction de programmation qui repositionne le focus sur le contenu.</li>
</ol>
</li>
</ol>
</li>
<li>Si c'est le cas pour chaque contenu caché, le test est validé.</li>
</ol>

<h4><a id="user-content-critère-109-dans-chaque-page-web-linformation-ne-doit-pas-être-donnée-uniquement-par-la-forme-taille-ou-position-cette-règle-est-elle-respectée" class="anchor" aria-hidden="true" href="#critère-109-dans-chaque-page-web-linformation-ne-doit-pas-être-donnée-uniquement-par-la-forme-taille-ou-position-cette-règle-est-elle-respectée"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 10.9 Dans chaque page web, l'information ne doit pas être donnée uniquement par la forme, taille ou position. Cette règle est-elle respectée ?</h4>
<h5><a id="user-content-test-1091" class="anchor" aria-hidden="true" href="#test-1091"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.9.1</h5>
<ol>
<li>Retrouver dans le document les informations d'un texte données par la forme, la taille ou la position ;</li>
<li>Pour chaque information donnée par la forme, la taille ou la position, vérifier qu'il existe un autre moyen de récupérer cette information ;</li>
<li>Si c'est le cas pour chaque information, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1092" class="anchor" aria-hidden="true" href="#test-1092"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.9.2</h5>
<ol>
<li>Retrouver dans le document les informations d'une image données par la forme, la taille ou la position ;</li>
<li>Pour chaque information donnée par la forme, la taille ou la position, vérifier qu'il existe un autre moyen de récupérer cette information ;</li>
<li>Si c'est le cas pour chaque information, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1093" class="anchor" aria-hidden="true" href="#test-1093"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.9.3</h5>
<ol>
<li>Retrouver dans le document les informations d'un média temporel données par la forme, la taille ou la position ;</li>
<li>Pour chaque information donnée par la forme, la taille ou la position, vérifier qu'il existe un autre moyen de récupérer cette information ;</li>
<li>Si c'est le cas pour chaque information, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1094" class="anchor" aria-hidden="true" href="#test-1094"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.9.4</h5>
<ol>
<li>Retrouver dans le document les informations d'un média non temporel données par la forme, la taille ou la position ;</li>
<li>Pour chaque information donnée par la forme, la taille ou la position, vérifier qu'il existe un autre moyen de récupérer cette information ;</li>
<li>Si c'est le cas pour chaque information, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-1010-dans-chaque-page-web-linformation-ne-doit-pas-être-donnée-par-la-forme-taille-ou-position-uniquement-cette-règle-est-elle-implémentée-de-façon-pertinente" class="anchor" aria-hidden="true" href="#critère-1010-dans-chaque-page-web-linformation-ne-doit-pas-être-donnée-par-la-forme-taille-ou-position-uniquement-cette-règle-est-elle-implémentée-de-façon-pertinente"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 10.10 Dans chaque page web, l'information ne doit pas être donnée par la forme, taille ou position uniquement. Cette règle est-elle implémentée de façon pertinente ?</h4>
<h5><a id="user-content-test-10101" class="anchor" aria-hidden="true" href="#test-10101"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.10.1</h5>
<ol>
<li>Retrouver dans le document les informations d'un texte données par la forme, la taille ou la position ;</li>
<li>Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c'est-à-dire qu'il permet de transmettre l'information dans tous les contextes de consultation et pour tous les utilisateurs.</li>
<li>Si c'est le cas pour chaque information, le test est validé.</li>
</ol>
<h5><a id="user-content-test-10102" class="anchor" aria-hidden="true" href="#test-10102"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.10.2</h5>
<ol>
<li>Retrouver dans le document les informations d'une image données par la forme, la taille ou la position ;</li>
<li>Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c'est-à-dire qu'il permet de transmettre l'information dans tous les contextes de consultation et pour tous les utilisateurs.</li>
<li>Si c'est le cas pour chaque information, le test est validé.</li>
</ol>
<h5><a id="user-content-test-10103" class="anchor" aria-hidden="true" href="#test-10103"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.10.3</h5>
<ol>
<li>Retrouver dans le document les informations d'un média temporel données par la forme, la taille ou la position ;</li>
<li>Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c'est-à-dire qu'il permet de transmettre l'information dans tous les contextes de consultation et pour tous les utilisateurs.</li>
<li>Si c'est le cas pour chaque information, le test est validé.</li>
</ol>
<h5><a id="user-content-test-10104" class="anchor" aria-hidden="true" href="#test-10104"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.10.4</h5>
<ol>
<li>Retrouver dans le document les informations d'un média non temporel données par la forme, la taille ou la position ;</li>
<li>Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c'est-à-dire qu'il permet de transmettre l'information dans tous les contextes de consultation et pour tous les utilisateurs.</li>
<li>Si c'est le cas pour chaque information, le test est validé.</li>
</ol>

<h4><a id="user-content-critère-1011-pour-chaque-page-web-les-contenus-peuvent-ils-être-présentés-sans-avoir-recours-à-la-fois-à-un-défilement-vertical-pour-une-fenêtre-ayant-une-hauteur-de-256px-ou-une-largeur-de-320px-hors-cas-particuliers-" class="anchor" aria-hidden="true" href="#critère-1011-pour-chaque-page-web-les-contenus-peuvent-ils-être-présentés-sans-avoir-recours-à-la-fois-à-un-défilement-vertical-pour-une-fenêtre-ayant-une-hauteur-de-256px-ou-une-largeur-de-320px-hors-cas-particuliers-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 10.11 Pour chaque page web, les contenus peuvent-ils être présentés sans avoir recours à la fois à un défilement vertical pour une fenêtre ayant une hauteur de 256px ou une largeur de 320px (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-10111" class="anchor" aria-hidden="true" href="#test-10111"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.11.1</h5>
<ol>
<li>Retrouver dans le document si son contenu est conçu pour défiler verticalement (le sens de lecture du texte est horizontal), les informations et fonctionnalités ;</li>
<li>Réduire la fenêtre d'affichage à une largeur de 320px et vérifier que les informations et les fonctionnalités restent disponibles sans aucun défilement horizontal ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-10112" class="anchor" aria-hidden="true" href="#test-10112"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.11.2</h5>
<ol>
<li>Retrouver dans le document si son contenu est conçu pour défiler horizontalement (le sens de lecture du texte est vertical), les informations et fonctionnalités ;</li>
<li>Réduire la fenêtre d'affichage à une largeur de 256px et vérifier que les informations et les fonctionnalités restent disponibles sans aucun défilement vertical ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-1012-dans-chaque-page-web-les-propriétés-despacement-du-texte-peuvent-elles-être-redéfinies-par-lutilisateur-sans-perte-de-contenu-ou-de-fonctionnalité-hors-cas-particuliers-" class="anchor" aria-hidden="true" href="#critère-1012-dans-chaque-page-web-les-propriétés-despacement-du-texte-peuvent-elles-être-redéfinies-par-lutilisateur-sans-perte-de-contenu-ou-de-fonctionnalité-hors-cas-particuliers-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 10.12 Dans chaque page web, les propriétés d'espacement du texte peuvent-elles être redéfinies par l'utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-10121" class="anchor" aria-hidden="true" href="#test-10121"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.12.1</h5>
<ol>
<li>Modifier les styles du document en donnant :
<ol>
<li>Une valeur de 1.5 à la propriété <code>line-height</code> de tous les éléments du document ;</li>
<li>Une valeur de 2em à la propriété <code>margin-bottom</code>des éléments <code>&lt;p&gt;</code> ;</li>
<li>Une valeur de 0.12em à la propriété <code>letter-spacing</code> de tous les éléments du document ;</li>
<li>Une valeur de 0.16em à la propriété <code>word-spacing</code> de tous les éléments du document ;</li>
</ol>
</li>
<li>Pour chaque passage de texte, vérifier qu'il reste lisible, à l'exception :
<ol>
<li>Des sous-titres directement intégrés à une vidéo ;</li>
<li>Des images texte ;</li>
<li>Des textes au sein d'une balise <code>&lt;canvas&gt;</code>.</li>
</ol>
</li>
<li>Si c'est le cas pour chaque passage de texte, le test est validé.</li>
</ol>
<p>Note : une implémentation de ces règles de modification est disponible dans les ressources du critère de succès WCAG 1.4.12 (<a href="https://github.com/alastc/adaptation-scripts/blob/master/scripts/text-adaptation.js">https://github.com/alastc/adaptation-scripts/blob/master/scripts/text-adaptation.js</a>).</p>
<h4><a id="user-content-critère-1013-dans-chaque-page-web-les-contenus-additionnels-apparaissant-à-la-prise-de-focus-ou-au-survol-dun-composant-dinterface-sont-ils-contrôlables-par-lutilisateur-hors-cas-particuliers-" class="anchor" aria-hidden="true" href="#critère-1013-dans-chaque-page-web-les-contenus-additionnels-apparaissant-à-la-prise-de-focus-ou-au-survol-dun-composant-dinterface-sont-ils-contrôlables-par-lutilisateur-hors-cas-particuliers-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 10.13 Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d'un composant d'interface sont-ils contrôlables par l'utilisateur (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-10131" class="anchor" aria-hidden="true" href="#test-10131"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.13.1</h5>
<ol>
<li>Retrouver dans le document les contenus additionnels devenant visible à la prise de focus ou au survol d'un composant d'interface, à l'exception :
<ol>
<li>Des contenus additionnels contrôlés par l'agent utilisateur (par exemple, les infobulles associées à l'attribut title ou à la validation native d'un formulaire) ;</li>
<li>Des contenus additionnels devenant visibles par une activation de l'utilisateur (par exemple, une fenêtre de dialogue).</li>
</ol>
</li>
<li>Pour chaque contenu additionnel, vérifier que :
<ol>
<li>Soit le contenu additionnel est positionné de façon à ce qu'il ne gêne pas la consultation des autres contenus informatifs sur lesquels il viendrait se superposer (y compris le composant d'interface qui a déclenché son apparition), quelles que soient les conditions de consultation (y compris lors de l'utilisation d'un mécanisme de zoom) ;</li>
<li>Soit un mécanisme (au clavier) permet de faire disparaître le contenu additionnel (par exemple, la touche Echap).</li>
</ol>
</li>
<li>Si c'est le cas pour chaque contenu additionnel, le test est validé.</li>
</ol>
<h5><a id="user-content-test-10132" class="anchor" aria-hidden="true" href="#test-10132"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.13.2</h5>
<ol>
<li>Retrouver dans le document les contenus additionnels devenant visible au survol d'un composant d'interface, à l'exception :
<ol>
<li>Des contenus additionnels contrôlés par l'agent utilisateur (par exemple, les infobulles associées à l'attribut title ou à la validation native d'un formulaire) ;</li>
<li>Des contenus additionnels devenant visibles par une activation de l'utilisateur (par exemple, une fenêtre de dialogue).</li>
</ol>
</li>
<li>Pour chaque contenu additionnel, vérifier qu'il peut être survolé par le pointeur de la souris sans disparaître ;</li>
<li>Si c'est le cas pour chaque contenu additionnel, le test est validé.</li>
</ol>
<h5><a id="user-content-test-10133" class="anchor" aria-hidden="true" href="#test-10133"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.13.3</h5>
<ol>
<li>Retrouver dans le document les contenus additionnels devenant visible à la prise de focus ou au survol d'un composant d'interface, à l'exception :
<ol>
<li>Des contenus additionnels contrôlés par l'agent utilisateur (par exemple, les infobulles associées à l'attribut title ou à la validation native d'un formulaire) ;</li>
<li>Des contenus additionnels devenant visibles par une activation de l'utilisateur (par exemple, une fenêtre de dialogue).</li>
</ol>
</li>
<li>Pour chaque contenu additionnel, vérifier qu'il reste visible :
<ol>
<li>Jusqu'à ce que l'utilisateur retire le pointeur souris ou le focus du contenu additionnel ou du composant d'interface ayant déclenché son apparition ;</li>
<li>Jusqu'à ce l'utilisateur déclenche le mécanisme prévu pour faire disparaître le contenu additionnel ;</li>
<li>Jusqu'à ce que l'information proposée par le contenu additionnel ne soit plus valide (par exemple un contenu additionnel signalant l'état "occupé" du composant d'interface que l'utilisateur souhaite activer ou encore un message d'erreur signalé sous la forme d'un contenu additionnel tant que l'utilisateur n'a pas rectifié sa saisie).</li>
</ol>
</li>
<li>Si c'est le cas pour chaque contenu additionnel, le test est validé.</li>
</ol>

<h4><a id="user-content-critère-1014-dans-chaque-page-web-les-contenus-additionnels-apparaissant-via-les-styles-css-uniquement-peuvent-ils-être-rendus-visibles-au-clavier-et-par-tout-dispositif-de-pointage-" class="anchor" aria-hidden="true" href="#critère-1014-dans-chaque-page-web-les-contenus-additionnels-apparaissant-via-les-styles-css-uniquement-peuvent-ils-être-rendus-visibles-au-clavier-et-par-tout-dispositif-de-pointage-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 10.14 Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?</h4>
<h5><a id="user-content-test-10141" class="anchor" aria-hidden="true" href="#test-10141"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.14.1</h5>
<ol>
<li>Retrouver dans le document les contenus additionnels devenant visible au survol d'un composant d'interface au moyen d'un mécanisme CSS (pseudo-classe <code>:hover</code>);</li>
<li>Pour chaque contenu additionnel, vérifier que les contenus additionnels apparaissent également :
<ol>
<li>À l'activation du composant au moyen du clavier ou de tout autre dispositif de pointage ;</li>
<li>À la prise de focus du composant ;</li>
<li>À l'activation ou à la prise de focus d'un autre composant.</li>
</ol>
</li>
<li>Si c'est le cas pour chaque contenu additionnel, le test est validé.</li>
</ol>
<h5><a id="user-content-test-10142" class="anchor" aria-hidden="true" href="#test-10142"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 10.14.2</h5>
<ol>
<li>Retrouver dans le document les contenus additionnels devenant visible à la prise de focus d'un composant d'interface au moyen d'un mécanisme CSS (pseudo-classe <code>:focus</code>);</li>
<li>Pour chaque contenu additionnel, vérifier que les contenus additionnels apparaissent également :
<ol>
<li>À l'activation du composant au moyen du clavier ou de tout autre dispositif de pointage ;</li>
<li>Au survol du composant ;</li>
<li>À l'activation ou du survol d'un autre composant.</li>
</ol>
</li>
<li>Si c'est le cas pour chaque contenu additionnel, le test est validé.</li>
</ol>

<h3><a id="user-content-formulaires" class="anchor" aria-hidden="true" href="#formulaires"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Formulaires</h3>
<h4><a id="user-content-critère-111-chaque-champ-de-formulaire-a-t-il-une-étiquette" class="anchor" aria-hidden="true" href="#critère-111-chaque-champ-de-formulaire-a-t-il-une-étiquette"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 11.1 Chaque champ de formulaire a-t-il une étiquette ?</h4>
<h5><a id="user-content-test-1111" class="anchor" aria-hidden="true" href="#test-1111"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.1.1</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire ;</li>
<li>Pour chaque champ de formulaire, vérifier que le champ de formulaire :
<ol>
<li>Possède un attribut WAI-ARIA <code>aria-labelledby</code> référençant un passage de texte identifié ;</li>
<li>Possède un attribut WAI-ARIA <code>aria-label</code> ;</li>
<li>Est associé à un élément <code>&lt;label&gt;</code> ayant un attribut <code>for</code> ;</li>
<li>Possède un attribut <code>title</code> ;</li>
<li>Un bouton adjacent au champ de formulaire lui fournit une étiquette visible et un attribut WAI-ARIA <code>aria-label</code>, <code>aria-labelledby</code> ou <code>title</code> lui fournit un nom accessible.</li>
</ol>
</li>
<li>Si c'est le cas pour champ de formulaire, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1112" class="anchor" aria-hidden="true" href="#test-1112"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.1.2</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire associé à un élément <code>&lt;label&gt;</code> ;</li>
<li>Pour chaque champ de formulaire, vérifier que :
<ol>
<li>Le champ de formulaire possède un attribut <code>id</code> ;</li>
<li>La valeur de l'attribut <code>for</code> de l'élément <code>&lt;label&gt;</code> est égale à la valeur de l'attribut <code>id</code>.</li>
</ol>
</li>
<li>Si c'est le cas pour champ de formulaire, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1113" class="anchor" aria-hidden="true" href="#test-1113"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.1.3</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire dont l'étiquette n'est pas visible ou à proximité (masquée, utilisation de l'attribut <code>aria-label</code>) ou n’est pas accolée au champ (utilisation de l'attribut <code>aria-labelledby</code>) ;</li>
<li>Pour chaque champ de formulaire, vérifier que le champ de formulaire :
<ol>
<li>soit possède un attribut <code>title</code> dont le contenu permet de comprendre la nature de la saisie attendue ;</li>
<li>est accompagné d'un passage de texte accolé au champ qui devient visible à la prise de focus permettant de comprendre la nature de la saisie attendue.</li>
<li>est accompagné d'un passage de texte visible accolé au champ permettant de comprendre la nature de la saisie attendue.</li>
</ol>
</li>
</ol>

<h4><a id="user-content-critère-112-chaque-étiquette-associée-à-un-champ-de-formulaire-est-elle-pertinentehors-cas-particuliers-" class="anchor" aria-hidden="true" href="#critère-112-chaque-étiquette-associée-à-un-champ-de-formulaire-est-elle-pertinentehors-cas-particuliers-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 11.2 Chaque étiquette associée à un champ de formulaire est-elle pertinente (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-1121" class="anchor" aria-hidden="true" href="#test-1121"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.2.1</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire dont l'étiquette est fournie par un élément <code>&lt;label&gt;</code> ;</li>
<li>Pour chaque champ de formulaire, vérifier que le contenu de l'élément est pertinent ;</li>
<li>Si c'est le cas pour chaque champ de formulaire, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1122" class="anchor" aria-hidden="true" href="#test-1122"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.2.2</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire dont l'étiquette est fournie par un attribut <code>title</code> ;</li>
<li>Pour chaque champ de formulaire, vérifier que le contenu de l'attribut est pertinent ;</li>
<li>Si c'est le cas pour chaque champ de formulaire, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1123" class="anchor" aria-hidden="true" href="#test-1123"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.2.3</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire dont l'étiquette est fournie par un attribut WAI-ARIA <code>aria-label</code> ;</li>
<li>Pour chaque champ de formulaire, vérifier que le contenu de l'attribut est pertinent ;</li>
<li>Si c'est le cas pour chaque champ de formulaire, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1124" class="anchor" aria-hidden="true" href="#test-1124"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.2.4</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire dont l'étiquette est fournie par un attribut WAI-ARIA <code>aria-labelledby</code> ;</li>
<li>Pour chaque champ de formulaire, vérifier que le contenu du passage de texte référencé est pertinent ;</li>
<li>Si c'est le cas pour chaque champ de formulaire, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1125" class="anchor" aria-hidden="true" href="#test-1125"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.2.5</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire dont l'étiquette est fournie à la fois par un intitulé visible et par le contenu soit d'un élément <code>&lt;label&gt;</code>, soit d'un attribut <code>title</code> ou d'un attribut <code>aria-label</code> ou d'un attribut <code>aria-labelledby</code> ;</li>
<li>Pour chaque champ de formulaire, vérifier que le contenu de l'élément <code>&lt;label&gt;</code> ou de l'attribut <code>title</code> ou de l'attribut <code>aria-label</code> ou de l'attribut <code>aria-labelledby</code> contient l'intitulé visible ;</li>
<li>Si c'est le cas pour chaque champ de formulaire, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1126" class="anchor" aria-hidden="true" href="#test-1126"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.2.6</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire dont l'étiquette visible est fournie par un bouton adjacent ;</li>
<li>Pour chaque champ de formulaire, vérifier que le contenu visible du bouton est pertinent ;</li>
<li>Si c'est le cas pour chaque champ de formulaire, le test est validé.</li>
</ol>

<h4><a id="user-content-critère-113-dans-chaque-formulaire-chaque-étiquette-associée-à-un-champ-de-formulaire-ayant-la-même-fonction-et-répété-plusieurs-fois-dans-une-même-page-ou-dans-un-ensemble-de-pages-est-elle-cohérente" class="anchor" aria-hidden="true" href="#critère-113-dans-chaque-formulaire-chaque-étiquette-associée-à-un-champ-de-formulaire-ayant-la-même-fonction-et-répété-plusieurs-fois-dans-une-même-page-ou-dans-un-ensemble-de-pages-est-elle-cohérente"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 11.3 Dans chaque formulaire, chaque étiquette associée à un champ de formulaire ayant la même fonction et répété plusieurs fois dans une même page ou dans un ensemble de pages est-elle cohérente ?</h4>
<h5><a id="user-content-test-1131" class="anchor" aria-hidden="true" href="#test-1131"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.3.1</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire ayant une même fonction (par exemple plusieurs champs d'adresse) ;</li>
<li>Pour chaque champ de formulaire, vérifier que les étiquettes sont cohérentes (elles permettent de comprendre qu'il s'agit de saisies de natures identiques) ;</li>
<li>Si c'est le cas pour chaque champ de formulaire, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1132" class="anchor" aria-hidden="true" href="#test-1132"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.3.2</h5>
<ol>
<li>Retrouver dans l'ensemble des pages considérées les champs de formulaire ayant une même fonction (par exemple le champ de saisie d'un moteur de recherche ou le champ de saisie d'inscription à une newsletter) ;</li>
<li>Pour chaque champ de formulaire, vérifier que les étiquettes sont cohérentes (elles permettent de comprendre qu'il s'agit de saisies de natures identiques) ;</li>
<li>Si c'est le cas pour chaque champ de formulaire de l'ensemble des pages considérées, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-114-dans-chaque-formulaire-chaque-étiquette-de-champ-et-son-champ-associé-sont-ils-accolés-hors-cas-particuliers-" class="anchor" aria-hidden="true" href="#critère-114-dans-chaque-formulaire-chaque-étiquette-de-champ-et-son-champ-associé-sont-ils-accolés-hors-cas-particuliers-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 11.4 Dans chaque formulaire, chaque étiquette de champ et son champ associé sont-ils accolés (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-1141" class="anchor" aria-hidden="true" href="#test-1141"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.4.1</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire ;</li>
<li>Pour chaque champ de formulaire, vérifier qu'il est accolé à son étiquette ;</li>
<li>Si c'est le cas pour chaque champ de formulaire, le test est validé.</li>
</ol>

<h5><a id="user-content-test-1142" class="anchor" aria-hidden="true" href="#test-1142"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.4.2</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire qui ne sont pas des éléments <code>&lt;input&gt;</code> de type <code>checkbox</code> ou de type <code>radio</code> ou des éléments ayant un attribut WAI-ARIA <code>role="checkbox"</code>, <code>role="radio"</code> ou <code>role="switch"</code>;</li>
<li>Pour chaque champ de formulaire, vérifier que l'étiquette est visuellement accolée :
<ul>
<li>Immédiatement au-dessus ou à gauche du champ de formulaire lorsque le sens de lecture de la langue de l'étiquette est de gauche à droite ;</li>
<li>Immédiatement au-dessus ou à droite du champ de formulaire lorsque le sens de lecture de la langue de l'étiquette est de droite à gauche.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque champ de formulaire, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1143" class="anchor" aria-hidden="true" href="#test-1143"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.4.3</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire qui sont <code>&lt;input&gt;</code> de type <code>checkbox</code> ou de type <code>radio</code> ou des éléments ayant un attribut WAI-ARIA <code>role="checkbox"</code>, <code>role="radio"</code> ou <code>role="switch"</code>;</li>
<li>Pour chaque champ de formulaire, vérifier que l'étiquette est visuellement accolée :
<ul>
<li>Immédiatement au-dessus ou à droite du champ de formulaire lorsque le sens de lecture de la langue de l'étiquette est de gauche à droite ;</li>
<li>Immédiatement au-dessus ou à gauche du champ de formulaire lorsque le sens de lecture de la langue de l'étiquette est de droite à gauche.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque champ de formulaire, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-115-dans-chaque-formulaire-les-champs-de-même-nature-sont-ils-regroupés-si-nécessaire-" class="anchor" aria-hidden="true" href="#critère-115-dans-chaque-formulaire-les-champs-de-même-nature-sont-ils-regroupés-si-nécessaire-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 11.5 Dans chaque formulaire, les champs de même nature sont-ils regroupés, si nécessaire ?</h4>
<h5><a id="user-content-test-1151" class="anchor" aria-hidden="true" href="#test-1151"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.5.1</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire de même nature (par exemple un groupe de saisie d'informations d'identité, une série de cases à cocher, une saisie de date sur plusieurs champs successifs...) ;</li>
<li>Pour chaque groupe de champs de formulaire de même nature, vérifier que ces champs de même nature sont regroupés :
<ul>
<li>Soit dans un élément <code>&lt;fieldset&gt;</code> ;</li>
<li>Soit dans un élément possédant un attribut WAI-ARIA <code>role="group"</code> ;</li>
<li>Soit dans un élément possédant un attribut WAI-ARIA <code>role="radiogroup"</code> ou <code>"group"</code>, s'il s'agit d'éléments <code>&lt;input&gt;</code> de type <code>radio</code> ( ou d'éléments possédant un attribut WAI-ARIA <code>role="radio"</code>).</li>
</ul>
</li>
<li>Si c'est le cas pour chaque groupe de champs de formulaire de même nature, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-116-dans-chaque-formulaire-chaque-regroupement-de-champs-de-formulaire-a-t-il-une-légende" class="anchor" aria-hidden="true" href="#critère-116-dans-chaque-formulaire-chaque-regroupement-de-champs-de-formulaire-a-t-il-une-légende"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 11.6 Dans chaque formulaire, chaque regroupement de champs de formulaire a-t-il une légende ?</h4>
<h5><a id="user-content-test-1161" class="anchor" aria-hidden="true" href="#test-1161"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.6.1</h5>
<ol>
<li>Retrouver dans le document les groupes de champs de formulaire de même nature ;</li>
<li>Pour chaque groupe de champs de formulaire de même nature, vérifier que :
<ul>
<li>Si le regroupement utilise un élément <code>&lt;fieldset&gt;</code>, l'élément <code>&lt;fieldset&gt;</code> possède un élément <code>&lt;legend&gt;</code> ;</li>
<li>Si l'élément de regroupement utilise un attribut WAI-ARIA <code>role="group"</code> ou <code>"radiogroup"</code>, il possède un attribut WAI-ARIA <code>aria-label</code> ou <code>aria-labelledby</code>.</li>
</ul>
</li>
<li>Sinon, pour chacun des champs de même nature, vérifier la présence :
<ul>
<li>Soit d'un attribut <code>title</code> permettant de déterminer l'appartenance du champ au groupement de champ ;</li>
<li>Soit d'un attribut <code>aria-label</code> permettant de déterminer l'appartenance du champ au groupement de champ ;</li>
<li>Soit d'un attribut <code>aria-labelledby</code> qui référence un passage de texte permettant de déterminer l'appartenance du champ au groupement de champ.</li>
<li>Soit d'un attribut <code>aria-describedby</code> qui référence un passage de texte permettant de déterminer l'appartenance du champ au groupement de champ.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque groupe de champs de formulaire ou pour chacun des champs de même nature, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-117-dans-chaque-formulaire-chaque-légende-associée-à-un-regroupement-de-champs-de-même-nature-est-elle-pertinente" class="anchor" aria-hidden="true" href="#critère-117-dans-chaque-formulaire-chaque-légende-associée-à-un-regroupement-de-champs-de-même-nature-est-elle-pertinente"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 11.7 Dans chaque formulaire, chaque légende associée à un regroupement de champs de même nature est-elle pertinente ?</h4>
<h5><a id="user-content-test-1171" class="anchor" aria-hidden="true" href="#test-1171"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.7.1</h5>
<ol>
<li>Retrouver dans le document les groupes de champs de formulaire de même nature ;</li>
<li>Pour chaque groupe de champs de formulaire de même nature ou pour chacun des champs de même nature qui dispose d'une légende, vérifier que le texte de cette légende est pertinent ;</li>
<li>Si c'est le cas pour chaque groupe de champs de formulaire ou pour chacun des champs de même nature, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-118-dans-chaque-formulaire-les-items-de-même-nature-dune-liste-de-choix-sont-ils-regroupés-de-manière-pertinente-" class="anchor" aria-hidden="true" href="#critère-118-dans-chaque-formulaire-les-items-de-même-nature-dune-liste-de-choix-sont-ils-regroupés-de-manière-pertinente-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 11.8 Dans chaque formulaire, les items de même nature d'une liste de choix sont-ils regroupés de manière pertinente ?</h4>
<h5><a id="user-content-test-1181" class="anchor" aria-hidden="true" href="#test-1181"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.8.1</h5>
<ol>
<li>Retrouver dans le document les listes de sélection (élément <code>&lt;select&gt;</code>) ;</li>
<li>Pour chaque liste de sélection proposant des groupes d'items de même nature, vérifier que ces items sont regroupés au moyen d'éléments <code>&lt;optgroup&gt;</code> ;</li>
<li>Si c'est le cas pour chaque liste de sélection proposant des groupes d'items de même nature, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1182" class="anchor" aria-hidden="true" href="#test-1182"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.8.2</h5>
<ol>
<li>Retrouver dans le document les listes de sélection (élément <code>&lt;select&gt;</code>) qui possèdent des éléments <code>&lt;optgroup&gt;</code> ;</li>
<li>Pour chaque élément <code>&lt;optgroup&gt;</code>, vérifier qu'il possède un attribut <code>label</code> ;</li>
<li>Si c'est le cas pour chaque élément <code>&lt;optgroup&gt;</code>, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1183" class="anchor" aria-hidden="true" href="#test-1183"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.8.3</h5>
<ol>
<li>Retrouver dans le document les listes de sélection (élément <code>&lt;select&gt;</code>) qui possèdent des éléments <code>&lt;optgroup&gt;</code> pourvus d'un attribut <code>label</code> ;</li>
<li>Pour chaque attribut <code>label</code>, vérifier que son contenu est pertinent ;</li>
<li>Si c'est le cas pour chaque attribut <code>label</code>, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-119-dans-chaque-formulaire-lintitulé-de-chaque-bouton-est-il-pertinent" class="anchor" aria-hidden="true" href="#critère-119-dans-chaque-formulaire-lintitulé-de-chaque-bouton-est-il-pertinent"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 11.9 Dans chaque formulaire, l'intitulé de chaque bouton est-il pertinent ?</h4>
<h5><a id="user-content-test-1191" class="anchor" aria-hidden="true" href="#test-1191"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.9.1</h5>
<ol>
<li>Retrouver dans le document les boutons présents au sein d'un formulaire ;</li>
<li>Pour chaque bouton, vérifier que son intitulé visible et son nom accessible sont pertinents ;</li>
<li>Si c'est le cas pour chaque bouton, le test est validé.</li>
</ol>

<h5><a id="user-content-test-1192" class="anchor" aria-hidden="true" href="#test-1192"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.9.2</h5>
<ol>
<li>Retrouver dans le document les boutons présents au sein d'un formulaire ;</li>
<li>Pour chaque bouton, vérifier que son nom accessible contient au moins son intitulé visible ;</li>
<li>Si c'est le cas pour chaque bouton, le test est validé.</li>
</ol>

<h4><a id="user-content-critère-1110-dans-chaque-formulaire-le-contrôle-de-saisie-est-il-utilisé-de-manière-pertinente-" class="anchor" aria-hidden="true" href="#critère-1110-dans-chaque-formulaire-le-contrôle-de-saisie-est-il-utilisé-de-manière-pertinente-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 11.10 Dans chaque formulaire, le contrôle de saisie est-il utilisé de manière pertinente ?</h4>
<h5><a id="user-content-test-11101" class="anchor" aria-hidden="true" href="#test-11101"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.10.1</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire obligatoires ;</li>
<li>Pour chaque champ de formulaire, vérifier que préalablement à la validation du formulaire :
<ul>
<li>Soit une indication de champ obligatoire est visible et permet d'identifier nommément le champ concerné ;</li>
<li>Soit le champ possède un attribut <code>aria-required="true"</code> ou <code>required</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque champ de formulaire obligatoire, le test est validé.</li>
</ol>
<h5><a id="user-content-test-11102" class="anchor" aria-hidden="true" href="#test-11102"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.10.2</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire obligatoires qui possèdent un attribut <code>aria-required="true"</code> ou <code>required</code> ;</li>
<li>Pour chaque champ de formulaire, vérifier que préalablement à la validation du formulaire :
<ul>
<li>Soit une indication de champ obligatoire est visible et située dans l'étiquette associée au champ ;</li>
<li>Soit une indication de champ obligatoire est visible et située dans le passage de texte associé au champ.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque champ de formulaire obligatoire qui possèdent un attribut <code>aria-required="true"</code> ou <code>required</code>, le test est validé.</li>
</ol>
<h5><a id="user-content-test-11103" class="anchor" aria-hidden="true" href="#test-11103"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.10.3</h5>
<ol>
<li>Retrouver dans le document les messages d'erreur indiquant l'absence de saisie d'un champ obligatoire ;</li>
<li>Pour chaque message d'erreur, vérifier que :
<ul>
<li>Soit le message d'erreur est visible et permet d'identifier nommément le champ concerné ;</li>
<li>Soit le champ obligatoire associé au message d'erreur possède un attribut <code>aria-invalid="true"</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque message d'erreur indiquant l'absence de saisie d'un champ obligatoire, le test est validé.</li>
</ol>
<h5><a id="user-content-test-11104" class="anchor" aria-hidden="true" href="#test-11104"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.10.4</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire obligatoires qui possèdent un attribut <code>aria-invalid="true"</code> ;</li>
<li>Pour chaque champ de formulaire, vérifier que :
<ul>
<li>Soit une indication de champ obligatoire est visible et située dans l'étiquette associée au champ ;</li>
<li>Soit une indication de champ obligatoire est visible et située dans le passage de texte associé au champ.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque champ de formulaire obligatoire qui possède un attribut <code>aria-invalid="true"</code>, le test est validé.</li>
</ol>

<h5><a id="user-content-test-11105" class="anchor" aria-hidden="true" href="#test-11105"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.10.5</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire obligatoires auxquels est associée une instruction ou une indication du type de données et/ou de format obligatoire ;</li>
<li>Pour chaque champ de formulaire, vérifier que l'instruction ou l'indication du type de données et/ou de format obligatoire est préalablement à la validation du formulaire :
<ul>
<li>Soit visible et permet d'identifier nommément le champ concerné ;</li>
<li>Soit visible dans l'étiquette ou le passage de texte associé au champ.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque champ de formulaire obligatoire auxquel est associée une instruction ou une indication du type de données et/ou de format obligatoire, le test est validé.</li>
</ol>

<h5><a id="user-content-test-11106" class="anchor" aria-hidden="true" href="#test-11106"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.10.6</h5>
<ol>
<li>Retrouver dans le document les messages d'erreur fournissant une instruction ou une indication du type de données et/ou de format obligatoire d'un champ ;</li>
<li>Pour chaque message d'erreur, vérifier que :
<ul>
<li>Soit le message d'erreur est visible et permet d'identifier nommément le champ concerné ;</li>
<li>Soit le champ associé au message d'erreur possède un attribut <code>aria-invalid="true"</code>.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque message d'erreur indiquant l'absence de saisie d'un champ obligatoire, le test est validé.</li>
</ol>

<h5><a id="user-content-test-11107" class="anchor" aria-hidden="true" href="#test-11107"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.10.7</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire qui possèdent un attribut <code>aria-invalid="true"</code> ;</li>
<li>Pour chaque champ de formulaire, vérifier que :
<ul>
<li>Soit une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans l'élément <code>&lt;label&gt;</code> associé au champ ;</li>
<li>Soit une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans le passage de texte associé au champ.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque champ de formulaire qui possède un attribut <code>aria-invalid="true"</code>, le test est validé.</li>
</ol>

<h4><a id="user-content-critère-1111-dans-chaque-formulaire-le-contrôle-de-saisie-est-il-accompagné-si-nécessaire-de-suggestions-facilitant-la-correction-des-erreurs-de-saisie" class="anchor" aria-hidden="true" href="#critère-1111-dans-chaque-formulaire-le-contrôle-de-saisie-est-il-accompagné-si-nécessaire-de-suggestions-facilitant-la-correction-des-erreurs-de-saisie"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 11.11 Dans chaque formulaire, le contrôle de saisie est-il accompagné, si nécessaire, de suggestions facilitant la correction des erreurs de saisie ?</h4>
<h5><a id="user-content-test-11111" class="anchor" aria-hidden="true" href="#test-11111"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.11.1</h5>
<ol>
<li>Retrouver dans le document les messages d'erreur ;</li>
<li>Pour chaque message d'erreur, vérifier que les types et les formats de données attendus sont suggérés ;</li>
<li>Si c'est le cas pour chaque message d'erreur , le test est validé.</li>
</ol>
<h5><a id="user-content-test-11112" class="anchor" aria-hidden="true" href="#test-11112"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.11.2</h5>
<ol>
<li>Retrouver dans le document les messages d'erreur ;</li>
<li>Pour chaque message d'erreur, vérifier que des exemples de valeurs attendues sont suggérés ;</li>
<li>Si c'est le cas pour chaque message d'erreur , le test est validé.</li>
</ol>

<h4><a id="user-content-critère-1112-pour-chaque-formulaire-qui-modifie-ou-supprime-des-données-ou-qui-transmet-des-réponses-à-un-test-ou-à-un-examen-ou-dont-la-validation-a-des-conséquences-financières-ou-juridiques-la-saisie-des-données-vérifie-t-elle-une-de-ces-conditions-" class="anchor" aria-hidden="true" href="#critère-1112-pour-chaque-formulaire-qui-modifie-ou-supprime-des-données-ou-qui-transmet-des-réponses-à-un-test-ou-à-un-examen-ou-dont-la-validation-a-des-conséquences-financières-ou-juridiques-la-saisie-des-données-vérifie-t-elle-une-de-ces-conditions-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 11.12 Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, la saisie des données vérifie-t-elle une de ces conditions ?</h4>
<h5><a id="user-content-test-11121" class="anchor" aria-hidden="true" href="#test-11121"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.12.1</h5>
<ol>
<li>Retrouver dans le document les formulaires qui modifient ou suppriment des données, ou qui transmettent des réponses à un test ou un examen, ou dont la validation a des conséquences financières ou juridiques ;</li>
<li>Pour chaque formulaire, vérifier que l'utilisateur peut :
<ul>
<li>Soit modifier ou annuler les données et les actions effectuées sur ces données après la validation du formulaire ;</li>
<li>Soit vérifier et corriger les données avant la validation d'un formulaire en plusieurs étapes ;</li>
<li>Soit disposer d'un mécanisme de confirmation explicite (par exemple, une case à cocher ou une étape supplémentaire).</li>
</ul>
</li>
<li>Si c'est le cas pour chaque formulaire retrouvé, le test est validé.</li>
</ol>
<h5><a id="user-content-test-11122" class="anchor" aria-hidden="true" href="#test-11122"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.12.2</h5>
<ol>
<li>Retrouver dans le document les formulaires qui modifient ou suppriment des données à caractère financier, juridique ou personnel ;</li>
<li>Pour chaque formulaire, vérifier que l'utilisateur dispose :
<ul>
<li>Soit d'un mécanisme qui permet de récupérer les données supprimées ou modifiées ;</li>
<li>Soit d'un mécanisme de demande de confirmation explicite de la suppression ou de la modification (par exemple, une case à cocher ou une étape supplémentaire).</li>
</ul>
</li>
<li>Si c'est le cas pour chaque formulaire retrouvé, le test est validé.</li>
</ol>

<h4><a id="user-content-critère-1113-la-finalité-dun-champ-de-saisie-peut-elle-être-déduite-pour-faciliter-le-remplissage-automatique-des-champs-avec-les-données-de-lutilisateur" class="anchor" aria-hidden="true" href="#critère-1113-la-finalité-dun-champ-de-saisie-peut-elle-être-déduite-pour-faciliter-le-remplissage-automatique-des-champs-avec-les-données-de-lutilisateur"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 11.13 La finalité d'un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique des champs avec les données de l'utilisateur ?</h4>
<h5><a id="user-content-test-11131" class="anchor" aria-hidden="true" href="#test-11131"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 11.13.1</h5>
<ol>
<li>Retrouver dans le document les champs de formulaire qui se rapportent à une information concernant l'utilisateur (nom, prénom, numéro de téléphone, etc.) ;</li>
<li>Pour chaque champ de formulaire, vérifier que :
<ol>
<li>Le champ de formulaire possède un attribut <code>autocomplete</code> ;</li>
<li>L'attribut <code>autocomplete</code> est pourvu d'une valeur présente dans la liste des valeurs possibles (voir <a href="https://www.w3.org/TR/html52/sec-forms.html#autofill-processing-model" rel="nofollow">https://www.w3.org/TR/html52/sec-forms.html#autofill-processing-model</a>) ;</li>
<li>La valeur indiquée pour l'attribut <code>autocomplete</code> est pertinente au regard du type d'information attendu.</li>
</ol>
</li>
<li>Si c'est le cas pour chaque champ de formulaire retrouvé, le test est validé.</li>
</ol>
<h3><a id="user-content-navigation" class="anchor" aria-hidden="true" href="#navigation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Navigation</h3>
<h4><a id="user-content-critère-121-chaque-ensemble-de-pages-dispose-t-il-de-deux-systèmes-de-navigation-différents-au-moins-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-121-chaque-ensemble-de-pages-dispose-t-il-de-deux-systèmes-de-navigation-différents-au-moins-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 12.1 Chaque ensemble de pages dispose-t-il de deux systèmes de navigation différents, au moins (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-1211" class="anchor" aria-hidden="true" href="#test-1211"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.1.1</h5>
<ol>
<li>Pour chaque ensemble de pages du site, vérifier la présence :
<ul>
<li>Soit d'un menu de navigation et d'un plan du site ;</li>
<li>Soit d'un menu de navigation et d'un moteur de recherche ;</li>
<li>Soit d'un moteur de recherche et d'un plan du site.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque ensemble de pages du site, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-122-dans-chaque-ensemble-de-pages-le-menu-et-les-barres-de-navigation-sont-ils-toujours-à-la-même-place-" class="anchor" aria-hidden="true" href="#critère-122-dans-chaque-ensemble-de-pages-le-menu-et-les-barres-de-navigation-sont-ils-toujours-à-la-même-place-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 12.2 Dans chaque ensemble de pages, le menu et les barres de navigation sont-ils toujours à la même place ?</h4>
<h5><a id="user-content-test-1221" class="anchor" aria-hidden="true" href="#test-1221"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.2.1</h5>
<ol>
<li>Choisir une page de l'échantillon appartenant au même ensemble que la page en cours d'audit ;</li>
<li>Comparer visuellement les deux pages et vérifier que le menu ou les barres de navigation sont toujours à la même place dans la présentation ;</li>
<li>Comparer le code source (généré côté client) des deux pages et vérifier que le menu ou les barres de navigation se présentent toujours dans le même ordre relatif dans la structure ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<p>Note : le critère est non applicable dans les situations où :</p>
<ul>
<li>Les pages d'un ensemble de pages sont le résultat ou une partie d'un processus (un processus de paiement ou de prise de commande, par exemple) ;</li>
<li>La page est la page d'accueil ;</li>
<li>le site web est constitué d'une seule page.</li>
</ul>
<h4><a id="user-content-critère-123-la-page-plan-du-site-est-elle-pertinente" class="anchor" aria-hidden="true" href="#critère-123-la-page-plan-du-site-est-elle-pertinente"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 12.3 La page « plan du site » est-elle pertinente ?</h4>
<h5><a id="user-content-test-1231" class="anchor" aria-hidden="true" href="#test-1231"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.3.1</h5>
<ol>
<li>Vérifier que le plan du site est représentatif de l'architecture générale du site (cf. note) ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<p>Note : Un plan du site trop complexe ou trop profond n'est pas recommandé pour aider à la navigation. Il n'est pas obligatoire que toutes les pages soient présentes dans le plan du site si elles peuvent être atteintes, par exemple, à partir de la page d'accueil d'une rubrique ou d'un catalogue.</p>
<h5><a id="user-content-test-1232" class="anchor" aria-hidden="true" href="#test-1232"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.3.2</h5>
<ol>
<li>Pour tous les liens du plan du site, vérifier qu'ils sont fonctionnels ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1233" class="anchor" aria-hidden="true" href="#test-1233"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.3.3</h5>
<ol>
<li>Pour tous les liens du plan du site, vérifier qu'ils sont à jour (ni obsolètes ni en erreur) et conduisent à la page indiquée par leur intitulé ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-124-dans-chaque-ensemble-de-pages-la-page-plan-du-site-est-elle-atteignable-de-manière-identique" class="anchor" aria-hidden="true" href="#critère-124-dans-chaque-ensemble-de-pages-la-page-plan-du-site-est-elle-atteignable-de-manière-identique"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 12.4 Dans chaque ensemble de pages, la page « plan du site » est-elle atteignable de manière identique ?</h4>
<h5><a id="user-content-test-1241" class="anchor" aria-hidden="true" href="#test-1241"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.4.1</h5>
<ol>
<li>Choisir une page de l'échantillon appartenant au même ensemble que la page en cours d'audit ;</li>
<li>Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d'accès au plan du site est toujours le même (un lien ou un bouton, par exemple) ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1242" class="anchor" aria-hidden="true" href="#test-1242"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.4.2</h5>
<ol>
<li>Choisir une page de l'échantillon appartenant au même ensemble que la page en cours d'audit ;</li>
<li>Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d'accès au plan du site est toujours à la même place dans la structure (par rapport à l'ordre relatif des éléments de la page, par exemple il est toujours en haut de page) ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1243" class="anchor" aria-hidden="true" href="#test-1243"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.4.3</h5>
<ol>
<li>Choisir une page de l'échantillon appartenant au même ensemble que la page en cours d'audit ;</li>
<li>Comparer visuellement les deux pages et vérifier que le moyen d'accès au plan du site est toujours à la même place dans la présentation ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-125-dans-chaque-ensemble-de-pages-le-moteur-de-recherche-est-il-atteignable-de-manière-identique" class="anchor" aria-hidden="true" href="#critère-125-dans-chaque-ensemble-de-pages-le-moteur-de-recherche-est-il-atteignable-de-manière-identique"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 12.5 Dans chaque ensemble de pages, le moteur de recherche est-il atteignable de manière identique ?</h4>
<h5><a id="user-content-test-1251" class="anchor" aria-hidden="true" href="#test-1251"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.5.1</h5>
<ol>
<li>Choisir une page de l'échantillon appartenant au même ensemble que la page en cours d'audit ;</li>
<li>Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d'accès au moteur de recherche est toujours le même (un champ de formulaire, par exemple) ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1252" class="anchor" aria-hidden="true" href="#test-1252"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.5.2</h5>
<ol>
<li>Choisir une page de l'échantillon appartenant au même ensemble que la page en cours d'audit ;</li>
<li>Comparer visuellement les deux pages et vérifier que le moyen d'accès au moteur de recherche est toujours à la même place dans la présentation ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1253" class="anchor" aria-hidden="true" href="#test-1253"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.5.3</h5>
<ol>
<li>Choisir une page de l'échantillon appartenant au même ensemble que la page en cours d'audit ;</li>
<li>Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d'accès au moteur de recherche est toujours à la même place dans la structure (par rapport à l'ordre relatif des éléments de la page, par exemple il est toujours en haut de page) ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-126-les-zones-de-regroupement-de-contenus-présentes-dans-plusieurs-pages-web-zones-den-tête-de-navigation-principale-de-contenu-principal-de-pied-de-page-et-de-moteur-de-recherche-peuvent-elles-être-atteintes-ou-évitées-" class="anchor" aria-hidden="true" href="#critère-126-les-zones-de-regroupement-de-contenus-présentes-dans-plusieurs-pages-web-zones-den-tête-de-navigation-principale-de-contenu-principal-de-pied-de-page-et-de-moteur-de-recherche-peuvent-elles-être-atteintes-ou-évitées-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 12.6 Les zones de regroupement de contenus présentes dans plusieurs pages web (zones d'en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche) peuvent-elles être atteintes ou évitées ?</h4>
<h5><a id="user-content-test-1261" class="anchor" aria-hidden="true" href="#test-1261"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.6.1</h5>
<ol>
<li>Retrouver dans le document les zones de regroupement de contenus (zones d'en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche) ;</li>
<li>Pour chaque zone, vérifier que la zone :
<ul>
<li>Soit possède un rôle WAI-ARIA de type <code>landmark</code> correspondant à sa nature ;</li>
<li>Soit possède un titre de hiérarchie dont le contenu permet de comprendre la nature du contenu de la zone ;</li>
<li>Soit peut être masquée au moyen d'un bouton précédant directement la zone dans l'ordre du code source ;</li>
<li>Soit peut être évitée au moyen d'un lien d'évitement précédant directement la zone dans l'ordre du code source ;</li>
<li>Soit peut être atteinte au moyen d'un lien d'accès rapide visible à la prise de focus lors d’une tabulation.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque zone de regroupement de contenus, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-127-dans-chaque-page-web-un-lien-dévitement-ou-daccès-rapide-à-la-zone-de-contenu-principal-est-il-présent-hors-cas-particuliers-" class="anchor" aria-hidden="true" href="#critère-127-dans-chaque-page-web-un-lien-dévitement-ou-daccès-rapide-à-la-zone-de-contenu-principal-est-il-présent-hors-cas-particuliers-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 12.7 Dans chaque page web, un lien d'évitement ou d'accès rapide à la zone de contenu principal est-il présent (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-1271" class="anchor" aria-hidden="true" href="#test-1271"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.7.1</h5>
<ol>
<li>Retrouver dans le document la zone de contenu principal (indiquée par l'élément <code>main</code> visible) ;</li>
<li>Vérifier que la zone :
<ul>
<li>Soit peut être évitée au moyen d'un lien d'évitement précédant directement la zone dans l'ordre du code source ;</li>
<li>Soit peut être atteinte au moyen d'un lien d'accès rapide visible à la prise de focus lors d’une tabulation.</li>
</ul>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>

<h5><a id="user-content-test-1272" class="anchor" aria-hidden="true" href="#test-1272"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.7.2</h5>
<ol>
<li>Retrouver dans le document la zone de contenu principal (indiquée par l'élément <code>main</code> visible) ;</li>
<li>Vérifier que le lien d'évitement ou d'accès rapide à la zone est :
<ul>
<li>Situé à la même place dans la présentation ;</li>
<li>Présent toujours dans le même ordre relatif dans le code source (généré côté client) ;</li>
<li>Visible à la prise de focus lors d’une tabulation.</li>
</ul>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<p>Note : lorsque le site web est constitué d'une seule page, l'obligation de la présence d'un lien d'accès rapide est liée au contexte de la page (présence ou absence de navigation ou de contenus additionnels, par exemple). Le critère peut être considéré comme non applicable lorsqu'il est avéré qu'un lien d'accès rapide est inutile.</p>
<h4><a id="user-content-critère-128-dans-chaque-page-web-lordre-de-tabulation-est-il-cohérent" class="anchor" aria-hidden="true" href="#critère-128-dans-chaque-page-web-lordre-de-tabulation-est-il-cohérent"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 12.8 Dans chaque page web, l'ordre de tabulation est-il cohérent ?</h4>
<h5><a id="user-content-test-1281" class="anchor" aria-hidden="true" href="#test-1281"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.8.1</h5>
<ol>
<li>Parcourir dans le document l'ensemble des contenus au moyen de la touche de tabulation vers l'avant (touche Tab) et vers l'arrière (touches Maj+Tab) ;</li>
<li>Vérifier que l'ordre de déplacement du focus reste cohérent relativement au contenu considéré (par exemple, l'ordre de tabulation dans une fenêtre modale ne doit considérer que les éléments d'interface présents au sein de cette fenêtre) ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<p>Note : il n'est pas obligatoire que la tabulation suive l'ordre de lecture naturel (de gauche à droite et de haut en bas par exemple) tant que les éléments sont accessibles dans un ordre cohérent.</p>
<h5><a id="user-content-test-1282" class="anchor" aria-hidden="true" href="#test-1282"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.8.2</h5>
<ol>
<li>Retrouver dans le document l'ensemble des contenus insérés au moyen d'un script (affichage d'éléments masqués, mise jour de contenu via AJAX par exemple) ;</li>
<li>Positionner la tabulation sur l'élément déclencheur et l'activer ;</li>
<li>Après l'affichage du contenu mis à jour, vérifier que la tabulation reste cohérente (repositionnement correct du focus) ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-129-dans-chaque-page-web-la-navigation-ne-doit-pas-contenir-de-piège-au-clavier-cette-règle-est-elle-respectée" class="anchor" aria-hidden="true" href="#critère-129-dans-chaque-page-web-la-navigation-ne-doit-pas-contenir-de-piège-au-clavier-cette-règle-est-elle-respectée"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 12.9 Dans chaque page web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée ?</h4>
<h5><a id="user-content-test-1291" class="anchor" aria-hidden="true" href="#test-1291"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.9.1</h5>
<ol>
<li>Retrouver dans le document l'ensemble des éléments d'interface susceptibles de recevoir le focus (au moyen de la tabulation ou au moyen d'un script) ;</li>
<li>Pour chaque élément d'interface, vérifier que l'utilisateur peut atteindre l'élément suivant ou précédent pouvant recevoir le focus :
<ul>
<li>Soit au moyen de la touche de tabulation (Tab ou Maj+Tab) ;</li>
<li>Soit au moyen d'une autre interaction clavier dont l'utilisateur est informé (par exemple, les flèches de direction).</li>
</ul>
</li>
<li>Si c'est le cas pour chaque élément d'interface, le test est validé.</li>
</ol>
<p>Note : certains éléments d'interface complexes, comme un groupe de boutons radio, une liste de sélection et tous les composants développés avec WAI-ARIA font appel à des navigations optimisées qui utilisent généralement les flèches de direction pour passer d'une partie du composant à l'autre. Par exemple, dans un groupe de boutons radio les options sont navigables avec les flèches de direction. De même dans un système d'onglets l'utilisateur active les onglets avec les flèches de direction.
Le test sur le piège au clavier se limite alors à vérifier que le composant est atteint avec la tabulation et qu'il est possible de passer au composant suivant ou revenir au composant précédent.</p>
<h4><a id="user-content-critère-1210-dans-chaque-page-web-les-raccourcis-clavier-nutilisant-quune-seule-touche-lettre-minuscule-ou-majuscule-ponctuation-chiffre-ou-symbole-sont-ils-contrôlables-par-lutilisateur-" class="anchor" aria-hidden="true" href="#critère-1210-dans-chaque-page-web-les-raccourcis-clavier-nutilisant-quune-seule-touche-lettre-minuscule-ou-majuscule-ponctuation-chiffre-ou-symbole-sont-ils-contrôlables-par-lutilisateur-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 12.10 Dans chaque page web, les raccourcis clavier n'utilisant qu'une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) sont-ils contrôlables par l’utilisateur ?</h4>
<h5><a id="user-content-test-12101" class="anchor" aria-hidden="true" href="#test-12101"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.10.1</h5>
<ol>
<li>Retrouver dans le document l'ensemble des raccourcis clavier proposés à l'utilisateur ;</li>
<li>Pour chaque raccourci clavier, vérifier que :
<ul>
<li>Soit un mécanisme est disponible pour désactiver le raccourci clavier ;</li>
<li>Soit un mécanisme est disponible pour configurer la touche de raccourci clavier au moyen des touches de modification (Ctrl, Alt, Maj, etc.).</li>
<li>Soit, dans le cas d'un composant d'interface utilisateur, le raccourci clavier qui lui est associé ne peut être activé que si le focus clavier est sur ce composant.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque raccourci clavier, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-1211-dans-chaque-page-web-les-contenus-additionnels-apparaissant-au-survol-à-la-prise-de-focus-ou-à-lactivation-dun-composant-dinterface-sont-ils-si-nécessaire-atteignables-au-clavier-" class="anchor" aria-hidden="true" href="#critère-1211-dans-chaque-page-web-les-contenus-additionnels-apparaissant-au-survol-à-la-prise-de-focus-ou-à-lactivation-dun-composant-dinterface-sont-ils-si-nécessaire-atteignables-au-clavier-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 12.11 Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l'activation d'un composant d'interface sont-ils, si nécessaire, atteignables au clavier ?</h4>
<h5><a id="user-content-test-12111" class="anchor" aria-hidden="true" href="#test-12111"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 12.11.1</h5>
<ol>
<li>Retrouver dans le document l'ensemble des contenus additionnels apparaissant au survol, à la prise de focus ou à l'activation d'un composant d'interface ;</li>
<li>Pour chaque contenu additionnel, s'il contient des composants d'interface avec lesquels l'utilisateur peut interagir au clavier (par exemple, une infobulle personnalisée qui propose un lien dans son contenu), vérifier que ces composants d'interface sont atteignables au clavier ;</li>
<li>Si c'est le cas pour chaque contenu additionnel, le test est validé.</li>
</ol>
<h3><a id="user-content-consultation" class="anchor" aria-hidden="true" href="#consultation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Consultation</h3>
<h4><a id="user-content-critère-131-pour-chaque-page-web-lutilisateur-a-t-il-le-contrôle-de-chaque-limite-de-temps-modifiant-le-contenu-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-131-pour-chaque-page-web-lutilisateur-a-t-il-le-contrôle-de-chaque-limite-de-temps-modifiant-le-contenu-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 13.1 Pour chaque page web, l'utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-1311" class="anchor" aria-hidden="true" href="#test-1311"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.1.1</h5>
<ol>
<li>Retrouver dans le document les rafraîchissements initiés dans le contenu par un élément <code>&lt;object&gt;</code>, <code>&lt;embed&gt;</code>, <code>&lt;svg&gt;</code>, <code>&lt;canvas&gt;</code> ou par un élément <code>&lt;meta http-equiv="refresh" content="[compteur]"&gt;</code> (dans l'élément <code>&lt;head&gt;</code> de la page) ;</li>
<li>Pour chaque rafraîchissement, vérifier que :
<ul>
<li>Soit la présence d'un mécanisme permet à l'utilisateur de stopper et de relancer le rafraîchissement ;</li>
<li>Soit la présence d'un mécanisme permet à l'utilisateur d'augmenter la limite de temps entre deux rafraîchissements de dix fois, au moins ;</li>
<li>Soit la présence d'un mécanisme qui avertit l'utilisateur de l'imminence du rafraîchissement, laisse 20 secondes, au moins, à l'utilisateur, pour augmenter la limite de temps avant le prochain rafraîchissement ;</li>
<li>Soit la limite de temps entre deux rafraîchissements est de vingt heures, au moins.</li>
</ul>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1312" class="anchor" aria-hidden="true" href="#test-1312"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.1.2</h5>
<ol>
<li>Retrouver dans le document une redirection automatique initiée par un élément <code>&lt;meta http-equiv="refresh" content="0;URL='[URL ciblée]'" /&gt;</code> ;</li>
<li>Vérifier que la redirection est immédiate ;</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1313" class="anchor" aria-hidden="true" href="#test-1313"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.1.3</h5>
<ol>
<li>Retrouver dans le document les redirections automatiques initiées par un script (sous la forme d'un décompte par exemple) ;</li>
<li>Pour chaque redirection automatique, vérifier que :
<ul>
<li>Soit la présence d'un mécanisme permet à l'utilisateur de stopper et relancer la redirection ;</li>
<li>Soit la présence d'un mécanisme permet à l'utilisateur d'augmenter la limite de temps avant le rafraîchissement de dix fois, au moins ;</li>
<li>Soit la présence d'un mécanisme qui avertit l'utilisateur de l'imminence du rafraîchissement, laisse 20 secondes, au moins, à l'utilisateur, pour augmenter la limite de temps avant le prochain rafraîchissement ;</li>
<li>Soit la limite de temps avant la redirection est de vingt heures, au moins.</li>
</ul>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>

<h5><a id="user-content-test-1314" class="anchor" aria-hidden="true" href="#test-1314"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.1.4</h5>
<ol>
<li>Retrouver dans le document les procédés limitant le temps d'une session (par exemple, après une authentification) ;</li>
<li>Pour chaque procédé, vérifier que :
<ul>
<li>Soit la présence d'un mécanisme permet à l'utilisateur de supprimer la limite de temps ;</li>
<li>Soit la présence d'un mécanisme permet à l'utilisateur d'augmenter la limite de temps ;</li>
<li>Soit la limite de temps est de vingt heures, au moins.</li>
</ul>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<p>Note : lorsque la limite de temps est essentielle, notamment lorsqu'elle ne pourrait pas être supprimée sans changer fondamentalement le contenu ou les fonctionnalités liées au contenu, le critère est non applicable. Par exemple, le rafraîchissement d'un flux RSS dans une page n'est pas une limite de temps essentielle ; le critère est applicable. En revanche, une redirection automatique qui amène vers la nouvelle version d'une page à partir d'une url obsolète est essentielle ; le critère est non applicable.</p>
<h4><a id="user-content-critère-132-dans-chaque-page-web-louverture-dune-nouvelle-fenêtre-ne-doit-pas-être-déclenchée-sans-action-de-lutilisateur-cette-règle-est-elle-respectée" class="anchor" aria-hidden="true" href="#critère-132-dans-chaque-page-web-louverture-dune-nouvelle-fenêtre-ne-doit-pas-être-déclenchée-sans-action-de-lutilisateur-cette-règle-est-elle-respectée"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 13.2 Dans chaque page web, l'ouverture d'une nouvelle fenêtre ne doit pas être déclenchée sans action de l'utilisateur. Cette règle est-elle respectée ?</h4>
<h5><a id="user-content-test-1321" class="anchor" aria-hidden="true" href="#test-1321"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.2.1</h5>
<ol>
<li>Vérifier qu'à l'ouverture du document, aucune nouvelle fenêtre (pop-up ou pop-under, par exemple) n'est ouverte.</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-133-dans-chaque-page-web-chaque-document-bureautique-en-téléchargement-possède-t-il-si-nécessaire-une-version-accessible-" class="anchor" aria-hidden="true" href="#critère-133-dans-chaque-page-web-chaque-document-bureautique-en-téléchargement-possède-t-il-si-nécessaire-une-version-accessible-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 13.3 Dans chaque page web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une version accessible ?</h4>
<h5><a id="user-content-test-1331" class="anchor" aria-hidden="true" href="#test-1331"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.3.1</h5>
<ol>
<li>Retrouver dans le document les liens et les contrôles de formulaire (un bouton de formulaire ou un formulaire de téléchargement par exemple) permettant de télécharger un fichier au format bureautique ;</li>
<li>Pour chaque fichier au format bureautique, vérifier la présence d'une version alternative présentée comme accessible :
<ul>
<li>Pour les documents au format .pdf, analyser le fichier avec l'outil PAC (PDF Accessibility Checker) et vérifier l'absence d'erreur d'accessibilité dans le document (cf. note) ;</li>
<li>Pour les documents au format .doc ou .docx, analyser le fichier avec l'outil de vérification d'accessibilité de Microsoft Office (à partir de la version 2010) et vérifier l'absence d'erreur d'accessibilité (cf. note) ;</li>
<li>Pour les documents au format .odt, analyser le document avec l'éditeur OpenOffice et vérifier que l'ensemble des contenus est conforme avec la liste des critères « Liste document bureautique en téléchargement » (cf. note pour une méthode alternative) ;</li>
<li>Pour les documents au format EPUB/DAISY, analyser le document avec un éditeur EPUB/DAISY et vérifier que l'ensemble des contenus est conforme avec la liste des critères « Liste document bureautique en téléchargement ».</li>
<li>Pour les documents eux-mêmes au format .html, analyser l'accessibilité du document.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque fichier au format bureautique, le test est validé.</li>
</ol>
<p>Note au sujet de l'outil PAC : l'outil analyse le document PDF du point de vue de l'accessibilité mais également de critères de qualité (par exemple la norme PDF/UA). Seules les erreurs relatives à des critères présents dans la liste des critères « Liste document bureautique en téléchargement » rendent le critère « Non conforme ». Par ailleurs, cet outil ne fonctionne que sur la plateforme Windows. Sur Mac, le contrôle doit se faire manuellement.</p>
<p>Note au sujet Microsoft Office : le logiciel offre un vérificateur d'accessibilité en standard, (accessible via le menu « Fichier &gt; Informations &gt; Vérifier la présence de problèmes &gt; Vérifier l'accessibilité »). Ce vérificateur peut être considérablement amélioré via le plugin Word Accessibility Plug-in (voir dans la section Outils). Ce plugin ne fonctionne que sur Windows. Sur Mac, le contrôle doit se faire manuellement.</p>
<p>Note au sujet des documents au format .odt : OpenOffice et LibreOffice ne possèdent pas de vérificateur d'accessibilité. Une méthode plus rapide qu'une analyse manuelle peut consister à enregistrer le document au format .docx et le vérifier via le vérificateur d'accessibilité de Microsoft Office 2010. Attention cependant : cette méthode rapide est à réserver aux documents très simples car certaines informations liées à l'accessibilité ne sont pas correctement transcodées. C'est le cas des indications de langue, de certaines alternatives d'images ou d'en-têtes fusionnées sur les tableaux par exemple.</p>
<p>Note au sujet du format EPUB : l'utilitaire Ace by DAISY App permet d'effectuer le travail de validation d'un fichier EPUB 3 de manière efficace.</p>
<p>Note au sujet des documents dérogés : le référentiel propose un statut de dérogation dans certains cas (cf. guide d'accompagnement). Dans ce cas, les tests ne sont pas à réaliser, la version accessible étant fournie sur demande de l'utilisateur.</p>
<p>Note à l'attention des personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si les fichiers bureautiques (ex : PDF, documents Microsoft ou libreOffice, etc.) ont été publiés avant le 23 septembre 2018 (sauf si ce sont des documents nécessaires pour accomplir une démarche administrative relevant des tâches effectuées par l'organisme concerné), ils sont exemptés de l’obligation d’accessibilité.</p>
<h4><a id="user-content-critère-134-pour-chaque-document-bureautique-ayant-une-version-accessible-cette-version-offre-t-elle-la-même-information" class="anchor" aria-hidden="true" href="#critère-134-pour-chaque-document-bureautique-ayant-une-version-accessible-cette-version-offre-t-elle-la-même-information"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 13.4 Pour chaque document bureautique ayant une version accessible, cette version offre-t-elle la même information ?</h4>
<h5><a id="user-content-test-1341" class="anchor" aria-hidden="true" href="#test-1341"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.4.1</h5>
<ol>
<li>Retrouver dans le document les fichiers en téléchargement au format bureautique accompagné de leur version alternative accessible ;</li>
<li>Pour chaque couple de fichiers, ouvrir les deux documents (le document d'origine et le document accessible) et vérifier que les deux documents apportent la même information ;</li>
<li>Si c'est le cas pour chaque couple de fichiers, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-135-dans-chaque-page-web-chaque-contenu-cryptique-art-ascii-émoticon-syntaxe-cryptique-a-t-il-une-alternative" class="anchor" aria-hidden="true" href="#critère-135-dans-chaque-page-web-chaque-contenu-cryptique-art-ascii-émoticon-syntaxe-cryptique-a-t-il-une-alternative"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 13.5 Dans chaque page web, chaque contenu cryptique (art ASCII, émoticon, syntaxe cryptique) a-t-il une alternative ?</h4>
<h5><a id="user-content-test-1351" class="anchor" aria-hidden="true" href="#test-1351"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.5.1</h5>
<ol>
<li>Retrouver dans le document les contenus cryptiques (art ASCII, émoticône, syntaxe cryptique) ;</li>
<li>Pour chaque contenu cryptique, vérifier que :
<ul>
<li>Soit une définition est disponible au moyen d'un attribut <code>title</code>, sur un lien, un contrôle de formulaire, une abréviation (élément <code>&lt;abbr&gt;</code>) par exemple ;</li>
<li>Soit une définition est donnée dans le contexte adjacent (immédiatement avant ou après).</li>
</ul>
</li>
<li>Si c'est le cas pour chaque contenu cryptique, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-136-dans-chaque-page-web-pour-chaque-contenu-cryptique-art-ascii-émoticon-syntaxe-cryptique-ayant-une-alternative-cette-alternative-est-elle-pertinente" class="anchor" aria-hidden="true" href="#critère-136-dans-chaque-page-web-pour-chaque-contenu-cryptique-art-ascii-émoticon-syntaxe-cryptique-ayant-une-alternative-cette-alternative-est-elle-pertinente"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 13.6 Dans chaque page web, pour chaque contenu cryptique (art ASCII, émoticon, syntaxe cryptique) ayant une alternative, cette alternative est-elle pertinente ?</h4>
<h5><a id="user-content-test-1361" class="anchor" aria-hidden="true" href="#test-1361"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.6.1</h5>
<ol>
<li>Retrouver dans le document les contenus cryptiques (art ASCII, émoticône, syntaxe cryptique) ;</li>
<li>Pour chaque contenu cryptique, vérifier que la définition donnée est pertinente.</li>
<li>Si c'est le cas pour chaque contenu cryptique, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-137-dans-chaque-page-web-les-changements-brusques-de-luminosité-ou-les-effets-de-flash-sont-ils-correctement-utilisés" class="anchor" aria-hidden="true" href="#critère-137-dans-chaque-page-web-les-changements-brusques-de-luminosité-ou-les-effets-de-flash-sont-ils-correctement-utilisés"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 13.7 Dans chaque page web, les changements brusques de luminosité ou les effets de flash sont-ils correctement utilisés ?</h4>
<h5><a id="user-content-test-1371" class="anchor" aria-hidden="true" href="#test-1371"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.7.1</h5>
<ol>
<li>Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash de type image animée, vidéo (cf. note) ou animation (éléments <code>&lt;img&gt;</code>, <code>&lt;svg&gt;</code>, <code>&lt;canvas&gt;</code>, <code>&lt;embed&gt;</code>, <code>&lt;object&gt;</code> ou <code>&lt;video&gt;</code>) ;</li>
<li>Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
<ul>
<li>Soit la fréquence de l'effet est inférieur à 3 par seconde ;</li>
<li>Soit la surface cumulée est inférieure à 21824 pixels.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque contenu clignotant ou provoquant des effets de flash, le test est validé.</li>
</ol>
<p>Note : l'évaluation de ce critère peut être complexe. Lorsque l'effet est géré par un script ou au moyen de CSS, l'analyse du code est suffisante. L'outil PEAT permet d'analyser les vidéos au format .avi, par exemple. Un exemple de vidéo ayant provoquée des crises d'épilepsie peut être consulté ici : London 2012 Olympics Seizure (<a href="https://www.youtube.com/watch?v=vs0hfhSje9M" rel="nofollow">https://www.youtube.com/watch?v=vs0hfhSje9M</a>).</p>
<h5><a id="user-content-test-1372" class="anchor" aria-hidden="true" href="#test-1372"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.7.2</h5>
<ol>
<li>Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash obtenus au moyen d'un script ;</li>
<li>Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
<ul>
<li>Soit la fréquence de l'effet est inférieur à 3 par seconde ;</li>
<li>Soit la surface cumulée est inférieure à 21824 pixels.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque contenu clignotant ou provoquant des effets de flash, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1373" class="anchor" aria-hidden="true" href="#test-1373"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.7.3</h5>
<ol>
<li>Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash obtenus au moyen d'une animation CSS ;</li>
<li>Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
<ul>
<li>Soit la fréquence de l'effet est inférieur à 3 par seconde ;</li>
<li>Soit la surface cumulée est inférieure à 21824 pixels.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque contenu clignotant ou provoquant des effets de flash, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-138-dans-chaque-page-web-chaque-contenu-en-mouvement-ou-clignotant-est-il-contrôlable-par-lutilisateur" class="anchor" aria-hidden="true" href="#critère-138-dans-chaque-page-web-chaque-contenu-en-mouvement-ou-clignotant-est-il-contrôlable-par-lutilisateur"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 13.8 Dans chaque page web, chaque contenu en mouvement ou clignotant est-il contrôlable par l'utilisateur ?</h4>
<h5><a id="user-content-test-1381" class="anchor" aria-hidden="true" href="#test-1381"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.8.1</h5>
<ol>
<li>Retrouver dans le document les contenus en mouvement (obtenus au moyen d'une image, d'un script ou d'un effet CSS) déclenchés automatiquement au chargement de la page ou lors de l'affichage d'un contenu (cf. note) ;</li>
<li>Pour chaque contenu, vérifier que :
<ul>
<li>Soit la durée du mouvement est inférieure à 5 secondes ;</li>
<li>Soit la présence d'un mécanisme (un bouton, par exemple) permet d'arrêter et de relancer le mouvement ;</li>
<li>Soit la présence d'un mécanisme (un bouton, par exemple) permet de cacher et d'afficher à nouveau le contenu en mouvement ;</li>
<li>Soit la présence d'un mécanisme (un bouton, par exemple) permet d'afficher la totalité du contenu sans mouvement.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque contenu en mouvement, le test est validé.</li>
</ol>
<h5><a id="user-content-test-1382" class="anchor" aria-hidden="true" href="#test-1382"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.8.2</h5>
<ol>
<li>Retrouver dans le document les contenus clignotants (obtenus au moyen d'une image, d'un script ou d'un effet CSS) déclenchés automatiquement au chargement de la page ou lors de l'affichage d'un contenu (cf. note).</li>
<li>Pour chaque contenu, vérifier que :
<ul>
<li>Soit la durée du clignotement est inférieure à 5 secondes ;</li>
<li>Soit la présence d'un mécanisme (un bouton, par exemple) permet d'arrêter et de relancer le clignotement ;</li>
<li>Soit la présence d'un mécanisme (un bouton, par exemple) permet de cacher et d'afficher à nouveau le contenu clignotant ;</li>
<li>Soit la présence d'un mécanisme (un bouton, par exemple) permet d'afficher la totalité du contenu clignotement.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque contenu clignotant, le test est validé.</li>
</ol>
<p>Note : l'arrêt ou la mise en pause d'un contenu en mouvement ou clignotant au moyen de la prise de focus (par exemple, l'effet est suspendu uniquement pendant la prise de focus) n'est pas considéré comme un procédé conforme. Dans certains cas, le mouvement ne peut pas être arrêté, par exemple dans le cas d'une barre de progression, dans ce cas, le critère est non applicable.</p>
<h4><a id="user-content-critère-139-dans-chaque-page-web-le-contenu-proposé-est-il-consultable-quelle-que-soit-lorientation-de-lécran-portait-ou-paysage-hors-cas-particuliers-" class="anchor" aria-hidden="true" href="#critère-139-dans-chaque-page-web-le-contenu-proposé-est-il-consultable-quelle-que-soit-lorientation-de-lécran-portait-ou-paysage-hors-cas-particuliers-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 13.9 Dans chaque page web, le contenu proposé est-il consultable quelle que soit l'orientation de l'écran (portait ou paysage) (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-1391" class="anchor" aria-hidden="true" href="#test-1391"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.9.1</h5>
<ol>
<li>Consulter le document dans un mode d'orientation portrait puis dans un mode d'orientation paysage ;</li>
<li>Vérifier que :
<ul>
<li>La consultation est possible quel que soit le mode d'orientation de l'écran.</li>
<li>Le contenu proposé reste le même quel que soit le mode d'orientation de l'écran utilisé même si sa présentation et le moyen d'y accéder peut différer.</li>
</ul>
</li>
<li>Si c'est le cas, le test est validé.</li>
</ol>
<p>Note : il existe des interfaces pour lesquelles l'orientation du périphérique est essentielle à leur utilisation. Dans ces situations, le critère est non applicable. Il peut s'agir d'interfaces de jeu, de piano, de dépôt de chèques bancaires, etc. Si l'interface est le seul moyen d'accéder au service proposé, une alternative devrait être mise en place pour pallier cette carence.</p>
<h4><a id="user-content-critère-1310-dans-chaque-page-web-les-fonctionnalités-utilisables-ou-disponibles-au-moyen-dun-geste-complexe-peuvent-elles-être-également-disponibles-au-moyen-dun-geste-simple-hors-cas-particuliers-" class="anchor" aria-hidden="true" href="#critère-1310-dans-chaque-page-web-les-fonctionnalités-utilisables-ou-disponibles-au-moyen-dun-geste-complexe-peuvent-elles-être-également-disponibles-au-moyen-dun-geste-simple-hors-cas-particuliers-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 13.10 Dans chaque page web, les fonctionnalités utilisables ou disponibles au moyen d'un geste complexe peuvent-elles être également disponibles au moyen d'un geste simple (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-13101" class="anchor" aria-hidden="true" href="#test-13101"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.10.1</h5>
<ol>
<li>Retrouver dans le document les fonctionnalités utilisables ou disponibles au moyen d'une interaction au toucher de type contact multipoint ;</li>
<li>Pour chaque fonctionnalité, vérifier qu'elle reste disponible au moyen d'une interaction au toucher de type contact en un point unique de l'écran (par exemple, la possibilité de consulter les éléments d'une liste par un mouvement de balayage horizontal droit ou gauche doit aussi être disponible au moyen de boutons "précédent" et "suivant" ou encore un geste de pincer et zoomer qui peut être alternativement  réalisé au moyen de boutons "plus" et "moins") ;</li>
<li>Si c'est le cas pour chaque fonctionnalité utilisable ou disponible au moyen d'une interaction au toucher de type contact multipoint, le test est validé.</li>
</ol>
<h5><a id="user-content-test-13102" class="anchor" aria-hidden="true" href="#test-13102"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.10.2</h5>
<ol>
<li>Retrouver dans le document les fonctionnalités utilisables ou disponibles au moyen d'une interaction au toucher qui implique le suivi d'une trajectoire sur l'écran ;</li>
<li>Pour chaque fonctionnalité, vérifier qu'elle reste disponible au moyen d'une interaction au toucher de type contact en un point unique de l'écran (par exemple, la possibilité de composer son mot de passe en suivant une trajectoire sur un clavier virtuel doit aussi être disponible au moyen de pressions successives sur les touches du clavier) ;</li>
<li>Si c'est le cas pour chaque fonctionnalité utilisable ou disponible au moyen d'une interaction au toucher qui implique le suivi d'une trajectoire sur l'écran, le test est validé.</li>
</ol>

<p>Cas particuliers
Il existe une gestion de cas particuliers dans deux types de situation :
• Le critère ne s'applique qu'à des fonctionnalités mises en place par l'auteur du site. Il ne concerne donc pas les gestes requis par l'agent utilisateur ou le système d'exploitation.
• Le critère ne s'applique pas aux fonctionnalités dont la réalisation d'un geste complexe est essentielle (exécuter le tracé d'une signature, par exemple).
--&gt;</p>
<h4><a id="user-content-critère-1311-dans-chaque-page-web-les-actions-déclenchées-au-moyen-dun-dispositif-de-pointage-sur-un-point-unique-de-lécran-peuvent-elles-faire-lobjet-dune-annulation-hors-cas-particuliers-" class="anchor" aria-hidden="true" href="#critère-1311-dans-chaque-page-web-les-actions-déclenchées-au-moyen-dun-dispositif-de-pointage-sur-un-point-unique-de-lécran-peuvent-elles-faire-lobjet-dune-annulation-hors-cas-particuliers-"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 13.11 Dans chaque page web, les actions déclenchées au moyen d'un dispositif de pointage sur un point unique de l'écran peuvent-elles faire l'objet d'une annulation (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-13111" class="anchor" aria-hidden="true" href="#test-13111"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.11.1</h5>
<ol>
<li>Retrouver dans le document les actions déclenchées au moyen d'un dispositif de pointage sur un point unique de l'écran ;</li>
<li>Pour chaque action, vérifier que :
<ul>
<li>Soit l'action est déclenchée au moment où le dispositif de pointage est relâché ou relevé ;</li>
<li>Soit l'action est déclenchée au moment où le dispositif de pointage est pressé ou posé puis annulée lorsque le dispositif de pointage est relâché ou relevé ;</li>
<li>Soit il existe un mécanisme pour abandonner (avant achèvement de l'action) ou annuler (après achèvement) l'exécution de l'action ; par exemple, lors d'une interaction de type glisser-déposer un relâchement du dispositif de pointage doit permettre d'abandonner l'interaction en cours et une fois la zone de dépôt atteinte, l'utilisateur doit rester en mesure d'annuler son opération de dépôt au moyen d'un dialogue de confirmation (choix de confirmer ou d'annuler le dépôt) ou par le fait de pouvoir replacer l'élément déposé à sa position initiale.</li>
</ul>
</li>
<li>Si c'est le cas pour chaque action déclenchée au moyen d'un dispositif de pointage sur un point unique de l'écran, le test est validé.</li>
</ol>
<h4><a id="user-content-critère-1312-dans-chaque-page-web-les-fonctionnalités-qui-impliquent-un-mouvement-de-lappareil-ou-vers-lappareil-peuvent-elles-être-satisfaites-de-manière-alternative-hors-cas-particuliers" class="anchor" aria-hidden="true" href="#critère-1312-dans-chaque-page-web-les-fonctionnalités-qui-impliquent-un-mouvement-de-lappareil-ou-vers-lappareil-peuvent-elles-être-satisfaites-de-manière-alternative-hors-cas-particuliers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Critère 13.12 Dans chaque page web, les fonctionnalités qui impliquent un mouvement de l'appareil ou vers l'appareil peuvent-elles être satisfaites de manière alternative (hors cas particuliers) ?</h4>
<h5><a id="user-content-test-13121" class="anchor" aria-hidden="true" href="#test-13121"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.12.1</h5>
<ol>
<li>Retrouver dans le document les fonctionnalités disponibles en bougeant l'appareil ;</li>
<li>Pour chaque fonctionnalité, vérifier qu'elle peut être accomplie au moyen de composants d'interface utilisateur ;</li>
<li>Si c'est le cas pour chaque fonctionnalité disponible en bougeant l'appareil, le test est validé.</li>
</ol>
<h5><a id="user-content-test-13122" class="anchor" aria-hidden="true" href="#test-13122"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.12.2</h5>
<ol>
<li>Retrouver dans le document les fonctionnalités disponibles en faisant un geste en direction de l'appareil ;</li>
<li>Pour chaque fonctionnalité, vérifier qu'elle peut être accomplie au moyen de composants d'interface utilisateur ;</li>
<li>Si c'est le cas pour chaque fonctionnalité disponible en faisant un geste en direction de l'appareil, le test est validé.</li>
</ol>
<h5><a id="user-content-test-13123" class="anchor" aria-hidden="true" href="#test-13123"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Test 13.12.3</h5>
<ol>
<li>Retrouver dans le document les fonctionnalités disponibles en mettant en mouvement l'appareil ;</li>
<li>Vérifier si l'utilisateur à la possibilité de désactiver la détection du mouvement ;</li>
<li>Si c'est le cas, pour chaque fonctionnalité, vérifier qu'elle ne peut pas être déclenchée ;</li>
<li>Si c'est le cas pour chaque fonctionnalité disponible en mettant en mouvement l'appareil, le test est validé.</li>
</ol>

<p>Cas particuliers
Il existe une gestion de cas particulier lorsque :
• Le mouvement est essentiel à l'accomplissement de la fonctionnalité (par exemple dans le cas d'un podomètre).
• La détection du mouvement est utilisée pour contrôler une fonctionnalité au travers d'une interface compatible avec l'accessibilité.
--&gt;</p>
</article>
  </div>

