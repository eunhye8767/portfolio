import styled from "styled-components";
import {
  flexWrap,
  flexJustBet,
  FontStyle,
  SizeWH,
  screenOut,
  flexColumn,
  flexAlignCen,
} from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";

import IcoClose from "Assets/Images/ico-close.svg";

export const AboutSection = styled.section`
  position: fixed;
  width: 100%;
  z-index: 1000;

  @media (min-width: ${width.minMobile}) {
    left: 50%;
    bottom: 100px;
    padding: 0 50px 20px;
    max-width: ${width.minMobile};
    transform: translateX(-50%);
  }

  @media (max-width: ${width.mobile}) {
    left: 0;
    bottom: 80px;
    padding: 0 20px 20px;
  }
`;

export const AboutArea = styled.div`
  position: relative;
  background: ${color.white};
  border: 1px solid ${color.line};

  @media (min-width: ${width.minMobile}) {
    padding: 50px;
    border-radius: 20px;
  }

  @media (max-width: ${width.mobile}) {
    padding: 20px;
    border-radius: 10px;
  }
`;

export const AboutBtnClose = styled.button`
  ${SizeWH("30px")}

  position: absolute;
  background: url(${IcoClose}) no-repeat center / contain;
  z-index: 10;

  span {
    ${screenOut}
  }

  @media (min-width: ${width.minMobile}) {
    top: 50px;
    right: 50px;
  }

  @media (max-width: ${width.mobile}) {
    top: 20px;
    right: 20px;
  }
`;

export const AboutGreet = styled.h3`
  ${FontStyle(40, 300, color.black, "1.2")}
`

export const AboutInfoList = styled.ul`
  margin-top: 40px;

  > li {
    ${flexAlignCen}

    span {
      ${FontStyle(20, 400, color.grey, "1", 0.02)}

      &::before {
        margin-right: 10px;
        font-weight: 600;
      }

      &.email::before {
        content: "E.";
      }
      
      &.phone::before {
        content: "P.";
      }
    }

    & + li {
      margin-top: 10px;
    }
  }
`