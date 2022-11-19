<template>
  <article>
    <div id="post-details">
      <img id="post-image" alt="man hands with loosed shackles - photo by Pixabay" src="@/assets/bg1.jpg" />
      <p class="tag">
        <span>Customise page</span>
        <span>Style</span>
      </p>
      <h1 class="title">The Life Christ gives</h1>

      <p class="description">
        The promise of Eternal Life is beyond a beautiful or peaceful afterlife. It is the full expression of Christ's
        loving grace — the abundance of His riches freely given.
      </p>
    </div>

    <div id="post-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae finibus ipsum, et ultrices felis. Nullam a diam
      congue, vulputate sapien et, vehicula nibh. In hac habitasse platea dictumst. Suspendisse suscipit velit felis, eu
      convallis urna posuere ut. Cras et scelerisque mi. Nam id est felis. Vivamus at pharetra augue. Proin dapibus
      dictum diam sit amet condimentum. Duis cursus elementum erat, vitae condimentum dui fringilla sed. Sed condimentum
      metus at ipsum aliquam, nec congue magna porttitor. Donec convallis iaculis odio, eget scelerisque orci dapibus
      quis.
      <br /><br />
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam facilisis
      lorem id est tincidunt ultricies. Phasellus non pulvinar justo. Donec eleifend hendrerit semper. In et massa
      imperdiet, volutpat ligula at, commodo metus. Vivamus eget pretium tortor. Mauris facilisis porta pretium. Sed
      justo ex, molestie mattis tempus at, aliquam quis elit. Aliquam id tempor orci, id pellentesque mi. Vestibulum vel
      diam id ex ornare consectetur et eget augue. Integer dictum sodales ipsum, sed viverra tellus imperdiet at. Sed
      consequat malesuada massa id tincidunt. Nam sodales nunc id blandit elementum. Vestibulum in rutrum tortor, in
      venenatis magna.
      <br /><br />
      Aenean sollicitudin, orci maximus convallis bibendum, ante sapien accumsan mauris, ut consectetur erat libero in
      erat. Suspendisse at gravida purus, quis facilisis tellus. Mauris porttitor, libero at hendrerit mollis, libero mi
      rhoncus nisi, nec pharetra velit tellus eget turpis. Ut maximus varius dui, in mollis lectus sagittis sed. Integer
      eget scelerisque nibh. Aliquam sit amet nisl justo. Phasellus varius euismod eros. Nullam eu vestibulum dolor. Sed
      id rutrum justo, in lacinia lorem. Nullam malesuada cursus purus sit amet congue. Morbi vitae finibus sapien.
    </div>
  </article>
</template>

<script setup></script>

<style lang="less" scoped>
@import '@/css/theme.less';

article {
  font-size: 1.6rem;
  line-height: 1.6;
  padding: 20px;

  @media @desktop {
    padding: 0 40px;
  }

  #post-details {
    #post-image {
      width: 100%;
      max-width: 500px;
      height: 200px;
      border-radius: 10px;
      object-fit: cover;
    }

    .title {
      margin-top: 20px;
      color: @color;
      font-size: 2.3rem;
    }

    .description {
      margin-top: 10px;
      color: #5C5C5C;
    }

    .tag {
      margin-top: 20px;
      span {
        display: inline-block;
        margin-right: 10px;
        padding: 5px 15px;
        border-radius: 20px;
        background: #f2f2f2;
      }
    }
  }

  #post-content {
    margin-top: 60px;
    color: @color;
    line-height: 1.7;
    //font-family: "Plus Jakarta San"
  }
}
</style>
