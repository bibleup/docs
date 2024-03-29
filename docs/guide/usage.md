# Usage
After installation, create an instance of BibleUp by passing an HTML element and the required `options` object. BibleUp exposes a single class object - `new BibleUp()`.

```js
let bibleup = new BibleUp(element, options)
```

- **element** - This is an HTML element containing Bible references. This could be the entire `document.body` or a particular element you want BibleUp to search through.

- **options**  - This object should contain all BibleUp options and configurations. BibleUp options will be discussed in the next section.


Put BibleUp to work by calling the `create()` method

```js {2}
let bibleup = new BibleUp(element, options);
bibleup.create();
```

BibleUp will now transform all valid Bible references to links. Hover or click on the link to get the Bible text 🎉🎉

## Usage Example
For a minimal example of BibleUp options and usage:

```js
let body = document.body
let bibleup = new BibleUp(body, {
version: "KJV",
popup: "classic",
darkTheme: false
})

bibleup.create()
```
Check the next section for the full list of option properties.
