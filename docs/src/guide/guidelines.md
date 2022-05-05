# Guidelines
## Bible References
BibleUp matches all references including abbreviated books (jn 3:16, 1Ki 5:1). Asides from standard names, certain alias are also recognised and matched correctly. <br><br>
However, we rocommend that while writing a biblical article with references, only the **standrd name of Bible books** or their most popular abbreviated names should be used. Readers will appreciate standard Bible refernces within your articles than an abbreviated one.

## Format
All refernces in the following formart will be matched
- `book` `chapter`:`verse` (e.g, John 3:16)
- `book` `chapter`:`verse`-`verse-end` (e.g, Matthew 7:7-8)

Always put a single space between the `book` and chapter and a colon between the `chapter` and `verse`. <br>
If the reference is a range of verses, put a dash between `verse` and `verse-end`.

::: tip
BibleUp reorders verse range that are not prperly stated. For example, John 3:20-16 will display the text for John 3:16-20.
:::

## Multiple verses
BibleUp can also match multiple verses correctly.
- `book` `chapter`:`verse`, `verse2` (e.g, John 3:16,19)
- `book` `chapter`:`verse`-`verse-end`, `verse2`-`verse-end2` (e.g, Matthew 7:7-8, 24-26)

Multiple verses are matched against the same `chapter` and must be seperated with a comma.
::: warning
References with multisple chapters but same book, such as, John 3:16, 4:5 will not be matched **as expected**<br>
You would have to state seperately to get it to match correctly.
:::


