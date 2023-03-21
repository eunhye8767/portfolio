import styled from "styled-components";
import { flexCenter, SizeWH, FontStyle } from "Assets/MixinStyle";
import { color } from "Assets/StyleVariable";

export const SpinnersSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000000;
`;

export const SpinnersGroup = styled.div`
  ${flexCenter}
  ${SizeWH("100%")}

  backdrop-filter: blur(5px);
`;

export const SpinnersItem = styled.div`
  .txt {
    ${FontStyle(14, 500, color.line, "1", 0.1)}

    padding-top: 10px;
    text-align: center;
    text-transform: capitalize;
  }
`;
