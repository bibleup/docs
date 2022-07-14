<template>
  <section id="preset">
    <h3>Presets</h3>
    <div class="wrapper">
      <div class="box active"><p>Preset #1</p></div>
      <div class="box"><p>Preset #2</p></div>
      <div class="box"><p>Github style</p></div>
      <div class="box"><p>Stackoverflow style</p></div>
      <div class="box"><p>Elegant</p></div>
      <div class="box"><p>Minimal and outer border</p></div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@import '@/css/theme.less';
@import "@/css/editor.less";

#preset {
  width: 100%;
  height: 100%;
  padding: 0;
  padding-bottom: 80px;
  padding-top: 30px;
}

.wrapper {
  padding: 0 15px;
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .box {
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }

    &.active {
        background: @blue;
        color: white;
    }
  }
}
</style>
