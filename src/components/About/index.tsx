import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

import {
  AboutSection,
  AboutArea,
  AboutBtnClose,
  AboutGreet,
  AboutInfoList,
  // AboutKakao,
  // AboutKakaoQRname,
  // AboutKakaoQRcode,
} from "./style";

// import QRcode from "Assets/Images/obj_qrcode.jpeg";

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
          이은혜 :D
        </AboutGreet>

        <AboutInfoList>
          <li>
            <Link 
              to={"https://github.com/eunhye8767?tab=repositories"} 
              className="git"
              target="_blank"
            >
              My GitHub
            </Link>
          </li>
        </AboutInfoList>

        {/* <AboutInfoList>
          <li>
            <span className="email">leh8767@nate.com</span>
          </li>
          <li>
            <span className="phone">010-2990-8767</span>
          </li>
        </AboutInfoList>

        <AboutKakao>
          <AboutKakaoQRcode>
            <figure>
              <img src={QRcode} alt="카카오톡 QR코드" />
            </figure>

            <AboutKakaoQRname>
              카카오톡 ID<b>leh8767</b>
            </AboutKakaoQRname>
          </AboutKakaoQRcode>
        </AboutKakao> */}

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
