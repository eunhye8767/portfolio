import styled from "styled-components";
import { flexAlignCen, flexColumn, FontStyle } from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";

export const SwiperSection = styled.section`
  position: relative;
  
  @media (min-width: ${width.minMobile}) {
    padding: 100px 0;
  }

  @media (max-width: ${width.mobile}) {
    
  }
`

export const SwiperArea = styled.div`

`

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
`