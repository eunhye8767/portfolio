import styled, { css } from "styled-components";
import {
  SizeWH,
  screenOut,
  svgIcoGroup,
  CommonFocused,
} from "Assets/MixinStyle";
import { color } from "Assets/StyleVariable";

import { StyleInputProps } from "playground/playground";

export const InputSection = styled.div``;

export const InputGroup = styled.div<StyleInputProps>`
  ${SizeWH("400px", "50px")}

  position: relative;
  border: 1px solid ${color.lightGrey};
  border-radius: 4px;

  ${(props) => {
    if (props.$valid?.error) {
      return css`
        ${CommonFocused(color.red)}
      `;
    } else if (props.$valid?.success) {
      return css`
        ${CommonFocused(color.green)}
      `;
    } else if (props.$focus) {
      return css`
        ${CommonFocused()}
      `;
    }
  }}

  .screen-out {
    ${screenOut}
  }

  .btn-delete {
    ${svgIcoGroup("20px", color.lightGrey)}

    position: absolute;
    top: 15px;
    right: 15px;

    &:focus-visible {
      border-radius: 50%;

      ${(props) => {
        if (props.$valid?.error) {
          return css`
            ${CommonFocused(color.red)}
          `;
        } else if (props.$valid?.success) {
          return css`
            ${CommonFocused(color.green)}
          `;
        } else if (props.$focus) {
          return css`
            ${CommonFocused()}
          `;
        }
      }}
    }
  }

  input {
    ${SizeWH("100%")}

    position: absolute;
    top: 0;
    left: 0;
    padding: ${($props) => ($props.$value ? "0 50px 0 24px" : "0 24px")};
  }
`;
