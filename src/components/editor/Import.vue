<template>
  <section id="import">
    <SplitHeader class="split-header"></SplitHeader>
    <div class="option-box">
      <div>
        <textarea id="rawOptions" placeholder="false" ref="input"></textarea>
        <p>Paste the raw config options here.<br />Options will fallback to Select Options if input is invalid.</p>
      </div>
      <button class="btn-editor" @click="import_add">Import</button>
      <button class="btn-editor" :disabled="isImport === false" @click="import_remove">Remove Import</button>
    </div>
  </section>
</template>

<script setup>
import SplitHeader from '@/components/editor/SplitHeader.vue';
import { ref } from 'vue';
import { isImport, addImport } from '@/js/store';

const input = ref(null);

const import_add = () => {
  addImport(input.value.value);
};

const import_remove = () => {
  addImport();
};
</script>

<style lang="less" scoped>
@import '@/css/theme.less';
@import '@/css/editor.less';

#import {
  width: 100%;
  height: 100%;
}

.option-box {
  /* padding-left: 20px;
  padding-right: 20px; */
  margin-top: 10px;
}

.btn-editor[disabled] {
  background: #f2f2f2;
  color: #ccc;
}

.btn-editor:last-of-type {
  margin-top: 10px;
}
</style>
