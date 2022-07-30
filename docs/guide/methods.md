# Methods
The `new BibleUp` instance exports only two method. One standard method and a *getter*

### `create()`
The `create()` method is used to put BibleUp to work after the config options are passed to the instance. This method accepts no arguments and does not return any value. It is used to *activate* BibleUp.

```js {2} 
const b = new BibleUp(element, options);
b.create()
```

### `getOptions`
This is a *getter* method to retrieve the current BibleUp config options. It returns all options as an `object`.

```js {2} 
const b = new BibleUp(element, options);
console.log(b.getOptions)
```
