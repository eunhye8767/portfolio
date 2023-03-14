import styled from "styled-components";
import {
  flexAlignCen,
  flexColumn,
  FontStyle,
  screenOut,
  SizeWH,
  MultiEllipsis,
  Ellipsis,
} from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";

import IcoPrev from "Assets/Images/ico_swiper_prev.svg";
import IcoNext from "Assets/Images/ico_swiper_next.svg";

export const SwiperSection = styled.section`
  .swiper {
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: ${width.minMobile}) {
      padding: 0 50px;
    }
    
    @media (max-width: ${width.mobile}) {
      padding: 0 20px;
    }

    &-button {
      &-prev,
      &-next {
        left: initial;
        background: no-repeat center / contain;
        margin: 0;
        z-index: 100;

        &::after {
          display: none;
        }

        @media (min-width: ${width.minMobile}) {
          ${SizeWH("30px")}
          top: calc((72px * 2) - 30px);
        }

        @media (max-width: ${width.mobile}) {
          ${SizeWH("20px")}
          top: calc((52px * 2) - 30px);
        }
      }

      &-prev {
        background-image: url(${IcoPrev});

        @media (min-width: ${width.minMobile}) {
          right: 140px;
        }

        @media (max-width: ${width.mobile}) {
          right: 80px;
        }
      }

      &-next {
        background-image: url(${IcoNext});

        @media (min-width: ${width.minMobile}) {
          right: 50px;
        }

        @media (max-width: ${width.mobile}) {
          right: 20px;
        }
      }
    }

    &-pagination-fraction {
      ${FontStyle(20, 400, color.black, "30px")}

      bottom: initial;
      left: initial;

      @media (min-width: ${width.minMobile}) {
        ${SizeWH("60px", "30px")}

        top: calc((72px * 2) - 30px);
        right: 80px;
      }

      @media (max-width: ${width.mobile}) {
        ${SizeWH("40px", "20px")}

        top: calc((52px * 2) - 30px);
        right: 40px;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }

  @media (min-width: ${width.minMobile}) {
    padding-top: 100px;
  }

  @media (max-width: ${width.mobile}) {
    padding-top: 60px;
  }
`;

export const SwiperTitle = styled.h2`
  ${flexColumn}

  span {
    ${FontStyle(50, 400, color.black, "62px")}

    &:nth-of-type(2) {
      font-weight: 700;
    }
  }

  @media (min-width: ${width.minMobile}) {
    margin-bottom: 50px;
  }

  @media (max-width: ${width.mobile}) {
    margin-bottom: 30px;

    span {
      font-size: 40px;
      line-height: 52px;
    }
  }
`;

export const SwiperSlideItem = styled.div`
  box-shadow: inset 0 0 0 1px ${color.line};

  @media (min-width: ${width.minMobile}) {
    border-radius: 20px;
  }

  @media (max-width: ${width.mobile}) {
    border-radius: 10px;
  }
`;

export const SlideItemFigure = styled.figure`
  position: relative;
  overflow: hidden;
  border: 1px solid ${color.line};

  figcaption {
    ${screenOut}
  }

  @media (min-width: ${width.minMobile}) {
    border-radius: 20px;
  }

  @media (max-width: ${width.mobile}) {
    border-radius: 10px;
  }
`;

export const SlideItemConts = styled.div`
  @media (min-width: ${width.minMobile}) {
    padding: 30px;
  }

  @media (max-width: ${width.mobile}) {
    padding: 20px;
  }
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
  a {
    font: inherit;
  }

  @media (min-width: ${width.minMobile}) {
    ${MultiEllipsis(30, 40, 2, "700", color.black)}
    height: 80px;
  }

  @media (max-width: ${width.mobile}) {
    ${MultiEllipsis(20, 26, 2, "700", color.black)}
    height: 52px;

    span {
      display: none;
    }
  }
`;

export const SlideItemDesc = styled.p`
  ${Ellipsis}

  @media (min-width: ${width.minMobile}) {
    ${FontStyle(20, 400, color.black, "1.4")}
    margin-top: 20px;
  }

  @media (max-width: ${width.mobile}) {
    ${FontStyle(14, 400, color.black, "1.4")}
    margin-top: 10px;
  }
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

      @media (max-width: ${width.mobile}) {
        font-size: 14px;
      }
    }

    & + a {
      margin-left: 30px;
    }
  }
`;
