# JD Smith Insurance site — project notes

## Always refer to the site map
Before changing any page, read `SITE_MAP.md`. It is the source of truth for every page, every insurance
item, and how each item is quoted (rater, quote-and-bind, form, PDF, email, phone and extension).
Check each page against the purpose below, and don't add content that belongs to a different page.

## Purpose of each page
Only these pages for now. Add new pages here as they come back into the project.

### Homepage — `index.html`
The front door to the site. It introduces JD Smith Insurance Brokers (independent RIBO-licensed brokers
since 1979), shows the main contact number, and sends visitors to the right place: the insurance
categories (Personal, Small Business, Commercial, Life & Health), the Get a free quote page, and the
quick actions (report a claim, make a payment, find your broker). It gives an overview and points elsewhere.
It does not hold the full detail of each product.

### Get a free quote — `jds-get_a_quote.htm`
This page is only for direct links to quotes. Each item links straight to its quote method: the online
rater, the quote-and-bind link, the quote form, the PDF application, an email, or a phone number with
extension. It never links to the item's info page, and it doesn't explain coverage. That belongs on the
info pages.

### Contact your broker — `jds-staff.htm`
The staff list and contact page. The navbar "Contact us" button, the homepage "Contact us" quick action and
About > Staff & contacts all link here. It holds the main, toll-free, fax and emergency numbers, office
hours and address, one card per staff member with a click-to-call link to their extension, the Claims Help
Line and insurer emergency claim lines, and the management biographies. Contacts come from `SITE_MAP.md`
section 4 and the live `jds-staff.htm`. The direct lines in `STAKEHOLDER_NOTES.txt` 2.5 are unconfirmed,
so they are not used. Staff photos are in `images/staff/` (copied from the live site).
The page should feel warm and human, not just a phone list: staff headshots on the cards and bios where we
have them (initials otherwise), the group photo near the top, office photos (`images/office/`, incl. the
office dog and the rainbow) and a "Life at JD Smith" section of community and staff photos (`images/life/`).
All are copied from the live `jds-staff.htm`, with captions based on its wording.

### Join our brokerage team — `jds-job_postings.htm`
The job opportunities page. The navbar About > Job opportunities, the footer and the "Join our brokerage
team" button on `jds-staff.htm` link here. It holds why to work here, the open positions (Reception & CSR
assistant, CSR insurance broker, Producer/sales insurance broker), what the work is like, and how to apply
(email jds@jdsmithinsurance.com or call 905-764-7868). The wording comes from the live `jds-job_postings.htm`.
It uses the same warm style as the staff page and reuses its photos. The hero is `images/stock/jobs.jpg`.

### Staff video messages — `jds-staff_videos.htm`
Video messages from staff, linked from the navbar About menu and the footer. The live site has one video,
"A message from Rocco Scarano & Dr. J.D. Smith", as a Flash player (`VLP/JDS_RS_VP6.swf` playing
`VLP/JDS_RS_VP6.flv`, about 15 MB). Browsers no longer play Flash or FLV, so the page shows a "Video coming
soon" placeholder until the FLV is converted to `videos/JDS_RS.mp4`. The `<video>` markup to swap in is in a
comment in the page. Each video card also has the person's extension and a link to their bio on `jds-staff.htm`.

### Auto insurance — `jds-quote_auto.htm`
The first quotation page, built from `template/index.html` and `content/PAGE_CONTENT.md` section A1. The navbar
Personal > Auto insurance links here. It holds the auto reform notice banner, the two quote methods from
`jds-get_a_quote.htm` (online rater, call 1-800-917-7283), why choose us (Jessica Antoniel, ext. 233), online
eligibility, an Ontario auto reform 2026 section linking to `jds-auto_reform.htm` and
`jds-client_auto_insurance_changes_2016.htm`, Hagerty driving tips, the bottom CTA with contact block, and related
links. Photos: `images/stock/auto.jpg` (hero) and `images/stock/auto_reform.jpg`.

### Home insurance — `jds-quote_home.htm`
Quotation page built from `template/index.html` and `content/PAGE_CONTENT.md` section A2. The navbar Personal > Home
insurance links here. There is no online home quote tool, so the only quote method is a call to 1-800-917-7283 (with the
note that Toronto homes south of Eglinton need pre-approval). It holds why choose us (Dr. J. D. Smith quote), eligibility
(≤1 claim in 5 years, Eglinton pre-approval), the Chieftain $1,000 deductible tip, the backflow prevention valve section,
a short FAQ built from that content, helpful reading, the bottom CTA with contact block, and related links. No auto
reform banner. Photos: `images/stock/home.jpg` (hero) and `images/stock/backflow_valve.jpg` (copied from the live site).

### All personal insurance — `jds-quote_me.htm`
The Personal overview page, built from `content/PAGE_CONTENT.md` section A0. The navbar Personal > All personal
insurance and the footer Personal link go here. It holds the auto reform notice banner, one product card per item
in header order (Auto, Home, Boat, UberX) with "Learn more" and its quote method (the hero "Get a free quote" button
jumps to these cards; the separate "Free quote" section of five quote methods was removed on 2026-10-18), an Ontario auto reform 2026 section linking to `jds-auto_reform.htm` and
`jds-client_auto_insurance_changes_2016.htm`, the top 10 most stolen cars (2022 figures, see STAKEHOLDER_NOTES),
the RIBO trust strip, and the bottom CTA with contact block. Photos: `images/stock/personal.jpg` (hero), `auto.jpg`,
`home.jpg`, `boat.jpg`, `uberx.jpg`, `auto_reform.jpg`.

### UberX ride-sharing — `uberx.htm`
Quotation page built from `template/index.html` and `content/PAGE_CONTENT.md` section A4. The navbar Personal > UberX
ride-sharing links here. It holds the auto reform notice banner, the two quote methods (the short quote form and a call
to 1-800-917-7283), the "your policy does not cover you" warning, what the endorsement covers ($1–5 million third-party
limits, up to 20 hours a week), eligibility, the sample rate table, a checklist of what the quote form asks for, the
bottom CTA with contact block, and related links. Until the office confirms an https form endpoint (STAKEHOLDER_NOTES
4.7), the form buttons open the live form at `https://jdsmithinsurance.com/uberx.htm#request`; the rebuilt form is in a
comment in the page, ready to swap in. The dated "News flash" was left out (STAKEHOLDER_NOTES 8.4). Photo:
`images/stock/uberx.jpg`.

### Ontario auto reform 2026: What is changing — `jds-auto_reform.htm`
Informational page (no quote options), built from `content/PAGE_CONTENT.md` section A5. The navbar Personal > Ontario
auto reform 2026 > What is changing and every auto reform notice banner link here. It holds four cards for the sub-pages
(fact sheet, Q&A, self assessment, customer scenarios), our advice for personal and commercial vehicles, what SABs are,
what's staying the same, what's becoming optional, who is affected, what this means for you, what to do now, a soft
"Talk to your broker" CTA with contact block, and related links. The cards link to the four local sub-pages below.
No notice banner (it is the banner's target). Photo: `images/stock/auto_reform.jpg` (hero).

### Ontario auto reform 2026 sub-pages
Four informational pages (no quote options), built from `content/PAGE_CONTENT.md` sections A5.1–A5.4 and linked from the
cards on `jds-auto_reform.htm`. They share the A5 hero photo (`images/stock/auto_reform.jpg`, compact hero), a breadcrumb
back to `jds-auto_reform.htm`, a sub-navigation strip of all five auto reform pages (the current one marked active), the
SABS disclaimer, the "Talk to your broker" CTA with contact block, and "More on the auto reform" cards. No notice banner.
- **Fact sheet — `jds-auto_reform_fact_sheet.htm`:** what SABs are, what's changing (existing vs new customers), the
  essential coverage that stays, tables of the newly optional and still-optional benefits, who is covered, and steps to take.
  The source's "Insurers to populate with coverage limits" column says "Set by your insurer" (STAKEHOLDER_NOTES 8.7).
- **Questions & answers — `jds-auto_reform_Q_A.htm`:** all 21 questions as five topic accordions (about the changes, who
  is covered, existing and new policies, choosing your benefits, claims). Each panel's `data-bs-parent` is its own accordion.
- **Self assessment — `jds-auto_reform_self_asses.htm`:** the 12-benefit checklist with tick boxes. An inline script marks
  a section "Worth considering" when any box in it is ticked and builds a sticky "Your list" with Print and Clear. Nothing is
  stored or sent.
- **Customer scenarios — `jds-auto_reform_scenarios.htm`:** the nine personas as cards with "Who are you most like?" jump
  links, and a final card pointing to the self assessment.

### Ontario auto reform 2026: Accident benefits explained — `jds-client_auto_insurance_changes_2016.htm`
Informational page (no quote options), built from `content/PAGE_CONTENT.md` section A6. The navbar Personal > Ontario
auto reform 2026 > Accident benefits explained links here. It holds the auto reform notice banner, the earlier reform
(Fighting Fraud act), why accident benefits matter, when to customize your policy, the standard limits ($1,000,000 /
$65,000, marked as the earlier reform's limits, see STAKEHOLDER_NOTES 8.4), your options, a soft "Talk to your broker"
CTA with contact block, and related links. The 2016 winter tire dates were left out. Photo: `images/happy_couple_in_car.jpg`.

## Navbar and footer are the same on every page
- The navbar and footer are shared components in `js/components.js` (`SITE_HEADER` and `SITE_FOOTER`).
  Edit them only there. Never paste navbar or footer markup into a page.
- Every page loads `<script src="js/components.js"></script>` in `<head>`, right after `css/styles.css`, with no
  `defer` or `async`. It puts `<site-header></site-header>` right after the skip link and
  `<site-footer></site-footer>` right after `</main>`. When the page loads, each tag is replaced by the real
  `<nav>`/`<footer>`, so `sticky-top` and the Bootstrap dropdowns work as before. When you add a page, copy
  this from an existing page.
- This works when pages are opened from disk (`file:///`) as well as over http, which is why the markup is
  in a JS string and not fetched from a partial `.html` file (fetch fails on `file:///`).
- The navbar button says "Contact us" and the footer button says "Contact your broker". Both link to `jds-staff.htm`.
  Neither says "Get a quote".
- No page has the blue top banner (the `bg-primary` strip above the navbar). Don't add it back.
- Phone numbers are always `tel:` links. An extension uses a comma pause: `tel:+19057647868,232`.

## What's in the project (since 2026-10-18)
Only the pages above are kept. Everything else was removed on purpose. A full backup is at
`C:\Users\andre\jd-smith-insurance-backup-2026-10-18.zip`.
The nav and footer still link to the removed pages.

## Rules for keeping the quote page in sync with the site map
- The items on `jds-get_a_quote.htm` must match the items in `SITE_MAP.md` section 1 (Quotes):
  1a Personal, 1b Small Business, 1c Commercial, 1d Life & Health. If one changes, update the other.
- Use the quote method that `SITE_MAP.md` lists for each item, including phone extensions and PDF names.
- The forms (`jds-quote.htm`, `uberx.htm`, `jds-renewable_energy_quote.htm`) are no longer in the project, so the
  page links to them on the live site, `https://jdsmithinsurance.com/...`. All of those links returned 200 on 2026-10-18.
- The application PDFs are in the project's `Applications/` folder (all 56 from the live site, restored from the backup
  on 2026-10-18), so every PDF link is relative: `Applications/<file>.pdf`. This includes `campground.pdf` and the old
  `church.pdf` (STAKEHOLDER_NOTES 1.1 and 1.2), which no page links to yet.
- Every PDF on the live `jds-applications.htm` is also on the quote page (since 2026-10-18), so there is
  no "See all application forms" link. The full list is in `SITE_MAP.md` section 5.
- Small business and Commercial options are nested Bootstrap accordions: one top-level item each, then
  one sub-accordion per category. Each row keeps the `list-group-item` pattern (name, note, buttons).
- Only one panel is open per level: every `.accordion-collapse` has `data-bs-parent` set to its own
  accordion. `js/accordions.js` closes every panel inside a panel when that panel closes.
