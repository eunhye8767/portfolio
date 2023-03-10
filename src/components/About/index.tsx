import React, { Dispatch, SetStateAction } from "react";

import { AboutSection } from "./style";

interface Props {
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

const About = ({ setIsOpened }: Props) => {
  return (
    <AboutSection>
      <button
        onClick={() => {
          setIsOpened(false);
        }}
      >
        닫기
      </button>
      글 입력
    </AboutSection>
  );
};

export default About;
