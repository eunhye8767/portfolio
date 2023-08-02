import styled, { css } from "styled-components";
import {
  SizeWH,
  screenOut,
  svgIcoGroup,
  CommonFocused,
  flexJustStart,
  FontStyle,
  Ellipsis,
  flexAlignCen,
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

export const SelectOptionCheckbox = styled.div`
  position: relative;
  padding: 8px 16px;
  transition: background 0.3s;

  &:hover {
    background: ${color.hover};
  }

  input {
    ${screenOut}

    & + label {
      ${flexAlignCen}
      cursor: pointer;

      .checkbox {
        &__ico {
          ${SizeWH("14px")}

          position: relative;
          flex-shrink: 0;
          background: ${color.white};
          border: 1px solid ${color.line};
          border-radius: 4px;

          &::after {
            ${SizeWH("8px", "4px")}

            display: none;
            position: absolute;
            top: 3px;
            left: 2px;
            border: 1px solid ${color.white};
            border-top-color: transparent;
            border-right-color: transparent;
            transform: rotate(-45deg);
            content: "";
          }
        }

        &__text {
          ${FontStyle(12, 400, color.black)}
          ${Ellipsis}

          flex-grow: 1;
          padding-left: 4px;
        }
      }
    }

    &:checked + label {
      .checkbox {
        &__ico {
          background: ${color.teal};
          border-color: ${color.teal};

          &::after {
            display: block;
          }
        }
      }
    }
  }
`;

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
