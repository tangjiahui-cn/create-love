import { templatesPath, getDirectoryList, DirectoryInfo } from "../utils";
import chalk from "chalk";
import type { Command } from "commander";

export function ls(program: Command) {
  program
    .command("ls [name]")
    .description("show all templates")
    .action(() => {
      // show local files.
      const templatesList: DirectoryInfo[] = getDirectoryList(templatesPath);
      console.log("\nAll templates: ");
      console.log("-------------------");
      templatesList.forEach((template) => {
        console.log(
          `${chalk.gray("-")} ${chalk.rgb(4, 122, 204)("%s")}`,
          template.name
        );
      });
      console.log();
    });
}
