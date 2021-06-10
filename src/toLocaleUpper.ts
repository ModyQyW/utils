/* eslint-disable import/prefer-default-export */
import { toString } from 'lodash-es';

/**
 * Converts string, as a whole, to locale upper case.
 * @param string — The string to convert.
 * @return — Returns the locale upper cased string.
 */
export const toLocaleUpper = (string?: string) =>
  toString(string).toLocaleUpperCase();
