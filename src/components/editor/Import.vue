<template>
  <section id="import">
    <h3>Import</h3>
    <div class="note">
      <h4>Note:</h4>
      <p>Paste a valid BibleUp option inside the input below. This won't work if the option is invalid.</p>
    </div>

    <div class="option-box">
      <div>
        <textarea id="rawOptions" v-model="getOptions.rawOptions"></textarea>
        <p>Paste the raw config options here.<br />Options will fallback to Select Options if input is invalid.</p>
      </div>
      <button class="btn-editor" @click="importOptions">{{ isImport ? 'Remove Import' : 'Import' }}</button>
    </div>
  </section>
</template>

<script setup>
import { isImport, getOptions, toggleState } from '@/js/store';

let importOptions = () => {
  toggleState('isImport');
};
</script>

<style lang="less" scoped>
@import '@/css/theme.less';
@import '@/css/editor.less';

#import {
  width: 100%;
  height: 100%;
  padding: 0;
  padding-bottom: 80px;
  padding-top: 30px;
}

.btn-editor[disabled] {
  background: gray;
}
</style>
