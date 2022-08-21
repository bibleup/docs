<template>
  <section id="copy">
    <h3>Generated Config</h3>

    <div class="option-box">
      <div>
        <textarea id="rawOptions" readonly v-model="generated" ref="textarea"></textarea>
        <p>Your generated BibleUp will be here. This input is readonly</p>
      </div>
      <button class="btn-editor" @click="toClipboard">Copy To Clipboard</button>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue"
import { generated } from "@/js/store"

let textarea = ref(null)

let toClipboard = () => {
  textarea.value.select();
  document.execCommand('copy');
}

</script>

<style lang="less" scoped>
@import '@/css/theme.less';
@import "@/css/editor.less";

#copy {
  width: 100%;
  height: 100%;
  padding: 0;
  padding-bottom: 80px;
  padding-top: 30px;
}

.option-box {
    margin-top: 10px;
}
</style>
