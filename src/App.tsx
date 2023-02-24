import { useEffect } from "react";
import styled from "styled-components";

import GlobalStyle from "./Assets/GlobalStyle";
import { screenOut } from "./Assets/MixinStyle";
import Icon from "./Assets/Ico/Icons";
import Visual from "./components/Visual";

const App = () => {
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);

    return window.removeEventListener("resize", setScreenSize);
  }, []);

  return (
    <>
      <GlobalStyle />
      <section className="App">
        <AppTitle>은혜의 포트폴리오</AppTitle>

        <div className="container">
          <Visual />
        </div>

        <p>1234567890!AVD *&^%@#$%</p>
        <table>
          <caption> zz</caption>
        </table>
        <Icon size={30} color="red" icon="download" />
        <Icon size={30} color="red" icon="arrowLeft" />
        <Icon size={30} color="red" icon="arrowRight" />
        <Icon size={30} color="red" icon="about" />
        <Icon size={30} color="red" icon="work" />
        <Icon size={30} color="red" icon="skills" />
        <Icon size={16} color="red" icon="arrowTop" />
      </section>
    </>
  );
};

export default App;

const AppTitle = styled.h1`
  ${screenOut}
`;
