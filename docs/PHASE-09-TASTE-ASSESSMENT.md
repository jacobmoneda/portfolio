# Phase 09 — Taste and originality assessment

Reviewed 20 November 2026. Local implementation only; stop before Phase 10.

## Brief and verdict

Reading this as a personal engineering portfolio for technical reviewers, hiring teams and potential collaborators. The register should be precise, approachable and quietly individual. The browsing task is low risk, but credible attribution matters. The identity surface should reach **Convicted**; navigation and media controls should remain familiar and **Coherent**.

**Highest sustained rung: Characterful. Intended ceiling: Convicted. Overall grade: Competent under the reference's definition.** The craft holds and the opening has a committed point of view. The complete experience falls short of its ceiling because several project destinations still offer summaries and pending evidence where the homepage promises demonstrations. This is a content-depth limitation, not a need for a different aesthetic. The small refinements below improve coherence without changing that overall judgment.

## First impression

The desktop opening reads as real robotics research, immediately. The oversized project title, modest description of Jacob's contribution and unretouched laboratory context feel closer to an exhibition spread than a generic developer landing page. The blue cabinet, purple robot and thermal camera make this particular work memorable. Manrope and cream alone would not identify its owner; their relationship to this evidence does. That is sufficient reason to protect the visual direction, not a reason to invent a more unusual font treatment.

## Measurable craft assessment

Measurements combine rendered DOM values with the existing CSS. They are not estimates from screenshots.

| Dimension | Evidence | Assessment |
| --- | --- | --- |
| Typography | At 1440px: feature title 69.12px / 73.27px leading, secondary titles 32px / 40px, body 16px / 25.6px. At 390px: feature title 36px, body remains 16px. Supporting metadata is 13–14px | Clear hierarchy; the additional sizes serve different roles rather than competing headlines. No arbitrary type-scale reduction is justified |
| Measure and spacing | Secondary descriptions bounded at 48ch or 65ch; About at 57ch. Main gaps use 24/32/64px; compact text rows use 28px vertical padding | Readable, intentional rhythm. Preserve the compact-row exception rather than forcing every distance onto one scale |
| Alignment | 1240px maximum content width; matching About/Contact columns; both start at x=24px in the 390px stacked layout | Phase 08's alignment fixes hold in the reviewed views |
| Color | Calculated solid-color contrast: cream/charcoal 15.92:1; muted text/charcoal 8.88:1; muted text/cream 6.24:1; muted text/light-mode reading background 5.54:1; charcoal/orange 6.69:1 | Strong sampled text contrast. This is not an exhaustive accessibility audit |
| Density and proportion | Desktop image rows approximately 397px and 401px tall; text rows approximately 134px. Feature CTA occupies approximately y=572–621 in a 900px-high desktop viewport | Evidence determines emphasis, and the primary action is visible without scrolling |
| Empty states | Secondary project pages reserved a 240px figure plus 32px margin for material explicitly described as unavailable | The consequential craft weakness; removed without changing section spacing |
| Elevation | No decorative shadows or floating surfaces needed | Not applicable; retain the flat presentation |

## Consequential findings

### Finding 01 — Empty exhibits weaken the editorial promise

**CRAFT · DENSITY / PROXIMITY · Candidate finding; supporting craft entry unavailable**

**What I see:** RAG, spatial modelling and text-classification pages repeat their missing-evidence paragraph inside a large bordered placeholder. The RAG and spatial desktop views devote 272px to the figure and its margin without adding evidence.

**The fix:** Removed those three figures. Kept each evidence heading, factual availability notice, limitations and anchor destination. The RAG evidence section now measures approximately 152px at the desktop sample; the original shared figure treatment added 272px.

**Why:** A display-sized region signals something worth examining. Empty panels give missing material the visual status of the real photographs and application captures.

**Train your eye:** Read only the shapes before reading the copy. A large rectangle should earn its emphasis with information. If its only message already appears directly above it, remove the repeated container before tightening the surrounding page.

### Finding 02 — The research feature earns its dominance

**STRENGTH · CHARACTERFUL / locally CONVICTED · Candidate finding; supporting taste entry unavailable**

**What I see:** One specific title, one short first-person contribution, one orange project action and authentic hardware imagery occupy the opening. The second slide connects the physical setup to thermal analysis. The picture remains complete rather than cropped into an abstract texture.

**Judgment:** This is an authored choice about what matters. The research is the identity, not a background illustration behind a personal slogan.

**Protect:** Thermal-first hierarchy, neutral display typography, full-frame media, direct photo/app destinations and the understated manual carousel. Do not replace the lab photograph with a polished but less informative substitute.

### Finding 03 — The project list is curated rather than standardized

**STRENGTH · COHERENT / CHARACTERFUL · Candidate finding; supporting taste entry unavailable**

**What I see:** A large Go2 demonstration frame, two compact text-led projects, paired phone screens and a final short text project create different lengths within one alignment system. Thin rules and consistent title treatment make the variation understandable. On mobile, real media follows its project description and no destination is hidden in a carousel.

**Judgment:** The asymmetry follows the available evidence. It avoids both a generic equal-card inventory and arbitrary layout variety.

**Protect:** Editorial rows, authentic asset colors, generous section spacing and the restrained charcoal/cream alternation. New evidence should strengthen the relevant project, not trigger a new layout system.

### Finding 04 — The voice is strongest when it describes the work directly

**STRENGTH with a small resolved gap · COHERENT · Candidate finding; supporting taste entry unavailable**

**What I see:** The homepage names activities rather than making broad claims. About's short personal sentence provides warmth without a promotional biography. The thermal project then repeated that its notes describe documented work and that its technical account is unfinished, immediately after a paragraph explaining those limits.

**Judgment:** The homepage sounds like a person. Repeated editorial-process commentary weakens that voice without making the research more honest.

**Refinement:** Removed only the redundant thermal closing note. Its ongoing status, unverified localization performance, attribution boundaries and deferred digital-twin description remain explicit. Other technical qualifications, including the Go2 poster's manual-evaluation limitation, remain intact. Preserve the direct About and Contact copy.

### Finding 05 — Evidence depth is the remaining ceiling

**GAP · CONVICTED · Candidate finding; supporting taste entry unavailable**

**What I see:** The RAG page gives a concrete scope—four courses and approximately 1,000 slides—but cannot yet show a query traced to its source. Spatial and text-classification pages lack original figures and documented evaluation details. The latter's homepage summary could describe many student projects. These are honest content gaps, not broken image loads.

**Judgment:** The identity is specific at the entrance and less specific on several onward paths. Removing placeholder panels reduces the interruption; it cannot supply the missing engineering story. No amount of new motion or decoration closes this gap.

**Proposed next content work, not implemented:** Prioritize one authentic RAG query/response/source example and one original spatial prediction/uncertainty figure, each with a short explanation of Jacob's decision and the evidence's limits. Add the text-classification dataset, algorithms and original comparison only when confirmed. Keep the current selection and facts until that material is available. No fabricated illustration or stronger performance claim is an acceptable substitute.

## Motion and interaction judgment

The existing 160ms feedback and 200ms media opacity tokens support the same restrained register. Pointer and keyboard carousel navigation, a rapid double-click, theme switching, About's active state and Go2 player creation/removal behaved as expected in this review. Keyboard activation showed a visible 2px outline. Leaving the video slide removed its iframe; returning did not restart it. No scroll entrance hides the content. The familiar controls should remain coherent rather than seeking their own signature animation.

No CSS, JavaScript, motion token, layout rule, image, route or homepage copy changed in Phase 09.

## Validation, evidence and boundaries

- Reviewed the complete homepage at desktop 1440px and mobile 390px, including both themes, both feature slides, secondary projects and the closing sections. Captures: [desktop opening](phase09/desktop-opening.jpg), [desktop page](phase09/desktop-full.jpg), [light analysis slide](phase09/desktop-analysis-light.jpg), [mobile opening](phase09/mobile-opening.jpg), [mobile page](phase09/mobile-full.jpg), [mobile light](phase09/mobile-light.jpg).
- Compared the targeted removals in the rendered pages: RAG [before](phase09/rag-evidence-gap.jpg) / [after](phase09/rag-evidence-after.jpg); thermal closing copy [before](phase09/thermal-copy-before.jpg) / [after](phase09/thermal-copy-after.jpg). Also inspected [text classification on mobile](phase09/text-classification-mobile-after.jpg) and [spatial evidence on desktop](phase09/spatial-evidence-after.jpg).
- All four revised pages passed DOM overflow checks at 390px and 1440px. Missing-evidence notices and limitations remain, and the three empty figures are gone. Homepage images loaded; reviewed project navigation and in-page destinations worked. The checked browser error log was empty.
- JavaScript syntax, recursive CSS parsing, unique IDs, one h1 per page, image alt/dimension attributes and 145 local file/fragment/srcset references across seven pages passed. `git diff --check` passed. This static repository has no configured build, lint or type-check scripts.
- Not reverified: physical touch, OS reduced-motion switching, screen readers, native browser zoom, device frame rates or video audio/captions. The player lifecycle check is not a playback-quality audit. Phase 07's documented motion tests remain historical evidence, not tests rerun in this phase. The live thermal service was not re-audited.

## Methodology coverage

Read the requested project instructions, approved decisions, factual content and `references/tastemaker.md`. Its linked `kb/` directory, manifesto, individual craft/taste entries and ID validators are not present in this repository. The assessment therefore applies the supplied reference's ladder, precision pass, context ceiling, editing and restraint principles directly. All five findings are explicitly candidate findings; no CR/TS ID or consensus grade is claimed without its supporting entry.

**The climb:** complete a small number of authentic evidence-led project accounts. Protect the strong opening and existing editorial system while doing so. This assessment concerns craft and taste; the sampled interaction checks do not constitute full usability, accessibility or release approval.

Phase 09 stops here. Phase 10, deployment and publication have not begun.
