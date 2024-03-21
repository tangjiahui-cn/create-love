import * as path from "path";
import * as fs from "fs-extra";
import chalk from "chalk";
const templatesPath = path.resolve(__dirname, "../../templates");

interface Directory {
  name: string;
  path: string;
}

function getDirectoryList(absPath: string): Directory[] {
  return fs.readdirSync(absPath).reduce((list, name) => {
    const filePath = path.resolve(absPath, name);
    if (fs.statSync(filePath).isDirectory()) {
      list.push({
        name,
        path: filePath,
      });
    }
    return list;
  }, [] as Directory[]);
}

export function ls() {
  const templatesList: Directory[] = getDirectoryList(templatesPath);
  console.log("\nAll templates: ");
  console.log("-------------------");
  templatesList.forEach((template) => {
    console.log(
      `${chalk.gray("-")} ${chalk.rgb(4, 122, 204)("%s")}`,
      template.name
    );
  });

  console.log()
}
