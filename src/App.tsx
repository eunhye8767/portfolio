import { useState, useEffect, useRef, forwardRef } from "react";
import styled from "styled-components";

import { screenOut, ObjFitCover } from "Assets/MixinStyle";
import { width } from "Assets/StyleVariable";

import Visual from "components/Visual";
import Work from "components/Work";
import Skills from "components/Skills";
import NavBar from "components/NavBar";

import MainBgImg from "Assets/Images/bg_main.jpg";

const App = () => {
  // const workRef = useRef<HTMLDivElement>(null);

  const [scrollTop, setScrollTop] = useState<number>(0);
  const [offsetWork, setOffsetWork] = useState<number | undefined>(0);

  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  const handleScroll = () => {
    // console.log(workRef.current?.offsetTop);
    
    // setScrollTop();
  }

  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);

    return window.removeEventListener("resize", setScreenSize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  
  useEffect(() => {
    console.log(scrollTop, offsetWork);
  }, [scrollTop, offsetWork])


  const WorkRef = forwardRef((props, ref) => {
    return <Work ref={ref} type="slide" />
});

  return (
    <section className="App">
      <AppTitle>은혜의 포트폴리오</AppTitle>

      <AppBgSection>
        <img src={MainBgImg} alt="메인bg" />
      </AppBgSection>

      <div className="container">
        <Visual />
        <WorkRef ref={WorkRef} />
        {/* <Work ref={workRef} type="slide" /> */}
        <Work type="banner" />
        <Skills type="slide" />
        <Skills type="list" />
        <NavBar />
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
