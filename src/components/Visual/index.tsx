import { color } from "Assets/StyleVariable";
import { ScreenOutTitle } from "Assets/MixinStyle";
import myImg from "Assets/Images/obj_my.png";
import Icon from "Assets/Ico/Icons";

import {
  VisualSection,
  VisualGroup,
  VisualFigureGroup,
  VisualFigure,
  VisualResumeGroup,
  VisualResumeBtn,
} from "./style";

const Visual = () => {
  return (
    <VisualSection>
      <ScreenOutTitle>웹 퍼블리셔 이은혜 소개 영역</ScreenOutTitle>
      <VisualGroup>
        <div>zzz</div>
        <VisualFigureGroup>
          <VisualFigure>
            <img src={myImg} alt="은혜랑 요셉이랑" />
          </VisualFigure>
          <VisualResumeGroup>
            <VisualResumeBtn>
              <span className="txt">R</span>
              <span className="txt">E</span>
              <span className="txt">S</span>
              <span className="txt">U</span>
              <span className="txt">M</span>
              <span className="txt">E</span>
              <Icon size={16} color={color.white} icon="download" />
            </VisualResumeBtn>
          </VisualResumeGroup>
        </VisualFigureGroup>
      </VisualGroup>
    </VisualSection>
  );
};

export default Visual;
