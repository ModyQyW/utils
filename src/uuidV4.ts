/* eslint-disable import/prefer-default-export */
import { v4, V4Options } from 'uuid';

export const uuidV4 = (options?: V4Options | undefined) => v4(options);
