import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  useCallback,
} from "react";
import styled from "styled-components";

import { screenOut, ObjFitCover } from "Assets/MixinStyle";
import { width } from "Assets/StyleVariable";

import Visual from "components/Visual";
import Work from "components/Work";
import Skills from "components/Skills";
import NavBar from "components/NavBar";

import MainBgImg from "Assets/Images/bg_main.jpg";

type PropsNumber = number | undefined;

const App = () => {
  const [navCurrNuber, setNavCurrNuber] = useState<number>(0);

  const homeRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const [fixHeightHome, setFixHeightHome] = useState<PropsNumber>(0);
  const [fixHeightWork, setFixHeightWork] = useState<PropsNumber>(0);
  const [fixHeightSkills, setFixHeightSkills] = useState<PropsNumber>(0);
  const [currScrollTop, setCurrScrollTop] = useState(0);

  const [scrollDirect, setScrollDirect] = useState(false);

  // const [boundTopHome, setBoundTopHome] = useState(0);
  // const [boundTopWork, setBoundTopWork] = useState(0);
  // const [boundTopSkills, setBoundTopSkills] = useState(0);

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

  const handleScrollRefCheck = (inH: number, pst: { [k: string]: number }) => {
    const minInH = inH * 0.1;

    if (scrollDirect) {
      // up
      if (0 < pst.home && pst.home < minInH) {
        console.log("home");
      } else if (0 < pst.work && pst.work < minInH) {
        console.log("work");
      } else if (0 < pst.skills && pst.skills < minInH) {
        console.log("skills");
      }
    } else {
      // down
      console.log("zz");
      
    }
  };

  // wheel 방향
  const handleScrollWheel = (e: WheelEvent) => {
    0 < e.deltaY ? setScrollDirect(true) : setScrollDirect(false);
  };

  const handleScrollEvt = useCallback((): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    const boundingTop = {
      home: changeElemBoundTop(homeRef),
      work: changeElemBoundTop(workRef),
      skills: changeElemBoundTop(skillsRef),
    };

    handleRefHeight();
    setCurrScrollTop(scrollTop);

    handleScrollRefCheck(innerHeight, boundingTop);
  }, [currScrollTop]);

  useEffect(() => {
    setScreenSize();

    window.addEventListener("resize", setScreenSize);
    window.addEventListener("resize", handleScrollEvt);

    // 새로고침 시 맨 위로 이동
    // window.onbeforeunload = function pushRefresh() {
    //   window.scrollTo(0, 0);
    // };

    return () => {
      window.removeEventListener("resize", setScreenSize);
      window.removeEventListener("resize", handleScrollEvt);
    };
  }, []);

  // useEffect(() => {
  //   console.log("fixHeight", fixHeightHome, fixHeightWork, fixHeightSkills);
  // }, [fixHeightHome, fixHeightWork, fixHeightSkills]);

  // useEffect(() => {
  //   console.log(
  //     "currScrollTop :",
  //     currScrollTop,
  //     "navCurrNuber :",
  //     navCurrNuber
  //   );
  // }, [currScrollTop, navCurrNuber]);

  useEffect(() => {
    console.log(scrollDirect);
  }, [scrollDirect]);

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
          <Work type="slide" setNavCurrNuber={setNavCurrNuber} />
          <Work type="banner" />
        </div>
        <div ref={skillsRef}>
          <Skills type="slide" setNavCurrNuber={setNavCurrNuber} />
          <Skills type="list" />
        </div>
        <NavBar
          navCurrNuber={navCurrNuber}
          setNavCurrNuber={setNavCurrNuber}
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
