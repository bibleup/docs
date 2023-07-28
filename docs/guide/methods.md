# Methods

## `create()`
This method is used to put BibleUp to work after passing the config options to an instance of `new BibleUp`. This method accepts no parameters and does not return any value. It is used to **activate** BibleUp.

```js {2}
const b = new BibleUp(element, options);
b.create()
```

## `refresh()`
This method is used to re-engage BibleUp tagging with or without modifying the config option. It can be useful in any of these scenarios:

1. To tag scriptures on new elements that were not on screen when the `create()` method was called. This is particularly useful when the DOM is manipulated via client-side rendering.

2. To change BibleUp config on an instance without affecting already tagged scriptures. Thus, the popover style for a `new BibleUp()` instance can be modified without retagging scriptures.

The method accepts a BibleUp option, the element and force option as parameters - in that order.


```js
b.refresh(option, force, element)
```
### Parameters
1. `options` <Badge text="optional" type="info"/> - This should be a valid BibleUp options object. It won't override the entire instance object but only the part that was modified. If not specified, the option specificed at instance will remain the same.

2. `force` <Badge text="optional" type="info"/> <Badge text="false" type="tip"/> - Setting this to **true** will allow the old options to be totally replaced with the new options. It is similar to setting a new instance option. The old popup will also be replaced by a new one based on the options you now use.

3. `element` <Badge text="optional" type="info"/> - This is the HTML element that BibleUp will search through. If not specified, the old `element` parameter on the BibleUp instance will be searched again, but previously tagged scriptures won't be affected.

::: tip NOTE
When a new option object is passed to `refresh()` and `force` is set to **false**, only the property that was modified will be applied by BibleUp. For example, changing only `version` prop won't affect any `styles` and changing `primary` won't also affect other properties inside `styles`.

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

::: warning
You can only call the `refresh()` method after previously calling `create()` on a BibleUp instance. Trying to refresh without previously *activating* BibleUp won't work as expected.
:::

## `destroy()`
This method will remove all Bible reference links with or without destroying the popover.

```js
b.destroy(force)
```
### Parameters
1. `force` <Badge text="optional" type="info"/> <Badge text="false" type="tip"/> - If this is set to **true**, BibleUp will remove all links permanently and destroy the popover - all method will cease to work on the instance. If this is set to **false**, BibleUp will temporarily remove all links, but not the popup - calling refresh method will re-tag the bible references normally.

::: warning
The destroy method can't be undone when force is **true**

```js {2,6}
// Wrong ❌❌
b.destroy(true)
b.refresh() //error - can't re-tag refrences

// Right ✅✅
b.destroy(false)
b.refresh()
```
:::


## `getOptions`
This is a *getter* method to retrieve the current BibleUp config options. It returns all options as an `object`.

```js {2}
const b = new BibleUp(element, options);
console.log(b.getOptions)
```
