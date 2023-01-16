
export default {
  title: "BibleUp Docs",
  description: 'BibleUp Documentation | A tool for converting bible references on a webpage to a link with accessible popup',
  //base: '/docs/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    // https://bibleup.netlify.app
    //['base', { href: "https://bibleup.netlify.app"}],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
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
    logo: '/logo.png',
    editLink: {
      pattern: 'https://github.com/bibleup/docs/tree/docs/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present BibleUp'
    },
    nav: [
      {
        text: "Home",
        link: "https://bibleup.netlify.app",
      },
      {
        text: "Code Playground",
        link: "https://stackblitz.com/edit/bibleup"
      },
      {
        text: "BibleUp Editor",
        link: "https://bibleup.netlify.app/demo#editor"
      },
      {
        text: "Github",
        link: "https://github.com/bibleup/bibleup"
      },
      {
        text: "Community",
        link: "https://github.com/bibleup/bibleup/discussions"
      }
    ],
    sidebar: [
      {
        text: 'Introduction 💡',
        collapsible: false,
        items: [
          {text: 'What is BibleUp?', link: '/'}
        ]
      },
      {
        text: 'Guide 🚀',
        collapsible: false,
        items: [
          {text: 'Installation', link: '/guide/'},
          {text: 'Usage', link: '/guide/usage'},
          {text: 'Options', link: '/guide/options'},
          {text: 'Methods', link: '/guide/methods'},
          {text: 'Local Development', link: '/guide/development'},
          {text: 'Guidelines', link: '/guide/guidelines'}
        ]
      },
      {
        text: 'Customisation 🎨',
        collapsible: false,
        items: [
          {text: 'Popup Styling', link: '/customisation/'},
          {text: 'Presets', link: '/customisation/presets'}
        ]
      },
      {
        text: 'Plugin and Extensions 🛸',
        collapsible: false,
        items: [
          {text: 'WordPress Plugin',
          link: '/plugins/wordpress-plugin'
          },
          {
            text: 'Browser Extension',
            link: '/plugins/browser-extension'
          }
        ]
      },
      {
        text: 'Extra Topics 🧤',
        items: [
          {
            text: 'Contribute',
            link: '/extra/contribute'
          },
          {
            text: 'Roadmap',
            link: '/extra/roadmap'
          }
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
  ],

  markdown: {
    toc: { level: [1, 2] }
  }
};
