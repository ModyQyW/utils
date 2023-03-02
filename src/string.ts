export {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  paramCase as kebabCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from 'change-case';
export { titleCase } from 'title-case';

/** Convert string to lower case. */
export const lowerCase = (string: string) => string.toLowerCase();

/** Convert string to locale lower case. */
export const localeLowerCase = (string: string, locales?: string | string[]) =>
  string.toLocaleLowerCase(locales);

/** Convert first char to lower case. */
export const lowerCaseFirst = (string: string) => string.charAt(0).toLowerCase() + string.slice(1);

/** Convert string to upper case. */
export const upperCase = (string: string) => string.toUpperCase();

/** Convert string to locale upper case. */
export const localeUpperCase = (string: string, locales?: string | string[]) =>
  string.toLocaleUpperCase(locales);

/** Convert first char to upper case. */
export const upperCaseFirst = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

/**
 * Convert value to string.
 *
 * Try `value.toString()` first, then `Object.prototype.toString.call(value)`.
 */
export const toString = (v: any) => (v?.toString() ?? Object.prototype.toString.call(v)) as string;
