import styled from "styled-components";
import { flexWrap, flexJustBet, FontStyle, SizeWH } from "Assets/MixinStyle";
import { width, color } from "Assets/StyleVariable";

export const AboutSection = styled.section`
  ${SizeWH("100%", "400px")}

  position: fixed;
  background: ${color.orange};
  z-index: 1000;
  
  @media (min-width: ${width.minMobile}) {
    left: 50%;
    bottom: 0;
    max-width: ${width.minMobile};
    transform: translateX(-50%);
  }

  @media (max-width: ${width.mobile}) {
  }
`;
