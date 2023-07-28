# Link Styling
BibleUp links can only be styled using custom CSS.

## Link Structure
For a `John 3:16, 17-20` reference:

```html
<cite class="bu-link" bu-ref="John 3:16, 17-20">
  <a href="#" class="bu-link-{buid}" bu-data="{}">John 3:16</a>,
  <a href="#" class="bu-link-{buid}" bu-data="{}">17-20</a>
</cite>
```

```css
.bu-link a {
  color: red;
  text-decoration: underline;
  font-style: normal;
}
```

If `buid` is specified and not false, links can be target as below:
```css
.bu-link-{buid} {
    /* custom styles */
}
```

::: tip
`cite` element is usually styled in italics by most browser. However, this has been changed internally for BibleUp links.
:::