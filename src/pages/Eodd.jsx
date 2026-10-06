// EODD 案例页
import ThoughtLine from '../rb/ThoughtLine.jsx';
import CountUp from '../rb/CountUp.jsx';
import { Shell, CaseHead, Section, RevealList, Takes, Gallery, NextCase } from '../site/parts.jsx';
import { Reveal, ShareBar, PAxis, Gauge, Samples, prefersReduced } from '../shared/shared.jsx';
import { eodd, kkh, effects } from '../shared/content.js';

export default function Eodd() {
  return (
    <Shell current="work">
      <CaseHead c={eodd} />

      <div className="x-wrap x-cover">
        <Gallery
          height={460}
          ratio={0.8}
          label="EODD Studio 界面"
          items={[{ image: eodd.image, label: 'EODD Studio', alt: 'EODD Studio 首页截图' }]}
          captions={[<p key="c" className="x-cap"><b>EODD Studio。</b>七步法与四角色编排的在线演示，见 eodd.studio。</p>]}
        />
      </div>

      <Section id="c1" n="01 · 问题" title={eodd.problem.h} lead={eodd.problem.lead}>
        <Reveal className="x-prose">{eodd.problem.p.map(p => <p key={p}>{p}</p>)}</Reveal>
      </Section>

      <Section id="c2" n="02 · 方法" title="七步法：把一次决策拆开" lead="每一步都可分配、可编排、可审查。第 07 步把最终判断权交回人。">
        <RevealList rows={eodd.steps.map(([t, d], i) => [String(i + 1).padStart(2, '0'), t, d])} />
      </Section>

      <Section id="c3" n="03 · 架构" title="四角色多智能体架构" lead="一次决策在四个角色之间依次流转，最后收在人工审查。">
        <div className="x-trace">
          <ThoughtLine
            label="Orchestrating…"
            doneLabel="Decision trace · 4 roles → human review"
            showTimer={false}
            glyph="dot"
            shimmer={false}
            working={!prefersReduced}
            settleAfter={4.2}
            collapseOnSettle={false}
            collapsible
            color="#E8E6E1"
            glyphColor="#8C8A85"
            fontSize={15}
            steps={eodd.roles.map(([en, cn, d]) => `${en} · ${cn}：${d}`).concat('Human review · 人工审查：最终判断权交回人。')}
          />
        </div>
      </Section>

      <Section id="c4" n="04 · 验证" title="三段式验证" lead="先请专家看，再上规模评估，最后做用户实证。用户实证这一段由本人负责设计与分析。">
        <ol className="x-phases">{eodd.phases.map(([k, t, d, n]) => <li key={k}><span>{k}</span><b>{t}</b><p>{d}</p><em>{n}</em></li>)}</ol>
      </Section>

      <Section id="c5" n="05 · 结果" title="三项效应量均为大效应" lead="N = 16 用户对比研究，Cohen’s d，横轴 0–2.0。">
        <div className="x-effects">
          {effects.map(e => (
            <div key={e.k}>
              <p className="x-effects__v">
                <span className="sr-only">{e.d.toFixed(2)}</span>
                <span aria-hidden="true">{prefersReduced ? e.d.toFixed(2) : <CountUp to={e.d} duration={1.4} />}</span>
              </p>
              <p className="x-effects__k">{e.k}</p>
              <span className="x-effects__bar" aria-hidden="true"><i style={{ width: `${(e.d / 2) * 100}%` }} /><s style={{ left: '40%' }} /></span>
            </div>
          ))}
        </div>
        <p className="x-cap">竖线为大效应基准 0.8。图表为中性替代处理：仓库无图表组件。</p>
        <div className="x-figs">
          <figure><figcaption className="x-fig">76.2% 更偏好 EODD</figcaption><ShareBar value={76.2} /></figure>
          <figure><figcaption className="x-fig">解释力没有换来认知代价</figcaption><PAxis /></figure>
          <figure><figcaption className="x-fig">专家可行性 · N = 5</figcaption><Gauge /></figure>
          <figure><figcaption className="x-fig">三段式验证的样本</figcaption><Samples phases={eodd.phases} /></figure>
        </div>
      </Section>

      <Section id="c6" n="06 · 取舍" title="三个设计取舍">
        <blockquote className="x-pull">{eodd.pull}</blockquote>
      </Section>
      <Takes items={eodd.takes} />

      <Section id="c7" n="07 · 论文" title="论文" className="x-sec--tight">
        <div className="x-cite">
          <p lang="en"><i>{eodd.paper.title}</i></p>
          <p lang="en">{eodd.paper.authors}</p>
          <p lang="en" className="x-muted">{eodd.paper.src}</p>
        </div>
      </Section>

      <NextCase c={kkh} />
    </Shell>
  );
}
