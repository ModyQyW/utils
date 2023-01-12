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
export * from 'lower-case';
export * from 'upper-case';
export * from 'title-case';

export const toString = (v: any) => (v?.toString() ?? Object.prototype.toString.call(v)) as string;
