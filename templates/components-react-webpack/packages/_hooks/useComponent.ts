/**
 * useComponent
 * 
 * @description pre-count component info.
 */

import { useConfig } from "@/configProvider";

export function useComponent(name: string) {
  const context = useConfig();

  return {
    prefix: `${context.prefix}-${name}`,
    locale: context.locale
  }
}
