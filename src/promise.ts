import { Fn, PromisifyFn } from './types';

export { default as pLimit } from 'p-limit';
export { default as pRetry } from 'p-retry';

/** Sleep 💤, then call `callback` if passed. */
export function sleep(ms: number, callback?: Fn | PromisifyFn<Fn>) {
  return new Promise<void>((resolve) =>
    setTimeout(async () => {
      if (callback) await callback?.();
      resolve();
    }, ms),
  );
}
