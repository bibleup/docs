<template>
  <article ref="article">
    <h1>The Free Gift Of God (Salvation)</h1>
    <p class="tag">
      <span>3 mins read</span>
      <span>salvation</span>
    </p>
    <p>
      Salvation is the permanent solution Jesus gave for our reconciliation back
      to the Father. Salvation reconciles us back to the initial communion and
      fellowship the first man lost has a result sin through disobedience 2Cor
      5:18, Romans 5:10 Salvation breach the gap/separation sin caused, and it
      brings us to our rightful place in Christ with GOD.
    </p>

    <h2>What then is SIN?</h2>
    <p>
      Sin is a willing disobedience to the will of GOD. Sin is going against
      God’s commandment, and this have great consequences which includes
      spiritual death (Romans 6:23) and an inevitable separation from God.
      <br />
      Isaiah 59: "But your iniquities have separated between you and your God,
      and your sins have hid his face from you, that he will not hear".
      Fellowship and communion was lost Gen 3:8. Finally the dominion we once
      had over all things was rolled over to the devil (Luke 4:6)
    </p>

    <h2>Where did sin originate from?</h2>
    <p>
      Sin originated from the disobedience of the first man. Adam (the first
      man) was the pioneer of sin Romans 5:12,14. He and Eve disobeyed God and
      were sent out of the presence of God. Ever since then as atonement been
      made by animal sacrifices Lev 4:1-2000 which obviously wasn’t a permanent
      solution to reconciling the sinful nature of man and Holiness of God until
      JESUS came.
    </p>

    <h2>What must I do to be saved?</h2>
    <p>
      Out of His abundant love He freely gave us his only begotten son Jesus,
      The Rev 3:16, Romans 5:8, 3-5, 2 Cor 5:17-18. The only requirement needed
      for receiving the forgiveness of sins and for a new life in Christ is
      believing on the Son of God, and by confessing his name (Romans 10:9-10)
    </p>
    <h2>Related Scriptures</h2>
    <p>Romans 5, Romans 4, Romans 2:3-5, II Corinthians 3:18</p>
  </article>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps(["popup", "version", "theme", "genKey", "preset"]);
const article = ref(null);

const presetOptions = {
  preset1: {
    popup: "inline",
    darkTheme: false,
    styles: {
      primary: " #192841",
      secondary: "#192841",
      tertiary: "#7e9bcd",
      headerColor: "white",
      color: ["white", false, "white"],
      borderRadius: "12px",
      boxShadow: "5px 5px #7e9bcd",
    },
  },

  preset2: {
    popup: "classic",
    darkTheme: false,
    styles: {
      primary: "wheat",
      secondary: "wheat",
      headerColor: "#333",
      color: ["#333", "#333"],
      borderRadius: "0px",
      boxShadow: "0.3em 0.3em 0 0 #4884ee, inset 0.3em 0.3em 0 0 #4884ee",
    },
  },
};

onMounted(() => {
  if (props.genKey != "b0") {
    if (props.preset != "none") {
      window[props.genKey] = new BibleUp(article.value, {
        version: props.version,
        popup: presetOptions[props.preset].popup,
        darkTheme: presetOptions[props.preset].darkTheme,
        styles: presetOptions[props.preset].styles
      });
    } else {
      window[props.genKey] = new BibleUp(article.value, {
        version: props.version,
        popup: props.popup,
        darkTheme: props.theme == "light" ? false : true,
      });
    }

    window[props.genKey].create();
  }

  //console.log(props.genKey)
});
</script>

<style lang="less" scoped>
@import "@/css/theme.less";

article {
  width: 100%;
  max-width: 700px;
  color: @color;
  padding: 10px;
  order: 2;
  line-height: 1.7;
  margin-top: 40px;

  @media @desktop {
    padding: 0 40px;
    margin-top: 0;
  }

  h1 {
    font-size: 2.3rem;
  }

  h2 {
    font-size: 2rem;
    margin-top: 25px;
    color: #404040;
  }

  p {
    margin-top: 5px;
    color: #595959;
  }

  .tag {
    margin-bottom: 20px;
    span {
      display: inline-block;
      margin-right: 10px;
      padding: 2px 15px;
      border-radius: 20px;
      background: #f2f2f2;
    }
  }
}
</style>