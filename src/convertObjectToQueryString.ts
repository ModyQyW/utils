/* eslint-disable import/prefer-default-export */
import QueryString, { stringify } from 'qs';

/**
 * Convert object to query string.
 * @param object The Object to convert.
 * @param options Options used to convert.
 * @returns - Query string.
 */
export const convertObjectToQueryString = (
  object: any,
  options?: QueryString.IStringifyOptions,
) => stringify(object, options);
