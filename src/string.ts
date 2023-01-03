export {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from 'change-case';

export const toString = (v: any) => (v?.toString() ?? Object.prototype.toString.call(v)) as string;
