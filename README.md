# Shiyu Liu | Academic Homepage

这是一个可直接打开的英文个人学术主页。页面依次展示个人简介、论文、荣誉、学术活动和生活照片；联系方式位于首页照片下方。

## 本地打开

双击项目根目录的 `index.html`，或在浏览器中打开它。页面是纯静态 HTML/CSS/JavaScript，不需要安装 Node.js、npm 或启动服务器。照片、CV 和论文 PDF 使用项目内的相对路径，离线也能打开。

## 修改内容

- `index.html`：网页内容与链接
- `styles.css`：桌面和手机布局
- `site.js`：生活照片与文字的手动切换
- `figures/`：个人照片与生活照片
- `Shiyu_Liu_Academic_CV_v5.pdf`：个人 CV
- `public/papers/stable-matching-probabilistic-preferences.pdf`：论文 PDF
- `.github/workflows/deploy.yml`：GitHub Pages 自动发布

原有的 `src/`、`package.json` 和 `preview*.html` 是早期 Astro 版本，当前网页与部署流程不再使用它们。请打开根目录的 `index.html` 查看最新版本。

## 发布到 GitHub Pages

将项目推送到 `lsy999999999/lsy999999999.github.io` 仓库的 `main` 分支，然后在仓库的 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions**。工作流会自动发布 `index.html`、样式、照片、CV 和论文，完成后网址为 `https://lsy999999999.github.io/`。

若使用其他仓库名，GitHub Pages 网址会包含仓库路径。页面资源都是相对路径，同样可以打开。

ACL 2026 论文在页面中标为已录用，并有可打开的 PDF 链接。另有两篇 WWW 稿件明确标为 Submitted。发布前，请确认会议匿名评审政策和合作者意见允许公开在投稿件的标题与方向；若不允许，应先从 `index.html` 删除相应条目。同时确认 ACL 论文 PDF 可以公开分发，并核对奖项英文名称和个人资料。
