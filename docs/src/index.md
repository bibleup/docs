---
prev: false
next: /guide/
---

# Introduction
BibleUp is a configurable web tool that transforms plain Bible references (written in plain text) on a webpage to hyperlinks that can be interacted with and the corresponding Bible text accessible via a popover or tooltip. BibleUp removes the need of looking up Bible references by navigating between tabs or apps to read the text, it makes Bible text accessible to readers on the go. <br><br>
BibleUp supports customisation of links, popup and versions - all done through the API options.

::: tip Note
BibleUp is currently in final beta and fairly stable. However it can be used without much worry of breaking changes or bugs.
::: 

## How it works
BibleUp searches for all valid Bible references on a page and transforms each one to a link. Hovering or clicking on these links will make the corresponding Bible text accessible via a feature-rich and flexible popover. <br><br>
BibleUp does this by searching through the entire page (or specific sections) for valid Bible references. It then transforms these references to an `<a>` element, intercepting clicks and hover events and then fetching the Bible text via the internal API. The text is then displayed on a flexible and highly customisable popover.<br>
At its core, BibleUp is a blend of an internal API and a display interface.

## Related Tools
BibleUp drew inspiration from other awesome related tools and libraries. 
- [FaithLife Reftagger](https://faithlife.com/products/reftagger)
- [ESV Crossreference Tool](https://www.esv.org/resources/esv-crossreference-tool/)
- [Blue Letter Bible (BLB) ScriptTagger](https://www.blueletterbible.org/webtools/blb_scripttagger.cfm)

These tools are related and they work great!<br>
BibleUp however leverages on community development and is focused on extensibility and huge flexibility.

::: warning
- Documentation for BibleUp is still a work in progress. Most post-installation features are already documented.
- 'Popup' and 'Popover' are used interchangeably throughout the docs.
- Kindly [report](https://github.com/Bibleup/bibleup/issues) any issue to get a quick fix before the docs get completed.
