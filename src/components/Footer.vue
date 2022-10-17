<template>
  <footer>
    <ul>
      <li><router-link to="/docs">Docs</router-link></li>
      <li><router-link to="/demo">Demo</router-link></li>
      <li><a href="https://stackblitz.com/edit/bibleup" target="_blank">Code Playground</a></li>
      <li><a href="https://github.com/Bibleup" target="_blank">Projects</a></li>
      <li><router-link to="/">Jesus Forever</router-link> ❤️</li>
    </ul>
    <p id="copyright">Copyright ©️ 2022 BibleUp</p>
  </footer>
</template>

<script setup></script>

<style lang="less" scoped>
@import "@/css/theme.less";

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  padding-bottom: 20px;
  font-size: 1.5rem;
  margin-top: 50px;
  border-top: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(315deg, #f39f86 0%, #f9d976 74%);

  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    margin: 10px;

    li {
      padding: 5px 15px;

      a {
        text-decoration: none;
        color: @color;
        outline: none;
        -webkit-tap-highlight-color: transparent;

        &:hover {
          text-decoration: underline;
          color: @blue;
          outline: none;
        }
      }
    }
  }

  #copyright {
    font-size: 1.3rem;
    color: @grey;
  }
}
</style>
