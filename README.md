# Vue 3 + TypeScript + Vite （工程化、模块化、规范化、流程化）

## 项目技术

### 1. vue 3

### 2. typeScript

### 3. Vite

### 4. eslint

### 5. husky

### 6. sass

## 代码规范

feat:	新功能
fix:	修复 /修复问题/BUG
docs:	文档变更 文档/注释
style:	代码格式（不影响代码运行）/代码风格相关无影响运行结果的
refactor:	重构（不增加新功能，也不是修改 bug） /重构
perf:	性能优化 /优化/性能提升
test:	添加测试 /测试相关
chore:	修改构建过程或辅助工具 /依赖更新/脚手架配置修改等
revert:	回退 /撤销修改
build:	打包
workflow: 工作流改进
ci: 持续集成
types: 类型定义文件更改
wip: 开发中

#

## 项目遇到问题

1. verifyCommit require('fs') 报require isundefined

   解决方案： import { createRequire } from 'module'
            const require = createRequire(import.meta.url)

2. eslint不能识别node 的 全局语法

   解决方案："node": true // 可以在全局使用node语法

3. 