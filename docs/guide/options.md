# Options

```js
// Option defaults
{
  version: 'KJV',
  popup: 'classic',
  darkTheme: false,
  bu_ignore: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'IMG', 'A'],
  bu_allow: [],
  buid: false,
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
A boolean to toggle dark theme on popup.

```js
darkTheme: true | false
```

::: warning NOTE:
Dark theme on popovers can get overridden by some explicit `styles` property - like `primary`, `secondary` and `tertiary`. To prevent this, make sure these properties are set to `false` or not included.
:::

## `popup`

**Default:** `classic` <br>
Use this property to specify the popup type. There are currently 3 supported popup/popover types: classic, inline and wiki.

```js
popup: "classic" | "inline" | "wiki"
```

## `bu_ignore`

**Default:** `['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'A']` <br>
BibleUp ignores references on certain elements by default. This includes all headers and anchor element. Use this to add other elements you want BibleUp to ignore. This property accepts an array.

```js
// add <blockquote> and <nav> elements to the defaults.
bu_ignore: ["BLOCKQUOTE", "NAV"],
```

Add `bu-ignore` class to any specific element you want to ignore in your HTML. BibleUp will ignore elements with this class like those in `bu_ignore`.

```html
<!-- BibleUp will skip this -->
<p class="bu-ignore">John 3:16</p>
```

::: tip NOTE:
- Apart from the defaults, BibleUp internally ignores some other elements like `INPUT`, `TEXTAREA` and `SVG` and others. These are elements that should be ignored as expected.
- The descendants of any ignored element will be ignored also. It doesn't matter how deeply nested the element is, all its content will be ignored.
:::

## `bu_allow`

**Default:** `{}` <br>
Since BibleUp ignores Bible references on certain elements by default, this option allows BibleUp to permit listed elements. It overrides `bu-ignore`.

```js
// allow references on h4 and h5 tags
bu_allow: ['H4','H5']
```

## `buid`
**Default:** `false` <br>
Use this option to specify a string that will used to identify a particular BibleUp instance.
There are situations where a page may contain many BibleUp instance of different popups. In such cases, you can specify a `buid` to each instance to make it easier to style them separately.

::: code-group
```js [JS]
let b = new BibleUp(element, {
  buid: 'myCustom'
})

b.create()
```
```html [Popover]
<!-- The popover ID (bu-popup-{buid}) -->
<div id="bu-popup-myCustom" class="...">
</div>
```
```html [Links]
<!-- links classname (bu-link-{buid}) -->
<a class="bu-link-myCustom">
</a>
```
:::

This option is especially helpful if you need to target popup for custom CSS styling. Check the customization guide - [using buid]() for further info.

:::info NOTE
When this option is not set or set to false, BibleUp internally generates a random 6-digit number to identify the instance.
:::
## `styles`

**Default:** `undefined` <br>
BibleUp allows you to customise popover colours, border-radius, box-shadow and font size, making it possible to completely change the popover looks. This is possible with any of the popup types.<br>
Simply state the colour (HEX, RGBA or value) for the property.

```ts
styles: {
  primary: string
  secondary: string
  tertiary: string
  headerColor: string
  fontColor: string
  versionColor: string
  closeColor: string
  borderRadius: string
  boxShadow:  string
  fontSize: "16px" | string
}
```

| Property  | Description |
|---|---|
| `primary`  | The main background of the popup |
| `secondary`  | The background of the popup header, containing the reference and version. *(if it exists)* |
| `tertiary`  | The Bible version background *(if it exists)* |
| `headerColor`  | The font color of the header text |
`fontColor`  | Font color of popup text |
| `versionColor`  | Font color of the version |
| `closeColor`  | Color of the close icon
| `borderRadius`  | The border-radius of the popup, in units (e.g `5px`) |
| `boxShadow`  | The box-shadow of the popup, in units. |
| `fontSize`  | The font-size of all text in the popup, in units. |

<br>

**Some additional notes:**
1. The `primary`, `secondary` and `tertiary` properties apply to CSS background and not background-color.
Therefore, you can style using the CSS linear-gradient function or even a background image.

::: details Linear Gradient
```js
styles: {
  primary: 'linear-gradient(red, yellow)'
}
```
:::

::: details Background image with linear gradient
```js
styles: {
  primary: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../your-image.jpg)'
}
```
:::

2. `boxShadow` can be styled like a regular CSS border.
::: details Solid Border
```js
styles: {
  boxShadow: '0 0 0 2px red'
}
```
:::

To style popup extensively with custom CSS, check the styling and customisation section.
