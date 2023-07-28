import InputTextPage from "playground/pages/InputTextPage";
import InputTelPage from "playground/pages/InputTelPage";
import InputEmailPage from "playground/pages/InputEmailPage";

const routes = [
  {
    path: "inputText",
    element: <InputTextPage />,
  },
  {
    path: "inputTel",
    element: <InputTelPage />,
  },
  {
    path: "inputEmail",
    element: <InputEmailPage />,
  },
];

export default routes;
