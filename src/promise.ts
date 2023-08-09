import { Fn, PromisifyFn } from './types';

/**
 * Sleep 💤, then call `callback` if passed.
 *
 * 休眠 💤，之后如果传递了 `callback` 就会调用它。
 *
 * @param ms - milliseconds to sleep
 * @param ms - 要休眠的毫秒数
 * @param callback - the function called after awake
 * @param callback - 休眠后要调用的方法
 */
export function sleep(ms: number, callback?: Fn | PromisifyFn<Fn>) {
  return new Promise<void>((resolve) =>
    setTimeout(async () => {
      if (callback) await callback?.();
      resolve();
    }, ms),
  );
}
