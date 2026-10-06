// Shared, scheme-agnostic pieces.
// - Reveal: wraps react-bits FadeContent; renders final state under reduced motion.
// - Neutral chart substitutes (repo has no chart components): 1px lines + flat blocks.
//   Colours come from CSS custom properties so each scheme restyles them.
import FadeContent from '../rb/FadeContent.jsx';

export const prefersReduced =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function Reveal({ children, className = '', delay = 0, ...rest }) {
  if (prefersReduced) return <div className={className}>{children}</div>;
  return (
    <FadeContent blur={false} duration={600} ease="power3.out" delay={delay} threshold={0.12} className={className} {...rest}>
      {children}
    </FadeContent>
  );
}

/* ---------- Neutral substitute: effect-size bars (F1) ---------- */
export function EffectBars({ data, max = 2 }) {
  return (
    <figure className="nc nc-bars">
      <div className="nc-bars__rows">
        {data.map(r => (
          <div className="nc-bars__row" key={r.k}>
            <span className="nc-bars__k">{r.k}</span>
            <span className="nc-bars__track">
              <span className="nc-bars__fill" style={{ width: `${(r.d / max) * 100}%` }} />
              {[0.2, 0.5, 0.8].map(g => (
                <span key={g} className="nc-bars__guide" style={{ left: `${(g / max) * 100}%` }} />
              ))}
            </span>
            <span className="nc-bars__v">{r.d.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <figcaption className="nc-cap">Cohen’s d · 竖线为 0.2 / 0.5 / 0.8 效应基准 · 横轴 0–2.0</figcaption>
    </figure>
  );
}

/* ---------- Neutral substitute: preference share (F2) ---------- */
export function ShareBar({ value = 76.2, label = '更偏好 EODD' }) {
  return (
    <figure className="nc nc-share">
      <span className="nc-share__track">
        <span className="nc-share__fill" style={{ width: `${value}%` }} />
      </span>
      <figcaption className="nc-cap">
        {label} {value}% · 其余 {(100 - value).toFixed(1)}%
      </figcaption>
    </figure>
  );
}

/* ---------- Neutral substitute: p-value axis (F3) ---------- */
export function PAxis({ p = 0.37, alpha = 0.05 }) {
  return (
    <figure className="nc nc-p">
      <span className="nc-p__axis">
        <span className="nc-p__alpha" style={{ width: `${alpha * 100}%` }} />
        <span className="nc-p__dot" style={{ left: `${p * 100}%` }} />
      </span>
      <span className="nc-p__ticks">
        <span>0</span>
        <span>α = .05</span>
        <span>1</span>
      </span>
      <figcaption className="nc-cap">心理负担 p = .37，远在 α = .05 之外，差异不显著</figcaption>
    </figure>
  );
}

/* ---------- Neutral substitute: 7-point gauge (F4) ---------- */
export function Gauge({ value = 5.66, max = 7 }) {
  return (
    <figure className="nc nc-gauge">
      <span className="nc-gauge__segs">
        {Array.from({ length: max }, (_, i) => {
          const fill = Math.max(0, Math.min(1, value - i));
          return (
            <span key={i} className="nc-gauge__seg">
              <span style={{ width: `${fill * 100}%` }} />
            </span>
          );
        })}
      </span>
      <figcaption className="nc-cap">专家可行性 5.66 / 7 · 7 段量表</figcaption>
    </figure>
  );
}

/* ---------- Neutral substitute: sample sizes (F5) ---------- */
export function Samples({ phases }) {
  const max = 100;
  return (
    <figure className="nc nc-samples">
      {phases.map(([k, t, , n]) => {
        const v = parseInt(n.replace(/\D/g, ''), 10);
        return (
          <div className="nc-samples__row" key={k}>
            <span className="nc-samples__k">{t}</span>
            <span className="nc-samples__track">
              <span className="nc-samples__fill" style={{ width: `${Math.max(2, (v / max) * 100)}%` }} />
            </span>
            <span className="nc-samples__v">{n}</span>
          </div>
        );
      })}
      <figcaption className="nc-cap">三段式验证样本量 · 先专家、再规模化、后用户实证</figcaption>
    </figure>
  );
}

export function ExtLink({ href, children, className = '' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only">（外部链接，新标签页打开）</span>
    </a>
  );
}
