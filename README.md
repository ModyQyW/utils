# @modyqyw/utils

Shareable utils for different JavaScript/TypeScript projects.

[Plan](https://github.com/ModyQyW/utils/issues/1)

[Github](https://github.com/ModyQyW/utils#readme) | [Gitee](https://github.com/ModyQyW/utils#readme)

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

Please see links for more infos.

- [camelCase](https://github.com/blakeembrey/change-case#camelcase)

```typescript
import { camelCase } from '@modyqyw/utils';

camelCase('string'); // => 'string'
camelCase('dot.case'); // => 'dotCase'
camelCase('PascalCase'); // => 'pascalCase'
camelCase('version 1.2.10'); // => 'version_1_2_10'
```

- [capitalCase](https://github.com/blakeembrey/change-case#capitalcase)

```typescript
import { capitalCase } from '@modyqyw/utils';

capitalCase('string'); // => 'String'
capitalCase('dot.case'); // => 'Dot Case'
capitalCase('PascalCase'); // => 'Pascal Case'
capitalCase('version 1.2.10'); // => 'Version 1 2 10'
```

- [ceil](https://lodash.com/docs/#ceil)

```typescript
import { ceil } from '@modyqyw/utils';

ceil(4.006); // => 5
ceil(6.004, 2); // => 6.01
ceil(6040, -2); // => 6100
```

- [chunk](https://lodash.com/docs/#chunk)

```typescript
import { chunk } from '@modyqyw/utils';

chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]
```

- [clone](https://lodash.com/docs/#clone)

```typescript
import { clone } from '@modyqyw/utils';

const objects = [{ 'a': 1 }, { 'b': 2 }];
const shallow = clone(objects);
console.log(shallow[0] === objects[0]); // => true
```

- [cloneDeep](https://lodash.com/docs/#cloneDeep)

```typescript
import { cloneDeep } from '@modyqyw/utils';

const objects = [{ 'a': 1 }, { 'b': 2 }];
const shallow = clone(objects);
console.log(shallow[0] === objects[0]); // => false
```

- [compact](https://lodash.com/docs/#compact)

```typescript
import { compact } from '@modyqyw/utils';

compact([0, 1, false, 2, '', 3]); // => [1, 2, 3]
```

- [concat](https://lodash.com/docs/#concat)

```typescript
import { concat } from '@modyqyw/utils';

const array = [1];
const other = concat(array, 2, [3], [[4]]);
console.log(other); // => [1, 2, 3, [4]]
console.log(array); // => [1]
```

- [constantCase](https://github.com/blakeembrey/change-case#constantcase)

```typescript
import { constantCase } from '@modyqyw/utils';

constantCase('string'); // => 'STRING'
constantCase('dot.case'); // => 'DOT_CASE'
constantCase('PascalCase'); // => 'PASCAL_CASE'
constantCase('version 1.2.10'); // => 'VERSION_1_2_10'
```

- [debounce](https://lodash.com/docs/#debounce)
- [difference](https://lodash.com/docs/#difference)

```typescript
import { difference } from '@modyqyw/utils';

difference([2, 1], [2, 3]); // => [1]
```

- [differenceBy](https://lodash.com/docs/#differenceBy)

```typescript
import { differenceBy } from '@modyqyw/utils';

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // => [1.2]
differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'); // => [{ 'x': 2 }]
```

- [differenceWith](https://lodash.com/docs/#differenceWith)

```typescript
import { differenceWith, isEqual } from '@modyqyw/utils';

const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual); // => [{ 'x': 2, 'y': 1 }]
```

- [dotCase](https://github.com/blakeembrey/change-case#dotcase)

```typescript
import { dotCase } from '@modyqyw/utils';

dotCase('string'); // => 'string'
dotCase('dot.case'); // => 'dot.case'
dotCase('PascalCase'); // => 'pascal.case'
dotCase('version 1.2.10'); // => 'version.1.2.10'
```

- [drop](https://lodash.com/docs/#drop)

```typescript
import { drop } from '@modyqyw/utils';

drop([1, 2, 3]); // => [2, 3]
drop([1, 2, 3], 2); // => [3]
drop([1, 2, 3], 5); // => []
drop([1, 2, 3], 0); // => [1, 2, 3]
```

- [fakeAvatar](./src/fakeAvatar.ts)

```typescript
import { fakeAvatar } from '@modyqyw/utils';

fakeAvatar(); // => 'https://placekitten.com/128' or 'https://picsum.photos/128'
fakeAvatar(256); // => 'https://placekitten.com/256' or 'https://picsum.photos/256'
```

- [fakeImage](./src/fakeImage.ts)

```typescript
import { fakeImage } from '@modyqyw/utils';

fakeImage(); // => 'https://placekitten.com/640/480' or 'https://picsum.photos/640/480'
fakeImage(480, 640); // => 'https://placekitten.com/480/640' or 'https://picsum.photos/480/640'
```

- [fakeLorem](./src/fakeLorem.ts) - same as fakeLoremParagraph
- [fakeLoremParagraph](./src/fakeLoremParagraph.ts)

```typescript
import { fakeLoremParagraph } from '@modyqyw/utils';

fakeLoremParagraph();
// => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
```

- [fakeLoremSentence](./src/fakeLoremSentence.ts)

```typescript
import { fakeLoremSentence } from '@modyqyw/utils';

fakeLoremSentence(); // a sentence from lorem paragraph
```

- [fakeLoremWord](./src/fakeLoremWord.ts)

```typescript
import { fakeLoremWord } from '@modyqyw/utils';

fakeLoremWord(); // a word from lorem paragraph
```

- [floor](https://lodash.com/docs/#floor)

```typescript
import { floor } from '@modyqyw/utils';

floor(4.006); // => 4
floor(0.046, 2); // => 0.04
floor(4060, -2); // => 4000
```

- [headerCase](https://github.com/blakeembrey/change-case#headercase)

```typescript
import { headerCase } from '@modyqyw/utils';

headerCase('string'); // => 'String'
headerCase('dot.case'); // => 'Dot-Case'
headerCase('PascalCase'); // => 'Pascal-Case'
headerCase('version 1.2.10'); // => 'Version-1-2-10'
```

- [intersection](https://lodash.com/docs/#intersection)

```typescript
import { intersection } from '@modyqyw/utils';

intersection([2, 1], [2, 3]); // => [2]
```

- [intersectionBy](https://lodash.com/docs/#intersectionBy)

```typescript
import { intersectionBy } from '@modyqyw/utils';

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // => [2.1]
intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'); // => [{ 'x': 1 }]
```

- [intersectionWith](https://lodash.com/docs/#intersectionWith)

```typescript
import { intersectionWith, isEqual } from '@modyqyw/utils';

const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
intersectionWith(objects, others, isEqual); // => [{ 'x': 1, 'y': 2 }]
```

- [isArrayBuffer](https://lodash.com/docs/#isArrayBuffer)

```typescript
import { isArrayBuffer } from '@modyqyw/utils';

isArrayBuffer(new ArrayBuffer(2)); // => true
isArrayBuffer(new Array(2)); // => false
```

- [isArrayLike](https://lodash.com/docs/#isArrayLike)

```typescript
import { isArrayLike, noop } from '@modyqyw/utils';

isArrayLike([1, 2, 3]); // => true
isArrayLike(document.body.children); // => true
isArrayLike('abc'); // => true
isArrayLike(noop); // => false
```

- [isArrayLikeObject](https://lodash.com/docs/#isArrayLikeObject)

```typescript
import { isArrayLikeObject, noop } from '@modyqyw/utils';

isArrayLikeObject([1, 2, 3]); // => true
isArrayLikeObject(document.body.children); // => true
isArrayLikeObject('abc'); // => false
isArrayLikeObject(noop); // => false
```

- [isBoolean](https://lodash.com/docs/#isBoolean)

```typescript
import { isBoolean } from '@modyqyw/utils';

isBoolean(false); // => true
isBoolean(null); // => false
```

- [isBuffer](https://lodash.com/docs/#isBuffer)

```typescript
import { isBuffer } from '@modyqyw/utils';

isBuffer(new Buffer(2)); // => true
isBuffer(new Uint8Array(2)); // => false
```

- [isDate](https://lodash.com/docs/#isDate)

```typescript
import { isDate } from '@modyqyw/utils';

isDate(new Date()); // => true
isDate('Mon April 23 2012'); // => false
```

- [isElement](https://lodash.com/docs/#isElement)

```typescript
import { isElement } from '@modyqyw/utils';

isElement(document.body); // => true
isElement('<body>'); // => false
```

- [isEmail](https://github.com/validatorjs/validator.js#validators)

```typescript
import { isEmail } from '@modyqyw/utils';

isEmail('foo@bar.com'); // => true
```

- [isEmpty](https://lodash.com/docs/#isEmpty)

```typescript
import { isEmpty } from '@modyqyw/utils';

isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ 'a': 1 }); // => false
```

- [isEqual](https://lodash.com/docs/#isEqual)

```typescript
import { isEqual } from '@modyqyw/utils';

const object = { 'a': 1 };
const other = { 'a': 1 };
isEqual(object, other); // => true
object === other; // => false

```

- [isError](https://lodash.com/docs/#isError)

```typescript
import { isError } from '@modyqyw/utils';

isError(new Error()); // => true
isError(Error); // => false
```

- [isEvalError](./src/isEvalError.ts)

```typescript
import { isEvalError } from '@modyqyw/utils';

isEvalError(new EvalError()); // => true
isEvalError(EvalError); // => false
```

- [isEvenNumber](./src/isEvenNumber.ts)

```typescript
import { isEvenNumber } from '@modyqyw/utils';

isEvenNumber(1); // => false
isEvenNumber(2); // => true
```

- [isFloat](./src/isFloat.ts)

```typescript
import { isFloat } from '@modyqyw/utils';

isFloat(1); // => false
isFloat(1.1); // => true
```

- [isFunction](https://lodash.com/docs/#isFunction)
- [isHash](https://github.com/validatorjs/validator.js#validators)

```typescript
import { isHash } from '@modyqyw/utils';

isHash('d94f3f016ae679c3008de268209132f2', 'md5'); // => true
isHash('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824', 'sha256'); // => true
```

- [isHexColor](https://github.com/validatorjs/validator.js#validators)

```typescript
import { isHexColor } from '@modyqyw/utils';

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
import { isHSL } from '@modyqyw/utils';

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
import { isIdentityCard } from '@modyqyw/utils';

isIdentityCard('235407195106112745', 'zh-CN'); // => true
```

- [isJSON](https://github.com/validatorjs/validator.js#validators)

```typescript
import { isJSON } from '@modyqyw/utils';

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
import { isJWT } from '@modyqyw/utils';

isJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI'); // => true
```

- [isLength](https://lodash.com/docs/#isLength)

```typescript
import { isLength } from '@modyqyw/utils';

isLength(3); // => true
isLength(Number.MIN_VALUE); // => false
isLength(Infinity); // => false
isLength('3'); // => false
```

- [isMap](https://lodash.com/docs/#isMap)

```typescript
import { isMap } from '@modyqyw/utils';

isMap(new Map()); // => true
isMap(new WeakMap()); // => false
```

- [isMatch](https://lodash.com/docs/#isMatch)

```typescript
import { isMatch } from '@modyqyw/utils';

const object = { 'a': 1, 'b': 2 };
isMatch(object, { 'b': 2 }); // => true
isMatch(object, { 'b': 1 }); // => false
```

- [isMatchWith](https://lodash.com/docs/#isMatchWith)

```typescript
import { isMatchWith } from '@modyqyw/utils';

function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, srcValue) {
  return isGreeting(objValue) && isGreeting(srcValue);
}

const object = { 'greeting': 'hello' };
const source = { 'greeting': 'hi' };

isMatchWith(object, source, customizer); // => true
```

- [isMobilePhone](https://github.com/validatorjs/validator.js#validators)

```typescript
import { isMobilePhone } from '@modyqyw/utils';

isMobilePhone('15323456787', 'zh-CN');
```

- [isNil](https://lodash.com/docs/#isNil)

```typescript
import { isNil } from '@modyqyw/utils';

isNil(null); // => true
isNil(void 0); // => true
isNil(NaN); // => false
```

- [isNull](https://lodash.com/docs/#isNull)

```typescript
import { isNull } from '@modyqyw/utils';

isNull(null); // => true
isNull(void 0); // => false
```

- [isNumber](https://lodash.com/docs/#isNumber)

```typescript
import { isNumber } from '@modyqyw/utils';

isNumber(3); // => true
isNumber(Number.MIN_VALUE); // => true
isNumber(Infinity); // => true
isNumber('3'); // => false
```

- [isObject](https://lodash.com/docs/#isObject)

```typescript
import { isObject, noop } from '@modyqyw/utils';

isObject({}); // => true
isObject([1, 2, 3]); // => true
isObject(noop); // => true
isObject(null); // => false
```

- [isObjectLike](https://lodash.com/docs/#isObjectLike)

```typescript
import { isObjectLike, noop } from '@modyqyw/utils';

isObjectLike({}); // => true
isObjectLike([1, 2, 3]); // => true
isObjectLike(noop); // => false
isObjectLike(null); // => false
```

- [isOddNumber](./src/isOddNumber.ts)

```typescript
import { isOddNumber } from '@modyqyw/utils';

isOddNumber(1); // => true
isOddNumber(2); // => false
```

- [isPlainObject](https://lodash.com/docs/#isPlainObject)

```typescript
import { isPlainObject } from '@modyqyw/utils';

function Foo() {
  this.a = 1;
}

isPlainObject(new Foo); // => false
isPlainObject([1, 2, 3]); // => false
isPlainObject({ 'x': 0, 'y': 0 }); // => true
isPlainObject(Object.create(null)); // => true
```

- [isRangeError](./src/isRangeError.ts)

```typescript
import { isRangeError } from '@modyqyw/utils';

isRangeError(new RangeError()); // => true
isRangeError(RangeError); // => false
```

- [isReferenceError](./src/isReferenceError.ts)

```typescript
import { isReferenceError } from '@modyqyw/utils';

isReferenceError(new ReferenceError()); // => true
isReferenceError(ReferenceError); // => false
```

- [isRegExp](https://lodash.com/docs/#isRegExp)

```typescript
import { isRegExp } from '@modyqyw/utils';

isRegExp(/abc/); // => true
 isRegExp('/abc/'); // => false
```

- [isRgbColor](https://github.com/validatorjs/validator.js#validators)

```typescript
import { isRgbColor } from '@modyqyw/utils';

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

- [isSemver](https://github.com/validatorjs/validator.js#validators)

```typescript
import { isSemver } from '@modyqyw/utils';

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
import { isSet } from '@modyqyw/utils';

isSet(new Set); // => true
isSet(new WeakSet); // => false
```

- [isString](https://lodash.com/docs/#isString)

```typescript
import { isString } from '@modyqyw/utils';

isString('abc'); // => true
isString(1); // => false
```

- [isStrongPassword](https://github.com/validatorjs/validator.js#validators)

```typescript
import { isStrongPassword } from '@modyqyw/utils';

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
import { isSymbol } from '@modyqyw/utils';

isSymbol(Symbol.iterator); // => true
isSymbol('abc'); // => false
```

- [isSyntaxError](./src/isSyntaxError.ts)

```typescript
import { isSyntaxError } from '@modyqyw/utils';

isSyntaxError(new SyntaxError()); // => true
isSyntaxError(SyntaxError); // => false
```

- [isTypedArray](https://lodash.com/docs/#isTypedArray)

```typescript
import { isTypedArray } from '@modyqyw/utils';

isTypedArray(new Uint8Array); // => true
isTypedArray([]); // => false
```

- [isTypeError](./src/isTypeError.ts)

```typescript
import { isTypeError } from '@modyqyw/utils';

isTypeError(new TypeError()); // => true
isTypeError(TypeError); // => false
```

- [isUndefined](https://lodash.com/docs/#isUndefined)

```typescript
import { isUndefined } from '@modyqyw/utils';

isUndefined(void 0); // => true
isUndefined(null); // => false
```

- [isURIError](./src/isURIError.ts)

```typescript
import { isURIError } from '@modyqyw/utils';

isURIError(new URIError()); // => true
isURIError(URIError); // => false
```

- [isValidDate](./src/isValidDate.ts)

```typescript
import { isValidDate } from '@modyqyw/utils';

isValidDate(new Date()); // => true
isValidDate(new Date('')); // => false
```

- [isWeakMap](https://lodash.com/docs/#isWeakMap)

```typescript
import { isWeakMap } from '@modyqyw/utils';

isWeakMap(new WeakMap()); // => true
isWeakMap(new Map()); // => false
```

- [isWeakSet](https://lodash.com/docs/#isWeakSet)

```typescript
import { isWeakSet } from '@modyqyw/utils';

isWeakSet(new WeakSet()); // => true
isWeakSet(new Set()); // => false
```

- [kebabCase](https://lodash.com/docs/#kebabCase)

```typescript
import { kebabCase } from '@modyqyw/utils';

kebabCase('Foo Bar'); // => 'foo-bar'
kebabCase('fooBar'); // => 'foo-bar'
kebabCase('__FOO_BAR__'); // => 'foo-bar'
```

- [lowerCase](https://lodash.com/docs/#lowerCase)

```typescript
import { lowerCase } from '@modyqyw/utils';

lowerCase('--Foo-Bar--'); // => 'foo bar'
lowerCase('fooBar'); // => 'foo bar'
lowerCase('__FOO_BAR__'); // => 'foo bar'
```

- [max](https://lodash.com/docs/#max)

```typescript
import { max } from '@modyqyw/utils';

max([4, 2, 8, 6]); // => 8
max([]); // => undefined
```

- [maxBy](https://lodash.com/docs/#maxBy)

```typescript
import { maxBy } from '@modyqyw/utils';

const objects = [{ 'n': 1 }, { 'n': 2 }];
maxBy(objects, function(o) { return o.n; }); // => { 'n': 2 }
maxBy(objects, 'n'); // => { 'n': 2 }
```

- [mean](https://lodash.com/docs/#mean)

```typescript
import { mean } from '@modyqyw/utils';

mean([4, 2, 8, 6]); // => 5
```

- [meanBy](https://lodash.com/docs/#meanBy)

```typescript
import { meanBy } from '@modyqyw/utils';

const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
meanBy(objects, function(o) { return o.n; }); // => 5
meanBy(objects, 'n'); // => 5
```

- [memoize](https://lodash.com/docs/#memoize)
- [merge](https://lodash.com/docs/#merge)

```typescript
import { merge } from '@modyqyw/utils';

const object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};

const other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

merge(object, other); // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
```

- [mergeWith](https://lodash.com/docs/#mergeWith)

```typescript
import { mergeWith, isArray } from '@modyqyw/utils';

function customizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

const object = { 'a': [1], 'b': [2] };
const other = { 'a': [3], 'b': [4] };

mergeWith(object, other, customizer); // => { 'a': [1, 3], 'b': [2, 4] }
```

- [min](https://lodash.com/docs/#min)

```typescript
import { min } from '@modyqyw/utils';

min([4, 2, 8, 6]); // => 2
min([]); // => undefined
```

- [minBy](https://lodash.com/docs/#minBy)

```typescript
import { minBy } from '@modyqyw/utils';

const objects = [{ 'n': 1 }, { 'n': 2 }];

minBy(objects, function(o) { return o.n; }); // => { 'n': 1 }
minBy(objects, 'n'); // => { 'n': 1 }
```

- [nanoid](https://github.com/ai/nanoid#readme)

```typescript
import { nanoid } from '@modyqyw/utils';

nanoid(); => // 'V1StGXR8_Z5jdHi6B-myT'
```

- [noCase](https://github.com/blakeembrey/change-case#nocase)

```typescript
import { noCase } from '@modyqyw/utils';

noCase('string'); // => 'string'
noCase('dot.case'); // => 'dot case'
noCase('PascalCase'); // => 'pascal case'
noCase('version 1.2.10'); // => 'version 1 2 10'
```

- [noop](https://lodash.com/docs/#noop)
- [orderBy](https://lodash.com/docs/#orderBy)

```typescript
import { orderBy } from '@modyqyw/utils';

const users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
_.orderBy(users, ['user', 'age'], ['asc', 'desc']); // => [{ user: 'barney', age: 36 }, { user: 'barney', age: 34 }, { user: 'fred', age: 48 }, { user: 'fred', age: 40 }]
```

- [pad](https://lodash.com/docs/#pad)

```typescript
import { pad } from '@modyqyw/utils';

pad('abc', 8); // => '  abc   '
pad('abc', 8, '_-'); // => '_-abc_-_'
pad('abc', 3); // => 'abc'
```

- [padEnd](https://lodash.com/docs/#padEnd)

```typescript
import { padEnd } from '@modyqyw/utils';

padEnd('abc', 6); // => 'abc   '
padEnd('abc', 6, '_-'); // => 'abc_-_'
padEnd('abc', 3); // => 'abc'
```

- [padStart](https://lodash.com/docs/#padStart)

```typescript
import { padStart } from '@modyqyw/utils';

padStart('abc', 6); // => '   abc'
padStart('abc', 6, '_-'); // => '_-_abc'
padStart('abc', 3); // => 'abc'
```

- [paramCase](https://github.com/blakeembrey/change-case#paramcase)

```typescript
import { paramCase } from '@modyqyw/utils';

paramCase('string'); // => 'string'
paramCase('dot.case'); // => 'dot-case'
paramCase('PascalCase'); // => 'pascal-case'
paramCase('version 1.2.10'); // => 'version-1-2-10'
```

- [pascalCase](https://github.com/blakeembrey/change-case#pascalcase)

```typescript
import { pascalCase } from '@modyqyw/utils';

pascalCase('string'); // => 'String'
pascalCase('dot.case'); // => 'DotCase'
pascalCase('PascalCase'); // => 'PascalCase'
pascalCase('version 1.2.10'); // => 'Version_1_2_10'
```

- [pathCase](https://github.com/blakeembrey/change-case#pathcase)

```typescript
import { pathCase } from '@modyqyw/utils';

pathCase('string'); // => 'string'
pathCase('dot.case'); // => 'dot/case'
pathCase('PascalCase'); // => 'pascal/case'
pathCase('version 1.2.10'); // => 'version/1/2/10'
```

- [random](https://lodash.com/docs/#random)

```typescript
import {  } from '@modyqyw/utils';

random(0, 5); // => an integer between 0 and 5
random(5); // => also an integer between 0 and 5
random(5, true); // => a floating-point number between 0 and 5
random(1.2, 5.2); // => a floating-point number between 1.2 and 5.2
```

- [retry](https://github.com/vercel/async-retry#readme)

```typescript
import { retry } from '@modyqyw/utils';

await retry(async (bail) => {
  // if anything throws, we retry
  const res = await fetch('https://google.com');

  if (403 === res.status) {
    // don't retry upon 403
    bail(new Error('Unauthorized'));
    return ;
  }

  const data = await res.text();
  return data.substr(0, 500);
}, {
  retries: 5,
});
```

- [round](https://lodash.com/docs/#round)

```typescript
import { round } from '@modyqyw/utils';

round(4.006); // => 4
_.round(4.006, 2); // => 4.01
_.round(4060, -2); // => 4100
```

- [sentenceCase](https://github.com/blakeembrey/change-case#sentencecase)

```typescript
import { sentenceCase } from '@modyqyw/utils';

sentenceCase('string'); // => 'String'
sentenceCase('dot.case'); // => 'Dot case'
sentenceCase('PascalCase'); // => 'Pascal case'
sentenceCase('version 1.2.10'); // => 'Version 1 2 10'
```

- [shortUuid](./src/shortUuid.ts)
- [sleep](./src/sleep.ts)

```typescript
import { sleep } from '@modyqyw/utils';

async () => {
  await sleep(2000);
  console.log('Awake!'); // 2 s later
}
```

- [snakeCase](https://github.com/blakeembrey/change-case#snakecase)

```typescript
import { snakeCase } from '@modyqyw/utils';

snakeCase('string'); // => 'string'
snakeCase('dot.case'); // => 'dot_case'
snakeCase('PascalCase'); // => 'pascal_case'
snakeCase('version 1.2.10'); // => 'version_1_2_10'
```

- [sortBy](https://lodash.com/docs/#sortBy)

```typescript
import { sortBy } from '@modyqyw/utils';

const users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];

sortBy(users, [function(o) { return o.user; }]); // => [{ user: 'barney', age: 36 }, { user: 'barney', age: 34 }, { user: 'fred', age: 48 }, { user: 'fred', age: 40 }]
sortBy(users, ['user', 'age']); // => [{ user: 'barney', age: 34 }, { user: 'barney', age: 36 }, { user: 'fred', age: 40 }, { user: 'fred', age: 48 }]
```

- [sortedIndex](https://lodash.com/docs/#sortedIndex)

```typescript
import { sortedIndex } from '@modyqyw/utils';

sortedIndex([30, 50], 40); // => 1
```

- [sortedIndexBy](https://lodash.com/docs/#sortedIndexBy)

```typescript
import { sortedIndexBy } from '@modyqyw/utils';

const objects = [{ 'x': 4 }, { 'x': 5 }];

_.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }); // => 0
_.sortedIndexBy(objects, { 'x': 4 }, 'x'); // => 0
```

- [sortedIndexOf](https://lodash.com/docs/#sortedIndexOf)

```typescript
import { sortedIndexOf } from '@modyqyw/utils';

_.sortedIndexOf([4, 5, 5, 5, 6], 5); // => 1
```

- [sortedLastIndex](https://lodash.com/docs/#sortedLastIndex)

```typescript
import { sortedLastIndex } from '@modyqyw/utils';

_.sortedLastIndex([4, 5, 5, 5, 6], 5); // => 4
```

- [sortedLastIndexBy](https://lodash.com/docs/#sortedLastIndexBy)

```typescript
import { sortedLastIndexBy } from '@modyqyw/utils';

const objects = [{ 'x': 4 }, { 'x': 5 }];

_.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }); // => 1
_.sortedLastIndexBy(objects, { 'x': 4 }, 'x'); // => 1
```

- [sortedLastIndexOf](https://lodash.com/docs/#sortedLastIndexOf)

```typescript
import { sortedLastIndexOf } from '@modyqyw/utils';

_.sortedLastIndexOf([4, 5, 5, 5, 6], 5); // => 3
```

- [sortedUniq](https://lodash.com/docs/#sortedUniq)

```typescript
import { sortedUniq } from '@modyqyw/utils';

_.sortedUniq([1, 1, 2]); // => [1, 2]
```

- [sortedUniqBy](https://lodash.com/docs/#sortedUniqBy)

```typescript
import { sortedUniqBy } from '@modyqyw/utils';

_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor); // => [1.1, 2.3]
```

- [startCase](https://lodash.com/docs/#startCase)

```typescript
import { startCase } from '@modyqyw/utils';

_.startCase('--foo-bar--'); // => 'Foo Bar'
_.startCase('fooBar'); // => 'Foo Bar'
_.startCase('__FOO_BAR__'); // => 'FOO BAR'
```

- [throttle](https://lodash.com/docs/#throttle)
- [toArray](https://lodash.com/docs/#toArray)

```typescript
import { toArray } from '@modyqyw/utils';

_.toArray({ 'a': 1, 'b': 2 }); // => [1, 2]
_.toArray('abc'); // => ['a', 'b', 'c']
_.toArray(1); // => []
_.toArray(null); // => []
```

- [toFinite](https://lodash.com/docs/#toFinite)

```typescript
import { toFinite } from '@modyqyw/utils';

_.toFinite(3.2); // => 3.2
_.toFinite(Number.MIN_VALUE); // => 5e-324
_.toFinite(Infinity); // => 1.7976931348623157e+308
_.toFinite('3.2'); // => 3.2
```

- [toInteger](https://lodash.com/docs/#toInteger)

```typescript
import { toInteger } from '@modyqyw/utils';

_.toInteger(3.2); // => 3
_.toInteger(Number.MIN_VALUE); // => 0
_.toInteger(Infinity); // => 1.7976931348623157e+308
_.toInteger('3.2'); // => 3
```

- [toLength](https://lodash.com/docs/#toLength)

```typescript
import { toLength } from '@modyqyw/utils';

_.toLength(3.2); // => 3
_.toLength(Number.MIN_VALUE); // => 0
_.toLength(Infinity); // => 4294967295
_.toLength('3.2'); // => 3
```

- [toNumber](https://lodash.com/docs/#toNumber)

```typescript
import { toNumber } from '@modyqyw/utils';

toNumber(3.2); // => 3.2
toNumber(Number.MIN_VALUE); // => 5e-324
toNumber(Infinity); // => Infinity
toNumber('3.2'); // => 3.2
```

- [toPlainObject](https://lodash.com/docs/#toPlainObject)

```typescript
import { toPlainObject } from '@modyqyw/utils';

function Foo() {
  this.b = 2;
}
Foo.prototype.c = 3;

Object.assign({ 'a': 1 }, new Foo); // => { 'a': 1, 'b': 2 }
Object.assign({ 'a': 1 }, toPlainObject(new Foo)); // => { 'a': 1, 'b': 2, 'c': 3 }
```

- [toSafeInteger](https://lodash.com/docs/#toSafeInteger)

```typescript
import { toSafeInteger } from '@modyqyw/utils';

toSafeInteger(3.2); // => 3
toSafeInteger(Number.MIN_VALUE); // => 0
toSafeInteger(Infinity); // => 9007199254740991
toSafeInteger('3.2'); // => 3
```

- [toShortUuid](./src/toShortUuid.ts)
- [toString](https://lodash.com/docs/#toString)

```typescript
import { toString } from '@modyqyw/utils';

toString(null); // => ''
toString(-0); // => '-0'
toString([1, 2, 3]); // => '1,2,3'
```

- [toUuid](./src/toUuid.ts)
- [trim](https://lodash.com/docs/#trim)

```typescript
import { trim } from '@modyqyw/utils';

trim('  abc  '); // => 'abc'
trim('-_-abc-_-', '_-'); // => 'abc'
['  foo  ', '  bar  '].map((item) => trim(item)); // => ['foo', 'bar']
```

- [trimEnd](https://lodash.com/docs/#trimEnd)

```typescript
import { trimEnd } from '@modyqyw/utils';

trimEnd('  abc  '); // => '  abc'
trimEnd('-_-abc-_-', '_-'); // => '-_-abc'
```

- [trimStart](https://lodash.com/docs/#trimStart)

```typescript
import { trimStart } from '@modyqyw/utils';

trimStart('  abc  '); // => 'abc  '
trimStart('-_-abc-_-', '_-'); // => 'abc-_-'
```

- [truncate](https://lodash.com/docs/#truncate)

```typescript
import { truncate } from '@modyqyw/utils';

truncate('hi-diddly-ho there, neighborino'); // => 'hi-diddly-ho there, neighbo...'
truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': ' '
}); // => 'hi-diddly-ho there,...'
truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': /,? +/
}); // => 'hi-diddly-ho there...'
truncate('hi-diddly-ho there, neighborino', {
  'omission': ' [...]'
}); // => 'hi-diddly-ho there, neig [...]'
```

- [union](https://lodash.com/docs/#union)

```typescript
import { union } from '@modyqyw/utils';

union([2], [1, 2]); // => [2, 1]
```

- [unionBy](https://lodash.com/docs/#unionBy)

```typescript
import { unionBy } from '@modyqyw/utils';

unionBy([2.1], [1.2, 2.3], Math.floor); // => [2.1, 1.2]
unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'); // => [{ 'x': 1 }, { 'x': 2 }]
```

- [unionWith](https://lodash.com/docs/#unionWith)

```typescript
import { unionWith, isEqual } from '@modyqyw/utils';

const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

unionWith(objects, others, isEqual); // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```

- [uniq](https://lodash.com/docs/#uniq)

```typescript
import { uniq } from '@modyqyw/utils';

uniq([2, 1, 2]); // => [2, 1]
```

- [uniqBy](https://lodash.com/docs/#uniqBy)

```typescript
import { uniqBy } from '@modyqyw/utils';

uniqBy([2.1, 1.2, 2.3], Math.floor); // => [2.1, 1.2]
uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x'); // => [{ 'x': 1 }, { 'x': 2 }]
```

- [uniqueId](https://lodash.com/docs/#uniqueId)

```typescript
import { uniqueId } from '@modyqyw/utils';

uniqueId('contact_'); // => 'contact_104'
uniqueId(); // => '105'
```

- [uniqWith](https://lodash.com/docs/#uniqWith)

```typescript
import { uniqWith, isEqual } from '@modyqyw/utils';

const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

uniqWith(objects, isEqual); // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```

- [upperCase](https://lodash.com/docs/#upperCase)

```typescript
import { upperCase } from '@modyqyw/utils';

upperCase('--foo-bar'); // => 'FOO BAR'
upperCase('fooBar'); // => 'FOO BAR'
upperCase('__foo_bar__'); // => 'FOO BAR'
```

- [uuid](./src/uuid.ts)
- [words](https://lodash.com/docs/#words)

```typescript
import { words } from '@modyqyw/utils';

words('fred, barney, & pebbles'); // => ['fred', 'barney', 'pebbles']
words('fred, barney, & pebbles', /[^, ]+/g); // => ['fred', 'barney', '&', 'pebbles']
```

- [xor](https://lodash.com/docs/#xor)

```typescript
import { xor } from '@modyqyw/utils';

xor([2, 1], [2, 3]); // => [1, 3]
```

- [xorBy](https://lodash.com/docs/#xorBy)

```typescript
import { xorBy } from '@modyqyw/utils';

xorBy([2.1, 1.2], [2.3, 3.4], Math.floor); // => [1.2, 3.4]
xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'); // => [{ 'x': 2 }]
```

- [xorWith](https://lodash.com/docs/#xorWith)

```typescript
import { xorWith, isEqual } from '@modyqyw/utils';

const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

xorWith(objects, others, isEqual); // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```

## More

This simple (maybe powerful) library is implemented using the following libraries and will hopefully solve many development problems.

- [async-retry](https://github.com/vercel/async-retry#readme)
- [change-case](https://github.com/blakeembrey/change-case#readme)
- [lodash-es](https://github.com/lodash/lodash#readme)
- [nanoid](https://github.com/ai/nanoid#readme)
- [short-uuid](https://github.com/oculus42/short-uuid#readme)
- [validator](https://github.com/validatorjs/validator.js#readme)

If this library does not solve your problems, I suggest you look up the solution in [standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) before using the following libraries.

- [convert](https://github.com/jonahsnider/convert#readme)
- [dayjs](https://github.com/iamkun/dayjs#readme)
- [faker](https://github.com/Marak/faker.js#readme)
- [format-rmb](https://github.com/bazingaedward/ChinaCurrency#readme)
- [gcoord](https://github.com/hujiulong/gcoord#readme)
- [lodash-es](https://github.com/lodash/lodash#readme)
- [mitt](https://github.com/developit/mitt#readme)
- [mockjs](https://github.com/nuysoft/Mock#readme)
- [mockjs-esm](https://gitee.com/dongzhongzhidong/Mock#readme)
- [numbro](https://github.com/BenjaminVanRyseghem/numbro#readme)
- [path-to-regexp](https://github.com/pillarjs/path-to-regexp#readme)
- [qs](https://github.com/ljharb/qs#readme)
- [ua-parser-js](https://github.com/faisalman/ua-parser-js#readme)
- [validator](https://github.com/validatorjs/validator.js#readme)
- [xe-utils](https://github.com/x-extends/xe-utils#readme)

Great thanks to the authors and contributors of all these libraries. :D
