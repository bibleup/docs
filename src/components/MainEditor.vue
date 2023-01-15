<template>
  <section id="editor">
    <div id="container">
      <header>
        <h1>BibleUp Editor</h1>
        <button @click="toggleState('editor')">
          <i id="close-btn" class="center fi fi-rr-cross"></i>
        </button>
      </header>

      <div class="body">
        <div id="tab">
          <button id="split-btn" :class="{ active: isSplit }" @click="toggleState('split')">
            <i class="fi fi-rr-eye center"></i>
          </button>
          <button :class="{ active: getScreen === 'Preview' }" @click="updateScreen('Preview')">Preview</button>
          <button :class="{ active: getScreen === 'Select Options' }" @click="updateScreen('Select Options')">
            Select Options
          </button>
          <button :class="{ active: getScreen === 'Import' }" @click="updateScreen('Import')">Import</button>
          <button :class="{ active: getScreen === 'Preset' }" @click="updateScreen('Preset')">Presets</button>
          <button :class="{ active: getScreen === 'Copy' }" @click="updateScreen('Copy')">Copy</button>
        </div>

        <div id="split-screen" :class="{ active: isSplit }">
          <Preview class="screen" v-show="isSplit || getScreen === 'Preview'"></Preview>
          <SelectOptions class="screen" v-show="getScreen === 'Select Options'"></SelectOptions>
          <Import class="screen" v-show="getScreen === 'Import'"></Import>
          <Preset class="screen" v-show="getScreen === 'Preset'"></Preset>
          <Copy class="screen" v-show="getScreen === 'Copy'"></Copy>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SelectOptions from '@/components/editor/SelectOptions.vue';
import { updateScreen, toggleState, isSplit, getScreen } from '@/js/store';
import Preview from './editor/Preview.vue';
import Import from './editor/Import.vue';
import Preset from './editor/Preset.vue';
import Copy from './editor/Copy.vue';
</script>

<style lang="less" scoped>
@import '@/css/theme.less';

#editor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  //max-width: 650px;
  height: 100%;
  z-index: 10;
  padding: 0;

  @media @desktop {
    box-shadow: -15px 0px 17px -7px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #container {
    position: relative;
    width: 100%;
    height: 100%;
    background: white;

    @media @desktop {
      width: 80%;
      height: 80%;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 65px;
    color: @color;
    h1 {
      font-size: 2.2rem;
    }

    button {
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: #f2f2f2;
      font-weight: bold !important;
    }

    #close-btn {
      font-size: 1.35rem;
      line-height: 1px;

      &::before {
        font-weight: bold !important;
      }
    }
  }
}

.body {
  width: 100%;
  height: 100%;
}

#tab {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  padding-right: 15px;
  padding-bottom: 10px;

  button {
    flex: 0 0 auto;
    margin-left: 10px;
    padding: 5px 10px;
    background: #f2f2f2;
    border-radius: 5px;

    &:hover {
      background: darken(#f2f2f2, 10%);
    }

    &.active {
      background: @blue;
      color: white;
    }
  }

  #split-btn {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    line-height: 1px;
  }
}

#split-screen {
  height: 100%;
  margin-top: 10px;

  &.active {
    display: grid;
    grid-template-rows: 20% 1fr;

    @media @lg {
      grid-template-rows: none;
      grid-template-columns: 50% 1fr;
    }

    #preview {
      @media @lg {
        border-right: 4px solid #e6e6e6;
      }
    }
  }
}

.screen {
  color: @color;
  overflow: auto;
  padding-bottom: 150px;
}
</style>
