import { isNumber, isNaN, isFinite, isInteger } from 'lodash-es';

/**
 * Checks if value is classified as a Number primitive or object.
 * @param value - The value to check.
 * @return - Returns true if value is correctly classified, else false.
 */
export const isFloat = (value?: any) =>
  isNumber(value) && !isNaN(value) && isFinite(value) && !isInteger(value);
