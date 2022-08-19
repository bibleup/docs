<template>
  <section id="editor">
    <div id="container">
      <header>
        <h1>BibleUp Editor</h1>
        <button @click="toggleState('editor')">
          <i class="center fi fi-rr-cross"></i>
        </button>
      </header>

      <div class="body">
        <div id="tab">
          <button id="split-btn" :class="{ active: isSplit }" @click="toggleState('split')">
            <i class="fi fi-rr-eye center"></i>
          </button>
          <button :class="{ active: getScreen === 'preview' }" @click="updateScreen('preview')">Preview</button>
          <button :class="{ active: getScreen === 'select' }" @click="updateScreen('select')">Select Options</button>
          <button :class="{ active: getScreen === 'import' }" @click="updateScreen('import')">Import</button>
          <button :class="{ active: getScreen === 'preset' }" @click="updateScreen('preset')">Presets</button>
          <button :class="{ active: getScreen === 'copy' }" @click="updateScreen('copy')">Copy</button>
        </div>

        <div id="split-screen" :class="{ active: isSplit }">
          <Preview class="screen" v-show="isSplit || getScreen === 'preview'"></Preview>
          <SelectOptions class="screen" v-show="getScreen === 'select'"></SelectOptions>
          <Import class="screen" v-show="getScreen === 'import'"></Import>
          <Preset class="screen" v-show="getScreen === 'preset'"></Preset>
          <Copy class="screen" v-show="getScreen === 'copy'"></Copy>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import SelectOptions from "@/components/editor/SelectOptions.vue"
import { updateScreen, toggleState, isSplit, getScreen} from "@/js/store"
import Preview from "./editor/Preview.vue"
import Import from "./editor/Import.vue"
import Preset from "./editor/Preset.vue"
import Copy from "./editor/Copy.vue"

</script>

<style lang="less" scoped>
@import "@/css/theme.less";

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
    background: wheat;

    @media @desktop {
      width: 80%;
      height: 80%;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }

  header {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ccc;
    padding: 15px;
    color: @color;
    h1 {
      font-size: 2.5rem;
    }

    i {
      font-size: 1.6rem;
      background: #f2f2f2;
      padding: 10px;
      border-radius: 20px;
    }
  }
}

.body {
  //margin-top: 90px;
  padding-top: 80px;
  width: 100%;
  height: 100%;
}

#tab {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  margin-top: 10px;
  padding-right: 15px;

  button {
    flex: 0 0 auto;
    margin-left: 10px;
    padding: 5px 10px;
    background: #f2f2f2;
    border-radius: 10px;

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
  }
}

#split-screen {
  height: 100%;
  margin-top: 10px;

  &.active {
    display: grid;
    grid-template-rows: 30% 1fr;

    @media @lg {
      grid-template-rows: none;
      grid-template-columns: 50% 1fr;
    }

    #preview {
      border-bottom: 2px solid #ccc;

      @media @lg {
        border-right: 2px solid #ccc;
      }
    }
  }
}

.screen {
  padding: 15px;
  color: @color;
  overflow: auto;
  padding-bottom: 60px;
}
</style>