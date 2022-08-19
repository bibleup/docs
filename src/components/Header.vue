<template>
    <header>
      <div id="text">
        <img width="50" height="50" id="logo" alt="BibleUp Logo" src="../assets/logo.png">
        <h1><router-link to="/" class="btn">BibleUp</router-link></h1>
      </div>
      <div class="github">
        <a class="btn2" target="_blank" href="https://github.com/Bibleup/bibleup.js">
          <span>Github</span>
        </a>
      </div>
  </header>
</template>

<script setup>
</script>

<style lang='less' scoped>
@import '@/css/theme.less';

header {
  font-family: "Rubik", sans-serif;
   display: flex;
   justify-content: space-between;
   align-content: center;
   padding: 25px 20px;
   background: white;

   @media @desktop {
    padding-left: 40px;
    padding-right: 40px;
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
</style>