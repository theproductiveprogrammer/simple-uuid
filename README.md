# Simple UUID

This is a simple UUID generator that has zero dependencies and works everywhere.

## Usage

Install it first:

```sh
$> npm i @tpp/simple-uuid
```

Then use it to generate a simple and unique id:

```js
let uuid = require('@tpp/simple-uuid')
uuid()
// '3insalcl'
uuid(100)
//'mw8kcgh739zhjs5g2lujpiv1ey2jv8onr4olzvgxishd8k6vv6fm8bycvixlbux4651qg8vxt26srcnxbw08sexutbir5rjbnwko'
```

It detects NodeJS’s crypto module, or the browsers crypto functionality where available and falls back to Math.random if needed.

