import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { flexCenter, screenOut } from "Assets/MixinStyle";
import { width } from "Assets/StyleVariable";

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
    font-size: 10px;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;

    body {
      position: relative;
      min-height: 100%;
      font-family: "NotoSansKR", "Manrope", sans-serif;
      font-size: 1.6rem;
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
  }

  [hidden] {
    display: none !important;
  }

  img {
    max-width: 100%;
    vertical-align: top;
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
    min-height: calc(var(--vh, 1vh) * 100);
  }

  .container {
    width: 100%;

    @media (min-width: ${width.minMobile}) {
      max-width: ${width.minMobile};
      margin: 0 auto;
    }

    @media (min-width: ${width.mobile}) {
      
    }
  }
`;

export default GlobalStyle;
