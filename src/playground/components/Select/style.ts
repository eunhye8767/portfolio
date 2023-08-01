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

export const SelectOptionButton = styled.button``

export const SelectOptionCheckbox = styled.div``

export const SelectOptionList = styled.ul`
  > li {
    & + li {
      margin-top: 8px;
    }
  }
`;

export const SelectOptionGroup = styled.div`
  display: none;
  margin-top: 1px;
  border: 1px solid ${color.lightGrey};
  border-radius: 4px;
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
    if (props.$show) {
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
  }}
`;
