import InputTextPage from "playground/pages/InputTextPage";
import InputTelPage from "playground/pages/InputTelPage";
import InputEmailPage from "playground/pages/InputEmailPage";
import InputPasswordPage from "playground/pages/InputPasswordPage";

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
  {
    path: "inputPassword",
    element: <InputPasswordPage />,
  },
];

export default routes;
