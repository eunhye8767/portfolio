import styled from "styled-components";
import {
  flexAlignCen,
  flexColumn,
  flexWrap,
  FontStyle,
  screenOut,
  SizeWH,
  MultiEllipsis,
} from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";

export const SwiperSection = styled.section`
  .swiper {
    display: flex;
    flex-direction: column-reverse;

    &-button {
      &-prev,
      &-next {
        ${SizeWH("30px")}

        top: calc((72px * 2) - 30px);
        left: initial;
        background: no-repeat center / contain;
        margin: 0;
        z-index: 100;

        &::after {
          display: none;
        }
      }

      &-prev {
        right: 230px;
        background-image: url("/images/ico_swiper_prev.svg");
      }

      &-next {
        right: 140px;
        background-image: url("/images/ico_swiper_next.svg");
      }
    }

    &-pagination-fraction {
      ${SizeWH("60px", "30px")}
      ${FontStyle(20, 400, color.black, "30px")}

      bottom: initial;
      left: initial;
      top: calc((72px * 2) - 30px);
      right: 170px;
    }
  }

  @media (min-width: ${width.minMobile}) {
    padding: 100px 0;
  }

  @media (max-width: ${width.mobile}) {
  }
`;

export const SwiperTitle = styled.h2`
  ${flexColumn}
  margin-bottom: 50px;

  span {
    ${FontStyle(60, 400, color.black, "72px")}

    &:nth-of-type(2) {
      font-weight: 700;
    }
  }

  @media (min-width: ${width.minMobile}) {
    padding: 0 150px;
  }

  @media (max-width: ${width.mobile}) {
  }
`;

export const SwiperSlideItem = styled.div`
  box-shadow: inset 0 0 0 1px ${color.line};
  border-radius: 20px;
`;

export const SlideItemFigure = styled.figure`
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  figcaption {
    ${screenOut}
  }
`;

export const SlideItemConts = styled.div`
  padding: 30px;
`;

export const SlideItemType = styled.p`
  display: flex;
  margin-bottom: 10px;

  span {
    ${flexAlignCen}
    ${FontStyle(12, 700, color.blue, "1")}

    height: 30px;
    padding: 0 8px;
    border: 1px solid ${color.blue};
    border-radius: 15px;

    & + span {
      margin-left: 4px;
    }
  }
`;

export const SlideItemTitle = styled.p`
  ${MultiEllipsis(30, 40, 2, "700", color.black)}
  height: 80px;

  a {
    font: inherit;
  }
`;

export const SlideItemDesc = styled.p`
  ${FontStyle(20, 400, color.black, "1.4")}
  margin-top: 20px;
`;

export const SlideItemUrl = styled.p`
  ${flexAlignCen}
  
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${color.line};

  a {
    ${flexAlignCen}

    span {
      ${FontStyle(16, 400, color.grey, "1")}
      margin-left: 4px;
    }

    & + a {
      margin-left: 30px;
    }
  }
`;
