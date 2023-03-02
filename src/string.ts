/** Convert string to lower case. */
export function lowerCase(string: string) {
  return string.toLowerCase();
}

/** Convert string to locale lower case. */
export function localeLowerCase(string: string, locales?: string | string[]) {
  return string.toLocaleLowerCase(locales);
}

/** Convert first char to lower case. */
export function lowerCaseFirst(string: string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

/** Convert string to upper case. */
export function upperCase(string: string) {
  return string.toUpperCase();
}

/** Convert string to locale upper case. */
export function localeUpperCase(string: string, locales?: string | string[]) {
  return string.toLocaleUpperCase(locales);
}

/** Convert first char to upper case. */
export function upperCaseFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Convert value to string.
 *
 * Try `value.toString()` first, then `Object.prototype.toString.call(value)`.
 */
export function toString(v: any) {
  return (v?.toString() ?? Object.prototype.toString.call(v)) as string;
}
