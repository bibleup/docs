# Style Presets
Use the following code examples to test out how the `styles` property in the config option works. These presets are taken from the BibleUp Editor.

## preset 1
```js
let bibleup = new BibleUp(body, {
	popup: 'wiki',
	darkTheme: false,
	styles: {
		primary: ' #192841',
		secondary: '#192841',
		tertiary: '#7e9bcd',
		headerColor: 'white',
		fontColor: 'white',
		closeColor: 'white',
		borderRadius: '12px',
		boxShadow: '5px 5px #7e9bcd',
	}
})
```

## preset 2
```js
let bibleup = new BibleUp(body, {
	popup: "classic",
    darkTheme: false,
    styles: {
      primary: "wheat",
      secondary: "wheat",
      headerColor: "#333",
	  fontColor: '#333',
	  versionColor: '#333',
      borderRadius: "0px",
      boxShadow: "0.3em 0.3em 0 0 #4884ee, inset 0.3em 0.3em 0 0 #4884ee",
    },
})
```

The `styles` config can be used to sufficiently style BibleUp popovers without toching even touching CSS.<br><br>
If you have a beautiful preset that you would like to share with the community, consider submitting an issue on Github and we would gladly feature it on our awesome list 😎

## Editor Presets
[BibleUp Editor](https://bibleup.netlify.app/demo) contains some wonderful presets you can use. You can also import and export styles.

