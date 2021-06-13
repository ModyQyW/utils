import short from 'short-uuid';

const translator = short();

/**
 * Convert uuid(v4) to short uuid(v4).
 * @param uuidV4 - The uuid(v4) to convert.
 * @returns - Returns a short uuid(v4) string.
 */
export const convertUuidV4ToShortUuidV4 = (
  uuid: string | (string & { _guidBrand: 'short-uuid' }),
) => translator.fromUUID(uuid) as string & { _guidBrand: 'uuid' };
