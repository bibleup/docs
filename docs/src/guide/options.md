# Options

```javascript
let bibleup = new BibleUp(body, {
 // default values
 version: 'KJV',
 popup: 'classic',
 darkTheme: false,
 bu_ignore: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'IMG', 'A'],
 bu_allow: [],
 styles: {}
});
```

### ```version```
The Bible version to display on hover.<br> BibleUp currently supports only 4 versions: KJV, ASV, LSV and WEB

| Bible Translation | Version code |
|--------|------|
| King James Version (KJV) **Default** | `KJV` |
| Authorised Standard Version (ASV) | `ASV`|
|Literal Standard Version (LSV) |  `LSV`    |
| World English Bible (WEB) | `WEB` |

```js
popup: "KJV" | "ASV" | "LSV" | "WEB"
```

### ```darkTheme```
*default:* `false` <br>
A boolean to toggle dark theme on popup. Dark theme can be toggled on all popup types.

```js
darkTheme: true|false
```

### ```popup```
*default:* ```classic``` <br>
Use this config property to specify the popup style. There are currently 3 supported popup styles: classic, inline and wiki.
```js
popup: "classic" | "inline" | "wiki"
```

### `bu_ignore`
*default:* `['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'IMG', 'A'],` <br>
BibleUp ignores references on certain elements by default. These are items that might already have click events binded (e.g <a> ) or headers (h1 to h6). You should use this option to add other elements you want BibleUp to ignore. This config option accepts an array.

```js
/* add blockquote and nav elements to the defaults. */
bu_ignore: ["BLOCKQUOTE", "NAV"],
```

Add `bu-ignore` class to any specific element you want to ignore. BibleUp will ignore elements with this class like those in `bu_ignore`.

```html
<!-- BibleUp will skip this -->
<p class="bu-ignore">John 3:16</p>
```

::: warning
`bu-ignore` class on a parent element will as well skip all children element with Bible references.
:::

### ```bu_allow```
default: ```{}``` <br>
Since BibleUp ignores bible references on certain elements by default, this option allows BibleUp to permit the listed elements. It overrides `bu-ignore`.

```javascript
let bibleup = new BibleUp(body, {
  /* allow references on h4 and h5 tags */
 bu_allow: ['H4','H5'] 
})
```
### `styles`
*default:* `undefined` <br>
BibleUp allows you to customise popup colours, border-radius, box-shadow and font size, making it possible to complete change how the popup looks. This is possible with any of the popup styles and it also overrides the colours set for dark theme. Simply state the colour (HEX, RGBA or value) in their respective properties.

```javascript
styles: {
  "primary": <hex> | <value>
  "secondary": <hex> | <value>
  "tertiary": <hex> | <value>
  "headerColor": <hex> | <value>
  "color": [<hex>|<value>, <hex>|<value>, <hex>|<value>]
  "borderRadius": "5px" | <value>
  "boxShadow":  "0 0 2px 5px grey" | <value>
  "fontSize": "16px" | <value>
}
```

| Property  | Description |
|---|---|
| `primary`  | This targets the main background of the popup |
| `secondary`  | This targets the background of the popup header (containing selected reference and version) *if existing* |
| `tertiary`  | This targets the Bible version background *if existing* |
| `headerColor`  | This is the color of the header text |
| `color`  | This accepts an array with three values: `color[0]` - font color of popup text, `color[1]` - font color of the version and `color[2]` - font color of close button *(if existing)* |
| `borderRadius`  | The border-radius of the popup (state in units, e.g 'px') |
| `boxShadow`  | The box-shadow of the popup, (state in units) |
| `fontSize`  | The font-size of all text in the popup (state in units) |


::: tip
The primary, secondary and tertiary properties apply to CSS `background` and not `background-color`. Therefore, you can style as gradients using the CSS `linear-gradient()` function. The box-shadow can also be styled like a regular CSS `border` (E.g, `0 0 0 2px red`)
:::

To style popup extensively with custom CSS, check the styling and customisation section.
