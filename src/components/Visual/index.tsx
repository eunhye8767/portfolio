import { color } from "Assets/StyleVariable";
import { ScreenOutTitle } from "Assets/MixinStyle";
import myImg from "Assets/Images/obj_my.png";
import Icon from "Assets/Ico/Icons";

import {
  VisualSection,
  VisualFigureGroup,
  VisualFigure,
  VisualResumeGroup,
  VisualResumeBtn,
  VisualTitleGroup,
} from "./style";

const Visual = () => {
  const resume = "RESUME";

  // https://raw.githubusercontent.com/{owner}/{repo}/{branch}/{file_path}
  const fileUrl = "https://raw.githubusercontent.com/eunhye8767/portfolio/master/Files/leh-resume.pdf";

  return (
    <VisualSection>
      <ScreenOutTitle>웹 퍼블리셔 이은혜 소개 영역</ScreenOutTitle>
      <div>
        <VisualTitleGroup>
          <small>Hello, world</small>
          <strong>EH's PORTFOLIO</strong>
        </VisualTitleGroup>
        <VisualFigureGroup>
          <VisualFigure>
            <img src={myImg} alt="은혜랑 요셉이랑" />
          </VisualFigure>
          <VisualResumeGroup>
            <VisualResumeBtn href={fileUrl}>
              {resume.split("").map((txt, idx) => (
                <span className="txt" key={idx}>
                  {txt}
                </span>
              ))}
              <Icon size={16} color={color.white} icon="download" />
            </VisualResumeBtn>
          </VisualResumeGroup>
        </VisualFigureGroup>
      </div>
    </VisualSection>
  );
};

export default Visual;
