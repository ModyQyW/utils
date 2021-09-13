import short from 'short-uuid';

const translator = short();

/**
 * Convert uuid to short uuid.
 * @param uuid - The uuid to convert.
 * @returns - Returns a short uuid string.
 */
export const toShortUuid = (
  uuid: string | (string & { _guidBrand: 'short-uuid' }),
) => translator.fromUUID(uuid) as string & { _guidBrand: 'uuid' };
