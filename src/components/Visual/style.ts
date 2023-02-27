import styled from "styled-components";
import { flexAlignCen, flexColumn, FontStyle } from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";

export const VisualSection = styled.section`
  background: ${color.green};
  overflow: hidden;

  @media (min-width: ${width.minMobile}) {
    padding: 120px 140px 60px;
  }

  @media (max-width: ${width.mobile}) {
    padding: 60px 50px 30px;
  }
`;

export const VisualFigureGroup = styled.div`
  position: relative;

  @media (min-width: ${width.minMobile}) {
    margin-top: 60px;
  }

  @media (max-width: ${width.mobile}) {
    margin-top: 30px;
  }
`;

export const VisualFigure = styled.figure`
  position: relative;
  z-index: 1;
`;

export const VisualResumeGroup = styled.div`
  position: absolute;
  right: -29px;
  background: ${color.black};
  border-radius: 4px 4px 0 0;
  transform-origin: 0 0;
  transform: translateX(100%) rotate(90deg);

  @media (min-width: ${width.minMobile}) {
    top: 15%;
  }

  @media (max-width: ${width.mobile}) {
    top: 13%;
  }
`;

export const VisualResumeBtn = styled.a`
  ${flexAlignCen}
  height: 30px;
  padding: 8px 16px;

  .txt {
    ${FontStyle(14, 400, color.white, "1", 0.2)}

    & + svg {
      margin-left: 10px;
      transform: rotate(-90deg);
    }
  }
`;

export const VisualTitleGroup = styled.h3`
  ${flexColumn}
  align-items: center;

  small {
    ${FontStyle(24, 400, color.white, "1")}
  }

  strong {
    ${FontStyle(36, 800, color.white, "1")}
    margin-top: 10px;
  }

  @media (max-width: ${width.mobile}) {
    small {
      font-size: 16px;
    }

    strong {
      font-size: 24px;
    }
  }
`;
