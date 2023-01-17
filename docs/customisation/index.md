# Popup Styling
The different popup types can be styled in many ways. You can use the [`style`](/guide/options.html#styles) option, redefine the root CSS variables or use classnames and ID to target elements directly.

## Popup structure
The popup is simply a structured HTML element styled internally by BibleUp. However these styles can be overiden with custom CSS through their selectors.

::: code-group

```html [Classic]
<!-- 'classic' popup structure -->
<div id="bu-popup-{buid}" class="bu-classic bu-popup-hide">
  <div id="bu-popup-header">
    <p id="bu-popup-ref"></p>
    <p id="bu-popup-version"></p>
  </div>

  <div id="bu-popup-content">
    <ol id="bu-popup-text"></ol>
  </div>

  <div id="bu-popup-footer">
    <p>BibleUp 📖💡</p>
  </div>
</div>
```

```html [Inline]
<div id="bu-popup-{buid}" class="bu-inline bu-popup-hide">
  <div class="bu-popup-content">
    <ol class="bu-popup-text"></ol>
  </div>

  <div class="bu-popup-footer">
    <p>BibleUp 📖💡</p>
  </div>
</div>
```

```html [Wiki]
<div id="bu-popup-{buid}" class="bu-wiki bu-popup-hide">
  <div class='bu-popup-header'>
    <p class='bu-popup-ref'></p>
	  <span class='bu-popup-version'></span>
	  <button class='bu-popup-close' tabindex='0'>&#x2715</button>
  </div>

  <div class='bu-popup-content'>
	 	<ol class='bu-popup-text'></ol>
	</div>

	<div class='bu-popup-footer'>
	 	<p>BibleUp 📖💡 </p>
	</div>
</div>
```

:::

::: tip
The popup structure differs between the different popup types, and so some selectors (like header for `inline` popup) doesn't exist.
:::

## CSS Styling
To change the styles and even completely change popup structure, simply use regular CSS.

```css
#bu-popup {
  box-shadow: none;
  border: 2px solid #ccc;
  border-radius: none;
}

#bu-popup-header {
  background: blue;
  color: white;
}
```

::: tip
You can style the popup however you want with this approach. Also consider CSS specificity and use `!important` if there is any clash between style declaration.
:::

### Using BibleUp ID `buid`
[`buid`]() makes it possible to use any arbitary string to target popovers and links when styling with CSS. For example, when the value is set to **myCustom**, the popup container will have ID `bu-popup-myCustom` and all links will conatin the class `bu-link-myCustom`.

BibleUp uses LESS CSS to style the preset popup, there may be specificity issues when overwriting default values due to nested selectors. However, `buid` can help solve this.

```css
#bu-popup-myCustom {
    background: #3174EC;
    color: #fff;
}

#bu-popup-myCustom .bu-popup-header {
  /* custom styles */
}
```
All anchor links relatiing to the buid instance can also be easily targeted
```css
.bu-link-myCustom {
  /* custom styles */
}
```
## Root Variables
Below are the root CSS variables used to style the popovers. Simply change the values you need to customize popovers. Using this method offers more flexibility than the `style` option.

```css
<!-- default values -->
:root {
  --bu-font-size: 15px;
  --bu-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --bu-font-weight: 400;
  --bu-line-height: 1.5;

  --bu-classic-bg: #fff;
  --bu-classic-color: #212529;
  --bu-classic-width: 100%;
  --bu-classic-max-width: 400px;
  --bu-classic-box-shadow: 0px 0px 3px 0.7px #a6a6a6;
  --bu-classic-header-bg: #e6e6e6;
  --bu-classic-header-color: #212529;
  --bu-classic-version-bg: #f2f2f2;
  --bu-classic-version-color: #212529;

  --bu-wiki-bg: #fff;
  --bu-wiki-color: #212529;
  --bu-wiki-width: 90%;
  --bu-wiki-max-width: 400px;
  --bu-wiki-box-shadow: 0px 0px 3px 0.7px #a6a6a6;
  --bu-wiki-version-bg: #f2f2f2;
  --bu-wiki-version-color: #212529;
  --bu-wiki-header-color: #212529;
  --bu-wiki-header-bg: #fff;

  --bu-inline-bg: #fff;
  --bu-inline-color: #212529;
  --bu-inline-width: 80%;
  --bu-inline-max-width: 350px;
  --bu-inline-box-shadow: 0px 0px 2px 0.5px #ccc;
  --bu-inline-border-radius: 5px;
}

```
### Dark Theme
To specify a different value when [`darkTheme`](/guide/options.html#darktheme) is enabled, use `[data-bu-theme='dark']` selector alongside.

```CSS
<!-- default values -->
[data-bu-theme='dark'] {
  --bu-classic-bg: #3d4245;
  --bu-classic-color: #f2f2f2;
  --bu-classic-header-color: #333;
  --bu-classic-header-bg: #d9d9d9;
  --bu-classic-version-bg: #f2f2f2;
  --bu-classic-version-color: #212529;

  --bu-wiki-bg: #3d4245;
  --bu-wiki-color: #f2f2f2;
  --bu-wiki-header-color: #f2f2f2;
  --bu-wiki-header-bg: #3d4245;
  --bu-wiki-version-color: #333;
  --bu-wiki-version-bg: #f2f2f2;
  --bu-wiki-close-color: #f2f2f2;

  --bu-inline-bg: #3d4245;
  --bu-inline-color: #f2f2f2;
}
```

## Credit BibleUp

If you enjoyed using BibleUp, we plead that you leave the popup footer (containing `BibleUp 📖💡`) untampared with or without obstruction. The text does not link to our website or any affiliate website, it only serves as a little promotion for this tool.
