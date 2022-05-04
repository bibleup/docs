# Styling and Customisation
After calling the `create` method of `BibleUp`, a popup is constructed and appended to the document. This popup is hidden except when a click or mouse event is detected on a BibleUp link.

## Popup structure
The popup is simply a structured HTML element styled internally by BibleUp. However these preset styles can be overiden with custom CSS through their selectors.

```html
<!-- 'classic' popup structure -->
<div id="popup" class="bu-classic bu-popup-hide">
  <div id='bu-popup-header'>
    <p id='bu-popup-ref'></p>
	  <p id="bu-popup-version"></p>
	</div>
	
	<div id='bu-popup-content'>
	  <ol id='bu-popup-text'></ol>
	</div>
	
	<div id='bu-popup-footer'>
	  <p>BibleUp 📖💡</p>
	</div>
</div>
```

::: tip
The popup structure differs between the different popup types, and so some selectors (like header for `inline` popup) might be non-existing.
:::

## CSS Styling
To change the preset styles and even completely change popup structure, simply style using regular CSS.

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
You can style the popup however you want with this approach. You should also consider CSS specificity and `!important` if there is any clash between style declaration.
:::

## Using CSS Preprocessors
BibleUp uses LESS CSS to style the preset popup, you can use the same as a guide to help in customisation or use other CSS Preprocessors tailored to your needs. <br><br>
You can find `bibleup.less` file in BibleUp Github repo or through your preferred CDN

## Styling the links
BibleUp adds `bu-link` class to all reference links that trigger the popup. <br>BibleUp link is in this structure and be styled with the selectors

:::: code-group
::: code-group-item HTML
```html
<cite>
  <a href='#' class='bu-link' bu-data='{}'>John 3:16</a>
</cite>
```
:::
::: code-group-item CSS
```css
.bu-link {
  color: red;
  text-decoration: underline;
  font-style: normal;
}
```
:::
::::

::: tip
`cite` element is usually styled in italics by most browser. You can reset this using the class selector.
:::

## Credit BibleUp
If you enjoyed using BibleUp, we plead that you leave the popup footer (containing `BibleUp 📖💡`) untampared with or without obstruction. The text doesn't link to our website or any affiliate website, it only serves as a little promotion for this tool.
