/* eslint-disable import/prefer-default-export */
import short from 'short-uuid';

/**
 * Get short uuid(v4).
 * @returns - Returns a short uuid(v4).
 */
export const shortUuidV4 = () =>
  short.generate() as string & { _guidBrand: 'uuid' };
