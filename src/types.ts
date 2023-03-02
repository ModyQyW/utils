export type Primitive = null | undefined | string | number | boolean | symbol | bigint;

// eslint-disable-next-line @typescript-eslint/ban-types
export type BuiltIns = Primitive | Date | RegExp | Function | Error;

export type AnyRecord = Record<string, any>;

export type Falsy = false | 0 | 0n | '' | null | undefined;

export type Awaitable<T> = T | PromiseLike<T>;

export type Nullable<T> = T | null;

export type Undefinable<T> = T | undefined;

export type Optional<T> = T | null | undefined;

export type Arrayable<T> = T | Array<T>;

export type ElementOf<T> = T extends (infer E)[] ? E : never;

export type Fn<T = void> = () => T;

export type { PackageJson, TsConfigJson } from 'type-fest';
