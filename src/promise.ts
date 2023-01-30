import { Fn } from './types';

export { default as pLimit } from 'p-limit';
export { default as pRetry } from 'p-retry';
export { default as pDebounce } from 'p-debounce';
export { default as pThrottle } from 'p-throttle';

/** Sleep 💤, then call `callback` if passed. */
export const sleep = (ms: number, callback?: Fn<any>) =>
  new Promise<void>((resolve) =>
    setTimeout(async () => {
      await callback?.();
      resolve();
    }, ms),
  );
