<!-- NotFound.vue -->
<template>
  <section id="not-found">
    <p id="code">404</p>
    <div>
      <P class="text">
        God sent his Son into the world not to judge the world, but to save the
        world through him.<br />
        <a href="https://www.compellingtruth.org/give-life-to-God.html" target="_blank">Choose Jesus</a>
      </p>
    </div>

    <router-link class="btn" id="home-btn" to="/">Home Page</router-link>
  </section>
</template>

<style lang="less" scoped>
@import "@/css/theme.less";

#not-found {
  min-height: 100%;
  min-height: calc(~"100vh - 240px");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  #code {
    font-size: 5rem;
    font-weight: 600;
    color: #4d4d4d;
  }

  .text {
    margin-top: 10px;
    font-size: 1.7rem;
    color: #8c8c8c;

    a {
      padding: 0;
      text-decoration: underline;
      color: inherit;
    }
  }

  #home-btn {
    margin-top: 30px;
    background: @blue;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

    &:hover {
      background: darken(@blue, 5%);
    }
  }
}
</style>