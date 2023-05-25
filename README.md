# @modyqyw/utils

[![License](https://img.shields.io/github/license/ModyQyW/utils)](https://github.com/ModyQyW/utils/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/@modyqyw/utils)](https://www.npmjs.com/package/@modyqyw/utils/)

Opinionated shareable utils for different JavaScript/TypeScript projects. Requires `node >= 14.18`.

## Installation

```shell
npm install @modyqyw/utils
```

## API

### base

I recommend [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone) for deep clone.

#### is & assert

Reexported from [@sindresorhus/is](https://github.com/sindresorhus/is).

Also provide `isString`, `isNumber`, `isBigInt`, `isBoolean`, `isUndefined`, `isNull`, `isSymbol`, `isObject`, `isFunction` and `isArray` for simple usage.

#### merge

Reexported from [deepmerge](https://github.com/TehShrike/deepmerge).

#### getTimestamp

Get millisecond-based timestamp.

```typescript
import { getTimestamp } from '@modyqyw/utils';

const timestamp = getTimestamp();
```

### getType

Get value type name.

```typescript
import { getType } from '@modyqyw/utils';

getType(null); // Null
getType(); // Undefined
getType(undefined); // Undefined
getType(true); // Boolean
getType(0); // Number
getType(0n); // BigInt
getType(''); // String
getType({}); // Object
getType([]); // Array
```

#### isEqual

Use `Object.is` directly to determine if two values are equal. Use [isDeepEqual](#isdeepequal) if you need a deep comparison.

```typescript
import { isEqual } from '@modyqyw/utils';

isEqual(null, null); // true
isEqual(undefined, null); // false
isEqual(undefined, undefined); // true
isEqual(true, true); // true
isEqual(false, false); // true
isEqual(true, false); // true
isEqual(1, 2); // false
isEqual(1, 1); // true
isEqual({}, {}); // false
isEqual({ a: 1 }, { a: 1, b: 2 }); // false
isEqual({ a: 1 }, { a: 1 }); // false
isEqual({ a: 1, b: { c: true } }, { a: 1, b: { c: true } }); // false
isEqual({ a: 1, b: { c: true } }, { a: 1, b: { c: false } }); // false
isEqual([], []); // false
isEqual([1, 2, 3, { a: 1, b: { c: true } }], [1, 2, 3, { a: 1, b: { c: true } }]); // false
isEqual([1, 2, 3, { a: 1, b: { c: true } }], [1, 2, 3, { a: 1, b: { c: false } }]); // false
```

#### isDeepEqual

Determine if two values are equal. For arrays, recursively determine the value corresponding to each index. For objects, recursively determine the value of each key. Other cases are determined with `Object.is`.

```typescript
import { isDeepEqual } from '@modyqyw/utils';

isDeepEqual(null, null); // true
isDeepEqual(undefined, null); // false
isDeepEqual(undefined, undefined); // true
isDeepEqual(true, true); // true
isDeepEqual(false, false); // true
isDeepEqual(true, false); // true
isDeepEqual(1, 2); // false
isDeepEqual(1, 1); // true
isDeepEqual({}, {}); // true
isDeepEqual({ a: 1 }, { a: 1, b: 2 }); // false
isDeepEqual({ a: 1 }, { a: 1 }); // true
isDeepEqual({ a: 1, b: { c: true } }, { a: 1, b: { c: true } }); // true
isDeepEqual({ a: 1, b: { c: true } }, { a: 1, b: { c: false } }); // false
isDeepEqual([], []); // true
isDeepEqual([1, 2, 3, { a: 1, b: { c: true } }], [1, 2, 3, { a: 1, b: { c: true } }]); // true
isDeepEqual([1, 2, 3, { a: 1, b: { c: true } }], [1, 2, 3, { a: 1, b: { c: false } }]); // false
```

### string

#### lowerCase

Convert string to lower case.

```typescript
import { lowerCase } from '@modyqyw/utils';

lowerCase(''); // ''
lowerCase('test'); // 'test'
lowerCase('TEST'); // 'test'
lowerCase('test string'); // 'test string'
lowerCase('TEST STRING'); // 'test string'
```

#### localeLowerCase

Convert string to locale lower case.

```typescript
import { localeLowerCase } from '@modyqyw/utils';

localeLowerCase('STRING', 'en-US'); // 'string'
```

#### lowerCaseFirst

Convert first char to lower case.

```typescript
import { lowerCaseFirst } from '@modyqyw/utils';

lowerCaseFirst(''); // ''
lowerCaseFirst('test'); // 'test'
lowerCaseFirst('TEST'); // 'tEST'
lowerCaseFirst('test string'); // 'test string'
lowerCaseFirst('TEST STRING'); // 'tEST STRING'
```

#### upperCase

Convert string to upper case.

```typescript
import { upperCase } from '@modyqyw/utils';

upperCase(''); // ''
upperCase('test'); // 'TEST'
upperCase('TEST'); // 'TEST'
upperCase('test string'); // 'TEST STRING'
upperCase('TEST STRING'); // 'TEST STRING'
```

#### localeUpperCase

Convert string to locale upper case.

```typescript
import { localeLowerCase } from '@modyqyw/utils';

localeLowerCase('string', 'en-US'); // 'STRING'
```

#### upperCaseFirst

Convert first char to upper case.

```typescript
import { lowerCaseFirst } from '@modyqyw/utils';

lowerCaseFirst(''); // ''
lowerCaseFirst('test'); // 'test'
lowerCaseFirst('TEST'); // 'tEST'
lowerCaseFirst('test string'); // 'test string'
lowerCaseFirst('TEST STRING'); // 'tEST STRING'
```

#### toString

Convert value to string. Try `value.toString()` first, then `Object.prototype.toString.call(value)`.

```typescript
import { toString } from '@modyqyw/utils';

toString(null); // '[object Null]'
toString(0); // '0'
toString(Symbol('test')); // 'Symbol(test)'
toString([1, 2, 3]); // '1,2,3'
```

### array

#### arrayIncludes

Same as `Array#includes`. With better types. From [ts-extras](https://github.com/sindresorhus/ts-extras).

#### toArray

Convert value to an array.

```typescript
import { toArray } from '@modyqyw/utils';

toArray(); // []
toArray(undefined); // []
toArray(null); // []
toArray(1); // [1]
toArray('abc'); // ['abc']
toArray({ a: 1, b: 2 }); // [{ a: 1, b: 2 }]
toArray([1, 2]); // [1, 2]
```

#### difference

Find difference elements between two arrays. Pass a function to judge equation or fallback to `Array.prototype.includes`. Return a new array.

```typescript
import { difference, isDeepEqual } from '@modyqyw/utils';

difference([1, '2'], [1]); // ['2']
difference([1, '2', {}], [1, {}]); // ['2', {}]
difference([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }]); // ['2', { a: { b: 'c' } }]
difference([1, '2', {}], [1, {}], isDeepEqual); // ['2']
difference([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }], isDeepEqual); // ['2']
```

#### intersection

Find same elements between two arrays. Pass a function to judge equation or fallback to `Array.prototype.includes`. Return a new array.

```typescript
import { intersection, isDeepEqual } from '@modyqyw/utils';

intersection([1, '2'], [1]); // [1]
intersection([1, '2', {}], [1, {}]); // [1]
intersection([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }]); // [1]
intersection([1, '2', {}], [1, {}], isDeepEqual); // [1, {}]
intersection([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }], isDeepEqual); // [1, {
 * a: { b: 'c' } }]
```

#### uniq

Find unique elements. Pass a function to judge equation or fallback to `Set`. Return a new array.

```typescript
import { uniq, isDeepEqual } from '@modyqyw/utils';

uniq([1, '2', 2, 2, '2']); // [1, '2', 2]
uniq([1, '2', 2, 2, '2', {}, {}]); // [1, '2', 2, {}, {}]
uniq([1, '2', 2, 2, '2', {}, {}], isDeepEqual); // [1, '2', 2, {}]
```

#### union

Find all elements in two arrays. Return a new array.

```typescript
import { union, isDeepEqual } from '@modyqyw/utils';

union([1, '2'], [1, 3]); // [1, '2', 3]
union([1, '2', {}], [1, 3, {}]); // [1, '2', {}, 3, {}]
union([1, '2', { a: { b: 'c' } }], [1, 3, { a: { b: 'c' } }]); // [1, '2', { a: { b: 'c' } }, 3, { a: { b: 'c' } }])
union([1, '2', {}], [1, 3, {}], isDeepEqual); // [1, '2', {}, 3]
union([1, '2', { a: { b: 'c' } }], [1, 3, { a: { b: 'c' } }], isDeepEqual); // [1, '2', { a: { b: 'c' } }, 3]
```

#### range

Creates an array of numbers (positive and/or negative) progressing from `start` up to, but not including `end`.

`start` is set to 0 by default. You can pass `end` directly.

`step` is set to 1 when `start` < `end` and -1 when `start` >= `end` by default.

Return a new array.

```typescript
import { range } from '@modyqyw/utils';

range(4); // [0, 1, 2, 3]
range(-4); // [0, -1, -2, -3]
range(1, 5); // [1, 2, 3, 4]
range(0, 20, 5); // [0, 5, 10, 15]
range(0, -4, -1); // [0, -1, -2, -3]
range(1, 4, 0); // [1, 1, 1]
range(0); // []
```

### object

#### objectKeys

Same as `Object.keys`. With better types. From [ts-extras](https://github.com/sindresorhus/ts-extras).

#### objectEntries

Same as `Object.entries`. With better types. From [ts-extras](https://github.com/sindresorhus/ts-extras).

#### objectFromEntries

Same as `Object.fromEntries`. With better types. From [ts-extras](https://github.com/sindresorhus/ts-extras).

### set

#### setHas

Same as `Set#has`. With better types. From [ts-extras](https://github.com/sindresorhus/ts-extras).

### promise

#### pLimit

Reexported from [p-limit](https://github.com/sindresorhus/p-limit).

#### pRetry

Reexported from [p-retry](https://github.com/sindresorhus/p-retry).

#### pDebounce

Reexported from [p-debounce](https://github.com/sindresorhus/p-debounce).

#### pThrottle

Reexported from [p-throttle](https://github.com/sindresorhus/p-throttle).

#### sleep

Sleep 💤, then call `callback` if passed.

```typescript
import { sleep } from '@modyqyw/utils';

await sleep(1000); // sleep 1s
await sleep(1000, () => {
  console.log('Hi.');
}); // sleep 1s, then log `Hi.`
```

### function

#### throttle

Creates a throttled function that only invokes `callback` at most once per every `delay` milliseconds.

```typescript
import { throttle } from '@modyqyw/utils';

const throttled = throttle(fn, 1000);
throttled(); // called
throttled();
throttled();
throttled(); // called
setTimeout(throttled, 1200); // called
```

Disable `leading` or `trailing` in the third param. Default `{ leading: true, trailing: true }`.

```typescript
import { throttle } from '@modyqyw/utils';

const throttled = throttle(fn, 1000, { trailing: false });
throttled(); // called
throttled();
throttled();
throttled();
setTimeout(throttled, 1200); // called
```

```typescript
import { throttle } from '@modyqyw/utils';

const throttled = throttle(fn, 1000, { leading: false });
throttled();
throttled();
throttled();
throttled(); // called
setTimeout(throttled, 1200); // called
```

```typescript
import { throttle } from '@modyqyw/utils';

const throttled = throttle(fn, 1000, { leading: false, trailing: false });
throttled();
throttled();
throttled();
throttled();
setTimeout(throttled, 1200);
```

Use `.abort()` to abort next invocations. Pass `true` to abort the next invocation.

```typescript
import { throttle } from '@modyqyw/utils';

const throttled = throttle(fn, 1000);
throttled(); // called
throttled();
throttled.abort(true);
throttled(); // called
throttled.abort();
throttled();
throttled();
```

#### debounce

Creates a debounced function that delays invoking `callback` until after `delay` milliseconds have elapsed since the last time the debounced function was invoked.

```typescript
import { debounce } from '@modyqyw/utils';

const debounced = debounce(fn, 1000);
debounced();
debounced();
debounced();
debounced(); // called
setTimeout(debounced, 1200); // called
```

Disable `leading` or `trailing` in the third param. Default `{ leading: false, trailing: true }`.

```typescript
import { debounce } from '@modyqyw/utils';

const debounced = debounce(fn, 1000, { leading: false, trailing: false });
debounced();
debounced();
debounced();
debounced();
setTimeout(debounced, 1200);
```

```typescript
import { debounce } from '@modyqyw/utils';

const debounced = debounce(fn, 1000, { leading: true, trailing: true });
debounced(); // called
debounced();
debounced();
debounced(); // called
setTimeout(debounced, 1200); // called
```

```typescript
import { debounce } from '@modyqyw/utils';

const debounced = debounce(fn, 1000, { leading: true, trailing: false });
debounced(); // called
debounced();
debounced();
debounced();
setTimeout(debounced, 1200); // called
```

Use `.abort()` to abort next invocations. Pass `true` to abort the next invocation.

```typescript
import { debounce } from '@modyqyw/utils';

const debounced = debounce(fn, 1000);
debounced();
debounced();
debounced.abort(true);
debounced(); // called
debounced.abort();
debounced();
debounced();
```

#### pipe

Performs left-to-right function composition.

```typescript
import { pipe } from '@modyqyw/utils';

const fn = pipe(
  (a: number, b: number) => a + b, // first do
  (a) => Math.pow(a, 2), // second do
  (a) => a * 3,
  (a) => a / 4,
  (a) => a - 2,
);
fn(1, 1); // 1
```

#### noop

Empty function.

```typescript
import { noop } from '@modyqyw/utils';

// nothing happen
noop();
```

### types

#### `type-fest`

Reexported all types from [type-fest](https://github.com/sindresorhus/type-fest).

#### AnyRecord

```typescript
type AnyRecord = Record<string, any>;
```

#### Falsy

```typescript
type Falsy = false | 0 | 0n | '' | null | undefined;
```

#### Awaitable

```typescript
import { Promisable } from 'type-fest';

type Awaitable<T> = Promisable<T>;
```

#### Nullable

```typescript
type Nullable<T> = T | null;
```

#### Undefinable

```typescript
type Undefinable<T> = T | undefined;
```

#### Optional

```typescript
type Optional<T> = T | null | undefined;
```

#### Arrayble

```typescript
type Arrayable<T> = T | Array<T>;
```

#### ElementOf

```typescript
type ElementOf<T> = T extends (infer E)[] ? E : never;
```

#### Fn

```typescript
type Fn = () => void;
```

#### PromisifyFn

```typescript
type PromisifyFn<T extends Fn> = () => Promise<ReturnType<T>>;
```

#### AnyFn

```typescript
type AnyFn<T = any> = (...args: any[]) => T;
```

#### PromisifyAnyFn

```typescript
type PromisifyAnyFn<T extends AnyFn> = (...args: Parameters<T>) => Promise<ReturnType<T>>;
```

## Acknowledges

Inspired by [@antfu/utils](https://github.com/antfu/utils).

I have checked and learned from these libraries. Thanks a lot! Check them for more if you need.

- [lodash](https://lodash.com/)
- [ramda](https://ramdajs.com/)
- [rameda](https://remedajs.com/)
- [fp-ts](https://gcanti.github.io/fp-ts/)
- [io-ts](https://gcanti.github.io/io-ts/)
- [zod](https://zod.dev/)
- [change-case](https://github.com/blakeembrey/change-case)
- [promise-fun](https://github.com/sindresorhus/promise-fun)
- [rxjs](https://rxjs.dev/)
- [mlly](https://github.com/unjs/mlly)
- [pkg-types](https://github.com/unjs/pkg-types)
- [local-pkg](https://github.com/antfu/local-pkg)
- [type-fest](https://github.com/sindresorhus/type-fest)
- [ts-essentials](https://github.com/ts-essentials/ts-essentials)

## [Sponsors](https://github.com/ModyQyW/sponsors)

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg"/>
  </a>
</p>
