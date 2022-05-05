# Get Started

## Installation
BibleUp can be installed through NPM or through any of your favourite CDN.

### NPM

``` bash
npm install @bibleup/bibleup
```

### CDN
Import the ES module through a CDN:

``` js
import BibleUp from 'https://cdn.jsdelivr.net/npm/@bibleup/bibleup/+esm'
```

or using `<srcipt/>` in your HTML

``` html
<script src="https://unpkg.com/@bibleup/bibleup"></script>
```

## BibleUp Core
BibleUp comes with the CSS included into the build by default, providing a single minified build.<br>However, you can decide to include BibleUp Core API and CSS separately.

### NPM:
 
In your javascript file, after `npm install`:

``` js
import BibleUp from 'bibleup/core'
```

### CDN:
Using your favourite CDN, You can either import the core API ESM build or use the `<script>` to include the UMD build.

In your Javascript file: 

``` js
import BibleUp from "https://unpkg.com/@bibleup/bibleup/dist/esm/bibleup-core.esm.min.js"
```

or using `<script>` in your HTML:

``` html
<script src="https://unpkg.com/@bibleup/bibleup/dist/umd/bibleup-core.umd.min.js"></script>
```

Then include the CSS using `<link>` or configure through a CDN

::: tip NOTE
- We **recommend** using the single minified build to start up BibleUp with sufficient styling through the config options.
- You are free to use other CDN registry apart from the one used in the examples
:::
