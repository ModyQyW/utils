/* eslint-disable import/prefer-default-export */
import shortUuid from 'short-uuid';

const translator = shortUuid();

/**
 * Generate a new short UUID using this translator's alphabet.
 */
export const shortUuidV4 = () => translator.new();
