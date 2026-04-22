# Hakunamatata.guru Design Spec

Date: 2026-04-21
Project: `hakunamatata.guru`
Type: Animated scrolling static website
Direction: Polished deadpan

## Goal

Create a premium-looking scrolling website for a meme company that is intentionally:

- pre-revenue
- pre-product
- pre-problem

The site should look serious, expensive, and founder-confident at first glance. As the user scrolls, the copy should slowly reveal that the company is effectively built on vibes, evasiveness, and anti-due-diligence energy. The core joke is that when investors ask where the money went, the answer is: "don't worry about it."

## Product Intent

The website is not a startup landing page in the normal sense. It is a cinematic parody of startup marketing, venture storytelling, and founder-brand theater.

The success criteria are:

- visitors immediately register the site as visually polished
- the humor unfolds gradually instead of announcing itself on first screen
- the scrolling experience feels authored, not template-based
- the site is simple to host as a static site
- mobile still preserves the joke structure and premium feel

## Audience

Primary audience:

- friends
- internet viewers
- founders
- investors with enough context to get the joke

Secondary audience:

- anyone encountering the site as a fake-but-plausible premium brand page

## Experience Principles

1. Serious first impression
The opening must feel more like a luxury startup or category-defining venture brand than a meme page.

2. Delayed reveal
The copy should become progressively less defensible as the user scrolls.

3. Controlled absurdity
The humor should stay dry, composed, and overconfident rather than chaotic.

4. Scroll as narrative
Motion should reinforce escalation: confidence, thesis, traction, allocation, roadmap, invitation.

5. Premium restraint
Animation should feel intentional and cinematic, not noisy.

## Visual Direction

Overall aesthetic:

- premium venture brand
- editorial minimalism
- polished corporate mystique
- subtle satire through contrast between design quality and message quality

Color direction:

- warm ivory or soft paper background
- deep carbon or near-black for contrast
- restrained metallic gold accent
- muted sage or low-saturation wellness green as a secondary accent
- optional champagne tone for warmth and polish

Typography direction:

- display serif with authority and elegance for headlines
- refined sans-serif for body copy, labels, metrics, and interface elements
- generous spacing and large scale hierarchy

Layout direction:

- full-screen and near-full-screen sections
- clean grid with asymmetrical composition in places
- strong negative space
- restrained card surfaces, glassy panels, soft borders, and quiet depth

Texture and effects:

- soft gradients
- subtle grain or film texture
- restrained glow and blur
- elegant separators and ticker treatments where useful

Palette intent:

- the green should signal calm, composure, and "nothing is wrong" energy
- it should feel more luxury-wellness than bright startup SaaS
- use it sparingly in glows, charts, pills, badges, and section accents rather than flooding the whole page

## Tone of Voice

The writing should sound like a startup that fully believes its own positioning. It should avoid wink-wink meme phrasing on the first half of the page.

Tone characteristics:

- calm
- certain
- overcapitalized in meaning, not typography
- abstract enough to sound strategic
- increasingly evasive under scrutiny

Examples of tonal pattern:

- start with category-language and visionary abstraction
- move into suspicious metrics and vague operational claims
- culminate in polished non-answers about money and outcomes

## Motion Direction

The site should use section-driven animation with handcrafted JavaScript and CSS rather than a heavy framework.

Motion principles:

- animate on scroll reveal, not constant movement everywhere
- use pinned or sticky behavior for major narrative beats
- combine parallax, opacity, transform, and staggered text/card entrances
- keep movement smooth and premium
- reduce effect density on mobile while preserving sequence

Priority motion moments:

1. Hero reveal
Large wordmark, calm fade/slide layers, subtle parallax.

2. Thesis section
Statements enter in a paced sequence as the user scrolls.

3. Metrics section
Counters and chart-like objects animate in with growing suspicion.

4. Capital allocation section
A polished, high-trust presentation introduces the central joke.

5. Roadmap section
Timeline or milestone cards reveal increasingly empty outcomes.

6. Closing section
Strong CTA with the most direct investor-facing absurdity.

## Technical Direction

Implementation target:

- static website
- plain HTML, CSS, and JavaScript
- no framework required

Reasoning:

- easiest to host anywhere
- enough control for premium scrolling effects
- simpler than introducing a framework for a single-page site
- aligns with the goal of a crafted long-form landing page

Expected structure:

- `index.html`
- `styles.css`
- `script.js`
- local assets folder if needed

## Content Structure

### 1. Hero

Purpose:
Establish premium credibility before the joke is visible.

Content direction:

- large `Hakunamatata` wordmark
- calm high-status tagline
- short positioning statement about post-problem companies or narrative-native growth
- one or two CTA buttons

Possible CTA language:

- `Read the Thesis`
- `Review the Opportunity`
- `Deploy Capital`

### 2. Thesis

Purpose:
Frame the company's lack of product, revenue, and concrete problem as deliberate strategic positioning.

Content direction:

- serious heading
- 2 to 4 tightly written paragraphs or statement blocks
- copy that sounds plausible at first, then reveals conceptual emptiness

Themes:

- pre-problem is market leadership
- product introduces unnecessary constraints
- revenue can distort vision too early

### 3. Metrics

Purpose:
Provide a traction section that initially appears legitimate.

Content direction:

- elegant stat cards
- refined numeric counters
- chart or pseudo-chart visualization

Metric examples:

- Narrative Velocity
- Strategic Optionality
- Brand Runway
- Unattributed Deployment
- Founder Conviction Index

The metrics should become slightly more absurd as the section progresses.

### 4. Capital Allocation

Purpose:
Address the "where did the money go" premise in the most polished possible format.

Content direction:

- premium section title
- calm explanatory copy
- categories that sound serious but conceal nonsense

Possible allocation labels:

- Narrative Infrastructure
- Taste Acquisition
- Foundational Ambience
- Strategic Travel
- Vision Retention

This section should contain the line of thought that the money has not disappeared; it has simply been allocated beyond the resolution of conventional accounting.

### 5. Roadmap

Purpose:
Present a cinematic progression toward nothing.

Content direction:

- timeline or milestone stack
- confident milestone naming
- years or phases that suggest inevitability

Possible phases:

- Phase I: Stealth Presence
- Phase II: Narrative Dominance
- Phase III: Category Without Peers
- Phase IV: Pre-Liquidity Serenity

Each phase should feel increasingly detached from any actual business operation.

### 6. Investor FAQ

Purpose:
Deliver the clearest jokes without breaking the premium tone.

Content direction:

- accordion or stacked questions
- dry, evasive responses

Question examples:

- Where has the capital been deployed?
- What problem does the company solve?
- When should investors expect revenue?
- Is there a product roadmap?

Key answer style:

- concise
- self-serious
- non-responsive in a polished way

### 7. VC We Spoke To Lol

Purpose:
Introduce real investor or VC names as a credibility signal that is presented with enough polish to feel intentional and funny.

Content direction:

- premium logo wall, name list, quote strip, or meeting ledger presentation
- use the actual VC firms or investors you met
- title should preserve the joke while the visual treatment stays serious
- copy should imply that meaningful conversations occurred without claiming anything false

Presentation options:

- understated logo grid with refined labels
- scrolling ledger of conversations
- "selected conversations" section with dates or locations if available

Constraints:

- do not imply investment, endorsement, partnership, or support unless true
- avoid fabricated quotes or fabricated outcomes
- the humor should come from the section title and context, not false claims

### 8. Closing CTA

Purpose:
End on a strong, memorable investor-facing punchline.

Content direction:

- bold final statement
- premium button treatment
- direct call to commit before clarity arrives

Possible CTA language:

- `Invest Before It Makes Sense`
- `Enter Before Diligence`
- `Align With The Narrative`

## Responsive Behavior

Mobile priorities:

- keep section order and joke structure intact
- simplify pinned effects where necessary
- reduce layered parallax density
- preserve large-type drama without breaking readability
- ensure all CTAs and FAQ interactions are touch friendly

Desktop priorities:

- stronger full-screen moments
- more pronounced layered movement
- richer spacing and asymmetry

## Accessibility and Usability

- maintain readable contrast despite luxury palette
- honor `prefers-reduced-motion`
- use semantic headings and buttons
- ensure keyboard access for FAQ interactions
- keep body copy readable and not excessively abstract

## Risks

1. If the joke is too obvious too early, the deadpan effect collapses.
2. If the copy stays too abstract for too long, users may think the site is just weak startup writing instead of satire.
3. If the animations are too busy, the premium tone is lost.
4. If the design is too minimal without strong copy, the page may feel empty instead of deliberate.

## Recommendation

Build a premium brand-film style single-page static site using plain HTML, CSS, and JavaScript.

The design should begin with sincere luxury-startup confidence and then gradually reveal the absurd premise through:

- increasingly suspect metrics
- polished evasiveness about spending
- a roadmap to nothing
- investor-facing calls to action that get funnier on close reading

This is the best match for the requested animated scrolling experience and the polished deadpan tone.
