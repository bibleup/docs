<template>
  <section id="preview">
    <h3>Preview</h3>
    <p ref="local">John 3:16</p>
    <div id="preview-info" :hidden="!isPreset && !isImport">
      <span><i class="fi fi-rr-info"></i></span>
      <p>{{infoMessage}}</p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch, computed } from 'vue';
import { getBuOption, isPreset, isImport } from '@/js/store';
import { debounce } from '@/js/utility';
const local = ref(null);
let lbibleup;

const infoMessage = computed(() => {
  if (isPreset.value) {
    return 'A preset is enabled'
  } else if (isImport.value) {
    return 'An imported config is being used'
  }
})

onMounted(() => {
  lbibleup = new BibleUp(local.value, getBuOption);
  lbibleup.create();

  watch(
    getBuOption,
    debounce((newOpt) => {
      lbibleup.refresh(newOpt, true);
    }, 500),
    { flush: 'post' }
  );
});

onBeforeUnmount(() => {
  lbibleup.destroy();
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
