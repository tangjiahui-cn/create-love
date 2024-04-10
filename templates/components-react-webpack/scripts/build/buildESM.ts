import { root, runWebpack } from "../share";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import common from "./common";
import { merge } from "webpack-merge";

export async function buildESM() {
  return runWebpack(
    merge(common, {
      experiments: {
        outputModule: true,
      },
      output: {
        path: root("./es"),
        library: {
          type: "module",
        },
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "./index.css",
        }),
      ],
    })
  );
}
