/**
 * theme utils.
 * 
 * @author tangjiahui
 * @date 2024/3/28
 */

import type { Theme } from "./theme";

/**
 * modify global theme variable.
 * 
 * @param name variable name.
 * @param value variable value.
 */
export function setTheme(name: keyof Theme, value: string) {
  document.documentElement.style.setProperty(`--${name}`, value);
}

/**
 * get a variable value of theme.
 * 
 * @param name variable name.
 * @returns variable value.
 */
export function getTheme(name: keyof Theme): string {
  return document.documentElement.style.getPropertyValue(`--${name}`);
}
