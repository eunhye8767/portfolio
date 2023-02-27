import { useEffect } from "react";
import styled from "styled-components";

import { screenOut } from "Assets/MixinStyle";
import Icon from "Assets/Ico/Icons";

import Visual from "components/Visual/";
import NavBar from "components/NavBar";

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
    <section className="App">
      <AppTitle>은혜의 포트폴리오</AppTitle>

      <div className="container">
        <Visual />
        <NavBar />
      </div>

      <p>1234567890!AVD *&^%@#$%</p>
      <table>
        <caption> zz</caption>
      </table>
      
      <Icon size={30} color="red" icon="arrowLeft" />
      <Icon size={30} color="red" icon="arrowRight" />
    </section>
  );
};

export default App;

const AppTitle = styled.h1`
  ${screenOut}
`;
