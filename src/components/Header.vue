<template>
  <header :class="{ active: openMenu }">
    <div id="top">
      <div id="text">
        <img width="50" height="50" id="logo" alt="BibleUp Logo" src="../assets/logo.png" />
        <h1><router-link to="/" class="btn">BibleUp</router-link></h1>
      </div>
      <div id="header-nav">
        <button id="menu-btn" class="btn2" target="_blank" @click="menuAction">Menu</button>
        <div class="btn-group">
          <a href="">Plugin and Extention</a>
          <a href="https://github.com/bibleup">Join The Community</a>
          <a href="">BibleUp Editor</a>
          <a href="https://github.com/Bibleup/bibleup">Github</a>
        </div>
      </div>
    </div>
    <div id="mobile-menu" v-show="openMenu">
      <ul>
        <li><a href="">Plugin and Extention</a></li>
        <li><a href="https://docs-v1--bibleup.netlify.app/">Documentation</a></li>
        <li><a href="https://github.com/bibleup">Join The Community</a></li>
        <li><a href="/demo">BibleUp Editor</a></li>
        <li>
          <a class="github" target="_blank" href="https://github.com/Bibleup/bibleup.js">Github</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

let openMenu = ref(false);

const menuAction = () => {
  openMenu.value = !openMenu.value;
};
</script>

<style lang="less" scoped>
@import '@/css/theme.less';

header {
  font-family: 'Rubik', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 25px 15px;
  background: white;

  &.active {
    border-bottom: 2px solid #e6e6e6;
  }

  @media @desktop {
    padding-left: 40px;
    padding-right: 40px;
  }

  #top {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  #text {
    display: flex;
    justify-content: center;
    align-items: center;

    #logo {
      width: 35px;
      height: 35px;
    }
  }

  h1 {
    font-size: 2.6rem;
    font-weight: 600;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    margin-left: 10px;
    color: @color;

    a {
      padding: 0;
      color: inherit;
    }
  }
}

#header-nav {
  #menu-btn {
    @media @lg {
      display: none;
    }
  }

  .btn-group {
    display: none;
    font-size: 1.4rem;

    a {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 7px 10px;
      min-width: 100px;
      margin-left: 20px;
      border-radius: 5px;
      &:hover {
        background: #f2f2f2;
        color: @blue;
      }
    }

    @media @lg {
      display: flex;
    }
  }
}

#mobile-menu {
  background: white;
  width: 100%;
  min-height: 200px;
  border-radius: 10px;
  margin-top: 30px;
  color: @color;

  @media @lg {
    display: none;
  }

  ul {
    width: 100%;
    padding: 0;
  }

  li {
    width: 100%;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 300px;
    border-radius: 7px;
    background: #f2f2f2;
    padding: 10px;

    &:hover {
      background: @blue;
      border-radius: 5px;
      color: white;
      font-weight: 600;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
  }

  .github {
    background: #333;
    color: white;
  }
}
</style>
