---
prev: false
next: /guide/
---

# Introduction
BibleUp is a configurable web tool that allows text of Bible references on a page to be available to readers at a single click (or hover). This makes reading biblical articles pleasurable and more immersive

::: tip Note
BibleUp is currently in beta and fairly stable. However it can be used without much worry of breaking changes or bugs.
::: 

## How it works
BibleUp searches for all bible references on a page and transforms each one to a link. Hovering or clicking on these links will make the corresponding bible text accessible via a feature-rich and flexible hover popup. <br>
BibleUp does this by searching through the entire page (or specific sections) for valid bible references. It then transforms these references to an `<a>` element, intercepting clicks and hover events and then fetching the bible text via the internal API. The text is then displayed on a flexible and highly customisable popup.<br>
At its core, BibleUp is a blend of an internal API and a display interface.

## Related Tools
BibleUp drew inspiration from other awesome related tools and libraries. 
- [FaithLife Reftagger](https://faithlife.com/products/reftagger)
- [ESV Crossreference Tool](https://www.esv.org/resources/esv-crossreference-tool/)
- [Blue Letter Bible (BLB) ScriptTagger](https://www.blueletterbible.org/webtools/blb_scripttagger.cfm)

These tools are related and they work great!<br>
BibleUp however leverages on community development and is focused on extensibility and huge flexibility.

::: warning
- Documentation for BibleUp is still a work in progress.
- Most post-installation features are yet to be documented.
- Kindly [report](https://github.com/Bibleup/bibleup/issues) any issue to get a quick fix before the docs get completed.
