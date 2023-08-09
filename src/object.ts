type ObjectKeys<T extends object> = `${Exclude<keyof T, symbol>}`;

/**
 * Returns the names of the enumerable string properties and methods of an object.
 *
 * 返回对象的可枚举字符串属性和方法的名称。
 *
 * @param o — Object that contains the properties and methods. This can be an object that you
 *   created or an existing Document Object Model (DOM) object.
 * @param o - 包含属性和方法的 object。这可以是你创建的对象或现有文档对象模型（DOM）对象。
 */
export const objectKeys = Object.keys as <Type extends object>(o: Type) => ObjectKeys<Type>[];

/**
 * Returns an array of key/values of the enumerable properties of an object.
 *
 * 返回 object 可枚举属性的键值数组。
 *
 * @param o — Object that contains the properties and methods. This can be an object that you
 *   created or an existing Document Object Model (DOM) object.
 * @param o - 包含属性和方法的对象。这可以是你创建的对象或现有文档对象模型（DOM）对象。
 */
export const objectEntries = Object.entries as <Type extends Record<PropertyKey, unknown>>(
  o: Type,
) => [ObjectKeys<Type>, Type[ObjectKeys<Type>]][];

/**
 * Returns an object created by key-value entries for properties and methods.
 *
 * 返回由属性和方法的键值条目创建的对象。
 *
 * @param entries — An iterable object that contains key-value entries for properties and methods.
 * @param entries - 一个可迭代对象，包含属性和方法的键值条目。
 */
export const objectFromEntries = Object.fromEntries as <
  Key extends PropertyKey,
  Entries extends readonly (readonly [Key, unknown])[],
>(
  entries: Entries,
) => {
  [K in Extract<Entries[number], readonly [Key, unknown]>[0]]: Extract<
    Entries[number],
    readonly [K, unknown]
  >[1];
};
