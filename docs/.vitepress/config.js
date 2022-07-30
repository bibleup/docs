
export default {
  title: "BibleUp Docs",
  description: 'BibleUp Documentation | A tool for converting bible references on a webpage to a link with accessible popup',
  base: '/docs/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    // https://bibleup.netlify.app 
    ['base', { href: "https://bibleup.netlify.app"}],
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
    siteTitle: 'BibleUp Docs',
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
        text: 'Introduction 💡',
        collapsable: false,
        items: [
          {text: 'Introduction', link: '/'}
        ]
      },
      {
        text: 'Guide 🚀',
        collapsable: false,
        items: [
          {text: 'Installation', link: '/guide/'},
          {text: 'Usage', link: '/guide/usage'}, 
          {text: 'Options', link: '/guide/options'}, 
          {text: 'Methods', link: '/guide/methods'}, 
          {text: 'Guidelines', link: '/guide/guidelines'}
        ]
      },
      {
        text: 'Customisation 🎨', 
        collapsable: false,
        items: [
          {text: 'Popup Styling', link: '/customisation/'}, 
          {text: 'Presets', link: '/customisation/presets'}
        ]
      },
      {
        text: 'Plugins 🛸', 
        collapsable: false,
        items: [
          {text: 'Plugin and Browser Extension', link: '/plugins/'}
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top", 
    "@vuepress/plugin-medium-zoom"
  ]
};
