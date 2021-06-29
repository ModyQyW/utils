import { isDate } from './isDate';

/**
 * Checks if value is classified as a valid Date object.
 * @param value - The value to check.
 * @return - Returns true if value is correctly classified, else false.
 */
export const isValidDate = (value: any) =>
  isDate(value) && !Number.isNaN(value.getTime());
