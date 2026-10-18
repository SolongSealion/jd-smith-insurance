/* Shared header (navbar) and footer for every page.
   Each page has <site-header></site-header> and <site-footer></site-footer> where these go, and loads this
   file in <head> without defer/async, so each tag is swapped for its markup as the page is parsed (no flash).
   This is the only place to edit the navbar and footer. Works over http:// and when opened from disk. */

const SITE_HEADER = `
<nav class="navbar navbar-expand-lg bg-white border-bottom shadow-sm sticky-top py-2" aria-label="Main">
  <div class="container">
    <a class="navbar-brand py-0" href="index.html"><img src="images/top_logo_2.gif" width="104" height="56" alt="JD Smith Insurance"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="menu">
      <ul class="navbar-nav mx-auto fw-medium">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="jds-quote_me.htm" role="button" data-bs-toggle="dropdown" aria-expanded="false">Personal</a>
          <ul class="dropdown-menu border-0 shadow-lg rounded-4 p-2"><li><a class="dropdown-item rounded-2 fw-semibold" href="jds-quote_me.htm">All personal insurance</a></li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item rounded-2" href="jds-quote_auto.htm">Auto insurance</a></li><li><a class="dropdown-item rounded-2" href="jds-quote_home.htm">Home insurance</a></li><li><a class="dropdown-item rounded-2" href="http://www.boatinsurancecanada.ca" target="_blank" rel="noopener">Boat insurance <i class="bi bi-box-arrow-up-right small text-body-tertiary"></i></a></li><li><a class="dropdown-item rounded-2" href="uberx.htm">UberX ride-sharing</a></li><li><hr class="dropdown-divider"></li><li><h6 class="dropdown-header text-uppercase small fw-semibold text-primary">Ontario auto reform 2026</h6></li><li><a class="dropdown-item rounded-2" href="jds-auto_reform.htm">What is changing</a></li><li><a class="dropdown-item rounded-2" href="jds-client_auto_insurance_changes_2016.htm">Accident benefits explained</a></li></ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="small_business_online.htm" role="button" data-bs-toggle="dropdown" aria-expanded="false">Small Business</a>
          <ul class="dropdown-menu border-0 shadow-lg rounded-4 p-2"><li><a class="dropdown-item rounded-2 fw-semibold" href="small_business_online.htm">Business quotes online 24/7</a></li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item rounded-2" href="small_business_barber_hairstylist.htm">Barbers &amp; hairstylists</a></li><li><a class="dropdown-item rounded-2" href="small_business_builders_risk.htm">Builder's risk</a></li><li><a class="dropdown-item rounded-2" href="small_business_health_fitness.htm">Health &amp; fitness</a></li><li><a class="dropdown-item rounded-2" href="small_business_non_profit.htm">Non-profit liability</a></li><li><a class="dropdown-item rounded-2" href="small_business_photography.htm">Photography services</a></li><li><a class="dropdown-item rounded-2" href="small_business_professional_liability.htm">Professional liability</a></li><li><a class="dropdown-item rounded-2" href="small_business_special_events.htm">Special events</a></li></ul>
        </li>
        <li class="nav-item dropdown position-static">
          <a class="nav-link dropdown-toggle" href="jds-corporate.htm" role="button" data-bs-toggle="dropdown" aria-expanded="false">Commercial</a>
          <div class="dropdown-menu dropdown-mega border-0 shadow-lg rounded-4 p-lg-4">
            <div class="row g-lg-4">
              <div class="col-lg">
                <h6 class="dropdown-header text-uppercase small fw-semibold text-primary px-lg-0">Faith &amp; non-profit</h6>
                <ul class="list-unstyled mb-2"><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-church.htm">Churches</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-camp-insurance.htm">Camps</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-school_insurance.htm">Schools</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-packages_non_profit_companies.htm">Non-profits</a></li></ul>
              </div>
              <div class="col-lg">
                <h6 class="dropdown-header text-uppercase small fw-semibold text-primary px-lg-0">Trades &amp; industry</h6>
                <ul class="list-unstyled mb-2"><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-packages_contractors.htm">Contractors</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-packages_landscape_snow_removal.htm">Landscapers &amp; snow removal</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-packages_metals_welding.htm">Welding &amp; steel</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-packages_cwb_insurance.htm">Canadian Welding Bureau</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-packages_tool_and_die.htm">Tool &amp; die</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-packages_doors_windows.htm">Windows &amp; doors</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-packages_non_destructive_testing.htm">NDT / NDE</a></li></ul>
              </div>
              <div class="col-lg">
                <h6 class="dropdown-header text-uppercase small fw-semibold text-primary px-lg-0">Transport &amp; trade</h6>
                <ul class="list-unstyled mb-2"><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-packages_fleet_insurance.htm">Car &amp; truck fleets</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-packages_marine_overland_insurance.htm">Marine &amp; overland cargo</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-customs_bonding.htm">Customs bonds</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-packages_retail_wholesale.htm">Retail &amp; wholesale</a></li></ul>
              </div>
              <div class="col-lg">
                <h6 class="dropdown-header text-uppercase small fw-semibold text-primary px-lg-0">Specialty</h6>
                <ul class="list-unstyled mb-2"><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-cyber_liability_insurance.htm">Cyber liability</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-packages_renewable_energy.htm">Renewable energy</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-hole-in-one.htm">Golf &amp; hole-in-one</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-corporate_clients.htm">Corporate clients</a></li></ul>
              </div>
              <div class="col-lg">
                <h6 class="dropdown-header text-uppercase small fw-semibold text-primary px-lg-0">Get started</h6>
                <ul class="list-unstyled mb-2"><li><a class="dropdown-item rounded-2 px-lg-2 fw-semibold" href="jds-corporate.htm">All commercial insurance</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-quote.htm">Business quote request</a></li><li><a class="dropdown-item rounded-2 px-lg-2" href="jds-applications.htm">Application forms</a></li></ul>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="jds-life_health.htm" role="button" data-bs-toggle="dropdown" aria-expanded="false">Life &amp; Health</a>
          <ul class="dropdown-menu border-0 shadow-lg rounded-4 p-2"><li><a class="dropdown-item rounded-2" href="jds-life_health.htm">Life insurance &amp; planning</a></li><li><a class="dropdown-item rounded-2" href="jds-life_groups.htm">Group insurance</a></li><li><a class="dropdown-item rounded-2" href="jds-life_mortgage_insurance.htm">Mortgage insurance</a></li><li><a class="dropdown-item rounded-2" href="jds-life_insurance_critical_illness.htm">Critical illness</a></li></ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="jds-claims.htm" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
          <ul class="dropdown-menu border-0 shadow-lg rounded-4 p-2"><li><h6 class="dropdown-header text-uppercase small fw-semibold text-primary">For clients</h6></li><li><a class="dropdown-item rounded-2" href="jds-claims.htm">Claims</a></li><li><a class="dropdown-item rounded-2" href="jds-online_payments.htm">Online payments</a></li><li><a class="dropdown-item rounded-2" href="jds-insurance_companies.htm">Insurance companies</a></li><li><hr class="dropdown-divider"></li><li><h6 class="dropdown-header text-uppercase small fw-semibold text-primary">Advice</h6></li><li><a class="dropdown-item rounded-2" href="jds-12waystosave.htm">12 ways to save</a></li><li><a class="dropdown-item rounded-2" href="jds-hot_topics.htm">20 hot topics</a></li><li><a class="dropdown-item rounded-2" href="jds-ask_broker.htm">Ask a broker</a></li><li><a class="dropdown-item rounded-2" href="jds-winter_storage.htm">Winter storage tips</a></li><li><hr class="dropdown-divider"></li><li><h6 class="dropdown-header text-uppercase small fw-semibold text-primary">Reading</h6></li><li><a class="dropdown-item rounded-2" href="jds-news.htm">News &amp; humour</a></li><li><a class="dropdown-item rounded-2" href="jds-meditations.htm">Reflection &amp; encouragement</a></li></ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="jds-values.htm" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
          <ul class="dropdown-menu dropdown-menu-lg-end border-0 shadow-lg rounded-4 p-2"><li><a class="dropdown-item rounded-2" href="jds-values.htm">Core values</a></li><li><a class="dropdown-item rounded-2" href="jds-advantage.htm">The broker advantage</a></li><li><a class="dropdown-item rounded-2" href="jds-staff.htm">Staff &amp; contacts</a></li><li><a class="dropdown-item rounded-2" href="jds-staff_videos.htm">Staff video messages</a></li><li><a class="dropdown-item rounded-2" href="jds-job_postings.htm">Job opportunities</a></li><li><a class="dropdown-item rounded-2" href="jds-community.htm">Community</a></li><li><a class="dropdown-item rounded-2" href="jds-racing_team.htm">Car racing team</a></li></ul>
        </li>
      </ul>
      <a class="btn btn-primary rounded-pill px-4 my-2 my-lg-0" href="jds-staff.htm">Contact us</a>
    </div>
  </div>
</nav>
`;

const SITE_FOOTER = `
<footer class="site-footer bg-white border-top">
  <div class="container py-5">
    <div class="row g-4 g-xl-5">
      <div class="col-xl-4">
        <a class="d-inline-block mb-3" href="index.html"><img src="images/top_logo_2.gif" width="104" height="56" alt="JD Smith Insurance"></a>
        <p class="text-body-secondary mb-0" style="max-width: 22rem">Independent RIBO-licensed brokers serving Ontario families, churches and businesses since 1979.</p>
      </div>
      <div class="col-6 col-md-3 col-xl-2">
        <h2 class="footer-heading">Insurance</h2>
        <ul class="list-unstyled d-grid gap-2 mb-0">
          <li><a class="footer-link" href="jds-quote_me.htm">Personal</a></li>
          <li><a class="footer-link" href="small_business_online.htm">Small Business</a></li>
          <li><a class="footer-link" href="jds-corporate.htm">Commercial</a></li>
          <li><a class="footer-link" href="jds-life_health.htm">Life &amp; Health</a></li>
          <li><a class="footer-link" href="jds-get_a_quote.htm">Get a free quote</a></li>
        </ul>
      </div>
      <div class="col-6 col-md-3 col-xl-2">
        <h2 class="footer-heading">Clients</h2>
        <ul class="list-unstyled d-grid gap-2 mb-0">
          <li><a class="footer-link" href="jds-claims.htm">Report a claim</a></li>
          <li><a class="footer-link" href="jds-online_payments.htm">Make a payment</a></li>
          <li><a class="footer-link" href="jds-insurance_companies.htm">Insurance companies</a></li>
          <li><a class="footer-link" href="jds-12waystosave.htm">Tips &amp; resources</a></li>
        </ul>
      </div>
      <div class="col-6 col-md-3 col-xl-2">
        <h2 class="footer-heading">About</h2>
        <ul class="list-unstyled d-grid gap-2 mb-0">
          <li><a class="footer-link" href="jds-values.htm">About us</a></li>
          <li><a class="footer-link" href="jds-staff.htm">Staff &amp; contacts</a></li>
          <li><a class="footer-link" href="jds-staff_videos.htm">Staff videos</a></li>
          <li><a class="footer-link" href="jds-job_postings.htm">Careers</a></li>
          <li><a class="footer-link" href="jds-community.htm">Community</a></li>
        </ul>
      </div>
      <div class="col-6 col-md-3 col-xl-2">
        <h2 class="footer-heading">Contact</h2>
        <ul class="list-unstyled d-grid gap-2 mb-0 text-body-secondary">
          <li><a class="footer-link text-nowrap" href="tel:18009177283">1-800-917-7283</a></li>
          <li><a class="footer-link text-nowrap" href="tel:9057647868">905-764-7868</a></li>
          <li><address class="mb-0">105 West Beaver Creek Rd.<br>Richmond Hill, ON L4B 1C6</address></li>
          <li>Mon&ndash;Thu 9&ndash;4<br>Fri 9&ndash;3</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="border-top">
    <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 py-4 small text-body-secondary">
      <div class="text-center text-md-start">
        <p class="mb-1">&copy; 1999&ndash;2026 JD Smith &amp; Associates Insurance Brokers Inc. All rights reserved.</p>
        <ul class="list-inline mb-0">
          <li class="list-inline-item"><a class="footer-link" href="jds-privacy_statement.htm">Privacy</a></li>
          <li class="list-inline-item"><a class="footer-link" href="jds-terms_of_use.htm">Terms of use</a></li>
          <li class="list-inline-item"><a class="footer-link" href="jds-code_consumer_rights.htm">Consumer rights</a></li>
          <li class="list-inline-item"><a class="footer-link" href="jds-disclaimer.htm">E. &amp; O. E.</a></li>
        </ul>
      </div>
      <img class="rounded" src="images/RIBO-4.jpg" width="105" height="50" alt="Registered Insurance Brokers of Ontario (RIBO)">
    </div>
  </div>
</footer>
`;

class SiteHeader extends HTMLElement {
  connectedCallback() { this.outerHTML = SITE_HEADER; }
}

class SiteFooter extends HTMLElement {
  connectedCallback() { this.outerHTML = SITE_FOOTER; }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
