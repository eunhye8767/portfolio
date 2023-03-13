import { Dispatch, SetStateAction } from "react";

import Icon from "Assets/Ico/Icons";
import { color } from "Assets/StyleVariable";

import {
  AboutSection,
  AboutArea,
  AboutBtnClose,
  AboutGreet,
  AboutInfoList,
} from "./style";

interface Props {
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

const About = ({ setIsOpened }: Props) => {
  return (
    <AboutSection>
      <AboutArea>
        <AboutGreet>
          웹 퍼블리셔
          <br />
          이은혜 입니다 :D
        </AboutGreet>

        <AboutInfoList>
          <li>
            <span className="email">leh8767@nate.com</span>
          </li>
          <li>
            <span className="phone">010-2990-8767</span>
          </li>
        </AboutInfoList>

        <AboutBtnClose
          onClick={() => {
            setIsOpened(false);
          }}
        >
          <span>닫기</span>
        </AboutBtnClose>
      </AboutArea>
    </AboutSection>
  );
};

export default About;
