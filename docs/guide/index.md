
# Installation

::: tip NOTE
The installation guide for the WordPress plugin and browser extension can be found in the **Plugin and Extensions** section.
:::

BibleUp can be installed with NPM if you have node installed on your system and if you use a build tool. It can also be served from a CDN.

### NPM

```bash
npm install @bibleup/bibleup
```
```js
// ES6 Modules
import BibleUp from "@bibleup/bibleup"

// CSS Theme
import "@bibleup/bibleup/css"
```

### CDN

To serve BibleUp through a CDN, place the following code before the closing `</body>` in the HTML file:

```html
<!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/@bibleup/bibleup@1"></script>
```

## BibleUp Core
BibleUp comes with the default CSS theme (for the popovers) pre-bundled into the build, providing a single minified code.<br>However, you can decide to include BibleUp Core API and CSS separately.

### NPM:

After `npm install`:

```js
import BibleUp from '@bibleup/bibleup'
```

### CDN:
To use the CDN, you can either import the core ESM build:

```js
import BibleUp from 'https://cdn.jsdelivr.net/npm/@bibleup/bibleup@1/+esm'
```


or use `<script>` in your HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/@bibleup/bibleup@1/dist/umd/bibleup-core.min.js "></script>
```

### CSS

Lastly, include the CSS:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@bibleup/bibleup@1/dist/css/bibleup.css">
```

::: tip NOTE
- Using the CDN allows you to get code fixes, new features and improvements automatically when BibleUp is updated.

- When using a CDN, We **recommend** that you pin BibleUp to a specific version or the latest major version - as done in the examples above *(@bibleup/bibleup@1)*. This is to prevent breaking changes when a major version is released.
:::
