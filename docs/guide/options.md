# Options

```js
// Option defaults
{
  version: 'KJV',
  popup: 'classic',
  darkTheme: false,
  bu_ignore: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'IMG', 'A'],
  bu_allow: [],
  styles: {} 
}
```

## `version`
**Default:** `KJV`<br>
The Bible version to display on hover.<br> BibleUp currently supports only 4 versions: KJV, ASV, LSV and WEB

| Bible Translation                    | Version code |
| ------------------------------------ | ------------ |
| King James Version (KJV)             | `KJV`        |
| Authorised Standard Version (ASV)    | `ASV`        |
| Literal Standard Version (LSV)       | `LSV`        |
| World English Bible (WEB)            | `WEB`        |

```js
version: "KJV" | "ASV" | "LSV" | "WEB"
```

## `darkTheme`

**Default:** `false` <br>
A boolean to toggle dark theme on popup. Dark theme can be toggled on all popup types.

```js
darkTheme: true | false
```

::: warning NOTE:
Dark theme on popovers will always get overridden by some explicit `styles` property if active - `primary`, `secondary` and `tertiary`. To use the default dark theme, make sure these properties are set to `false` or not included.
:::

## `popup`

**Default:** `classic` <br>
Use this property to specify the popup style. There are currently 3 supported popup/popover styles: classic, inline and wiki.

```js
popup: "classic" | "inline" | "wiki"
```

## `bu_ignore`

**Default:** `['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'IMG', 'A'],` <br>
BibleUp ignores references on certain elements by default. This includes all header and anchor element. Use this option to add other elements you want BibleUp to ignore. This option accepts an array.

```js
// add <blockquote> and <nav> elements to the defaults.
bu_ignore: ["BLOCKQUOTE", "NAV"],
```

Add `bu-ignore` class to any specific element you want to ignore in your HTML. BibleUp will ignore elements with this class like those in `bu_ignore`.

```html
<!-- BibleUp will skip this -->
<p class="bu-ignore">John 3:16</p>
```

::: warning NOTE:
- Apart from the defaults, BibleUp internally ignores some other elements like `INPUT`, `TEXTAREA` and `SVG`. These are elements that should be ignored as expected.
- The descendants of any ignored element will be ignored also. It doesn't matter how deeply nested the element is, all contents inside it will be ignored.
:::

## `bu_allow`

**Default:** `{}` <br>
Since BibleUp ignores bible references on certain elements by default, this option allows BibleUp to permit listed elements. It overrides `bu-ignore`.

```js
// allow references on h4 and h5 tags
bu_allow: ['H4','H5']
```

## `styles`

**Default:** `undefined` <br>
BibleUp allows you to customise popover colours, border-radius, box-shadow and font size, making it possible to complete change how the popover looks. This is possible with any of the popup styles and it also overrides the colours set for dark theme.<br>
Simply state the colour (HEX, RGBA or value) for the property.

```js
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
| `secondary`  | The background of the popup header, containing the reference and version. <br> *(if it exists)* |
| `tertiary`  | The Bible version background <br> *(if it exists)* |
| `headerColor`  | This is the color of the header text |
| `color`  | This accepts an array with three values:<br>**`color[0]`** - font color of popup text <br><br> **`color[1]`** - font color of the version <br><br> **`color[2]`** - font color of close button *(if it exists)* |
| `borderRadius`  | The border-radius of the popup, in units (e.g `5px`) |
| `boxShadow`  | The box-shadow of the popup, in units. |
| `fontSize`  | The font-size of all text in the popup, in units. |

<br>

::: tip
- The primary, secondary and tertiary properties apply to CSS `background` and not `background-color`.
Therefore, you can style using the CSS `linear-gradient()` function.
- The box-shadow can be styled like a regular CSS `border` (e.g, `0 0 0 2px red`)
:::

To style popup extensively with custom CSS, check the styling and customisation section.
