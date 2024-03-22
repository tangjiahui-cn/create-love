import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ['./src/index.ts'],
  clean: true,
  rollup: {
    inlineDependencies: true,
    esbuild: {
      target: 'node14',
      minify: true,
    },
  },
})
