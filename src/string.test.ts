import { describe, it, expect } from 'vitest';
import {
  lowerCase,
  lowerCaseFirst,
  localeLowerCase,
  upperCase,
  upperCaseFirst,
  localeUpperCase,
  toString,
} from './string';

describe('string', () => {
  it('lowerCase', () => {
    expect(lowerCase('')).toBe('');
    expect(lowerCase('test')).toBe('test');
    expect(lowerCase('TEST')).toBe('test');
    expect(lowerCase('test string')).toBe('test string');
    expect(lowerCase('TEST STRING')).toBe('test string');
  });

  it('localeLowerCase', () => {
    expect(localeLowerCase('STRING', 'en-US')).toBe('string');
  });

  it('lowerCaseFirst', () => {
    expect(lowerCaseFirst('')).toBe('');
    expect(lowerCaseFirst('test')).toBe('test');
    expect(lowerCaseFirst('TEST')).toBe('tEST');
    expect(lowerCaseFirst('test string')).toBe('test string');
    expect(lowerCaseFirst('TEST STRING')).toBe('tEST STRING');
  });

  it('upperCase', () => {
    expect(upperCase('')).toBe('');
    expect(upperCase('test')).toBe('TEST');
    expect(upperCase('TEST')).toBe('TEST');
    expect(upperCase('test string')).toBe('TEST STRING');
    expect(upperCase('TEST STRING')).toBe('TEST STRING');
  });

  it('localeUpperCase', () => {
    expect(localeUpperCase('string', 'en-US')).toBe('STRING');
  });

  it('upperCaseFirst', () => {
    expect(upperCaseFirst('')).toBe('');
    expect(upperCaseFirst('test')).toBe('Test');
    expect(upperCaseFirst('TEST')).toBe('TEST');
    expect(upperCaseFirst('test string')).toBe('Test string');
    expect(upperCaseFirst('TEST STRING')).toBe('TEST STRING');
  });

  it('toString', () => {
    expect(toString(null)).toBe('[object Null]');
    expect(toString(-0)).toBe('0');
    expect(toString(0)).toBe('0');
    expect(toString(Symbol('test'))).toBe('Symbol(test)');
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });
});
