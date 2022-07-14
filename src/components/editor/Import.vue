<template>
  <section id="import">
    <h3>Import</h3>
    <div class="note">
      <h4>Note:</h4>
      <p>
        Paste a valid BibleUp option inside the input below. This won't work if the option is invalid.
      </p>
    </div>

    <div class="option-box">
      <div>
        <textarea id="rawOptions"></textarea>
        <p>Paste the raw config options here.<br>Options will fallback to Select Options if input is invalid.</p>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@import '@/css/theme.less';
@import "@/css/editor.less";

#import {
  width: 100%;
  height: 100%;
  padding: 0;
  padding-bottom: 80px;
  padding-top: 30px;
}
</style>
