import styled from "styled-components";
import {
  flexAlignCen,
  flexAlignEnd,
  flexCenter,
  flexColumn,
  flexJustCen,
  FontStyle,
  SizeWH,
} from "Assets/MixinStyle";
import { max, width, color } from "Assets/StyleVariable";

export const VisualSection = styled.section`
  aspect-ratio: 2 / 3;
  background: ${color.red};
  padding: 60px 100px;
  overflow: hidden;
`;

export const VisualGroup = styled.div`
  ${flexColumn}

  align-items: center;
  justify-content: flex-end;
  height: 100%;
  background: green;
`;

export const VisualFigureGroup = styled.div`
  position: relative;
  margin-top: auto;
  background: blue;
`;

export const VisualFigure = styled.figure`
  height: 100%;
  overflow: hidden;

  > img {
    height: 100%;
    object-fit: contain;
  }
`;

export const VisualResumeGroup = styled.div`
  position: absolute;
  right: -30px;
  background: ${color.black};
  transform-origin: 100% 0;
  transform: rotate(90deg);
  
  @media (min-width: ${width.minMobile}) {
    top: 200px;
  }

  @media (max-width: ${width.mobile}) {
    top: 170px;
  }
`;

export const VisualResumeBtn = styled.button`
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

// @media (min-width: ${width.minMobile}) {
// }

// @media (max-width: ${width.mobile}) {
// }
