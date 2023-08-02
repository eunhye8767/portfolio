import styled, { css } from "styled-components";
import {
  SizeWH,
  screenOut,
  svgIcoGroup,
  CommonFocused,
  flexJustStart,
  FontStyle,
  Ellipsis,
} from "Assets/MixinStyle";
import { color } from "Assets/StyleVariable";

import { StyleSelectProps } from "playground/playground";

export const SelectOptionButton = styled.button`
  ${SizeWH("100%", "40px")}

  justify-content: flex-start;
  padding: 0 16px;
  transition: 0.3s background;

  &:hover,
  &:active {
    background: ${color.hover};
  }

  .option__text {
    ${FontStyle(12, 400, color.black)}
    ${Ellipsis}
  }
`;

export const SelectOptionCheckbox = styled.div``;

export const SelectOptionList = styled.ul`
  > li {
    & + li {
      margin-top: 4px;
    }
  }
`;

export const SelectOptionGroup = styled.div`
  display: none;
  max-height: 300px;
  margin-top: 1px;
  padding: 8px 0;
  border: 1px solid ${color.lightGrey};
  border-radius: 4px;
  overflow: auto;
`;

export const SelectLabelGroup = styled.div`
  ${SizeWH("100%", "40px")}
  position: relative;

  .label {
    ${flexJustStart}
    ${SizeWH("100%")}

    padding: 0 16px;
    border: 1px solid ${color.lightGrey};
    border-radius: 4px;

    &:focus {
      ${CommonFocused()}
    }

    &__text {
      ${FontStyle(12, 400, color.lightGrey)}
      ${Ellipsis}

      padding-right: 8px;
    }

    &__ico {
      ${svgIcoGroup("16px", color.grey)}

      flex-shrink: 0;
      margin-left: auto;
    }
  }
`;

export const SelectSection = styled.section<StyleSelectProps>`
  max-width: 400px;

  ${(props) => {
    if (props.$expand) {
      return css`
        ${SelectLabelGroup} {
          .label:not(:focus) {
            ${CommonFocused()}
          }
        }

        ${SelectOptionGroup} {
          display: block;
        }
      `;
    }

    if (props.$selected) {
      return css`
        ${SelectLabelGroup} {
          .label__text {
            color: ${color.black};
          }
        }
      `;
    }
  }}
`;
