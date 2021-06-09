/* eslint-disable import/prefer-default-export */
import QueryString, { stringify } from 'qs';

export const stringifyQueryString = (
  obj: any,
  options?: QueryString.IStringifyOptions | undefined,
) => stringify(obj, options);
