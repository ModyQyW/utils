/* eslint-disable import/prefer-default-export */
import formatRMB from 'format-rmb';

export const convertNumberToUppercaseChinese = (
  num: number,
  prefix: string | undefined = '',
) => formatRMB(num, prefix);
