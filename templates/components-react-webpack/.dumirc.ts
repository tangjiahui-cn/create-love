import { defineConfig } from 'dumi';
import path from 'path';
import pkg from './package.json';
import fs from 'fs';
import { root } from './scripts/share';

export default defineConfig({
  title: pkg.name,
  outputPath: 'docs-dist',
  themeConfig: {
    logo: false,
    title: pkg.name,
    name: pkg.name,
    footer: false,
    apiHeader: false,
    prefersColor: {
      default: 'light',
      switch: false,
    },
  },
  apiParser: {},
  resolve: {
    docDirs: ['docs'],
    entryFile: path.resolve(__dirname, './packages/index.ts'),
  },
  lessLoader: {
    javascriptEnabled: true,
    modifyVars: {
      namespace: pkg.name,
    },
  },
  styles: [fs.readFileSync(root('./es/index.css'), 'utf-8')],
  chainWebpack(memo: any) {
    memo.resolve.alias.set('@', root('./packages'));
  },
});
