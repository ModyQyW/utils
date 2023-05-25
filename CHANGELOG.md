# CHANGELOG

## Unreleased

- feat!: remove `differenceWith`, please use `difference`
- feat!: remove `intersectionWith`, please use `intersection`
- feat!: remove `uniqWith`, please use `uniq`
- feat!: remove `unionWith`, please use `union`
- feat: add `range`
- feat: add `isString`
- feat: add `isNumber`
- feat: add `isBigInt`
- feat: add `isBoolean`
- feat: add `isUndefined`
- feat: add `isNull`
- feat: add `isSymbol`
- feat: add `isObject`
- feat: add `isFunction`
- feat: add `isArray`

## 6.0.0 (2023-04-24)

This major version removes `node` related functions. Now it should be platform-unrelated.

- feat!: remove `node` functions, you can use [mlly](https://unjs.io/mlly) instead
- feat!: remove `BuiltIns` type and export all types from `type-fest`

## 5.0.0 (2023-03-06)

This major version removes dependencies and types. Also move `dependencies` to `devDependencies`.

- feat!: `throttle`
- feat!: `debounce`
- feat: `lowerCaseFirst`
- feat: `upperCaseFirst`
- feat: `Primitive`
- feat: `BuiltIns`
- feat: `AnyRecord`
- feat: `Promisable`
- feat: `Undefinable`
- feat: `Optional`
- feat!: `Fn`
- feat: `PromisifyFn`
- feat: `AnyFn`
- feat: `PromisifyAnyFn`
- feat!: only keep `PackageJson` and `TsConfigJson` from `type-fest`
- feat!: remove `title-case`
- feat!: remove `change-case`

## 4.1.0 (2023-02-03)

- feat: add `pipe`

## 4.0.0 (2023-01-30)

v3 has too many breaking changes. So I am actually releasing stable v3.

- feat!: remove `lodash` / `ramda`
- feat!: update `difference`, `differenceWith`, `intersection`, `intersectionWith`, `uniq`, `uniqWith`, `union`, `unionWith`
- feat!: remove `differenceBy`, `intersectionBy`, `uniqBy`, `unionBy`
- feat!: update `debounce` and `throttle`
- feat!: remove `memorize`
- feat!: remove `PQueue`
- feat: add `resolvePackageJson`, `setPackageJson`
- feat: add `resolveTsconfigJson`, `getTsconfigJson`, `setTsconfigJson`
- feat: add `Falsy` type
- feat: add `TsconfigJson` type, just an alias of `TsConfigJson`

## 3.3.1 (2023-01-17)

- feat!: replace `deepmerge-ts` with `deepmerge`

## 3.3.0 (2023-01-16)

- feat: add `arrayIncludes`
- feat: add `objectKeys`
- feat: add `objectEntries`
- feat: add `objectFromEntries`
- feat: add `pLimit`
- feat: add `PQueue`
- feat: add `pDebounce`
- feat: add `pThrottle`
- feat: add `setHas`

## 3.2.2 (2023-01-12)

- fix: fix exports

## 3.2.1 (2023-01-12)

- fix: fix `Nullable`

## 3.2.0 (2023-01-11)

- feat: add `difference`
- feat: add `differenceBy`
- feat: add `differenceWith`
- feat: add `intersection`
- feat: add `intersectionBy`
- feat: add `intersectionWith`
- feat: add `union`
- feat: add `unionBy`
- feat: add `unionWith`
- feat: add `uniq`
- feat: add `uniqBy`
- feat: add `uniqWith`
- feat: add `toArray`
- feat: add `isEqualWith`
- feat: add `memorize`
- feat: add `mergeCustom`
- feat!: remove `rollup`
- feat!: targets at `es2020`

## 3.1.1 (2023-01-11)

- fix: fix exports

## 3.1.0 (2023-01-05)

- feat: export `mlly`

## 3.0.10 (2023-01-04)

- fix!: params

## 3.0.9 (2023-01-04)

- perf: allow passing `rollup` plugins options to `rollup` configs

## 3.0.8 (2023-01-04)

- fix: fix `rollupCjsFooter`

## 3.0.7 (2023-01-04)

- perf: `emitCjs` param for `rollupIndexConfig` and `rollupWorkerConfig`

## 3.0.6 (2023-01-04)

- fix: remove `rollup` -> `terser` -> `drop_console`

## 3.0.5 (2023-01-03)

- feat!: remove `rollupMultiEntryConfig`

## 3.0.4 (2023-01-03)

- fix: `hashbang` is not a function
- perf: `rollupCliConfig` set target to `node14.18` by default

## 3.0.3 (2023-01-03)

- feat: add `getPackageJson`
- feat: make `rollup` utils `packageJson` optional
- feat: add `rollupMultiEntryConfig` (beta)
- feat: allow `rollupExternal` `noExternal` param
- fix: fix `rollupCliConfig` params passing
- feat!: remove `qs` because not common enough

## 3.0.2 (2023-01-03)

- fix!: fix exports

## 3.0.1 (2023-01-03)

- fix: specify `package.json` `module` field

## 3.0.0 (2023-01-03)

Hello again. It is an opinionated utils for JavaScript / TypeScript projects now.
