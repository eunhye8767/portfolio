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
import { commonSection, subTitle } from "Assets/CommonStyle";

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

export const ListPaginationSection = styled.div`
  border-top: 2px solid ${color.black};
  overflow: hidden;
`;

export const ListPaginationGroup = styled.ul`
  > li {
    &:not(:last-of-type) {
      border-bottom: 1px solid ${color.line};
    }
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
