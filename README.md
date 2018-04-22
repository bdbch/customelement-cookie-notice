# `<cookie-notice>`

> Easy to embed Youtube Embeds

### [Live Demo (try to change attributes in dev tools)](https://bdbch.github.io/customelement-cookie-notice/)

`cookie-notice` adds a simple to use solution for cookie- or data-related notices

## Installation

`npm install --save customelement-cookie-notice`

## Usage

#### ES6:

```js
import "customelement-cookie-notice"
```

#### Via `<script>` in ES6

```js
<script src="build/cookie-notice.js"></script>
```

#### Via `<script>` in ES5

```js
<script src="build/cookie-notice.es5.js"></script>
```

When customelement-cookie-notice is loaded correctly, you can just use it like this:

```html
<cookie-notice id="my-cookiebar">
  We're using cookies.
  <a href="#" data-accept>Yeah thats cool</a>
</cookie-notice>
```

## Available Attributes

* `id="my-cookie-bar"` - Cookie Notice needs an ID to hide the cookie notice when the user accepts it

## Browser Support

This will need an update to find out what browsers are currently supporting all features

## Contribution

Feel free to send in Pull Requests. I'll take my time to look into them.
