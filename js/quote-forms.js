/* Quote request forms.
   The site is static, so a form needs somewhere to send its answers:
   - If the <form> has a data-endpoint attribute (e.g. a Formspree, Netlify Forms or
     your host's form handler URL), the answers are posted there.
   - Otherwise the visitor's email app opens with every answer filled in, addressed
     to the form's data-mailto address, so a request is never lost. */
(function () {
  /* Quote shortcuts link here with ?type=..., e.g. jds-quote.htm?type=Contractors#quote-form,
     so the "Quote my insurance needs for" choice arrives already filled in. */
  var type = new URLSearchParams(window.location.search).get('type');
  var typeField = type && document.querySelector('select[name="Type_of_business"]');
  if (typeField) {
    var match = Array.prototype.find.call(typeField.options, function (o) { return o.text === type; });
    if (!match) { match = new Option(type, type); typeField.add(match, 0); }
    match.selected = true;
  }

  document.querySelectorAll('form[data-mailto]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
      var data = new FormData(form);
      var status = form.querySelector('[data-form-status]');
      var endpoint = form.getAttribute('data-endpoint');
      var subject = data.get('subject') || data.get('_subject') || 'Quote request';

      if (endpoint) {
        fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
          .then(function (r) { if (!r.ok) throw new Error(r.status); done('sent'); })
          .catch(function () { done('error'); });
        return;
      }

      var lines = [];
      data.forEach(function (value, key) {
        if (/^(_|recipient$|subject$|redirect$)/.test(key) || value === '') return;
        lines.push(key.replace(/_/g, ' ') + ': ' + value);
      });
      window.location.href = 'mailto:' + form.getAttribute('data-mailto') +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(lines.join('\n'));
      done('mail');

      function done(kind) {
        if (!status) return;
        status.hidden = false;
        status.className = 'alert rounded-4 mt-4 ' + (kind === 'error' ? 'alert-danger' : 'alert-success');
        status.innerHTML = kind === 'sent'
          ? '<strong>Thank you!</strong> Your request has been sent. One of our brokers will contact you shortly.'
          : kind === 'mail'
            ? '<strong>Almost done:</strong> your email app has opened with your answers. Press send to deliver your request. Nothing opened? Call us at <a href="tel:18009177283">1-800-917-7283</a> or email <a href="mailto:' + form.getAttribute('data-mailto') + '">' + form.getAttribute('data-mailto') + '</a>.'
            : 'Sorry, something went wrong. Please call us at <a href="tel:18009177283">1-800-917-7283</a>.';
        status.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
})();
