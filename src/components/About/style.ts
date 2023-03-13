import styled from "styled-components";
import {
  flexColumn,
  flexCenter,
  SizeWH,
  FontStyle,
  screenOut,
  ObjFitCover,
} from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";

import IcoClose from "Assets/Images/ico-close.svg";

export const AboutSection = styled.section`
  position: fixed;
  width: 100%;
  text-align: center;
  z-index: 1000;

  @media (min-width: ${width.minMobile}) {
    left: 50%;
    bottom: 100px;
    padding: 0 50px;
    max-width: ${width.minMobile};
    transform: translateX(-50%);
  }

  @media (max-width: ${width.mobile}) {
    left: 0;
    bottom: 80px;
    padding: 0 20px;
  }
`;

export const AboutArea = styled.div`
  position: relative;
  background: ${color.white};
  box-shadow: inset 0 0 0 1px ${color.blue};
  overflow-y: auto;

  @media (min-width: ${width.minMobile}) {
    max-height: calc(100vh - 120px);
    padding-top: 50px;
    border-radius: 20px;
  }

  @media (max-width: ${width.mobile}) {
    max-height: calc(100vh - 100px);
    padding-top: 20px;
    border-radius: 10px;
  }
`;

export const AboutGreet = styled.h3`
  ${FontStyle(40, 300, color.black, "1.2")}

  @media (max-width: ${width.mobile}) {
    font-size: 20px;
    line-height: 1.4;
  }
`;

export const AboutInfoList = styled.ul`
  @media (min-width: ${width.minMobile}) {
    margin-top: 40px;
  }

  @media (max-width: ${width.mobile}) {
    margin-top: 20px;
  }

  > li {
    ${flexCenter}

    span {
      ${FontStyle(20, 400, color.grey, "1", 0.02)}

      @media (max-width: ${width.mobile}) {
        font-size: 16px;
      }

      &::before {
        margin-right: 8px;
        font-weight: 600;

        @media (max-width: ${width.mobile}) {
          margin-right: 4px;
        }
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
`;

export const AboutKakao = styled.div`
  ${flexColumn}

  align-items: center;
  background: ${color.blue};

  @media (min-width: ${width.minMobile}) {
    margin-top: 50px;
    padding: 50px;
  }

  @media (max-width: ${width.mobile}) {
    margin-top: 20px;
    padding: 20px;
  }
`;

export const AboutKakaoQRcode = styled.div`
  padding: 20px;
  background: ${color.white};

  figure {
    img {
      ${ObjFitCover}
    }
  }

  @media (min-width: ${width.minMobile}) {
    max-width: 280px;
    border-radius: 20px;
  }

  @media (max-width: ${width.mobile}) {
    max-width: 180px;
    border-radius: 10px;
  }
`;

export const AboutKakaoQRname = styled.p`
  ${FontStyle(16, 500, color.blue, "1", 0)}
  padding-top: 20px;

  b {
    margin-left: 8px;
    font-weight: 700;
    color: ${color.blue};
  }

  @media (max-width: ${width.mobile}) {
    font-size: 14px;
  }
`;

export const AboutBtnClose = styled.button`
  position: absolute;
  background: url(${IcoClose}) no-repeat center / contain;
  border-radius: 50%;
  z-index: 10;

  span {
    ${screenOut}
  }

  @media (min-width: ${width.minMobile}) {
    ${SizeWH("30px")}

    top: 30px;
    right: 30px;
  }

  @media (max-width: ${width.mobile}) {
    ${SizeWH("20px")}

    top: 20px;
    right: 20px;
  }
`;
