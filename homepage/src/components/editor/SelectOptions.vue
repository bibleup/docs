<template>
  <div id="select-options">
    <SplitHeader class="split-header"></SplitHeader>
    <div class="note">
      <p>
        Set any option to false or leave empty to get the default value. Check
        the
        <span><a href="https://bibleup.netlify.app/docs" target="_blank">docs</a></span> for full documentation.
      </p>
    </div>

    <div class="option-wrapper">
      <div class="option-box">
        <label for="type">Popup Type: </label>
        <div>
          <select name="type" id="type" v-model="option.popup">
            <option value="classic">classic</option>
            <option value="inline">inline</option>
            <option value="wiki">wiki</option>
          </select>
          <p>The preferred popup type.</p>
        </div>
      </div>
      <div class="option-box">
        <label for="version">Version: </label>
        <div>
          <select name="version" id="version" v-model="option.version">
            <option value="KJV">King James Version (KJV)</option>
            <option value="ASV">American Standard Version (ASV)</option>
            <option value="LSV">Literal Standard Version (LSV)</option>
            <option value="WEB">World English Bible (WEB)</option>
            <option value="ESV">English Standard Version (ESV)</option>
            <option value="NIV">New International Version (NIV)</option>
            <option value="MSG">The Message Translation (MSG)</option>
            <option value="NLT">New Living Translation (NLT)</option>
            <option value="AMP">The Amplified Bible (AMP)</option>
            <option value="NASB">New American Standard Bible (NASB)</option>
          </select>
          <p>The default Bible translation for references.</p>
        </div>
      </div>
      <div class="option-box">
        <label for="theme">Dark Theme: </label>
        <div>
          <div class="wrap">
            <label for="dark-true">True</label>
            <input id="dark-true" name="darkTheme" type="radio" value="true" v-model="option.darkTheme" />
            <label for="dark-false">False</label>
            <input id="dark-false" name="darkTheme" type="radio" value="false" v-model="option.darkTheme" />
          </div>
          <p>Enable dark theme on popup (this can be overridden by other background color).</p>
        </div>
      </div>
    </div>

    <details>
      <summary class="option-divider">Popup background and colors <span>&#8250;</span></summary>

      <div class="option-wrapper">
        <div class="option-box">
          <label>Primary: </label>
          <div>
            <input id="primary" type="text" maxlength="30" v-model="option.primary" placeholder="color value" />
            <p>Set color for overall popup background</p>
          </div>
        </div>
        <div class="option-box">
          <label>Secondary: </label>
          <div>
            <input id="secondary" type="text" maxlength="30" v-model="option.secondary" placeholder="color value" />
            <p>Set background color for popup header (if it exists)</p>
          </div>
        </div>
        <div class="option-box">
          <label>Tertiary: </label>
          <div>
            <input id="tertiary" type="text" maxlength="30" v-model="option.tertiary" placeholder="color value" />
            <p>Set background color for popup version (if it exists)</p>
          </div>
        </div>
        <div class="option-box">
          <label>Header Color: </label>
          <div>
            <input id="headerColor" type="text" maxlength="30" v-model="option.headerColor" placeholder="color value" />
            <p>Font color for popup header (if it exists)</p>
          </div>
        </div>
        <div class="option-box">
          <label>Font Color: </label>
          <div>
            <input id="fontColor" type="text" maxlength="30" v-model="option.fontColor" placeholder="color value" />
            <p>The default font color for the popup</p>
          </div>
        </div>
        <div class="option-box">
          <label>Version Color: </label>
          <div>
            <input
              id="versionColor"
              type="text"
              maxlength="30"
              v-model="option.versionColor"
              placeholder="color value"
            />
            <p>Font color for popup version (if it exists).</p>
          </div>
        </div>
        <div class="option-box">
          <label>Close Color: </label>
          <div>
            <input id="closeColor" type="text" maxlength="30" v-model="option.closeColor" placeholder="color value" />
            <p>Set color for close button (if it exists).</p>
          </div>
        </div>
        <div class="option-box">
          <label>Border Radius: </label>
          <div>
            <input id="borderRadius" type="text" maxlength="30" v-model="option.borderRadius" placeholder="10px" />
            <p>Set border radius for popup (in units).</p>
          </div>
        </div>
        <div class="option-box">
          <label>Box Shadow: </label>
          <div>
            <input
              id="boxShadow"
              type="text"
              maxlength="30"
              v-model="option.boxShadow"
              placeholder="2px 2px 4px black"
            />
            <p>Set a drop shadow for the popup (using CSS syntax).</p>
          </div>
        </div>
        <div class="option-box">
          <label>Font Size: </label>
          <div>
            <input id="fontSize" type="text" maxlength="200" v-model="option.fontSize" placeholder="16px" />
            <p>Set font size for all popup (in units)</p>
          </div>
        </div>
      </div>
    </details>

    <details>
      <summary class="option-divider">Additional Options <span>&#8250;</span></summary>

      <div class="option-wrapper">
        <div class="option-box">
          <label>Ignore Case: </label>
          <div>
            <div class="wrap">
              <label for="case-true">True</label>
              <input id="case-true" name="ignoreCase" type="radio" value="true" v-model="option.ignoreCase" />
              <label for="case-false">False</label>
              <input id="case-false" name="ignoreCase" type="radio" value="false" v-model="option.ignoreCase" />
            </div>
            <p>Allow BibleUp match references in any letter case.</p>
          </div>
        </div>
        <div class="option-box">
          <label>Ignore Specific HTML Elements: </label>
          <div>
            <input id="ignore" type="text" maxlength="200" v-model="option.bu_ignore" placeholder="['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'A']" />
            <p>
              BibleUp won't tag element listed here.<br />
              Seperate these elements using a comma and put inside a square bracket.
            </p>
          </div>
        </div>
        <div class="option-box">
          <label>Allow Specific HTML Elements: </label>
          <div>
            <input id="allow" type="text" maxlength="200" v-model="option.bu_allow" placeholder="[]" />
            <p>
              Override the default elements ignored by BibleUp by placing them here.<br />
              Seperate these elements using a comma and put inside a square bracket.
            </p>
          </div>
        </div>
        <div class="option-box">
          <label>BibleUp ID (buid): </label>
          <div>
            <input id="allow" type="text" maxlength="200" v-model="option.buid" placeholder="buid string" />
            <p>Attach a specific HTML ID attribute to popovers and links</p>
          </div>
        </div>
      </div>
    </details>
  </div>
</template>

<script setup>
import SplitHeader from '@/components/editor/SplitHeader.vue';
import { getOptions } from '@/js/store';
import { ref } from 'vue';

let option = ref(getOptions);
</script>

<style lang="less" scoped>
@import '@/css/theme.less';
@import '@/css/editor.less';

#select-options {
  width: 100%;
  height: 100%;
  //padding: 0;
  //padding-bottom: 150px;
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
  height: 45px;
  background: #f5f5f5;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
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
</style>
