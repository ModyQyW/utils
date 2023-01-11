import { describe, it, expect } from 'vitest';
import { toArray } from './array';

describe('array', () => {
  it('toArray', () => {
    expect(toArray()).toStrictEqual([]);
    expect(toArray(undefined)).toStrictEqual([]);
    expect(toArray(null)).toStrictEqual([]);
    expect(toArray(1)).toStrictEqual([1]);
    expect(toArray('abc')).toStrictEqual(['abc']);
    expect(toArray({ a: 1, b: 2 })).toStrictEqual([{ a: 1, b: 2 }]);
    expect(toArray([1, 2])).toStrictEqual([1, 2]);
  });
});
