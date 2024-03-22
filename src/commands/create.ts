/**
 * create a empty project command.
 *
 * @author tangjiahui
 * @date 2024/3/22
 */
import type { Command } from "commander";
import Inquirer from "inquirer";

import {
  copyToAsync,
  deleteFilePath,
  getTemplateDirectoryPath,
  isExist,
  isTemplateDirectory,
  loadingPromise,
  logError,
  logWarn,
  resolvePath,
} from "../utils";
import chalk from "chalk";

export function create(program: Command) {
  program
    .command("create <template-name> <project-name>")
    .description("create a empty project from template.")
    .action((templateName, projectName, ...args) => {
      const isTemplate = isTemplateDirectory(templateName);

      if (!isTemplate) {
        logError(`Error: template "${templateName}" is not exist.`);
        return;
      }

      if (!projectName) {
        // ask if create in current directory or not?
        // ...
        return;
      }

      const templatePath: string = getTemplateDirectoryPath(templateName);
      const projectPath: string = resolvePath(process.cwd(), projectName);
      const isProjectExist = isExist(projectPath);

      if (!isProjectExist) {
        createTemplateToProject({
          templatePath,
          projectPath,
          projectName,
        });
        return;
      }

      // If directory is exist, ask if continue or not.
      Inquirer.prompt([
        {
          name: "isOverWrite",
          type: "list",
          message: `Is overwrite for "${projectName}"?`,
          choices: [
            {
              name: "yes",
              value: 1,
            },
            {
              name: "no",
              value: 0,
            },
          ],
        },
      ]).then(({ isOverWrite }) => {
        if (isOverWrite) {
          // delete old files.
          deleteFilePath(projectPath);
          logWarn(`Warn: delete "${projectName}".`);

          // overwrite with template.
          createTemplateToProject({
            templatePath,
            projectPath,
            projectName,
          });
        } else {
          showCancelInfo();
        }
      });
    });
}

// (without check) copy template to project
function createTemplateToProject(options: {
  templatePath: string;
  projectPath: string;
  projectName: string;
}) {
  const { templatePath, projectPath, projectName } = options;
  loadingPromise(copyToAsync(templatePath, projectPath)).then(() => {
    showSuccessInfo(projectPath, projectName);
  });
}

// show info after copy.
function showSuccessInfo(filePath: string, name: string) {
  console.log(`\nScaffolding project in: ${chalk.blueBright(filePath)}`);
  console.log(`\nNow run:\n`);
  console.log(chalk.blueBright(`  cd ${name}`));
  console.log(chalk.blueBright(`  pnpm install`));
  console.log(chalk.blueBright(`  pnpm dev`));
  console.log();
}

// show info after cancel
function showCancelInfo() {
  logWarn("Warn: cancel operate.");
}
