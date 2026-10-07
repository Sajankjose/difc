# Geojit Private Wealth DIFC — website redesign

## Open the website
Open `dist/index.html` in a modern browser. The five pages work directly from disk and can also be served from any static web host. No installation or build dependencies are required. Keep `dist/assets` alongside the HTML files.

Pages: Home (`index.html`), Who we are (`about.html`), What we offer (`services.html`), Insights (`insights.html`), Contact us (`contact.html`).

## Editing
- Shared page structure and content: `build.py`; heritage timeline, credentials and foundation content: `section_updates.py`. Run `python3 build.py` from this directory to regenerate the five HTML pages.
- Design tokens, responsive layouts and component styling: `dist/assets/site.css`.
- Mobile navigation, team groups, insight search/filtering, article dialogs and email preparation: `dist/assets/site.js`.
- Article content is currently defined in both `build.py` and `site.js`; update both when publishing editorial content. `articles.json` is a reference export, not a runtime feed.
- No external JavaScript, analytics, cookie tracking or remotely loaded fonts are used.

## Design system mapping
Reference: https://www.figma.com/design/r1ynD251E5mQ8ChboZK1jH/Geojit-Private-Wealth-Design-System?node-id=2-13

The implementation applies the provided Private Wealth system, rather than the parent Geojit brand palette. Official existing logo artwork and source icon glyph are reused. `DIFC · Dubai` is a separate location descriptor, not a modification of the logo. Replace with an approved DIFC lockup if required.

| Role | Value |
|---|---|
| Canvas / raised / subtle | #000000 / #181818 / #262626 |
| Text / secondary text | #FFFFFF / #C8C8C8 |
| Border / strong border | #3C3C3C / #9A9A9A |
| Amber accent | #FDBA4D |
| Focus ring | #9BB5F3, 2px, 4px offset |
| Spectrum accent | #FFDC00 → #EB2323 → #143C9B |
| Typeface | Gotham Light 300, Book 400, Medium 500, Bold 700 |
| Desktop hero / compact | 64/72px / 52/60px |
| Mobile hero | 32/40px |
| Desktop / mobile section heading | 40/50px / 28/36px |
| Body / small | 16/24px / 14/22px |
| Content maximum | 1200px |
| Mobile gutters | 16px |
| Buttons | Square; 52px default; 44px compact |
| Responsive thresholds | 1150px and 760px |

Gotham files were obtained from the referenced Private Wealth website. Confirm the organisation's font licence covers the deployment. Figma's Inter preview is replaced by the source Gotham family as directed by the system's production typography guidance. Spectrum is restricted to brand artwork and thin accent/border treatments; body text remains solid and readable.

## Image schedule
All photography remains intentionally blank. Labels are recommended asset dimensions, not the responsive CSS display dimensions. Mobile cropping should be reviewed when final photography is supplied.

| Slot | Recommended pixels |
|---|---|
| Home hero | 1200 × 1400; mobile crops to 4:3 |
| About hero | 1600 × 640; mobile crops to 4:3 |
| Service photography | 1200 × 900 |
| Editorial cards | 1200 × 750 |
| People portraits | 600 × 750 |
| Contact office image | 1200 × 800 |

Use meaningful alternative text for final images. Decorative photography can have empty alternative text. Remove the placeholder role/label when replacing it with an actual image.

## Changes from the supplied staging screenshots
- Unified five page templates, consistent navigation labels, button hierarchy, cards, spacing and footer.
- Replaced teal/cream staging treatments with Private Wealth dark surfaces and typography.
- Replaced incomplete animated counters with static, explicitly labelled Geojit group credentials on Home and Who we are: US$11.75 billion in client assets, 39 years, 1.69 million clients and 525 offices. Date: June 2026. Units follow the earlier source context; confirm final approved figures before public launch.
- Consolidated the four services into a single navigable page; removed repeated generic “Explore more” destinations.
- Removed absent biography/LinkedIn destinations and implemented visible team groups without invented biographies.
- Replaced inconsistent Kochi contact content, repeated maps and unrelated office directories with the supplied DIFC footer address and contact details. Maps opens an address search, not an unverified pin.
- Removed generic placeholder article tags and unrelated Panvel event. Events filter has a genuine empty state.
- Added labelled form fields, appropriate autocomplete, required-field validation, keyboard focus, skip link, active navigation state, reduced-motion support and native accessible dialogs.

## Operational limitations and launch content
This is a complete static front-end redesign, not a change to the original staging server or its backend.

The form prepares a user-reviewed `mailto:` enquiry. It does not transmit data to a server, CRM or mailbox automatically. The visitor must open and send the draft. Copy fallback requires browser clipboard permission and a secure context. Details remain in memory, with no local storage. Connect an approved backend and privacy flow if server submission is required.

Only two editorial headlines and their metadata were supplied. Details dialogs offer an article request; they do not invent article bodies. Add approved full articles or verified external URLs before public launch. There are no published DIFC events in the provided content.

Legal policies, licence wording, approved partnership descriptions, people biographies and verified social destinations were not supplied. Their missing destinations are not fabricated. Footer offers an email request for legal/privacy documents. Replace with approved policy pages and required disclosures before public launch. The DFSA-regulated platform pillar was restored from the user-supplied reference. Current regulatory status and exact legal wording have not been independently verified.

Contact details and staff names/roles are transcribed from the supplied screenshot content; confirm current spelling, roles, telephone and address before launch. Group figures are displayed with their June 2026 date and group scope. No performance promises are added.

## Verification
JavaScript syntax, local links, anchor targets, duplicate IDs, form-label associations, HTML page structure, image placeholder dimensions, SVG dimensions and local font headers are checked. All five routes and assets are packaged without build dependencies.

Interactive browser and screenshot comparison were unavailable in this environment. Before public launch, review all pages at 1440px, 1024px, 768px and 390px; test keyboard navigation, screen-reader announcements, email client handling and long content with the approved final assets. The hosted review version remains private.

## Update — 7 October 2026

Restored the four supplied pillars on Home. Added group credentials to Home and Who we are. Replaced the single 1987 heritage block with all 12 user-supplied milestones through 2026. The timeline supports click/tap, previous/next buttons, Left/Right arrow keys, Home/End, a horizontally scrollable year rail and an expandable full chronological list. There is no automatic slide advancement. Previous/next controls stop at the endpoints. All original image placeholders remain unchanged.
