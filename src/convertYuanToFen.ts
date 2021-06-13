import { toString } from 'lodash-es';

/**
 * Convert Yuan to Fen.
 * @param yuan - Yuan to convert.
 * @param returnNumber - Return number(true) or string(false), default true.
 * @returns - Returns a fen number or string.
 */
export const convertYuanToFen = (
  yuan: number | string,
  returnNumber = true,
) => {
  const fen = (Number.parseFloat(toString(yuan)) * 100).toFixed(0);
  return returnNumber ? Number.parseInt(fen, 10) : fen;
};
