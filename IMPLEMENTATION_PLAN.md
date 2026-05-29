# Animated Portfolio Implementation Plan

## Vision

Build the portfolio as a route-based animated experience where each page has its own environment, motion behavior, and visual identity based on the meaning of that section.

This should not feel like a normal portfolio with animations added later. It should feel like a designed system of spaces:

- `Home` introduces identity.
- `About` is driven by place, address, background, and personal story.
- `Experience` is driven by current status, past roles, leadership, and progression.
- `Projects` is driven by engineering systems, signals, devices, and prototypes.
- `Education` is driven by institutions, milestones, and training.
- `Contact` is driven by connection, transmission, and availability.

The full experience should feel grounded, cinematic, engineering-focused, and personal.

## Character Guide Layer

The portfolio should include a recurring animated cartoon version of you as a guide across the site.

This character should act as a visual host for the experience:

- welcomes users on the home page
- introduces sections
- reacts to route changes
- highlights key content blocks
- reinforces personality across the portfolio

The cartoon guide should feel integrated into the portfolio world, not pasted on top as a sticker or mascot.

### Existing Character Assets

Current available cartoon-style images in the workspace:

- `792a4d31-3f98-4aaa-a4c2-a5b020260354.png`
- `fa43fe35-d9d4-42e7-ad65-020eb42b9f93.png`

These should be treated as the first reference set for the animated character system.

## Core Product Direction

### Experience Model

Each route should behave like its own world while still belonging to one unified product.

Shared across the site:

- One design system
- One motion system
- One content model
- One route shell

Different per page:

- Background behavior
- Palette accents
- Ambient animation
- Iconography and scene language
- Scroll choreography
- Character guide behavior

### Recommended Tone

The strongest direction for this portfolio is:

- grounded
- premium
- engineering-led
- visually rich
- personal but not theatrical

Avoid:

- generic startup SaaS layouts
- random flashy effects
- neon cyberpunk styling
- heavy card-on-card dashboard composition

## Phase 0: Product Definition

These items should be finalized before implementation begins.

### Confirmed Update

Current role information provided outside the resume:

- Joined `Inunity Pvt Ltd` on `2025-07-21`
- Role: `Assistant Program Mentor`
- Domain: `Embedded Systems`

### Required Inputs

- Final display name
- Current title or status
- Primary audience
- Final location wording
- LinkedIn URL
- GitHub URL if applicable
- Contact email
- Contact phone
- Featured projects list
- Preferred hero photo
- Preferred tone:
  - `cinematic`
  - `engineering`
  - `premium minimal`

### Output of Phase 0

One approved content sheet with exact wording, links, dates, and metrics.

Current status can now be treated as:

- `Assistant Program Mentor, Embedded Systems at Inunity Pvt Ltd`

## Phase 1: Technical Foundation

### Recommended Stack

- `Next.js`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `Lenis`
- `react-three-fiber` only if one major 3D scene is needed

### Why This Stack

- `Next.js` gives clean routing, performance, and deployment.
- `TypeScript` keeps content and theme data structured.
- `Tailwind CSS` keeps styling fast and consistent.
- `Framer Motion` handles route and component transitions well.
- `Lenis` improves scroll feel.
- `react-three-fiber` should be used carefully for one major visual moment, not the entire portfolio.

### Project Structure

```text
app/
  page.tsx
  about/page.tsx
  experience/page.tsx
  projects/page.tsx
  education/page.tsx
  contact/page.tsx
components/
  layout/
  motion/
  scene/
  ui/
content/
  profile.ts
  about.ts
  experience.ts
  projects.ts
  education.ts
  contact.ts
lib/
  theme.ts
  motion.ts
  utils.ts
public/
  images/
  textures/
  icons/
styles/
```

### Output of Phase 1

A working project scaffold with:

- routing
- base layout
- font loading
- global styles
- placeholder content wiring

## Phase 2: Content Architecture

All content should live in structured files and should not be hardcoded in page components.

### Content Model

#### `profile`

- name
- role
- tagline
- short bio
- long bio
- location
- hero image
- supporting images

#### `about`

- hometown
- current base
- languages
- values
- personal summary
- identity notes
- interests

#### `experience`

- role title
- organization
- start date
- end date
- location
- summary
- achievements
- tools
- impact metrics

#### `projects`

- project name
- category
- problem
- solution
- tools
- measurable outcome
- visual assets
- links

#### `education`

- institution
- degree
- location
- timeline
- highlights

#### `certifications`

- title
- issuer
- year

#### `training`

- program
- organization
- year

#### `contact`

- email
- phone
- LinkedIn
- GitHub
- availability status

### Theme Metadata

Each page should also have theme metadata:

- palette
- background style
- motion style
- accent shape
- ambient elements
- transition mode

### Output of Phase 2

Fully typed content files built from the resume and final user inputs.

## Phase 3: Design System

Define the system before building pages.

### Tokens

- colors
- typography
- spacing
- radius
- borders
- shadows
- motion durations
- easing values
- z-index strategy

### Typography Direction

Use a stronger type system than default web fonts:

- one expressive display font for hero titles and major headings
- one clean readable font for body text and UI

Typography should feel intentional and modern, not default.

### Visual Material

The visual system can draw from:

- stone
- paper
- graphite
- steel
- campus geometry
- map lines
- engineering traces
- subtle grid overlays

### Reusable Components

- `PageShell`
- `AnimatedHeading`
- `SectionIntro`
- `MetricCard`
- `TimelineRail`
- `ProjectModule`
- `SignalButton`
- `SceneBackground`
- `AmbientLayer`
- `ImageReveal`
- `InfoCluster`
- `CharacterGuide`
- `GuideBubble`
- `GuideAnchor`

### Output of Phase 3

A shared design system that keeps the site coherent even when each page has a different environment.

## Phase 4: Motion System

Animation must be reusable and layered instead of improvised page by page.

### Motion Layers

#### Ambient Motion

- slow texture drift
- floating labels
- pulsing points
- light movement
- subtle line motion

#### Route Transition Motion

- scene morphs between routes
- shared accent movement
- background transformation
- heading and content staged entry

#### Scroll Reveal Motion

- staggered section entry
- masked text reveal
- parallax image movement
- timeline lock and release

#### Interaction Motion

- hover response
- button magnetism
- project expansion
- card focus states
- guide gestures and subtle reactions

### Motion Rules

- Ambient motion should remain slow and quiet.
- Scroll choreography should guide attention.
- Interactive feedback should be fast and crisp.
- Motion should never hurt readability.
- Reduced-motion support is required.

### Reusable Motion Primitives

- `FadeUp`
- `StaggerGroup`
- `RevealMask`
- `ParallaxLayer`
- `RouteTransition`
- `ScrollSection`
- `SceneFade`
- `GuideEnter`
- `GuideIdle`
- `GuidePoint`

### Output of Phase 4

A motion foundation used by every route and reusable component.

## Phase 5: Page Implementation

## 5.1 Home

### Purpose

Introduce identity and create a strong first impression.

### Content

- name
- role or current status
- short statement
- hero image
- route entry points

### Behavior

- full-screen cinematic entry
- animated heading reveal
- portrait parallax
- subtle background transformation on scroll
- clear navigation into sections
- cartoon guide enters as the host of the site
- guide can point toward navigation or primary call-to-action

### Output

A memorable landing page that immediately establishes personality and technical seriousness.

## 5.2 About

### Purpose

Make place, identity, and background feel spatial and alive.

### Content

- location
- hometown
- languages
- personal narrative
- values and interests

### Behavior

- map or coordinate pulse
- location labels
- floating language clusters
- topographic or route-line motifs
- story blocks that reveal in sequence
- cartoon guide can appear near specific narrative moments and visually lead the user through the story

### Output

A page that transforms biography into an environment.

## 5.3 Experience

### Purpose

Show progression, responsibility, and current direction.

### Content
- current role: `Assistant Program Mentor, Embedded Systems`
- organization: `Inunity Pvt Ltd`
- start date: `2025-07-21`
- class representative experience
- internships
- technical outcomes
- leadership evidence

### Behavior

- rail-based timeline
- staged reveal by chronology
- impact metrics on focus
- organization and tool metadata in expandable panels
- guide can react to current role and major milestones

### Output

A page that feels active and directional rather than static.

## 5.4 Projects

### Purpose

Make engineering work feel interactive and demonstrable.

### Content

- VLSI project
- IoT smart agriculture project
- FPGA DSP project
- patient monitoring system

### Behavior

Each project should have its own micro-scene:

- VLSI: traces, gates, waveform logic
- IoT: sensor pulse and cloud sync flow
- FPGA DSP: noise-to-signal transformation
- patient monitoring: vitals and remote monitoring motion

The guide can act like a lab host on this page:

- introducing project categories
- reacting on hover
- shifting pose or placement based on active project

### Output

The strongest technical page in the portfolio.

## 5.5 Education

### Purpose

Show institutional growth, training, and academic foundation.

### Content

- Assam University
- degree information
- certifications
- workshops
- training programs
- important milestones

### Behavior

- structured academic timeline
- institution-led section transitions
- milestone reveal
- clean documentary style motion
- guide can appear in a more formal and composed state here

### Output

A page that feels credible, structured, and aligned with the rest of the experience.

## 5.6 Contact

### Purpose

Create a clean final interaction point with a strong sense of connection.

### Content

- email
- phone
- LinkedIn
- GitHub if applicable
- availability

### Behavior

- signal transmission motif
- animated form focus states
- subtle send interaction
- calm and direct finish
- guide can appear as a final send-off element near contact actions

### Output

A contact page that feels polished and deliberate without overcomplication.

## Phase 6: Asset Pipeline

### Required Assets

- 2 to 4 final portrait images
- 2 to 4 cartoon guide images or variants
- resume PDF
- project diagrams or screenshots
- certification images if needed
- institution visuals if useful

### Asset Rules

- compress images before shipping
- use `.webp` when possible
- keep hero assets high quality
- avoid irrelevant stock imagery
- use real visuals wherever possible
- prepare transparent cutout versions of the cartoon guide if needed
- maintain consistent character styling across all variants

### Output of Phase 6

A clean and optimized media set for the full site.

## Cartoon Guide Implementation Rules

### Role of the Character

The cartoon guide should:

- support navigation
- create continuity between pages
- add personality
- make the portfolio feel authored and memorable

The cartoon guide should not:

- block content
- talk too much
- feel childish
- appear in every viewport corner at all times

### Placement Strategy

Use the guide in controlled positions:

- home hero
- section intros
- project spotlight areas
- important transitions
- final contact area

Do not keep it pinned everywhere unless a small minimized state is explicitly designed.

### Animation Strategy

Best approach for first version:

- use layered image animation
- idle float
- subtle breathing motion
- slide or fade entry
- gentle pointing or orientation shifts

Possible future upgrade:

- multiple illustrated poses
- sprite sheet animation
- rigged character animation

### Technical Recommendation

For version one:

- use PNG or transparent WebP cutouts
- animate with `Framer Motion`
- use parallax and transform-based movement
- switch variants by route or content state

Do not start with complex rigging unless the asset set supports it well.

## Phase 7: Performance and Quality

### Performance Requirements

- lazy-load heavy visuals
- avoid excessive GPU load
- limit expensive real-time effects
- keep mobile interactions smooth
- support reduced motion

### QA Checklist

- responsive layout quality
- text fit on mobile and desktop
- route transition smoothness
- scroll performance
- contrast and accessibility
- keyboard usability
- no visual overlap errors
- no layout shift during load

### Output of Phase 7

A production-ready portfolio that is visually strong and technically stable.

## Build Order

The work should be implemented in this order:

1. content schema
2. global layout and routing
3. design tokens and typography
4. shared motion system
5. home page
6. about page
7. experience page
8. projects page
9. education page
10. contact page
11. asset integration and polish
12. performance pass
13. final QA and deployment

## Suggested Timeline

### Day 1

- finalize content
- choose hero images
- lock visual direction

### Day 2

- scaffold project
- build layout shell
- define design tokens

### Day 3

- build motion foundation
- implement home page

### Day 4

- implement about page
- implement experience page

### Day 5

- implement projects page

### Day 6

- implement education page
- implement contact page

### Day 7

- polish visuals
- optimize performance
- final testing
- deploy

## Immediate Next Steps

Before coding begins, gather or confirm:

- final current title or status
- LinkedIn URL
- GitHub URL if applicable
- featured projects
- hero image selection
- final preferred tone

After that:

1. create the Next.js project scaffold
2. create the structured content files
3. build the route shell and design system
4. implement the animated pages in the planned order

## Working Concept Summary

The portfolio concept is:

`Engineer From Place To System`

Meaning:

- `About` is rooted in place and identity.
- `Experience` is rooted in progression and responsibility.
- `Projects` is rooted in systems and signals.
- `Education` is rooted in institutions and growth.
- `Contact` is rooted in connection and reachability.

This should guide all implementation decisions.
