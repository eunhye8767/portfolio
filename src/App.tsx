import { useEffect } from "react";
import GlobalStyle from "./Assets/GlobalStyle";
import Icon from "./Assets/Ico/Icons";

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
        <h1>은혜의 포트폴리오</h1>
        <p>1234567890!AVD *&^%@#$%</p>
        <table>
          <caption> zz</caption>
        </table>
        <Icon size={30} color="red" icon="download" />
      </section>
    </>
  );
};

export default App;
