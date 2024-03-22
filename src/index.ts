import { program } from "commander";
import chalk from "chalk";
import * as commands from "./commands";
import pkg from '../package.json'

program
  .name(pkg.name)
  .description("一个脚手架工具，帮助你快速创建常见项目模板。")
  .usage("<command>[option]")
  .version("easy-cli " + pkg.version);

program.on("--help", () => {
  console.log(
    `\n\nRun ${chalk.cyan(
      "easy-cli <command> --help"
    )} for detailed usage of given command.`
  );
});

// register commands.
commands.ls(program)
commands.create(program)

program.parse(process.argv);
