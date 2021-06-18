/**
 * Converts string, as a whole, to locale lower case.
 * @param string — The string to convert.
 * @return — Returns the locale lower cased string.
 */
export const toLocaleLower = (string?: string) =>
  (string ?? '').toString().toLocaleLowerCase();
