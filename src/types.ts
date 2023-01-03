import is, { assert } from '@sindresorhus/is';
export { is, assert };

export type Awaitable<T> = T | PromiseLike<T>;

export type Nullable<T> = T | null | undefined;

export type Arrayable<T> = T | Array<T>;

export type ElementOf<T> = T extends (infer E)[] ? E : never;

export type Fn<T = void> = () => T;

export type {
  Primitive,
  TypedArray,
  Class,
  Constructor,
  JsonObject,
  JsonArray,
  JsonPrimitive,
  JsonValue,
  Unsubscribable,
  Observer,
  ObservableLike,
  EmptyObject,
  IsEmptyObject,
  Except,
  Writable,
  Merge,
  MergeDeep,
  MergeDeepOptions,
  MergeExclusive,
  RequireAtLeastOne,
  RequireExactlyOne,
  RequireAllOrNone,
  OmitIndexSignature,
  PickIndexSignature,
  PartialDeep,
  PartialDeepOptions,
  PartialOnUndefinedDeep,
  PartialOnUndefinedDeepOptions,
  ReadonlyDeep,
  LiteralUnion,
  Promisable,
  Opaque,
  UnwrapOpaque,
  InvariantOf,
  SetOptional,
  SetRequired,
  SetNonNullable,
  ValueOf,
  AsyncReturnType,
  ConditionalExcept,
  ConditionalKeys,
  ConditionalPick,
  ConditionalPickDeep,
  ConditionalPickDeepOptions,
  UnionToIntersection,
  Stringified,
  FixedLengthArray,
  MultidimensionalArray,
  MultidimensionalReadonlyArray,
  IterableElement,
  Entry,
  Entries,
  SetReturnType,
  Asyncify,
  Simplify,
  Jsonify,
  Jsonifiable,
  Schema,
  LiteralToPrimitive,
  PositiveInfinity,
  NegativeInfinity,
  Finite,
  Integer,
  Float,
  NegativeFloat,
  Negative,
  NonNegative,
  NegativeInteger,
  NonNegativeInteger,
  StringKeyOf,
  Exact,
  ReadonlyTuple,
  OptionalKeysOf,
  HasOptionalKeys,
  RequiredKeysOf,
  Spread,
  TupleToUnion,
  IsEqual,
  CamelCase,
  CamelCasedProperties,
  CamelCasedPropertiesDeep,
  KebabCase,
  KebabCasedProperties,
  KebabCasedPropertiesDeep,
  PascalCase,
  PascalCasedProperties,
  PascalCasedPropertiesDeep,
  SnakeCase,
  SnakeCasedProperties,
  SnakeCasedPropertiesDeep,
  ScreamingSnakeCase,
  DelimiterCase,
  DelimiterCasedProperties,
  DelimiterCasedPropertiesDeep,
  Join,
  Split,
  Trim,
  Replace,
  Includes,
  Get,
  LastArrayElement,
  GlobalThis,
  PackageJson,
  TsConfigJson,
} from 'type-fest';
