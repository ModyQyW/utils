/* eslint-disable import/prefer-default-export */
import short from 'short-uuid';

const translator = short();

/**
 * Convert short uuid(v4) to uuid(v4).
 * @param shortUuidV4 - The short uuid(v4) to convert.
 * @returns - Returns a uuid(v4).
 */
export const convertShortUuidV4ToUuidV4 = (
  shortUuidV4: string | (string & { _guidBrand: 'uuid' }),
) => translator.toUUID(shortUuidV4) as string & { _guidBrand: 'short-uuid' };
