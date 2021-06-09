/* eslint-disable import/prefer-default-export */
export const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));
