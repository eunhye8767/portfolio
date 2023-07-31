import { useState } from "react";

import useInputRef from "playground/hooks/useInputRef";
import useInputView from "playground/hooks/useInputView";

const useInputPassword = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [pwType, setPwType] = useState({
    type: "password",
    visible: false,
  });

  const refInput = useInputRef();
  const clickView = useInputView(pwType, setPwType);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = evt;

    if (value.length <= 15) {
      setValue(value);    


    // console.log(/[\^\\!\\@\\#\\$\\%\\^\\*\\+\\=\\-]/.test(value));
    }
  };

  return {
    pwType,
    refInput,
    value,
    onChange,
    clickView,
  };
};

export default useInputPassword;
