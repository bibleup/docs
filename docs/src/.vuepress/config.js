const { description } = require("../../package");

module.exports = {
  title: "BibleUp Docs",
  description: 'BibleUp Documentation | A tool for converting bible references on a webpage to a link with accessible popup',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicon-16x16.png"}],
    ["meta", { name: "theme-color", content: "#fff" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "Bibleup/bibleup",
    docsRepo: 'Bibleup/docs',
    docsBranch: 'docs',
    docsDir: 'docs/src',
    editLinks: true,
    editLinkText: "Edit this page on Github",
    lastUpdated: false,
    smoothScroll: true,
    nav: [
      {
        text: "Introduction",
        link: "/",
      },
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Home",
        link: "https://bibleup.netlify.app",
      },
    ],
    sidebar: [
      {
        title: 'Introduction 📖',   // required
        path: '/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/',
        ]
      },
      {
        title: 'Guide 🚀',
        path: '/guide/', 
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/guide/',
          '/guide/usage',
          '/guide/options',
          '/guide/guidelines'
        ]
      },
      {
        title: 'Customisation 🎨', 
        path: '/customisation', 
        collapsable: false,
        sidebarDepth: 1, 
        children: [
          '/customisation/'
        ]
      },
      {
        title: 'Plugins 🛸',  
        path: '/plugins',
        collapsable: false,
        sidebarDepth: 1, 
        children: [
          '/plugins/'
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
