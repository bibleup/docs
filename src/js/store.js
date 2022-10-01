import { reactive, computed, watch } from 'vue';

let state = reactive({
  isEditor: false,
  isImport: false,
  preset: false,
  screen: {
    split: true,
    active: 'select', // preview|select|paste|import|preset
  },
  option: {
    popup: 'classic',
    version: 'KJV',
    darkTheme: false,
    primary: false,
    secondary: false,
    tertiary: false,
    headerColor: false,
    fontColor: false,
    versionColor: false,
    closeColor: false,
    borderRadius: false,
    boxShadow: false,
    fontSize: false,
    bu_ignore: false,
    bu_allow: false,
    rawOptions: false,
  },
  buOption: {},
});

/* let opt = {
    popup: "classic",
    version: "KJV",
    darkTheme: false,
    styles: {
        primary: red,
        secondary: false,
        tertiary: false,
        headerColor: false,
        color: [fontColor, versionColor, closeColor],
        borderRadius: false,
        boxShadow: false,
        fontSize: false,
    },
    bu_ignore: false,
    bu_allow: false,
} */

export let updateScreen = (screen) => {
  state.screen.active = screen;
  if (screen === 'preview') {
    state.screen.split = false;
  }
};

export let updateState = (key, value) => {
  state[key] = value;
};

export let toggleState = (s) => {
  if (s === 'split') {
    state.screen.split = !state.screen.split;
  }
  if (s === 'editor') {
    state.isEditor = !state.isEditor;
  }
  if (s === 'isImport') {
    if (state.isImport === false && (state.option.rawOptions === 'false' || !state.option.rawOptions)) {
      return false;
    }

    if (state.isImport === false && formatRaw()) {
      state.isImport = true;
    } else if (state.isImport === true) {
      state.isImport = false;
    }
  }
};

let formatRaw = () => {
  let raw = !state.option.rawOptions || state.option.rawOptions === 'false' ? 'null' : state.option.rawOptions;
  let regex1 = /([a-zA-Z]+(?:\s?)):/g; // match object keys
  let regex2 = /(?:\'\s?(.*?)\s?\')/g; // match object values
  let result = raw.replace(regex1, '"$1":').replace(regex2, '"$1"');
  console.log(result);

  try {
    let valid = JSON.parse(result);
    if (valid && typeof valid === 'object') {
      state.buOption = valid;
      return true;
    }
  } catch (e) {
    state.buOption = generated;
    return false;
  }
};

let validate = (value, d) => {
  if (value === 'false' || value == '') {
    return d;
  } else if (value == 'true') {
    return true;
  }

  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '/': '&#x2F;',
  };
  const reg = /[&<>/]/gi;
  return value.replace(reg, (match) => map[match]);
};

// GETTERS
export let isEditor = computed(() => state.isEditor);
export let isImport = computed(() => state.isImport);
export let isPreset = computed(() => state.preset);
export let getScreen = computed(() => state.screen.active);
export let isSplit = computed(() => state.screen.split);
export let getOptions = computed(() => state.option);
export let getBuOption = computed(() => state.buOption);

// for Copy.vue
export let generated = computed(() => {
    /* Check if preset is active and buOption is set */
  if (state.preset && Object.keys(state.buOption).length !== 0) {
    return JSON.stringify(state.buOption, null, '\t');
  }

  let opt = {};
  for (const prop in state.option) {
    opt[prop] = validate(state.option[prop], false);
  }

  let copy = { popup: opt.popup, version: opt.version, darkTheme: opt.darkTheme };
  let styleProps = {
    primary: opt.primary,
    secondary: opt.secondary,
    tertiary: opt.tertiary,
    headerColor: opt.headerColor,
    borderRadius: opt.borderRadius,
    boxShadow: opt.boxShadow,
    fontSize: opt.fontSize,
  };
  let colorProps = { fontColor: opt.fontColor, versionColor: opt.versionColor, closeColor: opt.closeColor };

  // check styles
  for (const prop in styleProps) {
    if (styleProps[prop] && styleProps[prop] !== 'false') {
      //console.log(prop, styleProps[prop])
      if (!copy.styles) copy.styles = {};
      copy.styles[prop] = styleProps[prop];
    }
  }

  // check color
  for (const prop in colorProps) {
    if (colorProps[prop] && colorProps[prop] !== 'false') {
      if (!copy.styles.color) copy.styles.color = [false, false, false];
      if (prop === 'fontColor') copy.styles.color[0] = colorProps[prop];
      if (prop === 'versionColor') copy.styles.color[1] = colorProps[prop];
      if (prop === 'closeColor') copy.styles.color[2] = colorProps[prop];
    }
  }

  // check others
  if (opt.bu_allow && opt.bu_allow !== 'false') {
    copy.bu_allow = opt.bu_allow;
  }
  if (opt.bu_ignore && opt.bu_ignore !== 'false') {
    copy.bu_ignore = opt.bu_ignore;
  }

  state.buOption = copy;
  return JSON.stringify(copy, null, '\t');
});
