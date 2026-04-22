const { hero, thesis, metrics, allocation, roadmap, vcs, faq, closing } = window.siteContent;

function setSection(id, html) {
  const section = document.getElementById(id);
  if (section) {
    section.innerHTML = html;
  }
}

function renderHero() {
  const pillars = hero.pillars
    .map((item) => `<span class="hero__pillar">${item}</span>`)
    .join("");

  setSection(
    "hero",
    `
      <div class="hero__backdrop" aria-hidden="true"></div>
      <div class="hero__content container reveal" data-reveal>
        <p class="section-kicker hero__eyebrow">${hero.eyebrow}</p>
        <h1 class="hero__title">${hero.title}</h1>
        <p class="hero__tagline">${hero.tagline}</p>
        <p class="hero__description">${hero.description}</p>
        <div class="hero__actions">
          <a class="button button--primary" href="${hero.primaryCta.href}">${hero.primaryCta.label}</a>
          <a class="button button--ghost" href="${hero.secondaryCta.href}">${hero.secondaryCta.label}</a>
        </div>
        <div class="hero__visual" aria-hidden="true">
          <div class="hero__ring hero__ring--outer"></div>
          <div class="hero__ring hero__ring--mid"></div>
          <div class="hero__ring hero__ring--inner"></div>
          <div class="hero__orb"></div>
        </div>
        <div class="hero__pillars">${pillars}</div>
        <p class="hero__footnote">${hero.footnote}</p>
      </div>
    `
  );
}

function renderThesis() {
  const notes = thesis.notes
    .map(
      (item) => `
        <li class="feature-film__note">${item}</li>
      `
    )
    .join("");

  setSection(
    "thesis",
    `
      <div class="container feature-film">
        <div class="feature-film__media reveal" data-reveal aria-hidden="true">
          <div class="feature-film__screen">
            <div class="feature-film__glow"></div>
            <div class="feature-film__label">Think calm</div>
          </div>
        </div>
        <div class="feature-film__copy">
          <p class="section-kicker reveal" data-reveal>${thesis.kicker}</p>
          <div class="section-heading reveal" data-reveal>
            <h2>${thesis.heading}</h2>
            <p>${thesis.description}</p>
          </div>
          <ul class="feature-film__notes reveal" data-reveal>${notes}</ul>
          <a class="text-link reveal" data-reveal href="${thesis.cta.href}">${thesis.cta.label}</a>
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
        <div class="section-heading section-heading--center reveal" data-reveal>
          <h2>${metrics.heading}</h2>
        </div>
        <div class="modes-grid">
          ${metrics.cards
            .map(
              (card) => `
                <article class="mode-card reveal" data-reveal>
                  <p class="mode-card__label">${card.label}</p>
                  <h3>${card.title}</h3>
                  <p>${card.detail}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    `
  );
}

function renderAllocation() {
  setSection(
    "allocation",
    `
      <div class="container surface-layout">
        <div class="surface-copy">
          <p class="section-kicker reveal" data-reveal>${allocation.kicker}</p>
          <div class="section-heading reveal" data-reveal>
            <h2>${allocation.heading}</h2>
            <p>${allocation.intro}</p>
          </div>
          <div class="surface-list">
            ${allocation.items
              .map(
                (item) => `
                  <article class="surface-item reveal" data-reveal>
                    <p class="surface-item__label">${item.label}</p>
                    <p>${item.detail}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="surface-visual reveal" data-reveal aria-hidden="true">
          <div class="surface-visual__panel"></div>
          <div class="surface-visual__panel surface-visual__panel--small"></div>
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
        <div class="section-heading section-heading--center reveal" data-reveal>
          <h2>${roadmap.heading}</h2>
        </div>
        <div class="timeline-list">
          ${roadmap.phases
            .map(
              (item) => `
                <article class="timeline-card reveal" data-reveal>
                  <p class="timeline-card__phase">${item.phase}</p>
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
              <article class="conversation-card reveal" data-reveal>
                <h3>${item.name}</h3>
                <p>${item.context}</p>
                <span>${item.outcome}</span>
              </article>
            `
          )
          .join("")
      : `
        <article class="conversation-card reveal" data-reveal>
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
        <div class="section-heading section-heading--center reveal" data-reveal>
          <h2>${vcs.heading}</h2>
          <p>${vcs.note}</p>
        </div>
        <div class="conversation-grid">${vcItems}</div>
      </div>
    `
  );
}

function renderFaq() {
  setSection(
    "faq",
    `
      <div class="container faq-shell">
        <div class="faq-shell__intro">
          <p class="section-kicker reveal" data-reveal>${faq.kicker}</p>
          <div class="section-heading reveal" data-reveal>
            <h2>${faq.heading}</h2>
          </div>
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
      <div class="container closing-shell reveal" data-reveal>
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

function setupReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-reveal]").forEach((item) => {
      item.classList.add("is-visible");
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
}

function setupParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const heroSection = document.getElementById("hero");
  const heroContent = heroSection?.querySelector(".hero__content");

  if (!heroSection || !heroContent) return;

  function updateParallax() {
    const rect = heroSection.getBoundingClientRect();
    const offset = rect.top * -0.06;
    heroContent.style.setProperty("--hero-offset", `${offset}px`);
  }

  updateParallax();
  window.addEventListener("scroll", updateParallax, { passive: true });
}

setupReveals();
setupParallax();
