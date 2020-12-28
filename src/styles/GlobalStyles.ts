import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize}

  :root {
    --color-celery-400: #3da74e;
    --color-celery-500: #44b556;
    --color-celery-600: #4bc35f;
    --color-celery-700: #51d267;
    --color-chartreuse-400: #7cc33f;
    --color-chartreuse-500: #85d044;
    --color-chartreuse-600: #8ede49;
    --color-chartreuse-700: #9bec54;
    --color-yellow-400: #d2b200;
    --color-yellow-500: #dfbf00;
    --color-yellow-600: #edcc00;
    --color-yellow-700: #fad900;
    --color-magenta-400: #ca2996;
    --color-magenta-500: #d83790;
    --color-magenta-600: #e2499d;
    --color-magenta-700: #ec5aaa;
    --color-fuchsia-400: #b130bd;
    --color-fuchsia-500: #c038cc;
    --color-fuchsia-600: #cf3edc;
    --color-fuchsia-700: #d951e5;
    --color-purple-400: #864ccc;
    --color-purple-500: #9256d9;
    --color-purple-600: #9d64e1;
    --color-purple-700: #a873df;
    --color-indigo-400: #5c5ce0;
    --color-indigo-500: #6767ec;
    --color-indigo-600: #7575f1;
    --color-indigo-700: #8282f6;
    --color-seafoam-400: #16878c;
    --color-seafoam-500: #1b959a;
    --color-seafoam-600: #20a3a8;
    --color-seafoam-700: #23b2b8;
    --color-red-400: #d7373f;
    --color-red-500: #e34850;
    --color-red-600: #ec5b62;
    --color-red-700: #f76d74;
    --color-orange-400: #da7b11;
    --color-orange-500: #e68619;
    --color-orange-600: #f29423;
    --color-orange-700: #f9a43f;
    --color-green-400: #268e6c;
    --color-green-500: #2d9d78;
    --color-green-600: #33ab84;
    --color-green-700: #39b990;
    --color-blue-400: #1473e6;
    --color-blue-500: #2680eb;
    --color-blue-600: #378ef0;
    --color-blue-700: #4b9cf5;
    --color-black: #000;
    --color-gray-50: #080808;
    --color-gray-75: #1a1a1a;
    --color-gray-100: #1e1e1e;
    --color-gray-200: #2c2c2c;
    --color-gray-300: #393939;
    --color-gray-400: #494949;
    --color-gray-500: #5c5c5c;
    --color-gray-600: #7c7c7c;
    --color-gray-700: #a2a2a2;
    --color-gray-800: #c8c8c8;
    --color-gray-900: #efefef;
    --color-gray-1000: #fafafa;
    --color-white: #fff;
    --duration-100: 130ms;
    --duration-200: 160ms;
    --duration-300: 190ms;
    --duration-400: 220ms;
    --material-shadow:
      0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14),
      0px 3px 14px 2px rgba(0, 0, 0, 0.12);

    --primary-background: var(--color-gray-1000);
    --primary-foreground: var(--color-gray-50);
    --secondary-background: var(--color-gray-900);
    --secondary-foreground: var(--color-gray-50);
    --highlight: hsla(0, 0%, 78%, .350);
    --link: var(--color-blue-400);
    --visited: var(--color-purple-500);
    --hover: var(--color-green-400);

    @media screen and (prefers-color-scheme: dark) {
      --primary-background: var(--color-gray-75);
      --primary-foreground: var(--color-gray-900);
      --secondary-background: var(--color-gray-100);
      --secondary-foreground: var(--color-gray-900);
      --highlight: var(--color-gray-200);
    }
  }

  html {
    box-sizing: border-box;
    font-size: 100%;

    @supports (font-kerning: normal)
      and (font-variant-ligatures: common-ligatures contextual)
      and (font-variant-numeric: oldstyle-nums proportional-nums) {
      font-feature-settings: normal;
      font-kerning: normal;
      font-variant-ligatures: common-ligatures contextual;
      font-variant-numeric: oldstyle-nums proportional-nums;
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: var(--primary-background);
    color: var(--primary-foreground);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    /* padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left); */
  }

  a {
    white-space: nowrap;
  }

  abbr {
    font-feature-settings: 'kern', 'liga', 'clig', 'calt', 'c2sc', 'smcp';
    @supports (font-variant-caps: all-small-caps) {
      font-feature-settings: normal;
      font-variant-caps: all-small-caps;
    }
  }

  i, em {
    font-style: italic;
  }

  img, object, video { max-width: 100%; }

  small {
    display: inline-block;
    line-height: 1.1;
  }

  svg use { pointer-events: none; }

  .visually-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    width: 1px;
  }
`

export default GlobalStyles
