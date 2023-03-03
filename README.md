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

No plans to provide `isXxx`. Just use `is.xxx`.

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
getType(true); // Boolean
getType(0); // Number
getType(0n); // BigInt
getType(''); // String
getType([]); // Array
```

#### isEqual

Use `Object.is` directly to determine if two values are equal. Use `isDeepEqual` if you need a deep comparison.

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

Determine if two values are equal. For arrays, recursively determine the value corresponding to each index. For objects, recursively determine the value of each key. Other cases are determined using `Object.is`.

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

Find difference elements in two arrays. Return a new array.

```typescript
import { difference } from '@modyqyw/utils';

difference([1, '2'], [1]); // ['2']
difference([1, '2', {}], [1, {}]); // ['2', {}]
difference([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }]); // ['2', { a: { b: 'c' } }]
```

#### differenceWith

Find difference elements in two arrays. Pass a function to judge equation or fallback to `difference`. Return a new array.

```typescript
import { isDeepEqual, differenceWith } from '@modyqyw/utils';

differenceWith([1, '2'], [1]); // ['2']
differenceWith([1, '2', {}], [1, {}]); // ['2', {}]
differenceWith([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }]); // ['2', { a: { b: 'c' } }]
differenceWith([1, '2', {}], [1, {}], isDeepEqual); // ['2']
differenceWith([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }], isDeepEqual); // ['2']
```

#### intersection

Find same elements in two arrays. Return a new array.

```typescript
import { intersection } from '@modyqyw/utils';

intersection([1, '2'], [1]); // [1]
intersection([1, '2', {}], [1, {}]); // [1]
intersection([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }]); // [1]
```

#### intersectionWith

Find same elements in two arrays. Pass a function to judge equation or fallback to `intersection`. Return a new array.

```typescript
import { isDeepEqual, intersectionWith } from '@modyqyw/utils';

intersectionWith([1, '2'], [1]); // [1]
intersectionWith([1, '2', {}], [1, {}]); // [1]
intersectionWith([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }]); // [1]
intersectionWith([1, '2', {}], [1, {}], isDeepEqual); // [1, {}]
intersectionWith([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }], isDeepEqual); // [1, { a: { b: 'c' } }]
```

#### uniq

Find unique elements. Return a new array.

```typescript
import { uniq } from '@modyqyw/utils';

uniq([1, '2', 2, 2, '2']); // [1, '2', 2]
uniq([1, '2', 2, 2, '2', {}, {}]); // [1, '2', 2, {}, {}]
```

#### uniqWith

Find unique elements. Pass a function to judge equation or fallback to `uniq`. Return a new array.

```typescript
import { uniqWith } from '@modyqyw/utils';

uniqWith([1, '2', 2, 2, '2']); // [1, '2', 2]
uniqWith([1, '2', 2, 2, '2', {}, {}]); // [1, '2', 2, {}, {}]
uniqWith([1, '2', 2, 2, '2', {}, {}], isDeepEqual); // [1, '2', 2, {}]
```

#### union

Find all elements in two arrays. Return a new array.

```typescript
import { union } from '@modyqyw/utils';

union([1, '2'], [1, 3]); // [1, '2', 3]
union([1, '2', {}], [1, 3, {}]); // [1, '2', {}, 3, {}]
union([1, '2', { a: { b: 'c' } }], [1, 3, { a: { b: 'c' } }]);
// [1, '2', { a: { b: 'c' } }, 3, { a: { b: 'c' } }]);
```

#### unionWith

Find all elements in two arrays. Pass a function to judge equation or fallback to `union`. Return a new array.

```typescript
import { isDeepEqual, unionWith } from '@modyqyw/utils';

unionWith([1, '2'], [1, 3]); // [1, '2', 3]
unionWith([1, '2', {}], [1, 3, {}]); // [1, '2', {}, 3, {}]
unionWith([1, '2', { a: { b: 'c' } }], [1, 3, { a: { b: 'c' } }]);
// [1, '2', { a: { b: 'c' } }, 3, { a: { b: 'c' } }]);
unionWith([1, '2', {}], [1, 3, {}], isDeepEqual); // [1, '2', {}, 3]
unionWith([1, '2', { a: { b: 'c' } }], [1, 3, { a: { b: 'c' } }], isDeepEqual);
// [1, '2', { a: { b: 'c' } }, 3]
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

### node

#### createCJS

Create a compatible CommonJS context that is missing in ESM.

```typescript
import { createCjs } from '@modyqyw/utils';

const { __filename, __dirname, require } = createCjs(); // same as createCjs(import.meta.url);
```

#### resolvePackageJson

Resolve `package.json` path. Not validate the existence.

```typescript
import { resolvePackageJson } from '@modyqyw/utils';

const path = resolvePackageJson(); // same as resolvePackageJson(process.cwd())
const path = resolvePackageJson('/fake/path/package.json'); // pass a path directly
```

#### getPackageJson

Get `package.json` as an object.

```typescript
import { getPackageJson } from '@modyqyw/utils';

const packageJson = getPackageJson(); // same as getPackageJson(process.cwd())
const packageJson = getPackageJson('/fake/path/package.json'); // pass a path directly
```

#### setPackageJson

Set `package.json` content.

```typescript
import { setPackageJson } from '@modyqyw/utils';

setPackageJson(); // same as setPackageJson(process.cwd())
setPackageJson('/fake/path/package.json'); // pass a path directly
```

#### resolveTsconfigJson

Resolve `tsconfig.json` path. Not validate the existence.

```typescript
import { resolveTsconfigJson } from '@modyqyw/utils';

const path = resolveTsconfigJson(); // same as resolveTsconfigJson(process.cwd())
const path = resolveTsconfigJson('/fake/path/tsconfig.json'); // pass a path directly
```

#### getTsconfigJson

Get `tsconfig.json` as an object.

```typescript
import { getTsconfigJson } from '@modyqyw/utils';

const tsconfigJson = getTsconfigJson(); // same as getTsconfigJson(process.cwd())
const tsconfigJson = getTsconfigJson('/fake/path/tsconfig.json'); // pass a path directly
```

#### setTsconfigJson

Set `tsconfig.json` content.

```typescript
import { setTsconfigJson } from '@modyqyw/utils';

setTsconfigJson(); // same as setTsconfigJson(process.cwd())
setTsconfigJson('/fake/path/tsconfig.json'); // pass a path directly
```

### types

#### Primitive

```typescript
type Primitive = null | undefined | string | number | boolean | symbol | bigint;
```

#### BuiltIns

```typescript
type BuiltIns = Primitive | Date | RegExp | Function | Error;
```

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
type Awaitable<T> = T | PromiseLike<T>;
```

You can also use `Promisable`.

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

#### PackageJson

Reexported from [type-fest](https://github.com/sindresorhus/type-fest).

#### TsConfigJson

Reexported from [type-fest](https://github.com/sindresorhus/type-fest).

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
