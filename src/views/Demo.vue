<template>
  <div class="wrapper">
    <section id="intro" class="flex flex-col justify-center items-center">
      <h1>BibleUp Demo</h1>
      <p class="catch">See BibleUp in action in the article below.</p>

      <div class="alert-box">
        <img src="@/assets/brush.svg" />
        <p>
          The following article contains plain references until BibleUp is
          activated. Use the <a href="#editor">editor</a> to configure BibleUp
          and see changes in real-time.
        </p>
      </div>
    </section>

    <section id="article-wrapper" class="center mt-[50px]">

      <div id="btn-group">
        <div class="wrapper">
          <button id="apply-btn" @click="toggleState('editor')">Open Editor</button>
          <button>Activate BibleUp</button>
        </div>
      </div>

      <ArticlePost :key="articleKey" :popup="popup" :version="version" :theme="theme" :genKey="genKey" :preset="preset">
      </ArticlePost>
    </section>

    <MainEditor v-show="isEditor"></MainEditor>
  </div>
</template>

<script setup>
import ArticlePost from "@/components/ArticlePost.vue";
import { computed, ref, onUnmounted, watch } from "vue"
import MainEditor from "@/components/MainEditor.vue"
import { isEditor, toggleState } from "@/js/store"

let articleKey = ref(0);
const version = ref("kjv");
const popup = ref("classic");
const theme = ref("dark");
const preset = ref("none");

onUnmounted(() => {
  if (document.getElementById("bu-popup"))
    document.getElementById("bu-popup").remove();
});

watch(isEditor, (newVal) => {
  if (newVal === true) {
    document.body.style['overflow-y'] = 'hidden';
  } else {
    document.body.style['overflow-y'] = 'visible';
  }
})

let genKey = computed(() => {
  return "b" + articleKey.value;
});

function updateArticle() {
  articleKey.value++;
  let p = document.getElementById("bu-popup");
  p.remove();
}
</script>


<style lang="less" scoped>
@import "@/css/theme.less";

#intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;

  .catch {
    margin-top: 0;
    text-align: center;
  }
}

#btn-group {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .wrapper {
    position: sticky;
    top: 10%;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    padding-top: 0;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    button {
      margin-top: 20px;
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

#article-wrapper {
  width: 100%;
  margin-bottom: 100px; //footer

  @media @lg {
    display: grid;
    grid-template-columns: 500px 1fr;
  }
}
</style>
