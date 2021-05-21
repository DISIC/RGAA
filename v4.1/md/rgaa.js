/* Rubrique RGAA - début */
jQuery.fn.extend({
  changeButtonStat: function(bool) {
    return this.each(function() {
        let num = $(this).parents("article").attr("id");
        num = num.split("-").slice(1).join(".");
        if (bool) {
            $(this).removeClass("is-closed");
            $(this).html('<span class="show-for-sr">"Masquer les tests du critère ' + num + '"</span><svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24"><path d="M0 9h24v6h-24z"/></svg>');
        } else {
            $(this).addClass("is-closed");
            $(this).html('<span class="show-for-sr">"Afficher les tests du critère ' + num + '"</span><svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>');
        }
    });
  }
});
$('#filtre-tests').change(function() {
  const articles = $("article");
  if (this.checked) {
    articles.find("ul.tests, .aside").removeClass("is-hidden");
    articles.find("h4 button").changeButtonStat(true);
  } else {
    articles.find("ul.tests, .aside").addClass("is-hidden");
    articles.find("h4 button").changeButtonStat(false);
  }
});
$('#filtre-A').change(function() {
  if (this.checked) {
    $("article[data-level=A]").removeClass("is-hidden");
  } else {
    $("article[data-level=A]").addClass("is-hidden");
  }
});
$('#filtre-AA').change(function() {
  if (this.checked) {
    $("article[data-level=AA]").removeClass("is-hidden");
  } else {
    $("article[data-level=AA]").addClass("is-hidden");
  }
});
$('.is-closed').click(function() {
  if ($(this).hasClass("is-closed")) {
    $(this).changeButtonStat(true);
    $(this).parents("article").find("ul.tests, .aside").removeClass("is-hidden");
  } else {
    $(this).changeButtonStat(false);
    $(this).parents("article").find("ul.tests, .aside").addClass("is-hidden");
  }
});
$(function() {
  let hash = window.location.hash;
  if (hash !== "" && hash.substring(1,5) === "test" || hash.substring(1,5) === "crit") {
    let criteriumId = hash.substring(6).split("-");
    criteriumId.pop();
    criteriumId = "#crit-" + criteriumId.join("-");
    $("article" + criteriumId +" ul.tests, article" + criteriumId +" .aside").removeClass("is-hidden");
    $("article" + criteriumId + ">h4>button").changeButtonStat(true);
    document.location.href = hash;
  }
});
/* Rubrique RGAA - fin */  