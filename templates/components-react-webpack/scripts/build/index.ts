/**
 * build
 *
 * @author tangjiahui
 * @date 2024/4/2
 */

import { buildUMD } from "./buildUMD";
import { buildESM } from "./buildESM";
import { syncTask } from "../share";
const { format = "" } = process.env;

const formatTaskMap = {
  es: buildESM,
  umd: buildUMD,
};
const formatList: string[] = format ? format.split(",") : [];
const formatTaskList = formatList.map((x) => formatTaskMap[x]).filter(Boolean);

syncTask(formatTaskList);
