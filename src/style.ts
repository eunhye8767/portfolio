import styled from "styled-components";
import {
  screenOut,
  ObjFitCover,
} from "Assets/MixinStyle";
import { width } from "Assets/StyleVariable";

export const AppTitle = styled.h1`
  ${screenOut}
`;

export const AppBgSection = styled.div`
  @media (min-width: ${width.minMobile}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      ${ObjFitCover}
    }
  }

  @media (max-width: ${width.mobile}) {
    display: none;
  }
`;