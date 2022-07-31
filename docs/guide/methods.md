# Methods

## `create()`
The `create()` method is used to put BibleUp to work after passing the config options to an instance of `new BibleUp`. This method accepts no parameters and does not return any value. It is used to **activate** BibleUp.

```js {2} 
const b = new BibleUp(element, options);
b.create()
```

## `refresh()`
This method is used to re-engage BibleUp tagging with or without modifying the config option. It can be useful in any of these scenarios:

1. To tag scriptures on new elements that were not on screen when the `create()` method was called. This is particularly useful when the DOM is manipulated via client-side rendering.

2. To change BibleUp config on an instance without affecting already tagged scriptures. Thus, the popover style for a `new BibleUp()` instance can be modified without retagging scriptures.

Like `new BibleUp()` instance, the `refresh()` method accepts an element and a BibleUp config object as parameters - both are optional this time.


```js
b.refresh(element, options)
```
### Parameters 
1. `element` *(optional)* - This is the HTML element that BibleUp will search through. If not specified, the `element` parameter on the BibleUp instance will be searched again; but previously tagged scriptures won't be affected.

2. `options` *(optional)* - a valid BibleUp config object. This won't override the entire `new BibleUp()` config object but only the part that was modified. If not specified, the instance config will remain the same.


::: tip NOTE
When a config object is passed to `refresh()`, only the property that was modified will be applied by BibleUp. 
<br>
For example, changing only `version` prop won't affect `styles` and changing `primary` won't also affect other properties inside `styles`.

::: details Code Example
```js
const article = new BibleUp(document.body, {
  popup: 'inline', 
  version: 'KJV'
})

// refresh 'article' instance
// change popup type to 'wiki' 
article.refresh({
  popup: 'wiki'
})

```
:::

::: warning NOTE
You can only call the `refresh()` method after previously calling `create()` on a BibleUp instance. Trying to refresh without previously *activating* BibleUp won't work as expected.
:::

## `destroy()`
This method will remove all Bible reference tagging and destroy the popover. It accepts no parameter and does not return any value.

::: warning 
This method can't be undone. That is, calling `create()` after destruction **won't work as expected** and tagging won't also work properly.
<br><br>
This is a known issue and might be fixed on future releases. Use `refresh()` if you simply want to change configuration.
:::


## `getOptions`
This is a *getter* method to retrieve the current BibleUp config options. It returns all options as an `object`.

```js {2} 
const b = new BibleUp(element, options);
console.log(b.getOptions)
```
