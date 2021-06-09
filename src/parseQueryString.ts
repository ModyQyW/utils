/* eslint-disable import/prefer-default-export */
import QueryString, { parse } from 'qs';

export const parseQueryString = (
  str: string,
  options?:
    | (QueryString.IParseOptions & {
        decoder?: undefined;
      })
    | undefined,
) => parse(str, options);
