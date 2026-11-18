# Portfolio — Design Decisions

## Status

**Current phase:** Phase 06 — Motion design, implemented locally for review.

**Design status:** Working Exhibition, signal orange accent, neutral headlines and the homepage content/navigation structure approved for implementation. Static homepage and project pages implemented locally. Selected project media is integrated. Homepage and affected case-study media were reviewed in desktop and mobile browser layouts.

**Last reviewed:** 18 November 2026.

**Current scope:** The user authorized the restrained Phase 06 motion pass recorded in section 19. Preserve all Phase 05 composition, typography, colour, hierarchy and copy. Stop before Phase 07; no deployment is authorized.

This document is the source of truth for approved design decisions.

Do not treat exploratory recommendations as approved requirements.

## 1. Creative identity

### Core direction

A minimalist, editorial, typography-led portfolio showcasing work at the intersection of software engineering, robotics, artificial intelligence, and data science.

The design should feel precise, considered, intellectually curious, and quietly confident.

### Intended impression

- Technically capable
- Thoughtful and detail-oriented
- Contemporary without chasing trends
- Personal rather than corporate
- Restrained but visually memorable

### Approved creative direction — Working Exhibition

Direction B was selected by the user on 13 November 2026.

Present the portfolio as a sequence of demonstrations: see what the work does, understand Jacob's role, then inspect the engineering behind it.

The direction uses large project typography, dominant authentic media, concise supporting information and a clear path into case studies. It should remain minimalist, editorial and personal.

The user's qualification is that the initial color scheme is too bland and needs a stronger contrasting element. The original muted green treatment is not approved.

The former “engineer's field notes” hypothesis is superseded as the organizing concept. Fieldwork Journal and Open Index were not selected; do not blend their organizing structures into this direction without a reason and further agreement.

## 2. Typography

**Status:** Manrope and the responsive hierarchy approved in Phase 03.

Evaluate typography based on:

- Editorial character
- Readability
- Distinctive heading composition
- Technical information and code presentation
- Accessibility
- Consistency across mobile and desktop

**Approved heading typeface:** Manrope

**Approved body typeface:** Manrope

**Monospace typeface:** None required.

**Type scale:** Fluid 40–88px opening display; 34–60px secondary project titles; 16px body; 13–14px role/caption text.

**Line-height and measure principles:** Tight 1.02–1.08 display leading; 1.6 body leading; bounded text measures.

Typography should carry a substantial part of the design's personality.

**Implementation baseline:** Manrope, with Segoe UI and sans-serif fallbacks. Use a single family, moderate weights and neutral display headings. Body copy uses 16px; introductory copy uses 20–24px. Display sizes step down at content breakpoints. This baseline was approved with the Phase 03 art direction.

## 3. Color system

**Status:** Orange, neutral headlines, charcoal and warm-paper reading sections approved on 13 November 2026.

Approved requirement:

- Introduce a clearly contrasting color element; the initial muted scheme is too bland.
- Preserve readability and intentional hierarchy.
- Keep the imagery and project content visually dominant.

Approved treatment:

- Signal orange accent: `#FF7547`, selected from the color study.
- Headlines use a single neutral text color throughout, with no orange words, colored highlights or accent-colored backgrounds. Use warm white on the current dark presentation and dark text on light sections.
- Reserve orange for the primary action and active-navigation indication; pair active state with a visible structural cue.
- Use dark text on orange-filled controls. Do not place warm-white small text on orange.

Approved neutral palette and composition:

- Charcoal foundation: `#171816`.
- Warm white text and occasional light reading sections: `#F5F2E9`.
- Allow light reading sections to create tonal contrast against dark media sections.

The palette and section alternation are approved. A persistent header toggle lets visitors choose dark or light mode while retaining warm-paper contrast between sections. Electric blue and acid yellow are not active accent candidates.

**Background:** Charcoal `#171816`, with warm-paper `#F5F2E9` reading sections.

**Primary text:** Warm paper on charcoal; charcoal on warm-paper sections.

**Secondary text:** `#B6B8AF` on charcoal; `#565B50` on warm paper.

**Accent:** Signal orange `#FF7547` — approved; excluded from headlines.

**Borders / dividers:** `#4E5148` on charcoal; `#BABDB1` on warm paper.

Do not introduce additional colors without a clear purpose.

## 4. Layout and composition

**Status:** Phase 03 composition and spacing approved; implemented in Phase 04.

Preferred characteristics:

- Editorial hierarchy
- Controlled negative space
- A consistent alignment system
- Intentional asymmetry where appropriate
- A clear relationship between project imagery and text
- Varied project presentation rather than a uniform card grid
- Responsive layouts that retain the desktop design's character

**Maximum content width:** 1240px.

**Spacing scale:** 8px rhythm; 24–48px within exhibits, 64–96px between sections.

**Grid system:** Approximately 5:7 opening split; 5:6 thermal spread with an offset analysis image; shorter text-led RAG and spatial sections.

**Responsive behavior:** Opening stacks below 1000px; other content stacks at 720px. Media precedes the longer contribution text on mobile.

## 5. Navigation

**Status:** Visible text navigation approved and implemented.

Principles:

- Immediately understandable
- Minimal number of destinations
- Clear current-page indication
- Functional with keyboard and touch input
- No elaborate navigation animation without justification

**Desktop navigation:** Visible Work, About and Contact links; a compact project jump list at the start of Work. Existing `intro`, `projects`, `about` and `contact` anchors retained.

**Mobile navigation:** The same visible text links, wrapping when needed. No overlay menu. All navigation works without JavaScript.

**Scrolled header:** After 120px of page scroll, the sticky header reduces to a 56px inner height while keeping all navigation links visible. It expands again at 64px or less. Separate thresholds prevent the height change and browser scroll anchoring from repeatedly reversing the state. On narrow screens, compact spacing keeps the wordmark and links on one row.

**Theme control:** A sun/moon button sits at the right edge of the shared header. The selected theme persists across pages; light mode uses warm-paper backgrounds and charcoal text while preserving tonal section contrast and the signal-orange accent.

## 6. Project presentation

**Status:** Homepage sequence approved for implementation: robot dog, RAG, thermal inspection, spatial model, further work, About, Contact. Asset readiness can still change the leading exhibit before publication.

Projects should be treated as individual pieces of work, not interchangeable cards.

Lead each exhibit with authentic media and a clear title, followed by a concise role summary and a route into the engineering case study. A robot-dog demonstration is a possible opening only if suitable footage is available and approved for use. Do not lock the project order around missing imagery.

Each featured project should communicate:

- What was built
- Why it matters
- My role and contributions
- The technical approach
- Visual evidence of the work
- Challenges, decisions, or lessons where documented

Use authentic screenshots, diagrams, photography, and relevant artifacts.

Do not fabricate imagery presented as evidence of a real system.

## 7. Motion and interaction

**Status:** Deliberate playback and native scrolling approved. No animation library.

Working principles:

- Responsive rather than theatrical
- Subtle rather than constant
- Meaningful rather than decorative
- Consistent easing and duration tokens
- Accessible reduced-motion alternatives
- No scroll hijacking or gratuitous loading sequences

**Motion tokens:** Existing 180ms CSS feedback; smooth anchor scrolling disabled under reduced motion.

**Signature interaction:** Approved Go2 chapter rail with starts at 0:00, 0:46 and 1:04. Links enhance to native buttons, loading one player only after activation. Requested-chapter state is not continuous playback tracking. Direct and timestamped YouTube links remain available without JavaScript.

## 8. Approved design decisions

| Decision                     | Value / approach                                                                     | Rationale                                                                                         | Date       |
| ---------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ---------- |
| Primary creative direction   | B — Working Exhibition                                                               | User explicitly selected B from the three directions.                                             | 2026-11-13 |
| Color refinement requirement | Stronger contrasting color element                                                   | User found the initial color scheme bland; subsequently selected signal orange.                   | 2026-11-13 |
| Accent color                 | Signal orange `#FF7547`                                                              | User approved orange from the color study.                                                        | 2026-11-13 |
| Headline treatment           | Neutral text throughout; no accent highlighting                                      | User explicitly requested no highlight color for the headline.                                    | 2026-11-13 |
| Homepage structure           | Implement `HOMEPAGE-STRUCTURE.md` in the existing static site                        | User explicitly asked to apply the proposed changes to HTML, CSS and JavaScript.                  | 2026-11-13 |
| Project navigation           | Dedicated static project pages, project jump links and return/next-project links     | Makes the proposed homepage paths functional without a framework.                                 | 2026-11-13 |
| Project media                | Use selected authentic resources; keep placeholders only for projects without assets | User supplied photos, a recording, a screenshot and a poster and requested selective integration. | 2026-11-13 |
| Theme toggle                 | Persistent dark/light mode control in the shared header                              | User requested a top-right theme toggle.                                                          | 2026-11-13 |

## 9. Rejected or unselected directions

- Initial muted Working Exhibition palette: rejected as too bland; user requested stronger contrast (13 November 2026).
- Orange headline highlighting: rejected; keep headlines neutral (13 November 2026).
- Electric blue and acid yellow accents: not selected; signal orange was selected instead.
- A — Fieldwork Journal: not selected. The user did not state a separate criticism of this direction.
- C — Open Index: not selected. The user did not state a separate criticism of this direction.

Do not treat the unselected directions as approved requirements.

## 10. Open questions

- Add real RAG citation evidence and spatial figures when available without changing the approved sequence.
- Theme toggle added per the user's later request; the dark palette remains the default.
- Manrope is approved; continue checking readability as real content develops.
- Full-frame evidence and asymmetric layouts are approved.
- Chapter playback is implemented; a full accessible audio/caption review is still needed.
- Which authentic demonstration assets are available and permitted for publication?

## 11. Local implementation status

- `src/index.html`, `src/styles.css` and `src/script.js` implement the homepage and shared visual system.
- Six static pages under `src/projects/` contain confirmed project contributions and explicitly identify missing visual evidence and results.
- JavaScript enhances navigation state, copyright year and click-to-load YouTube playback. The preview image, descriptions and direct YouTube link remain available without JavaScript.
- Existing email and LinkedIn details are retained for local continuity. Approval for publication is still pending; no deployment occurred.
- Preview pages use `noindex, nofollow` while evidence and review are incomplete. This is indexing guidance, not access control.
- JavaScript syntax and local HTML/file/fragment/srcset checks passed for all seven pages after media integration.
- Current media pass: inspected the rendered homepage at desktop (1280px) and mobile (390px), and both affected case studies on mobile. Images loaded and no horizontal overflow was detected. Keyboard activation loaded the YouTube player, focus moved to it, and video playback was observed. Mobile case-study player also loaded. Full screen-reader testing remains outstanding.

## 12. Media integration — 13 November 2026

- User authorized selective use of `resources/`, the supplied Streamlit URL and Go2 YouTube video. Original resources are preserved.
- `IMG_9500.JPG` supplies the thermal setup photo. Responsive, orientation-corrected WebP copies preserve the full frame. Similar photos 9499 and 9501 are omitted.
- The thermal app screenshot is encoded losslessly and paired with the photo; the image and a text link lead to the supplied live app.
- A frame from 30 seconds into the Go2 recording supplies the local preview. The YouTube player loads only after activation, with a persistent direct link. This avoids serving the 68.6 MB MP4 from the site. Playback was verified in the browser; no quality superiority over the original is claimed.
- The team research poster is linked from the robot case study, where it supports technical detail without overcrowding the homepage. Its manual-evaluation qualification is preserved in accompanying copy.
- At this pass, RAG, spatial modelling and further-work media remained unprovided. HustleMuscle screenshots were supplied subsequently (section 15). No substitute imagery has been fabricated.

## 13. Phase 03 art direction — approved

Full proposal: [PHASE-03-ART-DIRECTION.md](PHASE-03-ART-DIRECTION.md). Isolated visual studies: [composition-study.html](phase03/composition-study.html). These studies are not a complete homepage implementation.

### Approved decisions preserved

- B — Working Exhibition; project evidence leads the experience.
- Signal orange `#FF7547` for actions/active states, with neutral headlines and no headline highlighting.
- Existing selected-project order: Go2, RAG, thermal inspection, spatial model; then further work, About and Contact.
- Dedicated case-study routes and visible Work/About/Contact navigation.
- Selective use of supplied project media and the supplied YouTube/Streamlit links; original resources remain intact.

### Approved Phase 03 decisions

| ID     | Proposal                                                                                                                                                | Reason                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| P03-01 | Finalize existing Manrope, charcoal `#171816` and warm-paper `#F5F2E9` baseline                                                                         | Makes the already chosen direction consistent without a new aesthetic.                            |
| P03-02 | Combine identity and opening Go2 exhibit; place title beside the full video frame on desktop; move the project index beneath it                         | Brings concrete work into the opening viewport.                                                   |
| P03-03 | Move orange playback into a caption rail and keep the case-study link neutral                                                                           | Preserves evidence visibility and gives the exhibit one primary action.                           |
| P03-04 | Use unequal section emphasis within the approved sequence: Go2 demonstration, compact RAG text, asymmetric thermal spread, wide spatial reading section | Avoids repeated layouts and large placeholder panels.                                             |
| P03-05 | Retain full video/technical screenshot frames and the native 3:4 thermal portrait; omit redundant photos from the homepage                              | Preserves meaningful context and legibility.                                                      |
| P03-06 | Add an optional Go2 chapter rail: Following, Posture commands, Scene questions                                                                          | Helps visitors select relevant evidence. Exact timestamps need playback verification in Phase 04. |
| P03-07 | On mobile, place media before the longer contribution paragraph, preserve landscape video, stack thermal evidence and keep navigation visible           | Maintains identity and evidence priority on smaller screens.                                      |
| P03-08 | Use only native scrolling, deliberate playback and short CSS feedback                                                                                   | No added animation or 3D dependency serves the current work.                                      |

The user approved P03-01 through P03-08 and requested implementation on 13 November 2026. The isolated studies remain an archival record; implementation proceeds in the existing source files.

### Evidence and limits

- Reviewed all six supplied resource files: three photographs, one screenshot, one MP4 through ten-second frame samples across its duration, and the one-page research poster. Existing media derivatives and implementation were inspected too.
- RAG citation evidence and spatial prediction/uncertainty plots remain the most consequential missing assets. Proposed text-led treatments avoid fabricated substitutes.
- During Phase 03, only documentation/studies changed. The subsequent approved Phase 04 implementation is recorded below.

## 14. Previous Phase 04 implementation and verification — historical

- Implemented the approved opening, relocated project index, compact RAG source-metadata treatment, offset thermal spread, and wide text-led spatial section. Removed homepage media placeholders; case-study evidence gaps remain explicitly documented.
- Updated the shared player on the homepage and robot case study. Entry points are 0:00 (following), 0:46 (posture command input) and 1:04 (scene question input). Inspected adjacent source frames and observed chapter playback in the browser. Chapters replace the existing iframe; they do not create simultaneous players.
- Kept original media, project routes, contact links and neutral headline treatment. Added no dependencies and performed no deployment.
- Browser checks: 320, 390, 768, 1024 and 1440px layouts without horizontal overflow. Desktop thermal/RAG and mobile spatial layouts visually inspected; image loading, project jumps, About active state and case-study navigation verified.
- Keyboard: chapter activation, visible focus, requested state and main-play focus transfer to the iframe verified. Player starts on activation; no iframe exists before it.
- A temporary copy with scripts blocked by CSP verified timestamped links and static media without JavaScript. A temporary rendered-text fixture doubled computed font sizes at 1440px without overflow. This is a font-size stress test, not a claim of browser text-zoom testing.
- A temporary CSS fixture forced the reduced-motion branch and verified automatic anchor scrolling, zero transition duration and no animation. OS-level preference switching was not tested. Full screen-reader and audio/caption audits remain outstanding.
- JavaScript syntax check passed. All seven pages passed balanced-markup, unique-ID, image-description/dimension and 145 local file/fragment/srcset checks. Browser console showed no errors. No build/lint/type scripts exist in this static repository.
- Temporary QA files were removed and the preview server stopped. Screenshots: [desktop](phase04/homepage-desktop.jpg), [mobile](phase04/homepage-mobile.jpg).

## 15. Approved hierarchy and copy refinement — 18 November 2026

The user's latest attached brief supersedes the Go2-first sequence and opening composition in P03-02/P03-04. This is a content and hierarchy refinement, not a new visual direction.

- Keep Manrope, orange, neutral headlines, charcoal/warm-paper sections, the existing theme toggle and static architecture.
- Sequence: minimal introduction → featured robotic inspection and thermal analytics → other selected projects → short About → Contact/footer.
- Thermal inspection is the dominant feature. Describe it as ongoing AUT/Spark NZ research, not a finished inspection system. Retain localization as ongoing work.
- Use one manual media carousel for the feature, initially the complete inspection photograph and thermal app screenshot. Preserve full frames and keep Go2 demonstration footage with its separate project.
- Carousels support images and user-controlled video, previous/next buttons, arrow keys, touch swipes, visible position, no autoplay/automatic advancement, no transition choreography and static fallbacks. Pause or unload video when its slide is left.
- Secondary projects use a discoverable editorial list at all widths. An asymmetric grid would give them too much equal emphasis; a horizontal project collection would hide destinations and add another carousel. No project carousel is needed.
- Copy is short and descriptive. Remove slogans, unnecessary heading punctuation, repeated contribution labels and excessive uppercase metadata. Keep normal punctuation in sentences.
- New HustleMuscle screenshots are available; select meaningful screens instead of listing all onboarding steps.
- Stop for review after the working Phase 04 prototype; do not progress to Phase 05 or publish.

## 16. Revised Phase 04 implementation and review — 18 November 2026

Implemented section 15 in the existing HTML, CSS and JavaScript. The homepage now leads with the thermal research, followed by five editorial project rows, short About and direct Contact. Preserved the selected visual identity, theme toggle, compact header, original resources and all six case-study routes. No framework, dependency, deployment or Phase 05 work was introduced.

### Media and interaction

- The thermal gallery presents the setup photograph and processing screenshot in a stable stage, with full frames, restrained captions, direct photo/app links and 44px previous/next controls.
- The Go2 case study demonstrates the shared image/video gallery using the existing click-to-load YouTube player and the authentic team poster. Its controls sit above the media so different caption lengths do not move the navigation. Leaving the video slide removes the iframe; returning restores the poster without automatic playback.
- Selected equipment and workout-log screenshots replace HustleMuscle’s obsolete missing-media placeholder. The workout screen also provides a small homepage preview. Other onboarding screenshots are omitted.
- Added versioned stylesheet/script URLs so returning browsers load this revised prototype instead of stale assets.

### Verification

- Rendered desktop and mobile homepage compositions inspected. Checked widths 320, 390, 768, 1024 and 1440px: no horizontal overflow detected. Inspected both light and dark themes, the secondary list and the supplied app screens on mobile.
- Previous/next pointer controls, keyboard ArrowLeft, Home and End, position updates and project navigation verified. The gallery has no transition animation or automatic slide advancement.
- Keyboard activation created one Go2 player and transferred focus to it. Moving to the poster removed the iframe. This pass verifies player lifecycle; full playback/audio quality was not re-audited.
- A temporary script-blocked homepage verified that both thermal figures and the case-study link remain available and carousel controls remain hidden. Temporary QA files were removed after checking.
- JavaScript syntax passed. Seven HTML pages passed balanced markup, unique IDs, one h1, image descriptions/dimensions and 142 local file/fragment/srcset reference checks. No build, lint or type scripts exist in this static repository. The reviewed case-study console had no errors.
- **Not verified:** physical touch swipes, native-video playback (no applicable thermal video supplied), full screen-reader/audio-caption testing, native 200% browser zoom, RTL rendering, pseudo-localization and OS-level reduced-motion switching. Swipe handlers and reduced-motion styles are implemented; these are not claims of device-level verification.

### Layout review

No actionable layout findings remain in the inspected views. Feature prominence comes from title scale and the authentic portrait; secondary work remains visible. The image caption rail was tightened to the right-hand media edge. Controls remain inset and text containers can grow naturally.

**Approve** for the inspected Phase 04 desktop/mobile prototype only; the unverified coverage above remains outstanding.

Review captures: [desktop opening](phase04/refined-homepage-desktop.jpg), [full homepage](phase04/refined-homepage-full.jpg), [mobile](phase04/refined-homepage-mobile.jpg).

## 17. Approved terminology refinement — 18 November 2026

Use Projects/Project in visitor-facing navigation, headings, links, accessibility text and metadata. Labels now read Projects, Selected projects, Other projects, View project, Back to projects, All projects and In this project. References to the page itself use “project page”. Preserve normal prose such as “Outside work” and descriptions of research work. Project names, factual descriptions, internal identifiers, routes, styling and interactions stay unchanged. This supersedes earlier label examples, not the approved visual direction.

## 18. Phase 05 — Design engineering refinement, 18 November 2026

Authorized by the user’s targeted Phase 05 brief. Working Exhibition, Manrope, black/cream sections, orange actions, neutral headings, the visible navigation and all project routes remain. No new dependency, card grid, homepage project carousel, contact form or entrance/scroll choreography was introduced.

Read `references/emil-design-eng.md` and the approved decisions. Its relative detailed-guide file is absent from the repository. Reviewed the [matching published detailed guide](https://raw.githubusercontent.com/sickn33/agentic-awesome-skills/main/skills/emil-design-eng/references/detailed-guide.md) and its [pinned original source](https://raw.githubusercontent.com/emilkowalski/skills/a81dbca07f2217b7103e510c0f13f8d5b017afc9/skills/emil-design-eng/SKILL.md). Applied feedback, pointer capture, touch-safe hover and reduced-motion guidance within the existing design; animation suggestions outside Phase 05 were not adopted.

### Implemented refinements

| Before | After | Why |
| --- | --- | --- |
| Hero copy centred against the entire tall gallery; large gap beneath the introductory label | Copy aligned near the image top; introduction and internal copy spacing tightened | Connects the opening elements and brings the CTA into ordinary desktop viewports without reducing the display type or portrait |
| 200px Go2 thumbnail at the outer edge of a wide row | Responsive media column up to roughly 540px, retaining the whole demonstration frame | Gives authentic evidence useful visual weight |
| Single 144px-tall phone preview | Two existing full-frame equipment/workout screens, up to 320px tall on desktop and 280px on mobile | Makes the application visible and relates its two flows without inventing assets |
| Media and text-only rows shared a grid | Text-only rows use normal block flow and tighter vertical padding; media rows grow with their content | Avoids empty media columns while retaining thin dividers and a visible editorial list |
| About described only education | A similarly short paragraph connects the AUT background with current robot-control and thermal-imaging research | More personal and specific; hobbies, desktop/tablet two-column layout and spacious Contact retained |
| Low-contrast control borders; incomplete press states; hover transforms could latch on touch | Stronger neutral borders, immediate press feedback and mouse-only hover rules | Makes controls legible and responsive without decorative motion |
| Lazy gallery images could start loading only when revealed; pointer gestures could leave the element | Small gallery images preload; pointer capture, cancellation cleanup and multi-touch guard added | Reduces blank-slide risk and makes manual gestures more reliable |
| About could become Contact immediately after an anchor jump near page end | Explicit section choice persists until manual scrolling resumes; scroll tracking selects one section deterministically | Keeps active state consistent with the visitor’s action |
| Animated header height and transform feedback under reduced motion | Header height switches directly; reduced-motion branch also removes press/hover transforms | Avoids unnecessary layout animation and respects motion preference |

### Validation and limits

- Compared actual full-page before/after desktop and mobile captures. Desktop hero context moved from y=283px to y=196px and CTA bottom from y=725px to y=621px at 1440px width. At 1280×720 the revised CTA ends at y=597px, within the initial viewport. Measurements are browser-specific, not universal guarantees.
- Checked 320, 390, 540, 600, 768, 850, 1024, 1280 and 1440px widths without horizontal overflow. Visually inspected desktop, mobile and tablet rows and the two-column tablet About. Checked both themes.
- Verified pointer previous/next, a real browser pointer drag, keyboard activation, ArrowLeft, Home/End, visible focus, position labels and full-frame image loading. Featured gallery height stayed 680.75px across its two slides at 1440px. No slide animation or automatic advancement exists.
- Verified About and Contact active states after anchor navigation, and return to Projects after manual scrolling. The Go2 player loaded on explicit activation; leaving its slide removed the iframe. The team poster loaded successfully.
- A development fixture enabled the actual reduced-motion CSS branch: automatic anchor scrolling, zero button/control transition duration and no animations. Gallery keyboard controls still worked. This is not OS-level preference testing.
- JavaScript syntax passed. CSS parsed without errors. All seven HTML pages passed balanced markup, unique IDs, one h1, image descriptions/dimensions and 145 local file/fragment/srcset checks. Reviewed browser console had no errors. No build, lint or type-check commands exist in this static repository.
- **Not verified:** physical touchscreen/multi-touch testing, full screen-reader and audio-caption review, native 200% browser zoom and OS-level reduced-motion switching. Native-video playback is not exercised because the supplied relevant demonstration uses YouTube. No known blocking layout issue remains in the inspected views.
- The thermal feature still has two authentic still images; the available Go2 video belongs to its separate project. RAG, spatial and text-classification evidence remains outstanding. No placeholder evidence was fabricated.

Captures: [before desktop](phase05/before-desktop.jpg), [after desktop](phase05/after-desktop.jpg), [before mobile](phase05/before-mobile.jpg), [after mobile](phase05/after-mobile.jpg), [refined project rows](phase05/project-rows.jpg).

Phase 05 stops here for review. Phase 06 and deployment have not begun.

## 19. Phase 06 — Motion design

Implemented the user’s motion brief after reading AGENTS.md, MASTER-PROMPT.md, the approved decisions, `references/animate.md` and the relevant button recipe in `references/animate-RECIPES.md`. This replaces the earlier instruction to keep gallery changes entirely instantaneous for pointer input. Layout, wording, assets, routes and the editorial direction remain unchanged.

### Motion audit and decisions

| Interaction | Decision and purpose | Implementation |
| --- | --- | --- |
| Featured gallery and shared project gallery | Animate occasional pointer/touch changes to bridge the visual change | 200ms opacity crossfade on media only; captions, position and accessibility state update immediately |
| Primary/project/external links | Small feedback confirms clickable affordances without moving text | Existing underline remains immediate; arrow moves 2px on fine-pointer hover, with 160ms return |
| Buttons, gallery controls, theme control | Tactile feedback confirms a press | 1px vertical press/release over 160ms; existing colour feedback is immediate |
| Main navigation | Keep active state precise; restrained hover feedback only | Active orange underline appears immediately; non-current hover underline uses the existing scaleX treatment at 160ms |
| Keyboard and assistive activation | Static, immediate response | No crossfade for keyboard or zero-detail click activation; keyboard focus, link feedback and anchor scrolling are immediate |
| Theme switching | Keep the page readable throughout the change | Instant palette/icon change; no whole-page colour animation or fade |
| Images and video playback | Evidence remains stable and playback deliberate | No image zoom; no player entrance animation. Play/chapter buttons load one player only on request; leaving unloads it and returning shows its poster |
| Mobile navigation | Preserve the visible links | Same feedback system; hover motion is gated to hover-capable fine pointers; no animated menu |
| Page/section transitions | Keep static | No entrances, stagger, parallax or loading sequence. Existing native pointer-initiated anchor scrolling remains; keyboard/reduced-motion scrolling is immediate |

### Tokens and implementation sequence

The gate is feedback for frequently used controls and continuity for occasional media changes. No narrative benefit justified a section reveal. Native CSS transitions are the simplest tool; no Motion, GSAP, package or dependency was added.

| Token | Value | Use |
| --- | --- | --- |
| `--motion-feedback` | `160ms` | Pointer hover, underline and press feedback |
| `--motion-media` | `200ms` | Media crossfade |
| `--ease` | Existing `cubic-bezier(.22,1,.36,1)` | Reused strong ease-out curve; no parallel easing system |

Only transform and opacity animate. No layout dimensions or page colours are animated. Hover transforms remain behind `(hover:hover) and (pointer:fine)`. The page is never initially hidden.

Incoming and outgoing media reuse their existing elements, so a rapid reversal retargets the live CSS opacity instead of restarting a keyframe or queuing slides. Outgoing slides become inert and aria-hidden immediately; after the fade they are hidden from rendering too. Focus transfers to the gallery before a focused outgoing slide becomes inert. Controls stay usable during transitions. No live iframe is cloned: video departure stops the player immediately and the local poster participates in the media fade.

Keyboard input, a reduced-motion preference change, a hidden document or an offscreen gallery settles the current slide and explicitly cancels its CSS transitions through the native animation API. There are no animation timers, animation loops or automatic slide advances. Native CSS handles the fade; JavaScript only changes state and performs cleanup.

Reduced motion keeps the established immediate variant: no transitions or transforms, visible focus and instant slide/anchor changes. It is intentionally stricter than a gentle fade, consistent with the existing accessibility baseline. With JavaScript disabled, all media remains in normal document flow and unused carousel controls stay hidden.

### Validation

- Inspected the actual desktop/mobile interface and a five-times-slower development crossfade to inspect the intermediate frame. Production remains 200ms. No composition or crop change was introduced.
- Rapid reversal fixture: next → previous → next at 0/60/110ms. Both opacities retargeted from intermediate values; the final selected slide was correct, fully opaque, and the outgoing slide hidden/inert. No animations remained after settling.
- Gallery height stayed 680.75px at 1440px and 438.67px at 390px throughout the rapid transition. Opacity animation did not alter layout. The separate video project retains its existing content-driven caption heights; they are not animated.
- Keyboard interruption at 60ms immediately produced the requested slide at opacity 1 with zero animations. Enter activation and navigation focus were also checked on the real page; About’s active indicator and keyboard anchor scrolling were immediate.
- Tested real pointer clicks, a double-click and a pointer swipe at mobile width. Position indicators and visible content agreed; no slides advanced automatically.
- A development fixture enabled the actual reduced-motion CSS and JavaScript branches. The same rapid sequence produced zero animations at every sample. This is preference simulation, not a physical OS-setting test.
- Offscreen interruption cancelled both media transitions and left zero running animations. Returning to the gallery showed the selected slide fully visible.
- The Go2 player loaded on explicit activation, was removed when moving to the poster, and did not restart when returning. The supplied poster loaded correctly.
- Script-blocked fallback: both feature images and the project link were available, with carousel controls hidden. Light/dark switching remained instant and usable.
- Checked 320, 390, 768 and 1440px widths without horizontal overflow. JavaScript syntax, CSS parsing, HTML structure and local-reference checks passed. No build/lint/type scripts exist in this static repository.
- **Remaining limits:** physical touchscreen/multi-touch and device frame-rate testing, screen-reader/audio-caption audit and native OS reduced-motion switching remain unverified. Mobile viewport testing is not a physical-device performance claim. Native-video playback is not exercised because the supplied demonstration uses YouTube.

Recorded samples: [validation.json](phase06/validation.json). Review captures: [desktop](phase06/homepage-desktop.jpg), [mobile gallery](phase06/gallery-mobile.jpg). Temporary development fixtures were removed from the site after testing.

### Header stability follow-up

Fixed the reported scroll-boundary flicker without changing the header styling. The previous single 120px threshold let browser scroll anchoring reverse the compact state repeatedly as the header changed height: the reproduction recorded 55 state changes in 900ms. The shared script now collapses above 120px and expands at 64px or less, with class changes only when the state actually changes.

Browser checks at 1440, 390 and 320px widths confirmed one state change and a stable result for both collapse and expansion. JavaScript syntax validation passed. All seven pages reference the updated script version to avoid retaining the cached implementation. [Compact header capture](phase06/header-stability.png).

Phase 06 stops here. Phase 07 and deployment have not begun.

## Maintenance rule

When a major design choice is approved, update this document before continuing implementation.

When a decision changes, record the replacement and rationale.

Never silently override approved design choices during later phases.
