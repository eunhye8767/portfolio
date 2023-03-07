import styled from "styled-components";
import { flexAlignCen, flexCenter, FontStyle, SizeWH } from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";
import {
  commonSection,
  subTitle,
  roundBox,
  btnInTxt,
  btnDisabled,
} from "Assets/CommonStyle";

export const MoreBtnGroup = styled.div`
  @media (min-width: ${width.minMobile}) {
    ${SizeWH("100%", "60px")}
    margin-top: 40px;
  }

  @media (max-width: ${width.mobile}) {
    ${SizeWH("100%", "50px")}
    margin-top: 20px;
  }
`;

export const MoreBtnItem = styled.button`
  ${SizeWH("100%")}
  ${roundBox}

  span {
    ${btnInTxt}
    margin-left: 10px;
  }
`;

export const PaginationBtnGroup = styled.div`
  ${flexAlignCen}
  justify-content: space-between;

  @media (min-width: ${width.minMobile}) {
    margin-top: 40px;
  }

  @media (max-width: ${width.mobile}) {
    margin-top: 20px;
  }
`;

export const PaginationItemGroup = styled.div`
  ${flexCenter}

  @media (min-width: ${width.minMobile}) {
    ${SizeWH("calc((100% - 80px) / 3)", "60px")};
  }

  @media (max-width: ${width.mobile}) {
    ${SizeWH("33.33%", "50px")};
  }
`;

export const PaginationBtnItem = styled.button`
  ${SizeWH("100%")}
  ${roundBox}

  .txt {
    ${FontStyle(16, 600, color.black, "1", 0.04)}
    text-transform: capitalize;

    @media (max-width: ${width.mobile}) {
      font-size: 14px;
    }
  }

  .ico {
    ${SizeWH("14px")}
    display: block;

    svg {
      ${SizeWH("100%")}
      display: block;
    }

    @media (max-width: ${width.mobile}) {
      ${SizeWH("12px")}
    }
  }

  &.prev {
    .is-disabled-prev & {
      ${btnDisabled}
    }

    .ico {
      margin-right: 4px;
      transform: rotate(90deg);
    }
  }

  &.next {
    .is-disabled-next & {
      ${btnDisabled}
    }

    .ico {
      margin-left: 4px;
      transform: rotate(-90deg);
    }
  }
`;

export const PaginationItemNumber = styled.p`
  span {
    ${FontStyle(16, 600, color.black, "1")}

    &.total {
      font-weight: 400;
      color: ${color.grey};

      &::before {
        content: "/";
        margin: 0 10px;
      }
    }

    @media (max-width: ${width.mobile}) {
      font-size: 14px;
    }
  }
`;
