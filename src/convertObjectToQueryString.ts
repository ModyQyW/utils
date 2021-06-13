import QueryString, { stringify } from 'qs';

/**
 * Convert object to query string.
 * @param object The Object to convert.
 * @param options Options used to convert.
 * @returns - Returns a query string.
 */
export const convertObjectToQueryString = (
  object: any,
  options?: QueryString.IStringifyOptions,
) => stringify(object, options);
