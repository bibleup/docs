<template>
  <section id="copy">
    <h3>Copy Generated Config</h3>

    <div class="option-box">
      <div>
        <textarea id="rawOptions" readonly value=""></textarea>
        <p>Your generated BibleUp will be here. This input is readonly</p>
      </div>
      <button class="btn-copy">Copy To Clipboard</button>
    </div>
  </section>
</template>

<style lang="less" scoped>
@import '@/css/theme.less';
@import "@/css/editor.less";

#copy {
  width: 100%;
  height: 100%;
  padding: 0;
  padding-bottom: 80px;
  padding-top: 30px;
}

.option-box {
    margin-top: 10px;
}

.btn-copy {
  width: 100%;
  background: @blue;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  -webkit-tap-highlight-color: transparent;
  padding: 10px;
  text-align: center;
  user-select: none;
  margin-top: 20px;
  max-width: 500px;

  &:hover {
    background: darken(@blue, 10%);
  }
}
</style>
