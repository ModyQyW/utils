import { Nullable, Arrayable } from './types';

export { arrayIncludes } from 'ts-extras';

/** Convert value to an array. */
export const toArray = <T>(value?: Nullable<Arrayable<T>>) => {
  const v = value ?? [];
  return Array.isArray(v) ? v : [v];
};

/**
 * Find difference elements between two arrays.
 *
 * Return a new array.
 */
export const difference = <T>(array1: T[], array2: T[]) =>
  array1.filter((item) => !array2.includes(item));

/**
 * Find difference elements between two arrays.
 *
 * Pass a function to judge equation or fallback to `difference`.
 *
 * Return a new array.
 */
export const differenceWith = <T>(
  array1: T[],
  array2: T[],
  equalFn?: (value1: T, value2: T) => boolean,
) => {
  if (!equalFn) return difference(array1, array2);
  const result: T[] = [];
  for (const item of array1) {
    const index = array2.findIndex((value) => equalFn(item, value));
    if (index === -1) result.push(item);
  }
  return result;
};

/**
 * Find same elements between two arrays.
 *
 * Return a new array.
 */
export const intersection = <T>(array1: T[], array2: T[]) =>
  array1.filter((item) => array2.includes(item));

/**
 * Find same elements between two arrays.
 *
 * Pass a function to judge equation or fallback to `intersection`.
 *
 * Return a new array.
 */
export const intersectionWith = <T>(
  array1: T[],
  array2: T[],
  equalFn?: (value1: T, value2: T) => boolean,
) => {
  if (!equalFn) return intersection(array1, array2);
  const result: T[] = [];
  for (const item of array1) {
    const index = array2.findIndex((value) => equalFn(item, value));
    if (index >= 0) result.push(item);
  }
  return result;
};

/**
 * Find unique elements.
 *
 * Return a new array.
 */
export const uniq = <T>(array: T[]) => [...new Set(array)];

/**
 * Find unique elements.
 *
 * Pass a function to judge equation or fallback to `uniq`.
 *
 * Return a new array.
 */
export const uniqWith = <T>(array: T[], equalFn?: (value1: T, value2: T) => boolean) => {
  if (!equalFn) return uniq(array);
  const result: T[] = [];
  for (const item of array) {
    const index = result.findIndex((value) => equalFn(item, value));
    if (index === -1) result.push(item);
  }
  return result;
};

/**
 * Find all elements in two arrays.
 *
 * Return a new array.
 */
export const union = <T>(array1: T[], array2: T[]) => [...new Set([...array1, ...array2])];

/**
 * Find all elements in two arrays.
 *
 * Pass a function to judge equation or fallback to `union`.
 *
 * Return a new array.
 */
export const unionWith = <T>(
  array1: T[],
  array2: T[],
  equalFn?: (value1: T, value2: T) => boolean,
) => uniqWith([...array1, ...array2], equalFn);
