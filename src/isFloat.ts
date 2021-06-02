/* eslint-disable import/prefer-default-export */
import { isNumber, isNaN, isFinite, isInteger } from 'lodash-es';

/**
 * Checks if value is classified as a Number primitive or object.
 * @param value - The value to check
 * @return - Returns true if value is correctly classified, else false.
 */
export function isFloat(value?: any) {
  return (
    isNumber(value) && !isNaN(value) && isFinite(value) && !isInteger(value)
  );
}
