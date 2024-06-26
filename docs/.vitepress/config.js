
export default {
  title: "BibleUp Documentation: User & Developer Guide",
  description: 'The BibleUp documentation provides all the resources you need for a installing, customizing, and using the BibleUp library and extensions',
  titleTemplate: 'BibleUp Documentation',
  base: '/docs/',
  outDir: '../dist/docs',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    // fonts
    ['link', {rel: "preconnect", href: "https://fonts.googleapis.com"}],
    ['link', {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true}],
    ['link', {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"}],
    // favicons
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
    // meta theme
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
      pattern: 'https://github.com/bibleup/docs/blob/docs/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present BibleUp'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bibleup/bibleup' }
    ],
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
        link: "https://bibleup.netlify.app/demo/editor"
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
          {text: 'What is BibleUp?', link: '/'},
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
          {text: 'Link Styling', link: '/customisation/link'},
          {text: 'Using buid', link:'/customisation/buid'},
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
            text: 'Copyright',
            link: '/extra/copyright'
          },
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
    ],
    algolia: {
      appId: 'N7W8DF5577',
      apiKey: 'f344ea6250ee95257d24a0536892409c',
      indexName: 'bibleup'
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom"
  ],

  markdown: {
    toc: { level: [2] }
  },

  sitemap: {
    hostname: 'https://bibleup.netlify.app/docs/',
    transformItems: (items) => {
      // add new items or modify/filter existing items
      items.push({
        url: 'https://bibleup.netlify.app/',
        priority: 1.0
      })
      items.push({
        url: 'https://bibleup.netlify.app/demo',
        priority: 1.0
      })
      items.push({
        url: 'https://bibleup.netlify.app/demo/editor',
        priority: 1.0
      })
      return items
    }
  }
};
