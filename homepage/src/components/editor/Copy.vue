<template>
  <section id="copy">
    <SplitHeader class="split-header"></SplitHeader>
    <div class="option-box">
      <div>
        <textarea id="rawOptions" readonly v-model="stringify_buOption" ref="textarea"></textarea>
        <p>Your generated BibleUp will be here. This input is readonly</p>
      </div>
      <button class="btn-editor" @click="toClipboard">Copy To Clipboard</button>
    </div>
  </section>
</template>

<script setup>
import SplitHeader from '@/components/editor/SplitHeader.vue';
import { ref } from 'vue';
import { stringify_buOption } from '@/js/store';

let textarea = ref(null);

let toClipboard = () => {
  textarea.value.select();
  document.execCommand('copy');
};
</script>

<style lang="less" scoped>
@import '@/css/theme.less';
@import '@/css/editor.less';

#copy {
  width: 100%;
  height: 100%;
}

.option-box {
  margin-top: 10px;
}

textarea {
  background: #f7f7f7;
}
</style>
