// Mid-page sections: VCs, How it works, Why us, Stats
const { useState: useState_s, useEffect: useEffect_s, useRef: useRef_s } = React;

function useReveal() {
  const ref = useRef_s(null);
  useEffect_s(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// ── VC marquee strip ───────────────────────────────────────────────────────
function VCStrip() {
  const vcs = [
    'True Ventures', 'Village Global', 'Section Partners', 'HGGC',
    'Qatalyst', 'Peterson Partners', 'Nazca',
  ];
  const ref = useReveal();
  return (
    <section className="vcs reveal" ref={ref}>
      <div className="container">
        <p className="vcs-label">Conversations have been had, calmly, from just outside Palo Alto, with</p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[...vcs, ...vcs].map((v, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-mark" />
              {v}
            </span>
          ))}
        </div>
      </div>
      <div className="container">
        <p className="vcs-fine">No allocation implied. No deck circulated. Tone preserved throughout.</p>
      </div>
      <style>{vcStyles}</style>
    </section>
  );
}

const vcStyles = `
.vcs {
  padding: clamp(60px, 8vw, 100px) 0;
  border-top: 1px solid var(--ink-line);
  border-bottom: 1px solid var(--ink-line);
  background: var(--bg-2);
}
.vcs-label {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 32px;
  text-align: center;
}
.vcs-fine {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-top: 32px;
  text-align: center;
}
.marquee {
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
.marquee-track {
  display: flex;
  gap: 56px;
  width: max-content;
  animation: scroll 60s linear infinite;
  font-family: var(--display);
  font-weight: 300;
  font-size: clamp(28px, 4vw, 48px);
  letter-spacing: -0.02em;
  color: var(--ink);
  white-space: nowrap;
}
.marquee:hover .marquee-track { animation-play-state: paused; }
.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 28px;
}
.marquee-mark {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
}
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
`;

// ── How it works ───────────────────────────────────────────────────────────
function HowItWorks() {
  const ref = useReveal();
  return (
    <section className="how" id="thesis" ref={ref}>
      <div className="bg-sun" style={{ top: '10%', right: '-150px', opacity: 0.5 }} />
      <div className="container">
        <div className="how-grid reveal">
          <div className="how-left">
            <span className="eyebrow">How it works</span>
            <h2 className="section-title">
              You feel it. <em>We hold it.</em>
            </h2>
          </div>
          <div className="how-right">
            <p className="how-lede">
              Hakunamatata holds the idea before it becomes a deliverable. It
              keeps conviction moving, carries the tone forward, and protects
              the founders from operational over-definition.
            </p>
            <ul className="how-list">
              <li>A company-shaped object for narrative preservation.</li>
              <li>Structured to feel premium before it feels legible.</li>
              <li>Calibrated for selective disclosure and ambient confidence.</li>
            </ul>
            <a href="#vcs" className="btn btn-ghost magnetic" style={{ marginTop: '28px' }}>
              Read the Thesis <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="behaviors reveal-stagger">
          {[
            { label: 'Drift', title: 'Hold the thesis in motion', body: 'Stay in a productive state between idea and obligation, where the story can still improve itself.', icon: 'drift' },
            { label: 'Speak', title: 'Convert vibes into language', body: 'Package ambient confidence into polished phrases suitable for decks, dinners, and selective follow-up.', icon: 'speak' },
            { label: 'Allocate', title: 'Preserve capital at altitude', body: 'Route spending toward taste, continuity, and emotional runway rather than the panic of early proof.', icon: 'allocate' },
          ].map((b, i) => (
            <article key={b.label} className="behavior" style={{ '--i': i }}>
              <div className="behavior-icon">
                <BehaviorIcon kind={b.icon} />
              </div>
              <span className="behavior-label">{b.label}</span>
              <h3 className="behavior-title">{b.title}</h3>
              <p className="behavior-body">{b.body}</p>
            </article>
          ))}
        </div>
      </div>
      <style>{howStyles}</style>
    </section>
  );
}

function BehaviorIcon({ kind }) {
  if (kind === 'drift') return (
    <svg viewBox="0 0 64 64" fill="none">
      <path d="M6 32 Q20 16 32 32 T58 32" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M6 42 Q20 26 32 42 T58 42" stroke="currentColor" strokeWidth="1.5" fill="none" opacity=".5" />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
    </svg>
  );
  if (kind === 'speak') return (
    <svg viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="1.5" opacity=".5" />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
    </svg>
  );
  return (
    <svg viewBox="0 0 64 64" fill="none">
      <rect x="10" y="44" width="10" height="12" stroke="currentColor" strokeWidth="1.5" />
      <rect x="27" y="32" width="10" height="24" stroke="currentColor" strokeWidth="1.5" />
      <rect x="44" y="18" width="10" height="38" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 38 L32 26 L49 14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const howStyles = `
.how { position: relative; padding: var(--section-py) 0; overflow: hidden; }
.how-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: clamp(40px, 6vw, 96px);
  align-items: start;
  margin-bottom: clamp(60px, 8vw, 120px);
}
@media (max-width: 880px) {
  .how-grid { grid-template-columns: 1fr; }
}
.how-left { display: flex; flex-direction: column; gap: 20px; position: sticky; top: 100px; }
.how-lede {
  font-size: clamp(18px, 1.6vw, 22px);
  line-height: 1.5;
  color: var(--ink-soft);
  margin-bottom: 28px;
  text-wrap: pretty;
}
.how-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-top: 1px solid var(--ink-line);
  padding-top: 24px;
}
.how-list li {
  position: relative;
  padding-left: 28px;
  font-size: 16px;
  color: var(--ink);
}
.how-list li::before {
  content: "";
  position: absolute;
  left: 0; top: 0.5em;
  width: 16px; height: 1px;
  background: var(--accent);
}

.behaviors {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--ink-line);
  border-top: 1px solid var(--ink-line);
  border-bottom: 1px solid var(--ink-line);
}
@media (max-width: 880px) { .behaviors { grid-template-columns: 1fr; } }
.behavior {
  background: var(--bg);
  padding: clamp(32px, 4vw, 56px) clamp(24px, 3vw, 40px);
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: background-color .4s;
}
.behavior:hover { background: var(--bg-2); }
.behavior-icon {
  width: 56px; height: 56px;
  color: var(--accent);
  margin-bottom: 16px;
}
.behavior-label {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-faint);
}
.behavior-title {
  font-family: var(--display);
  font-weight: 400;
  font-size: clamp(22px, 2.4vw, 30px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-wrap: balance;
}
.behavior-body {
  color: var(--ink-soft);
  font-size: 15.5px;
  line-height: 1.55;
  text-wrap: pretty;
}
`;

// ── Why us / value props ───────────────────────────────────────────────────
function WhyUs() {
  const ref = useReveal();
  return (
    <section className="whyus reveal" id="why" ref={ref}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why us</span>
          <h2 className="section-title">
            Every layer is designed to look <em>inevitable</em> before it
            becomes explainable.
          </h2>
        </div>
        <div className="whyus-grid reveal-stagger">
          {[
            { t: 'Narrative Shell', d: 'Outer layer tuned for confidence, stillness, and selective disclosure.', n: '01' },
            { t: 'Taste Engine', d: 'Curates references, environments, and objects consistent with premium ambiguity.', n: '02' },
            { t: 'Founder Retention', d: 'Reduces exposure to unnecessary urgency and excessive factual compression.', n: '03' },
            { t: 'Ambient Ledger', d: 'Maintains a representative sense of order without overcommitting to resolution.', n: '04' },
          ].map((x, i) => (
            <div key={x.t} className="whyus-card" style={{ '--i': i }}>
              <span className="whyus-num">{x.n}</span>
              <h3 className="whyus-title">{x.t}</h3>
              <p className="whyus-body">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{whyStyles}</style>
    </section>
  );
}

const whyStyles = `
.whyus {
  padding: var(--section-py) 0;
  background: var(--bg-2);
  border-top: 1px solid var(--ink-line);
  border-bottom: 1px solid var(--ink-line);
}
.whyus-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(20px, 2.5vw, 32px);
}
@media (max-width: 720px) { .whyus-grid { grid-template-columns: 1fr; } }
.whyus-card {
  padding: clamp(28px, 3.5vw, 44px);
  border-radius: 22px;
  background: var(--bg);
  border: 1px solid var(--ink-line);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s;
  position: relative;
  overflow: hidden;
}
.whyus-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 50px -20px color-mix(in oklab, var(--ink) 25%, transparent);
}
.whyus-card::after {
  content: "";
  position: absolute;
  top: -40px; right: -40px;
  width: 120px; height: 120px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0;
  transition: opacity .5s;
}
.whyus-card:hover::after { opacity: 0.12; }
.whyus-num {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--accent);
}
.whyus-title {
  font-family: var(--display);
  font-weight: 400;
  font-size: clamp(24px, 2.6vw, 34px);
  letter-spacing: -0.02em;
  line-height: 1.1;
}
.whyus-body {
  color: var(--ink-soft);
  font-size: 15.5px;
  line-height: 1.55;
  text-wrap: pretty;
}
`;

// ── Stats with animated counters ───────────────────────────────────────────
function Stats() {
  const ref = useReveal();
  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="section-head reveal" style={{ marginBottom: 0 }}>
          <span className="eyebrow">By the numbers, calmly</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.4vw, 44px)' }}>
            One hundred days <em>unbothered.</em> And counting.
          </h2>
        </div>
        <div className="stats-grid">
          <Stat value={100} label="Days unbothered" suffix="" subtext="And counting." />
          <Stat value={0} label="Products shipped" suffix="" subtext="Pre-product, by design." />
          <Stat value={0} label="Revenue, USD" suffix="" subtext="Pre-revenue, on purpose." />
          <Stat value={7} label="VC conversations" suffix="" subtext="From just outside Palo Alto." />
        </div>
      </div>
      <style>{statsStyles}</style>
    </section>
  );
}

function Stat({ value, label, suffix, subtext, decimals = 0 }) {
  const [shown, setShown] = useState_s(0);
  const ref = useRef_s(null);
  const started = useRef_s(false);

  useEffect_s(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1800;
          const tick = (now) => {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            setShown(value * eased);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div className="stat" ref={ref}>
      <div className="stat-value">
        {shown.toFixed(decimals)}<span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-sub">{subtext}</div>
    </div>
  );
}

const statsStyles = `
.stats { padding: var(--section-py) 0; }
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(20px, 3vw, 40px);
  border-top: 1px solid var(--ink-line);
  padding-top: clamp(40px, 5vw, 64px);
}
@media (max-width: 880px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
.stat {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.stat-value {
  font-family: var(--display);
  font-weight: 300;
  font-size: clamp(54px, 7vw, 96px);
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--ink);
  font-variant-numeric: tabular-nums;
}
.stat-suffix { color: var(--accent); font-style: italic; }
.stat-label {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-top: 8px;
}
.stat-sub {
  color: var(--ink-faint);
  font-size: 13.5px;
  font-style: italic;
}
`;

window.VCStrip = VCStrip;
window.HowItWorks = HowItWorks;
window.WhyUs = WhyUs;
window.Stats = Stats;
window.useReveal = useReveal;
