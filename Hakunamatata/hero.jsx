// Kinetic typography hero
const { useState, useEffect, useRef } = React;

function KineticHero({ variant = 'kinetic' }) {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallax = scrollY * 0.3;

  // Cycling words for kinetic variant
  const cycleWords = ['unresolved.', 'expensive.', 'ambient.', 'inevitable.', 'unbothered.'];
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    if (variant !== 'kinetic') return;
    const id = setInterval(() => setWordIdx((i) => (i + 1) % cycleWords.length), 2400);
    return () => clearInterval(id);
  }, [variant]);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg" style={{ transform: `translate3d(0, ${parallax}px, 0)` }}>
        <div className="bg-sun" style={{ top: '-120px', right: '-80px' }} />
        <div className="bg-grass" style={{ bottom: '-280px', left: '-200px' }} />
        <div className="bg-sky" style={{ top: '20%', left: '40%' }} />
      </div>

      <div className="hero-clouds" aria-hidden>
        <Cloud delay={0} top="14%" duration={90} />
        <Cloud delay={25} top="22%" duration={110} small />
        <Cloud delay={55} top="9%" duration={140} />
      </div>

      <div className="hero-inner container">
        <div className="hero-eyebrow reveal in">
          <span className="dot" /> Started just outside Palo Alto · Pre-seed · Pre-product · Pre-revenue
        </div>

        {variant === 'kinetic' && (
          <h1 className="hero-title">
            <span className="line"><Letter delay={0}>T</Letter><Letter delay={40}>h</Letter><Letter delay={80}>o</Letter><Letter delay={120}>u</Letter><Letter delay={160}>g</Letter><Letter delay={200}>h</Letter><Letter delay={240}>t</Letter><Letter delay={280}>s</Letter></span>
            <span className="line">that should</span>
            <span className="line">remain</span>
            <span className="line cycle-line">
              <span className="cycle-track" style={{ transform: `translateY(-${wordIdx * 100}%)` }}>
                {cycleWords.map((w, i) => (
                  <span key={i} className="cycle-word" style={{ color: cycleColor(i) }}>{w}</span>
                ))}
              </span>
            </span>
          </h1>
        )}

        {variant === 'gradient' && (
          <h1 className="hero-title hero-title-static">
            <span className="line">Thoughts that should</span>
            <span className="line">remain <em>unresolved.</em></span>
          </h1>
        )}

        {variant === 'static' && (
          <h1 className="hero-title hero-title-static">
            <span className="line">Hakuna<i>—</i></span>
            <span className="line">matata.</span>
          </h1>
        )}

        <p className="hero-sub reveal in" style={{ transitionDelay: '600ms' }}>
          A low-cortisol company started just outside Palo Alto, for thoughts
          that should remain expensive and unresolved. Built for founders,
          capital, and beautiful situations not yet burdened by product,
          revenue, or the administrative mood of being specific.
        </p>

        <div className="hero-ctas reveal in" style={{ transitionDelay: '800ms' }}>
          <a href="#thesis" className="btn btn-primary magnetic">
            Read the Thesis <span className="btn-arrow">→</span>
          </a>
          <a href="#vcs" className="btn btn-ghost magnetic">
            Review the Opportunity
          </a>
        </div>

        <div className="hero-tags reveal in" style={{ transitionDelay: '1000ms' }}>
          {['Founder-safe', 'Always ambient', 'Taste-led', 'Diligence-light', 'Low cortisol'].map((t) => (
            <span key={t} className="hero-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="hero-scroll reveal in" style={{ transitionDelay: '1200ms' }}>
        <span>Day 100 · Still unbothered · Just outside Palo Alto</span>
        <span className="scroll-arrow">↓</span>
      </div>

      <style>{heroStyles}</style>
    </section>
  );
}

function cycleColor(i) {
  const colors = ['var(--accent)', 'var(--accent-2)', 'var(--accent-3)', 'var(--accent)', 'var(--ink)'];
  return colors[i % colors.length];
}

function Letter({ children, delay = 0 }) {
  return (
    <span className="letter" style={{ animationDelay: `${delay}ms` }}>{children}</span>
  );
}

function Cloud({ top, delay, duration, small }) {
  return (
    <div className={`cloud ${small ? 'cloud-sm' : ''}`} style={{
      top, animationDelay: `-${delay}s`, animationDuration: `${duration}s`,
    }}>
      <svg viewBox="0 0 200 80" fill="none">
        <ellipse cx="50" cy="50" rx="42" ry="22" fill="currentColor" opacity=".55" />
        <ellipse cx="100" cy="40" rx="55" ry="32" fill="currentColor" opacity=".55" />
        <ellipse cx="150" cy="50" rx="38" ry="22" fill="currentColor" opacity=".55" />
      </svg>
    </div>
  );
}

const heroStyles = `
.hero {
  position: relative;
  min-height: 100vh;
  padding: 140px var(--gutter) 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  will-change: transform;
}
.hero-clouds {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  color: #fff;
}
[data-theme="dusk"] .hero-clouds { color: #2a3a32; }
.cloud {
  position: absolute;
  width: 280px;
  left: -300px;
  animation: drift linear infinite;
  filter: blur(2px);
}
.cloud-sm { width: 180px; }
@keyframes drift {
  from { transform: translateX(0); }
  to { transform: translateX(calc(100vw + 300px)); }
}
.hero-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
}
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border-radius: 999px;
  background: color-mix(in oklab, var(--bg) 70%, var(--ink) 5%);
  border: 1px solid var(--ink-line);
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
}
.hero-eyebrow .dot {
  width: 8px; height: 8px;
  background: var(--accent);
  border-radius: 50%;
  animation: blink 2s ease-in-out infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
.hero-title {
  font-family: var(--display);
  font-weight: 300;
  font-style: normal;
  font-size: clamp(54px, 11vw, 168px);
  line-height: 0.92;
  letter-spacing: -0.04em;
  color: var(--ink);
  margin: 8px 0;
}
.hero-title .line {
  display: block;
  overflow: hidden;
}
.hero-title .letter {
  display: inline-block;
  opacity: 0;
  transform: translateY(100%);
  animation: letterIn 0.9s cubic-bezier(.2,.7,.2,1) forwards;
}
.hero-title em, .hero-title i {
  font-style: italic;
  color: var(--accent);
}
@keyframes letterIn {
  to { opacity: 1; transform: none; }
}
.cycle-line {
  display: block;
  height: 1em;
  position: relative;
  overflow: hidden;
}
.cycle-track {
  display: flex;
  flex-direction: column;
  transition: transform .8s cubic-bezier(.7,0,.2,1);
}
.cycle-word {
  font-style: italic;
  height: 1em;
  display: block;
  line-height: 1;
}
.hero-title-static .line:nth-child(2) { padding-left: 0.6em; font-style: italic; }
.hero-sub {
  font-size: clamp(17px, 1.5vw, 21px);
  line-height: 1.5;
  max-width: 620px;
  color: var(--ink-soft);
  text-wrap: pretty;
}
.hero-ctas {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.hero-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 12px;
}
.hero-tag {
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid var(--ink-line);
  background: color-mix(in oklab, var(--bg) 50%, transparent);
  font-size: 12.5px;
  color: var(--ink-soft);
  font-family: var(--mono);
  letter-spacing: 0.02em;
}
.hero-scroll {
  position: relative;
  z-index: 2;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-faint);
  border-top: 1px solid var(--ink-line);
  padding-top: 20px;
}
.scroll-arrow {
  animation: bounce 2s ease-in-out infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}
`;

window.KineticHero = KineticHero;
