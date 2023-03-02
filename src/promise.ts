import { Fn } from './types';

export { default as pLimit } from 'p-limit';
export { default as pRetry } from 'p-retry';
export { default as pDebounce } from 'p-debounce';
export { default as pThrottle } from 'p-throttle';

/** Sleep 💤, then call `callback` if passed. */
export function sleep<T = any>(ms: number, callback?: Fn<T>) {
  return new Promise<void>((resolve) =>
    setTimeout(async () => {
      await callback?.();
      resolve();
    }, ms),
  );
}
