# Portfolio v3

人本 AI 设计作品集。React 19 + Vite 多页静态站，产物在 `dist/`，可直接部署到任意静态主机。

## 页面

| 文件 | 内容 |
| --- | --- |
| `index.html` | 首页：定位、作品索引、截图画廊、关键数字、工作方式 |
| `eodd.html` | EODD 可解释 AI 决策系统案例 |
| `kkh.html` | KKH PREMs Translation Toolkit 案例 |
| `about.html` | 关于：背景、履历、工作方式、案例入口 |

## 设计构成

主体为「暗房」：炭黑底 `#141414`、浅墨 `#E8E6E1`，无强调色，层级只靠明度、字号与间距。

组件来自本地 react-bits（e1bbb69），复制到 `src/rb/` 并重设参数：

| 组件 | 用途 |
| --- | --- |
| FlowingMenu | 首页作品索引，悬停滚动案例元信息 |
| AccordionGallery | 截图交互：默认黑白，激活的一张恢复彩色，图注跟随 |
| AnimatedList | 列表逐条展开（七步法、三件套、工作方式、履历） |
| ThoughtLine | EODD 四角色推理轨迹 |
| ScrollStack | 设计取舍随滚动叠起 |
| CountUp | 效应量与关键数字 |
| GradualBlur | 视口底部渐隐 |
| FadeContent | 正文段落入场 |

图表（F2–F5）为中性替代：仓库无图表组件，用 1px 线与单色块手写。

对上游源码的改动都在文件内注释为 `portfolio patch`：FlowingMenu 支持独立的滚动文字；AnimatedList 改为只播一次。

## 开发

```bash
npm install
npm run dev      # 本地开发
npm run build    # 输出 dist/
```

`prefers-reduced-motion` 下所有动画直接呈现终态；ScrollStack 退化为普通列表。

Contact: Yachin.HCD@outlook.com
