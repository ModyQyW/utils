import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { throttle, debounce, pipe, noop } from './function';

describe('function', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const mockFn = vi.fn(noop);

  it('throttle with { leading: true, trailing: true }', () => {
    const throttled = throttle(mockFn, 1000);
    throttled(); // called
    throttled();
    throttled();
    throttled(); // called
    setTimeout(throttled, 1200); // called
    vi.advanceTimersByTime(2500);
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it('throttle with { leading: true, trailing: false }', () => {
    const throttled = throttle(mockFn, 1000, { trailing: false });
    throttled(); // called
    throttled();
    throttled();
    throttled();
    setTimeout(throttled, 1200); // called
    vi.advanceTimersByTime(2500);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('throttle with { leading: false, trailing: true }', () => {
    const throttled = throttle(mockFn, 1000, { leading: false });
    throttled();
    throttled();
    throttled();
    throttled(); // called
    setTimeout(throttled, 1200); // called
    vi.advanceTimersByTime(2500);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('throttle with { leading: false, trailing: false }', () => {
    const throttled = throttle(mockFn, 1000, { leading: false, trailing: false });
    throttled();
    throttled();
    throttled();
    throttled();
    setTimeout(throttled, 1200);
    vi.advanceTimersByTime(2500);
    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  it('throttle then abort', () => {
    const throttled = throttle(mockFn, 1000);
    throttled(); // called
    throttled();
    throttled.abort(true);
    throttled(); // called
    vi.advanceTimersByTime(1200);
    expect(throttled.isAborted()).toBe(false);
    expect(mockFn).toHaveBeenCalledTimes(2);
    throttled.abort();
    throttled();
    throttled();
    vi.advanceTimersByTime(1200);
    expect(throttled.isAborted()).toBe(true);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('debounce with { leading: false, trailing: true }', () => {
    const debounced = debounce(mockFn, 1000);
    debounced();
    debounced();
    debounced();
    debounced(); // called
    setTimeout(debounced, 1200); // called
    vi.advanceTimersByTime(2500);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('debounce with {leading: false, trailing: false}', () => {
    const debounced = debounce(mockFn, 1000, { leading: false, trailing: false });
    debounced();
    debounced();
    debounced();
    debounced();
    setTimeout(debounced, 1200);
    vi.advanceTimersByTime(2500);
    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  it('debounce with {leading: true, trailing: true}', () => {
    const debounced = debounce(mockFn, 1000, { leading: true, trailing: true });
    debounced(); // called
    debounced();
    debounced();
    debounced(); // called
    setTimeout(debounced, 1200); // called
    vi.advanceTimersByTime(2500);
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it('debounce with {leading: true, trailing: false}', () => {
    const debounced = debounce(mockFn, 1000, { leading: true, trailing: false });
    debounced(); // called
    debounced();
    debounced();
    debounced();
    setTimeout(debounced, 1200); // called
    vi.advanceTimersByTime(2500);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('debounce then abort', () => {
    const debounced = debounce(mockFn, 1000);
    debounced();
    debounced();
    debounced.abort(true);
    debounced(); // called
    vi.advanceTimersByTime(1200);
    expect(debounced.isAborted()).toBe(false);
    expect(mockFn).toHaveBeenCalledTimes(1);
    debounced.abort();
    debounced();
    debounced();
    vi.advanceTimersByTime(1200);
    expect(debounced.isAborted()).toBe(true);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('pipe', () => {
    expect(pipe((a: number, b: number) => a + b)(1, 1)).toBe(2);
    expect(
      pipe(
        (a: number, b: number) => a + b,
        (a) => Math.pow(a, 2),
      )(1, 1),
    ).toBe(4);
    expect(
      pipe(
        (a: number, b: number) => a + b,
        (a) => Math.pow(a, 2),
        (a) => a * 3,
      )(1, 1),
    ).toBe(12);
    expect(
      pipe(
        (a: number, b: number) => a + b,
        (a) => Math.pow(a, 2),
        (a) => a * 3,
        (a) => a / 4,
      )(1, 1),
    ).toBe(3);
    expect(
      pipe(
        (a: number, b: number) => a + b,
        (a) => Math.pow(a, 2),
        (a) => a * 3,
        (a) => a / 4,
        (a) => a - 2,
      )(1, 1),
    ).toBe(1);
    expect(
      pipe(
        (a: number, b: number) => a + b,
        (a) => Math.pow(a, 2),
        (a) => a * 3,
        (a) => a / 4,
        (a) => a - 2,
        (a) => Math.pow(a, 3),
      )(1, 1),
    ).toBe(1);
    expect(
      pipe(
        (a: number, b: number) => a + b,
        (a) => Math.pow(a, 2),
        (a) => a * 3,
        (a) => a / 4,
        (a) => a - 2,
        (a) => Math.pow(a, 3),
        (a) => Number.isNaN(a),
      )(1, 1),
    ).toBe(false);
  });
});
