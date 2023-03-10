import { useState, useEffect, useRef, RefObject, useCallback } from "react";
import styled from "styled-components";

import { screenOut, ObjFitCover } from "Assets/MixinStyle";
import { width } from "Assets/StyleVariable";

import Visual from "components/Visual";
import ContsForm from "components/ContsElem";
import NavBar from "components/NavBar";

import MainBgImg from "Assets/Images/bg_main.jpg";

type PropsNumber = number | undefined;

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const [fixHeightHome, setFixHeightHome] = useState<PropsNumber>(0);
  const [fixHeightWork, setFixHeightWork] = useState<PropsNumber>(0);
  const [fixHeightSkills, setFixHeightSkills] = useState<PropsNumber>(0);
  const [navCurrNumber, setNavCurrNumber] = useState<number>(0);
  const [currScrollTop, setCurrScrollTop] = useState<number>(0);
  const [scrollDirect, setScrollDirect] = useState<boolean>(false);

  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  // Ref Height
  const checkRefHeight = (ref: RefObject<HTMLDivElement>) => {
    return ref.current?.offsetHeight;
  };

  // Ref 실시간 top
  const changeElemBoundTop = (ref: RefObject<HTMLDivElement>) => {
    return Number(ref.current?.getBoundingClientRect().top);
  };

  // Ref move로 이동
  const handleMove = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Ref Height 재계산
  const handleRefHeight = () => {
    // 기존값과 다를 경우
    if (fixHeightHome !== checkRefHeight(homeRef))
      setFixHeightHome(checkRefHeight(homeRef));
    if (fixHeightWork !== checkRefHeight(workRef))
      setFixHeightWork(checkRefHeight(workRef));
    if (fixHeightSkills !== checkRefHeight(skillsRef))
      setFixHeightSkills(checkRefHeight(skillsRef));
  };

  const handleScrollRefCheck = () => {
    const { innerHeight } = window;

    const minInH = innerHeight * 0.1;
    const maxInH = innerHeight * 0.6;

    const pst = {
      home: changeElemBoundTop(homeRef),
      work: changeElemBoundTop(workRef),
      skills: changeElemBoundTop(skillsRef),
    };

    if (scrollDirect) {
      // up
      if (0 < pst.home && pst.home < minInH) {
        setNavCurrNumber(0);
      } else if (0 < pst.work && pst.work < minInH) {
        setNavCurrNumber(1);
      } else if (0 < pst.skills && pst.skills < minInH) {
        setNavCurrNumber(2);
      }
    } else {
      // down
      if (pst.home <= maxInH && pst.work > maxInH) {
        setNavCurrNumber(0);
      } else if (pst.work <= maxInH && pst.skills > maxInH) {
        setNavCurrNumber(1);
      } else if (pst.skills <= maxInH) {
        setNavCurrNumber(2);
      }
    }
  };

  // wheel 방향
  const handleScrollWheel = (e: WheelEvent) => {
    0 < e.deltaY ? setScrollDirect(true) : setScrollDirect(false);
  };

  const handleScrollEvt = useCallback((): void => {
    const { scrollTop } = document.documentElement;

    setCurrScrollTop(scrollTop);
    handleRefHeight();
    handleScrollRefCheck();
  }, [currScrollTop]);

  useEffect(() => {
    setScreenSize();
    handleScrollRefCheck();

    window.addEventListener("resize", setScreenSize);
    window.addEventListener("resize", handleScrollEvt);

    return () => {
      window.removeEventListener("resize", setScreenSize);
      window.removeEventListener("resize", handleScrollEvt);
    };
  }, []);

  useEffect(() => {
    if (currScrollTop === 0) setNavCurrNumber(0);
  }, [currScrollTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvt, true);
    window.addEventListener("wheel", handleScrollWheel);

    return () => {
      window.removeEventListener("scroll", handleScrollEvt, true);
      window.removeEventListener("wheel", handleScrollWheel);
    };
  }, [handleScrollEvt, scrollDirect]);

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
          <ContsForm cate="work" />
        </div>
        <div ref={skillsRef}>
          <ContsForm cate="skills" />
        </div>
        <NavBar
          navCurrNumber={navCurrNumber}
          onTopMove={() => {
            handleMove(homeRef);
          }}
          onWorkMove={() => {
            handleMove(workRef);
          }}
          onSkillsMove={() => {
            handleMove(skillsRef);
          }}
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
