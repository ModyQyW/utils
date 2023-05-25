import { describe, it, expect } from 'vitest';
import { toArray, difference, intersection, uniq, union } from './array';
import { isDeepEqual } from './base';

describe('array', () => {
  it('toArray', () => {
    expect(toArray()).toStrictEqual([]);
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(toArray(undefined)).toStrictEqual([]);
    expect(toArray(null)).toStrictEqual([]);
    expect(toArray(1)).toStrictEqual([1]);
    expect(toArray('abc')).toStrictEqual(['abc']);
    expect(toArray({ a: 1, b: 2 })).toStrictEqual([{ a: 1, b: 2 }]);
    expect(toArray([1, 2])).toStrictEqual([1, 2]);
  });

  it('difference', () => {
    expect(difference([1, '2'], [1])).toStrictEqual(['2']);
    expect(difference([1, '2', {}], [1, {}])).toStrictEqual(['2', {}]);
    expect(difference([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }])).toStrictEqual([
      '2',
      { a: { b: 'c' } },
    ]);
    expect(difference([1, '2', {}], [1, {}], isDeepEqual)).toStrictEqual(['2']);
    expect(
      difference([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }], isDeepEqual),
    ).toStrictEqual(['2']);
  });

  it('intersection', () => {
    expect(intersection([1, '2'], [1])).toStrictEqual([1]);
    expect(intersection([1, '2', {}], [1, {}])).toStrictEqual([1]);
    expect(intersection([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }])).toStrictEqual([1]);
    expect(intersection([1, '2', {}], [1, {}], isDeepEqual)).toStrictEqual([1, {}]);
    expect(
      intersection([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }], isDeepEqual),
    ).toStrictEqual([1, { a: { b: 'c' } }]);
  });

  it('uniq', () => {
    expect(uniq([1, '2', 2, 2, '2'])).toStrictEqual([1, '2', 2]);
    expect(uniq([1, '2', 2, 2, '2', {}, {}])).toStrictEqual([1, '2', 2, {}, {}]);
    expect(uniq([1, '2', 2, 2, '2', {}, {}], isDeepEqual)).toStrictEqual([1, '2', 2, {}]);
  });

  it('union', () => {
    expect(union([1, '2'], [1, 3])).toStrictEqual([1, '2', 3]);
    expect(union([1, '2', {}], [1, 3, {}])).toStrictEqual([1, '2', {}, 3, {}]);
    expect(union([1, '2', { a: { b: 'c' } }], [1, 3, { a: { b: 'c' } }])).toStrictEqual([
      1,
      '2',
      { a: { b: 'c' } },
      3,
      { a: { b: 'c' } },
    ]);
    expect(union([1, '2', {}], [1, 3, {}], isDeepEqual)).toStrictEqual([1, '2', {}, 3]);
    expect(
      union([1, '2', { a: { b: 'c' } }], [1, 3, { a: { b: 'c' } }], isDeepEqual),
    ).toStrictEqual([1, '2', { a: { b: 'c' } }, 3]);
  });
});
