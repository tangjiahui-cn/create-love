/**
 * useUpdateEffect
 *
 * @author tangjiahui
 * @date 2024/4/3
 */

import { useEffect, useRef } from 'react';

export function useUpdateEffect(callback: () => void | (() => void), effect: unknown[]) {
  const isNotEffect = useRef(true);

  useEffect(() => {
    if (isNotEffect.current) return;
    isNotEffect.current = false;
    return callback();
  }, effect);
}
