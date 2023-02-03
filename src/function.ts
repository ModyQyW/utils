export { debounce, throttle } from 'throttle-debounce';

/** Empty function. */
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};

interface Pipe {
  <Args extends any[], Result1>(fn1: (...args: Args) => Result1): (...args: Args) => Result1;
  <Args extends any[], Result1, Result2>(
    fn1: (...args: Args) => Result1,
    fn2: (arg: Result1) => Result2,
  ): (...args: Args) => Result2;
  <Args extends any[], Result1, Result2, Result3>(
    fn1: (...args: Args) => Result1,
    fn2: (arg: Result1) => Result2,
    fn3: (arg: Result2) => Result3,
  ): (...args: Args) => Result3;
  <Args extends any[], Result1, Result2, Result3, Result4>(
    fn1: (...args: Args) => Result1,
    fn2: (arg: Result1) => Result2,
    fn3: (arg: Result2) => Result3,
    fn4: (arg: Result3) => Result4,
  ): (...args: Args) => Result4;
  <Args extends any[], Result1, Result2, Result3, Result4, Result5>(
    fn1: (...args: Args) => Result1,
    fn2: (arg: Result1) => Result2,
    fn3: (arg: Result2) => Result3,
    fn4: (arg: Result3) => Result4,
    fn5: (arg: Result4) => Result5,
  ): (...args: Args) => Result5;
  <Args extends any[], Result1, Result2, Result3, Result4, Result5, Result6>(
    fn1: (...args: Args) => Result1,
    fn2: (arg: Result1) => Result2,
    fn3: (arg: Result2) => Result3,
    fn4: (arg: Result3) => Result4,
    fn5: (arg: Result4) => Result5,
    fn6: (arg: Result5) => Result6,
  ): (...args: Args) => Result6;
  <Args extends any[], Result1, Result2, Result3, Result4, Result5, Result6, Result7>(
    fn1: (...args: Args) => Result1,
    fn2: (arg: Result1) => Result2,
    fn3: (arg: Result2) => Result3,
    fn4: (arg: Result3) => Result4,
    fn5: (arg: Result4) => Result5,
    fn6: (arg: Result5) => Result6,
    fn7: (arg: Result6) => Result7,
  ): (...args: Args) => Result7;
}
/** Performs left-to-right function composition. */
export const pipe: Pipe =
  (...fns: Array<(...args: any) => any>) =>
  (...args: any[]) => {
    let result = fns[0](...args);
    for (const fn of fns.slice(1)) {
      result = fn(result);
    }
    return result;
  };
