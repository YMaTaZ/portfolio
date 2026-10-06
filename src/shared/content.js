// Single source of portfolio content, taken verbatim from site-v2.
// All five schemes render this same data; only presentation differs.

export const EMAIL = 'Yachin.HCD@outlook.com';

export const hero = {
  eyebrow: '人本 AI 设计 · 产品与体验',
  title: ['既懂怎么设计 AI，', '也懂怎么用 AI 设计'],
  sub: '把不透明的 AI 决策做成人能读懂、能干预的过程；再用 AI 把研究洞察做成机构真的在用的产品。'
};

export const stats = [
  { k: '可解释性 · Cohen’s d', v: '1.61', num: 1.61, dec: 2 },
  { k: '更偏好 EODD', v: '76.2%', num: 76.2, dec: 1, unit: '%' },
  { k: '专家可行性', v: '5.66 / 7', num: 5.66, dec: 2, unit: ' / 7' },
  { k: '心理负担差异', v: 'p = .37', num: 0.37, dec: 2, prefix: 'p = ' }
];

export const method = [
  { n: '01', t: 'Vibe coding', d: '原型在一天内跑起来，用真实交互去验证假设，不停在静态稿上争论。' },
  { n: '02', t: 'AI 辅助设计', d: '用 AI 统一界面、文案与组件，把一个人的产出拉到小团队的完整度。' },
  { n: '03', t: '判断留给人', d: '哪一版值得留下，由访谈和数据决定。AI 带来速度，取舍仍然靠研究。' }
];

export const about = {
  p: [
    '先在实验室待了四年，学怎么验证一个假设；再到设计学院，学怎么理解一个人。',
    '化学留下的，是对「证据是什么」的追问；人本设计给的，是「这对谁有意义」的视角。两样都长在现在的工作方式里：为 AI 做设计时，追问判断从何而来；用 AI 做设计时，追问它最终被谁用起来。'
  ],
  facts: [
    ['学历', 'SUTD 人本设计硕士（2026 届）'],
    ['本科', '应用化学学士'],
    ['发表', 'Design Science Journal'],
    ['落地', '新加坡 KK 妇幼医院'],
    ['方向', 'AI 产品 · UX · 设计']
  ]
};

export const eodd = {
  id: 'eodd',
  no: '01',
  title: 'EODD · 可解释 AI 决策系统',
  short: 'EODD',
  status: '已发表 · Design Science Journal',
  desc: '把单体 AI 的黑箱决策拆成四角色编排、可审计的判断过程。负责 N=16 用户对比研究与实证分析。',
  marquee: 'Design Science Journal · d = 1.61 · N = 16',
  image: 'img/ui-shots/eodd-studio-hero.png',
  lede: '以七步 EODD 设计法、四角色多智能体编排和可审计决策轨迹，把单体 AI 的不透明决策，做成可以被理解、被审查的判断过程。',
  meta: [
    ['角色', '研究团队成员 · 论文合著者'],
    ['负责', 'N=16 用户对比研究与实证分析'],
    ['机构', 'SUTD'],
    ['发表', 'Design Science Journal']
  ],
  links: [
    { label: '在线体验 EODD Studio', href: 'https://eodd.studio/' },
    { label: '阅读论文 PDF', href: 'assets/EODD_Design_Science_Paper.pdf' }
  ],
  problem: {
    h: '黑箱决策，风险落在三个方向',
    lead: '当一个系统替人做出判断，却说不清判断从何而来，安全、问责与监管会同时出问题。',
    p: [
      'LLM 已经进入医疗诊断、金融风控、法律推理等高风险场景。单体架构意味着一次决策由单个模型一口气生成，出错时无法理解原因，也无从干预、难以追责。',
      '现有可解释性方法（LIME、SHAP 等）大多是对模型行为的事后近似，解释的是「模型可能怎么想」，而非「这次究竟怎么判断」。要让人真正信任并监督一个决策系统，需要可追溯、可干预的推理过程。'
    ]
  },
  steps: [
    ['决策情境定义', '明确这次决策在什么场景、依据什么标准、对谁负责。'],
    ['决策分解', '把一个复合判断拆成若干可独立检验的子问题。'],
    ['专用角色分配', '为每个子问题指派一个专用 LLM 角色。'],
    ['编排规则', '规定角色之间谁先谁后、如何交叉验证。'],
    ['决策综合', '汇总裁决，并记录分歧所在。'],
    ['决策轨迹生成', '输出完整、可审计的推理链路。'],
    ['人工审查集成', '最终判断权交回人，系统只负责解释与提示。']
  ],
  roles: [
    ['Reasoner', '推理者', '基于证据给出初步判断，是决策的主要生产者。'],
    ['Checker', '检查者', '校验推理链每一步是否站得住，专挑漏洞。'],
    ['Ethics Reviewer', '伦理审查者', '从公平、隐私、影响面等角度提出异议。'],
    ['Explainer', '解释者', '把整条轨迹翻译成人能读懂的说明。']
  ],
  phases: [
    ['Phase 1', '专家启发式评估', '领域专家判断流程是否可行、解释是否成立。', 'N = 5'],
    ['Phase 2', '规模化可行性', 'LLM-as-Experts 在更大样本上检验稳定性。', 'N = 100'],
    ['Phase 3', '用户对比研究', '对照实验，比较 EODD 与基线系统在各维度上的表现。', 'N = 16']
  ],
  pull: '让黑箱变透明，靠的是重排整个决策过程，而非外加一层解释。',
  takes: [
    ['先把贡献边界说清楚', '这个项目里的角色是研究协作与实证分析，方法论由团队共同提出。如实标注分工，比写成「主导」更经得起追问。'],
    ['可解释不等于全部摊开', '毫无筛选地展示整条推理链，只会淹没使用者。真正起作用的是四角色分工和最后的人工审查，它把「看懂」变成了「能干预」。'],
    ['方法有边界', 'EODD 适合需要审计的高风险场景；对低风险、快节奏的日常决策，七步流程很可能是过度设计。知道它什么时候不该用，和方法本身一样重要。']
  ],
  paper: {
    title: 'Explicit Orchestrated Decision Design (EODD): A Design Science Method for Human-Centred, Interpretable AI Decision Systems',
    authors: 'Nizam Kadir, Jamie Lorenzo Rayos, Tang Ming Hong (Cyril), Ma Zhen, Yuan Ye',
    src: 'Design Science Journal · Cambridge University Press · SUTD'
  }
};

export const effects = [
  { k: '可解释性', d: 1.61 },
  { k: '可信度', d: 1.47 },
  { k: '错误发现信心', d: 1.18 }
];

export const kkh = {
  id: 'kkh',
  no: '02',
  title: 'KKH PREMs Translation Toolkit',
  short: 'KKH',
  status: '已在 KK 妇幼医院使用',
  desc: '48 天、5 版原型，把患者体验数据翻译成晨会上的一个动作，被新加坡 KK 妇幼医院采纳。',
  marquee: 'KK 妇幼医院 · 48 天 · 5 版原型 · A5 晨会简报卡',
  image: 'img/ui-shots/01-prems-site.png',
  lede: '把患者体验反馈（PREMs）转成病房日常改进：Read → Understand → Act 三步框架，加上 Resource Guide / Checklist / Storyboard 三件套，被医院正式采纳。',
  meta: [
    ['采纳方', '新加坡 KK 妇幼医院'],
    ['周期', '约 48 天（06-11 → 07-29）'],
    ['过程', '5 版原型 · Vibe coding + AI 辅助设计'],
    ['状态', '进入临床实践']
  ],
  links: [{ label: '查看工具包网站', href: 'https://ymataz.github.io/kkh-prems-toolkit/' }],
  context: {
    h: '数据摆在那儿，不等于被用起来',
    lead: '病房每天面对满屏的体验数据看板，「看完之后该做什么」往往没有答案。',
    p: [
      '数据与行动之间，缺的是一套翻译：把数字翻译成一次晨会能落地的动作。',
      '访谈对象覆盖三类角色：医院负责人、护士长、医生，同周同一天，每人不超过 30 分钟。三方的困境高度一致：时间被压缩在晨会前后，需要的是「今天先做什么」，而非更多信息。'
    ]
  },
  framework: [
    ['Step 01', 'Read · 读', '先看整体看板，不急于下判断。'],
    ['Step 02', 'Understand · 找焦点', '把维度分成「保持优势」与「改进重点」，锁定一个焦点。'],
    ['Step 03', 'Act · 行动', '把一个焦点转成晨会上一个可执行、可复检的动作。']
  ],
  kit: [
    ['A', 'Resource Guide · 7 段走读', '讲清怎么读看板、怎么找到焦点。'],
    ['B', 'Checklist · 4 步清单', '把一次改进拆成可打勾的四个动作。'],
    ['C', 'Storyboard · 7 帧情景', '画出一线护士的真实一天，让方法可被共情。']
  ],
  board: [
    ['Too Much Data', '满屏看板，不知道晨会该带什么。', '一位护士面对两块满屏数据的看板'],
    ['Find the Guide', '一条从「读」到「行动」的路径。', '一条从阅读到行动的清晰路径'],
    ['Find the Focus', '分成「保持优势」和「改进重点」。', '把维度分成保持优势与改进重点'],
    ['Find the Printable Checklist', '焦点变成一个动作。', '把焦点变成一个可执行动作'],
    ['Print It', '打印出来，带进晨会。', '打印清单'],
    ['Check It', '一个优先级，一个动作。', '一个优先级一个动作'],
    ['Act Together', '达成一致、分工、复检。', '团队达成一致并分工']
  ].map(([t, d, alt], i) => ({ t, d, alt: `故事板 ${i + 1}：${alt}，标题为 ${t}。`, img: `img/kkh-storyboard/${i + 1}.jpg`, w: 1440, h: 810 })),
  iteration: '五版原型（A1–A5），保留 A5 · Morning Huddle Brief Card 晨会简报卡。',
  shots: [
    { img: 'img/ui-shots/01-prems-site.png', w: 1440, h: 1100, t: '工具站封面 · PX Dashboard Translation Toolkit', d: '从数据看板一路走到一线行动清单，导航、三件套与三步流程同屏。', alt: 'PX Dashboard Translation Toolkit 工具站封面：左侧导航、三件套卡片与 Read / Understand / Act 三步流程。' },
    { img: 'img/ui-shots/03-px-dashboard.jpg', w: 1440, h: 1500, t: 'PX 看板 · Quantitative Insight', d: 'Recommendation 72.1% Top Box、趋势折线与样本量同屏。', alt: 'PX 看板界面：Recommendation Score 指标、Top Box 趋势折线与响应量统计。' },
    { img: 'img/ui-shots/04-website-framework.png', w: 1440, h: 1000, t: 'Qualitative Feedback · Verbatims', d: '定性反馈归成主题、标出变化趋势，并直接提示该怎么用。', alt: 'Qualitative Feedback（Verbatims）仪表盘：主题表、变化趋势与使用提示。' }
  ],
  pull: '把一个研究洞察，做成医院真的用起来的东西。',
  takes: [
    ['先问谁、什么时候会用它', '同样是看板，负责人关心趋势、护士长关心排班、护士只关心「今天先做什么」。三十分钟的访谈，比多画十版界面更能定方向。'],
    ['AI 驱动速度，判断留给人', 'Vibe coding 让一个原型一天内成型，但哪个原型值得留下仍是人的判断。5 版里淘汰掉的，比留下的更有说服力。'],
    ['被采纳只是开始', '真正的考验在三个月后：护士是否还在打印那张清单。这决定了它停在「一个交付物」，还是长成「一个习惯」。']
  ]
};

export const cases = [eodd, kkh];
