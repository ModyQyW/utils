/* eslint-disable import/prefer-default-export */
import { toString } from 'lodash-es';

/**
 * Convert Yuan to Fen.
 * @param yuan - Yuan to convert.
 * @param returnNumber - Return number(true) or string(false), default true.
 * @returns - Returns Fen.
 */
export const convertYuanToFen = (
  yuan: number | string,
  returnNumber = true,
) => {
  const fen = (parseFloat(toString(yuan)) * 100).toFixed(0);
  return returnNumber ? parseInt(fen, 10) : fen;
};
