/**
 * common api
 *
 * @author tangjiahui
 * @date 2024/3/28
 */

import path from 'path';

/**
 * get path relative to root
 *
 * @param paths other paths
 * @returns absolute path.
 */
export function root(...paths: string[]) {
  return path.resolve(__dirname, '../../', ...paths);
}
