# Phase 03 — Art direction and visual storytelling

**Status: approved for implementation.** User approval received 13 November 2026.

The proposal below is preserved as the approved design brief. Its original review record describes Phase 03 only; subsequent implementation is recorded in DESIGN-DECISIONS.md.

This is a refinement of B — Working Exhibition. It does not approve a new aesthetic or implement Phase 04. Existing website files remain unchanged. The composition studies in `phase03/composition-study.html` are isolated review material, not a functional homepage prototype.

## Direction

Let visitors see the work, understand Jacob's contribution, then choose how deeply to explore it. Use the tension between large neutral typography and candid technical evidence: a robot in a working lab, an inspection setup, an actual analysis interface. The photography supplies colour and texture; the surrounding design stays quiet.

Retain the approved orange `#FF7547`, neutral headlines, project-led opening, dedicated case studies, Work/About/Contact navigation and existing project sequence. Propose finalizing the current charcoal `#171816`, warm paper `#F5F2E9` and Manrope baseline. These latter choices were implementation baselines, not separately approved final decisions.

Reference application: `build-awwwards-quality-sites.md` informs composition, provenance and refinement. Sites is the compatible local web-design workflow. User constraints supersede the reference's defaults for a new identity, generated imagery, GSAP and smooth-scroll libraries. Use native scrolling, existing small JavaScript enhancements and CSS feedback. No GSAP, Lenis, Locomotive Scroll, Three.js, stock imagery or icon package is justified here.

## Review of the existing work

- The static HTML/CSS/JavaScript structure is appropriate. Preserve its six project destinations, return links, semantic sections, visible navigation, focus treatment and reduced-motion support.
- The current opening stacks the introduction, project index and large title before the footage. At the reviewed desktop viewport, only the top of the video appears near the bottom of the screen. The components are individually clear but compete for the same opening space.
- The centered orange play overlay obscures part of the evidence. A second filled case-study CTA gives the same exhibit two competing focal points.
- RAG and the spatial model share the same split layout and large placeholder panel. This overstates the visual evidence available and makes the page feel repetitive.
- The thermal portrait and screenshot are useful together. Their different proportions should drive a deliberate editorial spread rather than equal-height image boxes.
- Current type falls abruptly from 60px to 36px around the smallest breakpoint. Use a more continuous scale while allowing natural reflow.
- The source poster contains useful team context and explicit evaluation limitations. Keep it in the case study rather than scaling its dense text into an unreadable homepage image.

## Proposed final sequence and hierarchy

The order is already approved; the composition and relative emphasis below are proposals.

| Sequence | What visitors learn | Composition and emphasis | Next action |
| --- | --- | --- | --- |
| Identity + Go2 opening exhibit | Who Jacob is, the fields he works in, and a concrete example of the work | Compact identity line; large neutral project title alongside the authentic video. Largest project emphasis. | Watch demo or read case study |
| Selected-work index | The breadth of the portfolio | One quiet ruled line after the opening exhibit; wrapping text links, no tiles | Jump to any of four projects |
| RAG | How Jacob approaches source traceability | Short warm-paper editorial spread; title on the left, contribution and source hierarchy on the right. No empty media panel. | Read retrieval case study |
| Thermal inspection | The connection between physical positioning and thermal processing | Dark asymmetric spread: portrait setup on the left, wider analysis screenshot on the right, each with a precise caption | Open processing app or read inspection case study |
| Auckland land values | Spatial modelling, interpretation and uncertainty | Warm-paper, broad reading section; title across the top, method and personal contribution in unequal columns. Eventually a wide real map below. | Read spatial case study |
| Further work | Application development and earlier research | Two compact ruled text rows: HustleMuscle and text classification | Open the relevant project |
| About | Working approach, education and personal context | Quiet two-column text section on charcoal, smaller title than project headings | Continue to contact |
| Contact + footer | How to start a conversation | Warm-paper closing area; one email action, restrained GitHub/LinkedIn links | Email Jacob |

The four selected projects are not four equally large exhibits. Go2 and thermal inspection carry the imagery; RAG and the spatial model provide shorter reading intervals. No testimonial, logo wall, skill-badge grid or additional hero is needed.

## Hero — one opening exhibit

**Copy retained:** “Vision for a / robot dog.” Use the existing specific project title as the dominant headline. Jacob's name remains visible in the wordmark and in the document's accessible identity heading.

**Identity line:** “I build software across robotics, computer vision, AI and application development.” Set at 18–20px, with a maximum measure around 60 characters. Research-role detail can live in About and the relevant project instead of becoming a second introductory paragraph.

**Desktop composition:** Within the existing 1240px maximum content width, use a 12-column grid with 24–40px gutters. The title and concise contribution occupy approximately five columns; the full video frame occupies seven. Align the top of the media with the title area, not with the navigation. Use 48–64px between the identity line and exhibit, 24–32px from title to role/contribution, and 48–64px after the exhibit before the project index. Do not vertically center the entire page or require a viewport-height hero.

**Hierarchy:** Project category → two-line title → compact role line → one contribution sentence → underlined “See more details”. On the adjacent media side: full poster frame → orange play action and duration → optional chapter links. The case-study action stays neutral so orange belongs to playback.

**Media:** Preserve the 1916:1124 recording ratio (approximately 1.705:1). Keep the robot, command field and status panel visible. Retain the existing 30-second still: it shows the moving robot and the interface in one frame. Do not replace it with the thermal-equipped robot photograph, which belongs to a different project.

Move the playback action into a caption rail directly below the image. This keeps the image legible before interaction and avoids obscuring it with a large central control. The player replaces the still in the same footprint, with native controls and fullscreen available.

At a normal desktop viewport around 1280×800, the target is to show identity, title, full preview and play action without scrolling. On shorter screens, prioritize meaningful media visibility over forcing everything above the fold. Phase 04 must validate this with actual copy and loaded fonts.

## Type, colour and negative space

| Element | Proposed treatment |
| --- | --- |
| Font | Keep Manrope; Segoe UI/sans-serif fallback. No second display family. |
| Opening project title | 72–88px desktop, 56–64px tablet, 40–48px mobile; weight 500, line height 1.02, tracking around −0.05em. Never shrink body copy to make the title fit. |
| Other project titles | 48–60px desktop, 34–40px mobile; weight 500, line height 1.08. |
| Summary | 20–24px desktop; 18–20px mobile; 35–45 characters per line. |
| Body | 16px minimum, line height 1.55–1.65; 55–65 characters per line. |
| Roles and captions | 13–14px with comfortable line height. Category labels may be 12px. No essential instructions in tiny uppercase type. |
| Colour | Charcoal and warm paper alternate by section purpose. Orange marks the main action and active state; all headlines remain neutral. Natural image colours remain untouched. |
| Space | 8px base rhythm. 16–24px within related groups, 32–48px between text and media, 96–112px between major desktop sections; 64–72px on mobile. Smaller text-led sections can use less. |
| Rules and frames | Hairline rules separate captions and index entries. Avoid full box borders around every figure or section; no shadows or decorative rounded cards. |

Use whitespace to separate the title, evidence and explanation—not to reserve space for missing imagery. Image captions align with image edges; explanatory text follows the same grid. Never place headlines over technical screenshots or use imagery as a low-contrast text background.

## Asset decisions and provenance

All assets below were supplied by the user. Review sheets are in `phase03/`. The video was inspected through frames sampled every ten seconds across its full 142.93-second duration; this is not a claim of a complete audio or caption audit. Existing embedded playback was verified during the prior media integration pass.

| Source | Placement | Frame and treatment | Decision |
| --- | --- | --- | --- |
| `go2-vlm-agent demo video.mp4` — 1916×1124, 30fps, 68.6MB | Opening exhibit; robot case study | Native ratio, no crop, no decorative loops. Existing responsive 30-second still. Click-to-load supplied YouTube version. | Keep; do not load the original MP4 on page entry. |
| `IMG_9500.JPG` — upright 3024×4032 | Thermal homepage spread and case study | Native 3:4 portrait. Keep camera, arm, robot body and feet together. Full-frame WebP, maximum display width about 440–480px on desktop. | Primary photo. Its readable setup is stronger than a cosmetic wide crop. |
| `IMG_9499.JPG` — 4032×3024 | None on homepage | Wider environmental view includes competing robot bodies and lab clutter. | Omit; retain original for future context if needed. |
| `IMG_9501.JPG` — upright 3024×4032 | Optional case-study detail only | Full portrait or a clearly labelled detail crop showing camera mount and arm, if the accompanying text explains that mechanism. | Omit from first prototype; too similar to the selected view. |
| `Screenshot 2026-11-13 120030.png` — 816×630 | Thermal spread, larger on case study | Preserve full 136:105 ratio, statistics, axes and temperature legend. Display no wider than 816 CSS px. Current lossless WebP is suitable. | Keep. Link to the real Streamlit app. No recolouring, mock browser frame or fabricated values. |
| `RND Poster 3.pdf` — one page, 348KB | Robot case study resource | Original downloadable/readable PDF. Avoid a postage-stamp reproduction on homepage. | Keep existing link; preserve team attribution and manual-evaluation caveat. |

Below-fold images are lazy-loaded with width/height reserved; the opening still loads eagerly. Reuse the current responsive derivatives. If a later crop is needed, create a derivative and preserve the source. Full-frame is an intentional crop decision for technical evidence, not a failure to art-direct it.

### Thermal spread

Keep the title above the media. Use approximately five columns for the portrait and six for the screenshot, leaving one column of breathing room. Begin the screenshot about 80–112px lower than the photo on desktop; this offsets their different heights deliberately. Put “01 / Inspection setup” under the photo and “02 / Thermal analysis” under the screenshot. These labels describe two facets of the work; they do not imply that the screenshot was captured during the photographed session.

Place one short explanation of arm positioning under the photo and the app link beside the analysis caption. Keep personal contribution and case-study entry below the spread. The lab image carries physical context; the screenshot communicates the software. Do not stretch or crop them to equal heights.

### RAG without an invented interface

Remove the oversized placeholder in the proposed prototype. Use the confirmed source structure as a small typographic statement: “Course / Lecture / Slide”. Label it as the metadata structure, not as a screenshot or a demonstrated query result. Pair it with the contribution paragraph. Once an authentic query, answer and cited slide are supplied, place that evidence on the right at its natural proportions. Keep four courses and approximately 1,000 slides in contextual prose, not as achievement counters.

### Spatial model without a decorative map

Give the project a wide title and two unequal text columns: scope on the left, contribution on the right. A real prediction/uncertainty figure can later occupy the full width below. Until then, use a compact text-led introduction rather than a blank 480px panel, an invented chart or a generic Auckland map.

## One signature interaction — choose a moment in the demo

Add a restrained chapter rail under the Go2 video: **Following / Posture commands / Scene questions**. This extends the existing deliberate playback behaviour and lets a recruiter or engineer choose the evidence relevant to them.

- Provisional chapter starts from sampled frames: Following 0:00; Posture commands around 0:45; Scene questions around 1:05. Verify exact boundaries in playback before implementation. These are not final timecodes.
- Default view shows the local poster, full-demo play action and a persistent YouTube link. No player or YouTube API loads before activation.
- Selecting a chapter loads the same player at the verified start time. A selected label means “requested chapter”, not a continuously tracked playback position. No progress animation or automatic chapter changes.
- Use native buttons with visible focus. On touch they wrap into labelled rows with at least 44px targets. Keep controls outside the image and in document flow.
- Without JavaScript, timestamped YouTube links provide the same destinations. If embedding fails, the direct link remains beside the player. Do not claim successful playback just because an iframe loaded.
- No scroll scrubbing, hover autoplay, cursor replacement, lightbox takeover or simultaneous players. Reduced motion uses the same static layout and explicit playback.
- The composition study shows the rail's appearance only. It does not implement seeking or claim verified chapter boundaries.

## Mobile and intermediate widths

- **Above 1000px:** side-by-side opening title and video; asymmetric thermal spread. Keep header and project index in normal readable proportions.
- **721–1000px:** stack the opening if either title or video becomes cramped; keep the thermal pair only while the screenshot is readable. The content determines this threshold, not a specific device name.
- **720px and below:** 20–24px side margins (16px only near 320px). Order the opening as identity → category/title → compact role → video/action → contribution/case-study link → project index. Do not place the whole contribution paragraph ahead of the video on a phone.
- Keep the video landscape at its native ratio. Do not crop it to a tall mobile hero. Offer fullscreen for the small command text; surrounding copy must explain the demo without requiring that text to be read.
- Stack the thermal photo and caption before the screenshot and app link. Remove the desktop offset; keep full frames. Ensure visitors can open the image/app for closer inspection.
- Keep RAG and spatial sections compact and text-led. The same typographic hierarchy and warm/dark rhythm remain; no mobile-only cards or carousel.
- Use natural title wrapping where a forced desktop line break no longer fits. Do not clip at 200% text zoom or create horizontal scrolling at 320px. Keep visible Work/About/Contact links and wrapping project links.
- Motion is limited to existing short CSS feedback, approximately 160–180ms, and optional native smooth anchor scrolling. Reduced motion bypasses smooth scrolling. No entrance sequence delays the content.

## Missing evidence, in priority order

1. **RAG:** one real question, answer, citation and corresponding source slide, with permission to show the material. This would give the second exhibit concrete evidence.
2. **Spatial model:** an exported prediction figure plus uncertainty/validation figure with readable legend, units and a short methodological caption. Existing dataset imagery alone is insufficient.
3. **Go2:** verified chapter timecodes, an accessible description/transcript (and captions if audio carries information), and a concise statement of Jacob's specific integration decisions. The poster is team evidence, not proof of every individual contribution.
4. **Thermal:** a higher-resolution screenshot if larger display is desired, and a short explanation of the inspection workflow and current limits. A close detail photo is optional; the current setup photo is sufficient.
5. **Further work:** one meaningful HustleMuscle screen and one text-classification result figure when available. These are not blockers for the compact rows.

Before deployment, resolve the already-documented publication and contact details. They do not block local art-direction review. No new photoshoot, portrait, rendered robot or stock image is necessary for Phase 04.

## Approval scope and next phase

Approve or revise: the side-by-side opening exhibit; the final Manrope/charcoal/paper baseline; the unchanged sequence with unequal section emphasis; the thermal spread and full-frame asset policy; text-led RAG/spatial fallbacks; mobile ordering; and the optional chapter rail.

After approval, Phase 04 should incrementally refine the existing homepage and shared styles, preserving case-study destinations and existing working functionality. It is not a framework migration or permission to deploy. Verify the first functional prototype at 320, 390, 768, 1024 and 1440px, with keyboard, reduced motion, JavaScript unavailable and text zoom. Reassess image readability and the opening viewport using actual rendered evidence.


## Phase 03 review record

- Inspected the current rendered homepage at 1280px and reviewed its HTML, shared CSS, navigation/player script and project-page structure.
- Rendered the isolated composition study at 1280px and 1440px desktop, 768px tablet, and 390px/320px mobile widths. No horizontal page overflow was detected at those widths. Images loaded; desktop and mobile composition screenshots are saved alongside the study.
- Reviewed the thermal spread visually at 1440px; preserved image ratios and legible legend placement.
- The study's navigation/action labels are intentionally nonfunctional visual specifications. Chapter seeking, error handling, captions, keyboard behaviour, reduced motion and text zoom remain Phase 04 prototype validation tasks.
- Compared SHA-256 hashes of every file in `src/` before and after this phase: all unchanged. No build, lint or type checks apply to this documentation-only phase; there is no package/build configuration in the existing static site.

Review images: [desktop opening](phase03/hero-desktop.jpg), [mobile opening](phase03/hero-mobile.jpg), [thermal spread](phase03/thermal-desktop.jpg).
