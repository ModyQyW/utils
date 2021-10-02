/**
 * Sleep for a while :D
 * @param delay - Milliseconds to delay.
 * @returns - Returns a promise that resolve void.
 */
export const sleep = (delay: number) => new Promise<void>((resolve) => setTimeout(resolve, delay));
