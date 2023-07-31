import { useState } from "react";

import useInputRef from "playground/hooks/useInputRef";
import useInputView from "playground/hooks/useInputView";

const useInputPassword = (
  initialValue: string,
  setValid: React.Dispatch<React.SetStateAction<typeof validReset>>
) => {
  const validReset = {
    error: false,
    success: false,
    msg: "",
  };

  const [value, setValue] = useState(initialValue);
  const [pwType, setPwType] = useState({
    type: "password",
    visible: false,
  });
  const [chartCount, setChartCount] = useState(0);
  const [chartChange, setChartChange] = useState(false);

  const refInput = useInputRef();
  const clickView = useInputView(pwType, setPwType);

  // 특수문자
  const validEntity = (value: string) => {
    if (!chartChange) setChartCount(0);

    if (value.length <= 15) {
      

      // // 특수문자 포함여부
      for (let i = 0; i < value.length; i++) {
        if (/\W/.test(value.charAt(i))) {
          if (!/[!@#$%^*+=-]/.test(value.charAt(i))) {
            return setValid({
              ...validReset,
              error: true,
              msg: "특수문자(!@#$%^*+=-)를 입력해주세요",
            });
          } else {
            setValid(validReset);
          }

        }
        
      }
      
      setValue(value);

      // if (/[!@#$%^*+=-]/.test(value.charAt(i))) {
      //   setChartCount((prev) => prev + 1);
      // }
      
      // if (chartCount > 2) {
      //   setValid({
      //     ...validReset,
      //     error: true,
      //     msg: "특수문자를 3번 이상 사용할 수 없습니다.",
      //   });
      //   setChartCount(2);
      // } else {
      //   setValue(value);
      // }
    }
  };

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = evt;

    validEntity(value);
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
