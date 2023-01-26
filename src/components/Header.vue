<template>
  <div id="banner" ref="banner">
    <div class="info">
      <p>BibleUp is now in <b>version 1.0</b> 💡</p>
      <a class="go-btn"><i class="fi fi-rr-arrow-small-right"></i></a>
    </div>
    <button ref="close-btn" @click="removeBanner"><i class="fi fi-rr-cross-small"></i></button>
  </div>

  <header :class="{ active: openMenu }">
    <div id="top">
      <div id="text">
        <img width="50" height="50" id="logo" alt="BibleUp Logo" src="../assets/logo.png" />
        <h1><router-link to="/" class="btn">BibleUp</router-link></h1>
      </div>

      <div id="header-nav">
        <button id="menu-btn" class="btn2" target="_blank" @click="menuAction">Menu</button>
        <div class="btn-group">
          <a href="https://bibleup.netlify.app/docs#plugin-and-browser-extension">Plugin and Extention</a>
          <a href="https://github.com/bibleup">Join The Community</a>
          <router-link to="/demo/editor">BibleUp Editor</router-link>
          <a href="https://github.com/Bibleup/bibleup">Github</a>
        </div>
      </div>
    </div>

    <div id="mobile-menu" v-show="openMenu">
      <ul>
        <li><a href="https://bibleup.netlify.app/docs#plugin-and-browser-extension">Plugin and Extention</a></li>
        <li><a href="https://docs-v1--bibleup.netlify.app/">Documentation</a></li>
        <li><a href="https://github.com/bibleup">Join The Community</a></li>
        <li><router-link to="/demo/editor">BibleUp Editor</router-link></li>
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
let banner = ref(null)

const menuAction = () => {
  openMenu.value = !openMenu.value;
};

const removeBanner = () => {
  banner.value.style.display = 'none'
}
</script>

<style lang="less" scoped>
@import '@/css/theme.less';

#banner {
  padding: 10px;
  min-height: 50px;
  font-size: 1.5rem;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-content: center;
  justify-items: center;
  background-color: @blue;
  background: #f3904f; /* fallback for old browsers */
  background: linear-gradient(
    102deg,
    #3b4371,
    #3b4371,
    #f3904f
  );

  color: #fff;

  .info {
    display: flex;
    align-items: center;
  }

  .go-btn {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    vertical-align: middle;
    background: rgba(255, 255, 255, 0.2);
    width: 40px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    line-height: 0.95;
    border-radius: 100px;

    i {
      margin-top: 2px;
    }
  }

  button {
    display: none;
    font-size: 2.4rem;
    line-height: 0;
    background: rgba(255, 255, 255, 0.2);
    height: 100%;
    border-radius: 5px;
  }
}

header {
  font-family: 'Rubik', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
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
    }
  }

  .github {
    background: #333;
    color: white;
  }
}
</style>
