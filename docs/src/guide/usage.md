# Usage
After installation, intialize `BibleUp` by passing an element and the required `options` object into it. BibleUp exposes a single object interface which is `BibleUp`.

``` js
let bibleup = new BibleUp(element, options)
```

**element** - This is the HTML element containing bible references. This could be the entire `document.body`, browser window or a particular element you want BibleUp to search through.

**options**  - This is an object that should contain all BibleUp options and configurations. BibleUp options will be discussed on the next section.


When you are done with configuring `BibleUp`, put it to work by calling the `create()` method

``` js {2}
let bibleup = new BibleUp(element, options);
bibleup.create();
```

BibleUp will transform all valid Bible references to links. Hover or click on the link to get the Bible text 🎉🎉

For an example of BibleUp options:

``` js
let body = document.body
let bibleup = new BibleUp(body, {
version: "KJV", 
popup: "classic"
})

bibleup.create()
```
Check next section for full list of options properties
