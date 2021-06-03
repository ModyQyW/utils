/* eslint-disable import/prefer-default-export */
import { isError } from 'lodash-es';

/**
 * Checks if value is an ReferenceError object.
 * @param value - The value to check.
 * @return — Returns true if value is an error object, else false.
 */
export function isReferenceError(value: any) {
  return isError(value) && value.constructor === ReferenceError;
}
