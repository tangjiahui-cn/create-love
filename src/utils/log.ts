/**
 * printf on screen
 *
 * @author tangjiahui
 * @date 2024/3/22
 */
import chalk from "chalk";

export function logError(message: string) {
  console.log(chalk.red(message));
}

export function logSuccess(message: string) {
  console.log(chalk.green(message));
}

export function logWarn(message: string) {
  console.log(chalk.yellow(message));
}
