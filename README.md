# @modyqyw/utils

Shareable utils for different JavaScript/TypeScript projects.

[Plan](https://github.com/ModyQyW/utils/issues/1)

[Github](https://github.com/ModyQyW/utils) | [Gitee](https://github.com/ModyQyW/utils)

## Usage

### NPM

```shell
npm install @modyqyw/utils
```

```javascript
// esm
import { ... } from '@modyqyw/utils';
// umd
const { ... } = require('@modyqyw/utils');
// do something with them
...
```

### CDN

```html
<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/@modyqyw/utils"></script>
<!-- unpkg -->
<script src="https://unpkg.com/@modyqyw/utils"></script>
```

Then use `window.UTILS` directly.

### API

Please see [MDN docs](https://developer.mozilla.org/) for native API support. Some API in this library can be replaced by native API.

Please see links for more infos.

- [add](https://lodash.com/docs/#add)

```typescript
add(6, 4); // => 10
```

- [after](https://lodash.com/docs/#after)
- [ary](https://lodash.com/docs/#ary)
- [assign](https://lodash.com/docs/#assign)

```typescript
function Foo() {
  this.a = 1;
}
function Bar() {
  this.c = 3;
}
Foo.prototype.b = 2;
Bar.prototype.d = 4;
assign({ a: 0 }, new Foo(), new Bar()); // => { 'a': 1, 'c': 3 }
```

- [assignIn](https://lodash.com/docs/#assignIn)

```typescript
function Foo() {
  this.a = 1;
}
function Bar() {
  this.c = 3;
}
Foo.prototype.b = 2;
Bar.prototype.d = 4;
assignIn({ a: 0 }, new Foo(), new Bar()); // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
```

- [assignInWith](https://lodash.com/docs/#assignInWith)

```typescript
function customizer(objValue, srcValue) {
  return isUndefined(objValue) ? srcValue : objValue;
}
const defaults = partialRight(assignInWith, customizer);
defaults({ a: 1 }, { b: 2 }, { a: 3 }); // => { 'a': 1, 'b': 2 }
```

- [assignWith](https://lodash.com/docs/#assignIn)

```typescript
function customizer(objValue, srcValue) {
  return isUndefined(objValue) ? srcValue : objValue;
}
const defaults = partialRight(assignWith, customizer);
defaults({ a: 1 }, { b: 2 }, { a: 3 }); // => { 'a': 1, 'b': 2 }
```

- [at](https://lodash.com/docs/#at)

```typescript
const object = { a: [{ b: { c: 3 } }, 4] };
at(object, ['a[0].b.c', 'a[1]']); // => [3, 4]
```

- [before](https://lodash.com/docs/#before)
- [bind](https://lodash.com/docs/#bind)
- [bindKey](https://lodash.com/docs/#bindKey)
- [camelCase](https://github.com/blakeembrey/change-case#camelcase)

```typescript
camelCase('string'); // => 'string'
camelCase('dot.case'); // => 'dotCase'
camelCase('PascalCase'); // => 'pascalCase'
camelCase('version 1.2.10'); // => 'version_1_2_10'
```

- [capitalCase](https://github.com/blakeembrey/change-case#capitalcase)

```typescript
capitalCase('string'); // => 'String'
capitalCase('dot.case'); // => 'Dot Case'
capitalCase('PascalCase'); // => 'Pascal Case'
capitalCase('version 1.2.10'); // => 'Version 1 2 10'
```

- [castArray](https://lodash.com/docs/#castArray)

```typescript
castArray(1); // => [1]
castArray({ a: 1 }); // => [{ 'a': 1 }]
castArray('abc'); // => ['abc']
castArray(null); // => [null]
castArray(undefined); // => [undefined]
castArray(); // => []
const array = [1, 2, 3];
console.log(castArray(array) === array); // => true
```

- [ceil](https://lodash.com/docs/#ceil)

```typescript
ceil(4.006); // => 5
ceil(6.004, 2); // => 6.01
ceil(6040, -2); // => 6100
```

- [chunk](https://lodash.com/docs/#chunk)

```typescript
chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]
```

- [clamp](https://lodash.com/docs/#clamp)

```typescript
clamp(-10, -5, 5); // => -5
clamp(10, -5, 5); // => 5
```

- [clone](https://lodash.com/docs/#clone)

```typescript
const objects = [{ a: 1 }, { b: 2 }];
const shallow = clone(objects);
console.log(shallow[0] === objects[0]); // => true
```

- [cloneDeep](https://lodash.com/docs/#cloneDeep)

```typescript
const objects = [{ a: 1 }, { b: 2 }];
const shallow = clone(objects);
console.log(shallow[0] === objects[0]); // => false
```

- [cloneDeepWith](https://lodash.com/docs/#cloneDeepWith)

```typescript
function customizer(value) {
  if (isElement(value)) {
    return value.cloneNode(true);
  }
}
const el = cloneDeepWith(document.body, customizer);
console.log(el === document.body); // => false
console.log(el.nodeName); // => 'BODY'
console.log(el.childNodes.length); // => 20
```

- [cloneWith](https://lodash.com/docs/#cloneWith)

```typescript
function customizer(value) {
  if (isElement(value)) {
    return value.cloneNode(false);
  }
}
const el = cloneWith(document.body, customizer);
console.log(el === document.body); // => false
console.log(el.nodeName); // => 'BODY'
console.log(el.childNodes.length); // => 0
```

- [compact](https://lodash.com/docs/#compact)

```typescript
compact([0, 1, false, 2, '', 3]); // => [1, 2, 3]
```

- [concat](https://lodash.com/docs/#concat)

```typescript
const array = [1];
const other = concat(array, 2, [3], [[4]]);
console.log(other); // => [1, 2, 3, [4]]
console.log(array); // => [1]
```

- [conformsTo](https://lodash.com/docs/#conformsTo)

```typescript
const object = { a: 1, b: 2 };
conformsTo(object, {
  b: function (n) {
    return n > 1;
  },
}); // => true
conformsTo(object, {
  b: function (n) {
    return n > 2;
  },
}); // => false
```

- [constantCase](https://github.com/blakeembrey/change-case#constantcase)

```typescript
constantCase('string'); // => 'STRING'
constantCase('dot.case'); // => 'DOT_CASE'
constantCase('PascalCase'); // => 'PASCAL_CASE'
constantCase('version 1.2.10'); // => 'VERSION_1_2_10'
```

- [countBy](https://lodash.com/docs/#counyBy)

```typescript
countBy([6.1, 4.2, 6.3], Math.floor); // => { '4': 1, '6': 2 }
countBy(['one', 'two', 'three'], 'length'); // => { '3': 2, '5': 1 }
```

- [create](https://lodash.com/docs/#create)

```typescript
function Shape() {
  this.x = 0;
  this.y = 0;
}
function Circle() {
  Shape.call(this);
}
Circle.prototype = create(Shape.prototype, {
  constructor: Circle,
});
const circle = new Circle();
circle instanceof Circle; // => true
circle instanceof Shape; // => true
```

- [curry](https://lodash.com/docs/#curry)
- [curryRight](https://lodash.com/docs/#curryRight)
- [debounce](https://lodash.com/docs/#debounce)
- [defaults](https://lodash.com/docs/#defaults)

```typescript
defaults({ a: 1 }, { b: 2 }, { a: 3 }); // => { 'a': 1, 'b': 2 }
```

- [defaultsDeep](https://lodash.com/docs/#defaultsDeep)

```typescript
defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } }); // => { 'a': { 'b': 2, 'c': 3 } }
```

- [defer](https://lodash.com/docs/#defer)
- [delay](https://lodash.com/docs/#delay)
- [difference](https://lodash.com/docs/#difference)

```typescript
difference([2, 1], [2, 3]); // => [1]
```

- [differenceBy](https://lodash.com/docs/#differenceBy)

```typescript
differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // => [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x'); // => [{ 'x': 2 }]
```

- [differenceWith](https://lodash.com/docs/#differenceWith)

```typescript
const objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
differenceWith(objects, [{ x: 1, y: 2 }], isEqual); // => [{ 'x': 2, 'y': 1 }]
```

- [dotCase](https://github.com/blakeembrey/change-case#dotcase)

```typescript
dotCase('string'); // => 'string'
dotCase('dot.case'); // => 'dot.case'
dotCase('PascalCase'); // => 'pascal.case'
dotCase('version 1.2.10'); // => 'version.1.2.10'
```

- [divide](https://lodash.com/docs/#divide)

```typescript
divide(6, 4); // => 1.5
```

- [drop](https://lodash.com/docs/#drop)

```typescript
drop([1, 2, 3]); // => [2, 3]
drop([1, 2, 3], 2); // => [3]
drop([1, 2, 3], 5); // => []
drop([1, 2, 3], 0); // => [1, 2, 3]
```

- [dropRight](https://lodash.com/docs/#dropRight)

```typescript
dropRight([1, 2, 3]); // => [1, 2]
dropRight([1, 2, 3], 2); // => [1]
dropRight([1, 2, 3], 5); // => []
dropRight([1, 2, 3], 0); // => [1, 2, 3]
```

- [dropRightWhile](https://lodash.com/docs/#dropRightWhile)

```typescript
const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];
dropRightWhile(users, function (o) {
  return !o.active;
}); // => objects for ['barney']
dropRightWhile(users, { user: 'pebbles', active: false }); // => objects for ['barney', 'fred']
dropRightWhile(users, ['active', false]); // => objects for ['barney']
dropRightWhile(users, 'active'); // => objects for ['barney', 'fred', 'pebbles']
```

- [dropWhile](https://lodash.com/docs/#dropWhile)

```typescript
const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];
dropWhile(users, function (o) {
  return !o.active;
}); // => objects for ['pebbles']
dropWhile(users, { user: 'barney', active: false }); // => objects for ['fred', 'pebbles']
dropWhile(users, ['active', false]); // => objects for ['pebbles']
dropWhile(users, 'active'); // => objects for ['barney', 'fred', 'pebbles']
```

- [eq](https://lodash.com/docs/#eq)

```typescript
const object = { a: 1 };
const other = { a: 1 };
eq(object, object); // => true
eq(object, other); // => false
eq('a', 'a'); // => true
eq('a', Object('a')); // => false
eq(NaN, NaN); // => true
```

- [every](https://lodash.com/docs/#every)

```typescript
every([true, 1, null, 'yes'], Boolean); // => false
const users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: false },
];
every(users, { user: 'barney', active: false }); // => false
every(users, ['active', false]); // => true
every(users, 'active'); // => false
```

- [fakeAvatar](./src/fakeAvatar.ts)

```typescript
fakeAvatar(); // => 'https://placekitten.com/128' or 'https://picsum.photos/128'
fakeAvatar(256); // => 'https://placekitten.com/256' or 'https://picsum.photos/256'
```

- [fakeImage](./src/fakeImage.ts)

```typescript
fakeImage(); // => 'https://placekitten.com/640/480' or 'https://picsum.photos/640/480'
fakeImage(480, 640); // => 'https://placekitten.com/480/640' or 'https://picsum.photos/480/640'
```

- [fakeLorem](./src/fakeLorem.ts) - same as fakeLoremParagraph
- [fakeLoremParagraph](./src/fakeLoremParagraph.ts)

```typescript
fakeLoremParagraph();
// => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
```

- [fakeLoremSentence](./src/fakeLoremSentence.ts)

```typescript
fakeLoremSentence(); // a sentence from lorem paragraph
```

- [fakeLoremWord](./src/fakeLoremWord.ts)

```typescript
fakeLoremWord(); // a word from lorem paragraph
```

- [fill](https://lodash.com/docs/#fill)

```typescript
const array = [1, 2, 3];

fill(array, 'a');
console.log(array); // => ['a', 'a', 'a']

fill(Array(3), 2); // => [2, 2, 2]

fill([4, 6, 8, 10], '*', 1, 3); // => [4, '*', '*', 10]
```

- [filter](https://lodash.com/docs/#filter)

```typescript
const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
];
filter(users, function (o) {
  return !o.active;
}); // => objects for ['fred']
filter(users, { age: 36, active: true }); // => objects for ['barney']
filter(users, ['active', false]); // => objects for ['fred']
filter(users, 'active'); // => objects for ['barney']
```

- [find](https://lodash.com/docs/#find)

```typescript
const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
];
find(users, function (o) {
  return o.age < 40;
}); // => object for 'barney'
find(users, { age: 1, active: true }); // => object for 'pebbles'
find(users, ['active', false]); // => object for 'fred'
find(users, 'active'); // => object for 'barney'
```

- [findIndex](https://lodash.com/docs/#findIndex)

```typescript
const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];
findIndex(users, function (o) {
  return o.user == 'barney';
}); // => 0
findIndex(users, { user: 'fred', active: false }); // => 1
findIndex(users, ['active', false]); // => 0
findIndex(users, 'active'); // => 2
```

- [findKey](https://lodash.com/docs/#findKey)

```typescript
const users = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true },
};
findKey(users, function (o) {
  return o.age < 40;
}); // => 'barney' (iteration order is not guaranteed)
findKey(users, { age: 1, active: true }); // => 'pebbles'
findKey(users, ['active', false]); // => 'fred'
findKey(users, 'active'); // => 'barney'
```

- [findLast](https://lodash.com/docs/#findLast)

```typescript
findLast([1, 2, 3, 4], function (n) {
  return n % 2 == 1;
}); // => 3
```

- [findLastIndex](https://lodash.com/docs/#findLastIndex)

```typescript
const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];
findLastIndex(users, function (o) {
  return o.user == 'pebbles';
}); // => 2
findLastIndex(users, { user: 'barney', active: true }); // => 0
findLastIndex(users, ['active', false]); // => 2
findLastIndex(users, 'active'); // => 0
```

- [findLastKey](https://lodash.com/docs/#findLastKey)

```typescript
const users = {
  barney: { age: 36, active: true },
  fred: { age: 40, active: false },
  pebbles: { age: 1, active: true },
};
findLastKey(users, function (o) {
  return o.age < 40;
}); // => returns 'pebbles' assuming `findKey` returns 'barney'
findLastKey(users, { age: 36, active: true }); // => 'barney'
findLastKey(users, ['active', false]); // => 'fred'
findLastKey(users, 'active'); // => 'pebbles'
```

- [flatMap](https://lodash.com/docs/#flatMap)

```typescript
flatMap([1, 2], function (n) {
  return [n, n];
}); // => [1, 1, 2, 2]
```

- [flatMapDeep](https://lodash.com/docs/#flatMapDeep)

```typescript
flatMapDeep([1, 2], function duplicate(n) {
  return [[[n, n]]];
}); // => [1, 1, 2, 2]
```

- [flatMapDepth](https://lodash.com/docs/#flatMapDepth)

```typescript
flatMapDepth(
  [1, 2],
  function duplicate(n) {
    return [[[n, n]]];
  },
  2,
); // => [[1, 1], [2, 2]]
```

- [flatten](https://lodash.com/docs/#flatten)

```typescript
flatten([1, [2, [3, [4]], 5]]); // => [1, 2, [3, [4]], 5]
```

- [flattenDeep](https://lodash.com/docs/#flattenDeep)

```typescript
flattenDeep([1, [2, [3, [4]], 5]]); // => [1, 2, 3, 4, 5]
```

- [flattenDepth](https://lodash.com/docs/#flattenDepth)

```typescript
const array = [1, [2, [3, [4]], 5]];
flattenDepth(array, 1); // => [1, 2, [3, [4]], 5]
flattenDepth(array, 2); // => [1, 2, 3, [4], 5]
```

- [flip](https://lodash.com/docs/#flip)
- [floor](https://lodash.com/docs/#floor)

```typescript
floor(4.006); // => 4
floor(0.046, 2); // => 0.04
floor(4060, -2); // => 4000
```

- [forEach](https://lodash.com/docs/#forEach)

```typescript
forEach([1, 2], function (value) {
  console.log(value);
}); // => Logs `1` then `2`.

forEach({ a: 1, b: 2 }, function (value, key) {
  console.log(key);
}); // => Logs 'a' then 'b' (iteration order is not guaranteed).
```

- [forEachRight](https://lodash.com/docs/#forEachRight)

```typescript
forEachRight([1, 2], function (value) {
  console.log(value);
}); // => Logs `2` then `1`.
```

- [forIn](https://lodash.com/docs/#forIn)

```typescript
function Foo() {
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;
forIn(new Foo(), function (value, key) {
  console.log(key);
}); // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
```

- [forInRight](https://lodash.com/docs/#forInRight)

```typescript
function Foo() {
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;
forInRight(new Foo(), function (value, key) {
  console.log(key);
}); // => Logs 'c', 'b', then 'a' assuming `forIn` logs 'a', 'b', then 'c'.
```

- [forOwn](https://lodash.com/docs/#forOwn)

```typescript
function Foo() {
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;
forOwn(new Foo(), function (value, key) {
  console.log(key);
}); // => Logs 'a' then 'b' (iteration order is not guaranteed).
```

- [forOwnRight](https://lodash.com/docs/#forOwnRight)

```typescript
function Foo() {
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;
forOwnRight(new Foo(), function (value, key) {
  console.log(key);
}); // => Logs 'b' then 'a' assuming `forOwn` logs 'a' then 'b'.
```

- [fromPairs](https://lodash.com/docs/#fromPairs)

```typescript
fromPairs([
  ['a', 1],
  ['b', 2],
]); // => { 'a': 1, 'b': 2 }
```

- [functions](https://lodash.com/docs/#functions)

```typescript
function Foo() {
  this.a = constant('a');
  this.b = constant('b');
}
Foo.prototype.c = constant('c');
functions(new Foo()); // => ['a', 'b']
```

- [functionsIn](https://lodash.com/docs/#functionsIn)

```typescript
function Foo() {
  this.a = constant('a');
  this.b = constant('b');
}
Foo.prototype.c = constant('c');
functionsIn(new Foo()); // => ['a', 'b', 'c']
```

- [get](https://lodash.com/docs/#get)

```typescript
const object = { a: [{ b: { c: 3 } }] };
get(object, 'a[0].b.c'); // => 3
get(object, ['a', '0', 'b', 'c']); // => 3
get(object, 'a.b.c', 'default'); // => 'default'
```

- [groupBy](https://lodash.com/docs/#groupBy)

```typescript
groupBy([6.1, 4.2, 6.3], Math.floor); // => { '4': [4.2], '6': [6.1, 6.3] }
groupBy(['one', 'two', 'three'], 'length'); // => { '3': ['one', 'two'], '5': ['three'] }
```

- [gt](https://lodash.com/docs/#gt)

```typescript
gt(3, 1); // => true
gt(3, 3); // => false
gt(1, 3); // => false
```

- [gte](https://lodash.com/docs/#gte)

```typescript
gte(3, 1); // => true
gte(3, 3); // => true
gte(1, 3); // => false
```

- [has](https://lodash.com/docs/#has)

```typescript
const object = { a: { b: 2 } };
const other = create({ a: create({ b: 2 }) });
has(object, 'a'); // => true
has(object, 'a.b'); // => true
has(object, ['a', 'b']); // => true
has(other, 'a'); // => false
```

- [hasIn](https://lodash.com/docs/#hasIn)

```typescript
const object = create({ a: create({ b: 2 }) });
hasIn(object, 'a'); // => true
hasIn(object, 'a.b'); // => true
hasIn(object, ['a', 'b']); // => true
hasIn(object, 'b'); // => false
```

- [head](https://lodash.com/docs/#head)

```typescript
head([1, 2, 3]); // => 1
head([]); // => undefined
```

- [headerCase](https://github.com/blakeembrey/change-case#headercase)

```typescript
headerCase('string'); // => 'String'
headerCase('dot.case'); // => 'Dot-Case'
headerCase('PascalCase'); // => 'Pascal-Case'
headerCase('version 1.2.10'); // => 'Version-1-2-10'
```

- [includes](https://lodash.com/docs/#includes)

```typescript
includes([1, 2, 3], 1); // => true
includes([1, 2, 3], 1, 2); // => false
includes({ a: 1, b: 2 }, 1); // => true
includes('abcd', 'bc'); // => true
```

- [indexOf](https://lodash.com/docs/#indexOf)

```typescript
indexOf([1, 2, 1, 2], 2); // => 1
indexOf([1, 2, 1, 2], 2, 2); // => 3
```

- [initial](https://lodash.com/docs/#initial)

```typescript
initial([1, 2, 3]); // => [1, 2]
```

- [inRange](https://lodash.com/docs/#inRange)

```typescript
inRange(3, 2, 4); // => true
inRange(4, 8); // => true
inRange(4, 2); // => false
inRange(2, 2); // => false
inRange(1.2, 2); // => true
inRange(5.2, 4); // => false
inRange(-3, -2, -6); // => true
```

- [intersection](https://lodash.com/docs/#intersection)

```typescript
intersection([2, 1], [2, 3]); // => [2]
```

- [intersectionBy](https://lodash.com/docs/#intersectionBy)

```typescript
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // => [2.1]
intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x'); // => [{ 'x': 1 }]
```

- [intersectionWith](https://lodash.com/docs/#intersectionWith)

```typescript
const objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
const others = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];
intersectionWith(objects, others, isEqual); // => [{ 'x': 1, 'y': 2 }]
```

- [invert](https://lodash.com/docs/#invert)

```typescript
const object = { a: 1, b: 2, c: 1 };
invert(object); // => { '1': 'c', '2': 'b' }
```

- [invertBy](https://lodash.com/docs/#invertBy)

```typescript
const object = { a: 1, b: 2, c: 1 };
invertBy(object); // => { '1': ['a', 'c'], '2': ['b'] }
invertBy(object, function (value) {
  return 'group' + value;
}); // => { 'group1': ['a', 'c'], 'group2': ['b'] }
```

- [invoke](https://lodash.com/docs/#invoke)

```typescript
const object = { a: [{ b: { c: [1, 2, 3, 4] } }] };
invoke(object, 'a[0].b.c.slice', 1, 3); // => [2, 3]
```

- [invokeMap](https://lodash.com/docs/#invokeMap)

```typescript
invokeMap(
  [
    [5, 1, 7],
    [3, 2, 1],
  ],
  'sort',
); // => [[1, 5, 7], [1, 2, 3]]
invokeMap([123, 456], String.prototype.split, ''); // => [['1', '2', '3'], ['4', '5', '6']]
```

- [isArguments](https://lodash.com/docs/#isArguments)

```typescript
isArguments(
  (function () {
    return arguments;
  })(),
); // => true
isArguments([1, 2, 3]); // => false
```

- [isArray](https://lodash.com/docs/#isArray)

```typescript
isArray([1, 2, 3]); // => true
isArray(document.body.children); // => false
isArray('abc'); // => false
isArray(noop); // => false
```

- [isArrayBuffer](https://lodash.com/docs/#isArrayBuffer)

```typescript
isArrayBuffer(new ArrayBuffer(2)); // => true
isArrayBuffer(new Array(2)); // => false
```

- [isArrayLike](https://lodash.com/docs/#isArrayLike)

```typescript
isArrayLike([1, 2, 3]); // => true
isArrayLike(document.body.children); // => true
isArrayLike('abc'); // => true
isArrayLike(noop); // => false
```

- [isArrayLikeObject](https://lodash.com/docs/#isArrayLikeObject)

```typescript
isArrayLikeObject([1, 2, 3]); // => true
isArrayLikeObject(document.body.children); // => true
isArrayLikeObject('abc'); // => false
isArrayLikeObject(noop); // => false
```

- [isBoolean](https://lodash.com/docs/#isBoolean)

```typescript
isBoolean(false); // => true
isBoolean(null); // => false
```

- [isBuffer](https://lodash.com/docs/#isBuffer)

```typescript
isBuffer(new Buffer(2)); // => true
isBuffer(new Uint8Array(2)); // => false
```

- [isDate](https://lodash.com/docs/#isDate)

```typescript
isDate(new Date()); // => true
isDate('Mon April 23 2012'); // => false
```

- [isElement](https://lodash.com/docs/#isElement)

```typescript
isElement(document.body); // => true
isElement('<body>'); // => false
```

- [isEmail](https://github.com/validatorjs/validator.js#validators)

```typescript
isEmail('foo@bar.com'); // => true
```

- [isEmpty](https://lodash.com/docs/#isEmpty)

```typescript
isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ a: 1 }); // => false
```

- [isEqual](https://lodash.com/docs/#isEqual)

```typescript
const object = { a: 1 };
const other = { a: 1 };
isEqual(object, other); // => true
object === other; // => false
```

- [isEqualWith](https://lodash.com/docs/#isEqualWith)

```typescript
function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}
function customizer(objValue, othValue) {
  if (isGreeting(objValue) && isGreeting(othValue)) {
    return true;
  }
}
const array = ['hello', 'goodbye'];
const other = ['hi', 'goodbye'];
isEqualWith(array, other, customizer); // => true
```

- [isError](https://lodash.com/docs/#isError)

```typescript
isError(new Error()); // => true
isError(Error); // => false
```

- [isEvalError](./src/isEvalError.ts)

```typescript
isEvalError(new EvalError()); // => true
isEvalError(EvalError); // => false
```

- [isEvenNumber](./src/isEvenNumber.ts)

```typescript
isEvenNumber(1); // => false
isEvenNumber(2); // => true
```

- [isFinite](https://lodash.com/docs/#isFinite)

```typescript
isFinite(3); // => true
isFinite(Number.MIN_VALUE); // => true
isFinite(Infinity); // => false
isFinite('3'); // => false
```

- [isFloat](./src/isFloat.ts)

```typescript
isFloat(1); // => false
isFloat(1.1); // => true
```

- [isFunction](https://lodash.com/docs/#isFunction)
- [isHash](https://github.com/validatorjs/validator.js#validators)

```typescript
isHash('d94f3f016ae679c3008de268209132f2', 'md5'); // => true
isHash('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824', 'sha256'); // => true
```

- [isHexColor](https://github.com/validatorjs/validator.js#validators)

```typescript
isHexColor('#ff0000ff'); // => true
isHexColor('#ff0034'); // => true
isHexColor('#CCCCCC'); // => true
isHexColor('0f38'); // => true
isHexColor('fff'); // => true
isHexColor('#f00'); // => true
isHexColor('#ff'); // => false
isHexColor('fff0a'); // => false
isHexColor('#ff12FG'); // => false
```

- [isHSL](https://github.com/validatorjs/validator.js#validators)

```typescript
isHSL('hsl(0, 0%, 0%)'); // => true
isHSL('hsl(+540deg, 03%, 4%, 500)'); // => true
isHSL('hsl(270deg, 60%, 70%)'); // => true
isHSL('hsl(200, +.1%, 62%, 1)'); // => true
isHSL('hsl(270 60% 70%)'); // => true
isHSL('hsl (360,0000000000100%,000000100%)'); // => false
isHSL('hsl(0260, 100 %, 100%)'); // => false
isHSL('hsl(0160, 100%, 100%, 100 %)'); // => false
isHSL('hsl(-0160, 100%, 100a)'); // => false
isHSL('hsl(-0160, 100%, 100)'); // => false
isHSL('hsl(-0160 100%, 100%, )'); // => false
isHSL('hsl(270 deg, 60%, 70%)'); // => false
isHSL('hsl( deg, 60%, 70%)'); // => false
isHSL('hsl(, 60%, 70%)'); // => false
isHSL('hsl(3000deg, 70%)'); // => false
```

- [isIdentityCard](https://github.com/validatorjs/validator.js#validators)

```typescript
isIdentityCard('235407195106112745', 'zh-CN'); // => true
```

- [isInteger](https://lodash.com/docs/#isInteger)

```typescript
isInteger(3); // => true
isInteger(Number.MIN_VALUE); // => false
isInteger(Infinity); // => false
isInteger('3'); // => false
```

- [isJSON](https://github.com/validatorjs/validator.js#validators)

```typescript
isJSON('{ 'key': 'value' }'); // => true
isJSON('{}'); // => true
isJSON('{ key: 'value' }') // => false
isJSON('{ \'key\': \'value\' }') // => false
isJSON('null') // => false
isJSON('1234') // => false
isJSON(''nope'') // => false
```

- [isJWT](https://github.com/validatorjs/validator.js#validators)

```typescript
isJWT(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI',
); // => true
```

- [isLength](https://lodash.com/docs/#isLength)

```typescript
isLength(3); // => true
isLength(Number.MIN_VALUE); // => false
isLength(Infinity); // => false
isLength('3'); // => false
```

- [isMap](https://lodash.com/docs/#isMap)

```typescript
isMap(new Map()); // => true
isMap(new WeakMap()); // => false
```

- [isMatch](https://lodash.com/docs/#isMatch)

```typescript
const object = { a: 1, b: 2 };
isMatch(object, { b: 2 }); // => true
isMatch(object, { b: 1 }); // => false
```

- [isMatchWith](https://lodash.com/docs/#isMatchWith)

```typescript
function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, srcValue) {
  return isGreeting(objValue) && isGreeting(srcValue);
}

const object = { greeting: 'hello' };
const source = { greeting: 'hi' };

isMatchWith(object, source, customizer); // => true
```

- [isMobilePhone](https://github.com/validatorjs/validator.js#validators)

```typescript
isMobilePhone('15323456787', 'zh-CN');
```

- [isNaN](https://lodash.com/docs/#isNaN)

```typescript
isNaN(NaN); // => true
isNaN(new Number(NaN)); // => true
isNaN(undefined); // => false
```

- [isNative](https://lodash.com/docs/#isNative)

```typescript
isNative(Array.prototype.push); // => true
```

- [isNil](https://lodash.com/docs/#isNil)

```typescript
isNil(null); // => true
isNil(void 0); // => true
isNil(NaN); // => false
```

- [isNull](https://lodash.com/docs/#isNull)

```typescript
isNull(null); // => true
isNull(void 0); // => false
```

- [isNumber](https://lodash.com/docs/#isNumber)

```typescript
isNumber(3); // => true
isNumber(Number.MIN_VALUE); // => true
isNumber(Infinity); // => true
isNumber('3'); // => false
```

- [isObject](https://lodash.com/docs/#isObject)

```typescript
isObject({}); // => true
isObject([1, 2, 3]); // => true
isObject(noop); // => true
isObject(null); // => false
```

- [isObjectLike](https://lodash.com/docs/#isObjectLike)

```typescript
isObjectLike({}); // => true
isObjectLike([1, 2, 3]); // => true
isObjectLike(noop); // => false
isObjectLike(null); // => false
```

- [isOddNumber](./src/isOddNumber.ts)

```typescript
isOddNumber(1); // => true
isOddNumber(2); // => false
```

- [isPlainObject](https://lodash.com/docs/#isPlainObject)

```typescript
function Foo() {
  this.a = 1;
}

isPlainObject(new Foo()); // => false
isPlainObject([1, 2, 3]); // => false
isPlainObject({ x: 0, y: 0 }); // => true
isPlainObject(Object.create(null)); // => true
```

- [isRangeError](./src/isRangeError.ts)

```typescript
isRangeError(new RangeError()); // => true
isRangeError(RangeError); // => false
```

- [isReferenceError](./src/isReferenceError.ts)

```typescript
isReferenceError(new ReferenceError()); // => true
isReferenceError(ReferenceError); // => false
```

- [isRegExp](https://lodash.com/docs/#isRegExp)

```typescript
isRegExp(/abc/); // => true
isRegExp('/abc/'); // => false
```

- [isRgbColor](https://github.com/validatorjs/validator.js#validators)

```typescript
isRgbColor('rgb(0,0,0)'); // => true
isRgbColor('rgb(255,255,255)'); // => true
isRgbColor('rgba(0,0,0,0)'); // => true
isRgbColor('rgba(255,255,255,1)'); // => true
isRgbColor('rgba(255,255,255,.1)'); // => true
isRgbColor('rgba(255,255,255,0.1)'); // => true
isRgbColor('rgb(5%,5%,5%)'); // => true
isRgbColor('rgba(5%,5%,5%,.3)'); // => true
isRgbColor('rgb(0,0,0,)'); // => false
isRgbColor('rgb(0,0,)'); // => false
isRgbColor('rgb(0,0,256)'); // => false
isRgbColor('rgb()'); // => false
isRgbColor('rgba(0,0,0)'); // => false
isRgbColor('rgba(255,255,255,2)'); // => false
isRgbColor('rgba(255,255,255,.12)'); // => false
isRgbColor('rgba(255,255,256,0.1)'); // => false
isRgbColor('rgb(4,4,5%)'); // => false
isRgbColor('rgba(5%,5%,5%)'); // => false
isRgbColor('rgba(3,3,3%,.3)'); // => false
isRgbColor('rgb(101%,101%,101%)'); // => false
isRgbColor('rgba(3%,3%,101%,0.3)'); // => false
```

- [isSafeInteger](https://lodash.com/docs/#isSafeInteger)

```typescript
isSafeInteger(3); // => true
isSafeInteger(Number.MIN_VALUE); // => false
isSafeInteger(Infinity); // => false
isSafeInteger('3'); // => false
```

- [isSemver](https://github.com/validatorjs/validator.js#validators)

```typescript
isSemver('0.0.4'); // => true
isSemver('1.2.3'); // => true
isSemver('10.20.30'); // => true
isSemver('2.0.1-alpha.1227'); // => true
isSemver('1.0.0-beta.1'); // => true
isSemver('alpha'); // => false
isSemver('01.1.1'); // => false
isSemver('1.01.1'); // => false
isSemver('1.1.01'); // => false
isSemver('1.2'); // => false
```

- [isSet](https://lodash.com/docs/#isSet)

```typescript
isSet(new Set()); // => true
isSet(new WeakSet()); // => false
```

- [isString](https://lodash.com/docs/#isString)

```typescript
isString('abc'); // => true
isString(1); // => false
```

- [isStrongPassword](https://github.com/validatorjs/validator.js#validators)

```typescript
isStrongPassword('%2%k{7BsL'M%Kd6e'); // => true
isStrongPassword('EXAMPLE of very long_password123!'); // => true
isStrongPassword('mxH_+2vs&54_+H3P'); // => true
isStrongPassword('+&DxJ=X7-4L8jRCD'); // => true
isStrongPassword('etV*p%Nr6w&H%FeF'); // => true
isStrongPassword(''); // => false
isStrongPassword('password'); // => false
isStrongPassword('hunter2'); // => false
isStrongPassword('hello world'); // => false
isStrongPassword('passw0rd'); // => false
isStrongPassword('password!'); // => false
isStrongPassword('PASSWORD!'); // => false
```

- [isSymbol](https://lodash.com/docs/#isSymbol)

```typescript
isSymbol(Symbol.iterator); // => true
isSymbol('abc'); // => false
```

- [isSyntaxError](./src/isSyntaxError.ts)

```typescript
isSyntaxError(new SyntaxError()); // => true
isSyntaxError(SyntaxError); // => false
```

- [isTypedArray](https://lodash.com/docs/#isTypedArray)

```typescript
isTypedArray(new Uint8Array()); // => true
isTypedArray([]); // => false
```

- [isTypeError](./src/isTypeError.ts)

```typescript
isTypeError(new TypeError()); // => true
isTypeError(TypeError); // => false
```

- [isUndefined](https://lodash.com/docs/#isUndefined)

```typescript
isUndefined(void 0); // => true
isUndefined(null); // => false
```

- [isURIError](./src/isURIError.ts)

```typescript
isURIError(new URIError()); // => true
isURIError(URIError); // => false
```

- [isValidDate](./src/isValidDate.ts)

```typescript
isValidDate(new Date()); // => true
isValidDate(new Date('')); // => false
```

- [isWeakMap](https://lodash.com/docs/#isWeakMap)

```typescript
isWeakMap(new WeakMap()); // => true
isWeakMap(new Map()); // => false
```

- [isWeakSet](https://lodash.com/docs/#isWeakSet)

```typescript
isWeakSet(new WeakSet()); // => true
isWeakSet(new Set()); // => false
```

- [join](https://lodash.com/docs/#join)

```typescript
join(['a', 'b', 'c'], '~'); // => 'a~b~c'
```

- [kebabCase](https://lodash.com/docs/#kebabCase)

```typescript
kebabCase('Foo Bar'); // => 'foo-bar'
kebabCase('fooBar'); // => 'foo-bar'
kebabCase('__FOO_BAR__'); // => 'foo-bar'
```

- [keyBy](https://lodash.com/docs/#keyBy)

```typescript
const array = [
  { dir: 'left', code: 97 },
  { dir: 'right', code: 100 },
];
keyBy(array, function (o) {
  return String.fromCharCode(o.code);
}); // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
keyBy(array, 'dir'); // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
```

- [keys](https://lodash.com/docs/#keys)

```typescript
function Foo() {
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;
keys(new Foo()); // => ['a', 'b'] (iteration order is not guaranteed)
keys('hi'); // => ['0', '1']
```

- [keysIn](https://lodash.com/docs/#keysIn)

```typescript
function Foo() {
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;
keysIn(new Foo()); // => ['a', 'b', 'c'] (iteration order is not guaranteed)
```

- [last](https://lodash.com/docs/#last)

```typescript
last([1, 2, 3]); // => 3
```

- [lastIndexOf](https://lodash.com/docs/#lastIndexOf)

```typescript
lastIndexOf([1, 2, 1, 2], 2); // => 3
lastIndexOf([1, 2, 1, 2], 2, 2); // => 1
```

- [lowerCase](https://lodash.com/docs/#lowerCase)

```typescript
lowerCase('--Foo-Bar--'); // => 'foo bar'
lowerCase('fooBar'); // => 'foo bar'
lowerCase('__FOO_BAR__'); // => 'foo bar'
```

- [lt](https://lodash.com/docs/#lt)

```typescript
lt(1, 3); // => true
lt(3, 3); // => false
lt(3, 1); // => false
```

- [lte](https://lodash.com/docs/#lte)

```typescript
lte(1, 3); // => true
lte(3, 3); // => true
lte(3, 1); // => false
```

- [map](https://lodash.com/docs/#map)

```typescript
function square(n) {
  return n * n;
}
map([4, 8], square); // => [16, 64]
map({ a: 4, b: 8 }, square); // => [16, 64] (iteration order is not guaranteed)
const users = [{ user: 'barney' }, { user: 'fred' }];
map(users, 'user'); // => ['barney', 'fred']
```

- [mapKeys](https://lodash.com/docs/#mapKeys)

```typescript
mapKeys({ a: 1, b: 2 }, function (value, key) {
  return key + value;
}); // => { 'a1': 1, 'b2': 2 }
```

- [mapValues](https://lodash.com/docs/#mapValues)

```typescript
const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 },
};
mapValues(users, function (o) {
  return o.age;
}); // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
mapValues(users, 'age'); // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
```

- [max](https://lodash.com/docs/#max)

```typescript
max([4, 2, 8, 6]); // => 8
max([]); // => undefined
```

- [maxBy](https://lodash.com/docs/#maxBy)

```typescript
const objects = [{ n: 1 }, { n: 2 }];
maxBy(objects, function (o) {
  return o.n;
}); // => { 'n': 2 }
maxBy(objects, 'n'); // => { 'n': 2 }
```

- [mean](https://lodash.com/docs/#mean)

```typescript
mean([4, 2, 8, 6]); // => 5
```

- [meanBy](https://lodash.com/docs/#meanBy)

```typescript
const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
meanBy(objects, function (o) {
  return o.n;
}); // => 5
meanBy(objects, 'n'); // => 5
```

- [memoize](https://lodash.com/docs/#memoize)
- [merge](https://lodash.com/docs/#merge)

```typescript
const object = {
  a: [{ b: 2 }, { d: 4 }],
};

const other = {
  a: [{ c: 3 }, { e: 5 }],
};

merge(object, other); // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
```

- [mergeWith](https://lodash.com/docs/#mergeWith)

```typescript
function customizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

const object = { a: [1], b: [2] };
const other = { a: [3], b: [4] };

mergeWith(object, other, customizer); // => { 'a': [1, 3], 'b': [2, 4] }
```

- [min](https://lodash.com/docs/#min)

```typescript
min([4, 2, 8, 6]); // => 2
min([]); // => undefined
```

- [minBy](https://lodash.com/docs/#minBy)

```typescript
const objects = [{ n: 1 }, { n: 2 }];

minBy(objects, function (o) {
  return o.n;
}); // => { 'n': 1 }
minBy(objects, 'n'); // => { 'n': 1 }
```

- [multiply](https://lodash.com/docs/#multiply)

```typescript
multiply(6, 4); // => 24
```

- [nanoid](https://github.com/ai/nanoid)

```typescript
nanoid(); => // 'V1StGXR8_Z5jdHi6B-myT'
```

- [negate](https://lodash.com/docs/#negate)
- [noCase](https://github.com/blakeembrey/change-case#nocase)

```typescript
noCase('string'); // => 'string'
noCase('dot.case'); // => 'dot case'
noCase('PascalCase'); // => 'pascal case'
noCase('version 1.2.10'); // => 'version 1 2 10'
```

- [noop](https://lodash.com/docs/#noop)
- [now](https://lodash.com/docs/#now)
- [nth](https://lodash.com/docs/#nth)

```typescript
const array = ['a', 'b', 'c', 'd'];
nth(array, 1); // => 'b'
nth(array, -2); // => 'c';
```

- [omit](https://lodash.com/docs/#omit)

```typescript
const object = { a: 1, b: '2', c: 3 };
omit(object, ['a', 'c']); // => { 'b': '2' }
```

- [omitBy](https://lodash.com/docs/#omitBy)

```typescript
const object = { a: 1, b: '2', c: 3 };
omitBy(object, isNumber);
// => { 'b': '2' }
```

- [once](https://lodash.com/docs/#once)
- [orderBy](https://lodash.com/docs/#orderBy)

```typescript
const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 36 },
];
orderBy(users, ['user', 'age'], ['asc', 'desc']); // => [{ user: 'barney', age: 36 }, { user: 'barney', age: 34 }, { user: 'fred', age: 48 }, { user: 'fred', age: 40 }]
```

- [overArgs](https://lodash.com/docs/#overArgs)
- [pad](https://lodash.com/docs/#pad)

```typescript
pad('abc', 8); // => '  abc   '
pad('abc', 8, '_-'); // => '_-abc_-_'
pad('abc', 3); // => 'abc'
```

- [padEnd](https://lodash.com/docs/#padEnd)

```typescript
padEnd('abc', 6); // => 'abc   '
padEnd('abc', 6, '_-'); // => 'abc_-_'
padEnd('abc', 3); // => 'abc'
```

- [padStart](https://lodash.com/docs/#padStart)

```typescript
padStart('abc', 6); // => '   abc'
padStart('abc', 6, '_-'); // => '_-_abc'
padStart('abc', 3); // => 'abc'
```

- [paramCase](https://github.com/blakeembrey/change-case#paramcase)

```typescript
paramCase('string'); // => 'string'
paramCase('dot.case'); // => 'dot-case'
paramCase('PascalCase'); // => 'pascal-case'
paramCase('version 1.2.10'); // => 'version-1-2-10'
```

- [partial](https://lodash.com/docs/#partial)
- [partialRight](https://lodash.com/docs/#partialRight)
- [partition](https://lodash.com/docs/#partition)

```typescript
const users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
  { user: 'pebbles', age: 1, active: false },
];
partition(users, function (o) {
  return o.active;
}); // => objects for [['fred'], ['barney', 'pebbles']]
partition(users, { age: 1, active: false }); // => objects for [['pebbles'], ['barney', 'fred']]
partition(users, ['active', false]); // => objects for [['barney', 'pebbles'], ['fred']]
partition(users, 'active'); // => objects for [['fred'], ['barney', 'pebbles']]
```

- [pascalCase](https://github.com/blakeembrey/change-case#pascalcase)

```typescript
pascalCase('string'); // => 'String'
pascalCase('dot.case'); // => 'DotCase'
pascalCase('PascalCase'); // => 'PascalCase'
pascalCase('version 1.2.10'); // => 'Version_1_2_10'
```

- [pathCase](https://github.com/blakeembrey/change-case#pathcase)

```typescript
pathCase('string'); // => 'string'
pathCase('dot.case'); // => 'dot/case'
pathCase('PascalCase'); // => 'pascal/case'
pathCase('version 1.2.10'); // => 'version/1/2/10'
```

- [pick](https://lodash.com/docs/#pick)

```typescript
const object = { a: 1, b: '2', c: 3 };
pick(object, ['a', 'c']); // => { 'a': 1, 'c': 3 }
```

- [pickBy](https://lodash.com/docs/#pickBy)

```typescript
const object = { a: 1, b: '2', c: 3 };
pickBy(object, isNumber);
// => { 'a': 1, 'c': 3 }
```

- [pull](https://lodash.com/docs/#pull)

```typescript
const array = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(array, 'a', 'c');
console.log(array); // => ['b', 'b']
```

- [pullAll](https://lodash.com/docs/#pullAll)

```typescript
const array = ['a', 'b', 'c', 'a', 'b', 'c'];
pullAll(array, ['a', 'c']);
console.log(array); // => ['b', 'b']
```

- [pullAllBy](https://lodash.com/docs/#pullAllBy)

```typescript
const array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
pullAllBy(array, [{ x: 1 }, { x: 3 }], 'x');
console.log(array); // => [{ 'x': 2 }]
```

- [pullAllWith](https://lodash.com/docs/#pullAllWith)

```typescript
const array = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 },
];
pullAllWith(array, [{ x: 3, y: 4 }], isEqual);
console.log(array); // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
```

- [pullAt](https://lodash.com/docs/#pullAt)

```typescript
const array = ['a', 'b', 'c', 'd'];
const pulled = pullAt(array, [1, 3]);
console.log(array); // => ['a', 'c']
console.log(pulled); // => ['b', 'd']
```

- [random](https://lodash.com/docs/#random)

```typescript
random(0, 5); // => an integer between 0 and 5
random(5); // => also an integer between 0 and 5
random(5, true); // => a floating-point number between 0 and 5
random(1.2, 5.2); // => a floating-point number between 1.2 and 5.2
```

- [rearg](https://lodash.com/docs/#rearg)
- [reduce](https://lodash.com/docs/#reduce)

```typescript
reduce(
  [1, 2],
  function (sum, n) {
    return sum + n;
  },
  0,
); // => 3
reduce(
  { a: 1, b: 2, c: 1 },
  function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
  },
  {},
); // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
```

- [reduceRight](https://lodash.com/docs/#reduceRight)

```typescript
const array = [
  [0, 1],
  [2, 3],
  [4, 5],
];
reduceRight(
  array,
  function (flattened, other) {
    return flattened.concat(other);
  },
  [],
); // => [4, 5, 2, 3, 0, 1]
```

- [reject](https://lodash.com/docs/#reject)

```typescript
const users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
];
reject(users, function (o) {
  return !o.active;
}); // => objects for ['fred']
reject(users, { age: 40, active: true }); // => objects for ['barney']
reject(users, ['active', false]); // => objects for ['fred']
reject(users, 'active'); // => objects for ['barney']
```

- [remove](https://lodash.com/docs/#remove)

```typescript
const array = [1, 2, 3, 4];
const evens = remove(array, function (n) {
  return n % 2 == 0;
});
console.log(array); // => [1, 3]
console.log(evens); // => [2, 4]
```

- [reverse](https://lodash.com/docs/#reverse)

```typescript
const array = [1, 2, 3];
reverse(array); // => [3, 2, 1]
console.log(array); // => [3, 2, 1]
```

- [rest](https://lodash.com/docs/#rest)
- [result](https://lodash.com/docs/#result)

```typescript
const object = { 'a': [{ 'b': { 'c1': 3, 'c2': constant(4) } }] };
result(object, 'a[0].b.c1'); // => 3
result(object, 'a[0].b.c2'); // => 4
result(object, 'a[0].b.c3', 'default'); // => 'default'
result(object, 'a[0].b.c3', constant('default')); // => 'default'
```

- [retry](https://github.com/vercel/async-retry)

```typescript
await retry(
  async (bail) => {
    // if anything throws, we retry
    const res = await fetch('https://google.com');

    if (403 === res.status) {
      // don't retry upon 403
      bail(new Error('Unauthorized'));
      return;
    }

    const data = await res.text();
    return data.substr(0, 500);
  },
  {
    retries: 5,
  },
);
```

- [round](https://lodash.com/docs/#round)

```typescript
round(4.006); // => 4
round(4.006, 2); // => 4.01
round(4060, -2); // => 4100
```

- [sample](https://lodash.com/docs/#sample)

```typescript
sample([1, 2, 3, 4]); // => 2
```

- [sampleSize](https://lodash.com/docs/#sampleSize)

```typescript
sampleSize([1, 2, 3], 2); // => [3, 1]
sampleSize([1, 2, 3], 4); // => [2, 3, 1]
```

- [slice](https://lodash.com/docs/#slice)
- [sentenceCase](https://github.com/blakeembrey/change-case#sentencecase)

```typescript
sentenceCase('string'); // => 'String'
sentenceCase('dot.case'); // => 'Dot case'
sentenceCase('PascalCase'); // => 'Pascal case'
sentenceCase('version 1.2.10'); // => 'Version 1 2 10'
```

- [set](https://lodash.com/docs/#set)

```typescript
const object = { a: [{ b: { c: 3 } }] };
set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c); // => 4
set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z); // => 5
```

- [setWith](https://lodash.com/docs/#setWith)

```typescript
const object = {};
setWith(object, '[0][1]', 'a', Object); // => { '0': { '1': 'a' } }
```

- [shortUuid](./src/shortUuid.ts)
- [shuffle](https://lodash.com/docs/#shuffle)

```typescript
shuffle([1, 2, 3, 4]); // => [4, 1, 3, 2]
```

- [size](https://lodash.com/docs/#size)

```typescript
size([1, 2, 3]); // => 3
size({ a: 1, b: 2 }); // => 2
size('pebbles'); // => 7
```

- [sleep](./src/sleep.ts)

```typescript
async () => {
  await sleep(2000);
  console.log('Awake!'); // 2 s later
};
```

- [snakeCase](https://github.com/blakeembrey/change-case#snakecase)

```typescript
snakeCase('string'); // => 'string'
snakeCase('dot.case'); // => 'dot_case'
snakeCase('PascalCase'); // => 'pascal_case'
snakeCase('version 1.2.10'); // => 'version_1_2_10'
```

- [some](https://lodash.com/docs/#some)

```typescript
some([null, 0, 'yes', false], Boolean); // => true
const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
];
some(users, { user: 'barney', active: false }); // => false
some(users, ['active', false]); // => true
some(users, 'active'); // => true
```

- [sortBy](https://lodash.com/docs/#sortBy)

```typescript
const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 },
];
sortBy(users, [
  function (o) {
    return o.user;
  },
]); // => [{ user: 'barney', age: 36 }, { user: 'barney', age: 34 }, { user: 'fred', age: 48 }, { user: 'fred', age: 40 }]
sortBy(users, ['user', 'age']); // => [{ user: 'barney', age: 34 }, { user: 'barney', age: 36 }, { user: 'fred', age: 40 }, { user: 'fred', age: 48 }]
```

- [sortedIndex](https://lodash.com/docs/#sortedIndex)

```typescript
sortedIndex([30, 50], 40); // => 1
```

- [sortedIndexBy](https://lodash.com/docs/#sortedIndexBy)

```typescript
const objects = [{ x: 4 }, { x: 5 }];

sortedIndexBy(objects, { x: 4 }, function (o) {
  return o.x;
}); // => 0
sortedIndexBy(objects, { x: 4 }, 'x'); // => 0
```

- [sortedIndexOf](https://lodash.com/docs/#sortedIndexOf)

```typescript
sortedIndexOf([4, 5, 5, 5, 6], 5); // => 1
```

- [sortedLastIndex](https://lodash.com/docs/#sortedLastIndex)

```typescript
sortedLastIndex([4, 5, 5, 5, 6], 5); // => 4
```

- [sortedLastIndexBy](https://lodash.com/docs/#sortedLastIndexBy)

```typescript
const objects = [{ x: 4 }, { x: 5 }];

sortedLastIndexBy(objects, { x: 4 }, function (o) {
  return o.x;
}); // => 1
sortedLastIndexBy(objects, { x: 4 }, 'x'); // => 1
```

- [sortedLastIndexOf](https://lodash.com/docs/#sortedLastIndexOf)

```typescript
sortedLastIndexOf([4, 5, 5, 5, 6], 5); // => 3
```

- [sortedUniq](https://lodash.com/docs/#sortedUniq)

```typescript
sortedUniq([1, 1, 2]); // => [1, 2]
```

- [sortedUniqBy](https://lodash.com/docs/#sortedUniqBy)

```typescript
sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor); // => [1.1, 2.3]
```

- [spread](https://lodash.com/docs/#spread)
- [startCase](https://lodash.com/docs/#startCase)

```typescript
startCase('--foo-bar--'); // => 'Foo Bar'
startCase('fooBar'); // => 'Foo Bar'
startCase('__FOO_BAR__'); // => 'FOO BAR'
```

- [subtract](https://lodash.com/docs/#subtract)

```typescript
subtract(6, 4); // => 2
```

- [sum](https://lodash.com/docs/#sum)

```typescript
sum([4, 2, 8, 6]); // => 20
```

- [sumBy](https://lodash.com/docs/#sumBy)

```typescript
const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
sumBy(objects, function (o) {
  return o.n;
}); // => 20
sumBy(objects, 'n'); // => 20
```

- [tail](https://lodash.com/docs/#tail)

```typescript
tail([1, 2, 3]); // => [2, 3]
```

- [take](https://lodash.com/docs/#take)

```typescript
take([1, 2, 3]); // => [1]
take([1, 2, 3], 2); // => [1, 2]
take([1, 2, 3], 5); // => [1, 2, 3]
take([1, 2, 3], 0); // => []
```

- [takeRight](https://lodash.com/docs/#takeRight)

```typescript
takeRight([1, 2, 3]); // => [3]
takeRight([1, 2, 3], 2); // => [2, 3]
takeRight([1, 2, 3], 5); // => [1, 2, 3]
takeRight([1, 2, 3], 0); // => []
```

- [takeRightWhile](https://lodash.com/docs/#takeRightWhile)

```typescript
const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
];
takeRightWhile(users, function (o) {
  return !o.active;
}); // => objects for ['fred', 'pebbles']
takeRightWhile(users, { user: 'pebbles', active: false }); // => objects for ['pebbles']
takeRightWhile(users, ['active', false]); // => objects for ['fred', 'pebbles']
takeRightWhile(users, 'active'); // => []
```

- [takeWhile](https://lodash.com/docs/#takeWhile)

```typescript
const users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];
takeWhile(users, function (o) {
  return !o.active;
}); // => objects for ['barney', 'fred']
takeWhile(users, { user: 'barney', active: false }); // => objects for ['barney']
takeWhile(users, ['active', false]); // => objects for ['barney', 'fred']
takeWhile(users, 'active'); // => []
```

- [throttle](https://lodash.com/docs/#throttle)
- [toArray](https://lodash.com/docs/#toArray)

```typescript
toArray({ a: 1, b: 2 }); // => [1, 2]
toArray('abc'); // => ['a', 'b', 'c']
toArray(1); // => []
toArray(null); // => []
```

- [toFinite](https://lodash.com/docs/#toFinite)

```typescript
toFinite(3.2); // => 3.2
toFinite(Number.MIN_VALUE); // => 5e-324
toFinite(Infinity); // => 1.7976931348623157e+308
toFinite('3.2'); // => 3.2
```

- [toInteger](https://lodash.com/docs/#toInteger)

```typescript
toInteger(3.2); // => 3
toInteger(Number.MIN_VALUE); // => 0
toInteger(Infinity); // => 1.7976931348623157e+308
toInteger('3.2'); // => 3
```

- [toLength](https://lodash.com/docs/#toLength)

```typescript
toLength(3.2); // => 3
toLength(Number.MIN_VALUE); // => 0
toLength(Infinity); // => 4294967295
toLength('3.2'); // => 3
```

- [toNumber](https://lodash.com/docs/#toNumber)

```typescript
toNumber(3.2); // => 3.2
toNumber(Number.MIN_VALUE); // => 5e-324
toNumber(Infinity); // => Infinity
toNumber('3.2'); // => 3.2
```

- [toPairs](https://lodash.com/docs/#toPairs)

```typescript
function Foo() {
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;
toPairs(new Foo()); // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
```

- [toPairsIn](https://lodash.com/docs/#toPairsIn)

```typescript
function Foo() {
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;
toPairsIn(new Foo()); // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
```

- [toPlainObject](https://lodash.com/docs/#toPlainObject)

```typescript
function Foo() {
  this.b = 2;
}
Foo.prototype.c = 3;

Object.assign({ a: 1 }, new Foo()); // => { 'a': 1, 'b': 2 }
Object.assign({ a: 1 }, toPlainObject(new Foo())); // => { 'a': 1, 'b': 2, 'c': 3 }
```

- [toSafeInteger](https://lodash.com/docs/#toSafeInteger)

```typescript
toSafeInteger(3.2); // => 3
toSafeInteger(Number.MIN_VALUE); // => 0
toSafeInteger(Infinity); // => 9007199254740991
toSafeInteger('3.2'); // => 3
```

- [toShortUuid](./src/toShortUuid.ts)
- [toString](https://lodash.com/docs/#toString)

```typescript
toString(null); // => ''
toString(-0); // => '-0'
toString([1, 2, 3]); // => '1,2,3'
```

- [toUuid](./src/toUuid.ts)
- [transform](https://lodash.com/docs/#transform)

```typescript
transform(
  [2, 3, 4],
  function (result, n) {
    result.push((n *= n));
    return n % 2 == 0;
  },
  [],
); // => [4, 9]
transform(
  { a: 1, b: 2, c: 1 },
  function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
  },
  {},
); // => { '1': ['a', 'c'], '2': ['b'] }
```

- [trim](https://lodash.com/docs/#trim)

```typescript
trim('  abc  '); // => 'abc'
trim('-_-abc-_-', '_-'); // => 'abc'
['  foo  ', '  bar  '].map((item) => trim(item)); // => ['foo', 'bar']
```

- [trimEnd](https://lodash.com/docs/#trimEnd)

```typescript
trimEnd('  abc  '); // => '  abc'
trimEnd('-_-abc-_-', '_-'); // => '-_-abc'
```

- [trimStart](https://lodash.com/docs/#trimStart)

```typescript
trimStart('  abc  '); // => 'abc  '
trimStart('-_-abc-_-', '_-'); // => 'abc-_-'
```

- [truncate](https://lodash.com/docs/#truncate)

```typescript
truncate('hi-diddly-ho there, neighborino'); // => 'hi-diddly-ho there, neighbo...'
truncate('hi-diddly-ho there, neighborino', {
  length: 24,
  separator: ' ',
}); // => 'hi-diddly-ho there,...'
truncate('hi-diddly-ho there, neighborino', {
  length: 24,
  separator: /,? +/,
}); // => 'hi-diddly-ho there...'
truncate('hi-diddly-ho there, neighborino', {
  omission: ' [...]',
}); // => 'hi-diddly-ho there, neig [...]'
```

- [unary](https://lodash.com/docs/#unary)
- [union](https://lodash.com/docs/#union)

```typescript
union([2], [1, 2]); // => [2, 1]
```

- [unionBy](https://lodash.com/docs/#unionBy)

```typescript
unionBy([2.1], [1.2, 2.3], Math.floor); // => [2.1, 1.2]
unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x'); // => [{ 'x': 1 }, { 'x': 2 }]
```

- [unionWith](https://lodash.com/docs/#unionWith)

```typescript
const objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
const others = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];

unionWith(objects, others, isEqual); // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```

- [uniq](https://lodash.com/docs/#uniq)

```typescript
uniq([2, 1, 2]); // => [2, 1]
```

- [uniqBy](https://lodash.com/docs/#uniqBy)

```typescript
uniqBy([2.1, 1.2, 2.3], Math.floor); // => [2.1, 1.2]
uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], 'x'); // => [{ 'x': 1 }, { 'x': 2 }]
```

- [uniqueId](https://lodash.com/docs/#uniqueId)

```typescript
uniqueId('contact_'); // => 'contact_104'
uniqueId(); // => '105'
```

- [uniqWith](https://lodash.com/docs/#uniqWith)

```typescript
const objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 1, y: 2 },
];
uniqWith(objects, isEqual); // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```

- [unzip](https://lodash.com/docs/#unzip)

```typescript
const zipped = zip(['a', 'b'], [1, 2], [true, false]); // => [['a', 1, true], ['b', 2, false]]
unzip(zipped); // => [['a', 'b'], [1, 2], [true, false]]
```

- [unzipWith](https://lodash.com/docs/#unzipWith)

```typescript
const zipped = zip([1, 2], [10, 20], [100, 200]); // => [[1, 10, 100], [2, 20, 200]]
unzipWith(zipped, add); // => [3, 30, 300]
```

- [upperCase](https://lodash.com/docs/#upperCase)

```typescript
upperCase('--foo-bar'); // => 'FOO BAR'
upperCase('fooBar'); // => 'FOO BAR'
upperCase('__foo_bar__'); // => 'FOO BAR'
```

- [uuid](./src/uuid.ts)
- [without](https://lodash.com/docs/#without)

```typescript
without([2, 1, 2, 3], 1, 2); // => [3]
```

- [words](https://lodash.com/docs/#words)

```typescript
words('fred, barney, & pebbles'); // => ['fred', 'barney', 'pebbles']
words('fred, barney, & pebbles', /[^, ]+/g); // => ['fred', 'barney', '&', 'pebbles']
```

- [wrap](https://lodash.com/docs/#wrap)
- [xor](https://lodash.com/docs/#xor)

```typescript
xor([2, 1], [2, 3]); // => [1, 3]
```

- [xorBy](https://lodash.com/docs/#xorBy)

```typescript
xorBy([2.1, 1.2], [2.3, 3.4], Math.floor); // => [1.2, 3.4]
xorBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x'); // => [{ 'x': 2 }]
```

- [xorWith](https://lodash.com/docs/#xorWith)

```typescript
const objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
const others = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];
xorWith(objects, others, isEqual); // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```

- [zip](https://lodash.com/docs/#zip)

```typescript
zip(['a', 'b'], [1, 2], [true, false]); // => [['a', 1, true], ['b', 2, false]]
```

- [zipObject](https://lodash.com/docs/#zipObject)

```typescript
zipObject(['a', 'b'], [1, 2]); // => { 'a': 1, 'b': 2 }
```

- [zipObjectDeep](https://lodash.com/docs/#zipObjectDeep)

```typescript
zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]); // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
```

- [zipWith](https://lodash.com/docs/#zipWith)

```typescript
zipWith([1, 2], [10, 20], [100, 200], function (a, b, c) {
  return a + b + c;
}); // => [111, 222]
```

## More

This simple (maybe powerful) library is implemented using the following libraries and will hopefully solve many development problems.

- [async-retry](https://github.com/vercel/async-retry)
- [change-case](https://github.com/blakeembrey/change-case)
- [lodash-es](https://github.com/lodash/lodash)
- [nanoid](https://github.com/ai/nanoid)
- [short-uuid](https://github.com/oculus42/short-uuid)
- [validator](https://github.com/validatorjs/validator.js)

If this library does not solve your problems, I suggest you look up the solution in the following libraries.

- [convert](https://github.com/jonahsnider/convert)
- [dayjs](https://github.com/iamkun/dayjs)
- [faker](https://github.com/Marak/faker.js)
- [format-rmb](https://github.com/bazingaedward/ChinaCurrency)
- [gcoord](https://github.com/hujiulong/gcoord)
- [lodash-es](https://github.com/lodash/lodash)
- [mitt](https://github.com/developit/mitt)
- [mockjs](https://github.com/nuysoft/Mock)
- [mockjs-esm](https://gitee.com/dongzhongzhidong/Mock)
- [numbro](https://github.com/BenjaminVanRyseghem/numbro)
- [path-to-regexp](https://github.com/pillarjs/path-to-regexp)
- [qs](https://github.com/ljharb/qs)
- [query-string](https://github.com/sindresorhus/query-string)
- [ramda](https://github.com/ramda/ramda)
- [ua-parser-js](https://github.com/faisalman/ua-parser-js)
- [validator](https://github.com/validatorjs/validator.js)
- [xe-utils](https://github.com/x-extends/xe-utils)

Great thanks to the authors and contributors of all these libraries. :D
