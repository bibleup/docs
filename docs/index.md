---
prev: false
next: /guide/
---

# Introduction

## What is BibleUp? 
BibleUp is a configurable web tool that transforms plain Bible references on a webpage into hyperlinks. Hovering on these links will make the corresponding Bible text accessible via a feature-rich and flexible popover.<br>
BibleUp removes the need of switching to a different tab or app to look up plain Bible references on a webpage. It makes the text accessible to readers on the go.

BibleUp supports customisation of links, popovers and versions - all done through the API options.

## How it works
BibleUp searches for all valid Bible references on a page and transforms each one to a link. Hovering or clicking on these links will make the corresponding Bible text accessible via a feature-rich and flexible popover.
<br><br>
BibleUp does this by searching through the entire page (or specific sections) for valid Bible references. It then transforms these references to an `<a>` element, intercepting clicks and hover events and then fetching the Bible text via the internal API. The text is displayed on a flexible and highly customisable popover.
At its core, BibleUp is a blend of an internal API and a display interface.

## Browser Support
You can install BibleUp on virtually all browsers and operating systems. The default build supports an extensive list of browsers. <br>The last 3 major versions of all browsers are fully supported with an extended support for Chromium-based browsers, iOS Safari and Internet Explorer 11. 

## Try BibleUp Online
Play with BibleUp configurations and methods on the [code playground](https://stackblitz.com/edit/bibleup).<br>
Use the [Editor](https://bibleup.netlify.app/demo#editor) to generate popover styles and configure in real-time.

## Community
We love feedbacks 😀<br>
If you have any questions, a feature request, an issue or you simply want to cheer us on, kindly reach out to the community on [Github discussions](https://github.com/bibleup/bibleup/discussions) or use the appropriate issue forum when using the browser extension or WordPress plugin.
The form on the homepage should be used for personal feedback/contact.

## Plugin and Browser Extension
BibleUp is available as a plugin for WordPress sites and a browser extension that can be used on any website. This makes it much easier to install, configure and use BibleUp on the go.

- [Wordpress plugin]()
- [Browser Extension]()

For any other information, please refer to the [plugin and extensions](https://bibleup.netlify.app/docs/plugins/) part of this documentation.

## Related Tools
BibleUp drew inspiration from other awesome related tools and libraries. 
- [FaithLife Reftagger](https://faithlife.com/products/reftagger)
- [ESV Crossreference Tool](https://www.esv.org/resources/esv-crossreference-tool/)
- [Blue Letter Bible (BLB) ScriptTagger](https://www.blueletterbible.org/webtools/blb_scripttagger.cfm)

These tools are related in core features and they work great! <br>
BibleUp however leverages on community development and has its pros on extensibility and flexibility.
