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
- [ceil](https://lodash.com/docs/#ceil)
- [clone](https://lodash.com/docs/#clone)
- [cloneDeep](https://lodash.com/docs/#cloneDeep)
- [constantCase](https://github.com/blakeembrey/change-case#constantcase)
- [debounce](https://lodash.com/docs/#debounce)
- [difference](https://lodash.com/docs/#difference)
- [differenceBy](https://lodash.com/docs/#differenceBy)
- [differenceWith](https://lodash.com/docs/#differenceWith)
- [dotCase](https://github.com/blakeembrey/change-case#dotcase)
- [fakeAvatar](./src/fakeAvatar.ts)
- [fakeImage](./src/fakeImage.ts)
- [fakeLoremParagraph](./src/fakeLoremParagraph.ts)
- [fakeLoremSentence](./src/fakeLoremSentence.ts)
- [fakeLoremWord](./src/fakeLoremWord.ts)
- [floor](https://lodash.com/docs/#floor)
- [headerCase](https://github.com/blakeembrey/change-case#headercase)
- [intersection](https://lodash.com/docs/#intersection)
- [intersectionBy](https://lodash.com/docs/#intersectionBy)
- [intersectionWith](https://lodash.com/docs/#intersectionWith)
- [isArrayBuffer](https://lodash.com/docs/#isArrayBuffer)
- [isArrayLike](https://lodash.com/docs/#isArrayLike)
- [isArrayLikeObject](https://lodash.com/docs/#isArrayLikeObject)
- [isBoolean](https://lodash.com/docs/#isBoolean)
- [isBuffer](https://lodash.com/docs/#isBuffer)
- [isDate](https://lodash.com/docs/#isDate)
- [isElement](https://lodash.com/docs/#isElement)
- [isEmail](https://github.com/validatorjs/validator.js#validators)
- [isEmpty](https://lodash.com/docs/#isEmpty)
- [isEqual](https://lodash.com/docs/#isEqual)
- [isError](https://lodash.com/docs/#isError)
- [isEvalError](./src/isEvalError.ts)
- [isEvenNumber](./src/isEvenNumber.ts)
- [isFloat](./src/isFloat.ts)
- [isFunction](https://lodash.com/docs/#isFunction)
- [isHash](https://github.com/validatorjs/validator.js#validators)
- [isHexColor](https://github.com/validatorjs/validator.js#validators)
- [isHSL](https://github.com/validatorjs/validator.js#validators)
- [isIdentityCard](https://github.com/validatorjs/validator.js#validators)
- [isJSON](https://github.com/validatorjs/validator.js#validators)
- [isJWT](https://github.com/validatorjs/validator.js#validators)
- [isLength](https://lodash.com/docs/#isLength)
- [isMap](https://lodash.com/docs/#isMap)
- [isMatch](https://lodash.com/docs/#isMatch)
- [isMatchWith](https://lodash.com/docs/#isMatchWith)
- [isMobilePhone](https://github.com/validatorjs/validator.js#validators)
- [isNil](https://lodash.com/docs/#isNil)
- [isNull](https://lodash.com/docs/#isNull)
- [isNumber](https://lodash.com/docs/#isNumber)
- [isObject](https://lodash.com/docs/#isObject)
- [isObjectLike](https://lodash.com/docs/#isObjectLike)
- [isOddNumber](./src/isOddNumber.ts)
- [isPlainObject](https://lodash.com/docs/#isPlainObject)
- [isRangeError](./src/isRangeError.ts)
- [isReferenceError](./src/isReferenceError.ts)
- [isRegExp](https://lodash.com/docs/#isRegExp)
- [isRgbColor](https://github.com/validatorjs/validator.js#validators)
- [isSemver](https://github.com/validatorjs/validator.js#validators)
- [isSet](https://lodash.com/docs/#isSet)
- [isString](https://lodash.com/docs/#isString)
- [isStrongPassword](https://github.com/validatorjs/validator.js#validators)
- [isSymbol](https://lodash.com/docs/#isSymbol)
- [isSyntaxError](./src/isSyntaxError.ts)
- [isTypedArray](https://lodash.com/docs/#isTypedArray)
- [isTypeError](./src/isTypeError.ts)
- [isUndefined](https://lodash.com/docs/#isUndefined)
- [isURIError](./src/isURIError.ts)
- [isValidDate](./src/isValidDate.ts)
- [isWeakMap](https://lodash.com/docs/#isWeakMap)
- [isWeakSet](https://lodash.com/docs/#isWeakSet)
- [kebabCase](https://lodash.com/docs/#kebabCase)
- [lowerCase](https://lodash.com/docs/#lowerCase)
- [max](https://lodash.com/docs/#max)
- [maxBy](https://lodash.com/docs/#maxBy)
- [mean](https://lodash.com/docs/#mean)
- [meanBy](https://lodash.com/docs/#meanBy)
- [memoize](https://lodash.com/docs/#memoize)
- [merge](https://lodash.com/docs/#merge)
- [mergeWith](https://lodash.com/docs/#mergeWith)
- [min](https://lodash.com/docs/#min)
- [minBy](https://lodash.com/docs/#minBy)
- [nanoid](https://github.com/ai/nanoid#readme)
- [noCase](https://github.com/blakeembrey/change-case#nocase)
- [noop](https://lodash.com/docs/#noop)
- [orderBy](https://lodash.com/docs/#orderBy)
- [pad](https://lodash.com/docs/#pad)
- [padEnd](https://lodash.com/docs/#padEnd)
- [padStart](https://lodash.com/docs/#padStart)
- [paramCase](https://github.com/blakeembrey/change-case#paramcase)
- [pascalCase](https://github.com/blakeembrey/change-case#pascalcase)
- [pathCase](https://github.com/blakeembrey/change-case#pathcase)
- [random](https://lodash.com/docs/#random)
- [retry](https://github.com/vercel/async-retry#readme)
- [round](https://lodash.com/docs/#round)
- [sentenceCase](https://github.com/blakeembrey/change-case#sentencecase)
- [shortUuidV4](./src/shortUuidV4.ts)
- [sleep](./src/sleep.ts)
- [snakeCase](https://github.com/blakeembrey/change-case#snakecase)
- [sortBy](https://lodash.com/docs/#sortBy)
- [sortedIndex](https://lodash.com/docs/#sortedIndex)
- [sortedIndexBy](https://lodash.com/docs/#sortedIndexBy)
- [sortedIndexOf](https://lodash.com/docs/#sortedIndexOf)
- [sortedLastIndex](https://lodash.com/docs/#sortedLastIndex)
- [sortedLastIndexBy](https://lodash.com/docs/#sortedLastIndexBy)
- [sortedLastIndexOf](https://lodash.com/docs/#sortedLastIndexOf)
- [sortedUniq](https://lodash.com/docs/#sortedUniq)
- [sortedUniqBy](https://lodash.com/docs/#sortedUniqBy)
- [startCase](https://lodash.com/docs/#startCase)
- [throttle](https://lodash.com/docs/#throttle)
- [toArray](https://lodash.com/docs/#toArray)
- [toFinite](https://lodash.com/docs/#toFinite)
- [toInteger](https://lodash.com/docs/#toInteger)
- [toLength](https://lodash.com/docs/#toLength)
- [toNumber](https://lodash.com/docs/#toNumber)
- [toPlainObject](https://lodash.com/docs/#toPlainObject)
- [toSafeInteger](https://lodash.com/docs/#toSafeInteger)
- [toShortUuidV4](./src/toShortUuidV4.ts)
- [toString](https://lodash.com/docs/#toString)
- [toUuidV4](./src/toUuidV4.ts)
- [trim](https://lodash.com/docs/#trim)
- [trimEnd](https://lodash.com/docs/#trimEnd)
- [trimStart](https://lodash.com/docs/#trimStart)
- [truncate](https://lodash.com/docs/#truncate)
- [union](https://lodash.com/docs/#union)
- [unionBy](https://lodash.com/docs/#unionBy)
- [unionWith](https://lodash.com/docs/#unionWith)
- [uniq](https://lodash.com/docs/#uniq)
- [uniqBy](https://lodash.com/docs/#uniqBy)
- [uniqueId](https://lodash.com/docs/#uniqueId)
- [uniqWith](https://lodash.com/docs/#uniqWith)
- [upperCase](https://lodash.com/docs/#upperCase)
- [uuidV4](./src/uuidV4.ts)
- [words](https://lodash.com/docs/#words)
- [xor](https://lodash.com/docs/#xor)
- [xorBy](https://lodash.com/docs/#xorBy)
- [xorWith](https://lodash.com/docs/#xorWith)

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
