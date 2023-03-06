import styled from "styled-components";
import {
  flexCenter,
  flexColumn,
  flexJustCen,
  flexWrap,
  FontStyle,
  SizeWH,
} from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";
import { commonSection, subTitle } from "Assets/CommonStyle";

export const ItemsListSection = styled.section`
  ${commonSection}
`

export const ItemsListTitle = styled.h3`
  ${subTitle}
`