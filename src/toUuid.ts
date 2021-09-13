import short from 'short-uuid';

const translator = short();

/**
 * Convert short uuid to uuid.
 * @param shortUuid - The short uuid to convert.
 * @returns - Returns a uuid string.
 */
export const toUuid = (shortUuid: string | (string & { _guidBrand: 'uuid' })) =>
  translator.toUUID(shortUuid) as string & { _guidBrand: 'short-uuid' };
