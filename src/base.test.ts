import { describe, it, expect } from 'vitest';
import { timestamp } from './base';

describe('base', () => {
  it('timestamp', () => {
    expect(timestamp()).toSatisfy<number>((v) => {
      const val = +new Date();
      return val - v <= 1 && val - v >= 0;
    });
  });
});
