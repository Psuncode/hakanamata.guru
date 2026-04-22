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
    heroContent.style.setProperty("--hero-offset", `${offset}px`);
  }

  updateParallax();
  window.addEventListener("scroll", updateParallax, { passive: true });
}

setupReveals();
setupParallax();
