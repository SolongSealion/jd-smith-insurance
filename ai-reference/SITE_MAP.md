# JD Smith Insurance Brokers — Site Map

Source: https://jdsmithinsurance.com/ (checked 2026-10-18)
Page paths are relative to the site root, e.g. `jds-quote_auto.htm` → https://jdsmithinsurance.com/jds-quote_auto.htm
In this project the pages are in `pages/<section>/` (e.g. `pages/personal/jds-quote_auto.htm`) with the same file names; see `ai-reference/CLAUDE.md`.

**Main contact (for any quote, claim or question)**
JD Smith & Associates Insurance Brokers Inc. — 105 West Beaver Creek Rd., Richmond Hill, ON L4B 1C6
Toll free 1-800-917-7283 · Tel 905-764-7868 · Fax 905-764-9618
Hours: Mon–Thu 9:00–4:00, Fri 9:00–3:00 · Chinese-language service available

**Page content:** the text, quote options and photos for every page in the new header and footer are in `ai-reference/PAGE_CONTENT.md` (its page index follows the menus in `js/components.js`).
**Get a free quote:** `jds-get_a_quote.htm` (new page, not on the live site) links every item in section 1 straight to its quote method.

**How quotes work on this site (legend)**
- **ONLINE RATER** — instant online quote tool
- **QUOTE & BIND** — 24/7 online quote and purchase (securequotebot.com)
- **WEB FORM** — fill in a form on the page; a broker replies
- **PDF APP** — download an application, fill it in, fax/email it back
- **CALL** — phone a broker (extension given where the page lists one)

---

## Top Navigation

```
Home (index.htm)
├── Personal Insurance ............ jds-quote_me.htm
├── Business Quotes 24/7 .......... small_business_online.htm
├── Commercial .................... jds-corporate.htm
├── Life & Health ................. jds-life_health.htm
├── Information ................... jds-advantage.htm
└── RIBO / About Us ............... jds-values.htm
Header link: Staff List & Contacts  jds-staff.htm
```

### Category head pages
Each category has one head (landing) page. Its top-menu link goes there, and the items in sections 1a–1d sit under it.

| Category | Head page | Covers |
|---|---|---|
| Home | `index.htm` | Site front door (overview, contact, links to every category) |
| Personal (Auto, Home & Boat) | `jds-quote_me.htm` | Auto, home, boat, UberX (section 1a) |
| Small Business | `small_business_online.htm` | 24/7 online quote-and-bind items (section 1b) |
| Commercial | `jds-corporate.htm` | Commercial packages and the `jds-quote.htm` form (section 1c) |
| Life & Health | `jds-life_health.htm` | Life, group, mortgage, critical illness (section 1d) |

---

## 1. QUOTES — Insurance Products

### 1a. Personal Insurance  (hub: `jds-quote_me.htm`)

| Insurance | Page | Category | How to get a quote |
|---|---|---|---|
| Auto Insurance | `jds-quote_auto.htm` | Personal | **ONLINE RATER** — Applied Systems WebRater (compares 8 companies, ~7 min, Ontario residents, max 3 tickets): https://webrater.appliedsystems.com/WR/Default.aspx?GC=JDSMITH&LOB=AUTO&LANG=EN · or **CALL** 1-800-917-7283 |
| Accident Benefits Explained | `jds-client_auto_insurance_changes_2016.htm` | Personal / Auto info | Info page. To price extra coverage, **CALL** or email the office |
| Home Insurance | `jds-quote_home.htm` | Personal | **CALL** 1-800-917-7283 (page says "Our staff will give you a quick quote"). No working online tool on the page. Needs ≤1 claim in 5 yrs; Toronto homes south of Eglinton need pre-approval |
| UberX / Ride Sharing | `uberx.htm` | Personal / Auto | **WEB FORM** on page (name, address, email, cell, ride-share activity, vehicle) → submit for a quick quote. Sample rates: `uberx_insurance_rates.htm` |
| Boat Insurance | http://www.boatinsurancecanada.ca (external) | Personal | Goes to their outside boat site · or **CALL** the office |

### 1b. Small Business — Online Quotes 24/7  (hub: `small_business_online.htm`)

Over 450 small-business quotes online. Steps: describe your business → enter coverage → instant quote → pick payment. A broker then confirms coverage and calls you.

| Insurance | Page | Category | How to get a quote |
|---|---|---|---|
| Builder's Risk | `small_business_builders_risk.htm` | Small Business | **QUOTE & BIND** https://jdsmithinsurance.securequotebot.com/equipment-breakdown-construction · then call to review. PDF also available: `Applications/builders_risk.pdf` |
| Health & Fitness | `small_business_health_fitness.htm` | Small Business | **QUOTE & BIND** https://jdsmithinsurance.securequotebot.com/health-fitness-liability-premises (from $275 individual / $750 business) |
| Professional Liability | `small_business_professional_liability.htm` | Small Business | **QUOTE & BIND** https://jdsmithinsurance.securequotebot.com/professional-liability (100+ eligible classes) |
| Special Events | `small_business_special_events.htm` | Small Business | **QUOTE & BIND** https://jdsmithinsurance.securequotebot.com/special-event (from $100) |
| Barbers & Hairstylists | `small_business_barber_hairstylist.htm` | Small Business | **QUOTE & BIND** https://jdsmithinsurance.securequotebot.com/health-fitness-liability-individuals?operation=Hair%20Stylist (from $200) |
| Non-Profit | `small_business_non_profit.htm` | Small Business | **QUOTE & BIND** https://jdsmithinsurance.securequotebot.com/nonprofit-liability |
| Photography | `small_business_photography.htm` | Small Business | **QUOTE & BIND** https://jdsmithinsurance.securequotebot.com/professional-liability?operation=Photographer (mobile equipment up to $20,000) |

### 1c. Commercial  (hub: `jds-corporate.htm`)

General commercial quote form: **`jds-quote.htm`** — **WEB FORM** (organization, name, address, phone, email, type of business) plus PDF apps for D&O, camps, churches, non-profits, auto & truck fleets. Many pages below point to it ("Quote Me" button).
List of business types we insure: `jds-corporate_clients.htm` (header: Commercial › Specialty › Corporate clients).

| Insurance | Page | Category | How to get a quote |
|---|---|---|---|
| Customs Bonds | `jds-customs_bonding.htm` | Commercial / Bonds | **CALL** bond expert Haig Papazian, 905-907-9210 or ext. 239; fill in the 2-page application. Bonds usually issued in a couple of days |
| Application Forms | `jds-applications.htm` | Commercial / Forms | Library of **PDF APPs** (see section 5) |
| Camp Insurance | `jds-camp-insurance.htm` | Commercial / Non-profit | **PDF APP** `Applications/Camp_App_Word.pdf` → print, fill in, fax · or **WEB FORM** `jds-quote.htm` |
| Car & Truck Fleets | `jds-packages_fleet_insurance.htm` | Commercial / Auto | **WEB FORM** `jds-quote.htm` (PDF: `Applications/motor_truck.pdf`) · or **CALL** a broker |
| Churches | `jds-church.htm` | Commercial / Faith-based | **PDF APP** `Applications/Church Application.pdf` → email to sales@jdsfinancial.ca · or **WEB FORM** `jds-quote.htm`. Also: Faith Based Org Program & Limited Abuse Coverage PDFs |
| Contractors (TCA members) | `jds-packages_contractors.htm` | Commercial / Construction | **WEB FORM** `jds-quote.htm` · or **CALL** a broker (10–15% off for TCA/MCA members) |
| Cyber Liability | `jds-cyber_liability_insurance.htm` | Commercial | **Email** manager@jdsmithinsurance.com · **PDF APP** `Applications/cyber_risk_insurance.pdf` |
| Event Application | `Applications/special_events.pdf` | Commercial / Events | **PDF APP** (direct download) |
| Golf Courses & Hole-in-One | `jds-hole-in-one.htm` | Commercial / Recreation | **CALL** (ext. 215). Sample per-hole rates on page; large prizes "call for quote" |
| Landscapers & Snow Removal | `jds-packages_landscape_snow_removal.htm` | Commercial / Contractors | **PDF APP** `Applications/landscaping_snow_removal_2017.pdf` · **CALL** Haig Papazian ext. 239 / 905-907-9210 · or `jds-quote.htm` |
| Marine & Overland Cargo | `jds-packages_marine_overland_insurance.htm` | Commercial / Transport | **PDF APP** `Applications/2016 - CNA Marine Cargo Application V.2.pdf` → print, fill in, fax · or `jds-quote.htm` |
| NDT / NDE | `jds-packages_non_destructive_testing.htm` | Commercial / Industrial | **PDF APP** ×3: `NDE_questionnaire1.pdf`, `NDE_Liability2.pdf`, `NDE_Professional_Liab3.pdf` |
| Non-Profits | `jds-packages_non_profit_companies.htm` | Commercial / Non-profit | **CALL** (Charity Village & CCBF member discounts) · Charity Village page: `charity_village_group_insurance.htm` |
| Retail / Wholesale | `jds-packages_retail_wholesale.htm` | Commercial | **CALL** for an instant quote over the phone · or `jds-quote.htm` |
| School Insurance | `jds-school_insurance.htm` | Commercial / Education | **CALL** a broker for a free school insurance review |
| Tool & Die | `jds-packages_tool_and_die.htm` | Commercial / Manufacturing | **CALL** for a quote · or `jds-quote.htm` |
| Welding & Steel (CWB) | `jds-packages_metals_welding.htm` · `jds-packages_cwb_insurance.htm` | Commercial / Manufacturing | **PDF APP** ×3 at `jds-applications.htm#cwb` (product liability, welding, E&O). Allow 2 weeks for a quote. Flyer: `CWB Flyer5.pdf` |
| Windows & Doors | `jds-packages_doors_windows.htm` | Commercial / Manufacturing | **WEB FORM** `jds-quote.htm` · or **CALL** a broker |
| Renewable Energy (Solar/Wind) | `jds-packages_renewable_energy.htm` | Commercial / Energy | **WEB FORM** `jds-renewable_energy_quote.htm` · **PDF APP** `RES_Property_App_1.pdf`, `RES_Liability_App_2.pdf` (not in top menu; linked from Commercial) |

### 1d. Life & Health  (hub: `jds-life_health.htm`)

| Insurance | Page | Category | How to get a quote |
|---|---|---|---|
| Life Insurance | `jds-life_health.htm` | Life | **CALL** 905-764-7868 / 1-800-917-7283, J D Smith ext. 223 (also financial planning, free consultation). Related site: ardillgroup.com |
| Life Insurance – Groups | `jds-life_groups.htm` | Life / Group benefits | **CALL** ext. 223 (plan tables on page: life, AD&D, LTD, health, dental) |
| Mortgage Insurance | `jds-life_mortgage_insurance.htm` | Life | **CALL** 905-764-7868 — Tom Larha ext. 245 or J D Smith ext. 223 |
| Critical Illness | `jds-life_insurance_critical_illness.htm` | Life / Health | **CALL** ext. 245 or ext. 223 (Quick Issue plan, ages 18–60, $10k–$100k) |

---

## 2. CLAIMS — `jds-claims.htm`

- The site says to **call your personal broker first** (so you don't lose discounts over a small claim).
- Office Claims Help Line: **905-764-7868 ext. 232**
- Links on the page to report a claim online with each insurer: Aviva (property and auto), Ecclesiastical, Economical, Travelers, Unica, Wawanesa, Jevco.
- Emergency insurer claim lines (on `jds-staff.htm`):

| Insurer | Phone |
|---|---|
| Aviva | 1-866-692-8482 |
| Travelers Essential | 1-800-661-5522 |
| Ecclesiastical | 1-888-224-5677 |
| Economical | 1-800-607-2424 |
| Intact | 1-866-464-2424 |
| JEVCO | 1-866-864-1112 |
| Unica | 1-866-864-1113 |
| Wawanesa | 1-800-268-7300 (the Claims page says 1-844-929-2637: unconfirmed, STAKEHOLDER_NOTES 8.1) |

- Escalation email: manager@jdsmithinsurance.com
- The Claims page also lists Dominion / Chieftain / Travelers 1-800-661-5522, Perth 1-800-607-2424 and a commercial after-hours hotline (Crawford Adjusters) 1-888-224-5677.
- Related reading: `jds-unusual_claims.htm`, `jds-claims_giant_mine.htm`, `jds-claims_roofer_liable.htm`, `jds-bridge_too_small.htm`, `jds-lucky_to_be_alive.htm`, `jds-bloopers.htm`

---

## 3. PAYMENTS — `jds-online_payments.htm`

- **Online banking bill pay:** add payee "J D SMITH & ASSOCIATES INS. BROKERS" (or "J.D. SMITH ASSOCIATES INS. BROKERS"). Account # = 6-digit customer number at the top right of your invoice.
- **Automatic monthly payments:** call Accounting, ext. 224.
- Payment problems: Krista Furois, JDS Accounting, (905) 907-9211.

---

## 4. FIND YOUR BROKER / CONTACT — `jds-staff.htm`

- Main 905-764-7868 · Toll free 1-800-917-7283 · Fax 905-764-9618
- Emergency (only if the main lines are down): 905-907-1415, 905-764-2886, 1-800-779-7283 · Emergency fax 905-764-9560
- Every client has a personal broker. Ask them for their direct line.

| Team | Contacts (ext.) |
|---|---|
| Management | Dr. JD Smith, President (234) · Mark Smith, VP Commercial (228) · Giuseppe Simmarano, Commercial Manager (206) |
| Commercial | Kevin Cheung (210) · Lisa des Vignes (210) · Adoris Thompson-Forrester (211) · Tom Larha (245) · Aaron Paisley (207) · Haig Papazian (239) · Rocco Scarano (215) |
| Personal | John Bell, Personal Sales (255) · Jessica Antoniel, Personal Insurance Manager (233) · Joe Montano, Personal Sales (230) · Margaret Chan, CSR (238) · Shan Kwan-Woo, CSR (237) · Iris Leung, CSR (216) · Betty Jung (251) · Jonna Manalastas (231) |
| Accounting / Reception | Krista Furois (224) · Jennifer Puchalski, Reception (200) |
| Claims Help Line | ext. 232 |

Other pages: Staff Video Messages `jds-staff_videos.htm` · Job Opportunities `jds-job_postings.htm`
Video messages on the live site (all Flash): `VLP/JDS_RS.html` (Rocco Scarano & Dr. J.D. Smith), `VLP/JDS_1.html` (Dr. J.D. Smith, linked from the CWB page), `VLP/JDS_MS.html` (Mark Smith & Dr. J.D. Smith, linked from Renewable Energy)

---

## 5. RESOURCES

### Application Forms — `jds-applications.htm` (all PDFs in `/Applications/`, all 200 on 2026-10-18)
Page note: fill in, print, and scan or fax to 905-764-9618.
- Cyber Risk — `cyber_risk_insurance.pdf`
- Special Events (short term) — `special_events.pdf` ($1M excl. alcohol ≈ $375–$475; special rates for universities, camps, missions)
- Exhibitor/Kiosk Liability (MissionFest) — `exhibitorss.pdf` (basic coverage $250)
- CWB (send all 3, Attn: Mark Smith ext. 228; CWB members 10–16% off): Product Liability `cwb_liability_questionnaire2.pdf` · Welding `cwb_welding_questionnaire2.pdf` · E&O `cwb_errors_and_ommissions.pdf`
- NDE: Product Liability `NDE_Liability2.pdf` · Questionnaire `NDE_questionnaire1.pdf` · Professional Liability `NDE_Professional_Liab3.pdf`
- Day & Night Camp — `Camp_App_Word.pdf`
- Church: Building `church_building_application_02.pdf` · D&O `church_directors_officers.pdf` · Sexual Abuse `church_sexual_abuse.pdf` · Day Care `church_day_care_supplement.pdf`
- Faith Based Organization Program — `Faith_Based_Organization_Program.pdf`
- Limited Abuse Coverage — `Limited_Abuse_Coverage.pdf`
- Errors & Omissions: D&O Non-Profit `directors_officers_non_profit.pdf` · D&O For-Profit `directors_officers_profit.pdf` · Property Managers `prof_liability_prop_mgr_outline.pdf`, `prof_liability_prop_mgrs.pdf` · Rented Dwellings `rented_dwelling.pdf` · Misc. E&O `errors_omissions_miscellaneous.pdf`
- Contractors: Builders Risk `builders_risk.pdf` · Contractors Liability `contractors_liability.pdf` · Landscaping & Snow Removal `landscaping_snow_removal_2017.pdf` · Architects & Engineers `prof_liability_architects_2.pdf` · Homebuilders `prof_liability_homebuilders.pdf` · Pollution / Roofing Contractors `prof_liability_pollution.pdf`
- Miscellaneous: Boiler & Machinery `boiler_machinery.pdf` · Concession `concession.pdf` · Day Camp `daycamp_liability.pdf` · Graphic Designers `prof_liability_graphic_designer.pdf` · Hot Dog Vendor `hot_dog.pdf` · Locksmith `security_locksmith.pdf` · Paintball `paintball.pdf` · Media `prof_liability_media.pdf` · Misc. Professional `prof_liability_miscellaneous.pdf` · Printers `prof_liability_printers.pdf` · Veterinary Medical `prof_liability_vet_medical.pdf` · Security: Alarm Monitoring & Paging `security_monitor_paging.pdf`, Fidelity `security_fidelity.pdf`, Installers `security_installers.pdf`, Manufacturers & Distributors `security_mfgs_distis.pdf`, Security Guard `security_guard.pdf`
- Fleet & Cargo: Motor Truck Cargo — `motor_truck.pdf`
- Computer Technology: Prof. Liability E&O `prof_liability_errors_omissions.pdf` · IT Gen. Liability & E&O, revenue under $200K `IT_prof_gen_liability_E-O_under200K.pdf` · Internet E&O, revenue over $200K `computer_tech_internet.pdf` · Terminology E&O `computer_tech_terminology.pdf` · I.T. Prof. Liability `prof_liability_IT.pdf`
- The page's contacts table lists Kathy Turner ext. 207 and Caroline Tang ext. 206, which conflicts with `jds-staff.htm` (Aaron Paisley 207, Giuseppe Simmarano 206). Not used on the quote page.

### Information menu
| Page | Path |
|---|---|
| 12 Ways to Save | `jds-12waystosave.htm` |
| Online Payments | `jds-online_payments.htm` |
| Claims | `jds-claims.htm` |
| Accident Benefits Explained | `jds-client_auto_insurance_changes_2016.htm` |
| Insurance Companies (carriers represented) | `jds-insurance_companies.htm` |
| 20 Hot Topics | `jds-hot_topics.htm` |
| Ask a Broker ("How to drive safe and save big bucks", Dr. J.D. Smith; also linked from News) | `jds-ask_broker.htm` |
| News & Humour | `jds-news.htm` |
| Winter Storage Tips | `jds-winter_storage.htm` |
| Reflection & Encouragement | `jds-meditations.htm` |

**Carriers represented:** Chubb, AIG, Aviva, Definity, Ecclesiastical, Economical, Hagerty, Intact, Jevco, Lloyd's, The Dominion, Travelers, Travel Underwriters, Unica, Wawanesa, Zurich.

### RIBO / About Us menu
| Page | Path |
|---|---|
| Auto Reform (Ontario auto changes, July 2026) | `jds-auto_reform.htm` (+ `_fact_sheet`, `_Q_A`, `_scenarios`, `_self_asses`) |
| Code of Consumer Rights | `jds-code_consumer_rights.htm` |
| Privacy Statement | `jds-privacy_statement.htm` |
| Terms of Use | `jds-terms_of_use.htm` |
| Core Values / RIBO Broker Facts | `jds-values.htm` (`#ribo`) |
| Broker Advantage | `jds-advantage.htm` |
| Staff List & Contacts | `jds-staff.htm` |
| Staff Video Messages | `jds-staff_videos.htm` |
| Job Opportunities | `jds-job_postings.htm` |
| Community | `jds-community.htm` |
| Car Racing Team | `jds-racing_team.htm` |
| E. & O. E. Disclaimer | `jds-disclaimer.htm` |

### Homepage feature links
Savings Tips · Accident Benefits Options · JDS Consumer Rights-Privacy · Insurance News · RIBO Broker Facts · Evangelical Family Insurance (external: evangelicalfamilyinsurance.com) · Products & Packages (`jds-products.htm`)

---

## Notes / Issues Found
- `jds-quote_home.htm` is titled "Get An Online Quote For Home Insurance", but it has no online quote tool. Only the phone number works.
- Several quote forms (`jds-quote.htm`, `jds-renewable_energy_quote.htm`) post to an outside host (`sws006.actionhosting.ca/formmail.asp`). `uberx.htm` posts over plain `http://`. Worth checking that these still work.
- `jds-quote_me.htm` mentions a quick boat quote, but there is no boat quote tool. The Boat menu link goes to the outside site boatinsurancecanada.ca.
- Some menu links are broken: "Home" and "Personal Insurance" in the footer point to `index.htm1` / `jds-quote_me.htm1`.
- Page titles left as "Untitled Document": `uberx.htm`, `jds-cyber_liability_insurance.htm`, `jds-online_payments.htm`.
- The Marine & Overland Cargo page has the Fleet page's title ("Great Rates for Car and Truck Fleet Insurance").
