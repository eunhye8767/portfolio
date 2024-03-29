import Icon from "Assets/Ico/Icons";
import { ScreenOutTitle } from "Assets/MixinStyle";
import { color } from "Assets/StyleVariable";
import { NavSection, NavArea, NavGroup, NavItem } from "./style";

interface Props {
  navCurrNumber: number;
  isOpened: boolean;
  onTopMove?: () => void;
  onWorkMove?: () => void;
  onSkillsMove?: () => void;
  onOpen?: () => void;
}
const NavBar = ({
  navCurrNumber,
  isOpened,
  onTopMove,
  onWorkMove,
  onSkillsMove,
  onOpen,
}: Props) => {
  const menuList = [
    {
      txt: "home",
      ico: <Icon size={24} color={color.white} icon="home" />,
      onclick: onTopMove,
    },
    {
      txt: "work",
      ico: <Icon size={22} color={color.white} icon="work" />,
      onclick: onWorkMove,
    },
    {
      txt: "skills",
      ico: <Icon size={22} color={color.white} icon="skills" />,
      onclick: onSkillsMove,
    },
  ];

  return (
    <NavSection>
      <ScreenOutTitle>포트폴리오 메뉴</ScreenOutTitle>

      <NavArea>
        <NavGroup>
          {menuList.map((menu, idx) => (
            <li
              className={idx === navCurrNumber ? "is-active" : ""}
              key={menu.txt}
            >
              <NavItem onClick={menu.onclick}>
                <span className="ico">{menu.ico}</span>
                <span className="txt">{menu.txt}</span>
              </NavItem>
            </li>
          ))}
          <li className={`about ${isOpened ? "is-active" : ""}`}>
            <NavItem onClick={onOpen}>
              <span className="ico">
                <Icon size={24} color={color.white} icon="about" />
              </span>
              <span className="txt">about</span>
            </NavItem>
          </li>
        </NavGroup>
      </NavArea>
    </NavSection>
  );
};

export default NavBar;
