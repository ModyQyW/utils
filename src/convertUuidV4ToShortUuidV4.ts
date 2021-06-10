/* eslint-disable import/prefer-default-export */
import shortUuid from 'short-uuid';

const translator = shortUuid();

/**
 * long -> short
 */
export const convertUuidV4ToShortUuidV4 = (uuid: string | shortUuid.UUID) =>
  translator.fromUUID(uuid);
