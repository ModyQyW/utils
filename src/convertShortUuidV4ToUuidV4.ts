/* eslint-disable import/prefer-default-export */
import shortUuid from 'short-uuid';

const translator = shortUuid();

/**
 * short -> long
 */
export const convertShortUuidV4ToUuidV4 = (sUuid: string | shortUuid.SUUID) =>
  translator.toUUID(sUuid);
