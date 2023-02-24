import Icon from "Assets/Ico/Icons";
import { ScreenOutTitle } from "Assets/MixinStyle";
import { color } from "Assets/StyleVariable";
import {
  NavSection,
  NavArea,
  NavGroup,
  NavItem,
} from "components/NavBar/style";

const NavBar = () => {
  return (
    <NavSection>
      <ScreenOutTitle>포트폴리오 메뉴</ScreenOutTitle>

      <NavArea>
        <NavGroup>
          <li>
            <NavItem className="is-active">
              <span className="ico">
                <Icon size={24} color={color.white} icon="about" />
              </span>
              <span className="txt">About</span>
            </NavItem>
          </li>
          <li>
            <NavItem>
              <span className="ico">
                <Icon size={20} color={color.white} icon="work" />
              </span>
              <span className="txt">Work</span>
            </NavItem>
          </li>
          <li>
            <NavItem>
              <span className="ico">
                <Icon size={20} color={color.white} icon="skills" />
              </span>
              <span className="txt">Skills</span>
            </NavItem>
          </li>
          <li>
            <NavItem>
              <span className="ico">
                <Icon size={16} color={color.white} icon="arrowTop" />
              </span>
              <span className="txt">Top</span>
            </NavItem>
          </li>
        </NavGroup>
      </NavArea>
    </NavSection>
  );
};

export default NavBar;
