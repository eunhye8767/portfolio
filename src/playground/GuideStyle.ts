import styled, { css } from "styled-components";
import {
  FontStyle
} from "Assets/MixinStyle";
import { color } from "Assets/StyleVariable";

export const GuideTitle = styled.h2`
  ${FontStyle(24, 700, color.black)}
`

export const GuideList = styled.ul`
  > li {
    margin-top: 20px;
  }
`

export const GuideSection = styled.section`
  padding: 50px;
`