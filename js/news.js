/* News & humour page (pages/resources/jds-news.htm).
   Opening a tab and the articles inside it from the URL hash is handled by js/accordions.js. */
(function () {
  /* Keep the address bar on the open tab (#whats-new, #newsletter, #todays-smile) so it can be shared.
     replaceState does not fire hashchange, so this doesn't scroll the page. */
  document.addEventListener('shown.bs.tab', function (e) {
    var target = e.target.getAttribute('data-bs-target');
    var pane = target && document.querySelector(target);
    var current = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    /* keep a deeper link (#dam-notice) when it is already inside this tab */
    if (current && pane && pane.contains(current)) return;
    if (target && history.replaceState) history.replaceState(null, '', target);
  });

  /* YouTube players load only when their panel opens (youtube-nocookie, no autoplay). */
  document.addEventListener('show.bs.collapse', function (e) {
    e.target.querySelectorAll('iframe[data-src]').forEach(function (frame) {
      frame.src = frame.getAttribute('data-src');
      frame.removeAttribute('data-src');
    });
  });

  /* "Open the barn doors": hides the closed barn and shows the cars. */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-barn-open]');
    if (btn) {
      var barn = btn.closest('.nh-barn');
      var inside = document.getElementById(btn.getAttribute('aria-controls'));
      barn.classList.add('is-open');
      inside.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      inside.focus();
      return;
    }

    /* The right foot trick: "Did your foot change direction?" */
    var foot = e.target.closest('[data-foot-reveal]');
    if (foot) {
      document.getElementById(foot.getAttribute('aria-controls')).hidden = false;
      foot.setAttribute('aria-expanded', 'true');
      foot.disabled = true;
    }
  });
})();
