# 技术方案

## 推荐技术栈

- Next.js
- TypeScript
- React
- Tailwind CSS
- 本地 mock 数据

## 第一阶段数据策略

第一阶段不接真实数据库，所有作品、开发者和分类数据都放在本地 mock 数据文件中。

后续如需接入后端，应优先考虑：

- Supabase
- PostgreSQL
- 对象存储
- 简单审核后台

## 代码组织方向

后续初始化 Next.js 项目后，建议按以下方向组织：

- app/：页面路由
- components/：通用组件
- data/：mock 数据
- types/：TypeScript 类型
- lib/：工具函数
- styles/：全局样式

## 第一阶段技术边界

- 不做真实登录注册。
- 不接真实数据库。
- 不做服务履约系统。
- 收藏、提交等交互先使用前端提示或本地状态模拟。
- 优先保证页面可运行、可浏览、可响应式适配。
