import { nanoid as nano } from 'nanoid';

/**
 * Generate secure URL-friendly unique ID.
 * By default, the ID will have 21 symbols to have a collision probability similar to UUID v4.
 * @param size — Size of the ID. The default size is 21.
 * @returns — Returns a random string.
 */
export const nanoid = (size = 21) => nano(size);
