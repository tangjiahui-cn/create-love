/**
 * stringify a variable.
 *
 * @param o any variable
 * @returns
 */
export function stringify(o: any): string {
  try {
    return JSON.stringify(o);
  } catch {
    return '';
  }
}
