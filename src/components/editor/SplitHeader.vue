<template>
  <div id="split-header">
    <p>{{getScreen}}</p>
    <button ref="closeBtn" @click="close"><i class="center fi fi-rr-cross"></i></button>
  </div>
</template>

<script setup>
import {getScreen, updateScreen} from '@/js/store'

const close = () => {
  updateScreen('Preview')
}

</script>

<style lang="less">
@import '@/css/theme.less';

#split-header {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #f2f2f2;
  color: @color;
  position: sticky;
  top: 0;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  z-index: 1;

  p {
    font-weight: bold;
    font-size: 1.6rem;
  }

  button {
    font-size: 1.3rem;
  }
}
</style>
