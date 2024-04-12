/**
 * common webpack config.
 *
 * @author tangjiahui
 * @date 2024/4/3
 */

import { ProvidePlugin, type Configuration } from 'webpack';
import { root } from '@/../scripts/share';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import pkg from '@/../package.json';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin';
import WebpackBar from 'webpackbar';

const __DEV__ = process.env.mode === 'development';

const webpackConfig: Configuration = {
  mode: 'production',
  entry: root('./packages/index.ts'),
  output: {
    clean: true,
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.less', '...'],
    alias: {
      '@': root('packages'),
    },
  },
  externals: __DEV__ ? undefined : ['react', 'react-dom'],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              additionalData: `@namespace:${pkg.name};`,
            },
          },
        ],
      },
      {
        test: /\.ts/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.tsx/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  optimization: __DEV__
    ? undefined
    : {
        minimize: true,
        minimizer: [
          new TerserWebpackPlugin({
            extractComments: false,
          }),
          new CssMinimizerWebpackPlugin(),
        ],
      },
  plugins: [
    new WebpackBar({
      color: 'green',
      basic: true,
      profile: true,
    }),
    new ProvidePlugin({
      React: 'react',
    }),
  ],
};

export default webpackConfig;
