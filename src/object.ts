type ObjectKeys<T extends object> = `${Exclude<keyof T, symbol>}`;

/**
 * Returns the names of the enumerable string properties and methods of an object.
 *
 * @param o — Object that contains the properties and methods. This can be an object that you
 *   created or an existing Document Object Model (DOM) object.
 */
export const objectKeys = Object.keys as <Type extends object>(
  value: Type,
) => Array<ObjectKeys<Type>>;

/**
 * Returns an array of key/values of the enumerable properties of an object.
 *
 * @param o — Object that contains the properties and methods. This can be an object that you
 *   created or an existing Document Object Model (DOM) object.
 */
export const objectEntries = Object.entries as <Type extends Record<PropertyKey, unknown>>(
  value: Type,
) => Array<[ObjectKeys<Type>, Type[ObjectKeys<Type>]]>;

/**
 * Returns an object created by key-value entries for properties and methods.
 *
 * @param entries — An iterable object that contains key-value entries for properties and methods.
 */
export const objectFromEntries = Object.fromEntries as <
  Key extends PropertyKey,
  Entries extends ReadonlyArray<readonly [Key, unknown]>,
>(
  values: Entries,
) => {
  [K in Extract<Entries[number], readonly [Key, unknown]>[0]]: Extract<
    Entries[number],
    readonly [K, unknown]
  >[1];
};
