/* eslint-disable import/prefer-default-export */
import formatRMB from 'format-rmb';

/**
 * Convert number to uppercase Chinese.
 * @param number - The value to convert.
 * @param prefix - The prefix to add.
 * @returns - Returns a object.
 */
export const convertNumberToUppercaseChinese = (
  number: number,
  prefix: string = '',
): {
  code: number;
  message: string;
  value: string;
} => {
  const result = formatRMB(number, prefix);
  return {
    code: result.errCode,
    message: result.msg,
    value: result.value,
  };
};
