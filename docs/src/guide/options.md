# Options

```javascript
let bibleup = new BibleUp(body, {
 // default values
 version: 'kjv',
 popup: 'classic',
 darkTheme: false,
 bu_ignore: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'IMG', 'A'],
 bu_allow: [],
 styles: {}
});
```

### ```version```
The Bible version to display on hover. BibleUp currently supports only 5 versions: KJV, ASV, BBE, WEB and YLT<br>
Default: ```kjv```

### ```darkTheme```
A boolean to toggle dark theme on popup<br>
Default: ```false```

### ```popup```
BibleUp popup style. Check out the [Themes documentation](./docs/themes.md) for a list of popup styles<br>
Default: ```classic```

### ```bu_allow```
BibleUp ignores bible references on the following elements by default: `h1-h6`, `img`, `a`, `input`, `select`, `textarea`, `script`. <br>
Use this option to look up bible references on certain elements.
<br>
Type: array
```javascript
let bibleup = new BibleUp(body, {
 bu_allow: ['H4','H5'] //allow references on h4 and h5 tags
})
```
### `styles`
Use this to completely provide custom styling for the popup.
::: warning
Documentation is yet to be provided for this. Check [this demo](https://github.com/Bibleup/bibleup/blob/main/demo/main.js) on Github repo to see how to configure.
:::