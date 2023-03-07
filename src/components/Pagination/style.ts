import styled from "styled-components";
import {
  flexCenter,
  flexColumn,
  flexJustCen,
  flexWrap,
  flexJustBet,
  FontStyle,
  SizeWH,
} from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";
import {
  commonSection,
  subTitle,
  moreBtn,
  roundBox,
  btnInTxt,
} from "Assets/CommonStyle";

export const PaginationMoreSection = styled.div``;

export const PaginationMoreButton = styled.button`
  ${roundBox}

  span {
    ${btnInTxt}
    margin-left: 10px;
  }

  @media (min-width: ${width.minMobile}) {
    ${SizeWH("100%", "60px")}
    margin-top: 40px;
  }

  @media (max-width: ${width.mobile}) {
    ${SizeWH("100%", "50px")}
    margin-top: 20px;
  }
`;
