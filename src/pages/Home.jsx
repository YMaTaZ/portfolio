// 首页：定位 → 作品索引 (FlowingMenu + 截图画廊 AccordionGallery) → 关键数字 (CountUp) → 去关于页
import FlowingMenu from '../rb/FlowingMenu.jsx';
import CountUp from '../rb/CountUp.jsx';
import { Shell, Gallery, RevealList } from '../site/parts.jsx';
import { prefersReduced } from '../shared/shared.jsx';
import { EMAIL, hero, stats, method, eodd, kkh } from '../shared/content.js';

const cases = [eodd, kkh];

function Stat({ s }) {
  return (
    <div>
      <dt>{s.k}</dt>
      <dd>
        <span className="sr-only">{s.v}</span>
        <span aria-hidden="true">
          {s.prefix}
          {/* p-value keeps its leading-dot notation, so it is shown as text instead of counting */}
          {prefersReduced || s.prefix ? s.v.replace(s.prefix || '', '').replace(s.unit || '', '') : <CountUp to={s.num} duration={1.4} />}
          {s.unit && <small>{s.unit}</small>}
        </span>
      </dd>
    </div>
  );
}

export default function Home() {
  return (
    <Shell current="home">
      <section className="x-hero x-wrap" aria-labelledby="hero-h">
        <p className="x-label">{hero.eyebrow}</p>
        <h1 id="hero-h" className="x-display">{hero.title[0]}<br />{hero.title[1]}</h1>
        <p className="x-sub">{hero.sub}</p>
        <a className="x-mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </section>

      <section id="work" className="x-work" aria-labelledby="work-h">
        <h2 id="work-h" className="x-label x-wrap">作品 · 0{cases.length}</h2>
        <div className="x-flow">
          <FlowingMenu
            items={cases.map(c => ({ link: `${c.id}.html`, text: c.short === 'KKH' ? 'KKH PREMs Toolkit' : 'EODD', marquee: c.marquee, image: '' }))}
            speed={30}
            textColor="#E8E6E1"
            bgColor="#141414"
            marqueeBgColor="#E8E6E1"
            marqueeTextColor="#141414"
            borderColor="rgba(255,255,255,.1)"
          />
        </div>

        <div className="x-wrap x-work__gal">
          <Gallery
            height={500}
            label="案例截图"
            items={cases.map(c => ({ image: c.image, label: c.title, alt: `${c.title} 界面截图`, link: `${c.id}.html` }))}
            captions={cases.map(c => (
              <a key={c.id} href={`${c.id}.html`} className="x-capcase">
                <span className="x-capcase__n">{c.no}</span>
                <span className="x-capcase__t">{c.title}</span>
                <span className="x-capcase__d">{c.desc}</span>
                <span className="x-capcase__s">{c.status} · 阅读案例 →</span>
              </a>
            ))}
          />
        </div>
      </section>

      <section className="x-sec x-wrap" aria-labelledby="nums-h">
        <h2 id="nums-h" className="x-label">EODD · 研究结果</h2>
        <dl className="x-stats">{stats.map(s => <Stat key={s.k} s={s} />)}</dl>
      </section>

      <section className="x-sec x-wrap" aria-labelledby="method-h">
        <h2 id="method-h" className="x-label">工作方式</h2>
        <RevealList rows={method.map(m => [m.n, m.t, m.d])} />
        <p className="x-more"><a className="x-link" href="about.html">关于背景与经历 →</a></p>
      </section>
    </Shell>
  );
}
