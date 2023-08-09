# @modyqyw/utils

[![License](https://img.shields.io/github/license/ModyQyW/utils)](https://github.com/ModyQyW/utils/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/@modyqyw/utils)](https://www.npmjs.com/package/@modyqyw/utils/)

English | [简体中文](./README.zh-Hans.md)

Opinionated shareable utils for different JavaScript/TypeScript projects. Requires `node >= 14.18`.

## Installation

```shell
npm install @modyqyw/utils
```

## API

### base

- Try [deepmerge](https://github.com/TehShrike/deepmerge), [deepmerge-ts](https://github.com/RebeccaStevens/deepmerge-ts) or [ts-deepmerge](https://github.com/voodoocreation/ts-deepmerge) if you are looking for a merge solution.
- Try [deepmerge](https://github.com/TehShrike/deepmerge), [deepmerge-ts](https://github.com/RebeccaStevens/deepmerge-ts), [ts-deepmerge](https://github.com/voodoocreation/ts-deepmerge), [clone](https://github.com/pvorb/clone) or [structuredClone](https://developer.mozilla.org/docs/Web/API/structuredClone) if you are looking for a clone solution.

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

#### isString

Determine if a value is a string.

```typescript
import { isString } from '@modyqyw/utils';

isString(''); // true
isString(0); // false
isString(0n); // false
isString(true); // false
isString(undefined); // false
isString(null); // false
isString(Symbol()); // false
isString({}); // false
isString(() => {}); // false
isString([]); // false
```

You can check [@sindresorhus/is](https://github.com/sindresorhus/is) for extra needs, such as `is.xxx` and type assertions.

#### isNumber

Determine if a value is a number.

```typescript
import { isNumber } from '@modyqyw/utils';

isNumber(''); // false
isNumber(0); // true
isNumber(0n); // false
isNumber(true); // false
isNumber(undefined); // false
isNumber(null); // false
isNumber(Symbol()); // false
isNumber({}); // false
isNumber(() => {}); // false
isNumber([]); // false
```

You can check [@sindresorhus/is](https://github.com/sindresorhus/is) for extra needs, such as `is.xxx` and type assertions.

#### isBigInt

Determine if a value is a bigint.

```typescript
import { isBigInt } from '@modyqyw/utils';

isBigInt(''); // false
isBigInt(0); // false
isBigInt(0n); // true
isBigInt(true); // false
isBigInt(undefined); // false
isBigInt(null); // false
isBigInt(Symbol()); // false
isBigInt({}); // false
isBigInt(() => {}); // false
isBigInt([]); // false
```

You can check [@sindresorhus/is](https://github.com/sindresorhus/is) for extra needs, such as `is.xxx` and type assertions.

#### isBoolean

Determine if a value is a boolean.

```typescript
import { isBoolean } from '@modyqyw/utils';

isBoolean(''); // false
isBoolean(0); // false
isBoolean(0n); // false
isBoolean(true); // true
isBoolean(undefined); // false
isBoolean(null); // false
isBoolean(Symbol()); // false
isBoolean({}); // false
isBoolean(() => {}); // false
isBoolean([]); // false
```

You can check [@sindresorhus/is](https://github.com/sindresorhus/is) for extra needs, such as `is.xxx` and type assertions.

#### isUndefined

Determine if a value is undefined.

```typescript
import { isUndefined } from '@modyqyw/utils';

isUndefined(''); // false
isUndefined(0); // false
isUndefined(0n); // false
isUndefined(true); // false
isUndefined(undefined); // true
isUndefined(null); // false
isUndefined(Symbol()); // false
isUndefined({}); // false
isUndefined(() => {}); // false
isUndefined([]); // false
```

You can check [@sindresorhus/is](https://github.com/sindresorhus/is) for extra needs, such as `is.xxx` and type assertions.

#### isNull

Determine if a value is null.

```typescript
import { isNull } from '@modyqyw/utils';

isNull(''); // false
isNull(0); // false
isNull(0n); // false
isNull(true); // false
isNull(undefined); // false
isNull(null); // true
isNull(Symbol()); // false
isNull({}); // false
isNull(() => {}); // false
isNull([]); // false
```

You can check [@sindresorhus/is](https://github.com/sindresorhus/is) for extra needs, such as `is.xxx` and type assertions.

#### isNullish

Determine if a value is null or undefined.

```typescript
import { isNullish } from '@modyqyw/utils';

isNullish(''); // false
isNullish(0); // false
isNullish(0n); // false
isNullish(true); // false
isNullish(undefined); // true
isNullish(null); // true
isNullish(Symbol()); // false
isNullish({}); // false
isNullish(() => {}); // false
isNullish([]); // false
```

You can check [@sindresorhus/is](https://github.com/sindresorhus/is) for extra needs, such as `is.xxx` and type assertions.

#### isSymbol

Determine if a value is a symbol.

```typescript
import { isSymbol } from '@modyqyw/utils';

isSymbol(''); // false
isSymbol(0); // false
isSymbol(0n); // false
isSymbol(true); // false
isSymbol(undefined); // false
isSymbol(null); // false
isSymbol(Symbol()); // true
isSymbol({}); // false
isSymbol(() => {}); // false
isSymbol([]); // false
```

You can check [@sindresorhus/is](https://github.com/sindresorhus/is) for extra needs, such as `is.xxx` and type assertions.

#### isObject

Determine if a value is a object.

```typescript
import { isObject } from '@modyqyw/utils';

isObject(''); // false
isObject(0); // false
isObject(0n); // false
isObject(true); // false
isObject(undefined); // false
isObject(null); // false
isObject(Symbol()); // false
isObject({}); // true
isObject(() => {}); // false
isObject([]); // false
```

You can check [@sindresorhus/is](https://github.com/sindresorhus/is) for extra needs, such as `is.xxx` and type assertions.

#### isFunction

Determine if a value is a function.

```typescript
import { isFunction } from '@modyqyw/utils';

isFunction(''); // false
isFunction(0); // false
isFunction(0n); // false
isFunction(true); // false
isFunction(undefined); // false
isFunction(null); // false
isFunction(Symbol()); // false
isFunction({}); // false
isFunction(() => {}); // true
isFunction([]); // false
```

You can check [@sindresorhus/is](https://github.com/sindresorhus/is) for extra needs, such as `is.xxx` and type assertions.

#### isArray

Determine if a value is an array.

```typescript
import { isArray } from '@modyqyw/utils';

isArray(''); // false
isArray(0); // false
isArray(0n); // false
isArray(true); // false
isArray(undefined); // false
isArray(null); // false
isArray(Symbol()); // false
isArray({}); // false
isArray(() => {}); // false
isArray([]); // true
```

You may want to determine if a value is an array and all of its items are numbers. Here is an example.

```typescript
import { isArray, isNumber } from '@modyqyw/utils';

isArray([1, 2, 3], isNumber); // true
isArray([1, 2, '3'], isNumber); // false
```

You can check [@sindresorhus/is](https://github.com/sindresorhus/is) for extra needs, such as `is.xxx` and type assertions.

#### isBlob

Determine if a value is a blob.

#### isFile

Determine if a value is a file.

#### getTimestamp

Get millisecond-based timestamp.

```typescript
import { getTimestamp } from '@modyqyw/utils';

const timestamp = getTimestamp();
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

Convert value to string. Try `value.toString()` first, then `Object#toString.call(value)`.

```typescript
import { toString } from '@modyqyw/utils';

toString(undefined); // '[object Undefined]'
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

Find difference elements between two arrays. Pass a function to judge equation or fallback to `Array#includes`. Return a new array.

```typescript
import { difference, isDeepEqual } from '@modyqyw/utils';

difference([1, '2'], [1]); // ['2']
difference([1, '2', {}], [1, {}]); // ['2', {}]
difference([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }]); // ['2', { a: { b: 'c' } }]
difference([1, '2', {}], [1, {}], isDeepEqual); // ['2']
difference([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }], isDeepEqual); // ['2']
```

#### intersection

Find same elements between two arrays. Pass a function to judge equation or fallback to `Array#includes`. Return a new array.

```typescript
import { intersection, isDeepEqual } from '@modyqyw/utils';

intersection([1, '2'], [1]); // [1]
intersection([1, '2', {}], [1, {}]); // [1]
intersection([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }]); // [1]
intersection([1, '2', {}], [1, {}], isDeepEqual); // [1, {}]
intersection([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }], isDeepEqual); // [1, { a: { b: 'c' } }]
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

Find all different elements in two arrays. Use `uniq` under the hood. Return a new array.

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

You can disable `leading` or `trailing` in the third param. Default `{ leading: true, trailing: true }`.

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

See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/) for details over the differences between throttle and debounce.

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

You can disable `leading` or `trailing` in the third param. Default `{ leading: false, trailing: true }`.

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

You can check [type-fest](https://github.com/sindresorhus/type-fest), [ts-toolbelt](https://github.com/millsp/ts-toolbelt) and [ts-essentials](https://github.com/ts-essentials/ts-essentials) for extra types.

#### AnyRecord

```typescript
type AnyRecord = Record<string, any>;
```

#### Falsy

```typescript
type Falsy = false | 0 | 0n | '' | null | undefined;
```

#### MaybePromise

```typescript
type MaybePromise<T> = T | Promise<T>;
```

#### MaybePromiseLike

```typescript
type MaybePromiseLike<T> = T | PromiseLike<T>;
```

#### Promisable

```typescript
type Promisable<T> = T | PromiseLike<T>;
```

#### Awaitable

```typescript
type Awaitable<T> = T | PromiseLike<T>;
```

#### MaybeNull

```typescript
type MaybeNull<T> = T | null;
```

#### Nullable

```typescript
type Nullable<T> = T | null;
```

#### NonNullable

**This is not the same as TypeScript [NonNullable](https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype).**

```typescript
type NonNullable<T> = Exclude<T, null>;
```

#### MaybeUndefined

```typescript
type MaybeUndefined<T> = T | undefined;
```

#### Optional

```typescript
type Optional<T> = T | undefined;
```

#### Undefinable

```typescript
type Undefinable<T> = Optional<T>;
```

#### Nullish

```typescript
type Nullish<T> = T | undefined | null;
```

#### NonNullish

**This is the same as TypeScript [NonNullable](https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype).**

```typescript
type NonNullish<T> = Exclude<T, undefined | null>;
```

#### MaybeArray

```typescript
type MaybeArray<T> = T | Array<T>;
```

#### Arrayable

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
- [remeda](https://remedajs.com/)
- [fp-ts](https://gcanti.github.io/fp-ts/)
- [io-ts](https://gcanti.github.io/io-ts/)
- [change-case](https://github.com/blakeembrey/change-case)
- [promise-fun](https://github.com/sindresorhus/promise-fun)
- [rxjs](https://rxjs.dev/)
- [mlly](https://github.com/unjs/mlly)
- [pkg-types](https://github.com/unjs/pkg-types)
- [local-pkg](https://github.com/antfu/local-pkg)
- [type-fest](https://github.com/sindresorhus/type-fest)
- [ts-essentials](https://github.com/ts-essentials/ts-essentials)
- [throttle-debounce](https://github.com/niksy/throttle-debounce)
- [joi](https://joi.dev/)
- [zod](https://zod.dev/)
- [yup](https://github.com/jquense/yup)

## [Sponsors](https://github.com/ModyQyW/sponsors)

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg"/>
  </a>
</p>
