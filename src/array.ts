import difference from 'lodash.difference';
import differenceBy from 'lodash.differenceby';
import differenceWith from 'lodash.differencewith';
import intersection from 'lodash.intersection';
import intersectionBy from 'lodash.intersectionby';
import intersectionWith from 'lodash.intersectionwith';
import union from 'lodash.union';
import unionBy from 'lodash.unionby';
import unionWith from 'lodash.unionwith';
import uniq from 'lodash.uniq';
import uniqBy from 'lodash.uniqby';
import uniqWith from 'lodash.uniqwith';
import { Nullable, Arrayable } from './types';

export {
  difference,
  differenceBy,
  differenceWith,
  intersection,
  intersectionBy,
  intersectionWith,
  union,
  unionBy,
  unionWith,
  uniq,
  uniqBy,
  uniqWith,
};

export function toArray<T>(value?: Nullable<Arrayable<T>>) {
  const v = value ?? [];
  return Array.isArray(v) ? v : [v];
}
