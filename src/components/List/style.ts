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
import { commonSection, subTitle, moreBtn } from "Assets/CommonStyle";

import ArrowRight from "Assets/Images/ico-arrowRight.svg";

export const ListSection = styled.section`
  ${commonSection}
`;

export const ListTitle = styled.h3`
  ${subTitle}
`;

export const ListMoreSection = styled.div`
  overflow: hidden;
`;

export const ListMoreGroup = styled.ul`
  ${flexWrap}

  > li {
    overflow: hidden;
  }

  @media (min-width: ${width.minMobile}) {
    margin: -20px;

    > li {
      width: calc((100% - 80px) / 2);
      margin: 20px;
      border-radius: 20px;
    }
  }

  @media (max-width: ${width.mobile}) {
    margin: -10px;

    > li {
      width: calc((100% - 40px) / 2);
      margin: 10px;
      border-radius: 10px;
    }
  }
`;
