/**
 * common utils.
 *
 * @author tangjiahui
 * @date 2024/3/22
 */
import * as path from "path";
import url from 'node:url'
import { isDirectory, isNotExist } from "./file";

// based on /dist
const __rootDir = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..')

export const resolvePath = (...args: string[]) => path.resolve(...args);

export const templatesPath = root("templates");

export function isTemplateDirectory(templateName: string): boolean {
  const absPath: string = getTemplateDirectoryPath(templateName);
  if (isNotExist(absPath)) return false;
  return isDirectory(absPath);
}

export function getTemplateDirectoryPath(templateName: string): string {
  return root(templatesPath, templateName);
}

export function root(...paths: string[]) {
  return path.resolve(__rootDir, ...paths);
}

export function srcRoot(...paths: string[]) {
  return root("src", ...paths);
}
