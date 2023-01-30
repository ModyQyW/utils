export { default as is, assert } from '@sindresorhus/is';

/** Get millisecond-based timestamp. */
export const getTimestamp = () => +Date.now();

/** Get value type name. */
export const getType = (value?: unknown) => Object.prototype.toString.call(value).slice(8, -1);

/**
 * Use Object.is directly to determine if two values are equal.
 *
 * Use isDeepEqual If you need a deep comparison.
 */
export const isEqual = (value1: unknown, value2: unknown) => Object.is(value1, value2);

/**
 * Determine if two values are equal.
 *
 * For arrays, recursively determine the value corresponding to each subscript.
 *
 * For objects, recursively determine the value of each key.
 *
 * Other cases are determined using Object.is.
 */
export const isDeepEqual = (value1: unknown, value2: unknown): boolean => {
  const type1 = getType(value1);
  const type2 = getType(value2);
  if (type1 !== type2) return false;
  if (type1 === 'Array') {
    const v1 = value1 as Array<unknown>;
    const v2 = value2 as Array<unknown>;
    if (v1.length !== v2.length) return false;
    return v1.every((item, index) => isDeepEqual(item, v2[index]));
  }
  if (type1 === 'Object') {
    const v1 = value1 as Record<string | number | symbol, unknown>;
    const v2 = value2 as Record<string | number | symbol, unknown>;
    const keys1 = Object.keys(v1);
    const keys2 = Object.keys(v2);
    if (keys1.length !== keys2.length) return false;
    return keys1.every((key: string) => isDeepEqual(v1[key], v2[key]));
  }
  return Object.is(value1, value2);
};
