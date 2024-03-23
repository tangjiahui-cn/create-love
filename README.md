# create-love
It's easy to create a empty project.

## Install
```shell
npm i -g create-love
```

## How To Use?
show all projects.
```shell
love ls

# easy ls
# - components-ts-vue
# - components-ts-react
# - lib-ts
# - lib-js
```
create a empty project
```shell
love create spa-react18-vite demo

# easy create <template-name> [project-name]
```

## Next Plan
```shell
# create a project step by step.
love init

# create a project from template to target directory.
love create <template-name> [target]
```

## Run Development
```shell
# install dependencies.
pnpm install

# link to global env.
npm link

# run dev-bin.
love ls
```