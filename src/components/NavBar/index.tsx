import { useState, useEffect } from "react";

import Icon from "Assets/Ico/Icons";
import { ScreenOutTitle } from "Assets/MixinStyle";
import { color } from "Assets/StyleVariable";
import { NavSection, NavArea, NavGroup, NavItem } from "./style";

interface Props {
  navCurrNuber: number;
  setNavCurrNuber: React.Dispatch<React.SetStateAction<number>>;
  onTopMove?: () => void;
  onWorkMove?: () => void;
  onSkillsMove?: () => void;
}
const NavBar = ({
  navCurrNuber,
  setNavCurrNuber,
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
  const lastIdx = menuList.length - 1;

  const handleTabSelect = (idx: number) => {
    setNavCurrNuber(idx);
  };

  const handleMoveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollCheck = () => {
    if (window.scrollY === 0) setNavCurrNuber(0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollCheck);
    return window.removeEventListener("scroll", handleScrollCheck);
  }, [navCurrNuber]);

  return (
    <NavSection>
      <ScreenOutTitle>포트폴리오 메뉴</ScreenOutTitle>

      <NavArea>
        <NavGroup>
          {menuList.map((menu, idx) => (
            <li
              className={idx === navCurrNuber ? "is-active" : ""}
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
