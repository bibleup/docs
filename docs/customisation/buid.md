# Using `buid`
[`buid`](/guide/options#buid) makes it possible to use any arbitary string to target popovers and links when styling with CSS. The string is suffixed to `bu-popup` and used as an ID to help identify popups and links that are tied to a BibleUp instance.

For example, when the value is set to **`myCustom`**, the popup container will have ID **`bu-popup-myCustom`** and all links will conatin the class **`bu-link-myCustom`**.

::: code-group
```js [JavaScript]
let b = new BibleUp(element, {
  buid: 'myCustom'
})

b.create()
```
```html [HTML]
<!-- The popover ID (bu-popup-{buid}) -->
<div id="bu-popup-myCustom" class="...">
</div>

<!-- links classname (bu-link-{buid}) -->
<a class="bu-link-myCustom">John 3:16</a>
```
:::

## Popups
To target popups relating to the instance:

```css
#bu-popup-myCustom {
    background: #3174EC;
    color: #fff;
}

#bu-popup-myCustom .bu-popup-header {
  /* custom styles */
}

#bu-popup-myCustom .bu-popup-version {
  /* custom styles */
}
```

## Links
To target anchor links relating to the instance:
```css
.bu-link-myCustom {
  /* custom styles */
}


.bu-link-myCustom .bu-link {
    /* parent 'cite' element */
}
```

## Specificity
You may encounter may be specificity issues when overwriting popup children elements due to nested selectors. However, using `buid` will help you create a higher precedence and solve the issue.