import { useState, useEffect } from "react";

import Icon from "Assets/Ico/Icons";
import { ScreenOutTitle } from "Assets/MixinStyle";
import { color } from "Assets/StyleVariable";
import {
  NavSection,
  NavArea,
  NavGroup,
  NavItem,
} from "./style";

const NavBar = () => {
  const menuList = [
    {
      txt: "about",
      ico: <Icon size={24} color={color.white} icon="about" />,
    },
    {
      txt: "work",
      ico: <Icon size={22} color={color.white} icon="work" />,
    },
    {
      txt: "skills",
      ico: <Icon size={22} color={color.white} icon="skills" />,
    },
    {
      txt: "top",
      ico: <Icon size={16} color={color.white} icon="arrowTop" />,
    },
  ];

  const [currTab, setCurrTab] = useState(0);

  const handleTabSelect = (idx: number) => {
    setCurrTab(idx);
    console.log(idx);
  };

  return (
    <NavSection>
      <ScreenOutTitle>포트폴리오 메뉴</ScreenOutTitle>

      <NavArea>
        <NavGroup>
          {menuList.map((menu, idx) => (
            <li className={idx === currTab ? "is-active" : ""} key={menu.txt}>
              <NavItem onClick={() => handleTabSelect(idx)}>
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
