import { reactive, computed, watch } from 'vue';

let state = reactive({
  isEditor: false,
  isImport: false,
  preset: false,
  screen: {
    split: true,
    active: 'Select Options', //  Preview|Select Options|Paste|Import|Preset
  },
  option: {
    popup: 'classic',
    version: 'KJV',
    darkTheme: false,
    primary: '',
    secondary: '',
    tertiary: '',
    headerColor: '',
    fontColor: '',
    versionColor: '',
    closeColor: '',
    borderRadius: '',
    boxShadow: '',
    fontSize: '',
    bu_ignore: '',
    bu_allow: '',
    rawOptions: '',
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
        fontColor: false,
        versionColor: false,
        closeColor: false,
        borderRadius: false,
        boxShadow: false,
        fontSize: false,
    },
    bu_ignore: false,
    bu_allow: false,
} */

// GETTERS
export let isEditor = computed(() => state.isEditor);
export let isImport = computed(() => state.isImport);
export let isPreset = computed(() => state.preset);
export let getScreen = computed(() => state.screen.active);
export let isSplit = computed(() => state.screen.split);
export let getOptions = computed(() => state.option);
export let getBuOption = computed(() => state.buOption);
export let stringify_buOption = computed(() => {
  return JSON.stringify(state.buOption, null, '\t');
});

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
    state.isImport = !state.isImport;
  }
};


/**
 * Checks if `state.option.rawOptions` is a valid object then `buOption` to the parsed rawOption value or `format_buOption` value
 */
let formatRaw = () => {
  let raw;
  if (!state.option.rawOptions || state.option.rawOptions === 'false') {
    raw = 'null';
  } else {
    raw = state.option.rawOptions;
  }

  let regex1 = /([a-zA-Z]+(?:\s?)):/g; // match object keys
  let regex2 = /(?:\'\s?(.*?)\s?\')/g; // match object values
  let result = raw.replace(regex1, '"$1":').replace(regex2, '"$1"');

  try {
    const valid = JSON.parse(result);
    if (valid && typeof valid === 'object') {
      return valid;
    }
  } catch (e) {
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

watch(state.option, () => {
  state.buOption = format_buOption();
});

/**
 * This method compiles `buOption` by watching for changes in `state.option`
 * It formats buOption to the standard BibleUp Object
 */
const format_buOption = () => {
  if (state.option.rawOptions) {
    const real = formatRaw();
    if (real) return real;
  }

  let opt = {};
  for (const prop in state.option) {
    opt[prop] = validate(state.option[prop], false);
  }

  let realOpt = { popup: opt.popup, version: opt.version, darkTheme: opt.darkTheme };
  let styles = {
    primary: opt.primary,
    secondary: opt.secondary,
    tertiary: opt.tertiary,
    headerColor: opt.headerColor,
    fontColor: opt.fontColor,
    versionColor: opt.versionColor,
    closeColor: opt.closeColor,
    borderRadius: opt.borderRadius,
    boxShadow: opt.boxShadow,
    fontSize: opt.fontSize,
  };

  // check styles
  for (const prop in styles) {
    if (styles[prop] && styles[prop] !== 'false') {
      if (!realOpt.styles) realOpt.styles = {};
      realOpt.styles[prop] = styles[prop];
    }
  }

  // check others
  if (opt.bu_allow && opt.bu_allow !== 'false') {
    realOpt.bu_allow = opt.bu_allow;
  }
  if (opt.bu_ignore && opt.bu_ignore !== 'false') {
    realOpt.bu_ignore = opt.bu_ignore;
  }

  //state.buOption = realOpt;
  console.log('format Done', realOpt);
  return realOpt;
};

export const addPreset = (val) => {
  if (val) {
    state.preset = true
    if (state.isImport) {
      state.isImport = false
    }
    state.option.rawOptions = JSON.stringify(val);
  } else {
    state.preset = false;
    state.option.rawOptions = false;
  }
};

export const addImport = (val) => {
  if (val) {
    state.isImport = true;
    if (state.preset) {
      state.preset = false;
    }
    state.option.rawOptions = val;
  } else {
    state.isImport = false;
    state.option.rawOptions = false;
  }
};
