import { describe, it, expect } from 'vitest';
import { getTimestamp, getType, isEqual, isDeepEqual } from './base';
import { noop } from './function';

describe('base', () => {
  it('getTimestamp', () => {
    expect(getTimestamp()).toSatisfy<number>((v) => {
      const value = Date.now();
      return value - v <= 1 && value - v >= 0;
    });
  });

  it('getType', () => {
    // Null
    expect(getType(null)).toBe('Null');
    // Undefined
    expect(getType()).toBe('Undefined');
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(getType(undefined)).toBe('Undefined');
    // Boolean
    expect(getType(true)).toBe('Boolean');
    expect(getType(Boolean(''))).toBe('Boolean');
    // Number
    expect(getType(0)).toBe('Number');
    expect(getType(Number(0))).toBe('Number');
    expect(getType(Number.POSITIVE_INFINITY)).toBe('Number');
    expect(getType(Number.NEGATIVE_INFINITY)).toBe('Number');
    expect(getType(Number.NaN)).toBe('Number');
    // BigInt
    expect(getType(0n)).toBe('BigInt');
    expect(getType(BigInt(0))).toBe('BigInt');
    // String
    expect(getType('')).toBe('String');
    // Symbol
    expect(getType(Symbol(''))).toBe('Symbol');
    // Object
    expect(getType({})).toBe('Object');
    // Date
    expect(getType(new Date())).toBe('Date');
    // Array
    expect(getType([])).toBe('Array');
    // Map
    expect(getType(new Map())).toBe('Map');
    // WeakMap
    expect(getType(new WeakMap())).toBe('WeakMap');
    // Set
    expect(getType(new Set())).toBe('Set');
    // WeakSet
    expect(getType(new WeakSet())).toBe('WeakSet');
    // Function
    expect(getType(noop)).toBe('Function');
    // Error
    expect(getType(new Error('test'))).toBe('Error');
    expect(getType(new AggregateError([new Error('test')], 'test'))).toBe('Error');
    expect(getType(new EvalError('test'))).toBe('Error');
    expect(getType(new RangeError('test'))).toBe('Error');
    expect(getType(new ReferenceError('test'))).toBe('Error');
    expect(getType(new SyntaxError('test'))).toBe('Error');
    expect(getType(new TypeError('test'))).toBe('Error');
    expect(getType(new URIError('test'))).toBe('Error');
    // RegExp
    expect(getType(/.+/g)).toBe('RegExp');
    expect(getType(new RegExp(/.+/g))).toBe('RegExp');
    // Promise
    expect(getType(new Promise(noop))).toBe('Promise');
  });

  it('isEqual', () => {
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(undefined, null)).toBe(false);
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(false, false)).toBe(true);
    expect(isEqual(true, false)).toBe(false);
    expect(isEqual(1, 2)).toBe(false);
    expect(isEqual(1, 1)).toBe(true);
    expect(isEqual({}, {})).toBe(false);
    expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
    expect(isEqual({ a: 1 }, { a: 1 })).toBe(false);
    expect(isEqual({ a: 1, b: { c: true } }, { a: 1, b: { c: true } })).toBe(false);
    expect(isEqual({ a: 1, b: { c: true } }, { a: 1, b: { c: false } })).toBe(false);
    expect(isEqual([], [])).toBe(false);
    expect(isEqual([1, 2, 3, { a: 1, b: { c: true } }], [1, 2, 3, { a: 1, b: { c: true } }])).toBe(
      false,
    );
    expect(isEqual([1, 2, 3, { a: 1, b: { c: true } }], [1, 2, 3, { a: 1, b: { c: false } }])).toBe(
      false,
    );
  });

  it('isDeepEqual', () => {
    expect(isDeepEqual(null, null)).toBe(true);
    expect(isDeepEqual(undefined, null)).toBe(false);
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(isDeepEqual(undefined, undefined)).toBe(true);
    expect(isDeepEqual(true, true)).toBe(true);
    expect(isDeepEqual(false, false)).toBe(true);
    expect(isDeepEqual(true, false)).toBe(false);
    expect(isDeepEqual(1, 2)).toBe(false);
    expect(isDeepEqual(1, 1)).toBe(true);
    expect(isDeepEqual({}, {})).toBe(true);
    expect(isDeepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
    expect(isDeepEqual({ a: 1 }, { a: 1 })).toBe(true);
    expect(isDeepEqual({ a: 1, b: { c: true } }, { a: 1, b: { c: true } })).toBe(true);
    expect(isDeepEqual({ a: 1, b: { c: true } }, { a: 1, b: { c: false } })).toBe(false);
    expect(isDeepEqual([], [])).toBe(true);
    expect(
      isDeepEqual([1, 2, 3, { a: 1, b: { c: true } }], [1, 2, 3, { a: 1, b: { c: true } }]),
    ).toBe(true);
    expect(
      isDeepEqual([1, 2, 3, { a: 1, b: { c: true } }], [1, 2, 3, { a: 1, b: { c: false } }]),
    ).toBe(false);
  });
});
