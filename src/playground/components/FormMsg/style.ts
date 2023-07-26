import styled, { css } from "styled-components";
import { color } from "Assets/StyleVariable";

import { StyleInputProps } from "playground/playground";

export const FormMsgGroup = styled.div<StyleInputProps>`
  margin-top: 8px;

  p {
    font-size: 14px;
    font-weight: 400;
  }

  ${(props) => {
    if (props.$valid?.error) {
      return css`
        > p {
          color: ${color.red};
        }
      `;
    } else if (props.$valid?.success) {
      return css`
        > p {
          color: ${color.green};
        }
      `;
    }
  }}
`;
