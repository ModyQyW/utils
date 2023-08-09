import { Fn, PromisifyFn } from './types';

/**
 * Sleep 💤, then call `callback` if passed.
 *
 * 睡觉 💤，睡醒后调用传递的 `callback`。
 *
 * @param ms - milliseconds to sleep
 * @param ms - 要睡的毫秒数
 * @param callback - the function called after awake
 * @param callback - 睡醒后要调用的方法
 */
export function sleep(ms: number, callback?: Fn | PromisifyFn<Fn>) {
  return new Promise<void>((resolve) =>
    setTimeout(async () => {
      if (callback) await callback?.();
      resolve();
    }, ms),
  );
}
