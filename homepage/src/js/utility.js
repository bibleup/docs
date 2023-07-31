// global mobile-menu state
import { ref } from 'vue'
export let openMenu = ref(false);

export function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}

export const toggleMenu = () => {
  openMenu.value = !openMenu.value;
};

export const closeMenu = () => {
  if (openMenu.value) {
    openMenu.value = false;
  }
}

export let preset = {
    'preset 1': {
      popup: 'inline',
      darkTheme: false,
      styles: {
        primary: ' #192841',
        fontColor: 'white',
        borderRadius: '12px',
        boxShadow: '5px 5px #7e9bcd',
      },
    },
    'preset 2': {
      popup: 'classic',
      darkTheme: false,
      styles: {
        primary: 'wheat',
        secondary: 'wheat',
        headerColor: '#333',
        fontColor: '#333',
        versionColor: '#333',
        borderRadius: '0px',
        boxShadow: '0.3em 0.3em 0 0 #4884ee, inset 0.3em 0.3em 0 0 #4884ee',
      },
    },
    github: {
      version: 'kjv',
      popup: 'inline',
      darkTheme: false,
      styles: {
        primary: ' #fff',
        fontColor: '#24292f',
        borderRadius: '6px',
        boxShadow: '0 0 0 1px #d0d7de, 0 8px 24px rgba(140,149,159,0.2)',
      },
    },
    stackoverflow: {
      version: 'kjv',
      popup: 'classic',
      darkTheme: false,
      styles: {
        primary: ' #fff',
        secondary: '#fff',
        tertiary: '#f2f2f2',
        headerColor: '#0c0d0e',
        fontColor: '#0c0d0e',
        versionColor: '#0c0d0e',
        borderRadius: '5px',
        boxShadow: '0 0 0 1px #D6D9DC, 0 1px 3px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.06), 0 3px 8px rgba(0,0,0,0.09)',
      },
    },
  };