import Vue from 'vue'
Vue.component("demo-component", () => import("C:\\Users\\Hp\\web projects\\docs\\docs\\src\\.vuepress\\components\\demo-component"))
Vue.component("OtherComponent", () => import("C:\\Users\\Hp\\web projects\\docs\\docs\\src\\.vuepress\\components\\OtherComponent"))
Vue.component("Foo-Bar", () => import("C:\\Users\\Hp\\web projects\\docs\\docs\\src\\.vuepress\\components\\Foo\\Bar"))
Vue.component("Badge", () => import("C:\\Users\\Hp\\web projects\\docs\\docs\\node_modules\\@vuepress\\theme-default\\global-components\\Badge"))
Vue.component("CodeBlock", () => import("C:\\Users\\Hp\\web projects\\docs\\docs\\node_modules\\@vuepress\\theme-default\\global-components\\CodeBlock"))
Vue.component("CodeGroup", () => import("C:\\Users\\Hp\\web projects\\docs\\docs\\node_modules\\@vuepress\\theme-default\\global-components\\CodeGroup"))


export default {}