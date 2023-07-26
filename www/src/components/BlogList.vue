<template>
     <section id="blog-section">
    <div class="card">
      <div class="card-img">
        <img
          alt="man hands with loosed shackles - photo by Pixabay"
          src="@/assets/bg1.jpg"
        >
      </div>
      <div class="card-content">
        <p class="tag">
          <span>3 mins</span>
          <span>John 3:16</span>
        </p>
        <h1 class="title">The Life Christ gives</h1>
        <p class="description">
          The promise of Eternal Life is beyond a beautiful or peaceful
          afterlife. It is the full expression of Christ's loving grace and the
          abundance of His riches freely given.
        </p>
        <a class="read-btn">Read more</a>
      </div>
    </div>

    <div class="card">
      <div class="card-img">
        <img
          alt="Photo by Luis Quintero: https://www.pexels.com/photo/group-of-people-in-stadium-3612706/"
          src="@/assets/bg2.jpg"
        >
      </div>
      <div class="card-content">
        <p class="tag">
          <span>2 mins</span>
          <span>A Poem</span>
        </p>
        <h1 class="title">The gathering of saints</h1>
        <p class="description">A Short Poem</p>
        <a class="read-btn">Read more</a>
      </div>
    </div>

    <div class="card">
      <div class="card-img">
        <img
          alt="Photo by Oleg Magni: https://www.pexels.com/photo/gray-metal-cubes-decorative-1005644/"
          src="@/assets/bg3.jpg"
        >
      </div>
      <div class="card-content">
        <p class="tag">
          <span>Customise page</span>
          <span>Style</span>
        </p>
        <h1 class="title">Customise BibleUp</h1>
        <p class="description">
          Use this editor to customise and generate BibleUp Popup styles. All
          styles can be exported.
        </p>
        <a class="read-btn">Customise</a>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@import '@/css/theme.less';

#blog-section {
  margin-top: 20px;
  text-align: left;
  font-family: "Rubik", sans-serif;

  @media @desktop {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }

  .card {
    width: 100%;
    max-width: 500px;
    margin-top: 50px;
    border-radius: 10px;
    transform: scale(0.95, 0.95);
    transition: transform 400ms;
    //border: 2px solid #ccc;

    &:hover {
      //transform: scale(.9,.9);

      .card-content {
        //padding: 10px;
      }
    }

    .card-img {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }

      height: 200px;
      border-radius: 20px;
      background: @grey;
    }

    .card-content {
      width: 90%;
      margin-top: 30px;

      .tag {
        span {
          display: inline-block;
          margin-right: 10px;
          padding: 5px 15px;
          border-radius: 20px;
          background: #f2f2f2;
        }
      }

      .title {
        color: @color;
        font-size: 2.3rem;
        margin-top: 20px;
      }

      .description {
        margin-top: 10px;
        color: #404040;
      }
    }

    .read-btn {
      display: block;
      background: @blue;
      color: white;
      margin-top: 30px;

      &:hover {
        background-color: darken(@blue, 5%);
      }
    }
  }
}
</style>