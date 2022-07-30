# Guidelines
## Bible References
BibleUp matches all references including abbreviated books (Jn 3:16, 1Ki 5:1). Apart from standard names, certain alias are also recognised and matched correctly. <br><br>
However, we recommend that while writing an article with references, only the **standard name of Bible books** or their most popular abbreviated names should be used. Readers will better appreciate standard Bible references within your articles than an abbreviated one.

## Format
All references in the following format will be matched:
- `book` `chapter`:`verse` (e.g, John 3:16)
- `book` `chapter`:`verse`-`verse-end` (e.g, Matthew 7:7-8)

Always put a single space between the `book` and chapter and a colon between the `chapter` and `verse`. <br><br>
If the reference is a range of verses, put a dash between `verse` and `verse-end`.

::: tip
BibleUp reorders verse range that are not properly stated. For example, John 3:20-16 will display the text for John 3:16-20.
:::

## Multiple verses
BibleUp can also match multiple verses correctly.
- `book` `chapter`:`verse`, `verse2` (e.g, John 3:16,19)
- `book` `chapter`:`verse`-`verse-end`, `verse2`-`verse-end2` (e.g, Matthew 7:7-8, 24-26)

Multiple verses are matched against the same `chapter` and must be seperated with a comma.

::: warning
References with multiple chapters but same book, such as, John 3:16, 4:5 will not be matched **as expected** because references are only matched against the same `chapter`<br>
You would have to state the references seperately to get it to match correctly - **John 3:16, John 4:5**
:::


## Books
Books and abbreviations must **begin with a capital letter.** John 3:16 will be matched but not john 3:16.<br>
We recommend the 3-letter abbreviation system when using abbreviations. [This resource](https://biyn.org/misc/Resources/abbrevs.html) states them clearly.
