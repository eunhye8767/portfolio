import styled from "styled-components";
import {
  flexCenter,
  flexColumn,
  flexJustCen,
  FontStyle,
  SizeWH,
} from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";

export const NavSection = styled.nav`
  ${flexCenter}

  position: fixed;
  bottom: 20px;
  z-index: 900;
  pointer-events: none;

  @media (min-width: ${width.minMobile}) {
    ${SizeWH("668px", "80px")}
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: ${width.mobile}) {
    ${SizeWH("calc(100% - 40px)", "60px")}
    left: 20px;
  }
`;

export const NavArea = styled.div`
  ${SizeWH("100%")}
  background: ${color.blue};

  @media (min-width: ${width.minMobile}) {
    border-radius: 20px;
  }

  @media (max-width: ${width.mobile}) {
    border-radius: 10px;
  }
`;

export const NavGroup = styled.ul`
  ${flexCenter}
  ${SizeWH("100%")}

  > li {
    ${flexJustCen}

    position: relative;
    width: 20%;
    opacity: 0.6;

    &.is-active {
      opacity: 1;
    }
  }

  @media (max-width: ${width.mobile}) {
    justify-content: space-between;
    padding: 0 20px;
  }

  @media (max-width: 359px) {
    padding: 0 10px;
  }
`;

export const NavItem = styled.button`
  ${flexColumn}
  pointer-events: all;

  .ico {
    ${flexCenter}
  }

  .txt {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
  }

  @media (min-width: ${width.minMobile}) {
    padding-bottom: 24px;

    .ico {
      ${SizeWH("24px")}
    }

    .txt {
      ${FontStyle(12, 700, color.white, "14px")}
      margin-top: 10px;
    }
  }

  @media (max-width: ${width.mobile}) {
    padding-bottom: 20px;

    .ico {
      ${SizeWH("20px")}
    }

    .txt {
      ${FontStyle(10, 700, color.white, "12px")}
      margin-top: 8px;
    }
  }
`;
