export { default as merge } from 'deepmerge';

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
 * Determine if a value is a string.
 *
 * @example isString('') => true
 *
 * @example isString(0) => false
 *
 * @example isString(0n) => false
 *
 * @example isString(true) => false
 *
 * @example isString(undefined) => false
 *
 * @example isString(null) => false
 *
 * @example isString(Symbol()) => false
 *
 * @example isString({}) => false
 *
 * @example isString(() => {}) => false
 *
 * @example isString([]) => false
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Determine if a value is a number.
 *
 * @example isNumber('') => false
 *
 * @example isNumber(0) => true
 *
 * @example isNumber(0n) => false
 *
 * @example isNumber(true) => false
 *
 * @example isNumber(undefined) => false
 *
 * @example isNumber(null) => false
 *
 * @example isNumber(Symbol()) => false
 *
 * @example isNumber({}) => false
 *
 * @example isNumber(() => {}) => false
 *
 * @example isNumber([]) => false
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

/**
 * Determine if a value is a bigint.
 *
 * @example isBigInt('') => false
 *
 * @example isBigInt(0) => false
 *
 * @example isBigInt(0n) => true
 *
 * @example isBigInt(true) => false
 *
 * @example isBigInt(undefined) => false
 *
 * @example isBigInt(null) => false
 *
 * @example isBigInt(Symbol()) => false
 *
 * @example isBigInt({}) => false
 *
 * @example isBigInt(() => {}) => false
 *
 * @example isBigInt([]) => false
 */
export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint';
}

/**
 * Determine if a value is a boolean.
 *
 * @example isBoolean('') => false
 *
 * @example isBoolean(0) => false
 *
 * @example isBoolean(0n) => false
 *
 * @example isBoolean(true) => true
 *
 * @example isBoolean(undefined) => false
 *
 * @example isBoolean(null) => false
 *
 * @example isBoolean(Symbol()) => false
 *
 * @example isBoolean({}) => false
 *
 * @example isBoolean(() => {}) => false
 *
 * @example isBoolean([]) => false
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Determine if a value is undefined.
 *
 * @example isUndefined('') => false
 *
 * @example isUndefined(0) => false
 *
 * @example isUndefined(0n) => false
 *
 * @example isUndefined(true) => false
 *
 * @example isUndefined(undefined) => true
 *
 * @example isUndefined(null) => false
 *
 * @example isUndefined(Symbol()) => false
 *
 * @example isUndefined({}) => false
 *
 * @example isUndefined(() => {}) => false
 *
 * @example isUndefined([]) => false
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

/**
 * Determine if a value is null.
 *
 * @example isNull('') => false
 *
 * @example isNull(0) => false
 *
 * @example isNull(0n) => false
 *
 * @example isNull(true) => false
 *
 * @example isNull(undefined) => false
 *
 * @example isNull(null) => true
 *
 * @example isNull(Symbol()) => false
 *
 * @example isNull({}) => false
 *
 * @example isNull(() => {}) => false
 *
 * @example isNull([]) => false
 */
export function isNull(value: unknown): value is null {
  return value === null;
}

/**
 * Determine if a value is a symbol.
 *
 * @example isSymbol('') => false
 *
 * @example isSymbol(0) => false
 *
 * @example isSymbol(0n) => false
 *
 * @example isSymbol(true) => false
 *
 * @example isSymbol(undefined) => false
 *
 * @example isSymbol(null) => false
 *
 * @example isSymbol(Symbol()) => true
 *
 * @example isSymbol({}) => false
 *
 * @example isSymbol(() => {}) => false
 *
 * @example isSymbol([]) => false
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}

/**
 * Determine if a value is a object.
 *
 * @example isObject('') => false
 *
 * @example isObject(0) => false
 *
 * @example isObject(0n) => false
 *
 * @example isObject(true) => false
 *
 * @example isObject(undefined) => false
 *
 * @example isObject(null) => false
 *
 * @example isObject(Symbol()) => false
 *
 * @example isObject({}) => true
 *
 * @example isObject(() => {}) => false
 *
 * @example isObject([]) => false
 */
export function isObject(value: unknown): value is object {
  return getType(value) === 'Object';
}

/**
 * Determine if a value is a function.
 *
 * @example isFunction('') => false
 *
 * @example isFunction(0) => false
 *
 * @example isFunction(0n) => false
 *
 * @example isFunction(true) => false
 *
 * @example isFunction(undefined) => false
 *
 * @example isFunction(null) => false
 *
 * @example isFunction(Symbol()) => true
 *
 * @example isFunction({}) => false
 *
 * @example isFunction(() => {}) => true
 *
 * @example isFunction([]) => false
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

/**
 * Determine if a value is a array.
 *
 * @example isArray('') => false
 *
 * @example isArray(0) => false
 *
 * @example isArray(0n) => false
 *
 * @example isArray(true) => false
 *
 * @example isArray(undefined) => false
 *
 * @example isArray(null) => false
 *
 * @example isArray(Symbol()) => true
 *
 * @example isArray({}) => false
 *
 * @example isArray(() => {}) => false
 *
 * @example isArray([]) => true
 *
 * @example isArray<number>([1], isNumber) => true
 */
export function isArray<T = unknown>(
  value: unknown,
  assertion?: (value: unknown) => value is T,
): value is T[] {
  if (!Array.isArray(value)) return false;
  if (!isFunction(assertion)) return true;
  return value.every((element) => assertion(element));
}

/** Determine if a value is a blob. */
export function isBlob(value: unknown): value is Blob {
  return value instanceof Blob || getType(value) === 'Blob';
}

}

/**
 * Get millisecond-based timestamp.
 *
 * @example getTimestamp() => 13 digits number
 */
export function getTimestamp() {
  return +Date.now();
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
