<template>
  <section id="editor">
    <div id="container">
      <header>
        <h1>BibleUp Editor</h1>
        <div @click="toggleState('editor')">
          <i class="center fi fi-rr-cross"></i>
        </div>
      </header>
      <div class="body">
        <div id="tab">
          <button id="split-btn" :class="{ active: isSplit }" @click="toggleState('split')">
            <i class="fi fi-rr-eye center"></i>
          </button>
          <button :class="{ active: ifScreen('preview') }" @click="updateScreen('preview')">Preview</button>
          <button :class="{ active: ifScreen('select') }" @click="updateScreen('select')">Select Options</button>
          <button :class="{ active: ifScreen('import') }" @click="updateScreen('import')">Import</button>
          <button :class="{ active: ifScreen('preset') }" @click="updateScreen('preset')">Presets</button>
          <button :class="{ active: ifScreen('copy') }" @click="updateScreen('copy')">Copy</button>
        </div>
        <div id="split-screen" :class="{ active: isSplit }">
          <div id="preview" class="screen" v-show="isSplit || ifScreen('preview')">
            <h3>Preview</h3>
            <p>John 3:16</p>
          </div>
          <SelectOptions class="screen" v-show="ifScreen('select')"></SelectOptions>
          <div id="import" class="screen" v-show="ifScreen('import')">
            <h3>Import</h3>
          </div>
          <div id="presets" class="screen" v-show="ifScreen('preset')">
            <h3>presets</h3>
          </div>
          <div id="copy" class="screen" v-show="ifScreen('copy')">
          <h3>Copy Generated options</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SelectOptions from "@/components/SelectOptions.vue"
import {
  updateScreen,
  updateOption,
  toggleState,
  isSplit,
  getScreen,
  getOptions
} from "@/js/store"

let ifScreen = (screen) => {
  return getScreen.value === screen
}

let closeEditor = () => {

}

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