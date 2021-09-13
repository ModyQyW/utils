import short from 'short-uuid';

/**
 * Get short uuid.
 * @returns - Returns a short uuid string.
 */
export const shortUuid = () =>
  short.generate() as string & { _guidBrand: 'uuid' };
