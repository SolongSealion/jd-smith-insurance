/* Nested accordions.
   Bootstrap's data-bs-parent already keeps one panel open per accordion level.
   This adds the other half: closing a panel also closes every panel open inside it,
   so a parent always reopens with its categories collapsed. Works at any depth. */
(function () {
  document.addEventListener('hide.bs.collapse', function (e) {
    if (!e.target.classList.contains('accordion-collapse')) return;

    e.target.querySelectorAll('.accordion-collapse.show').forEach(function (panel) {
      bootstrap.Collapse.getOrCreateInstance(panel, { toggle: false }).hide();
    });
  });
})();

/* Deep links into accordions.
   A link to page.htm#some-id opens every panel around that id (and the item's own panel when the id is on an
   .accordion-item), then scrolls to it. This is what lets sub-pages and articles live as accordion items
   on their parent page: the old URL redirects to parent.htm#item-id. */
(function () {
  function openFromHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    var target = id && document.getElementById(id);
    if (!target) return;

    var panels = [];
    var own = target.classList.contains('accordion-item') ? target.querySelector(':scope > .accordion-collapse') : null;
    if (own) panels.push(own);
    for (var p = target.closest('.accordion-collapse'); p; p = p.parentElement.closest('.accordion-collapse')) {
      if (panels.indexOf(p) === -1) panels.push(p);
    }
    if (!panels.length) return;

    panels.reverse().forEach(function (panel) {
      bootstrap.Collapse.getOrCreateInstance(panel, { toggle: false }).show();
    });
    setTimeout(function () { target.scrollIntoView({ block: 'start' }); }, 400);
  }

  window.addEventListener('DOMContentLoaded', openFromHash);
  window.addEventListener('hashchange', openFromHash);
})();
