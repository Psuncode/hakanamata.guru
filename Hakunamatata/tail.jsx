// Tail sections: Conversations, Roadmap, FAQ, CTA
const { useState: useState_t, useRef: useRef_t, useEffect: useEffect_t } = React;

// ── Selected Conversations ─────────────────────────────────────────────────
function Conversations() {
  const ref = useReveal();
  const conversations = [
    { vc: 'True Ventures',     who: 'VC · Early-stage',        when: 'Apr 20', tone: 'Receptive to the posture; declined to specify in what way.' },
    { vc: 'Village Global',    who: 'VC',                      when: 'Apr 21', tone: 'Asked one question, then went quiet for nineteen days. Considered a good sign.' },
    { vc: 'Section Partners',  who: 'Secondary market',        when: 'Apr 21', tone: 'Wanted to know what already existed. We let the silence do the work.' },
    { vc: 'HGGC',              who: 'Private Equity',          when: 'Apr 21', tone: 'Treated the absence of revenue with appropriate respect.' },
    { vc: 'Qatalyst',          who: 'Advisory',                when: 'Apr 22', tone: 'Said "interesting" four times, in a way that was hard to read.' },
    { vc: 'Peterson Partners', who: 'Growth equity',           when: 'Apr 23', tone: 'Kept the meeting under twenty minutes; called it a good sign.' },
    { vc: 'Nazca',             who: 'LatAm-leaning generalist', when: 'Apr 24', tone: 'Asked where we were based. Smiled when we said just outside Palo Alto.' },
  ];

  return (
    <section className="convs" id="vcs" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Selected Conversations · Apr 2026</span>
          <h2 className="section-title">
            A short list of rooms in which the thesis has been allowed
            to <em>circulate.</em>
          </h2>
          <p className="convs-lede">
            Included for context only. Conversations are presented without
            implying participation, endorsement, allocation, or that the
            company is anything other than pre-seed, pre-product, and
            pre-revenue.
          </p>
        </div>

        <div className="convs-list reveal-stagger">
          {conversations.map((c, i) => (
            <article key={c.vc} className="conv" style={{ '--i': i }}>
              <div className="conv-meta">
                <span className="conv-when">{c.when}</span>
                <span className="conv-who">{c.who}</span>
              </div>
              <h3 className="conv-vc">{c.vc}</h3>
              <p className="conv-tone">"{c.tone}"</p>
              <span className="conv-arrow">↗</span>
            </article>
          ))}
        </div>

        <p className="convs-fine">No implied endorsement.</p>
      </div>
      <style>{convStyles}</style>
    </section>
  );
}

const convStyles = `
.convs { padding: var(--section-py) 0; }
.convs-lede {
  font-size: clamp(17px, 1.5vw, 20px);
  color: var(--ink-soft);
  max-width: 620px;
  text-wrap: pretty;
}
.convs-list {
  display: flex;
  flex-direction: column;
}
.conv {
  position: relative;
  display: grid;
  grid-template-columns: 200px 1fr 80px;
  gap: clamp(20px, 4vw, 60px);
  align-items: start;
  padding: clamp(28px, 3.5vw, 48px) 0;
  border-top: 1px solid var(--ink-line);
  cursor: none;
  transition: padding-left .35s cubic-bezier(.2,.7,.2,1);
}
.conv:last-child { border-bottom: 1px solid var(--ink-line); }
.conv::before {
  content: "";
  position: absolute;
  left: 0; top: 0;
  height: 100%;
  width: 0;
  background: var(--accent);
  opacity: 0.06;
  transition: width .5s cubic-bezier(.2,.7,.2,1);
}
.conv:hover::before { width: 100%; }
.conv:hover { padding-left: 24px; }
@media (max-width: 720px) {
  .conv { grid-template-columns: 1fr; gap: 8px; }
}
.conv-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--ink-soft);
}
.conv-when { color: var(--accent); }
.conv-vc {
  font-family: var(--display);
  font-weight: 400;
  font-size: clamp(28px, 3.4vw, 44px);
  letter-spacing: -0.025em;
  line-height: 1.05;
  position: relative;
  z-index: 1;
}
.conv-tone {
  grid-column: 2;
  margin-top: 12px;
  color: var(--ink-soft);
  font-size: 16px;
  font-style: italic;
  line-height: 1.5;
  text-wrap: pretty;
  position: relative;
  z-index: 1;
}
@media (max-width: 720px) { .conv-tone { grid-column: 1; } }
.conv-arrow {
  font-family: var(--mono);
  font-size: 24px;
  color: var(--ink-faint);
  transition: transform .35s, color .35s;
}
.conv:hover .conv-arrow {
  transform: translate(8px, -8px);
  color: var(--accent);
}
.convs-fine {
  margin-top: 32px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-faint);
}
`;

// ── Roadmap ────────────────────────────────────────────────────────────────
function Roadmap() {
  const ref = useReveal();
  return (
    <section className="road" id="roadmap" ref={ref}>
      <div className="bg-grass" style={{ bottom: '-280px', right: '-200px', opacity: 0.4 }} />
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Next Steps</span>
          <h2 className="section-title">
            How the thesis becomes <em>slightly more visible</em> without
            becoming too available.
          </h2>
        </div>

        <div className="road-list reveal-stagger">
          {[
            { n: '01', t: 'Selective Conversations', d: 'Add the real VC names, rooms, and context where the narrative has already been allowed to circulate.' },
            { n: '02', t: 'Wordmark Grid', d: 'Introduce restrained logo-style marks so the conversations section feels closer to a premium brand site than a founder spreadsheet.' },
            { n: '03', t: 'Waitlist Surface', d: 'Add a cleaner capture moment for people who want updates, access, or the feeling of early alignment.' },
            { n: '04', t: 'Live Deployment', d: 'Ship the current version publicly so the site can start doing what good landing pages do: imply momentum.' },
          ].map((s, i) => (
            <article key={s.n} className="road-item" style={{ '--i': i }}>
              <span className="road-num">{s.n}</span>
              <div className="road-content">
                <h3 className="road-title">{s.t}</h3>
                <p className="road-body">{s.d}</p>
              </div>
              <div className="road-bar"><span /></div>
            </article>
          ))}
        </div>
      </div>
      <style>{roadStyles}</style>
    </section>
  );
}

const roadStyles = `
.road { position: relative; padding: var(--section-py) 0; overflow: hidden; background: var(--bg-2); border-top: 1px solid var(--ink-line); border-bottom: 1px solid var(--ink-line); }
.road-list { display: flex; flex-direction: column; gap: 0; }
.road-item {
  display: grid;
  grid-template-columns: 100px 1fr 200px;
  gap: clamp(20px, 4vw, 56px);
  padding: clamp(28px, 4vw, 48px) 0;
  border-top: 1px solid var(--ink-line);
  align-items: center;
}
.road-item:last-child { border-bottom: 1px solid var(--ink-line); }
@media (max-width: 720px) {
  .road-item { grid-template-columns: 60px 1fr; }
  .road-bar { display: none; }
}
.road-num {
  font-family: var(--mono);
  font-size: 14px;
  letter-spacing: 0.1em;
  color: var(--accent);
}
.road-title {
  font-family: var(--display);
  font-weight: 400;
  font-size: clamp(24px, 2.8vw, 36px);
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}
.road-body {
  color: var(--ink-soft);
  font-size: 15.5px;
  line-height: 1.55;
  max-width: 560px;
}
.road-bar {
  width: 100%;
  height: 2px;
  background: var(--ink-line);
  position: relative;
  overflow: hidden;
}
.road-bar span {
  position: absolute;
  top: 0; left: 0;
  height: 100%;
  width: 0;
  background: var(--accent);
  transition: width 1.4s cubic-bezier(.2,.7,.2,1);
}
.reveal-stagger.in .road-item:nth-child(1) .road-bar span { width: 35%; }
.reveal-stagger.in .road-item:nth-child(2) .road-bar span { width: 22%; }
.reveal-stagger.in .road-item:nth-child(3) .road-bar span { width: 14%; }
.reveal-stagger.in .road-item:nth-child(4) .road-bar span { width: 8%; }
`;

// ── FAQ ────────────────────────────────────────────────────────────────────
function FAQ() {
  const ref = useReveal();
  const items = [
    { q: 'What does the company actually do?', a: 'It protects the narrative during its most fragile and expensive phase: before premature usefulness.' },
    { q: 'Where has the money gone?', a: 'Into atmosphere, continuity, and other categories that become clearer when viewed from a respectful distance.' },
    { q: 'When should revenue begin?', a: 'We remain careful not to let monetization arrive before the company has finished becoming itself.' },
    { q: 'Why does this look so polished already?', a: 'Because visual certainty is one of the few signals available this early, and we take signals seriously.' },
    { q: 'Who is this for?', a: 'Founders, capital, and beautiful situations not yet burdened by product, revenue, or the administrative mood of being specific.' },
    { q: 'Is there a product roadmap?', a: 'There is a roadmap. Whether it leads to a product is a question we are not yet under pressure to answer.' },
  ];
  const [open, setOpen] = useState_t(0);

  return (
    <section className="faq" id="faq" ref={ref}>
      <div className="container">
        <div className="faq-grid">
          <div className="section-head reveal" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Questions</span>
            <h2 className="section-title">
              Common investor questions, answered in the <em>intended emotional register.</em>
            </h2>
          </div>
          <div className="faq-list reveal-stagger">
            {items.map((it, i) => (
              <FAQItem key={i} item={it} idx={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </div>
      <style>{faqStyles}</style>
    </section>
  );
}

function FAQItem({ item, idx, open, onToggle }) {
  const bodyRef = useRef_t(null);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`} style={{ '--i': idx }}>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span className="faq-num">0{idx + 1}</span>
        <span className="faq-q-text">{item.q}</span>
        <span className="faq-icon" aria-hidden>
          <span /><span />
        </span>
      </button>
      <div className="faq-a-wrap" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
        <div className="faq-a" ref={bodyRef}>
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

const faqStyles = `
.faq { padding: var(--section-py) 0; }
.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: clamp(40px, 6vw, 96px);
  align-items: start;
}
@media (max-width: 880px) { .faq-grid { grid-template-columns: 1fr; } }
.faq-list {
  display: flex;
  flex-direction: column;
}
.faq-item {
  border-top: 1px solid var(--ink-line);
}
.faq-item:last-child { border-bottom: 1px solid var(--ink-line); }
.faq-q {
  width: 100%;
  display: grid;
  grid-template-columns: 60px 1fr 40px;
  gap: 20px;
  align-items: center;
  text-align: left;
  padding: clamp(20px, 2.4vw, 28px) 0;
  font-family: var(--display);
  font-weight: 400;
  font-size: clamp(20px, 2.2vw, 28px);
  letter-spacing: -0.015em;
  line-height: 1.2;
  color: var(--ink);
  transition: color .25s;
}
.faq-q:hover { color: var(--accent); }
.faq-num {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--ink-faint);
}
.faq-icon {
  position: relative;
  width: 20px; height: 20px;
  display: inline-block;
  justify-self: end;
}
.faq-icon span {
  position: absolute;
  top: 50%; left: 0;
  width: 100%;
  height: 1.5px;
  background: var(--ink);
  transform-origin: center;
  transition: transform .3s cubic-bezier(.2,.7,.2,1);
}
.faq-icon span:last-child { transform: translateY(-50%) rotate(90deg); }
.faq-item.open .faq-icon span:last-child { transform: translateY(-50%) rotate(0); }
.faq-a-wrap {
  display: grid;
  transition: grid-template-rows .45s cubic-bezier(.2,.7,.2,1);
}
.faq-a {
  overflow: hidden;
  min-height: 0;
}
.faq-a p {
  padding: 0 0 28px 80px;
  color: var(--ink-soft);
  font-size: 16.5px;
  line-height: 1.55;
  max-width: 640px;
  text-wrap: pretty;
}
@media (max-width: 720px) { .faq-a p { padding-left: 0; } }
`;

// ── Final CTA ──────────────────────────────────────────────────────────────
function FinalCTA() {
  const ref = useReveal();
  return (
    <section className="cta" id="closing" ref={ref}>
      <div className="bg-sun" style={{ top: '-100px', left: '50%', transform: 'translateX(-50%)', opacity: 0.6 }} />
      <div className="container">
        <div className="cta-inner reveal">
          <span className="eyebrow">Stay close</span>
          <h2 className="cta-title">
            Be early to <em>whatever this becomes.</em>
          </h2>
          <p className="cta-sub">
            Get occasional updates, selective clarity, and the rare moment
            when the thesis chooses to become more specific.
          </p>
          <form className="cta-form" onSubmit={(e) => { e.preventDefault(); const btn = e.target.querySelector('button'); btn.textContent = '✓  Selectively aligned.'; btn.disabled = true; }}>
            <input type="email" placeholder="you@selective.email" required />
            <button type="submit" className="magnetic">Stay Updated →</button>
          </form>
          <p className="cta-fine">We respond when the moment is correct.</p>
        </div>
      </div>
      <style>{ctaStyles}</style>
    </section>
  );
}

const ctaStyles = `
.cta { position: relative; padding: var(--section-py) 0; overflow: hidden; }
.cta-inner {
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.cta-inner .eyebrow::before { display: none; }
.cta-title {
  font-family: var(--display);
  font-weight: 300;
  font-size: clamp(48px, 8vw, 110px);
  line-height: 0.95;
  letter-spacing: -0.04em;
  text-wrap: balance;
  margin: 8px 0;
}
.cta-title em { font-style: italic; color: var(--accent); }
.cta-sub {
  font-size: clamp(17px, 1.5vw, 21px);
  color: var(--ink-soft);
  max-width: 600px;
  text-wrap: pretty;
}
.cta-form {
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 560px;
  margin-top: 28px;
  padding: 6px;
  border-radius: 999px;
  background: var(--bg-2);
  border: 1px solid var(--ink-line);
}
@media (max-width: 540px) {
  .cta-form { flex-direction: column; border-radius: 22px; }
}
.cta-form input {
  flex: 1;
  padding: 12px 22px;
  background: transparent;
  border: 0;
  font: inherit;
  color: inherit;
  outline: none;
}
.cta-form button {
  padding: 14px 26px;
  background: var(--ink);
  color: var(--bg);
  border-radius: 999px;
  font-weight: 500;
  border: 0;
  transition: transform .2s;
}
.cta-form button:not(:disabled):hover { transform: translateY(-1px); }
.cta-fine {
  margin-top: 8px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-faint);
}
`;

window.Conversations = Conversations;
window.Roadmap = Roadmap;
window.FAQ = FAQ;
window.FinalCTA = FinalCTA;
