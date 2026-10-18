# JD Smith Insurance site — project notes

## Folder layout (since 2026-10-18)
- `index.html` (homepage) is the only page in the root. Every other page is in `pages/<section>/`:
  `pages/personal/` (personal overview, auto, home, UberX), `pages/auto-reform/` (the auto reform page, its four
  sub-pages and Accident benefits explained), `pages/about/` (core values, the broker advantage, staff, staff videos, job postings, community, car racing team, speeder's remorse, and the four legal pages: privacy statement, terms of use, code of consumer rights, E. & O. E. disclaimer),
  `pages/resources/` (Claims, Claims: when you have an auto accident, 12 ways to save, 20 hot topics, Online payments and Insurance companies) and `pages/quotes/` (Get a free quote). Put a new page in
  the section its navbar menu belongs to.
- Shared assets stay in the root: `css/`, `js/`, `Applications/` (PDF applications) and `images/`.
  `images/` holds the site photos (`stock/`, `staff/`, `office/`, `life/`, `community/`, plus a few in the root) and the photo
  library used by `ai-reference/PAGE_CONTENT.md`: `images/original/` (copies from the live site) and
  `images/suggested/` (Unsplash replacements).
- `ai-reference/` holds the project notes and build material, not site pages: this file, `SITE_MAP.md`,
  `PAGE_CONTENT.md`, `STAKEHOLDER_NOTES.txt` and `template/index.html`. The root `CLAUDE.md` only imports this file.
- Links in a page are relative to that page. From `pages/<section>/` the root is `../../` (e.g.
  `../../css/styles.css`, `../../images/stock/auto.jpg`, `../../index.html`), a page in another section is
  `../<section>/<page>.htm`, and a page in the same section is just `<page>.htm`. Links to pages that are not in the
  project yet point to the root (e.g. `../../jds-insurance_companies.htm`), as they did before the move.
- Page file names are the same as on the live site (`jds-quote_auto.htm` → https://jdsmithinsurance.com/jds-quote_auto.htm),
  only the folder differs.

## Always refer to the site map
Before changing any page, read `ai-reference/SITE_MAP.md`. It is the source of truth for every page, every insurance
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

### Get a free quote — `pages/quotes/jds-get_a_quote.htm`
This page is only for direct links to quotes. Each item links straight to its quote method: the online
rater, the quote-and-bind link, the quote form, the PDF application, an email, or a phone number with
extension. It never links to the item's info page, and it doesn't explain coverage. That belongs on the
info pages.

### Core values — `pages/about/jds-values.htm`
The About page, built from `ai-reference/PAGE_CONTENT.md` section F1 (supporting page). The navbar About toggle and
About > Core values, the footer About > Core values, every About-page breadcrumb, the "core values" link in Dr. Smith's bio on
`pages/about/jds-staff.htm` (`#core-values`) and the homepage "RIBO broker facts" link (`#ribo`) all go here. It holds the
auto reform notice banner, what we offer with the group photo, the JDS Financial Group companies, mission / vision /
corporate goal, the 4 core value cards (`#core-values`), the "independent broker covers you best" text with the address
card, the RIBO broker fact sheet (`#ribo`), the racing team teaser (its "More racing team pictures" button goes to `jds-racing_team.htm`), and the "Contact your broker" CTA with contact block.
The live page has 4 core values, not 7 (STAKEHOLDER_NOTES 8.8), so the bio link says "core values" with no number until the office confirms. The mission wording comes from the staff page bio.
Photos: `images/stock/values.jpg` (hero, Unsplash), `images/staff/staff_group_2023.jpg`, `images/JDS-Financial-logo.gif`
and `images/racing/` (Gary Elliott photos copied from the live site).

### The broker advantage — `pages/about/jds-advantage.htm`
Supporting page (no quote options), built from `ai-reference/PAGE_CONTENT.md` section F2. The navbar About > The broker
advantage, the footer About > The broker advantage and the homepage "Why choose JD Smith?" link "The broker advantage" go
here. It holds the auto reform notice banner, "we work for you" with the four "right" cards (policy, company, price,
solution) and Mark Smith's "completely up front" quote, the four-point broker solution, how we do business with the
insurer list, "works for you… and only you" with the committed-to-you points, and the "It makes sense to talk to J. D.
Smith Insurance" CTA (Get a free quote, Contact your broker) with contact block. It keeps the live "over 30 licensed
brokers" (unconfirmed, STAKEHOLDER_NOTES 8.1). Since 2026-10-18 the insurer card shows the full list from the live
`jds-insurance_companies.htm` (PAGE_CONTENT E3, 16 insurers, each linked to its website), with a "See all our insurance companies"
button to `pages/resources/jds-insurance_companies.htm`, and the E3 intro paragraph is in "how we do business". Sovereign, on the old Broker Advantage list, is not on E3, so it was
dropped (flagged in a comment, STAKEHOLDER_NOTES 8.4). Photos: `images/stock/advantage.jpg`
(hero, Unsplash, copied from `images/suggested/`) and `images/staff/Mark_2023.jpg`.

### Contact your broker — `pages/about/jds-staff.htm`
The staff list and contact page. The navbar "Contact us" button, the homepage "Contact us" quick action and
About > Staff & contacts all link here. It holds the main, toll-free, fax and emergency numbers, office
hours and address, one card per staff member with a click-to-call link to their extension, the Claims Help
Line and insurer emergency claim lines, and the management biographies. Contacts come from `ai-reference/SITE_MAP.md`
section 4 and the live `jds-staff.htm`. The direct lines in `ai-reference/STAKEHOLDER_NOTES.txt` 2.5 are unconfirmed,
so they are not used. Staff photos are in `images/staff/` (copied from the live site).
The page should feel warm and human, not just a phone list: staff headshots on the cards and bios where we
have them (initials otherwise), the group photo near the top, office photos (`images/office/`, incl. the
office dog and the rainbow) and a "Life at JD Smith" section of community and staff photos (`images/life/`).
All are copied from the live `jds-staff.htm`, with captions based on its wording.

### Join our brokerage team — `pages/about/jds-job_postings.htm`
The job opportunities page. The navbar About > Job opportunities, the footer and the "Join our brokerage
team" button on `pages/about/jds-staff.htm` link here. It holds why to work here, the open positions (Reception & CSR
assistant, CSR insurance broker, Producer/sales insurance broker), what the work is like, and how to apply
(email jds@jdsmithinsurance.com or call 905-764-7868). The wording comes from the live `jds-job_postings.htm`.
It uses the same warm style as the staff page and reuses its photos. The hero is `images/stock/jobs.jpg`.

### Community involvement — `pages/about/jds-community.htm`
Supporting page (no quote options), built from `ai-reference/PAGE_CONTENT.md` section F3. The navbar About > Community and
the footer About > Community go here. It holds the auto reform notice banner, local sports (teams and long-distance runs in
Richmond Hill, Aurora, Markham, Unionville and Newmarket), the Durham Crusaders hockey and kids fishing derby (Children's Aid
Society & Friends Outreach Canada) sponsorship cards, the St. Mary Immaculate CES thank-you, staff on Richmond Hill committees
(Mark Smith and the Mayor's Prayer Breakfast Council, the Richmond Hill Chamber of Commerce), and the "Want JD Smith to support
your team or event?" CTA (`#sponsor`, Contact us) with contact block. It keeps the live wording; the staff, food bank and
shoebox photos stay in the staff page's "Life at JD Smith" section, which the CTA links to. Photos: `images/community/`
(all copied from the live page, incl. the hero `community_page_front.jpg`; real photos, so no Unsplash hero).

### Car racing team — `pages/about/jds-racing_team.htm`
Supporting page (no quote options), built from `ai-reference/PAGE_CONTENT.md` section F4 and the two race reports in its
Appendix. The navbar About > Car racing team and the "More racing team pictures" button on `pages/about/jds-values.htm` go here.
It holds the auto reform notice banner, why we sponsor the team (track, not the streets, with the Speeder's remorse
link to `jds-speeders_remorse.htm`), the photo gallery from the live page, the race reports as one accordion (`#race-reports`, `#reports-list`, item ids
`#report-2019-1` and `#report-2017-17`, newest first; `js/accordions.js` opens an item from the URL hash), and the F4 CTA
(Visit Gary Elliott Motorsports, Get an auto quote) with contact block. Photos: `images/racing/` (all copied from the live
site, incl. the hero `racing_team_front.jpg`; real photos, so no Unsplash hero).

### Speeder's remorse — `pages/about/jds-speeders_remorse.htm`
Supporting page (no quote options), built from the "Speeder's Remorse Pictures" section of `ai-reference/PAGE_CONTENT.md`
(live `jds-speeders_remorse.htm`). The "See what we mean" links on `pages/about/jds-values.htm` and `pages/about/jds-racing_team.htm`
go here; its breadcrumb and CTA go back to `jds-racing_team.htm`. It holds the auto reform notice banner, the live wording and the
14 photos in a 3-column grid, and the F4-style CTA (Meet our racing team, Get an auto quote) with contact block. The photos are the
full-size `speeder-NN.jpg` (450px wide) in `images/speeders/`, restored from the backup. Hero: `images/racing/racing_team_front.jpg`.

### Code of consumer rights — `pages/about/jds-code_consumer_rights.htm`
Legal page, built from `ai-reference/PAGE_CONTENT.md` section G1, wording kept exactly as on the live page (typos included).
The RIBO button on `pages/about/jds-values.htm`, the homepage "Consumer rights & privacy" link and the footer "Consumer rights" link go here. It holds the legal pages strip, the JDS code of consumer
rights, the broker compensation disclosure (`#compensation`), when we quote (its "privacy policy" links to the privacy statement), the CISRO principles (`#cisro`, linked to CISRO's own
site, since the live page's PDF is only on the old site), the live "View the privacy statement / terms of use" links, and the "Questions about your rights?" CTA with contact block.
Photos: `images/stock/legal.jpg` (hero, Unsplash, copied from `images/suggested/`) and `images/staff/staff_group_2023.jpg`.

### Legal pages (shared layout)
The four legal pages (privacy statement, terms of use, code of consumer rights, E. & O. E. disclaimer) are in `pages/about/` and
linked from the footer's bottom row. Each has a compact hero, a "Legal pages" strip of pill links to all four (the current one
marked active), the legal text in `.prose` with a sticky "On this page" card on the right, and a CTA with contact block. The
wording is kept exactly as on the live pages (typos included); headings are the live sub-headings.

### Privacy statement — `pages/about/jds-privacy_statement.htm`
Legal page, built from `ai-reference/PAGE_CONTENT.md` section G2. The footer "Privacy" link, the consumer rights page and the terms of use
link here. Section anchors: `#introduction`, `#sources`, `#what-we-collect`, `#purposes`, `#sharing`, `#automated`, `#cookies`,
`#safeguards`, `#access`, `#consent`, `#complaints`, `#contact`. Privacy Officer card and CTA use manager@jdsmithinsurance.com and
905-764-7868. The live text mentions a "cookies management tool on our site", which the site does not have (noted in a comment).
Photo: `images/stock/privacy.jpg` (hero, Unsplash, copied from `images/suggested/`).

### Terms of use — `pages/about/jds-terms_of_use.htm`
Legal page, built from `ai-reference/PAGE_CONTENT.md` section G3. The footer "Terms of use" link, the consumer rights page and the
disclaimer CTA link here. Each live bulleted section title is an h3 with an anchor (`#joint-website` … `#general`). Its privacy office
email is manager@jdsfinancial.ca, which differs from the privacy statement; both are kept as on the live pages (noted in a comment).
Photo: `images/stock/legal.jpg`.

### E. & O. E. disclaimer — `pages/about/jds-disclaimer.htm`
Legal page, built from `ai-reference/PAGE_CONTENT.md` section G4. The footer "E. & O. E." link goes here. The hero spells out "Errors
and omissions excepted"; the live text follows unchanged, with the "limits and exclusions" sentence in a note box. Photo:
`images/stock/legal.jpg`.

### About pages and the old site (checked 2026-10-18)
No link in the body of any `pages/about/` page goes to jdsmithinsurance.com. `directdialinsurance.com` now redirects to
jdsmithinsurance.com, so Direct Buy Insurance on `jds-values.htm` has no link. The only old-site links on About pages are the
shared navbar/footer items for pages not rebuilt yet (see "What's in the project").

### Staff video messages — `pages/about/jds-staff_videos.htm`
Video messages from staff, linked from the navbar About menu and the footer. The live site has one video,
"A message from Rocco Scarano & Dr. J.D. Smith", as a Flash player (`VLP/JDS_RS_VP6.swf` playing
`VLP/JDS_RS_VP6.flv`, about 15 MB). Browsers no longer play Flash or FLV, so the page shows a "Video coming
soon" placeholder until the FLV is converted to `videos/JDS_RS.mp4`. The `<video>` markup to swap in is in a
comment in the page. Each video card also has the person's extension and a link to their bio on `pages/about/jds-staff.htm`.

### Auto insurance — `pages/personal/jds-quote_auto.htm`
The first quotation page, built from `ai-reference/template/index.html` and `ai-reference/PAGE_CONTENT.md` section A1. The navbar
Personal > Auto insurance links here. It holds the auto reform notice banner, the two quote methods from
`pages/quotes/jds-get_a_quote.htm` (online rater, call 1-800-917-7283), why choose us (Jessica Antoniel, ext. 233), online
eligibility, an Ontario auto reform 2026 section linking to `pages/auto-reform/jds-auto_reform.htm` and
`pages/auto-reform/jds-client_auto_insurance_changes_2016.htm`, Hagerty driving tips, the bottom CTA with contact block, and related
links. Photos: `images/stock/auto.jpg` (hero) and `images/stock/auto_reform.jpg`.

### Home insurance — `pages/personal/jds-quote_home.htm`
Quotation page built from `ai-reference/template/index.html` and `ai-reference/PAGE_CONTENT.md` section A2. The navbar Personal > Home
insurance links here. There is no online home quote tool, so the only quote method is a call to 1-800-917-7283 (with the
note that Toronto homes south of Eglinton need pre-approval). It holds why choose us (Dr. J. D. Smith quote), eligibility
(≤1 claim in 5 years, Eglinton pre-approval), the Chieftain $1,000 deductible tip, the backflow prevention valve section,
a short FAQ built from that content, helpful reading, the bottom CTA with contact block, and related links. In helpful
reading, since 2026-10-18 "What your burglar won't tell you" (the live `jds-burglars_advice.htm`, PAGE_CONTENT "Your Burglar
Won't Tell You") is inline as an accordion item (`#reading-list`, item id `#burglar-tips`; `js/accordions.js` opens it from the
URL hash, and the "Also useful" link goes there): the 21 tips and the sources. The chain-email additions after the sources
(wasp spray, car keys by the bed) are left out, noted in a comment. The Intact blog link stays a list-group link below it. No auto
reform banner. Photos: `images/stock/home.jpg` (hero) and `images/stock/backflow_valve.jpg` (copied from the live site).

### All personal insurance — `pages/personal/jds-quote_me.htm`
The Personal overview page, built from `ai-reference/PAGE_CONTENT.md` section A0. The navbar Personal > All personal
insurance and the footer Personal link go here. It holds the auto reform notice banner, one product card per item
in header order (Auto, Home, Boat, UberX) with "Learn more" and its quote method (the hero "Get a free quote" button
jumps to these cards; the separate "Free quote" section of five quote methods was removed on 2026-10-18), an Ontario auto reform 2026 section linking to `pages/auto-reform/jds-auto_reform.htm` and
`pages/auto-reform/jds-client_auto_insurance_changes_2016.htm`, the top 10 most stolen cars (2022 figures, see STAKEHOLDER_NOTES),
the RIBO trust strip, and the bottom CTA with contact block. Photos: `images/stock/personal.jpg` (hero), `auto.jpg`,
`home.jpg`, `boat.jpg`, `uberx.jpg`, `auto_reform.jpg`.

### UberX ride-sharing — `pages/personal/uberx.htm`
Quotation page built from `ai-reference/template/index.html` and `ai-reference/PAGE_CONTENT.md` section A4. The navbar Personal > UberX
ride-sharing links here. It holds the auto reform notice banner, the two quote methods (the short quote form and a call
to 1-800-917-7283), the "your policy does not cover you" warning, what the endorsement covers ($1–5 million third-party
limits, up to 20 hours a week), eligibility, the sample rate table, a checklist of what the quote form asks for, the
bottom CTA with contact block, and related links. Until the office confirms an https form endpoint (STAKEHOLDER_NOTES
4.7), the form buttons open the live form at `https://jdsmithinsurance.com/uberx.htm#request`; the rebuilt form is in a
comment in the page, ready to swap in. The dated "News flash" was left out (STAKEHOLDER_NOTES 8.4). Photo:
`images/stock/uberx.jpg`.

### Ontario auto reform 2026: What is changing — `pages/auto-reform/jds-auto_reform.htm`
Informational page (no quote options), built from `ai-reference/PAGE_CONTENT.md` section A5. The navbar Personal > Ontario
auto reform 2026 > What is changing and every auto reform notice banner link here. It holds four cards for the sub-pages
(fact sheet, Q&A, self assessment, customer scenarios), our advice for personal and commercial vehicles, what SABs are,
what's staying the same, what's becoming optional, who is affected, what this means for you, what to do now, a soft
"Talk to your broker" CTA with contact block, and related links. The cards link to the four local sub-pages below.
No notice banner (it is the banner's target). Photo: `images/stock/auto_reform.jpg` (hero).

### Ontario auto reform 2026 sub-pages
Four informational pages (no quote options), built from `ai-reference/PAGE_CONTENT.md` sections A5.1–A5.4 and linked from the
cards on `pages/auto-reform/jds-auto_reform.htm`. They share the A5 hero photo (`images/stock/auto_reform.jpg`, compact hero), a breadcrumb
back to `pages/auto-reform/jds-auto_reform.htm`, a sub-navigation strip of all five auto reform pages (the current one marked active), the
SABS disclaimer, the "Talk to your broker" CTA with contact block, and "More on the auto reform" cards. No notice banner.
- **Fact sheet — `pages/auto-reform/jds-auto_reform_fact_sheet.htm`:** what SABs are, what's changing (existing vs new customers), the
  essential coverage that stays, tables of the newly optional and still-optional benefits, who is covered, and steps to take.
  The source's "Insurers to populate with coverage limits" column says "Set by your insurer" (STAKEHOLDER_NOTES 8.7).
- **Questions & answers — `pages/auto-reform/jds-auto_reform_Q_A.htm`:** all 21 questions as five topic accordions (about the changes, who
  is covered, existing and new policies, choosing your benefits, claims). Each panel's `data-bs-parent` is its own accordion.
- **Self assessment — `pages/auto-reform/jds-auto_reform_self_asses.htm`:** the 12-benefit checklist with tick boxes. An inline script marks
  a section "Worth considering" when any box in it is ticked and builds a sticky "Your list" with Print and Clear. Nothing is
  stored or sent.
- **Customer scenarios — `pages/auto-reform/jds-auto_reform_scenarios.htm`:** the nine personas as cards with "Who are you most like?" jump
  links, and a final card pointing to the self assessment.

### Ontario auto reform 2026: Accident benefits explained — `pages/auto-reform/jds-client_auto_insurance_changes_2016.htm`
Informational page (no quote options), built from `ai-reference/PAGE_CONTENT.md` section A6. The navbar Personal > Ontario
auto reform 2026 > Accident benefits explained links here. It holds the auto reform notice banner, the earlier reform
(Fighting Fraud act), why accident benefits matter, when to customize your policy, the standard limits ($1,000,000 /
$65,000, marked as the earlier reform's limits, see STAKEHOLDER_NOTES 8.4), your options, a soft "Talk to your broker"
CTA with contact block, and related links. The 2016 winter tire dates were left out. Photo: `images/happy_couple_in_car.jpg`.

### Report a claim — `pages/resources/jds-claims.htm`
Supporting page (no quote options), built from `ai-reference/PAGE_CONTENT.md` section E1. The homepage "Report a claim"
quick action, the navbar Resources > Claims, the footer "Report a claim", the "More about claims" link on
`pages/about/jds-staff.htm` and the Claims card on `pages/personal/jds-quote_home.htm` (`#home-claim`) go here. Right under
the hero, three "What happened?" cards send visitors on: "Had an auto accident?" to `jds-claims_auto_accident.htm`,
"Damage to your home?" to `#home-claim` and "A large emergency?" to `#emergency`. This is the one place the claims flow
splits, so the homepage keeps a single "Report a claim" action. The page holds the auto reform notice banner, talk to your
broker first (ext. 232, 1-800-917-7283), should you claim (small claims, adjusters, fraud, Ask the Adjuster), report online
with each insurer (logos, copy manager@), the 24/7 insurer lines (same as `pages/about/jds-staff.htm`, STAKEHOLDER_NOTES 8.1),
a card to the auto accident page (the auto steps are not repeated here), reporting your home claim (with the water damage
tips and a link to the home page's backflow valve section), the commercial after-hours line (Crawford Adjusters), claim
stories (since 2026-10-18 the full stories are inline as one accordion, `#stories-list`, with item ids `#lucky-to-be-alive`,
`#bridge-too-small`, `#unusual-claims`, `#roofer-liable`, `#giant-mine` and `#frozen-pipes`; `js/accordions.js` opens an item from
the URL hash), the "Call us first" CTA with the escalation email and contact block, and related
links. The older auto benefit chart, the .wmv "14-inch hole" story and the Stella Awards (a hoax, STAKEHOLDER_NOTES 8.9) are
left out. Photos: `images/stock/claims.jpg` (hero) and `images/claims/` (insurer logos, story thumbnails and the full-size
unusual claims and frozen pipes photos the thumbnails open, copied from the live site). Nothing in the claims flow links to
the old site (checked 2026-10-18).

### Claims: when you have an auto accident — `pages/resources/jds-claims_auto_accident.htm`
Supporting page (no quote options), built from the auto parts of `ai-reference/PAGE_CONTENT.md` section E1 (the live
`jds-claims.htm`). The live site has no page or link by this name: "When You Have an Auto Accident" is an untitled section
in the middle of the live `jds-claims.htm`, with no anchor, and the live auto pages only link to Claims from the menu and
footer. The link text comes from the A1 related links in `PAGE_CONTENT.md`. So the file name is new, not a live one.
The "Claims: when you have an auto accident" links on `pages/personal/jds-quote_auto.htm` and `pages/personal/uberx.htm`
and the "Had an auto accident?" cards on `pages/resources/jds-claims.htm` go here. Its breadcrumb and "All claims" card go
back to `jds-claims.htm`.
It holds the auto reform notice banner, talk to your broker first (Claims Help Line ext. 232, 1-800-917-7283), the five
accident steps (other driver's details, Collision Reporting Centre, police report), preferred repair shops, small-claims
and adjuster advice (fraud note, Ask the Adjuster), report online with each insurer (logos, copy manager@), the 24/7
insurer lines (the same numbers as `pages/about/jds-staff.htm`, so Wawanesa is 1-800-268-7300, STAKEHOLDER_NOTES 8.1),
links to the auto reform pages in place of the out-of-date benefit chart (STAKEHOLDER_NOTES 8.4), the "Lucky to be alive"
story (links to `jds-claims.htm#lucky-to-be-alive`), the "Call us first" CTA with contact block, and related links. Home and commercial claims, the
backflow valve, the other claim stories and the Stella Awards stay on the full claims page. Photos:
`images/stock/claims.jpg` (hero, Unsplash), `images/claims/` (insurer logos and `close_call_01.jpg`, copied from the live site).

### 12 ways to save — `pages/resources/jds-12waystosave.htm`
Supporting page (no quote options), built from `ai-reference/PAGE_CONTENT.md` section E4. The navbar Resources > Advice >
12 ways to save, the footer Clients > "Tips & resources", the homepage "Helpful resources" card, the FAQ, backflow section
(`#backflow`, links to `#discounts`) and "Also useful" links on `pages/personal/jds-quote_home.htm`, and the "Also useful" link
on `pages/personal/jds-quote_auto.htm` go here. It holds the auto reform notice banner, the 12 ways as numbered cards (`#ways`),
the home & condo and auto discounts (`#discounts`; the water prevention discount links to the home page's `#backflow`), car
theft methods and defences (`#car-theft`, which links to `pages/personal/jds-quote_me.htm#stolen-cars` for the top 10 list
instead of repeating it), the IBC link, the "Make sure you have all the discounts you deserve" CTA (Get a free quote, call)
with contact block, and related links. Photo: `images/stock/save.jpg` (hero, Unsplash, copied from `images/suggested/`).

### 20 hot topics — `pages/resources/jds-hot_topics.htm`
Supporting page (no quote options), built from `ai-reference/PAGE_CONTENT.md` section E5. The navbar Resources > Advice > 20 hot
topics goes here. It holds the auto reform notice banner, the "Staying in Touch" newsletter intro (IBAO copyright) with an archive
note and a sticky table of contents, and the topics as one accordion (`#topics-list`, item ids `#impaired-driving`, `#boating`,
`#graduated-licensing`, `#travel-tips`, `#road-rage`, `#insurance-fraud`, `#licence-valid`, `#insure-to-value`, `#online-safety`,
`#trusted-partner`, `#tips-to-save`, `#discounts`, `#car-rentals`, `#carbon-monoxide`, `#credit-card-fraud`, `#banks`, `#ice-storm`,
`#lost-income`, `#home-security`; `js/accordions.js` opens an item from the URL hash, so the contents links work). The live page has
19 topics, not 20 (STAKEHOLDER_NOTES 8.10). "12 tips" and "Discounts" link to `jds-12waystosave.htm` instead of repeating it.
Dated figures (older SABS amounts, 1994/95, 2002, 1997) are left out, noted in comments, and "Who pays for lost income" links
to the auto reform pages. The wording is the live wording with small typo fixes. CTA "Have a question that isn't here? Ask your
broker." (Contact your broker, Get a free quote) with contact block, and related links. Photo: `images/stock/hot_topics.jpg`
(hero, Unsplash, copied from `images/suggested/`).

### Online payments — `pages/resources/jds-online_payments.htm`
Supporting page (no quote options), built from `ai-reference/PAGE_CONTENT.md` section E2 and `ai-reference/SITE_MAP.md` section 3.
The homepage "Make a payment" quick action, the navbar Resources > For clients > Online payments and the footer "Make a payment"
go here. It holds the auto reform notice banner, the five online banking bill-pay steps (`#pay-online`) with both payee names and
a Copy button for each (an inline script; nothing is stored or sent), the spaces/periods note, a "What you need" card (6-digit
customer number at the top right of the invoice), the six bank logos (the live CIBC logo's wrong "TD Bank" alt text is fixed,
noted in a comment), automatic monthly payments (`#monthly`, Accounting ext. 224), the "Having a problem with your payment?" CTA
(Krista Furois, JDS Accounting, (905) 907-9211) with contact block, and related links. The site takes no card or bank details:
paying is done in the client's own online banking. Photos: `images/stock/payments.jpg` (hero, Unsplash, copied from
`images/suggested/`) and `images/payments/` (bank logos copied from `images/original/images/`).

### Insurance companies we represent — `pages/resources/jds-insurance_companies.htm`
Supporting page (no quote options), built from `ai-reference/PAGE_CONTENT.md` section E3. The navbar Resources > For clients >
Insurance companies, the footer "Insurance companies" and the "See all our insurance companies" button on the insurer card of
`pages/about/jds-advantage.htm` go here. It holds the auto reform notice banner, the E3 intro, the 16
insurers as logo cards (`#companies`), each linking to its website in a new tab, with the same links as the insurer card on
`pages/about/jds-advantage.htm` (Aviva and Travel Underwriters, now TuGo, use their current sites), "...and many others", the IBC
card, the E3 CTA (Get a free quote, Contact your broker) with contact block, and related links. The logos are the small live-site
files, some out of date (ACE INA, Economical 2012), noted in a comment until the office sends current ones. Photos:
`images/stock/insurers.jpg` (hero, Unsplash, copied from `images/suggested/`) and `images/insurers/` (logos and the IBC logo,
copied from `images/original/`).

## Navbar and footer are the same on every page
- The navbar and footer are shared components in `js/components.js` (`SITE_HEADER` and `SITE_FOOTER`).
  Edit them only there. Never paste navbar or footer markup into a page.
- Every page loads `<script src="../../js/components.js"></script>` (`js/components.js` on the homepage) in `<head>`, right after `css/styles.css`, with no
  `defer` or `async`. It puts `<site-header></site-header>` right after the skip link and
  `<site-footer></site-footer>` right after `</main>`. When the page loads, each tag is replaced by the real
  `<nav>`/`<footer>`, so `sticky-top` and the Bootstrap dropdowns work as before. When you add a page, copy
  this from an existing page.
- Links in `SITE_HEADER` and `SITE_FOOTER` are written from the site root (`pages/about/jds-staff.htm`,
  `images/top_logo_2.gif`). `components.js` turns them into full URLs using its own location, so the same markup
  works on every page at any depth.
- This works when pages are opened from disk (`file:///`) as well as over http, which is why the markup is
  in a JS string and not fetched from a partial `.html` file (fetch fails on `file:///`).
- The navbar button says "Contact us" and links to `pages/about/jds-staff.htm`. The footer has no contact button.
  It doesn't say "Get a quote".
- No page has the blue top banner (the `bg-primary` strip above the navbar). Don't add it back.
- Phone numbers are always `tel:` links. An extension uses a comma pause: `tel:+19057647868,232`.

## What's in the project (since 2026-10-18)
Only the pages above are kept. Everything else was removed on purpose. A full backup is at
`C:\Users\andre\jd-smith-insurance-backup-2026-10-18.zip`.
The nav and footer link removed pages to the live site (`https://jdsmithinsurance.com/<page>`, all returned 200 on 2026-10-18). When a page comes back into the project, change its link in `js/components.js` back to its local path.

## Rules for keeping the quote page in sync with the site map
- The items on `pages/quotes/jds-get_a_quote.htm` must match the items in `ai-reference/SITE_MAP.md` section 1 (Quotes):
  1a Personal, 1b Small Business, 1c Commercial, 1d Life & Health. If one changes, update the other.
- Use the quote method that `ai-reference/SITE_MAP.md` lists for each item, including phone extensions and PDF names.
- The forms (`jds-quote.htm`, `uberx.htm`, `jds-renewable_energy_quote.htm`) are no longer in the project, so the
  page links to them on the live site, `https://jdsmithinsurance.com/...`. All of those links returned 200 on 2026-10-18.
- The application PDFs are in the project's `Applications/` folder (all 56 from the live site, restored from the backup
  on 2026-10-18), so every PDF link is relative: `../../Applications/<file>.pdf`. This includes `campground.pdf` and the old
  `church.pdf` (STAKEHOLDER_NOTES 1.1 and 1.2), which no page links to yet.
- Every PDF on the live `jds-applications.htm` is also on the quote page (since 2026-10-18), so there is
  no "See all application forms" link. The full list is in `ai-reference/SITE_MAP.md` section 5.
- Small business and Commercial options are nested Bootstrap accordions: one top-level item each, then
  one sub-accordion per category. Each row keeps the `list-group-item` pattern (name, note, buttons).
- Only one panel is open per level: every `.accordion-collapse` has `data-bs-parent` set to its own
  accordion. `js/accordions.js` closes every panel inside a panel when that panel closes.
