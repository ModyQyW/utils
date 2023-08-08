export type AnyRecord = Record<string, any>;

export type Falsy = false | 0 | 0n | '' | null | undefined;

export type MaybePromise<T> = T | Promise<T>;

export type MaybePromiseLike<T> = T | PromiseLike<T>;

export type Promisable<T> = T | PromiseLike<T>;

export type Awaitable<T> = T | PromiseLike<T>;

export type MaybeNull<T> = T | null;

export type Nullable<T> = T | null;

export type NonNullable<T> = Exclude<T, null>;

export type MaybeUndefined<T> = T | undefined;

export type Optional<T> = T | undefined;

export type Undefinable<T> = T | undefined;

export type NonUndefinable<T> = Exclude<T, undefined>;

export type Nullish<T> = T | undefined | null;

export type NonNullish<T> = Exclude<T, undefined | null>;

export type MaybeArray<T> = T | T[];

export type Arrayable<T> = T | T[];

export type ElementOf<T> = T extends (infer E)[] ? E : never;

export type Fn<T = any> = () => T;

export type PromisifyFn<T extends Fn> = () => Promise<ReturnType<T>>;

export type AnyFn<T = any> = (...args: any[]) => T;

export type PromisifyAnyFn<T extends AnyFn> = (...args: Parameters<T>) => Promise<ReturnType<T>>;
