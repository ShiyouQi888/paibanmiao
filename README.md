<p align="center">
  <img src="apps/web/public/favicon-dark.svg" width="80" height="80" alt="排版喵 Logo" />
</p>

<h1 align="center">排版喵 (WeMD)</h1>

<p align="center">
  <strong>一款为公众号创作者量身定制的、极致优雅的 Markdown 排版工具</strong>
</p>

<p align="center">
  <a href="https://github.com/ShiyouQi888/paibanmiao/LICENSE"><img src="https://img.shields.io/badge/License-MIT-4CAF50?style=for-the-badge" alt="License: MIT" /></a>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Electron-28-47848F?style=for-the-badge&logo=electron&logoColor=white" alt="Electron" />
  <img src="https://img.shields.io/badge/Turbo-2-EF4444?style=for-the-badge&logo=turborepo&logoColor=white" alt="Turbo" />
</p>

---

## 🌟 简介

**排版喵 (WeMD)** 是一个开源的 Markdown 编辑器，专注于解决微信公众号排版难题。我们相信写作应该是纯粹的，排版应该是自动且优雅的。

与传统的在线排版工具不同，排版喵采用 **“本地优先”** 的设计理念，所有数据存储在您的浏览器或本地磁盘中，无需登录，不追踪隐私，让您专注于内容创作。

---

## ✨ 核心特性

- **🚀 极致体验**：所见即所得的 Markdown 编辑体验，支持 GFM、数学公式 (KaTeX)、代码高亮等。
- **🎨 丰富主题**：内置 20+ 款精心设计的公众号主题，支持**可视化主题设计器**，甚至可以自定义 CSS。
- **🌙 深色模式预览**：业界领先的微信深色模式仿真算法，还原度达 98% 以上，确保您的文章在各种模式下都完美呈现。
- **💾 本地优先**：数据存储在本地 IndexedDB 或文件系统中。无需注册登录，保护隐私。
- **🖼️ 智能图床**：集成阿里云 OSS、腾讯云 COS、七牛云、又拍云及 S3 兼容服务，支持粘贴自动上传。
- **📊 动态图表**：深度集成 Mermaid.js，支持流程图、时序图、甘特图等，且自动适配当前选定的排版主题。
- **🎞️ 交互组件**：支持公众号特有的“滑动图组”等交互组件，让文章更具表现力。
- **💻 全平台支持**：提供 Web 在线版及桌面客户端（macOS, Windows, Linux）。

---

## 🛠️ 技术架构

本项目采用 Monorepo 架构管理：

- **`apps/web`**: 基于 React 18 + Vite 的 Web 端核心应用。
- **`apps/electron`**: 基于 Electron 的桌面客户端实现。
- **`packages/core`**: 核心排版引擎，包含 Markdown 解析与微信适配算法。
- **`apps/server`**: (可选) 提供图片上传等后端辅助服务。

---

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/ShiyouQi888/paibanmiao.git
cd paibanmiao
```

### 2. 安装依赖
项目使用 `pnpm` 进行包管理，请确保已安装 [pnpm](https://pnpm.io/)。
```bash
pnpm install
```

### 3. 启动开发环境
```bash
# 同时启动 web 和核心包监听
pnpm dev
```

### 4. 构建项目
```bash
pnpm build
```

---

## 📦 部署与分发

### Docker 部署
```bash
docker-compose up -d
```
访问 `http://localhost:8080` 即可使用。

### 桌面版打包
```bash
cd apps/electron
pnpm build
```

---

## 🤝 参与贡献

我们非常欢迎各种形式的贡献！无论是修复 Bug、添加新主题、改进文档还是提出新功能建议。

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

---

## 📄 开源协议

本项目基于 [MIT](LICENSE) 协议开源。

---

<p align="center">
  如果这个项目对你有帮助，请点个 ⭐️ 支持一下！
</p>
