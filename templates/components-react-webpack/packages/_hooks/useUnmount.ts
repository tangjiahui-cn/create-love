/**
 * useUnmount
 *
 * @author tangjiahui
 * @date 2024/4/3
 */

import { useEffectOnce } from "./useEffectOnce";

export function useUnmount(callback: () => void) {
  useEffectOnce(() => callback);
}
