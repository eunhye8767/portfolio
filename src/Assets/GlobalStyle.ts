import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { FlexCenter, ScreenOut } from "./MixinStyle";

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
    ${FlexCenter}
    
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
    ${ScreenOut}
  }
`;

export default GlobalStyle;
