import { describe, it, expect } from 'vitest';
import {
  isString,
  isNumber,
  isBigInt,
  isBoolean,
  isUndefined,
  isNull,
  isSymbol,
  isObject,
  isFunction,
  isArray,
  getTimestamp,
  getType,
  isEqual,
  isDeepEqual,
} from './base';
import { noop } from './function';

describe('base', () => {
  it('isString', () => {
    expect(isString('')).toBe(true);
    expect(isString(0)).toBe(false);
    expect(isString(0n)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(Symbol())).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(noop)).toBe(false);
    expect(isString([])).toBe(false);
  });

  it('isNumber', () => {
    expect(isNumber('')).toBe(false);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(0n)).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(Symbol())).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(noop)).toBe(false);
    expect(isNumber([])).toBe(false);
  });

  it('isBigInt', () => {
    expect(isBigInt('')).toBe(false);
    expect(isBigInt(0)).toBe(false);
    expect(isBigInt(0n)).toBe(true);
    expect(isBigInt(true)).toBe(false);
    expect(isBigInt(undefined)).toBe(false);
    expect(isBigInt(null)).toBe(false);
    expect(isBigInt(Symbol())).toBe(false);
    expect(isBigInt({})).toBe(false);
    expect(isBigInt(noop)).toBe(false);
    expect(isBigInt([])).toBe(false);
  });

  it('isBoolean', () => {
    expect(isBoolean('')).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(0n)).toBe(false);
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(Symbol())).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean(noop)).toBe(false);
    expect(isBoolean([])).toBe(false);
  });

  it('isUndefined', () => {
    expect(isUndefined('')).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(0n)).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(Symbol())).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined(noop)).toBe(false);
    expect(isUndefined([])).toBe(false);
  });

  it('isNull', () => {
    expect(isNull('')).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull(0n)).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(null)).toBe(true);
    expect(isNull(Symbol())).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull(noop)).toBe(false);
    expect(isNull([])).toBe(false);
  });

  it('isSymbol', () => {
    expect(isSymbol('')).toBe(false);
    expect(isSymbol(0)).toBe(false);
    expect(isSymbol(0n)).toBe(false);
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(Symbol())).toBe(true);
    expect(isSymbol({})).toBe(false);
    expect(isSymbol(noop)).toBe(false);
    expect(isSymbol([])).toBe(false);
  });

  it('isObject', () => {
    expect(isObject('')).toBe(false);
    expect(isObject(0)).toBe(false);
    expect(isObject(0n)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(Symbol())).toBe(false);
    expect(isObject({})).toBe(true);
    expect(isObject(noop)).toBe(false);
    expect(isObject([])).toBe(false);
  });

  it('isFunction', () => {
    expect(isFunction('')).toBe(false);
    expect(isFunction(0)).toBe(false);
    expect(isFunction(0n)).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(Symbol())).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(noop)).toBe(true);
    expect(isFunction([])).toBe(false);
  });

  it('isArray', () => {
    expect(isArray('')).toBe(false);
    expect(isArray(0)).toBe(false);
    expect(isArray(0n)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(Symbol())).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(noop)).toBe(false);
    expect(isArray([])).toBe(true);
    expect(isArray<number>([])).toBe(true);
    expect(isArray<number>([1, 2, 3], isNumber)).toBe(true);
    expect(isArray<number>([1, 2, '3'], isNumber)).toBe(false);
  });

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
