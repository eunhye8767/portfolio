import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import reportWebVitals from "reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageInput from "playground/pages/PageInput";

import GlobalStyle from "Assets/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/playground/input" element={<PageInput />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
