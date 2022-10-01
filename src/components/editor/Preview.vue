<template>
  <section id="preview">
    <h3>Preview</h3>
    <p ref="local">John 3:16</p>
    <div id="preview-info" :hidden="!isPreset">
      <span><i class="fi fi-rr-info"></i></span>
      <p>A preset is enabled</p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { getBuOption, isPreset } from '@/js/store';
import { debounce } from '@/js/utility';
const local = ref(null);
let bibleup;

onMounted(() => {
  bibleup = new BibleUp(local.value, getBuOption);
  bibleup.create();

  watch(
    getBuOption,
    debounce((newOpt) => {
      bibleup.refresh(newOpt);
    }, 500),
    { flush: 'post' }
  );
});

onBeforeUnmount(() => {
  bibleup.destroy();
});
</script>

<style lang="less" scoped>
@import '@/css/theme.less';

#preview-info {
  display: flex;
  align-items: center;
  gap: 0 5px;
  margin-top: 5px;
  color: #a6a6a6;
  font-size: 13px;

  &[hidden] {
    display: none;
  }

  span {
    color: #a6a6a6;
  }
}
</style>
