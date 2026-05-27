// App shell: nav, cursor, page composer, tweaks
const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

// ── Magnetic cursor ────────────────────────────────────────────────────────
function MagneticCursor() {
  const dotRef = useRefA(null);
  const ringRef = useRefA(null);

  useEffectA(() => {
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove);

    const onEnter = () => ringRef.current?.classList.add('hover');
    const onLeave = () => ringRef.current?.classList.remove('hover');
    const bind = () => {
      document.querySelectorAll('a, button, .magnetic, .conv, .faq-q, .behavior, .whyus-card').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    bind();
    const observer = new MutationObserver(bind);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

// ── Nav ────────────────────────────────────────────────────────────────────
function Nav({ active = 'home' }) {
  const [scrolled, setScrolled] = useStateA(false);
  useEffectA(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="index.html" className="nav-brand">
        <span className="nav-brand-mark" />
        <span>Hakunamatata</span>
      </a>
      <div className="nav-links">
        <a href="index.html" className={active === 'home' ? 'active' : ''}>Home</a>
        <a href="index.html#thesis">Thesis</a>
        <a href="index.html#vcs">Conversations</a>
        <a href="about.html" className={active === 'about' ? 'active' : ''}>About</a>
        <a href="pricing.html" className={active === 'pricing' ? 'active' : ''}>Pricing</a>
      </div>
      <a href="index.html#closing" className="nav-cta magnetic">Stay Close</a>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>© 2026 Hakunamatata · Just outside Palo Alto · Pre-seed, pre-product, pre-revenue · Day 100 unbothered.</div>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact, eventually</a>
      </div>
    </footer>
  );
}

// ── Reveal-on-scroll observer (global) ─────────────────────────────────────
function GlobalReveal() {
  useEffectA(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
      if (!el.classList.contains('in')) io.observe(el);
    });
    // Set --i on stagger children if not set
    document.querySelectorAll('.reveal-stagger').forEach((p) => {
      [...p.children].forEach((c, i) => {
        if (!c.style.getPropertyValue('--i')) c.style.setProperty('--i', i);
      });
    });
    return () => io.disconnect();
  }, []);
  return null;
}

window.MagneticCursor = MagneticCursor;
window.Nav = Nav;
window.Footer = Footer;
window.GlobalReveal = GlobalReveal;
