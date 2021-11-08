import { isNumber, isInteger } from 'lodash-es';

/**
 * Checks if value is a float number.
 * @param value - The value to check.
 * @return - Returns true if value is a float number, else false.
 */
export const isFloat = (number?: any) => isNumber(number) && !isInteger(number);
