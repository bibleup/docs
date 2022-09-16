<template>
  <section id="preview">
    <h3>Preview</h3>
    <p ref="local">John 3:16</p>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { getBuOption } from '@/js/store';
import { debounce } from '@/js/utility';
const local = ref(null);
let bibleup

onMounted(() => {
  bibleup = new BibleUp(local.value, getBuOption)
  bibleup.create()

  watch(
    getBuOption,
    debounce((newOpt) => {
      bibleup.refresh(newOpt);
    }, 500),
    { flush: 'post' }
  );
});

onBeforeUnmount(() => {
  bibleup.destroy()
})
</script>

<style lang="less" scoped>
@import '@/css/theme.less';
</style>
