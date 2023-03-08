import { useState, useEffect, useRef, MouseEvent, Ref, RefObject } from "react";
import styled from "styled-components";

import { screenOut, ObjFitCover } from "Assets/MixinStyle";
import { width } from "Assets/StyleVariable";

import Visual from "components/Visual";
import Work from "components/Work";
import Skills from "components/Skills";
import NavBar from "components/NavBar";

import MainBgImg from "Assets/Images/bg_main.jpg";

const App = () => {
  const [navCurrNuber, setNavCurrNuber] = useState<number>(0);

  const homeRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  const handleMove = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setScreenSize();

    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };

    window.addEventListener("resize", setScreenSize);
    return window.removeEventListener("resize", setScreenSize);
  }, []);

  return (
    <section className="App">
      <AppTitle>은혜의 포트폴리오</AppTitle>

      <AppBgSection>
        <img src={MainBgImg} alt="메인bg" />
      </AppBgSection>

      <div className="container">
        <div ref={homeRef}>
          <Visual />
        </div>
        <div ref={workRef}>
          <Work type="slide" setNavCurrNuber={setNavCurrNuber} />
        </div>
        <Work type="banner" />
        <div ref={skillsRef}>
          <Skills type="slide" setNavCurrNuber={setNavCurrNuber} />
        </div>
        <Skills type="list" />
        <NavBar
          navCurrNuber={navCurrNuber}
          setNavCurrNuber={setNavCurrNuber}
          onTopMove={() => {handleMove(homeRef)}}
          onWorkMove={() => {handleMove(workRef)}}
          onSkillsMove={() => {handleMove(skillsRef)}}
        />
      </div>
    </section>
  );
};

export default App;

const AppTitle = styled.h1`
  ${screenOut}
`;

const AppBgSection = styled.div`
  @media (min-width: ${width.mobile}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      ${ObjFitCover}
    }
  }

  @media (max-width: ${width.mobile}) {
    display: none;
  }
`;
