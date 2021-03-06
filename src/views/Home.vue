
<template>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <div id="header-content">
    <p id="note">🎉 BibleUp is currently in <b>final beta</b></p>
    <h1>Convert Bible References On A Web Page To Accessible Popovers</h1>
    <p class="catch">A Web Tool Built For Referencing The Holy Bible</p>

    <div id="dummy-img"></div>
    <div class="btn-grp">
      <a href="/docs">Get Started</a>
      <router-link to="/demo" class="grad"
        >See Demo <i class="fi fi-rr-magic-wand"></i
      ></router-link>
    </div>
  </div>

  <div id="try">
    <h1>Quick Demo</h1>
    <p>Hover or click on the references below</p>
    <p id="try-ref">2 Corinthians 5:17, Romans 10:9-10</p>
  </div>

  <section id="feature">
    <h1>Features💡</h1>

    <div class="wrapper">
      <div class="box">
        <h1>Easy Integration</h1>
        <p>
          Easily integrate BibleUp into your custom website or blog with no
          coding experience or technical overhead.
        </p>
      </div>

      <div class="box">
        <h1>Customisation</h1>
        <p>
          Customise Bible links and popover as much as you want. Style according
          to your site theme using the API or online 'editor'
        </p>
      </div>

      <div class="box">
        <h1>Performant</h1>
        <p>
          Package size is approximately 10kb (gzipped). Perfectly light weight
          and fast.
        </p>
      </div>

      <div class="box">
        <h1>Accessibility</h1>
        <p>
          BibleUp follows the WAI-ARAI accessibility guidelines for screen
          readers and keyboard navigation.
        </p>
      </div>
    </div>
  </section>

  <section id="community">
    <h1>Community Driven</h1>
    <p class="catch">
      Enjoy the merit of open source and rapid development. Contributions are
      allowed from everyone and anyone.
    </p>

    <div id="soon">
      <div class="box">
        <h3>4</h3>
        <p>Bible versions</p>
        <p class="tag">More to come</p>
      </div>

      <div class="box down">
        <img src="@/assets/github-logo.svg" />
        <p>Github</p>
        <p class="tag">Follow</p>
      </div>

      <div class="box">
        <img src="@/assets/wordpress.svg" />
        <p>WordPress</p>
        <p class="tag">Coming soon 📦</p>
      </div>
    </div>

    <div class="alert-box">
      <img src="@/assets/alert-circle.svg" />
      <p>
        BibleUp is currently under <b>active development</b>. For
        installation on WordPress sites, read the guide
        <a href="https://bibleup.netlify.app/docs/plugins">here</a> 
      </p>
    </div>
  </section>

  <section id="contact">
    <h1>Contact BibleUp</h1>
    <p class="catch">
      Have an awesome review to share with us? <br />Need help installing
      BibleUp on your website or blog or you simply want to cheer us on?
    </p>

    <form name="feedback" method="post" id="contact-form" netlify>
      <input type="hidden" name="form-name" value="feedback" />
      <input name="email" placeholder="Email" type="email" />
      <input name="website" placeholder="Website (optional)" type="url" />
      <textarea required name="details" placeholder="Details" type="text"></textarea>
      <input id="submit-btn" type="submit" />
    </form>
  </section>

  <section id="faq">
    <h1>FAQ</h1>
    <p>Frequently Asked Questions</p>

    <div class="wrapper">
      <details>
        <summary>How does this work?</summary>
        <p class="catch">
          BibleUp searches for all plain Bible references on a page and transforms
          each one to a link. Hovering or clicking on these links will make the
          Bible text accessible via a feature-rich and flexible popover.<br /><br />At
          its core, BibleUp is a blend of internal API and a display interface.<br>
          Read the introduction <a href="/docs">here</a> for an in-depth explanation.
        </p>
      </details>

      <details>
        <summary>Is this Free?</summary>
        <p class="catch">
          BibleUp is <b>FREE</b> to use, <b>FOREVER.</b><br /><br />There is,
          however a clause on distribution and modification. See our licence
          for these clauses to use without infringement.
        </p>
      </details>

      <details>
        <summary>What makes BibleUp different from other tools</summary>
        <p class="catch">
          There are quite a few tools like BibleUp. We particularly know of
          FaithLife Reftagger (awesome!). <br><br>However, BibleUp brings lots of
          improvements and flexibility and also leverages on community
          development.
        </p>
      </details>

      <details>
        <summary>How can I support</summary>
        <p class="catch">
          <b>You can help to support by sharing!</b><br /><br />
          Contribute to the project on Github and help spread the word to
          bloggers and publishers alike. You can also send a feedback for
          improvements.
        </p>
      </details>
    </div>
  </section>

  <section id="subscribe">
    <h1>Stay In Touch 📧</h1>
    <p class="catch">
      We are constantly developing awesome products!<br />
      Subscribe and don't miss out on interesting updates. We definitely won't
      spam your inbox.
    </p>

    <form name="subscribe" method="post" id="subscribe-form" netlify>
      <input type="hidden" name="form-name" value="subscribe" />
      <input name="email" placeholder="Email" type="email" required />
      <input id="subscribe-btn" type="submit" value="Subscribe" />
    </form>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  let tr = document.getElementById('try')
  let b = new BibleUp(tr)
  b.create()
})
</script>

<style lang="less" scoped>
@import "@/css/theme.less";

a {
  color: inherit;
  color: #4884ee;
}

#header-content {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: @color;
  padding: 0 20px;
  //padding-top: 20px;
  font-family: "Rubik", sans-serif;

  #note {
    padding: 5px 20px;
    background-color: @blue;
    background-image: linear-gradient(315deg, @blue2 0%, #4884ee 74%);
    color: white;
    border-radius: 5px;
  }

  h1 {
    font-size: 2.8rem;
    font-family: "Rubik", sans-serif;
    font-weight: 600;
    margin-top: 20px;
  }

  p {
    margin-top: 20px;
    color: @grey;
  }

  #dummy-img {
    width: 100%;
    max-width: 400px;
    margin-top: 40px;
    height: 200px;
    border-radius: 15px;
    background: #f2f2f2 url(@/assets/popup2.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    box-shadow: 0 0 10px 2px #ccc;
    display: none;
  }

  .btn-grp {
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;

    a {
      display: inline-block;
      text-decoration: none;
      color: white;
      border-radius: 5px;
      width: 150px;
      padding: 10px;
      margin: 0 15px;
      background: @blue;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      transition: background 200ms;

      &:hover {
        background-color: darken(@blue, 5%);
      }
    }

    .grad {
      background-color: #f39f86;
      background-image: linear-gradient(315deg, #f39f86 0%, #f9d976 74%);
      color: @dark-blue2;

      &:hover {
        background-image: linear-gradient(315deg, #f9d976 0%, #f39f86 74%);
      }
    }
  }
}

#try {
  width: 100%;
  background: #f2f2f2;
  //color: white;
  margin-top: 30px;
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
    font-size: 1.6rem;
    color: @grey;
    margin-top: 5px;
  }

  #try-ref {
    margin-top: 15px;
  }
}

#feature {
  width: 100%;
  margin-top: 40px;
  font-family: "Rubik", sans-serif;
  //background: red;

  .wrapper {
    @media @desktop {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: center;
      grid-column-gap: 30px;
    }
  }

  .box {
    margin-top: 30px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px, 0 0 0 2px #d9d9d9;
    transition: box-shadow 400ms;
    padding: 15px;
    height: 160px;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 20px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }

    h1 {
      font-size: 2rem;
      color: #666666;
    }

    p {
      margin-top: 5px;
      color: @grey;
    }
  }
}

#community {
  padding: 50px 20px;
  margin-top: 20px;
  font-family: "Rubik", sans-serif;

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
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
    }

    .box {
      width: 150px;
      height: 150px;
      padding: 10px;
      margin-top: 20px;
      border-radius: 15px;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
        rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      position: relative;

      h3 {
        font-size: 3.8rem;
        font-weight: 700;
      }

      img {
        width: 40px;
        height: 40px;
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

      .green {
        background: green;
        color: white;
      }
    }
  }
}

#contact {
  padding-top: 50px;
  font-family: "Rubik", sans-serif;

  @media @desktop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
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

    &:hover {
      background-color: darken(@blue, 5%);
    }
  }
}

#subscribe {
  padding-top: 60px;
  font-family: "Rubik", sans-serif;
  @media @desktop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

#subscribe-form {
  width: 100%;
  max-width: 500px;
  margin-top: 30px;
  margin-bottom: 70px; //footer

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

  #subscribe-btn {
    margin-top: 20px;
    background: @blue;
    color: white;
    border: none;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

    &:hover {
      background-color: darken(@blue, 5%);
    }
  }
}

#faq {
  margin-top: 50px;
  -webkit-text-size-adjust: 100%;
  font-family: "Rubik", sans-serif;

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
    margin-top: 20px;

    details {
      width: 100%;
      margin-top: 20px;

      .catch {
        text-align: left;
      }

      summary {
        list-style: none;
        margin-top: 10px;
        background: #f2f2f2;
        padding: 10px 35px;
        border-radius: 10px;
        position: relative;
        user-select: none;
        cursor: default;

        &:before {
          content: "";
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
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      }

      p {
        padding: 0 15px;
      }
    }
  }
}
</style>
