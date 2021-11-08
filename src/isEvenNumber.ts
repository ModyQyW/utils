import { isSafeInteger } from 'lodash-es';

/**
 * Checks if value is a safe even number.
 * @param value - The value to check.
 * @return - Returns true if value is a safe even number, else false.
 */
export const isEvenNumber = (number?: any) => isSafeInteger(number) && number % 2 === 0;
