---
prev: false
next: Guide
---

[[toc]]

## What is BibleUp?
BibleUp is a configurable web tool that transforms plain Bible references on a webpage into hyperlinks. Hovering on these links will make the corresponding Bible text accessible via a feature-rich and flexible popover.<br>
BibleUp removes the need of switching to a different tab or app to look up plain Bible references on a webpage. It makes the text accessible to readers on the go.

BibleUp supports customisation of links, popovers and versions - all done through the API options.

## How it works
BibleUp efficiency runs through the DOM in an HTML page (or specific sections) and checks for all text nodes looking like a standard Bible reference. It uses a custom regex ([BibleUp Regex](/guide/development)) to test for resemblance and proceed to check if the reference chapters and verse range are indeed valid. Valid references are then, respectively, matched with the book of the Bible to which they relate and transformed to an hyperlink (`</a>`)

The popover is created and appended to the page from the options provided to BibleUp and styled in that same manner also. Hovering or clicking on BibleUp links will fetch the Bible text from the external API and make it accessible via a feature-rich and flexible popover.

At its core, BibleUp is a blend of an internal API and a display interface.

## Browser Support
BibleUp supports an extensive list of browsers and operating systems. <br>
The last 3 major versions of all browsers are fully supported with an extended support for Chromium-based browsers, iOS Safari and Internet Explorer 11.

## Try BibleUp Online
1. Play with BibleUp configurations and methods on the [code playground](https://stackblitz.com/edit/bibleup).
2. Use the [BibleUp Editor](https://bibleup.netlify.app/demo#editor) to generate popover styles and configure in real-time. You can also export styles to the WordPress plugin and browser extension.

## Community
We love feedbacks 😀<br>
If you have any questions, a feature request, an issue, kindly submit those through the [support page](https://bibleup.canny.io/). To follow updates, and join the development, reach out to the community on [Github discussions](https://github.com/bibleup/bibleup/discussions)
- [support page](https://bibleup.canny.io/)
- [Github discussions](https://github.com/bibleup/bibleup/discussions)

Use the appropriate issue forum when using the browser extension or WordPress plugin.
The form on the homepage should be used for personal feedback/contact.

## Plugin and Browser Extension
BibleUp is available as a plugin for WordPress sites and a browser extension that can be used on any website.
- [Wordpress plugin](/plugins/wordpress-plugin)
- [Browser Extension](/plugins/browser-extension)

## Related Tools
BibleUp drew inspiration from other awesome tools.
- [FaithLife Reftagger](https://faithlife.com/products/reftagger)
- [ESV Crossreference Tool](https://www.esv.org/resources/esv-crossreference-tool/)
- [Blue Letter Bible (BLB) ScriptTagger](https://www.blueletterbible.org/webtools/blb_scripttagger.cfm)

These tools are related in core features and they work great! <br>
BibleUp is similar to FaithLife Reftagger and other Bible Reference tagging tools.
BibleUp, however, leverages on community development and has its pros on extensibility and flexibility.
