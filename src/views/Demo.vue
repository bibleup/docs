<template>
  <div class="wrapper">
    <section id="intro">
      <h1>BibleUp Demo</h1>
      <p class="catch">See BibleUp in action in the article below.</p>

      <div class="alert-box">
        <img src="@/assets/brush.svg" />
        <p>
          You can make use of the
          <a href="#editor">options box</a> below to test for
          other options. Check the docs on how to toally customise BibleUP 🎨
        </p>
      </div>
    </section>

    <section id="article-wrapper">
      <ArticlePost
        :key="articleKey"
        :popup="popup"
        :version="version"
        :theme="theme"
        :new = 'genKey'
      ></ArticlePost>

      <div id="editor">
        <div class="card">
          <label for="type">Popup Type</label>
          <select name="type" v-model="popup">
            <option value="classic">Classic</option>
            <option value="inline">Inline</option>
            <option value="wiki">Wiki</option>
          </select>

          <label for="theme">Theme</label>
          <select name="theme" v-model="theme">
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
          </select>

          <label for="version">Bible Version</label>
          <select name="version" v-model="version">
            <option value="kjv">King James Version (KJV)</option>
            <option value="asv">American Standard Version (ASV)</option>
            <option value="lsv">Literal Standard Version (LSV)</option>
            <option value="web">World English Bible (WEB)</option>
          </select>

          <button id="apply-btn" @click="updateArticle">Apply</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ArticlePost from "@/components/ArticlePost.vue";
import { computed, ref, onUnmounted} from "vue";

let articleKey = ref(0);
const version = ref("kjv");
const popup = ref("classic");
const theme = ref('dark');

onUnmounted(() => {
  document.getElementById('bu-popup').remove();
})

let genKey = computed(() => {
  return 'b' + articleKey.value
})

function updateArticle() {
  articleKey.value++;
  let p = document.getElementById('bu-popup')
  p.remove()
}
</script>

<style lang="less" scoped>
@import "@/css/theme.less";

#intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;

  .catch {
    text-align: center;
  }
}

#article-wrapper {
  width: 100%;
  margin-bottom: 100px; //footer

  @media @desktop {
    display: grid;
    grid-template-columns: 500px 1fr;
  }
}

#editor {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
  order: 1;

  .card {
    padding: 40px 20px;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    label {
      display: block;
      color: #404040;
      margin-top: 20px;
    }

    label:nth-of-type(1) {
      margin-top: 0;
    }

    select {
      display: block;
      width: 100%;
      height: 50px;
      outline: none;
      border: 3px solid #a6a6a6;
      padding: 10px;
      border-radius: 5px;
      margin-top: 5px;
      color: #404040;
      background: #f2f2f2;

      &:hover {
        border-color: @blue;
      }
    }

    #apply-btn {
      margin-top: 40px;
      background: @blue;
      color: white;
      border: none;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
      text-decoration: none;
      border-radius: 5px;
      width: 100%;
      padding: 10px;
      text-align: center;
      user-select: none;

      &:hover {
        background: darken(@blue, 5%);
      }
    }
  }
}
</style>
