// Site shell + composed parts.
// Main design language: Darkroom (scheme 03).
//   FlowingMenu · ScrollStack · ThoughtLine · CountUp
// Kept from other schemes:
//   AccordionGallery (02, screenshot interaction) · AnimatedList (04, list reveal) · GradualBlur (05, page-bottom fade)
import { useEffect, useState } from 'react';
import AccordionGallery from '../rb/AccordionGallery.jsx';
import AnimatedList from '../rb/AnimatedList.jsx';
import ScrollStack, { ScrollStackItem } from '../rb/ScrollStack.jsx';
import GradualBlur from '../rb/GradualBlur.jsx';
import { ExtLink, prefersReduced } from '../shared/shared.jsx';
import { EMAIL } from '../shared/content.js';

/* ---------- Shell: header, footer, page-bottom blur ---------- */
const NAV = [
  { key: 'work', label: '作品', href: 'index.html#work' },
  { key: 'about', label: '关于', href: 'about.html' }
];

export function Shell({ current, children }) {
  return (
    <>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <header className="x-head x-wrap">
        <a href="index.html" className="x-brand" aria-current={current === 'home' ? 'page' : undefined}>作品集</a>
        <nav aria-label="主导航" className="x-nav">
          {NAV.map(n => (
            <a key={n.key} href={n.href} aria-current={current === n.key ? 'page' : undefined}>{n.label}</a>
          ))}
          <a href={`mailto:${EMAIL}`}>联系</a>
        </nav>
      </header>
      <main id="main" tabIndex={-1}>{children}</main>
      <footer className="x-foot x-wrap"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></footer>
      {/* Static visual fade only (no motion), pointer-events: none */}
      <GradualBlur preset="subtle" target="page" position="bottom" zIndex={20} />
    </>
  );
}

/* ---------- AccordionGallery with caption that follows the active panel ---------- */
function useNarrow(q = '(max-width: 767px)') {
  const [m, setM] = useState(() => window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const h = () => setM(mq.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, [q]);
  return m;
}

export function Gallery({ items, captions, height = 480, label, ratio }) {
  const narrow = useNarrow();
  const [active, setActive] = useState(0);
  const track = e => {
    const p = e.target.closest('.ag-panel');
    if (p) setActive([...p.parentNode.children].indexOf(p));
  };
  return (
    <div className="x-gal" onMouseOver={track} onFocus={track}>
      <AccordionGallery
        items={items}
        defaultIndex={0}
        height={height}
        gap={8}
        radius={2}
        expandRatio={ratio ?? (items.length > 3 ? 0.6 : 0.66)}
        orientation={narrow ? 'vertical' : 'horizontal'}
        tilt={0}
        parallax={0}
        grayscale
        showLabels={false}
        overlayColor="#141414"
        accentColor="#E8E6E1"
        duration={prefersReduced ? 0 : 0.55}
        className="x-ag"
      />
      <p className="sr-only">{label}：悬停或用方向键切换，当前图片恢复彩色。</p>
      <div className="x-gal__cap" aria-live="polite">{captions[active]}</div>
    </div>
  );
}

/* ---------- AnimatedList: rows reveal one by one (once) ---------- */
export function RevealList({ rows }) {
  const items = rows.map(([n, t, d]) => (
    <span className="x-al" key={`${n}-${t}`}>
      <span className="x-al__n">{n}</span>
      <span><b>{t}</b>{d && <span className="x-al__d">{d}</span>}</span>
    </span>
  ));
  if (prefersReduced) return <ol className="x-al-static">{items.map((it, i) => <li key={i}>{it}</li>)}</ol>;
  return (
    <AnimatedList
      items={items}
      showGradients={false}
      enableArrowNavigation={false}
      displayScrollbar={false}
      className="x-list"
      itemClassName="x-list__item"
    />
  );
}

/* ---------- ScrollStack: design trade-offs stack on scroll ---------- */
export function Takes({ items }) {
  if (prefersReduced) {
    return (
      <ol className="x-takes-static x-wrap">
        {items.map(([t, d], i) => <li key={t} className="x-take"><span>{String(i + 1).padStart(2, '0')} / 0{items.length}</span><b>{t}</b><p>{d}</p></li>)}
      </ol>
    );
  }
  return (
    <ScrollStack useWindowScroll itemDistance={80} itemScale={0.02} itemStackDistance={24} stackPosition="18%" scaleEndPosition="8%" baseScale={0.92} rotationAmount={0} blurAmount={0} className="x-stack">
      {items.map(([t, d], i) => (
        <ScrollStackItem key={t} itemClassName="x-take">
          <span>{String(i + 1).padStart(2, '0')} / 0{items.length}</span>
          <b>{t}</b>
          <p>{d}</p>
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
}

/* ---------- Case header ---------- */
export function CaseHead({ c }) {
  return (
    <header className="x-casehead x-wrap">
      <nav className="x-crumb" aria-label="面包屑">
        <a href="index.html#work">作品</a><span aria-hidden="true">/</span><span aria-current="page">CASE {c.no}</span>
      </nav>
      <p className="x-label">{c.status}</p>
      <h1 className="x-h1">{c.title}</h1>
      <p className="x-lead">{c.lede}</p>
      <dl className="x-meta">{c.meta.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
      <p className="x-links">{c.links.map(l => <ExtLink key={l.href} href={l.href} className="x-link">{l.label} ↗</ExtLink>)}</p>
    </header>
  );
}

export function Section({ id, n, title, lead, children, className = '' }) {
  return (
    <section className={`x-sec x-wrap ${className}`} aria-labelledby={id}>
      <p className="x-label">{n}</p>
      <h2 id={id} className="x-h2">{title}</h2>
      {lead && <p className="x-lead2">{lead}</p>}
      {children}
    </section>
  );
}

export function NextCase({ c }) {
  return (
    <nav className="x-next x-wrap" aria-label="下一个案例">
      <span className="x-label">NEXT · CASE {c.no}</span>
      <a href={`${c.id}.html`}>{c.title} <span aria-hidden="true">→</span></a>
    </nav>
  );
}
