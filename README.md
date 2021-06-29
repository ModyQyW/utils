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

- [camelCase](https://github.com/blakeembrey/change-case#camelcase)
- [capitalCase](https://github.com/blakeembrey/change-case#capitalcase)
- [ceil](https://lodash.com/docs/4.17.15#ceil)
- [clone](https://lodash.com/docs/4.17.15#clone)
- [cloneDeep](https://lodash.com/docs/4.17.15#cloneDeep)
- [constantCase](https://github.com/blakeembrey/change-case#constantcase)
- [debounce](https://lodash.com/docs/4.17.15#debounce)
- [difference](https://lodash.com/docs/4.17.15#difference)
- [differenceBy](https://lodash.com/docs/4.17.15#differenceBy)
- [differenceWith](https://lodash.com/docs/4.17.15#differenceWith)
- [dotCase](https://github.com/blakeembrey/change-case#dotcase)
- [fakeAvatar](./src/fakeAvatar.ts)
- [fakeImage](./src/fakeImage.ts)
- [fakeLoremParagraph](./src/fakeLoremParagraph.ts)
- [fakeLoremSentence](./src/fakeLoremSentence.ts)
- [fakeLoremWord](./src/fakeLoremWord.ts)
- [floor](https://lodash.com/docs/4.17.15#floor)
- [headerCase](https://github.com/blakeembrey/change-case#headercase)
- [intersection](https://lodash.com/docs/4.17.15#intersection)
- [intersectionBy](https://lodash.com/docs/4.17.15#intersectionBy)
- [intersectionWith](https://lodash.com/docs/4.17.15#intersectionWith)
- [isArrayBuffer](https://lodash.com/docs/4.17.15#isArrayBuffer)
- [isArrayLike](https://lodash.com/docs/4.17.15#isArrayLike)
- [isArrayLikeObject](https://lodash.com/docs/4.17.15#isArrayLikeObject)
- [isBoolean](https://lodash.com/docs/4.17.15#isBoolean)
- [isBuffer](https://lodash.com/docs/4.17.15#isBuffer)
- [isDate](https://lodash.com/docs/4.17.15#isDate)
- [isElement](https://lodash.com/docs/4.17.15#isElement)
- [isEmail](https://github.com/validatorjs/validator.js#validators)
- [isEmpty](https://lodash.com/docs/4.17.15#isEmpty)
- [isEqual](https://lodash.com/docs/4.17.15#isEqual)
- [isError](https://lodash.com/docs/4.17.15#isError)
- [isEvalError](./src/isEvalError.ts)
- [isEvenNumber](./src/isEvenNumber.ts)
- [isFloat](./src/isFloat.ts)
- [isFunction](https://lodash.com/docs/4.17.15#isFunction)
- [isHash](https://github.com/validatorjs/validator.js#validators)
- [isHexColor](https://github.com/validatorjs/validator.js#validators)
- [isHSL](https://github.com/validatorjs/validator.js#validators)
- [isIdentityCard](https://github.com/validatorjs/validator.js#validators)
- [isJSON](https://github.com/validatorjs/validator.js#validators)
- [isJWT](https://github.com/validatorjs/validator.js#validators)
- [isLength](https://lodash.com/docs/4.17.15#isLength)
- [isMap](https://lodash.com/docs/4.17.15#isMap)
- [isMatch](https://lodash.com/docs/4.17.15#isMatch)
- [isMatchWith](https://lodash.com/docs/4.17.15#isMatchWith)
- [isMobilePhone](https://github.com/validatorjs/validator.js#validators)
- [isNil](https://lodash.com/docs/4.17.15#isNil)
- [isNull](https://lodash.com/docs/4.17.15#isNull)
- [isNumber](https://lodash.com/docs/4.17.15#isNumber)
- [isObject](https://lodash.com/docs/4.17.15#isObject)
- [isObjectLike](https://lodash.com/docs/4.17.15#isObjectLike)
- [isOddNumber](./src/isOddNumber.ts)
- [isPlainObject](https://lodash.com/docs/4.17.15#isPlainObject)
- [isRangeError](./src/isRangeError.ts)
- [isReferenceError](./src/isReferenceError.ts)
- [isRegExp](https://lodash.com/docs/4.17.15#isRegExp)
- [isRgbColor](https://github.com/validatorjs/validator.js#validators)
- [isSemver](https://github.com/validatorjs/validator.js#validators)
- [isSet](https://lodash.com/docs/4.17.15#isSet)
- [isString](https://lodash.com/docs/4.17.15#isString)
- [isStrongPassword](https://github.com/validatorjs/validator.js#validators)
- [isSymbol](https://lodash.com/docs/4.17.15#isSymbol)
- [isSyntaxError](./src/isSyntaxError.ts)
- [isTypedArray](https://lodash.com/docs/4.17.15#isTypedArray)
- [isTypeError](./src/isTypeError.ts)
- [isUndefined](https://lodash.com/docs/4.17.15#isUndefined)
- [isURIError](./src/isURIError.ts)
- [isValidDate](./src/isValidDate.ts)
- [isWeakMap](https://lodash.com/docs/4.17.15#isWeakMap)
- [isWeakSet](https://lodash.com/docs/4.17.15#isWeakSet)
- [kebabCase](https://lodash.com/docs/4.17.15#kebabCase)
- [lowerCase](https://lodash.com/docs/4.17.15#lowerCase)
- [max](https://lodash.com/docs/4.17.15#max)
- [maxBy](https://lodash.com/docs/4.17.15#maxBy)
- [mean](https://lodash.com/docs/4.17.15#mean)
- [meanBy](https://lodash.com/docs/4.17.15#meanBy)
- [merge](https://lodash.com/docs/4.17.15#merge)
- [mergeWith](https://lodash.com/docs/4.17.15#mergeWith)
- [min](https://lodash.com/docs/4.17.15#min)
- [minBy](https://lodash.com/docs/4.17.15#minBy)
- [nanoid](https://github.com/ai/nanoid#readme)
- [noCase](https://github.com/blakeembrey/change-case#nocase)
- [noop](https://lodash.com/docs/4.17.15#noop)
- [orderBy](https://lodash.com/docs/4.17.15#orderBy)
- [pad](https://lodash.com/docs/4.17.15#pad)
- [padEnd](https://lodash.com/docs/4.17.15#padEnd)
- [padStart](https://lodash.com/docs/4.17.15#padStart)
- [paramCase](https://github.com/blakeembrey/change-case#paramcase)
- [pascalCase](https://github.com/blakeembrey/change-case#pascalcase)
- [pathCase](https://github.com/blakeembrey/change-case#pathcase)
- [random](https://lodash.com/docs/4.17.15#random)
- [retry](https://github.com/vercel/async-retry#readme)
- [round](https://lodash.com/docs/4.17.15#round)
- [sentenceCase](https://github.com/blakeembrey/change-case#sentencecase)
- [shortUuidV4](./src/shortUuidV4.ts)
- [sleep](./src/sleep.ts)
- [snakeCase](https://github.com/blakeembrey/change-case#snakecase)
- [sortBy](https://lodash.com/docs/4.17.15#sortBy)
- [sortedIndex](https://lodash.com/docs/4.17.15#sortedIndex)
- [sortedIndexBy](https://lodash.com/docs/4.17.15#sortedIndexBy)
- [sortedIndexOf](https://lodash.com/docs/4.17.15#sortedIndexOf)
- [sortedLastIndex](https://lodash.com/docs/4.17.15#sortedLastIndex)
- [sortedLastIndexBy](https://lodash.com/docs/4.17.15#sortedLastIndexBy)
- [sortedLastIndexOf](https://lodash.com/docs/4.17.15#sortedLastIndexOf)
- [sortedUniq](https://lodash.com/docs/4.17.15#sortedUniq)
- [sortedUniqBy](https://lodash.com/docs/4.17.15#sortedUniqBy)
- [startCase](https://lodash.com/docs/4.17.15#startCase)
- [throttle](https://lodash.com/docs/4.17.15#throttle)
- [toArray](https://lodash.com/docs/4.17.15#toArray)
- [toFinite](https://lodash.com/docs/4.17.15#toFinite)
- [toInteger](https://lodash.com/docs/4.17.15#toInteger)
- [toLength](https://lodash.com/docs/4.17.15#toLength)
- [toNumber](https://lodash.com/docs/4.17.15#toNumber)
- [toPlainObject](https://lodash.com/docs/4.17.15#toPlainObject)
- [toSafeInteger](https://lodash.com/docs/4.17.15#toSafeInteger)
- [toShortUuidV4](./src/toShortUuidV4.ts)
- [toString](https://lodash.com/docs/4.17.15#toString)
- [toUuidV4](./src/toUuidV4.ts)
- [trim](https://lodash.com/docs/4.17.15#trim)
- [trimEnd](https://lodash.com/docs/4.17.15#trimEnd)
- [trimStart](https://lodash.com/docs/4.17.15#trimStart)
- [truncate](https://lodash.com/docs/4.17.15#truncate)
- [union](https://lodash.com/docs/4.17.15#union)
- [unionBy](https://lodash.com/docs/4.17.15#unionBy)
- [unionWith](https://lodash.com/docs/4.17.15#unionWith)
- [uniq](https://lodash.com/docs/4.17.15#uniq)
- [uniqBy](https://lodash.com/docs/4.17.15#uniqBy)
- [uniqueId](https://lodash.com/docs/4.17.15#uniqueId)
- [uniqWith](https://lodash.com/docs/4.17.15#uniqWith)
- [upperCase](https://lodash.com/docs/4.17.15#upperCase)
- [uuidV4](./src/uuidV4.ts)
- [words](https://lodash.com/docs/4.17.15#words)
- [xor](https://lodash.com/docs/4.17.15#xor)
- [xorBy](https://lodash.com/docs/4.17.15#xorBy)
- [xorWith](https://lodash.com/docs/4.17.15#xorWith)

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
- [numbro](https://github.com/BenjaminVanRyseghem/numbro#readme)
- [path-to-regexp](https://github.com/pillarjs/path-to-regexp#readme)
- [qs](https://github.com/ljharb/qs#readme)
- [ua-parser-js](https://github.com/faisalman/ua-parser-js#readme)
- [validator](https://github.com/validatorjs/validator.js#readme)
- [xe-utils](https://github.com/x-extends/xe-utils#readme)

Great thanks to the authors of all these libraries. :D
