import { ProvidePlugin } from "webpack";
import { root, runWebpack } from "../share";
import WebpackBar from "webpackbar";
import TerserWebpackPlugin from 'terser-webpack-plugin';
import pkg from "@/../package.json";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin'

export async function buildESM() {
  return runWebpack({
    mode: "production",
    entry: root("./packages/index.ts"),
    experiments: {
      outputModule: true,
    },
    output: {
      clean: true,
      path: root("./es"),
      filename: "index.js",
      library: {
        type: 'module'
      }
    },
    resolve: {
      extensions: [".ts", ".tsx", ".less", "..."],
      alias: {
        "@": root("packages"),
      },
    },
    externals: ["react", "react-dom"],
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  mode: "local",
                  localIdentName: `${pkg.name}-[local]`,
                },
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: ["autoprefixer"],
                },
              },
            },
            "less-loader",
          ],
        },
        {
          test: /\.ts/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
            },
          },
        },
        {
          test: /\.tsx/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserWebpackPlugin({
          extractComments: false,
        }),
        new CssMinimizerWebpackPlugin()
      ],
    },
    plugins: [
      new ProvidePlugin({
        React: "react",
      }),
      new WebpackBar({
        color: "green",
        basic: true,
        profile: true,
      }),
      new MiniCssExtractPlugin({
        filename: './index.css'
      })
    ],
  });
}
