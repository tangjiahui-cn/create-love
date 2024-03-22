/**
 * file api.
 *
 * @author tangjiahui
 * @date 2024/3/22
 */

import fs from "fs-extra";
import path from "path";

export interface DirectoryInfo {
  name: string;
  path: string;
}

export function isExist(absPath: string): boolean {
  return fs.existsSync(absPath);
}

export function isNotExist(absPath: string): boolean {
  return !isExist(absPath);
}

export function isFile(absPath: string): boolean {
  return fs.statSync(absPath).isFile();
}

export function isDirectory(absPath: string): boolean {
  return fs.statSync(absPath).isDirectory();
}

export function getDirectoryList(absPath: string): DirectoryInfo[] {
  return fs.readdirSync(absPath).reduce((list, name) => {
    const filePath = path.resolve(absPath, name);
    if (fs.statSync(filePath).isDirectory()) {
      list.push({
        name,
        path: filePath,
      });
    }
    return list;
  }, [] as DirectoryInfo[]);
}

export function deleteFilePath(absPath: string): void {
  if (isExist(absPath)) {
    fs.removeSync(absPath);
  }
}

export function copyTo(srcAbsPath: string, targetAbsPath: string): void {
  fs.copySync(srcAbsPath, targetAbsPath);
}

export async function copyToAsync(srcAbsPath: string, targetAbsPath: string) {
  return new Promise((resolve, reject) => {
    fs.copy(srcAbsPath, targetAbsPath, (error) => {
      (error ? reject : resolve)({
        success: !error,
        error,
      });
    });
  });
}
