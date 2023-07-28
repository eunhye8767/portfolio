import InputTextPage from "playground/pages/InputTextPage";
import InputTelPage from "playground/pages/InputTelPage";

import { RouteObject } from 'react-router-dom';


const routes = [
  {
    path: "inputText",
    element: <InputTextPage />,
  },
  {
    path: "inputTel",
    element: <InputTelPage />,
  },
  // {
  //   path: "inputEmail",
  //   element: InputEmail,
  // },
];

export default routes;
