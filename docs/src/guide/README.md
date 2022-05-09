# Installation
BibleUp can be installed through NPM if you use a build tool, if not, it should served through any of your favourite CDN.

### NPM

``` bash
npm install @bibleup/bibleup
```
``` js
// ES6 Modules
import BibleUp from "@bibleup/bibleup"

// CSS Theme 
import "@bibleup/bibleup/css"
```

### CDN

Using `<srcipt>` in your HTML:

``` html
<!-- jsdelivr -->
<script src="cdn.jsdelivr.net/npm/@bibleup/bibleup"></script>

<!-- or, unpkg -->
<script src="https://unpkg.com/@bibleup/bibleup"></script>
```

## BibleUp Core
BibleUp comes with the core CSS themes included into the build by default, providing a single minified build.<br>However, you can decide to include BibleUp Core API and CSS separately.

### NPM:
 
In your javascript file, after `npm install`:

``` js
import BibleUp from '@bibleup/bibleup/core'
```

### CDN:
Using your favourite CDN, You can either import the core ESM build or use the `<script>`.
<br>
In your Javascript file: 

``` js
import BibleUp from 'https://cdn.jsdelivr.net/npm/@bibleup/bibleup/+esm'
```


or using `<script>` in your HTML:

``` html
<script src="https://cdn.jsdelivr.net/npm/@bibleup/bibleup/dist/umd/bibleup-core.min.js "></script>
```

### CSS

Then include the CSS using `<link>`:

``` html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@bibleup/bibleup/dist/css/bibleup.css">
```

::: tip NOTE
- We **recommend** using the single minified build to start up BibleUp when working without a build tool (webpack, vite, next/nuxt) and style through the config options.
- You are free to use other CDN registry apart from the one used in the examples. For full distribution files check [Jsdeliver](https://www.jsdelivr.com/package/npm/@bibleup/bibleup) or [unpkg](https://unpkg.com/browse/@bibleup/bibleup/)
- We **recommend** that you pin BibleUp to a specific version or major versions when used in production and through a cdn.
- 
:::
