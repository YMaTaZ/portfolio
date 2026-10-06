// KKH 案例页
import { Shell, CaseHead, Section, RevealList, Takes, Gallery, NextCase } from '../site/parts.jsx';
import { Reveal } from '../shared/shared.jsx';
import { eodd, kkh } from '../shared/content.js';

const two = i => String(i + 1).padStart(2, '0');

export default function Kkh() {
  return (
    <Shell current="work">
      <CaseHead c={kkh} />

      <Section id="k1" n="01 · 背景" title={kkh.context.h} lead={kkh.context.lead}>
        <Reveal className="x-prose">{kkh.context.p.map(p => <p key={p}>{p}</p>)}</Reveal>
      </Section>

      <Section id="k2" n="02 · 方法" title="Read → Understand → Act" lead="三步框架把「读数据」变成「做决定」，三件套把它装进晨会。">
        <ol className="x-phases">{kkh.framework.map(([k, t, d]) => <li key={k}><span>{k}</span><b>{t}</b><p>{d}</p></li>)}</ol>
        <h3 className="x-h3">三件套</h3>
        <RevealList rows={kkh.kit} />
      </Section>

      <Section id="k3" n="03 · 故事板" title="七帧，一个护士的早晨" lead="从「淹没在数据里」到「带着一个动作走进晨会」的全程。">
        <div className="x-block">
          <Gallery
            height={480}
            label="故事板"
            items={kkh.board.map(b => ({ image: b.img, label: b.t, alt: b.alt }))}
            captions={kkh.board.map((b, i) => (
              <p key={b.t} className="x-capboard"><span>{two(i)} / 07</span><b>{b.t}</b>{b.d}</p>
            ))}
          />
        </div>
        <ol className="x-boardlist" aria-label="七帧文字版">
          {kkh.board.map((b, i) => <li key={b.t}><span>{two(i)}</span> {b.t}：{b.d}</li>)}
        </ol>
      </Section>

      <Section id="k4" n="04 · 迭代" title="五版原型，留下一张卡" lead="Vibe coding 让每一版在一天内成型；淘汰谁，由访谈里的「晨会前五分钟」决定。">
        <RevealList rows={[
          ['A1–A4', '四版原型', '未保留'],
          ['A5', 'Morning Huddle Brief Card · 晨会简报卡', '保留，进入临床使用']
        ]} />
      </Section>

      <Section id="k5" n="05 · 界面" title="界面与落地" lead="用 AI 做设计的成果证据：洞察被做成真实可用的产品界面。">
        <div className="x-block">
          <Gallery
            height={520}
            label="界面截图"
            items={kkh.shots.map(s => ({ image: s.img, label: s.t, alt: s.alt }))}
            captions={kkh.shots.map(s => <p key={s.t} className="x-cap"><b>{s.t}。</b>{s.d}</p>)}
          />
        </div>
      </Section>

      <Section id="k6" n="06 · 取舍" title="三个设计取舍">
        <blockquote className="x-pull">{kkh.pull}</blockquote>
      </Section>
      <Takes items={kkh.takes} />

      <NextCase c={eodd} />
    </Shell>
  );
}
