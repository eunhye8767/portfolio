import { useState, useEffect } from "react";

import Icon from "Assets/Ico/Icons";
import { ScreenOutTitle } from "Assets/MixinStyle";
import { color } from "Assets/StyleVariable";
import { NavSection, NavArea, NavGroup, NavItem } from "./style";

interface Props {
  navCurrNumber: number;
  onTopMove?: () => void;
  onWorkMove?: () => void;
  onSkillsMove?: () => void;
}
const NavBar = ({
  navCurrNumber,
  onTopMove,
  onWorkMove,
  onSkillsMove,
}: Props) => {
  const menuList = [
    {
      txt: "about",
      ico: <Icon size={24} color={color.white} icon="about" />,
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
    {
      txt: "top",
      ico: <Icon size={16} color={color.white} icon="arrowTop" />,
      onclick: onTopMove,
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
        </NavGroup>
      </NavArea>
    </NavSection>
  );
};

export default NavBar;
