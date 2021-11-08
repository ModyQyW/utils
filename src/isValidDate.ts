import { isDate, isNaN } from 'lodash-es';

/**
 * Checks if value is classified as a valid Date object.
 * @param value - The value to check.
 * @return - Returns true if value is correctly classified, else false.
 */
export const isValidDate = (value: any) => isDate(value) && !isNaN(value.getTime());
