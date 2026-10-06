// 关于页
import { Shell, Section, RevealList } from '../site/parts.jsx';
import { Reveal } from '../shared/shared.jsx';
import { about, method, eodd, kkh } from '../shared/content.js';

export default function About() {
  return (
    <Shell current="about">
      <header className="x-casehead x-wrap">
        <p className="x-label">关于 · CHEM → HCD</p>
        <h1 className="x-h1">{about.p[0]}</h1>
      </header>

      <Section id="a1" n="01 · 背景" title="证据，与它对谁有意义">
        <Reveal className="x-prose x-prose--lg"><p>{about.p[1]}</p></Reveal>
      </Section>

      <Section id="a2" n="02 · 履历" title="学历与成果">
        <RevealList rows={about.facts.map(([k, v], i) => [String(i + 1).padStart(2, '0'), v, k])} />
      </Section>

      <Section id="a3" n="03 · 工作方式" title="AI 原生的工作方式">
        <RevealList rows={method.map(m => [m.n, m.t, m.d])} />
      </Section>

      <Section id="a4" n="04 · 作品" title="两个案例">
        <ul className="x-cases">
          {[eodd, kkh].map(c => (
            <li key={c.id}>
              <a href={`${c.id}.html`}>
                <span className="x-cases__n">{c.no}</span>
                <b>{c.title}</b>
                <span className="x-cases__d">{c.desc}</span>
                <span className="x-cases__s">{c.status} →</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </Shell>
  );
}
