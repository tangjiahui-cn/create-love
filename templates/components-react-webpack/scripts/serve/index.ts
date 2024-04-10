import { root } from "../share";
import { runWebpackDevServer } from "../share/runWebpackDevServer";
import HtmlWebpackPlugin from "html-webpack-plugin";
import common from "../build/common";
import { merge } from "webpack-merge";

runWebpackDevServer(
  merge(common, {
    mode: "development",
    entry: root("./examples/main.tsx"),
    devtool: "source-map",
    devServer: {
      port: 10000,
      open: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: root("./examples/index.html"),
      }),
    ],
  })
);
