<template>
  <div class="wrapper">
    <section id="intro">
      <h1>BibleUp Demo</h1>
      <p class="catch">See BibleUp in action in the article below.</p>

      <div class="alert-box">
        <img src="@/assets/brush.svg" />
        <p>
          You can make use of the <a id="opt-link" href="#editor">options box</a> below to test for other options.
          Check the docs on how to toally customise BibleUP 🎨
        </p>
      </div>
    </section>

    <section id="article-wrapper">
      <article>
        <h1>The Free Gift Of God (Salvation)</h1>
        <p class="tag">
          <span>3 mins read</span>
          <span>salvation</span>
        </p>
        <p>
          Salvation is the permanent solution Jesus gave for our reconciliation
          back to the Father. Salvation reconciles us back to the initial
          communion and fellowship the first man lost has a result sin through
          disobedience 2Cor 5:18, Col 1:1922, Romans 5:10 Salvation breach the
          gap/ separation sin caused, and it brings us to our rightful place in
          Christ with GOD.
        </p>

        <h2>What then is SIN?</h2>
        <p>
          Sin is a willing disobedience to the will of GOD. Sin is going against
          God’s commandment, and this have great consequences which includes
          spiritual death Romans 6: 23, separation from God.
          <br />
          Isaiah 59:. But your iniquities have separated between you and your
          God, and your sins have hid his face from you, that he will not hear.
          Fellowship and communion was lost Gen 3:8. Finally the dominion we
          once had over all things was rolled over to the devil Luke 4:6
        </p>

        <h2>Where did sin originate from?</h2>
        <p>
          Adam (the first man) was the pioneer of sin Romans 5:12,14. He and eve
          disobeyed God and were sent out of the presence of God. Ever since
          then as atonement been made by animal sacrifices Lev 4:1-2000 which
          obviously wasn’t a permanent solution to reconciling the sinful nature
          of man and Holiness of God until JESUS came.
        </p>

        <h2>What must I do to be saved?</h2>
        <p>
          Out of His abundant love He freely gave us his only begotten son
          Jesus, The Rev 3:16, Romans 5:8, 3-5, matt 1: 21, Rom. 8:30, 2Cor
          5:17-18, 1tim 1:15, 1thes 1: 10, 2corinthians 5:21,’ for He had made
          him to be sin for us, who knew no sin; that we might be made the
          righteousness of God in him 2Peter4:5.’
        </p>
        <h2>Related Scriptures</h2>
        <p>Romans 5, Romans 3 & 4, Romans 2:3-5, II Corinthians 3:18</p>
      </article>

      <div id="editor">
        <div class="card">
          <label for="type">Popup Type</label>
          <select name="type">
            <option value="classic">Classic</option>
            <option value="inline">Inline</option>
            <option value="wiki">Wiki</option>
          </select>

          <label for="theme">Theme</label>
          <select name="theme">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>

          <label for="version">Bible Version</label>
          <select name="version">
            <option value="kjv">King James Version (KJV)</option>
            <option value="asv">American Standard Version (ASV)</option>
            <option value="lsv">Literal Standard Version (LSV)</option>
            <option value="web">World English Bible (WEB)</option>
          </select>

          <button id="apply-btn">Apply</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
@import "@/css/theme.less";

#intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;

  .catch {
    text-align: center;
  }
}

#opt-link {
  padding: 0;
  height: 0;
  color: #f2f2f2;
  text-decoration: underline;
}

#article-wrapper {
  width: 100%;
  margin-bottom: 100px; //footer

  @media @desktop {
    display: grid;
    grid-template-columns: 500px 1fr;
  }
}

article {
  width: 100%;
  max-width: 700px;
  color: @color;
  padding: 10px;
  order: 2;
  line-height: 1.7;

  @media @desktop {
    padding: 0 40px;
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

#editor {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
  order: 1;

  .card {
    padding: 40px 20px;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    label {
      display: block;
      color: #404040;
      margin-top: 20px;
    }

    label:nth-of-type(1) {
      margin-top: 0;
    }

    select {
      display: block;
      width: 100%;
      height: 50px;
      outline: none;
      border: 3px solid #a6a6a6;
      padding: 10px;
      border-radius: 5px;
      margin-top: 5px;
      color: #404040;

      &:hover {
        border-color: @blue;
      }
    }

    #apply-btn {
      margin-top: 40px;
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
</style>