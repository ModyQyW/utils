import short from 'short-uuid';

/**
 * Get short uuid(v4).
 * @returns - Returns a short uuid(v4) string.
 */
export const shortUuidV4 = () =>
  short.generate() as string & { _guidBrand: 'uuid' };