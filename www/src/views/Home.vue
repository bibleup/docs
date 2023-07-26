<template>
  <div id="header-content">
    <div id="main">
      <h1>Convert Bible References On A Web Page To Accessible Popovers</h1>
      <p class="catch">
        BibleUp is a configurable web tool that transforms plain Bible references on a webpage into hyperlinks with
        accessible Popovers.
      </p>

      <div class="btn-grp">
        <a href="/docs">Get Started</a>
        <router-link to="/demo" class="grad">See Demo <i class="fi fi-rr-magic-wand"></i></router-link>
      </div>

      <div class="check-feat">
        <p><i class="icon fi fi-rr-plus"></i> Wordpress Plugin</p>
        <p><i class="icon fi fi-rr-plus"></i> Browser Extention</p>
      </div>
    </div>

    <div id="header-image">
      <div id="dummy-img"><img src="@/assets/popover.jpg" alt="BibleUp reference tagger popup" /></div>
    </div>
  </div>

  <div id="try">
    <h1>Quick Demo</h1>
    <p>Hover or click on the references below</p>
    <p id="try-ref">
      <span ref="try1">2 Corinthians 5:17</span>, <span ref="try2">Romans 10:9-10</span>,
      <span class="icon-ref" ref="try3">John 3:16,30</span>
    </p>
  </div>

  <section id="feature">
    <!-- <h1>Features</h1> -->

    <div class="wrapper">
      <div class="box">
        <i class="fi fi-rr-link-alt icon"></i>
        <h1>Easy Integration</h1>
        <p>
          Easily integrate BibleUp into your custom website or blog with no coding experience or technical overhead.
        </p>
      </div>

      <div class="box">
        <i class="fi fi-rr-paint-roller icon"></i>
        <h1>Customisation</h1>
        <p>
          Customise Bible links and popover as much as you want. Style according to your site theme using the API or
          online 'editor'
        </p>
      </div>

      <div class="box">
        <i class="fi fi-rr-dashboard icon"></i>
        <h1>Performant</h1>
        <p>BibleUp reference tagging is performant and fast. The package size is approximately 10kb (gzipped).</p>
      </div>

      <div class="box">
        <i class="fi fi-rr-book-open-reader icon"></i>
        <h1>Accessibility</h1>
        <p>BibleUp follows the WAI-ARAI accessibility guidelines for screen readers and keyboard navigation.</p>
      </div>
    </div>
  </section>

  <section id="snippet">
    <div class="info">
      <h1>Tweak To Your Taste</h1>
      <p class="info">
        Bibleup makes it easy to tweak available features to fit your website, re-build from source or add custom
        features.
      </p>
    </div>

    <div class="img-wrapper">
      <img src="../assets/snippet1.svg" alt="BibleUp tagger code snippet" width="100%" />
    </div>
  </section>

  <section id="community">
    <h1>Community Driven</h1>
    <p class="info">
      Enjoy the merit of open source and rapid development. Contributions are allowed from everyone and anyone.
    </p>

    <div id="soon">
      <div class="box">
        <h3>4</h3>
        <p>Bible versions</p>
        <p class="tag">More to come</p>
      </div>

      <div class="box down">
        <img src="@/assets/github.svg" />
        <p>Github</p>
        <p class="tag">Open source</p>
      </div>

      <div class="box">
        <img src="@/assets/wordpress.svg" />
        <p>WordPress</p>
        <p class="tag">Plugin 🔌</p>
      </div>

      <div class="box">
        <img src="../assets/chrome-store.svg" />
        <p>Extension</p>
        <p class="tag">Add-ons 📦</p>
      </div>
    </div>
  </section>

  <section id="partners">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="rgba(0,0,0,0.2)"
        d="M41.2,-63.6C54.7,-55.4,67.8,-46.2,75,-33.4C82.1,-20.6,83.2,-4.3,81.3,11.9C79.3,28.2,74.4,44.2,64.8,57.4C55.3,70.5,41,80.8,24.9,86.2C8.8,91.6,-9.2,92.2,-23.6,85.6C-38,79,-48.8,65.3,-59.6,52.1C-70.3,38.8,-81.1,26,-85.7,10.8C-90.3,-4.5,-88.8,-22.2,-82.3,-38C-75.7,-53.8,-64.1,-67.7,-49.5,-75.4C-34.9,-83.2,-17.5,-84.7,-1.8,-81.9C13.8,-79.1,27.7,-71.8,41.2,-63.6Z"
        transform="translate(100 100)"
      />
    </svg>
    <h1>Used by</h1>
    <p>
      If you use BibleUp on yor website or blog, kindly send us a message with your web address so we can feature it
      right here!
    </p>
    <button>
      <a href="#contact"><i class="fi fi-rr-plus icon"></i></a>
    </button>
  </section>

  <section id="sponsors">
    <h1>Credits & Sponsors</h1>
    <p class="info">BibleUp is free, supported and backed by these amazing organisations</p>
    <div class="wrapper">
      <a href=""><img src="../assets/api-bible-logo.svg" alt="api.bible" width="150" height="70" /></a>
    </div>
  </section>

  <section id="faq">
    <h1>FAQ</h1>
    <p class="info">Frequently Asked Questions</p>

    <div class="wrapper">
      <details>
        <summary>How does this work?</summary>
        <p class="catch">
          BibleUp searches for all plain Bible references on a page and transforms each one to a link. Hovering or
          clicking on these links will make the Bible text accessible via a feature-rich and flexible popover.<br /><br />At
          its core, BibleUp is a blend of internal API and a display interface.<br />
          Read the introduction <a href="/docs">here</a> for an in-depth explanation.
        </p>
      </details>

      <details>
        <summary>What makes BibleUp different from other tools</summary>
        <p class="catch">
          There are quite a few tools like BibleUp. We particularly know of FaithLife Reftagger (awesome!).
          <br /><br />However, BibleUp reference tagging brings lots of improvements and flexibility and also leverages
          on community development.
        </p>
      </details>

      <details>
        <summary>Is this Free?</summary>
        <p class="catch">
          BibleUp is <b>FREE</b> to use, <b>FOREVER.</b><br /><br />There is, however a clause on distribution and
          modification. See our licence for these clauses to use without infringement.
        </p>
      </details>

      <details>
        <summary>How can I support</summary>
        <p class="catch">
          <b>You can help to support by sharing!</b><br /><br />
          Contribute to the project on Github and help spread the word to bloggers and publishers alike. You can also
          send a feedback for improvements.
        </p>
      </details>
    </div>
  </section>

  <section id="contact">
    <h1>Contact BibleUp</h1>
    <p class="info">
      Have an awesome review to share with us? <br />
      want to cheer us on?
    </p>
    <p class="note info">For issues, bugs or feature requests, <a href="https://bibleup.canny.io/">check here</a> instead</p>

    <form name="feedback" method="post" id="contact-form" netlify>
      <input type="hidden" name="form-name" value="feedback" />
      <input name="email" placeholder="Email" type="email" />
      <input name="website" placeholder="Website (optional)" type="url" />
      <textarea required name="details" placeholder="Details" type="text"></textarea>
      <input id="submit-btn" type="submit" />
    </form>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
let try1 = ref(null);
let try2 = ref(null);
let try3 = ref(null);
let bibleup_try1;
let bibleup_try2;
let bibleup_try3;

onMounted(() => {
  bibleup_try1 = new BibleUp(try1.value);
  bibleup_try2 = new BibleUp(try2.value, {
    popup: 'inline',
    version: 'ASV',
    darkTheme: true,
    styles: {
      boxShadow: '10px -10x',
      borderRadius: '10px',
    },
  });
  bibleup_try3 = new BibleUp(try3.value, {
    popup: 'inline',
    bu_id: 'icon',
  });
  // create all
  bibleup_try1.create();
  bibleup_try2.create();
  bibleup_try3.create();
});

onBeforeUnmount(() => {
  bibleup_try1.destroy();
  bibleup_try2.destroy();
  bibleup_try3.destroy();
});
</script>

<!-- global styles -->
<style lang="less">
.bu-link-icon::after {
  content: '';
  -webkit-mask: url(../assets/comment.svg) no-repeat 50% 50%;
  mask: url(../assets/comment.svg) no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
  display: inline-block;
  background-color: purple;
  height: 12px;
  width: 12px;
  margin: 0 4px;
  margin-bottom: 0px;
}

.bu-link-icon {
  color: gold;
}

#bu-popup-icon {
  background: linear-gradient(rgba(72, 0, 72, 0.5), rgba(192, 72, 72, 0.5)), url(../assets/popup_bg2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
}
</style>

<style lang="less" scoped>
@import '@/css/theme.less';

a {
  color: inherit;
  color: #3174ec;
}

section {
  padding: 20px;
  font-family: 'Rubik', sans-serif;

  h1 {
    font-size: 2.5rem;
    color: @color;
  }

  .info {
    color: @grey;
    margin-top: 5px;
  }
}

#header-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: @color;
  padding: 30px 20px;
  background: white;

  @media @lg {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 50px 40px;
  }

  #main {
    width: 100%;
    //text-align: center;
    flex-grow: 1;
    max-width: 650px;
    justify-self: center;

    @media @lg {
      text-align: left;
    }
  }

  #note {
    display: inline-block;
    width: auto;
    padding: 6px 15px;
    background: #f5f5f5;
    border: 3px solid transparent;
    background-image: linear-gradient(#f5f5f5, #f5f5f5), linear-gradient(315deg, #f39f86 0%, #f9d976 74%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    color: #404040;
    border-radius: 5px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    padding-right: 10px;

    @media @lg {
      font-size: 3rem;
    }
  }

  .catch {
    margin-top: 15px;
  }

  #header-image {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;

    @media @lg {
      padding: 0 50px;
      margin: 0;
    }

    #dummy-img {
      width: 100%;
      max-width: 400px;
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .btn-grp {
    margin-top: 30px;
    width: 100%;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media @lg {
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
    }

    a {
      display: inline-block;
      text-decoration: none;
      color: white;
      border-radius: 5px;
      width: 100%;
      max-width: 300px;
      padding: 10px;
      background: @blue;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      transition: background 200ms;
      outline: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;

      @media @lg {
        max-width: 200px;
      }

      &:hover {
        background-color: darken(@blue, 5%);
      }
    }

    .grad {
      position: relative;
      z-index: 1; /* matters! */
      background-color: #f39f86;
      background-image: linear-gradient(to right bottom, #f9d976 0%, #f39f86 74%);
      color: @dark-blue2;
      transition: background-image 1s linear;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to left bottom, #f9d976 0%, #f39f86 74%);
        border-radius: 5px;
        opacity: 0;
        transition: opacity 0.4s;
        z-index: -1;
      }

      &:hover {
        &::before {
          opacity: 1;
        }
      }
    }
  }

  .check-feat {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 15px;
    font-size: 1.3rem;
    margin-top: 15px;
    color: #808080;

    p {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .icon {
      height: 100%;
      margin-right: 10px;
      justify-self: center;
      line-height: 0.3px;
      font-size: 1.25rem;
    }

    @media @lg {
      justify-content: flex-start;
      align-items: flex-start;
      padding-left: 2px;
    }
  }
}

#try {
  width: 100%;
  background: #f2f2f2;
  border-top: 2px solid #dedede;
  border-bottom: 2px solid #dedede;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;

  h1 {
    font-size: 1.8rem;
    color: #404040;
  }

  p {
    color: @grey;
    margin-top: 5px;
  }

  #try-ref {
    width: 90%;
    text-align: center;
    margin-top: 10px;
  }
}

#feature {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wrapper {
    padding: 0 15px;
    @media @desktop {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: center;
      grid-column-gap: 30px;
    }

    @media @lg {
      grid-template-columns: auto auto auto;
    }
  }

  .box {
    margin-top: 20px;
    border-radius: 10px;
    padding: 15px 0;

    @media @desktop {
      max-width: 350px;
    }

    .icon {
      width: 40px;
      height: 40px;
      background: @blue;
      color: white;
      border-radius: 5px;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.8rem;
    }

    h1 {
      font-size: 2rem;
      color: #2a353c;
      margin-top: 10px;
    }

    p {
      margin-top: 5px;
      color: @grey;
    }
  }
}

#snippet {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media @desktop {
    flex-direction: row;
    gap: 0 25px;
    margin-bottom: 60px;
  }

  .info {
    height: 100%;
    max-width: 400px;
  }

  .img-wrapper {
    width: 100%;
    max-width: 500px;
    margin-top: 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    }
  }
}

#community {
  padding: 20px;
  margin-top: 30px;

  @media @desktop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  #soon {
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 20px;

    @media @desktop {
      display: grid;
      grid-template-columns: repeat(2, 300px);
      justify-content: center;
    }

    .box {
      flex: 50%;
      width: 100%;
      max-width: 150px;
      height: 150px;
      padding: 10px;
      margin-top: 20px;
      border-radius: 15px;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;

      h3 {
        font-size: 3.8rem;
        font-weight: 700;
        padding: 0;
        transform: scale(1.3, 1.3);
        background-color: #3174ec;
        background: linear-gradient(225deg, #3b4371, #f3904f);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      img {
        width: 55px;
        height: 55px;
      }

      p {
        font-size: 1.6rem;
      }

      .tag {
        bottom: 0;
        z-index: 1;
        padding: 3px 10px;
        border-radius: 20px;
        font-size: 1.3rem;
        background-color: #f39f86;
        background-image: linear-gradient(315deg, #f39f86 0%, #f9d976 74%);
      }
    }
  }
}

#partners {
  padding: 15px;
  background-color: #4884ee;
  //background: -webkit-linear-gradient(315deg, #3e8ede 0%, #4884ee 74%);
  background: linear-gradient(160deg, #3b4371, #f3904f);
  border-radius: 20px;
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 50px;
  color: white;
  position: relative;
  overflow: hidden;

  @media @desktop {
    text-align: center;
    p {
      padding: 0 100px;
    }
  }

  svg {
    position: absolute;
    bottom: -90px;
    right: -20px;
    width: 150px;
    height: 150px;
  }

  h1 {
    font-size: 2.8rem;
    color: white;
  }

  p {
    margin-top: 5px;
  }

  button {
    margin-top: 15px;
    width: 45px;
    height: 45px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 1);

    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 2px;
      font-size: 2rem;
    }
  }
}

#sponsors {
  margin-top: 50px;
  @media @desktop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .wrapper {
    opacity: 1;
  }
}

#faq {
  margin-top: 20px;
  -webkit-text-size-adjust: 100%;

  @media @desktop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    color: @grey;
  }

  .wrapper {
    width: 100%;
    max-width: 700px;
    margin-top: 10px;

    details {
      width: 100%;
      margin-top: 20px;

      .catch {
        text-align: left;
        margin-top: 15px;
      }

      & > summary::-webkit-details-marker {
        display: none;
      }

      summary {
        list-style: none;
        margin-top: 10px;
        background: #f2f2f2;
        padding: 10px 35px;
        border-radius: 5px;
        position: relative;
        user-select: none;
        cursor: pointer;

        &:before {
          content: '';
          //display: block;
          border-width: 0.7rem;
          border-style: solid;
          border-color: transparent transparent transparent @grey;
          position: absolute;
          top: 1.3rem;
          left: 1.5rem;
          transform: rotate(0);
          transform-origin: 0.2rem 50%;
          transition: 0.25s transform ease;
        }
      }

      &[open] > summary:before {
        transform: rotate(90deg);
      }

      &[open] > summary {
        background: #f2f2f2;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      }

      p {
        padding: 0 15px;
      }
    }
  }
}

#contact {
  margin-top: 30px;

  @media @desktop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .note {
    border-left: 6px solid rgb(252, 203, 56);
    color: #808080;
    padding: 0px 10px;
    margin-top: 10px;

    a {
      color: inherit;
      text-decoration: underline;
    }
  }
}

#contact-form {
  width: 100%;
  max-width: 500px;
  margin-top: 30px;

  input,
  textarea {
    display: block;
    width: 100%;
    height: 60px;
    outline: none;
    border: 3px solid #a6a6a6;
    padding: 10px;
    border-radius: 5px;
    margin-top: 15px;

    &:hover {
      border-color: @blue;
    }
  }

  textarea {
    height: 150px;
  }

  #submit-btn {
    margin-top: 20px;
    background: @blue;
    color: white;
    border: none;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    cursor: pointer;

    &:hover {
      background-color: darken(@blue, 5%);
    }
  }
}
</style>
