import { program } from "commander";
import chalk from "chalk";
import * as commands from "./commands";

const pkg = require("../package.json");

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

program
  .command("ls [name]")
  .description("show all templates")
  .action(() => {
    commands.ls();
  });

program.parse(process.argv);
