# @modyqyw/utils

[![License](https://img.shields.io/github/license/ModyQyW/utils)](https://github.com/ModyQyW/utils/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/@modyqyw/utils)](https://www.npmjs.com/package/@modyqyw/utils/)

[English](./README.md) | 简体中文

开箱即用的工具方法，适用于不同的 JavaScript / TypeScript 项目。要求 `node >= 14.18`。

## 安装

```shell
npm install @modyqyw/utils
```

## API

### 基础

### getType

获取值的类型名称。

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

判断一个值是否为 string。

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

如果你有额外需求，比如 `ix.xxx` 和类型断言，请查看 [@sindresorhus/is](https://github.com/sindresorhus/is)。

#### isNumber

判断一个值是否为 number。

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

如果你有额外需求，比如 `ix.xxx` 和类型断言，请查看 [@sindresorhus/is](https://github.com/sindresorhus/is)。

#### isBigInt

判断一个值是否为 bigint。

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

如果你有额外需求，比如 `ix.xxx` 和类型断言，请查看 [@sindresorhus/is](https://github.com/sindresorhus/is)。

#### isBoolean

判断一个值是否为 boolean。

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

如果你有额外需求，比如 `ix.xxx` 和类型断言，请查看 [@sindresorhus/is](https://github.com/sindresorhus/is)。

#### isUndefined

判断一个值是否为 undefined。

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

如果你有额外需求，比如 `ix.xxx` 和类型断言，请查看 [@sindresorhus/is](https://github.com/sindresorhus/is)。

#### isNull

判断一个值是否为 null。

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

如果你有额外需求，比如 `ix.xxx` 和类型断言，请查看 [@sindresorhus/is](https://github.com/sindresorhus/is)。

#### isSymbol

判断一个值是否为 symbol。

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

如果你有额外需求，比如 `ix.xxx` 和类型断言，请查看 [@sindresorhus/is](https://github.com/sindresorhus/is)。

#### isObject

判断一个值是否为 object。

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

如果你有额外需求，比如 `ix.xxx` 和类型断言，请查看 [@sindresorhus/is](https://github.com/sindresorhus/is)。

#### isFunction

判断一个值是否为 function。

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

如果你有额外需求，比如 `ix.xxx` 和类型断言，请查看 [@sindresorhus/is](https://github.com/sindresorhus/is)。

#### isArray

判断一个值是否为 array。

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

你可能想要判断一个值是否为 array 且所有元素是否为 number，以下是一个例子。

```typescript
import { isArray, isNumber } from '@modyqyw/utils';

isArray([1, 2, 3], isNumber); // true
isArray([1, 2, '3'], isNumber); // false
```

如果你有额外需求，比如 `ix.xxx` 和类型断言，请查看 [@sindresorhus/is](https://github.com/sindresorhus/is)。

#### isBlob

判断一个值是否为 blob。

#### merge

从 [deepmerge](https://github.com/TehShrike/deepmerge) 重新导出。

你可以使用它做深拷贝，或者使用 [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)。

#### getTimestamp

获取毫秒级时间戳。

```typescript
import { getTimestamp } from '@modyqyw/utils';

const timestamp = getTimestamp();
```

#### isEqual

直接使用 `Object.is` 来判断两个值是否相等。如果你需要深层比较，请使用 [isDeepEqual](#isdeepequal)。

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

判断两个值是否相等。对于数组，递归地判断每个下标的值。对于对象，递归地判断每个键对应的值。其它情况使用 `Object.is` 来判断。

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

将字符串转换成小写。

```typescript
import { lowerCase } from '@modyqyw/utils';

lowerCase(''); // ''
lowerCase('test'); // 'test'
lowerCase('TEST'); // 'test'
lowerCase('test string'); // 'test string'
lowerCase('TEST STRING'); // 'test string'
```

#### localeLowerCase

将字符串转换成本地小写。

```typescript
import { localeLowerCase } from '@modyqyw/utils';

localeLowerCase('STRING', 'en-US'); // 'string'
```

#### lowerCaseFirst

将第一个字符转换成小写。

```typescript
import { lowerCaseFirst } from '@modyqyw/utils';

lowerCaseFirst(''); // ''
lowerCaseFirst('test'); // 'test'
lowerCaseFirst('TEST'); // 'tEST'
lowerCaseFirst('test string'); // 'test string'
lowerCaseFirst('TEST STRING'); // 'tEST STRING'
```

#### upperCase

将字符串转换成大写。

```typescript
import { upperCase } from '@modyqyw/utils';

upperCase(''); // ''
upperCase('test'); // 'TEST'
upperCase('TEST'); // 'TEST'
upperCase('test string'); // 'TEST STRING'
upperCase('TEST STRING'); // 'TEST STRING'
```

#### localeUpperCase

将字符串转换成本地大写。

```typescript
import { localeLowerCase } from '@modyqyw/utils';

localeLowerCase('string', 'en-US'); // 'STRING'
```

#### upperCaseFirst

将第一个字符转换成大写。

```typescript
import { lowerCaseFirst } from '@modyqyw/utils';

lowerCaseFirst(''); // ''
lowerCaseFirst('test'); // 'test'
lowerCaseFirst('TEST'); // 'tEST'
lowerCaseFirst('test string'); // 'test string'
lowerCaseFirst('TEST STRING'); // 'tEST STRING'
```

#### toString

将值转换成字符串。首先尝试 `value.toString()`，然后再尝试 `Object#toString.call(value)`。

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

和 `Array#includes` 一致，但拥有更好的类型。来源于 [ts-extras](https://github.com/sindresorhus/ts-extras)。

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

找到两个数组中不同的元素。内部默认使用 `Array#includes` 判断相等性，你也可以传入一个自定义方法。返回一个新数组。

```typescript
import { difference, isDeepEqual } from '@modyqyw/utils';

difference([1, '2'], [1]); // ['2']
difference([1, '2', {}], [1, {}]); // ['2', {}]
difference([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }]); // ['2', { a: { b: 'c' } }]
difference([1, '2', {}], [1, {}], isDeepEqual); // ['2']
difference([1, '2', { a: { b: 'c' } }], [1, { a: { b: 'c' } }], isDeepEqual); // ['2']
```

#### intersection

找到两个数组中相同的元素。内部默认使用 `Array#includes` 判断相等性，你也可以传入一个自定义方法。返回一个新数组。

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

数组去重。内部默认使用 `Array#includes` 判断相等性，你也可以传入一个自定义方法。返回一个新数组。

```typescript
import { uniq, isDeepEqual } from '@modyqyw/utils';

uniq([1, '2', 2, 2, '2']); // [1, '2', 2]
uniq([1, '2', 2, 2, '2', {}, {}]); // [1, '2', 2, {}, {}]
uniq([1, '2', 2, 2, '2', {}, {}], isDeepEqual); // [1, '2', 2, {}]
```

#### union

找到两个数组所有不同元素。内部使用 `uniq`。返回一个新数组。

```typescript
import { union, isDeepEqual } from '@modyqyw/utils';

union([1, '2'], [1, 3]); // [1, '2', 3]
union([1, '2', {}], [1, 3, {}]); // [1, '2', {}, 3, {}]
union([1, '2', { a: { b: 'c' } }], [1, 3, { a: { b: 'c' } }]); // [1, '2', { a: { b: 'c' } }, 3, { a: { b: 'c' } }])
union([1, '2', {}], [1, 3, {}], isDeepEqual); // [1, '2', {}, 3]
union([1, '2', { a: { b: 'c' } }], [1, 3, { a: { b: 'c' } }], isDeepEqual); // [1, '2', { a: { b: 'c' } }, 3]
```

#### range

创建一个从 `start` 到不包括 `end` 的数组。

`start` 默认设置为 0，你可以直接传入 `end`。

当 `start` < `end` 时，`step` 默认为 1，否则默认为 -1。

返回一个新数组。

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

和 `Object.keys` 一致，但拥有更好的类型。来源于 [ts-extras](https://github.com/sindresorhus/ts-extras)。

#### objectEntries

和 `Object.entries` 一致，但拥有更好的类型。来源于 [ts-extras](https://github.com/sindresorhus/ts-extras)。

#### objectFromEntries

和 `Object.fromEntries` 一致，但拥有更好的类型。来源于 [ts-extras](https://github.com/sindresorhus/ts-extras)。

### set

#### setHas

和 `Set#has` 一致，但拥有更好的类型。来源于 [ts-extras](https://github.com/sindresorhus/ts-extras)。

### promise

#### pLimit

从 [p-limit](https://github.com/sindresorhus/p-limit) 重新导出。

#### pRetry

从 [p-retry](https://github.com/sindresorhus/p-retry) 重新导出。

#### sleep

休眠 💤，之后如果传递了 `callback` 就会调用它。

```typescript
import { sleep } from '@modyqyw/utils';

await sleep(1000); // sleep 1s
await sleep(1000, () => {
  console.log('Hi.');
}); // sleep 1s, then log `Hi.`
```

### function

#### throttle

创建一个节流函数，每 `delay` 毫秒最多只调用一次 `callback`。

```typescript
import { throttle } from '@modyqyw/utils';

const throttled = throttle(fn, 1000);
throttled(); // called
throttled();
throttled();
throttled(); // called
setTimeout(throttled, 1200); // called
```

你可以在第三个参数中禁用 `leading` 或 `trailing`，默认为 `{ leading: true, trailing: true }`。

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

使用 `.abort()` 中止下一次调用，传入 `true` 表示中止之后所有调用。

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

你可以在 [这里](https://css-tricks.com/debouncing-throttling-explained-examples/) 了解更多节流和防抖的区别。

#### debounce

创建一个防抖函数，自上次调用以来过去了 `delay` 毫秒再调用 `callback`。

```typescript
import { debounce } from '@modyqyw/utils';

const debounced = debounce(fn, 1000);
debounced();
debounced();
debounced();
debounced(); // called
setTimeout(debounced, 1200); // called
```

你可以在第三个参数中禁用 `leading` 或 `trailing`，默认为 `{ leading: false, trailing: true }`。

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

使用 `.abort()` 中止下一次调用，传入 `true` 表示中止之后所有调用。

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

你可以在 [这里](https://css-tricks.com/debouncing-throttling-explained-examples/) 了解更多节流和防抖的区别。

#### pipe

执行从左到右的函数组合。

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

空函数。

```typescript
import { noop } from '@modyqyw/utils';

// nothing happen
noop();
```

### types

#### `type-fest`

从 [type-fest](https://github.com/sindresorhus/type-fest) 重新导出。

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

## 致谢

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

## [赞助者们](https://github.com/ModyQyW/sponsors)

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg"/>
  </a>
</p>
