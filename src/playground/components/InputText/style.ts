import styled from "styled-components";
import { SizeWH, screenOut } from "Assets/MixinStyle";

export const InputTextGroup = styled.div`
  ${SizeWH("400px","50px")}

  position: relative;
  margin: 50px;
  border: 1px solid #000;
  border-radius: 4px;

  input {
    ${SizeWH("100%")}
    
    position: absolute;
    top: 0;
    left: 0;
  }
`
