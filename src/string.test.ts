import { describe, it, expect } from 'vitest';
import { toString } from './string';

describe('string', () => {
  it('toString', () => {
    expect(toString(null)).toBe('[object Null]');
    expect(toString(-0)).toBe('0');
    expect(toString(0)).toBe('0');
    expect(toString(Symbol('test'))).toBe('Symbol(test)');
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });
});
