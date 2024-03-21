# easy-cli
用于快速创建各类项目模板。

## How to use?
展示全部模板
```shell
easy ls

# easy ls
# - components-ts-vue
# - components-ts-react
# - lib-ts
# - lib-js

easy ll

# easy ll
# - components-ts-vue (webpack,vue,typescript)
# - components-ts-react (webpack,react,typescript)
# - lib-ts (typescript,webpack)
# - lib-js (typescript,webpack) 
```
创建一个组件库项目
```shell
easy create components-ts-vue [目标文件夹]
```
按照步骤提示创建空项目
```shell
easy init

或者：
npx create-easy
npm init easy
yarn create easy

# easy init
# - 请输入项目名称 (默认: easy-demo)
# - 请选择框架 vue3、react18
# - 请选择变种 javascript、typescript
# - 请选择构建工具 webpack/rollup
```