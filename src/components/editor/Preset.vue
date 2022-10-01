<template>
  <section id="preset">
    <h3>Presets</h3>
    <div class="note">
      <h4>Note:</h4>
      <p>
        Click to activate/deactivate preset.<br>
        Presets do not change select options but you can copy the code.
      </p>
    </div>
    <div class="wrapper">
      <div class="box" :class="{ active: isPreset === 'preset 1' }" @click="setActive('preset 1')">
        <p>Preset #1</p>
      </div>
      <div class="box" :class="{ active: isPreset === 'preset 2' }" @click="setActive('preset 2')">
        <p>Preset #2</p>
      </div>
      <div class="box" :class="{ active: isPreset === 'github' }" @click="setActive('github')">
        <p>Github style</p>
      </div>
      <div class="box" :class="{ active: isPreset === 'stackoverflow' }" @click="setActive('stackoverflow')">
        <p>Stackoverflow style</p>
      </div>
      <div class="box"><p>Elegant (coming soon)</p></div>
      <div class="box"><p>Minimalist (coming soon)</p></div>
    </div>
  </section>
</template>

<script setup>
import { isPreset, updateState } from '@/js/store';
import { preset } from '@/js/utility'

let setActive = (val) => {
  if (isPreset.value === val) {
    updateState('preset', false);
  } else {
    updateState('preset', val);
    updateState('buOption', preset[val])
  }
};
</script>

<style lang="less" scoped>
@import '@/css/theme.less';
@import '@/css/editor.less';

#preset {
  width: 100%;
  height: 100%;
  padding: 0;
  padding-bottom: 80px;
  padding-top: 30px;
}

.info {
  color: #4d4d4d;
}

.wrapper {
  padding: 0 15px;
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .box {
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }

    &.active {
      background: @blue;
      color: white;
    }
  }
}
</style>
