/** Empty function. */
// eslint-disable-next-line @typescript-eslint/no-empty-function
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
 * @param callback function to throttle
 * @param delay milliseconds to throttle
 * @param options options object, default `{}`
 * @param options.leading specify invoking on the leading edge of the timeout, default `true`
 * @param options.trailing specify invoking on the trailing edge of the timeout, default `true`
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
 * @param callback function to throttle
 * @param delay milliseconds to debounce
 * @param options options object, default `{}`
 * @param options.leading specify invoking on the leading edge of the timeout, default `false`
 * @param options.trailing specify invoking on the trailing edge of the timeout, default `true`
 */
export function debounce<Callback extends (...args: any) => any>(
  callback: Callback,
  delay = 0,
  { leading = false, trailing = true } = {},
) {
  return throttleOrDebounce(callback, delay, { leading, trailing, mode: 'debounce' });
}

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
/** Performs left-to-right function composition. */
export function pipe(...fns: Array<(...args: any) => any>) {
  return function (...args: any[]) {
    let result = fns[0](...args);
    for (const fn of fns.slice(1)) {
      result = fn(result);
    }
    return result;
  };
}
