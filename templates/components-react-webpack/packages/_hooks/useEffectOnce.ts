/**
 * useEffectOnce
 *
 * @author tangjiahui
 * @date 2024/4/3
 */

import { useEffect } from 'react';

export function useEffectOnce(callback: () => void) {
  useEffect(callback, []);
}
