/**
 * Converts string, as a whole, to locale upper case.
 * @param string — The string to convert.
 * @return — Returns the locale upper cased string.
 */
export const toLocaleUpper = (string?: string) =>
  (string ?? '').toString().toLocaleUpperCase();
