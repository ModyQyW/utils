# @modyqyw/utils

[![License](https://img.shields.io/github/license/ModyQyW/utils)](https://github.com/ModyQyW/utils/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/@modyqyw/utils)](https://www.npmjs.com/package/@modyqyw/utils/)

Opinionated utils for JavaScript / TypeScript projects. Requires `node >= 14.18`.

## Installation

```shell
npm install @modyqyw/utils
```

## API

### base

#### debounce

Reexported from [lodash.debounce](https://lodash.com/docs#debounce).

#### throttle

Reexported from [lodash.throttle](https://lodash.com/docs#throttle).

#### isEqual

Reexported from [lodash.isEqual](https://lodash.com/docs#isEqual).

#### merge

Reexported from [deepmerge-ts](https://github.com/RebeccaStevens/deepmerge-ts).

#### nanoid

Reexported from [nanoid](https://github.com/ai/nanoid).

#### timestamp

Get millisecond-based timestamp.

```typescript
import { timestamp } from '@modyqyw/utils';

const ts = timestamp();
```

### function

#### noop

Empty function.

```typescript
import { noop } from '@modyqyw/utils';

// nothing happen
noop();
```

### promise

#### pRetry

Reexported from [p-retry](https://github.com/sindresorhus/p-retry).

### rollup

You probably don't need this, unless you use `rollup` like me.

#### rollupIsDevelopment

Based on `watch` and check `process.env.ROLLUP_WATCH`.

```typescript
import { rollupIsDevelopment } from '@modyqyw/utils';

const isDevelopment = rollupIsDevelopment();
```

#### rollupIsProduction

The opposite of `rollupIsDevelopment`.

#### rollupCjsFooter

Try to patch `module.exports.default` into `module.exports`.

#### rollupEsmBanner

Try to add `__dirname` and `__filename` polyfills.

#### rollupExternal

Exclude all `dependencies` and `peerDependencies` in `package.json`. Also exclude `node` builtin modules.

#### rollupHashbang

Based on [rollup-plugin-hashbang](https://github.com/egoist/rollup-plugin-hashbang).

#### rollupJson

Based on [@rollup/plugin-json](https://github.com/rollup/plugins/tree/master/packages/json).

#### rollupNodeResolve

Based on [@rollup/plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve).

#### rollupCommonjs

Based on [@rollup/plugin-commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs).

#### rollupEsbuild

Based on [rollup-plugin-esbuild](https://github.com/egoist/rollup-plugin-esbuild).

#### rollupBundleSize

Based on [rollup-plugin-bundle-size](https://github.com/vimeo/rollup-plugin-bundle-size).

#### rollupTerser

Based on [@rollup/plugin-terser](https://github.com/rollup/plugins/tree/master/packages/terser).

Only apply in production.

#### rollupDts

Based on [rollup-plugin-dts](https://github.com/Swatinem/rollup-plugin-dts).

#### rollupIndexConfig

#### rollupIndexTypesConfig

#### rollupWorkerConfig

#### rollupCliConfig

Pass `package.json` data as first param and `rollup` options as second param. Merge default options and passed options shallowly.

### string

#### `change-case`

Reexported from [change-case](https://github.com/blakeembrey/change-case).

#### titleCase

Reexported from [title-case](https://github.com/blakeembrey/change-case/tree/master/packages/title-case).

#### lowerCase

Reexported from [lowerCase](https://github.com/blakeembrey/change-case/tree/master/packages/lower-case).

#### upperCase

Reexported from [lowerCase](https://github.com/blakeembrey/change-case/tree/master/packages/upper-case).

#### qs

Reexported from [qs](https://github.com/ljharb/qs).

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
