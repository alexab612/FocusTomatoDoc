# focusTomato 实现简述

目标：高保真复刻 https://onefocusapp.com/ 首页，使用 Next.js + Tailwind CSS，并兼容 GitHub Pages 静态发布。

约束：
- 仅首页，不做博客/About/Support 子页
- 组件化实现，内容尽量配置化
- 不依赖 SSR / API routes
- 必须支持 `npm run build` 生成静态导出
- 需要 GitHub Actions 自动部署到 GitHub Pages
- 尽量保留原站信息架构：Header、Hero、功能卡片、底部 CTA、Footer
- 视觉上高保真，但允许使用自绘/替代图形，避免依赖原站私有资源

验收标准：
- `npm install` 后可运行
- `npm run build` 成功
- `out/` 可用于 GitHub Pages
- 桌面与移动端布局正常
- 仓库中包含部署说明与 workflow
