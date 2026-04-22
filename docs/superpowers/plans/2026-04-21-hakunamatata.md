# Hakunamatata.guru Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium-looking static scrolling website for `hakunamatata.guru` that opens as a serious startup brand page and gradually reveals a deadpan parody of a pre-revenue, pre-product, pre-problem company.

**Architecture:** Use a small static-site structure with `index.html` for semantic layout, `styles.css` for the entire visual system and responsive motion-safe styling, `content.js` for all site copy and structured data, and `script.js` for rendering interactive content plus scroll-triggered effects. Keep all animation handcrafted with CSS and browser APIs so the site remains dependency-free and easy to host.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, IntersectionObserver, `prefers-reduced-motion`, optional Google Fonts or self-hosted web fonts

---

## File Structure

- Create: `index.html`
- Create: `styles.css`
- Create: `content.js`
- Create: `script.js`
- Create: `README.md`

Responsibilities:

- `index.html`: semantic page shell, section anchors, FAQ container, VC section container, and script/style wiring
- `styles.css`: tokens, layout, typography, gradients, components, responsive rules, and animation states
- `content.js`: all page copy, metrics, roadmap phases, FAQ data, and real VC conversation entries
- `script.js`: render data-driven sections, scroll reveals, counters, FAQ interactions, and reduced-motion handling
- `README.md`: local preview instructions and deployment notes

### Task 1: Scaffold the static site shell

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `content.js`
- Create: `script.js`

- [ ] **Step 1: Create the base HTML shell**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hakunamatata.guru</title>
    <meta
      name="description"
      content="A premium-feeling website for a pre-revenue, pre-product, pre-problem company."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="page-noise" aria-hidden="true"></div>
    <header class="site-header">
      <a class="site-header__brand" href="#top">Hakunamatata</a>
      <nav class="site-header__nav" aria-label="Primary">
        <a href="#thesis">Thesis</a>
        <a href="#metrics">Metrics</a>
        <a href="#allocation">Allocation</a>
        <a href="#vcs">VCs</a>
        <a href="#faq">FAQ</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero section section--hero" id="hero"></section>
      <section class="section" id="thesis"></section>
      <section class="section" id="metrics"></section>
      <section class="section" id="allocation"></section>
      <section class="section" id="roadmap"></section>
      <section class="section" id="vcs"></section>
      <section class="section" id="faq"></section>
      <section class="section section--closing" id="closing"></section>
    </main>

    <script src="./content.js"></script>
    <script src="./script.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Create minimal placeholder assets so the page boots**

```css
:root {
  color-scheme: light;
}

html,
body {
  margin: 0;
  min-height: 100%;
}
```

```js
window.siteContent = {};
```

```js
console.log("Hakunamatata booted");
```

- [ ] **Step 3: Open `index.html` locally and verify the shell loads without console errors**

Run: `open index.html`
Expected: browser opens a blank page with no script errors visible in the console

- [ ] **Step 4: Commit the scaffold**

```bash
git add index.html styles.css content.js script.js
git commit -m "feat: scaffold static site shell"
```

### Task 2: Define the full content model and voice system

**Files:**
- Modify: `content.js`
- Test: `index.html` in browser

- [ ] **Step 1: Replace the placeholder content file with a complete content object**

```js
window.siteContent = {
  hero: {
    eyebrow: "Pre-Problem Capital Formation",
    title: "Hakunamatata",
    tagline: "A low-cortisol company for a high-volatility era.",
    description:
      "We are building enduring narrative infrastructure for a future no incumbent has had the composure to imagine.",
    primaryCta: { label: "Read the Thesis", href: "#thesis" },
    secondaryCta: { label: "Review the Opportunity", href: "#allocation" },
    footnote: "Pre-revenue. Pre-product. Pre-problem."
  },
  thesis: {
    kicker: "Investment Thesis",
    heading: "Constraint arrives too early in the life of most companies.",
    statements: [
      "Product can narrow ambition before the narrative has reached full altitude.",
      "Revenue, while culturally popular, may distort long-horizon conviction.",
      "Problem selection is most powerful when deferred until the category is emotionally prepared.",
      "Hakunamatata exists at the composure layer, where pressure is acknowledged but never operationalized."
    ]
  },
  metrics: {
    kicker: "Selected Indicators",
    heading: "Signals are strongest before outcomes introduce noise.",
    cards: [
      { label: "Narrative Velocity", value: 94, suffix: "%", detail: "Quarter-over-quarter calm expansion" },
      { label: "Strategic Optionality", value: 18, suffix: "x", detail: "Measured against conventional urgency" },
      { label: "Brand Runway", value: 31, suffix: " mo", detail: "Assuming emotional discipline" },
      { label: "Unattributed Deployment", value: 72, suffix: "%", detail: "Allocated beyond ordinary resolution" }
    ],
    chartLabels: ["Conviction", "Mystique", "Runway", "Explaining It"]
  },
  allocation: {
    kicker: "Capital Allocation",
    heading: "Nothing has been lost. It has simply been deployed at a higher level of taste.",
    intro:
      "We believe capital performs best when released from the administrative burden of immediate legibility.",
    items: [
      { label: "Narrative Infrastructure", value: "28%", detail: "Positioning, framing, and atmospheric continuity" },
      { label: "Taste Acquisition", value: "19%", detail: "Objects, references, and environments aligned with conviction" },
      { label: "Foundational Ambience", value: "22%", detail: "Spatial calm, visual coherence, and premium stillness" },
      { label: "Strategic Travel", value: "14%", detail: "Context accumulation across relevant geographies" },
      { label: "Vision Retention", value: "17%", detail: "Founder preservation under unnecessary scrutiny" }
    ]
  },
  roadmap: {
    kicker: "Roadmap",
    heading: "Execution proceeds in phases designed to mature the narrative before exposure to reality.",
    phases: [
      { phase: "Phase I", title: "Stealth Presence", detail: "Establish visual certainty before operational burden." },
      { phase: "Phase II", title: "Narrative Dominance", detail: "Expand awareness without narrowing the thesis." },
      { phase: "Phase III", title: "Category Without Peers", detail: "Lead a market that remains helpfully undefined." },
      { phase: "Phase IV", title: "Pre-Liquidity Serenity", detail: "Invite alignment before diligence hardens the room." }
    ]
  },
  vcs: {
    kicker: "VC We Spoke To Lol",
    heading: "Selected conversations conducted in a spirit of mutual interest and disciplined ambiguity.",
    note:
      "This section should list real conversations only. It must not imply investment, endorsement, or support.",
    conversations: []
  },
  faq: {
    kicker: "Investor FAQ",
    heading: "Common questions, answered with appropriate calm.",
    items: [
      {
        question: "Where has the capital been deployed?",
        answer: "Across a disciplined mix of narrative infrastructure, foundational ambience, and founder continuity."
      },
      {
        question: "What problem does the company solve?",
        answer: "We believe premature problem selection can limit category-scale clarity."
      },
      {
        question: "When should investors expect revenue?",
        answer: "We remain careful not to let monetization arrive before meaning."
      },
      {
        question: "Is there a product roadmap?",
        answer: "Yes, in the sense that we continue to protect the optionality product would otherwise collapse."
      }
    ]
  },
  closing: {
    kicker: "Final Invitation",
    heading: "Enter before it makes sense.",
    description:
      "The best opportunities often appear unresolved to those still relying on resolution.",
    cta: { label: "Deploy Capital", href: "#top" }
  }
};
```

- [ ] **Step 2: Populate the real VC conversation list before launch**

```js
window.siteContent.vcs.conversations = [
  /*
    Replace this empty array with real entries only, for example:
    { name: "Firm Name", context: "Met in San Francisco", outcome: "Conversation held" }
  */
];
```

- [ ] **Step 3: Load the page and verify `window.siteContent` is defined**

Run: `open index.html`
Expected: `window.siteContent` is present in the browser console and contains hero, thesis, metrics, allocation, roadmap, vcs, faq, and closing keys

- [ ] **Step 4: Commit the content model**

```bash
git add content.js
git commit -m "feat: define site content model"
```

### Task 3: Build the semantic page markup renderer

**Files:**
- Modify: `script.js`
- Test: `index.html` in browser

- [ ] **Step 1: Replace the placeholder script with section render functions**

```js
const { hero, thesis, metrics, allocation, roadmap, vcs, faq, closing } = window.siteContent;

function setSection(id, html) {
  const section = document.getElementById(id);
  section.innerHTML = html;
}

function renderHero() {
  setSection(
    "hero",
    `
      <div class="hero__backdrop"></div>
      <div class="hero__content container reveal" data-reveal>
        <p class="section-kicker">${hero.eyebrow}</p>
        <h1 class="hero__title">${hero.title}</h1>
        <p class="hero__tagline">${hero.tagline}</p>
        <p class="hero__description">${hero.description}</p>
        <div class="hero__actions">
          <a class="button button--primary" href="${hero.primaryCta.href}">${hero.primaryCta.label}</a>
          <a class="button button--ghost" href="${hero.secondaryCta.href}">${hero.secondaryCta.label}</a>
        </div>
        <p class="hero__footnote">${hero.footnote}</p>
      </div>
    `
  );
}

function renderThesis() {
  setSection(
    "thesis",
    `
      <div class="container">
        <p class="section-kicker reveal" data-reveal>${thesis.kicker}</p>
        <div class="section-heading reveal" data-reveal>
          <h2>${thesis.heading}</h2>
        </div>
        <div class="thesis-grid">
          ${thesis.statements
            .map(
              (statement) => `
                <article class="statement-card reveal" data-reveal>
                  <p>${statement}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    `
  );
}

function renderMetrics() {
  setSection(
    "metrics",
    `
      <div class="container">
        <p class="section-kicker reveal" data-reveal>${metrics.kicker}</p>
        <div class="section-heading reveal" data-reveal>
          <h2>${metrics.heading}</h2>
        </div>
        <div class="metrics-grid">
          ${metrics.cards
            .map(
              (card) => `
                <article class="metric-card reveal" data-reveal>
                  <p class="metric-card__label">${card.label}</p>
                  <p class="metric-card__value">
                    <span class="counter" data-counter="${card.value}">0</span>${card.suffix}
                  </p>
                  <p class="metric-card__detail">${card.detail}</p>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="signal-chart reveal" data-reveal aria-hidden="true">
          ${metrics.chartLabels.map((label) => `<span>${label}</span>`).join("")}
        </div>
      </div>
    `
  );
}

function renderAllocation() {
  setSection(
    "allocation",
    `
      <div class="container">
        <p class="section-kicker reveal" data-reveal>${allocation.kicker}</p>
        <div class="section-heading reveal" data-reveal>
          <h2>${allocation.heading}</h2>
          <p>${allocation.intro}</p>
        </div>
        <div class="allocation-list">
          ${allocation.items
            .map(
              (item) => `
                <article class="allocation-item reveal" data-reveal>
                  <div>
                    <p class="allocation-item__label">${item.label}</p>
                    <p class="allocation-item__detail">${item.detail}</p>
                  </div>
                  <p class="allocation-item__value">${item.value}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    `
  );
}

function renderRoadmap() {
  setSection(
    "roadmap",
    `
      <div class="container">
        <p class="section-kicker reveal" data-reveal>${roadmap.kicker}</p>
        <div class="section-heading reveal" data-reveal>
          <h2>${roadmap.heading}</h2>
        </div>
        <div class="roadmap-list">
          ${roadmap.phases
            .map(
              (item) => `
                <article class="roadmap-item reveal" data-reveal>
                  <p class="roadmap-item__phase">${item.phase}</p>
                  <h3>${item.title}</h3>
                  <p>${item.detail}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    `
  );
}

function renderVcs() {
  const vcItems =
    vcs.conversations.length > 0
      ? vcs.conversations
          .map(
            (item) => `
              <article class="vc-card reveal" data-reveal>
                <h3>${item.name}</h3>
                <p>${item.context}</p>
                <span>${item.outcome}</span>
              </article>
            `
          )
          .join("")
      : `
        <article class="vc-card reveal" data-reveal>
          <h3>Conversations to be listed from real meetings only</h3>
          <p>This section stays intentionally blank until actual names are entered.</p>
          <span>No implied endorsement</span>
        </article>
      `;

  setSection(
    "vcs",
    `
      <div class="container">
        <p class="section-kicker reveal" data-reveal>${vcs.kicker}</p>
        <div class="section-heading reveal" data-reveal>
          <h2>${vcs.heading}</h2>
          <p>${vcs.note}</p>
        </div>
        <div class="vc-grid">${vcItems}</div>
      </div>
    `
  );
}

function renderFaq() {
  setSection(
    "faq",
    `
      <div class="container">
        <p class="section-kicker reveal" data-reveal>${faq.kicker}</p>
        <div class="section-heading reveal" data-reveal>
          <h2>${faq.heading}</h2>
        </div>
        <div class="faq-list">
          ${faq.items
            .map(
              (item, index) => `
                <details class="faq-item reveal" data-reveal>
                  <summary id="faq-question-${index}">${item.question}</summary>
                  <p>${item.answer}</p>
                </details>
              `
            )
            .join("")}
        </div>
      </div>
    `
  );
}

function renderClosing() {
  setSection(
    "closing",
    `
      <div class="container closing-panel reveal" data-reveal>
        <p class="section-kicker">${closing.kicker}</p>
        <h2>${closing.heading}</h2>
        <p>${closing.description}</p>
        <a class="button button--primary" href="${closing.cta.href}">${closing.cta.label}</a>
      </div>
    `
  );
}

function renderPage() {
  renderHero();
  renderThesis();
  renderMetrics();
  renderAllocation();
  renderRoadmap();
  renderVcs();
  renderFaq();
  renderClosing();
}

renderPage();
```

- [ ] **Step 2: Verify the page renders all sections**

Run: `open index.html`
Expected: the page shows Hero, Thesis, Metrics, Capital Allocation, Roadmap, VC We Spoke To Lol, Investor FAQ, and Closing CTA sections in order

- [ ] **Step 3: Commit the semantic renderer**

```bash
git add script.js
git commit -m "feat: render semantic content sections"
```

### Task 4: Implement the premium visual system

**Files:**
- Modify: `styles.css`
- Test: `index.html` in browser

- [ ] **Step 1: Replace the minimal stylesheet with full design tokens and base layout**

```css
:root {
  --bg: #f5f0e6;
  --bg-elevated: rgba(255, 252, 246, 0.72);
  --surface: rgba(24, 30, 28, 0.06);
  --surface-strong: rgba(17, 22, 21, 0.9);
  --text: #171c1a;
  --text-soft: rgba(23, 28, 26, 0.72);
  --line: rgba(23, 28, 26, 0.12);
  --gold: #b59a68;
  --sage: #8ea58c;
  --sage-glow: rgba(142, 165, 140, 0.2);
  --shadow: 0 24px 80px rgba(24, 32, 28, 0.08);
  --radius-lg: 1.75rem;
  --radius-md: 1rem;
  --container: min(72rem, calc(100vw - 2rem));
  --serif: "Cormorant Garamond", Georgia, serif;
  --sans: "Manrope", "Helvetica Neue", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--sans);
  color: var(--text);
  background:
    radial-gradient(circle at top, rgba(181, 154, 104, 0.16), transparent 34%),
    radial-gradient(circle at 20% 30%, rgba(142, 165, 140, 0.12), transparent 28%),
    linear-gradient(180deg, #f8f5ed 0%, #f2ede3 52%, #ece6db 100%);
}

.container {
  width: var(--container);
  margin: 0 auto;
}

.section {
  position: relative;
  padding: 5rem 0;
}

.section--hero {
  min-height: 100svh;
  display: grid;
  align-items: center;
  overflow: clip;
}

.page-noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.08;
  background-image:
    radial-gradient(rgba(23, 28, 26, 0.35) 0.6px, transparent 0.6px);
  background-size: 10px 10px;
  mix-blend-mode: multiply;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  backdrop-filter: blur(24px);
  background: rgba(248, 245, 237, 0.68);
  border-bottom: 1px solid rgba(23, 28, 26, 0.08);
}

.site-header__brand,
.site-header__nav a {
  color: var(--text);
  text-decoration: none;
}

.site-header__brand {
  font-family: var(--serif);
  font-size: 1.5rem;
  letter-spacing: 0.04em;
}

.site-header__nav {
  display: none;
  gap: 1rem;
}

.section-kicker {
  margin: 0 0 1rem;
  color: var(--sage);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.section-heading {
  max-width: 44rem;
  margin-bottom: 2rem;
}

.section-heading h2,
.hero__title,
.closing-panel h2,
.roadmap-item h3,
.vc-card h3 {
  margin: 0;
  font-family: var(--serif);
  line-height: 0.95;
  letter-spacing: -0.03em;
}

.hero__title {
  font-size: clamp(4rem, 14vw, 9rem);
}

.hero__tagline {
  max-width: 34rem;
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  color: var(--text-soft);
}

.hero__description,
.section-heading p,
.statement-card p,
.metric-card__detail,
.allocation-item__detail,
.roadmap-item p,
.vc-card p,
.faq-item p,
.closing-panel p {
  color: var(--text-soft);
  line-height: 1.7;
}

.hero__actions,
.metrics-grid,
.thesis-grid,
.allocation-list,
.roadmap-list,
.vc-grid,
.faq-list {
  display: grid;
  gap: 1rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.875rem 1.25rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
}

.button--primary {
  color: #f8f5ed;
  background: linear-gradient(135deg, #1e2522 0%, #32413a 100%);
  box-shadow: 0 18px 36px rgba(30, 37, 34, 0.2);
}

.button--ghost {
  color: var(--text);
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.35);
}

.statement-card,
.metric-card,
.allocation-item,
.roadmap-item,
.vc-card,
.closing-panel {
  border: 1px solid var(--line);
  background: var(--bg-elevated);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.statement-card,
.metric-card,
.roadmap-item,
.vc-card,
.closing-panel {
  border-radius: var(--radius-lg);
  padding: 1.5rem;
}

.allocation-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  border-radius: var(--radius-md);
  padding: 1.25rem;
}

.metric-card__label,
.allocation-item__label,
.roadmap-item__phase {
  margin: 0 0 0.5rem;
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.metric-card__value,
.allocation-item__value {
  margin: 0 0 0.5rem;
  font-family: var(--serif);
  font-size: clamp(2rem, 4vw, 3rem);
}

.signal-chart {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.signal-chart span {
  min-height: 9rem;
  padding: 1rem;
  display: flex;
  align-items: end;
  border-radius: var(--radius-md);
  color: #f8f5ed;
  background:
    linear-gradient(180deg, rgba(142, 165, 140, 0.35), rgba(23, 28, 26, 0.9)),
    linear-gradient(135deg, rgba(181, 154, 104, 0.2), transparent);
}

.faq-item {
  border-top: 1px solid var(--line);
  padding: 1rem 0;
}

.faq-item summary {
  cursor: pointer;
  list-style: none;
  font-weight: 700;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 600ms ease,
    transform 600ms ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 48rem) {
  .site-header {
    padding-inline: 2rem;
  }

  .site-header__nav {
    display: flex;
  }

  .hero__actions {
    grid-auto-flow: column;
    justify-content: start;
  }

  .thesis-grid,
  .metrics-grid,
  .vc-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .roadmap-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 64rem) {
  .section {
    padding: 7rem 0;
  }

  .thesis-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .metrics-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

- [ ] **Step 2: Verify the site reads as premium before advanced motion is added**

Run: `open index.html`
Expected: warm ivory background, dark editorial typography, muted sage accents, glassy cards, clear hierarchy, and strong mobile layout without overflow

- [ ] **Step 3: Commit the visual system**

```bash
git add styles.css
git commit -m "feat: implement premium visual system"
```

### Task 5: Add cinematic scrolling behavior and counters

**Files:**
- Modify: `script.js`
- Test: `index.html` in browser

- [ ] **Step 1: Add the reveal observer, counter animation, and hero parallax**

```js
function setupReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-reveal]").forEach((item) => {
      item.classList.add("is-visible");
    });
    document.querySelectorAll("[data-counter]").forEach((counter) => {
      counter.textContent = counter.dataset.counter;
    });
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll("[data-reveal]").forEach((item) => {
    revealObserver.observe(item);
  });

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const node = entry.target;
        const target = Number(node.dataset.counter);
        const start = performance.now();
        const duration = 1200;

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          node.textContent = Math.round(target * eased);
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        }

        requestAnimationFrame(tick);
        counterObserver.unobserve(node);
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll("[data-counter]").forEach((counter) => {
    counterObserver.observe(counter);
  });
}

function setupParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const heroSection = document.getElementById("hero");
  const heroContent = heroSection.querySelector(".hero__content");

  function updateParallax() {
    const rect = heroSection.getBoundingClientRect();
    const offset = rect.top * -0.08;
    heroContent.style.transform = `translate3d(0, ${offset}px, 0)`;
  }

  updateParallax();
  window.addEventListener("scroll", updateParallax, { passive: true });
}

setupReveals();
setupParallax();
```

- [ ] **Step 2: Add small CSS enhancements for hero depth and hover polish**

```css
.hero__backdrop {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 70% 20%, rgba(142, 165, 140, 0.24), transparent 0 26%),
    radial-gradient(circle at 25% 30%, rgba(181, 154, 104, 0.18), transparent 0 28%);
  filter: blur(6px);
}

.hero__content {
  position: relative;
  z-index: 1;
  will-change: transform;
}

.button,
.statement-card,
.metric-card,
.allocation-item,
.roadmap-item,
.vc-card {
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    border-color 220ms ease;
}

.button:hover,
.button:focus-visible,
.statement-card:hover,
.metric-card:hover,
.allocation-item:hover,
.roadmap-item:hover,
.vc-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 26px 48px rgba(24, 32, 28, 0.12);
  border-color: rgba(142, 165, 140, 0.35);
}
```

- [ ] **Step 3: Verify motion behavior**

Run: `open index.html`
Expected: sections reveal on scroll, metric counters animate once, hero content shifts subtly on scroll, and the page still reads clearly on mobile

- [ ] **Step 4: Commit the motion layer**

```bash
git add script.js styles.css
git commit -m "feat: add scroll motion and animated metrics"
```

### Task 6: Refine the deadpan satire and the VC section

**Files:**
- Modify: `content.js`
- Modify: `styles.css`
- Test: `index.html` in browser

- [ ] **Step 1: Tighten the copy so the joke reveals gradually**

```js
window.siteContent.hero.description =
  "We are building enduring narrative infrastructure for founders, capital, and situations not yet ready to be described as problems.";

window.siteContent.metrics.cards[3].detail =
  "Tracked with care, though not always at a granularity helpful to others.";

window.siteContent.allocation.intro =
  "Our allocation model favors composure, aesthetics, and long-duration strategic ambiguity over the shorter-term optics of administrative clarity.";

window.siteContent.closing.description =
  "The strongest conviction often appears indistinguishable from insufficient documentation until much later.";
```

- [ ] **Step 2: Add a more serious treatment for the VC section**

```css
#vcs .section-heading {
  display: grid;
  gap: 0.75rem;
}

.vc-grid {
  grid-template-columns: 1fr;
}

.vc-card span {
  display: inline-flex;
  width: fit-content;
  margin-top: 1rem;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  color: var(--sage);
  background: rgba(142, 165, 140, 0.12);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

- [ ] **Step 3: Enter the actual VC names once supplied**

```js
window.siteContent.vcs.conversations = [
  { name: "Actual Firm Or Investor Name", context: "City or event context", outcome: "Conversation held" }
];
```

- [ ] **Step 4: Verify the section is funny without making false claims**

Run: `open index.html`
Expected: the title lands as a joke, while the content itself stays factual and does not imply investment or endorsement

- [ ] **Step 5: Commit the satire and VC refinement**

```bash
git add content.js styles.css
git commit -m "feat: refine deadpan voice and vc section"
```

### Task 7: Add README and delivery notes

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write a concise README**

```md
# Hakunamatata.guru

Static scrolling parody website for a pre-revenue, pre-product, pre-problem company.

## Files

- `index.html`: semantic page shell
- `styles.css`: visual system and responsive layout
- `content.js`: copy and structured section data
- `script.js`: rendering and motion behavior

## Local Preview

Open the file directly:

```bash
open index.html
```

Or serve it locally:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Launch Checklist

- replace the VC section with real names only
- confirm all claims remain satirical but not false
- verify reduced motion behavior
- test desktop and mobile layouts
```

- [ ] **Step 2: Verify README commands are accurate**

Run: `python3 -m http.server 4173`
Expected: local server starts and serves the site at `http://localhost:4173`

- [ ] **Step 3: Commit the README**

```bash
git add README.md
git commit -m "docs: add local preview instructions"
```

### Task 8: Final verification pass

**Files:**
- Test: `index.html` in browser

- [ ] **Step 1: Run a final manual check on desktop**

Run: `python3 -m http.server 4173`
Expected: server starts successfully

Run: `open http://localhost:4173`
Expected: full page loads with all sections, no broken layout, no missing copy, and no console errors

- [ ] **Step 2: Run a final manual check on mobile width**

Run: browser responsive mode at `390px` width
Expected: no horizontal overflow, readable headings, tappable buttons, and acceptable animation density

- [ ] **Step 3: Run a reduced-motion check**

Run: enable reduced motion in the browser or OS accessibility settings, then reload the page
Expected: reveals show immediately, counters render their final values, and no parallax runs

- [ ] **Step 4: Commit the verified build**

```bash
git add index.html styles.css content.js script.js README.md
git commit -m "feat: ship hakunamatata landing page"
```

## Self-Review

Spec coverage:

- Hero, Thesis, Metrics, Capital Allocation, Roadmap, VC section, FAQ, and Closing CTA each have a dedicated rendering task.
- Premium visual system, muted sage accent, reduced-motion support, and mobile-first behavior are covered in the stylesheet task.
- The deadpan reveal is handled through the content model plus the final copy-refinement task.

Gap noted and handled:

- Actual VC names are not yet available in the repo, so the plan includes a factual-only data entry step and a safe empty-state fallback rather than inventing names.

Placeholder scan:

- No `TODO` or `TBD` markers remain in the plan body.
- The only intentionally open data is the user-supplied VC list, which is called out explicitly as required factual input.

Type consistency:

- `window.siteContent` is the single shared source of truth.
- Section ids in `index.html` match the render function calls in `script.js`.
- The reveal and counter hooks use `data-reveal` and `data-counter` consistently across markup, script, and styles.
