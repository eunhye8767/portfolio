import { css } from "styled-components";
import { FontStyle } from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";

export const commonSection = css`
  @media (min-width: ${width.minMobile}) {
    padding: 100px 50px 0;
  }

  @media (max-width: ${width.mobile}) {
    padding: 60px 20px 0;
  }
`;

export const subTitle = css`
  ${FontStyle(40, 700, color.black, "1")}
  padding-bottom: 40px;

  @media (max-width: ${width.mobile}) {
    padding-bottom: 20px;
    font-size: 28px;
  }
`;
