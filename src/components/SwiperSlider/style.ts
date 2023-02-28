import styled from "styled-components";
import { flexAlignCen, flexColumn, FontStyle, SizeWH } from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";
import Icon from "Assets/Ico/Icons";
import IcoPrev from "Assets/Images/ico_swiper_prev.svg";

export const SwiperSection = styled.section`
  .swiper {
    display: flex;
    flex-direction: column-reverse;
    
    &-slide {
      height: 400px;
      background: red;
    }

    &-button {
      &-prev,
      &-next {
        ${SizeWH("30px")}

        top: 0;
        left: 0;
        right: 0;
        background: no-repeat center / contain;
        margin: 0;

        &::after {
          display: none;
        }
      }

      &-prev {
        background-image: url("/images/ico_swiper_prev.svg");
      }

      &-next {
        background-image: url("/images/ico_swiper_next.svg");
      }
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
    ${FontStyle(60, 400, color.black, "1.2")}

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
