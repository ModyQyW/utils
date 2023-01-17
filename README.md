# @modyqyw/utils

[![License](https://img.shields.io/github/license/ModyQyW/utils)](https://github.com/ModyQyW/utils/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/@modyqyw/utils)](https://www.npmjs.com/package/@modyqyw/utils/)

Opinionated shareable utils for different JavaScript/TypeScript projects. Requires `node >= 14.18`.

## Installation

```shell
npm install @modyqyw/utils
```

## API

### array

#### difference

Reexported from [lodash.difference](https://lodash.com/docs#difference).

#### differenceBy

Reexported from [lodash.differenceBy](https://lodash.com/docs#differenceBy).

#### differenceWith

Reexported from [lodash.differenceWith](https://lodash.com/docs#differenceWith).

#### intersection

Reexported from [lodash.intersection](https://lodash.com/docs#intersection).

#### intersectionBy

Reexported from [lodash.intersectionBy](https://lodash.com/docs#intersectionBy).

#### intersectionWith

Reexported from [lodash.intersectionWith](https://lodash.com/docs#intersectionWith).

#### union

Reexported from [lodash.union](https://lodash.com/docs#union).

#### unionBy

Reexported from [lodash.unionBy](https://lodash.com/docs#unionBy).

#### unionWith

Reexported from [lodash.unionWith](https://lodash.com/docs#unionWith).

#### uniq

Reexported from [lodash.uniq](https://lodash.com/docs#uniq).

#### uniqBy

Reexported from [lodash.uniqBy](https://lodash.com/docs#uniqBy).

#### uniqWith

Reexported from [lodash.uniqWith](https://lodash.com/docs#uniqWith).

#### arrayIncludes

Reexported from [ts-extras](https://github.com/sindresorhus/ts-extras).

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

### base

#### isEqual

Reexported from [lodash.isEqual](https://lodash.com/docs#isEqual).

#### isEqualWith

Reexported from [lodash.isEqual](https://lodash.com/docs#isEqual).

#### timestamp

Get millisecond-based timestamp.

```typescript
import { timestamp } from '@modyqyw/utils';

const ts = timestamp();
```

### function

#### debounce

Reexported from [lodash.debounce](https://lodash.com/docs#debounce).

#### throttle

Reexported from [lodash.throttle](https://lodash.com/docs#throttle).

#### memorize

Reexported from [lodash.memorize](https://lodash.com/docs#memorize).

#### noop

Empty function.

```typescript
import { noop } from '@modyqyw/utils';

// nothing happen
noop();
```

### node

#### `mlly`

Reexported from [mlly](https://github.com/unjs/mlly).

#### getPackageJson

Get `package.json` as an object.

```typescript
import { getPackageJson } from '@modyqyw/utils';

// use `process.cwd()` by default
const packageJson = getPackageJson(process.cwd());
```

### object

#### merge

Reexported from [deepmerge](https://github.com/TehShrike/deepmerge).

#### objectKeys

Reexported from [ts-extras](https://github.com/sindresorhus/ts-extras).

#### objectEntries

Reexported from [ts-extras](https://github.com/sindresorhus/ts-extras).

#### objectFromEntries

Reexported from [ts-extras](https://github.com/sindresorhus/ts-extras).

### promise

#### pLimit

Reexported from [p-limit](https://github.com/sindresorhus/p-limit).

#### PQueue

Reexported from [p-queue](https://github.com/sindresorhus/p-queue).

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

### set

#### setHas

Reexported from [ts-extras](https://github.com/sindresorhus/ts-extras).

### string

#### `change-case`

Reexported from [change-case](https://github.com/blakeembrey/change-case).

#### `title-case`

Reexported from [title-case](https://github.com/blakeembrey/change-case/tree/master/packages/title-case).

#### `lower-case`

Reexported from [lower-case](https://github.com/blakeembrey/change-case/tree/master/packages/lower-case).

#### `upper-case`

Reexported from [upper-case](https://github.com/blakeembrey/change-case/tree/master/packages/upper-case).

#### toString

Convert value to string. Try `value.toString()` first, then `Object.prototype.toString.call(value)`.

```typescript
import { toString } from '@modyqyw/utils';

const string = toString(...);
```

### types

#### is

Reexported from [@sindresorhus/is](https://github.com/sindresorhus/is).

#### assert

Reexported from [@sindresorhus/is](https://github.com/sindresorhus/is).

#### `type-fest`

Reexported from [type-fest](https://github.com/sindresorhus/type-fest)

#### Awaitable

```typescript
type Awaitable<T> = T | PromiseLike<T>;
```

### Nullable

```typescript
type Nullable<T> = T | null | undefined;
```

### Arrayble

```typescript
type Arrayable<T> = T | Array<T>;
```

### ElementOf

```typescript
type ElementOf<T> = T extends (infer E)[] ? E : never;
```

### Fn

```typescript
type Fn<T = void> = () => T;
```

## Acknowledges

Inspired by [@antfu/utils](https://github.com/antfu/utils). Also thanks for all packages great jobs.

## [Sponsors](https://github.com/ModyQyW/sponsors)

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg"/>
  </a>
</p>
