/* eslint-disable import/prefer-default-export */
import { isNull, isNaN, isArray, isInteger } from 'lodash-es';

export function isFloat(value: any) {
  return (
    !isNull(value) && !isNaN(value) && !isArray(value) && !isInteger(value)
  );
}
