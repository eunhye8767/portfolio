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

export const ItemsListSection = styled.section`
  ${commonSection}
`;

export const ItemsListTitle = styled.h3`
  ${subTitle}
`;

export const ItemsBtnMore = styled.button`
  ${moreBtn}
`;

export const ItemsListArea = styled.div`
  border-top: 2px solid ${color.black};
  overflow: hidden;
`;

export const ItemsListGroup = styled.ul`
  &.is-more {
    > li {
      &:not(:last-of-type) {
        border-bottom: 1px solid ${color.line};
      }
    }
  }

  &.is-not-more {

  }

  > li {
    a {
      display: block;
      padding: 20px 0;

      .date {
        ${FontStyle(16, 400, color.grey, "1")}
        margin-bottom: 10px;

        @media (max-width: ${width.mobile}) {
          font-size: 14px;
        }
      }

      .tit {
        ${flexJustBet}

        span {
          ${FontStyle(24, 700, color.black, "1.4")}

          @media (max-width: ${width.mobile}) {
            font-size: 18px;
          }
        }

        &::after {
          ${SizeWH("12px")}

          content: "";
          flex-shrink: 0;
          margin: calc(((20px * 1.4) - 12px) / 2) 0 0 10px;
          background: url(${ArrowRight}) no-repeat center / contain;
        }
      }
    }
  }
`;
