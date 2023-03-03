import { Optional, Arrayable } from './types';

/**
 * Determines whether an array includes a certain element, returning true or false as appropriate.
 *
 * @param searchElement — The element to search for.
 * @param fromIndex — The position in this array at which to begin searching for searchElement.
 */
export function arrayIncludes<Type extends SuperType, SuperType = unknown>(
  array: Type[] | readonly Type[],
  item: SuperType,
  fromIndex?: number,
): item is Type {
  return array.includes(item as Type, fromIndex);
}

/** Convert value to an array. */
export function toArray<T>(value?: Optional<Arrayable<T>>) {
  const v = value ?? [];
  return Array.isArray(v) ? v : [v];
}

/**
 * Find difference elements between two arrays.
 *
 * Return a new array.
 */
export function difference<T>(array1: T[], array2: T[]) {
  return array1.filter((item) => !array2.includes(item));
}

/**
 * Find difference elements between two arrays.
 *
 * Pass a function to judge equation or fallback to `difference`.
 *
 * Return a new array.
 */
export function differenceWith<T>(
  array1: T[],
  array2: T[],
  equalFn?: (value1: T, value2: T) => boolean,
) {
  if (!equalFn) return difference(array1, array2);
  const result: T[] = [];
  for (const item of array1) {
    const index = array2.findIndex((value) => equalFn(item, value));
    if (index === -1) result.push(item);
  }
  return result;
}

/**
 * Find same elements between two arrays.
 *
 * Return a new array.
 */
export function intersection<T>(array1: T[], array2: T[]) {
  return array1.filter((item) => array2.includes(item));
}

/**
 * Find same elements between two arrays.
 *
 * Pass a function to judge equation or fallback to `intersection`.
 *
 * Return a new array.
 */
export function intersectionWith<T>(
  array1: T[],
  array2: T[],
  equalFn?: (value1: T, value2: T) => boolean,
) {
  if (!equalFn) return intersection(array1, array2);
  const result: T[] = [];
  for (const item of array1) {
    const index = array2.findIndex((value) => equalFn(item, value));
    if (index >= 0) result.push(item);
  }
  return result;
}

/**
 * Find unique elements.
 *
 * Return a new array.
 */
export function uniq<T>(array: T[]) {
  return [...new Set(array)];
}

/**
 * Find unique elements.
 *
 * Pass a function to judge equation or fallback to `uniq`.
 *
 * Return a new array.
 */
export function uniqWith<T>(array: T[], equalFn?: (value1: T, value2: T) => boolean) {
  if (!equalFn) return uniq(array);
  const result: T[] = [];
  for (const item of array) {
    const index = result.findIndex((value) => equalFn(item, value));
    if (index === -1) result.push(item);
  }
  return result;
}

/**
 * Find all elements in two arrays.
 *
 * Return a new array.
 */
export function union<T>(array1: T[], array2: T[]) {
  return [...new Set([...array1, ...array2])];
}

/**
 * Find all elements in two arrays.
 *
 * Pass a function to judge equation or fallback to `union`.
 *
 * Return a new array.
 */
export function unionWith<T>(
  array1: T[],
  array2: T[],
  equalFn?: (value1: T, value2: T) => boolean,
) {
  return uniqWith([...array1, ...array2], equalFn);
}
