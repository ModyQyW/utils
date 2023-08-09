/**
 * Convert string to lower case.
 *
 * 将字符串转换成小写。
 */
export function lowerCase(string: string) {
  return string.toLowerCase();
}

/**
 * Convert string to locale lower case.
 *
 * 将字符串转换成本地小写。
 */
export function localeLowerCase(string: string, locales?: string | string[]) {
  return string.toLocaleLowerCase(locales);
}

/**
 * Convert first char to lower case.
 *
 * 将第一个字符转换成小写。
 */
export function lowerCaseFirst(string: string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

/**
 * Convert string to upper case.
 *
 * 将字符串转换成大写。
 */
export function upperCase(string: string) {
  return string.toUpperCase();
}

/**
 * Convert string to locale upper case.
 *
 * 将字符串转换成本地大写。
 */
export function localeUpperCase(string: string, locales?: string | string[]) {
  return string.toLocaleUpperCase(locales);
}

/**
 * Convert first char to upper case.
 *
 * 将第一个字符转换成大写。
 */
export function upperCaseFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Convert value to string.
 *
 * Try `value.toString()` first, then `Object#toString.call(value)`.
 *
 * 将值转换成字符串。
 *
 * 首先尝试 `value.toString()`，然后再尝试 `Object#toString.call(value)`。
 *
 * @example toString(undefined) => '[object Undefined]'
 *
 * @example toString(null) => '[object Null]'
 *
 * @example toString(0) => '0'
 *
 * @example toString(Symbol('test')) => 'Symbol(test)'
 *
 * @example toString([1,2,3]) => '1,2,3'
 */
export function toString(v: any) {
  return (v?.toString() ?? Object.prototype.toString.call(v)) as string;
}
