<template>
    <header>
      <h1><router-link to="/" class="btn">BibleUp</router-link></h1>
      <div class="github">
        <a class="btn" target="_blank" href="https://github.com/Bibleup/bibleup.js">
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
   
  .github {
    a {
      text-decoration: none;
      color: inherit;
      width: auto;
      padding: 0;
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 5px 10px;
      background: #f6f6f6;
      
      &:hover {
        background: @blue;
        border-radius: 5px;
        color: white;
        font-weight: 600;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      }
      
      span {
        padding: 0 7px;
      }
      
      i {
        font-size: 1.7rem;
      }
    }
  }
}
</style>