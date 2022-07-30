# Style Presets
The demo page contains some presets. These presets are documented below. You can also use these code examples to test out how the `styles` property in the config option works.

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
		color: ['white', false,'white'],
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
      color: ["#333", "#333"],
      borderRadius: "0px",
      boxShadow: "0.3em 0.3em 0 0 #4884ee, inset 0.3em 0.3em 0 0 #4884ee",
    },
})
```

The `styles` config can be used to sufficiently style BibleUp popovers without toching even touching CSS.<br><br>
If you have a beautiful preset that you would like to share with the community, consider submitting an issue on Github and we would gladly feature it on our awesome list 😎