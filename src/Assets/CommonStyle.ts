import { css } from "styled-components";
import { FontStyle, SizeWH } from "Assets/MixinStyle";
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

export const moreBtn = css`
  border: 1px solid ${color.line};

  span {
    ${FontStyle(16, 400, color.black, "1")}
    margin-left: 10px;
  }

  @media (min-width: ${width.minMobile}) {
    ${SizeWH("100%", "60px")}

    margin-top: 40px;
    border-radius: 20px;
  }

  @media (max-width: ${width.mobile}) {
    ${SizeWH("100%", "50px")}

    margin-top: 20px;
    border-radius: 10px;

    span {
      font-size: 14px;
    }
  }
`;

export const roundBox = css`
  border: 1px solid ${color.line};
  @media (min-width: ${width.minMobile}) {
    border-radius: 20px;
  }

  @media (max-width: ${width.mobile}) {
    border-radius: 10px;
  }
`;

export const btnInTxt = css`
  ${FontStyle(16, 400, color.black, "1")}

  @media (max-width: ${width.mobile}) {
    font-size: 14px;
  }
`;
