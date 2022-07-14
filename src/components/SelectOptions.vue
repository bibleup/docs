<template>
  <div id="select-options">
    <h3>Select Options</h3>
    <div class="note">
      <h4>Note:</h4>
      <p>
        Set any option to <span>false or leave empty</span> to get the default
        value. For full documentation of these options, check the
        <span><a href="https://bibleup.netlify.app/docs" target="_blank">docs</a></span>
      </p>
    </div>

    <div class="option-wrapper">
      <div class="option-box">
        <label for="type">Popup Type: </label>
        <div>
          <select name="type" id="type">
            <option value="classic" selected>classic</option>
            <option value="inline">inline</option>
            <option value="wiki">wiki</option>
          </select>
          <p>The preferred popup type.</p>
        </div>
      </div>
      <div class="option-box">
        <label for="version">Version: </label>
        <div>
          <select name="version" id="version">
            <option value="KJV" selected>King James Version (KJV)</option>
            <option value="ASV">American Standard Version (ASV)</option>
            <option value="LSV">Literal Standard Version (LSV)</option>
            <option value="WEB">World English Bible (WEB)</option>
          </select>
          <p>The default Bible translation for references.</p>
        </div>
      </div>
      <div class="option-box">
        <label for="theme">Dark Theme: </label>
        <div>
          <div class="wrap">
            <label for="dark-true">True</label>
            <input id="dark-true" name="darkTheme" type="radio" value="true" checked>
            <label for="dark-false">False</label>
            <input id="dark-false" name="darkTheme" type="radio" value="false">
          </div>
          <p>
            Enable dark theme on popup (this can be overridden by other background
            color).
          </p>
        </div>
      </div>
    </div>

    <details>
      <summary class="option-divider">
        Popup background and colors <span>&#8250;</span>
      </summary>

      <div class="option-wrapper">
        <div class="option-box">
          <label>Primary: </label>
          <div>
            <input id="primary" type="text" maxlength="30" value="false">
            <p>Set color for overall popup background</p>
          </div>
        </div>
        <div class="option-box">
          <label>Secondary: </label>
          <div>
            <input id="secondary" type="text" maxlength="30" value="false">
            <p>Set background color for popup header (if it exists)</p>
          </div>
        </div>
        <div class="option-box">
          <label>Tertiary: </label>
          <div>
            <input id="tertiary" type="text" maxlength="30" value="false">
            <p>Set background color for popup version (if it exists)</p>
          </div>
        </div>
        <div class="option-box">
          <label>Header Color: </label>
          <div>
            <input id="headerColor" type="text" maxlength="30" value="false">
            <p>Font color for popup header (if it exists)</p>
          </div>
        </div>
        <div class="option-box">
          <label>Font Color: </label>
          <div>
            <input id="fontColor" type="text" maxlength="30" value="false">
            <p>The default font color for the popup</p>
          </div>
        </div>
        <div class="option-box">
          <label>Version Color: </label>
          <div>
            <input id="versionColor" type="text" maxlength="30" value="false">
            <p>Font color for popup version (if it exists).</p>
          </div>
        </div>
        <div class="option-box">
          <label>Close Color: </label>
          <div>
            <input id="closeColor" type="text" maxlength="30" value="false">
            <p>Set color for close button (if it exists).</p>
          </div>
        </div>
        <div class="option-box">
          <label>Border Radius: </label>
          <div>
            <input id="borderRadius" type="text" maxlength="30" value="false">
            <p>Set border radius for popup (in units).</p>
          </div>
        </div>
        <div class="option-box">
          <label>Box Shadow: </label>
          <div>
            <input id="boxShadow" type="text" maxlength="30" value="false">
            <p>Set a drop shadow for the popup (using CSS syntax).</p>
          </div>
        </div>
        <div class="option-box">
          <label>Font Size: </label>
          <div>
            <input id="fontSize" type="text" maxlength="200" value="false">
            <p>Set font size for all popup (in units)</p>
          </div>
        </div>
      </div>
    </details>

    <details>
      <summary class="option-divider">
        Additional Options <span>&#8250;</span>
      </summary>

      <div class="option-wrapper">
        <div class="option-box">
          <label>Ignore Specific HTML Elements: </label>
          <div>
            <input id="ignore" type="text" maxlength="200" value="false">
            <p>
              BibleUp won't tag element listed here.<br>
              Seperate these elements using a comma and put inside a square
              bracket.
            </p>
          </div>
        </div>
        <div class="option-box">
          <label>Allow Specific HTML Elements: </label>
          <div>
            <input id="allow" type="text" maxlength="200" value="false">
            <p>
              Override the default elements ignored by BibleUp by placing them
              here.<br>
              Seperate these elements using a comma and put inside a square
              bracket.
            </p>
          </div>
        </div>
      </div>
    </details>
  </div>
</template>



<style lang="less" scoped>
@import "@/css/theme.less";

#select-options {
  width: 100%;
  height: 100%;
  padding: 0;
  padding-bottom: 80px;
  padding-top: 30px;
}

h3 {
  padding: 0 15px;
}

.option-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 30px;

  @media @desktop {
    justify-content: space-around;
    flex-direction: column;
  }

  div {
    width: 180px;

    p {
      color: #646970;
      margin-top: 3px;
    }
  }

  .wrap {
    display: flex;
  }

  label {
    font-weight: bold;
  }

  input,
  select {
    width: 150px;
  }

  textarea {
    width: 100%;
    height: 150px;
  }

  select {
    padding: 5px;
  }

  input,
  select,
  textarea {
    outline: none;
    border-radius: 5px;
    border: 3px solid #a6a6a6;
    padding: 3px 7px;
  }

  input:hover,
  input:focus,
  select:hover,
  select:focus,
  textarea:hover,
  textarea:focus {
    border-color: #4885eeda;
  }
}

.option-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;

  @media @xl {
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    margin-top: 30px;

    .option-box {
      margin-top: 0;
      justify-content: flex-start;
    }
  }
}

.option-divider {
  width: 100%;
  height: 50px;
  background: #e6e6e6;
  padding: 10px 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
}

.option-divider span {
  font-size: 20px;
}

.note {
  margin-top: 10px;
  padding: 20px;
  width: 100%;
  background: #ffeb998c;
  background: #ffeb99;
}

.note span {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.note a {
  color: inherit;
}
</style>