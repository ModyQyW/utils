import { describe, it, expect } from 'vitest';
import { pipe } from './function';

describe('function', () => {
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
