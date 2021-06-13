# @modyqyw/utils

Shareable utils for different JavaScript/TypeScript projects.

[Plan](https://github.com/ModyQyW/utils/issues/1)

[Github](https://github.com/ModyQyW/utils#readme) | [Gitee](https://github.com/ModyQyW/utils#readme)

**Developing.**

## Installation

### NPM

```shell
npm i @modyqyw/utils
# yarn add @modyqyw/utils
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@modyqyw/dsa/dist/index.iife.min.js"></script>
<!-- or unpkg if you prefer -->
<!-- <script src="https://unpkg.com/@modyqyw/dsa/dist/index.iife.min.js"></script> -->
```

Then use `window.UTILS` directly.

## Usage

```javascript
// esm
import {...} from '@modyqyw/utils';
// cjs
const { ... } = require('@modyqyw/utils');
// do something with them
...
```

More usage are coming...

### Converter

Convert the value to different units/representations/...

### Faker

Get fake data for testing.

### UA

Get user-agent for analyzing.

### Validator

Validate if the value is base64/email/mobile phone/strong password/...

## More

This library is not intended to aggregate a large number of utils libs. Instead, it only aggregates the following libs.

- [change-case](https://github.com/blakeembrey/change-case#readme)
- [faker](https://github.com/Marak/faker.js#readme)
- [format-rmb](https://github.com/bazingaedward/ChinaCurrency#readme)
- [lodash-es](https://github.com/lodash/lodash#readme)
- [nanoid](https://github.com/ai/nanoid#readme)
- [qs](https://github.com/ljharb/qs#readme)
- [short-uuid](https://github.com/oculus42/short-uuid#readme)
- [ua-parser-js](https://github.com/faisalman/ua-parser-js#readme)
- [validator](https://github.com/validatorjs/validator.js#readme)

The lib can't solve 100% of the problems in development, but aggregating all the relevant libraries is quite complicated. I recommend to use the following libs separately.

- [convert](https://github.com/jonahsnider/convert#readme)
- [dayjs](https://github.com/iamkun/dayjs#readme)
- [gcoord](https://github.com/hujiulong/gcoord#readme)
- [numbro](https://github.com/BenjaminVanRyseghem/numbro#readme)
- [path-to-regexp](https://github.com/pillarjs/path-to-regexp#readme)
- [xe-utils](https://github.com/x-extends/xe-utils#readme)

If possible, they may also be aggregated in the future, but not now.

Great thanks to the authors of all these libs. :D
