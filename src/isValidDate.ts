/* eslint-disable import/prefer-default-export */
import { isDate, isNaN } from 'lodash-es';

/**
 * Checks if value is classified as a valid Date object.
 * @param value - The value to check
 * @return - Returns true if value is correctly classified, else false.
 */
export function isValidDate(value: any) {
  return isDate(value) && !isNaN(value.getTime());
}
