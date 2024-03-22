/**
 * loading
 *
 * @author tangjiahui
 * @date 2024/3/22
 */
import ora, { Ora } from "ora";

let loading: Ora | null = null;
export function getLoading() {
  return loading || ora();
}

export async function loadingPromise(pm: Promise<any>): Promise<void> {
  return new Promise((resolve, reject) => {
    const loading = getLoading();
    loading.start("creating...");
    pm.then(() => {
      loading.succeed("create success!");
      resolve();
    }).catch(() => {
      loading.succeed("create failed!");
      reject();
    });
  });
}
