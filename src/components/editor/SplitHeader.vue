<template>
  <div id="split-header">
    <p>{{getScreen}}</p>
    <button ref="closeBtn" @click="close"><i class="center fi fi-rr-cross"></i></button>
  </div>
</template>

<script setup>
import {getScreen, toggleState, updateScreen} from '@/js/store'

const close = () => {
  updateScreen('Preview')
  toggleState('split', false)
}

</script>

<style lang="less">
@import '@/css/theme.less';

#split-header {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #e6e6e6;
  color: @color;
  position: sticky;
  top: 0;
  border-top: 2px solid #d9d9d9;
  border-bottom: 2px solid #d9d9d9;
  z-index: 1;

  p {
    font-weight: bold;
    font-size: 1.6rem;
  }

  button {
    font-size: 1.3rem;
    line-height: 1px;
  }
}
</style>
