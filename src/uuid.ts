import short from 'short-uuid';

/**
 * Get uuid.
 * @returns - Returns a uuid string.
 */
export const uuid = () => short.uuid() as string & { _guidBrand: 'short-uuid' };
