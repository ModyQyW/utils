import short from 'short-uuid';

/**
 * Get uuid(v4).
 * @returns - Returns a uuid(v4) string.
 */
export const uuidV4 = () =>
  short.uuid() as string & { _guidBrand: 'short-uuid' };
