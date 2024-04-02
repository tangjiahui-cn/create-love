import { root } from "../share";
import { runWebpackDevServer } from "../share/runWebpackDevServer";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProvidePlugin } from "webpack";

runWebpackDevServer({
  mode: "development",
  entry: root("./examples/main.tsx"),
  devtool: "source-map",
  devServer: {
    port: 10000,
    open: true,
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: [".ts", ".tsx", "..."],
    alias: {
      "@": root("packages"),
    },
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "tiger-ui-[local]",
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
  plugins: [
    new HtmlWebpackPlugin({
      template: root("./examples/index.html"),
    }),
    new ProvidePlugin({
      React: "react",
    }),
  ],
});
