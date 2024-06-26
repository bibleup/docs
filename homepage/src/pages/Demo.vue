<template>
  <div class="wrapper">
    <section id="intro" class="flex flex-col justify-center items-center">
      <h1>BibleUp Demo</h1>
      <p class="catch">See BibleUp in action in the demos below.</p>
    </section>

    <section id="interactive">
      <div ref="demo1">
        <h3>Smart reference tagging</h3>
        <p>Jn 1:1-2, 5-7, 3:16 NLT, 19</p>
        <p>Rom 1:17b AMP, 2:5-6 KJV</p>
        <p>2 Ki 5</p>
      </div>

      <div ref="demo2" class="references">
        <h3>Highly customisable</h3>
        <p>Rev 21:1-5</p>
        <p>Rom 1:17 LSV, 2:5-8 KJV</p>
        <p>2 Ki 5 (Wiki)</p>
      </div>

      <label class="switch">
        <input v-model="slider" type="checkbox" />
        <span class="slider"></span>
      </label>
    </section>

    <div class="alert-box2">
      <p>
        The following article contains plain references until BibleUp is activated. Use the
        <a href="#editor">editor</a> to configure BibleUp and see changes in real-time.
      </p>
    </div>

    <section id="article-wrapper">
      <div id="btn-group">
        <div class="wrapper">
          <button id="apply-btn" @click="openEditor()">Open Editor</button>
          <button @click="activate()">{{ isActive ? 'De-activate BibleUp' : 'Activate BibleUp' }}</button>
        </div>
      </div>

      <ArticlePost :key="articleKey" :active="isActive"></ArticlePost>
    </section>

    <router-view></router-view>
  </div>
</template>

<script setup>
import ArticlePost from '@/components/ArticlePost.vue';
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useHead } from 'unhead';
import router from '@/js/router.js';
import { isEditor } from '@/js/store';
let isActive = ref(false);
let articleKey = ref(0);
const demo1 = ref(null);
const demo2 = ref(null);
const bibleupInsatnces = [];
let slider = ref(true);

useHead({
  // Can be static or computed
  title: 'BibleUp Live Demo',
  meta: [
    {
      name: 'description',
      content: 'See how BibleUp references work and how they become interactive hyperlinks on your site. Supports Powerful and quick Bible reference tagging',
    },

  ],
});

onMounted(() => {
  bibleupInsatnces[0] = new BibleUp(demo1.value, {
    popup: 'inline',
  });
  bibleupInsatnces[0].create();

  const [p1, p2, p3] = demo2.value.querySelectorAll('p');
  bibleupInsatnces[1] = new BibleUp(p2, {
    popup: 'classic',
    styles: {
      primary: '#fde481',
      secondary: '#003973',
      headerColor: 'white',
      boxShadow: '10px -8px 0px #fcd53a',
    },
  });
  bibleupInsatnces[1].create();

  bibleupInsatnces[2] = new BibleUp(p1, {
    popup: 'inline',
    bu_id: 'custom1',
  });
  bibleupInsatnces[2].create();

  bibleupInsatnces[3] = new BibleUp(p3, {
    popup: 'wiki',
    darkTheme: true,
  });
  bibleupInsatnces[3].create();
});

onBeforeUnmount(() => {
  //const bibleupInsatnces = [b1,b2,b3,b4]
  bibleupInsatnces.forEach((element) => {
    element.destroy();
  });
});

// watch isEditor and allow scroll
watch(
  isEditor,
  (newVal) => {
    if (newVal === true) {
      document.body.style['overflow-y'] = 'hidden';
    } else {
      document.body.style['overflow-y'] = 'visible';
    }
  },
  { immediate: true }
);

watch(slider, (newVal) => {
  if (newVal === false) {
    bibleupInsatnces.forEach((element) => {
      element.destroy(false);
    });
  } else {
    bibleupInsatnces.forEach((element) => {
      element.refresh();
    });
  }
});

let openEditor = () => {
  router.push('/demo/editor');
};

let activate = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="less" scoped>
@import '@/css/theme.less';

section,
article {
  width: 100%;
  padding: 20px;

  @media @desktop {
    padding: 0 40px;
  }

  & > h1:first-of-type {
    color: @color;
    font-size: 2.8rem;
  }
}

#intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100px;

  .catch {
    margin-top: 0;
    text-align: center;
  }

  .alert-box p {
    margin: 0;
  }
}

#interactive {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 0;
  padding: 20px 40px;
  margin-top: 20px;
  color: @color;
  border-top: 2px solid #f2f2f2;
  border-bottom: 2px solid #f2f2f2;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  h3 {
    font-size: 1.8rem;
    color: @color;
  }

  p {
    color: #404040;

    &:first-of-type {
      margin-top: 5px;
    }
  }
}

.switch {
  position: absolute;
  top: 8%;
  right: 3%;
  display: inline-block;
  width: 50px;
  height: 24px;

  /* Hide default HTML checkbox */
  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + .slider {
      background-color: #3174ec;
    }

    &:focus + .slider {
      outline: 0;
    }

    &:checked + .slider:before {
      outline: 0;
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    box-shadow: none;

    &:before {
      position: absolute;
      content: '';
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.3s;
      transition: 0.3s;
    }
    /* Rounded sliders */
    &.round {
      border-radius: 34px;
    }
    &.round:before {
      border-radius: 50%;
    }
  }
}

.alert-box2 {
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  border-left: 5px solid #ccc;
  padding: 0 20px;
  color: #595959;
}

#btn-group {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .wrapper {
    position: sticky;
    top: 10%;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    padding-top: 0;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    button {
      margin-top: 20px;
      background: @blue;
      color: white;
      border: none;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
      text-decoration: none;
      border-radius: 5px;
      width: 100%;
      padding: 10px;
      text-align: center;
      user-select: none;

      &:hover {
        background: darken(@blue, 5%);
      }
    }
  }
}

#article-wrapper {
  width: 100%;
  margin-bottom: 100px; //footer
  margin-top: 50px;

  @media @lg {
    display: grid;
    grid-template-columns: 500px 1fr;
  }
}
</style>

<style lang="less">
/* for BibleUp Popup */
#bu-popup-custom1 {
  background: linear-gradient(rgba(72, 0, 72, 0.5), rgba(192, 72, 72, 0.5)), url(../assets/popup_bg1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
}
</style>
