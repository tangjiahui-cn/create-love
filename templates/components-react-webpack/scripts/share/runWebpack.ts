/**
 * build webpack by scripts.
 *
 * @author tangjiahui
 * @date 2024/4/2
 */
import { webpack, Configuration } from "webpack";

export function runWebpack(config: Configuration): Promise<void> {
  return new Promise((resolve, reject) => {
    webpack(config).run((error) => {
      if (error) {
        console.error("error: ", error);
        reject(error);
      } else {
        console.log("\nBUILD SUCCESS!\n");
        resolve();
      }
    });
  });
}
