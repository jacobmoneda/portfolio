# Jacob Moneda — portfolio

A static HTML, CSS and JavaScript portfolio using the Working Exhibition direction.

## Preview locally

From the repository root:

```powershell
python -m http.server 4175 --bind 127.0.0.1 --directory src
```

Open `http://127.0.0.1:4175` in your browser. Stop the server with Ctrl+C.

No package installation or build step is required. Manrope loads from Google Fonts; the CSS includes local fallbacks when offline.

## Files

- `src/index.html` — homepage with featured thermal research, a secondary-project list, About and Contact.
- `src/styles.css` — shared responsive styles and reduced-motion support.
- `src/script.js` — navigation state, light/dark control, compact header, manual media galleries and on-demand YouTube chapter playback. Images and direct media links remain available without it.
- `src/projects/` — six dedicated project pages.
- `docs/PORTFOLIO-CONTENT.md` — factual content source.
- `docs/HOMEPAGE-STRUCTURE.md` — content and navigation plan.
- `docs/DESIGN-DECISIONS.md` — approved decisions and implementation status.

## Content still needed

The Go2 and thermal inspection exhibits use selected authentic resources. The Go2 video loads from YouTube only after activation; a direct link remains available without JavaScript. The thermal section links to the processing app, and the Go2 case study includes the team poster. Responsive WebP copies live in `src/assets/images/`; the PDF lives in `src/assets/documents/`. Original resources are untouched.

HustleMuscle uses selected authentic equipment and workout screenshots. RAG, spatial modelling and text-classification media are still needed. The homepage uses compact text-led presentations; case studies identify missing evidence and technical details. No evidence is fabricated.

Existing contact information is retained for local review. Confirm public email, LinkedIn, research disclosure permissions and any CV before deployment. Pages currently carry `noindex, nofollow`; revisit this after content and visual review. No deployment is configured by this change.

## Verification

The current Phase 06 review is recorded in section 19 of `docs/DESIGN-DECISIONS.md`, including checks completed and their limits. This static repository has no package installation, build, lint or type-check scripts. JavaScript syntax is checked with `node --check src/script.js`.

Phase 06 motion refinements are implemented locally. Phase 07 and deployment have not begun.
