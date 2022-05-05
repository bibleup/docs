# Plugins and Extensions
In future releases, BibleUp will be available as plugins for CMS and extension for browsers.

## WordPress
There is currently no plugin built for WordPress powered sites. However BibleUp can be still be integrated into your blogs with minimal configuration.<br><br>
Follow the steps below to get started:
- Install the [Insert Headers and Footers](https://wordpress.org/plugins/insert-headers-and-footers/) plugin and activate it on the dashboard.
- Upon activation, go to **settings > Insert Headers and Footers**. Here, you will see three boxes for header, body and footer sections.
- Paste the following codes into the footer box and click **save**

```js
<script src="https://unpkg.com/@bibleup/bibleup"></script>
<script>
let b = new BibleUp(document.body, {
  popup: "classic", 
  version: "KJV"
})

b.create();
</script>
```

The plugin will now automatically load the code you added on every page of your website. You can also configure the options to your site preference

::: warning
- This method includes BibleUp on all pages in your blog and not to articles alone.
- Read this [guide]() to learn how to install to specific pages.
:::

You can send us a message through the [contact page](https://bibleup.netlify.app/#contact) to get help. We'll be glad to help out.

## Extentions
BibleUp will also provide extensions for browsers in future releases. 