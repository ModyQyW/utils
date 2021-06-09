/* eslint-disable import/prefer-default-export */
import formatRMB from 'format-rmb';

export const convertNumberToUppercaseChinese = (
  num: number,
  prefix: string | undefined = '',
): {
  errCode: number;
  msg: string;
  value: string;
} => formatRMB(num, prefix);
