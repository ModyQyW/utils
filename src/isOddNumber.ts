import { isSafeInteger } from 'lodash-es';

/**
 * Checks if value is a safe odd number.
 * @param value - The value to check.
 * @return - Returns true if value is a safe odd number, else false.
 */
export const isOddNumber = (number?: any) => isSafeInteger(number) && number % 2 === 1;
