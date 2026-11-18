# Homepage structure

Approved Phase 04 refinement, 18 November 2026. This replaces the earlier Go2-first homepage sequence while preserving Working Exhibition, Manrope, signal orange actions and neutral headlines.

## Visitor journey

Visitors should understand Jacob’s areas of work, see authentic evidence from his current research, discover the other projects and open dedicated case studies. They can then read a short personal introduction and contact him directly. No analytics are introduced.

| Order | Section | Content and onward action |
| --- | --- | --- |
| 1 | Minimal introduction | Name in the header; “Software, robotics and data”; visible Work, About and Contact links |
| 2 | Featured research | “Robotic inspection and thermal analytics”; ongoing AUT/Spark NZ context; one short contribution sentence; orange View case study link |
| 3 | Other selected work | Visible editorial rows: robot control, RAG, Auckland land values, HustleMuscle and text classification; one descriptive sentence and a project link per row |
| 4 | About | Background at AUT and one sentence about interests outside work |
| 5 | Contact/footer | Email, GitHub, LinkedIn and Back to top |

## Featured composition and media

The research title and short description sit beside the authentic inspection photograph on desktop. Scale and whitespace establish importance without a card container. The full 3:4 photograph retains the robot, arm and thermal camera. A manual gallery also shows the thermal processing screenshot without cropping its interface.

Captions identify the media. View photo opens the larger image; Open app links to the supplied Streamlit application. The case-study action is separate from media controls.

Previous/next buttons and a position indicator remain visible. Arrow keys, Home/End and horizontal swipes are supported. There is no automatic advancement. With JavaScript unavailable, both figures remain visible in document order and the unused controls stay hidden.

The shared gallery supports images and user-controlled video. The thermal research has no supplied footage; the distinct Go2 demonstration stays in its own case study, paired with the team research poster. Leaving a video slide unloads the embedded player or pauses a native video.

## Secondary work

Use an editorial list at every width. A grid would give these projects too much equal emphasis; a horizontal collection would hide destinations and compete with the featured gallery. All five projects stay discoverable without carousel navigation.

The Go2 demonstration still and authentic HustleMuscle workout screen provide selective previews. RAG, spatial modelling and text classification remain text-led until authentic evidence is supplied. Do not fabricate screenshots or maps.

## Responsive behaviour

Desktop uses an asymmetric two-column feature. Below the width where that composition fits comfortably, the title, short description and case-study action precede the media. Full media frames remain intact; the gallery stage becomes square on narrow screens to accommodate either portrait or landscape evidence.

Secondary project rows stack their small images below the text on mobile. Header navigation stays visible and wraps where necessary. About and Contact become single columns. Text height remains content-driven.

Keep the existing light/dark control, compact-on-scroll header, visible keyboard focus, reduced-motion support and normal document scrolling.

## Navigation contract

- Name → `#intro`; Work → `#projects`; About → `#about`; Contact → `#contact`.
- Preserve all existing project anchors for return links and incoming URLs.
- Project links open dedicated static pages under `src/projects/` in the same tab.
- Media playback is explicit and separate from case-study navigation.
- Case studies retain their local contents, return links, project links and normal browser history.
- No menu overlay, filtering system, project modal or additional homepage carousel is needed.

## Content boundaries

Describe the thermal project as ongoing research. Keep localization in progress and distinguish individual contributions from team work. Use concise, factual language without slogans, repeated metadata or unnecessary punctuation in headings.

Case-study pages should explain the problem, role, approach, evidence and limitations. Their depth can vary with available evidence; the homepage does not need to repeat this detail.

RAG citation examples, labelled spatial predictions/uncertainty figures, documented evaluation details and fuller engineering decisions remain the main content gaps. Existing contact details are retained for local review. Publication approval remains separate; pages keep `noindex, nofollow` and no deployment is performed.


## Phase 05 refinement

The sequence and Projects terminology remain. The hero copy now sits nearer the image’s top edge, with tighter spacing around its description and action. Secondary image rows use substantial media columns; the Go2 frame and paired HustleMuscle screens keep their full aspect ratios. Text-only entries have no reserved media column. About remains two columns on desktop/tablet and stacks on small screens, with short copy connecting the AUT background to current research. Controls receive restrained hover/press feedback and the manual gallery preloads its small image set. See DESIGN-DECISIONS.md section 18 for review results and limits.
