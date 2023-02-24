import styled from "styled-components";
import { flexAlignCen, flexCenter, flexColumn, flexJustCen, FontStyle, SizeWH } from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";

export const NavSection = styled.nav`
  ${flexCenter}
  ${SizeWH("100%", "80px")}

  position: fixed;
  bottom: 20px;
  left: 0;
  z-index: 900;
  pointer-events: none;
`;

export const NavArea = styled.div`
  ${SizeWH(width.minMobile, "100%")}
  
  background: ${color.blue};
  border-radius: 20px;
  `;

export const NavGroup = styled.ul`
  ${flexCenter}
  ${SizeWH("100%")}

  > li {
    ${flexJustCen}

    position: relative;
    width: 20%;
  }
`;

export const NavItem = styled.button`
  ${flexColumn}

  padding-bottom: 24px;
  opacity: 0.6;
  pointer-events: all;

  .ico {
    ${flexCenter}
    ${SizeWH("24px")}
  }

  .txt {
    ${FontStyle(12, 700, color.white, "14px")}

    position: absolute;
    bottom: 0;
    left: 50%;
    margin-top: 10px;
    transform: translateX(-50%);
    text-transform: uppercase;
  }

  &.is-active {
    opacity: 1;
  }
`;
