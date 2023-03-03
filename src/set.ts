export function setHas<Type extends SuperType, SuperType = unknown>(
  set: Set<Type> | ReadonlySet<Type>,
  item: SuperType,
): item is Type {
  return set.has(item as Type);
}
