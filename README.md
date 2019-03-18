# smart-size

Easily convert javascript values to css-friendly format, useful for any `css-in-js` library or with `styled-components`.

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage

### Install dependency

```
yarn add smart-size
```

Or, using `npm`:
```
npm install smart-size
```

### Import package

```javascript
import smartSize from 'smart-size'

const style1 = {
  fontSize: smartSize(1),
  lineHeight: smartSize(18, { unit: 'px' }),
  height: smartSize(1, { unit: 'px', scale: 32 })
}
// { fontSize: '1em', lineHeight: '18px', height: '32px' }

const style2 = {
  fontSize: smartSize(2),
  lineHeight: smartSize('32px'),
  margin: smartSize([1, 2])
}
// { fontSize: '2em', lineHeight: '32px', margin: '1em 2em' }

const style3 = {
  padding: smartSize('5px 10px', { scale: 2 }),
  margin: smartSize({ top: 1, bottom: 2 })
}
// { padding: '10px 20px', margin: '1em 0 2em 0' }

const style4 = {
  padding: smartSize({ vertical: 1, horizontal: 2 }),
  margin: smartSize({ left: 3, right: 5 })
}
// { padding: '1em 2em 1em 2em', margin: '0 5em 0 3em' }
```

### `em` by default

By default, `smartSize` uses `em` units. I find it convinient to keep layout margins, paddings, positioning and line heights in `em`, it helps keeping right vertical rhytm:

```javascript
const style = {
  height: smartSize(2),                                        // 2em
  margin: smartSize({ bottom: 1 })                             // 0 0 1em 0
}
```

### Using own defaults

It is possible to pass an additional `config` to `smartSize` function as a second parameter:

```javascript
const style = {
  fontSize: smartSize(1.5, { unit: 'px', scale: 12 })         // 18px
}
```

You may also set your own defaults by importing `create` function:

```javascript
import { create } from 'smart-size'

const mySmartSize = create({ unit: 'px', scale: 32 })

const style = {
  height: mySmartSize(2),                                        // 64px
  margin: mySmartSize({ bottom: 1 })                             // 0 0 32px 0
}

```

## Development

### Testing

Run this command to run `mocha` tests watcher:

```
yarn test
```

### Standard style

Use this command to make sure the codestyle fits ```standard``` rules:
 
```
yarn lint
```

## Author

Made with 💖 by [Alex Ilchenko](mailto:ilczenko@gmail.com)

## License

This project is licensed under the MIT License
