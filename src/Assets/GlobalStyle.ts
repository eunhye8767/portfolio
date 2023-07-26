import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { flexCenter, screenOut } from "Assets/MixinStyle";
import { max, width, color } from "Assets/StyleVariable";

import "Assets/Fonts/Fonts.css";

const GlobalStyle = createGlobalStyle`
  ${reset}

  // 추가 적용
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-overflow-scrolling: touch;
    -webkit-border-radius: 0;
  }

  html {
    text-size-adjust: none;
  }

  body {
    position: relative;
    min-width: 280px;
    min-height: 100%;
    font-family: "NotoSansKR", "Manrope", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #000;
    line-height: 1.6;
    letter-spacing: -0.06em;
    word-break: keep-all;
    word-wrap: break-word;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [hidden] {
    display: none !important;
  }

  img {
    max-width: 100%;
    vertical-align: top;
    -webkit-user-drag: none;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
  
  input,
  select,
  textarea,
  button {
    appearance: none;
    outline: 0;
  }

  input,
  textarea {
    border: 0;
    background: transparent;

    &::placeholder {
      /* Chrome, Safari, Firefox */
      color: #999;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      /* IE, Edge */
      color: #999;
      opacity: 1;
    }

    &[readonly],
    &:disabled {
      pointer-events: none;

      &::placeholder {
        /* Chrome, Safari, Firefox */
        color: #999;
        opacity: 1;
      }

      &:-ms-input-placeholder {
        /* IE, Edge */
        color: #999;
        opacity: 1;
      }
    }

    &:disabled {
      color: #999;
      background: #e8e8e8;
    }

    &[readonly] {
      color: #000;
      background: #e8e8e8;
    }

    &::-ms-clear,
    &::-ms-reveal {
      /* IE, Edge */
      display: none;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  /* Firefox  */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }

  select {
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &::-ms-expand {
      display: none;
    }
  }

  button {
    ${flexCenter}
    
    position: relative;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  table {
    width: 100%;
    border: 0;
  }

  caption {
    ${screenOut}
  }

  .App {
    min-height: 100vh;
    min-height: ${max.vh};
  }

  .container {
    position: relative;
    width: 100%;
    background: ${color.white};
    z-index: 1;

    @media (min-width: ${width.minMobile}) {
      max-width: ${width.minMobile};
      margin: 0 auto;
      padding-bottom: 140px;
    }

    @media (max-width: ${width.mobile}) {
      padding-bottom: 100px;
    }
  }
`;

export default GlobalStyle;
