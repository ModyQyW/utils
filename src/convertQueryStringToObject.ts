import QueryString, { parse } from 'qs';

/**
 * Convert query string to object.
 * @param string The query string to convert.
 * @param options Options used to convert.
 * @returns - Returns a object.
 */
export const convertQueryStringToObject = (
  string: string,
  options?: QueryString.IParseOptions & { decoder?: undefined },
) => parse(string, options);
