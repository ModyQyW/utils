export { default as is, assert } from '@sindresorhus/is';
export { default as merge } from 'deepmerge';

/**
 * Get millisecond-based timestamp.
 *
 * @example getTimestamp() => 13 digits number
 */
export function getTimestamp() {
  return +Date.now();
}

/**
 * Get value type name.
 *
 * @example getType(null) => 'Null'
 *
 * @example getType() => 'Undefined'
 *
 * @example getType(undefined) => 'Undefined'
 *
 * @example getType(true) => 'Boolean'
 *
 * @example getType(0) => 'Number'
 *
 * @example getType(0n) => 'BigInt'
 *
 * @example getType('') => 'String'
 *
 * @example getType({}) => 'Object'
 *
 * @example getType([]) => 'Array'
 */
export function getType(value?: unknown) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

/**
 * Use `Object.is` directly to determine if two values are equal.
 *
 * Use `isDeepEqual` If you need a deep comparison.
 *
 * @example isEqual(null, null) => true
 *
 * @example isEqual(undefined, null) => false
 *
 * @example isEqual(undefined, undefined) => true
 *
 * @example isEqual(true, true) => true
 *
 * @example isEqual(false, false) => true
 *
 * @example isEqual(true, false) => false
 *
 * @example isEqual(1, 2) => false
 *
 * @example isEqual(1, 1) => true
 *
 * @example isEqual({}, {}) => false
 *
 * @example isEqual({ a: 1 }, { a: 1, b: 2 }) => false
 *
 * @example isEqual({ a: 1 }, { a: 1 }) => false
 *
 * @example isEqual({ a: 1, b: { c: true } }, { a: 1, b: { c: true } }) => false
 *
 * @example isEqual({ a: 1, b: { c: true } }, { a: 1, b: { c: false } }) => false
 *
 * @example isEqual([], []) => false
 *
 * @example isEqual([1, 2, 3, { a: 1, b: { c: true } }], [1, 2, 3, { a: 1, b: { c: true } }]) =>
 * false
 *
 * @example isEqual([1, 2, 3, { a: 1, b: { c: true } }], [1, 2, 3, { a: 1, b: { c: false } }]) =>
 * false
 */
export function isEqual(value1: unknown, value2: unknown) {
  return Object.is(value1, value2);
}

/**
 * Determine if two values are equal.
 *
 * For arrays, recursively determine the value corresponding to each subscript.
 *
 * For objects, recursively determine the value of each key.
 *
 * Other cases are determined with `Object.is`.
 *
 * @example isDeepEqual(null, null) => true
 *
 * @example isDeepEqual(undefined, null) => false
 *
 * @example isDeepEqual(undefined, undefined) => true
 *
 * @example isDeepEqual(true, true) => true
 *
 * @example isDeepEqual(false, false) => true
 *
 * @example isDeepEqual(true, false) => false
 *
 * @example isDeepEqual(1, 2) => false
 *
 * @example isDeepEqual(1, 1) => true
 *
 * @example isDeepEqual({}, {}) => true
 *
 * @example isDeepEqual({ a: 1 }, { a: 1, b: 2 }) => false
 *
 * @example isDeepEqual({ a: 1 }, { a: 1 }) => true
 *
 * @example isDeepEqual({ a: 1, b: { c: true } }, { a: 1, b: { c: true } }) => true
 *
 * @example isDeepEqual({ a: 1, b: { c: true } }, { a: 1, b: { c: false } }) => false
 *
 * @example isDeepEqual([], []) => true
 *
 * @example isDeepEqual([1, 2, 3, { a: 1, b: { c: true } }], [1, 2, 3, { a: 1, b: { c: true } }]) =>
 * true
 *
 * @example isDeepEqual([1, 2, 3, { a: 1, b: { c: true } }], [1, 2, 3, { a: 1, b: { c: false } }])
 * => false
 */
export function isDeepEqual(value1: unknown, value2: unknown): boolean {
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
}
