import { isError } from 'lodash-es';

/**
 * Checks if value is an URIError object.
 * @param value - The value to check.
 * @return — Returns true if value is an error object, else false.
 */
export const isURIError = (value: any) => isError(value) && value.constructor === URIError;
