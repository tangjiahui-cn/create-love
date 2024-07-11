# create-tt
一个前端脚手架，支持命令式和步骤式

## Install
```shell
npm i -g create-tt
```

## How To Use?
show all projects.
```shell
tt ls

# tt ls
# - components-ts-vue
# - components-ts-react
# - lib-ts
# - lib-js
```
create a empty project
```shell
tt create spa-react18-vite demo

# tt create <template-name> [project-name]
```

## Next Plan
```shell
# create a project step by step.
tt init

# create a project from template to target directory.
tt create <template-name> [target]
```

## Run Development
```shell
# install dependencies.
pnpm install

# link to global env.
npm link

# run dev-bin.
tt ls
```