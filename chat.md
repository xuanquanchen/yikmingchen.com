# Chat Log

## 0. 你要我做的事

- 时间: 2026-02-21
- 目标: 解释仓库结构, 并创建这份 chat 记录, 方便你按步骤读懂并改造网站

## 1. 这个仓库在做什么

这是一个使用 Vite + Vue + Vite SSG (静态站点生成) 的个人网站。页面内容主要由 Markdown 驱动, 配合 Vue 组件实现互动效果。样式系统使用 UnoCSS, 构建时通过自定义脚本生成 RSS、图片处理、重定向等。

## 2. 仓库地图 (简版)

- pages/ 主要页面内容, 大量使用 Markdown 作为页面源
- demo/ 演示内容的 Markdown
- src/ 前端应用入口与全局组件
- data/ 结构化数据 (如 talks、media)
- photos/ 照片数据与索引
- public/ 静态资源输出 (favicon、生成的 OG 图片等)
- scripts/ 构建与内容生成脚本
- \*\_redirects, netlify.toml 与部署相关
- vite.config.ts / unocss.config.ts / tsconfig.json 等为构建与工具配置

## 3. 构建和运行 (最常用命令)

- 开发: pnpm dev
- 构建: pnpm build
- 预览: pnpm preview

## 4. 建站思路 (建议学习路径)

1. 先理解 pages/ 的 Markdown 是如何变成路由页面
2. 看 src/main.ts 与 src/App.vue, 了解应用入口和全局布局
3. 看 vite.config.ts, 理解 Markdown 渲染管道和 SSG
4. 看 unocss.config.ts, 了解样式体系和快捷类
5. 再深入 scripts/, 了解 RSS、OG 图片、重定向等生成逻辑

## 5. 后续计划 (你可以继续让我做的事)

- 帮你选出最关键的 5-8 个文件, 逐行讲解
- 根据你自己的风格重新设计页面结构
- 新增你自己的页面模板和内容组织方式
- 把你想要的栏目变成可复用组件
