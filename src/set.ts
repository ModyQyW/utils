/**
 * Determines whether a set includes a certain element, returning true or false as appropriate.
 *
 * 确定 set 是否包含某个元素，返回 true 或 false。
 *
 * @param set - The set to search in.
 * @param set - 需要搜索的 set。
 * @param value - The element to search for.
 * @param value - 需要搜索的元素。
 */
export function setHas<Type extends SuperType, SuperType = unknown>(
  set: Set<Type> | ReadonlySet<Type>,
  value: SuperType,
): value is Type {
  return set.has(value as Type);
}
