import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import reportWebVitals from "reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "routes";

import InputTextPage from "playground/pages/InputTextPage";
import InputTelPage from "playground/pages/InputTelPage";

import GlobalStyle from "Assets/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />

      <Routes>
      <Route path="/" element={<App />} />
        {routes.map(({ path, element }) => (
          <Route key={path} path={`/playground/${path}`} element={element} />
        ))}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
