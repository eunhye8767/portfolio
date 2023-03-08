import { useState, useEffect } from "react";
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

  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
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
        <Visual />
        <Work type="slide" setNavCurrNuber={setNavCurrNuber} />
        <Work type="banner" />
        <Skills type="slide" setNavCurrNuber={setNavCurrNuber} />
        <Skills type="list" />
        <NavBar navCurrNuber={navCurrNuber} setNavCurrNuber={setNavCurrNuber} />
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
