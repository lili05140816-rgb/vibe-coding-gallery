# Vibe Coding 作品广场

一个展示普通人用 AI Agent 做出来的小工具作品广场 MVP。

## 当前功能

- 首页 Landing Page
- 发现页分类浏览
- 项目详情页
- 开发者主页
- 提交作品模拟表单
- 关于页 / 平台说明
- 本地 mock 数据

## MVP 边界

当前版本没有数据库、登录、支付、订单、聊天、真实收藏，也不包含后台系统或真实交易流程。

## 技术栈

- Next.js
- TypeScript
- Tailwind CSS
- React
- 本地 mock 数据

## 本地运行

```bash
npm.cmd install
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
```

## 主要路由

- `/`
- `/discover`
- `/submit`
- `/me`
- `/projects/[id]`
- `/developers/[id]`

## 项目文档

- `docs/requirements.md`：需求说明
- `docs/product-plan.md`：产品规划
- `docs/ui-design.md`：UI 与响应式设计说明
- `docs/tech-plan.md`：技术方案
- `docs/development-steps.md`：开发步骤
- `docs/testing-checklist.md`：测试清单
- `dev-logs/`：阶段开发日志
