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
export { lowerCase, localeLowerCase } from 'lower-case';
export { upperCase, localeUpperCase } from 'upper-case';
export { titleCase } from 'title-case';

/**
 * Convert value to string.
 *
 * Try `value.toString()` first, then `Object.prototype.toString.call(value)`.
 */
export const toString = (v: any) => (v?.toString() ?? Object.prototype.toString.call(v)) as string;
