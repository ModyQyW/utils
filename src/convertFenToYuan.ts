import { toString } from 'lodash-es';

/**
 * Convert Fen to Yuan.
 * @param fen - Fen to convert.
 * @param digits - Digits to fixed. If negative, return number.
 * @returns - Returns a yuan string or number.
 */
export const convertFenToYuan = (fen: number | string, digits = 2) => {
  const yuan = Number.parseFloat(toString(fen)) / 100;
  return digits >= 0 ? yuan.toFixed(digits) : yuan;
};
