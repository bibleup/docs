<template>
    <header>
      <h1><router-link to="/" class="btn">BibleUp</router-link></h1>
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
   padding: 20px;

   @media @desktop {
    padding-left: 40px;
    padding-right: 40px;
  }
   
   h1 {
     font-size: 2.6rem;
     font-weight: 600;
     font-family: 'Rubik', sans-serif;
     font-weight: 500;
     color: @color;

     a {
       padding: 0;
       color: inherit;
     }
   }
}
</style>