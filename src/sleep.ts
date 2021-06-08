/* eslint-disable import/prefer-default-export */
export function sleep(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
