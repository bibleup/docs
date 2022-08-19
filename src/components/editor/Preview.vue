<template>
  <section id="preview">
    <h3>Preview</h3>
    <p ref="local">John 3:16</p>
  </section>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { getBuOption } from '@/js/store';
import { debounce } from '@/js/utility';

const local = ref(null);

onMounted(() => {
  let bu = new BibleUp(local.value, getBuOption)
  bu.create()

  watch(
    getBuOption,
    debounce((newOpt) => {
      bu.refresh(newOpt);
    }, 500),
    { flush: 'post' }
  );
});
</script>

<style lang="less" scoped>
@import '@/css/theme.less';
</style>
