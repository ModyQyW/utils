/* eslint-disable import/prefer-default-export */
import { isError } from 'lodash-es';

/**
 * Checks if value is an TypeError object.
 * @param value - The value to check.
 * @return — Returns true if value is an error object, else false.
 */
export function isTypeError(value: any) {
  return isError(value) && value.constructor === TypeError;
}
