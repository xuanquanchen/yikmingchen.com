# TODO - 待完成任务

## 多语言维护规则 ⚠️

**重要**：为了避免不同语言版本出现不同步的问题，请遵循以下规则：

1. **英文为主版本** - `/pages/index.md` 始终是原始版本
2. **中文为翻译版本** - `/pages/index-zh.md` 翻译自英文版本
3. **更新流程**：
   - 每次修改英文版本后，务必同步更新对应的中文版本
   - 不要直接修改中文版本，再回头改英文版本
   - 建议：改完英文后立即更新中文，避免遗漏
4. **检查清单**：修改前确认 index.md 和 index-zh.md 内容是否对应

---

## 高优先级

### 🎨 设计 YC 艺术字 Logo（未开始）

- **描述**: 替换左上角和页面加载动画的 "af" 艺术字为 "YC"
- **当前状态**: 改回原始 af 设计，等待新设计
- **制作方法**:
  1. 使用 Figma (<https://www.figma.com>) - 推荐，免费
  2. 或用 Adobe Illustrator / Linearity Curve
  3. 手写绘制 "YC" 文字，保持笔画流畅
  4. 导出为 SVG 格式
  5. 需要获得类似以下的 SVG 路径数据：
     - mask 中的路径: 定义 YC 的轮廓
     - stroke 路径: 手写笔画效果
  6. 完成后告知，我会帮集成到项目

- **相关文件**:
  - `/src/components/Logo.vue` - 导航栏 logo
  - `/src/components/LogoStroke.vue` - 加载动画 logo

---

## 完成项目

- ✅ 首页信息个性化（index.md）
- ✅ 社交媒体链接更新
- ✅ vite.config.ts 清理和 ARCADE Lab 添加
- ✅ JHU logo 链接配置

---

## 下一步计划

- [ ] 完成 YC 艺术字设计
- [ ] 添加中文界面（i18n 国际化）
- [ ] 其他页面本地化（projects, posts 等）
- [ ] 导入自己的照片：先导出为 JPG/PNG，再放入 photos/ 并运行 `npm run organize-photos` 生成命名与 JSON（不使用 watcher）
- [ ] 添加 demos 指引：在 demo/ 放入 `YYYY-MM-DD.mp4` 和同名 `YYYY-MM-DD.md`（frontmatter 里写 link），页面会自动显示在 /demos
- [ ] 决定是否在站点放 CV：若放，上传到 public/cv.pdf，并在导航栏新增 CV 链接（/cv.pdf）
