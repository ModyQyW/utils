/**
 * Empty function.
 *
 * 空函数。
 */
export function noop() {}

function throttleOrDebounce<Callback extends (...args: any) => any>(
  callback: Callback,
  delay = 0,
  {
    leading = true,
    trailing = true,
    mode = 'throttle',
  }: { leading?: boolean; trailing?: boolean; mode?: 'throttle' | 'debounce' } = {},
) {
  let timerId: ReturnType<typeof setTimeout>;
  function clearTimer() {
    if (timerId) clearTimeout(timerId);
  }
  let isAborted = false;
  function abort(isOneTime = false) {
    clearTimer();
    isAborted = !isOneTime;
  }
  let lastRun = 0;
  function wrapper(...args: Parameters<Callback>) {
    function run() {
      lastRun = Date.now();
      // @ts-expect-error no types
      callback.apply(this, args);
    }
    if (isAborted) return;
    const sinceLastRun = Date.now() - lastRun;
    clearTimer();
    if (sinceLastRun >= delay) {
      if (leading) {
        run();
      } else {
        lastRun = Date.now();
        if (trailing) timerId = setTimeout(run, delay);
      }
    } else if (trailing) {
      timerId = setTimeout(run, mode === 'throttle' ? delay - sinceLastRun : delay);
    }
  }
  wrapper.abort = abort;
  wrapper.cancel = abort;
  wrapper.isAborted = function () {
    return isAborted;
  };
  wrapper.isCancelled = wrapper.isAborted;
  return wrapper;
}

/**
 * Creates a throttled function that only invokes `callback` at most once per every `delay`
 * milliseconds.
 *
 * 创建一个节流函数，每 `delay` 毫秒最多只调用一次 `callback`。
 *
 * @param callback function to throttle
 * @param callback 需要节流的方法
 * @param delay milliseconds to throttle
 * @param delay 节流的毫秒数
 * @param options options object, default `{}`
 * @param options 选项 object，默认为 `{}`
 * @param options.leading specify invoking on the leading edge of the timeout, default `true`
 * @param options.leading 是否在超时前沿调用，默认 `true`
 * @param options.trailing specify invoking on the trailing edge of the timeout, default `true`
 * @param options.leading 是否在超时后沿调用，默认 `true`
 */
export function throttle<Callback extends (...args: any) => any>(
  callback: Callback,
  delay = 0,
  { leading = true, trailing = true } = {},
) {
  return throttleOrDebounce(callback, delay, { leading, trailing, mode: 'throttle' });
}

/**
 * Creates a debounced function that delays invoking `callback` until after `delay` milliseconds
 * have elapsed since the last time the debounced function was invoked.
 *
 * 创建一个防抖函数，自上次调用以来过去了 `delay` 毫秒再调用 `callback`。。
 *
 * @param callback function to throttle
 * @param callback 需要防抖的方法
 * @param delay milliseconds to debounce
 * @param delay 防抖的毫秒数
 * @param options options object, default `{}`
 * @param options 选项 object，默认为 `{}`
 * @param options.leading specify invoking on the leading edge of the timeout, default `false`
 * @param options.leading 是否在超时前沿调用，默认 `false`
 * @param options.trailing specify invoking on the trailing edge of the timeout, default `true`
 * @param options.leading 是否在超时后沿调用，默认 `true`
 */
export function debounce<Callback extends (...args: any) => any>(
  callback: Callback,
  delay = 0,
  { leading = false, trailing = true } = {},
) {
  return throttleOrDebounce(callback, delay, { leading, trailing, mode: 'debounce' });
}

/**
 * Performs left-to-right function composition.
 *
 * 执行从左到右的函数组合。
 *
 * @example pipe((a: number, b: number) => a + b)(1, 1) => 2
 *
 * @example pipe((a: number, b: number) => a + b, (a) => Math.pow(a, 2))(1, 1) => 4
 */
export function pipe<Args extends any[], Result1>(
  fn1: (...args: Args) => Result1,
): (...args: Args) => Result1;
export function pipe<Args extends any[], Result1, Result2>(
  fn1: (...args: Args) => Result1,
  fn2: (arg: Result1) => Result2,
): (...args: Args) => Result2;
export function pipe<Args extends any[], Result1, Result2, Result3>(
  fn1: (...args: Args) => Result1,
  fn2: (arg: Result1) => Result2,
  fn3: (arg: Result2) => Result3,
): (...args: Args) => Result3;
export function pipe<Args extends any[], Result1, Result2, Result3, Result4>(
  fn1: (...args: Args) => Result1,
  fn2: (arg: Result1) => Result2,
  fn3: (arg: Result2) => Result3,
  fn4: (arg: Result3) => Result4,
): (...args: Args) => Result4;
export function pipe<Args extends any[], Result1, Result2, Result3, Result4, Result5>(
  fn1: (...args: Args) => Result1,
  fn2: (arg: Result1) => Result2,
  fn3: (arg: Result2) => Result3,
  fn4: (arg: Result3) => Result4,
  fn5: (arg: Result4) => Result5,
): (...args: Args) => Result5;
export function pipe<Args extends any[], Result1, Result2, Result3, Result4, Result5, Result6>(
  fn1: (...args: Args) => Result1,
  fn2: (arg: Result1) => Result2,
  fn3: (arg: Result2) => Result3,
  fn4: (arg: Result3) => Result4,
  fn5: (arg: Result4) => Result5,
  fn6: (arg: Result5) => Result6,
): (...args: Args) => Result6;
export function pipe<
  Args extends any[],
  Result1,
  Result2,
  Result3,
  Result4,
  Result5,
  Result6,
  Result7,
>(
  fn1: (...args: Args) => Result1,
  fn2: (arg: Result1) => Result2,
  fn3: (arg: Result2) => Result3,
  fn4: (arg: Result3) => Result4,
  fn5: (arg: Result4) => Result5,
  fn6: (arg: Result5) => Result6,
  fn7: (arg: Result6) => Result7,
): (...args: Args) => Result7;
export function pipe(...fns: ((...args: any) => any)[]) {
  return function (...args: any[]) {
    let result = fns[0](...args);
    for (const fn of fns.slice(1)) {
      result = fn(result);
    }
    return result;
  };
}
