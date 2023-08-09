import { Nullish, Arrayable } from './types';

/**
 * Determines whether an array includes a certain element, returning true or false as appropriate.
 *
 * 确定数组是否包含某个元素，返回 true 或 false。
 *
 * @param searchElement - The element to search for.
 * @param searchElement - 需要搜索的元素。
 * @param fromIndex - The position in this array at which to begin searching for searchElement.
 * @param fromIndex - 开始搜索元素的位置。
 */
export function arrayIncludes<Type extends SuperType, SuperType = unknown>(
  array: Type[] | readonly Type[],
  item: SuperType,
  fromIndex?: number,
): item is Type {
  return array.includes(item as Type, fromIndex);
}

/**
 * Convert value to an array.
 *
 * 将值转换成数组。
 *
 * @example toArray() => []
 *
 * @example toArray(undefined) => []
 *
 * @example toArray(null) => []
 *
 * @example toArray(1) => [1]
 *
 * @example toArray('abc') => ['abc']
 *
 * @example toArray({ a: 1, b: 2 }) => [{ a: 1, b: 2 }]
 *
 * @example toArray([1, 2]) => [1, 2]
 *
 * @param value - The value to convert.
 * @param value - 需要转换的值。
 */
export function toArray<T>(value?: Nullish<Arrayable<T>>) {
  const v = value ?? [];
  return Array.isArray(v) ? v : [v];
}

/**
 * Find difference elements between two arrays. Pass a function to judge equation or fallback to
 * `Array#includes`. Return a new array.
 *
 * 找到两个数组中不同的元素。内部默认使用 `Array#includes` 判断相等性，你也可以传入一个自定义方法。返回一个新数组。
 *
 * @example difference([1, '2'], [1]) => ['2']
 *
 * @example difference([1, '2', {}], [1, {}]) => ['2', {}]
 *
 * @example difference([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }]) => ['2', { a: { b: 'c' }
 * }]
 *
 * @example difference([1, '2', {}], [1, {}], isDeepEqual) => ['2']
 *
 * @example difference([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }], isDeepEqual) => ['2']
 */
export function difference<T>(
  array1: T[],
  array2: T[],
  equalFn?: (value1: T, value2: T) => boolean,
) {
  if (!equalFn) return array1.filter((item) => !array2.includes(item));
  const result: T[] = [];
  for (const item of array1) {
    const index = array2.findIndex((value) => equalFn(item, value));
    if (index === -1) result.push(item);
  }
  return result;
}

/**
 * Find same elements between two arrays. Pass a function to judge equation or fallback to
 * `Array#includes`. Return a new array.
 *
 * 找到两个数组中相同的元素。内部默认使用 `Array#includes` 判断相等性，你也可以传入一个自定义方法。返回一个新数组。
 *
 * @example intersection([1, '2'], [1]) => [1]
 *
 * @example intersection([1, '2', {}], [1, {}]) => [1]
 *
 * @example intersection([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }]) => [1]
 *
 * @example intersection([1, '2', {}], [1, {}], isDeepEqual) => [1, {}]
 *
 * @example intersection([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }], isDeepEqual) => [1, {
 * a: { b: 'c' } }]
 */
export function intersection<T>(
  array1: T[],
  array2: T[],
  equalFn?: (value1: T, value2: T) => boolean,
) {
  if (!equalFn) return array1.filter((item) => array2.includes(item));
  const result: T[] = [];
  for (const item of array1) {
    const index = array2.findIndex((value) => equalFn(item, value));
    if (index >= 0) result.push(item);
  }
  return result;
}

/**
 * Find unique elements. Pass a function to judge equation or fallback to `Set`. Return a new array.
 *
 * 数组去重。内部默认使用 `Array#includes` 判断相等性，你也可以传入一个自定义方法。返回一个新数组。
 *
 * @example uniq([1, '2', 2, 2, '2']) => [1, '2', 2]
 *
 * @example uniq([1, '2', 2, 2, '2', {}, {}] => [1, '2', 2, {}, {}]
 *
 * @example uniq([1, '2', 2, 2, '2', {}, {}], isDeepEqual) => [1, '2', 2, {}]
 */
export function uniq<T>(array: T[], equalFn?: (value1: T, value2: T) => boolean) {
  if (!equalFn) return [...new Set(array)];
  const result: T[] = [];
  for (const item of array) {
    const index = result.findIndex((value) => equalFn(item, value));
    if (index === -1) result.push(item);
  }
  return result;
}

/**
 * Find all elements in two arrays. Use `uniq` under the hood. Return a new array.
 *
 * 找到两个数组所有不同元素。内部使用 `uniq`。返回一个新数组。
 *
 * @example union([1, '2'], [1, 3]) => [1, '2', 3]
 *
 * @example union([1, '2', {}], [1, 3, {}]) => [1, '2', {}, 3, {}]
 *
 * @example union([1, '2', { a: { b: 'c' } }], [1, 3, { a: { b: 'c' } }]) => [1, '2', { a: { b: 'c'
 * } }, 3, { a: { b: 'c' } }]
 *
 * @example union([1, '2', {}], [1, 3, {}], isDeepEqual) => [1, '2', {}, 3]
 *
 * @example union([1, '2', { a: { b: 'c' } }], [1, 3, { a: { b: 'c' } }], isDeepEqual) => [1, '2', {
 * a: { b: 'c' } }, 3]
 */
export function union<T>(array1: T[], array2: T[], equalFn?: (value1: T, value2: T) => boolean) {
  return uniq([...array1, ...array2], equalFn);
}

export function range(end: number): number[];
export function range(start: number, end: number): number[];
export function range(start: number, end: number, step: number): number[];
/**
 * Creates an array of numbers (positive and/or negative) progressing from `start` up to, but not
 * including `end`.
 *
 * `start` is set to 0 by default. You can pass `end` directly.
 *
 * `step` is set to 1 when `start` < `end` and -1 when `start` >= `end` by default.
 *
 * Return a new array.
 *
 * 创建一个从 `start` 到不包括 `end` 的数组。
 *
 * `start` 默认设置为 0，你可以直接传入 `end`。
 *
 * 当 `start` < `end` 时，`step` 默认为 1，否则默认为 -1。
 *
 * 返回一个新数组。
 *
 * @example range(4) => [0, 1, 2, 3]
 *
 * @example range(-4) => [0, -1, -2, -3]
 *
 * @example range(1, 5) => [1, 2, 3, 4]
 *
 * @example range(0, 20, 5) => [0, 5, 10, 15]
 *
 * @example range(0, -4, -1) => [0, -1, -2, -3]
 *
 * @example range(1, 4, 0) => [1, 1, 1]
 *
 * @example range(0) => []
 */
export function range(...args: number[]) {
  const start = args.length === 1 ? 0 : args[0];
  const end = args[1] ?? args[0];
  const step = args[2] ?? (start < end ? 1 : -1);
  const length = Math.abs(Math.floor((end - start) / (step || (start < end ? 1 : -1))));
  return Array.from({ length }).map((_, index) => start + index * step);
}
