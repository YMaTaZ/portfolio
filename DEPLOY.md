# 部署 · GitHub Pages

仓库：`YMaTaZ/portfolio`
线上地址：https://ymataz.github.io/portfolio/

## 工作方式

推送到 `main` 后，`.github/workflows/pages.yml` 自动执行 `npm ci` → `npm run build`，把 `dist/` 发布到 Pages。Pages 的 Source 设为 **GitHub Actions**。

全站使用相对路径（Vite `base: './'`），子路径和自定义域名都无需改代码。

## 更新

```powershell
git add <改动的文件>
git commit -m "说明"
git push
```

在仓库 Actions 页可看到构建进度，1 到 3 分钟后生效。

## 本地预览

```powershell
npm install
npm run build
npx vite preview
```

## 自定义域名（预留）

以 `yachin.design` 为例，`yachin.cn` 同理。

**DNS**：

| 类型 | 主机 | 值 |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | ymataz.github.io |

**仓库**：新建 `public/CNAME`，内容一行 `yachin.design`（放在 `public/` 下，构建时会被复制到 `dist/` 根目录）。推送后到 Settings → Pages 确认 Custom domain，DNS 检查通过后勾选 *Enforce HTTPS*。

- `ymataz.github.io` 用户站点若也绑定了域名，两者不能用同一个。
- `.cn` 域名在中国大陆解析通常要求实名认证。
