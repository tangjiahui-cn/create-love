/**
 * download a repo from github.
 *
 * @author tangjiahui
 * @date 2024/3/22
 * 
 * examples: 
 * * downloadGitHubRepo('https://github.com/tangjiahui-cn/class-css.git', './demo').then(console.log).catch(console.error)
 */

// @ts-ignore
import download from "download-git-repo";

type DownloadResult = {
  success: boolean;
  error: any;
};

export async function downloadGitHubRepo(
  url: string,
  directoryPath: string
): Promise<DownloadResult> {
  return new Promise((resolve, reject) => {
    download(`direct:${url}`, directoryPath, { clone: true }, (err: any) => {
      (err ? reject : resolve)({
        success: !err,
        error: err,
      });
    });
  });
}
