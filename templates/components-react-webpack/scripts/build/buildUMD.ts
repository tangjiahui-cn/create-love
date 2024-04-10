import { root, runWebpack } from "../share";
import pkg from "@/../package.json";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import common from "./common";
import { merge } from "webpack-merge";

export async function buildUMD() {
  return runWebpack(
    merge(common, {
      output: {
        path: root("./lib"),
        library: {
          name: pkg.name,
          type: "umd",
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
