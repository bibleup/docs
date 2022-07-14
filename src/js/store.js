
import { reactive, computed } from "vue"

let state = reactive({
    isEditor: false,
    screen: {
        split: true,
        active: "select" // preview|select|paste|import|preset
    },
    option: {
        popup: "classic",
        version: "KJV",
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
})

/* let opt = {
    popup: "classic",
    version: "KJV",
    darkTheme: false,
    styles: {
        primary: false,
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

let updateScreen = (screen) => {
    state.screen.active = screen
    if (screen === 'preview') {
        state.screen.split = false
    }
}

let updateOption = (key, value) => {
    state.option[key] = value
}

let toggleState = (s) => {
    if (s === 'split') {
        state.screen.split = !state.screen.split
    }
    if (s === 'editor') {
        state.isEditor = !state.isEditor
    }
}



// GETTERS
let isEditor = computed(() => state.isEditor)
let getScreen = computed(() => state.screen.active)
let isSplit = computed(() => state.screen.split)
let getOptions = computed(() => { return state.option})



export {
    updateScreen,
    updateOption,
    toggleState,
    isEditor,
    isSplit,
    getScreen,
    getOptions
};