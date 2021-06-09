/* eslint-disable import/prefer-default-export */
import { isError } from 'lodash-es';

/**
 * Checks if value is an RangeError object.
 * @param value - The value to check.
 * @return — Returns true if value is an error object, else false.
 */
export const isRangeError = (value: any) =>
  isError(value) && value.constructor === RangeError;
