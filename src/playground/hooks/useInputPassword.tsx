import { useEffect, useState } from "react";

import useInputRef from "playground/hooks/useInputRef";
import useInputView from "playground/hooks/useInputView";
import useFocus from "playground/hooks/useFocus";

import errorMsg from "playground/components/InputPassword/errorMsg";

const useInputPassword = (
  initialValue: string,
  setValid: React.Dispatch<React.SetStateAction<typeof validReset>>
) => {
  const validReset = {
    error: false,
    success: false,
    msg: "",
  };

  const regExp = {
    eng: /^[a-zA-Z]/,
    kor: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
    word: /(\w)\1\1/,
    space: /\s/,
    entity: /[!@#$%^*+=-]/,
    full: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
  };

  const [idRegExp, setIdRegExp] = useState("abcd");

  const [value, setValue] = useState(initialValue);
  const [pwType, setPwType] = useState({
    type: "password",
    visible: false,
  });
  const [entityCount, setEntityCount] = useState(0);
  const [validError, setValidError] = useState(false);

  const refInput = useInputRef();
  const clickView = useInputView(pwType, setPwType);
  const { focus, onFocus, onBlur } = useFocus();

  // 3개 이상 오류 메세지 1번 출력
  const checkEntity = () => {
    if (entityCount >= 3) printErrorMsg(1);
  };

  // 오류메세지 출력
  const printErrorMsg = (number: number) => {
    setValid({
      ...validReset,
      error: true,
      msg: errorMsg[number],
    });
  };

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = evt;

    if (value.length <= 15) {
      setEntityCount(0);

      for (let i = 0; i < value.length; i++) {
        if (/\W/.test(value.charAt(i))) {
          // 포함 갯수 체크
          if (regExp.entity.test(value.charAt(i))) {
            setEntityCount((prev) => prev + 1);
          }

          // 포함 있을 때 에러메세지 출력
          if (!regExp.entity.test(value.charAt(i))) {
            return printErrorMsg(0);
          } else {
            setValid(validReset);
          }
        }
      }

      setValidError(true);

      if (!regExp.eng.test(value)) {
        printErrorMsg(2);
      } else if (regExp.word.test(value)) {
        printErrorMsg(3);
      } else if (value.search(idRegExp) >= 0) {
        printErrorMsg(4);
      } else if (value.search(regExp.space) > 0) {
        printErrorMsg(5);
      } else if (regExp.kor.test(value)) {
        printErrorMsg(6);
      } else {
        setValid(validReset);
        setValidError(false);
      }

      setValue(value);
    }
  };

  const onFocusOut = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onBlur();
    if (validError) {
      if (!regExp.full.test(value)) printErrorMsg(7);
    } else {
      onChange(evt);
    }
  };

  useEffect(() => {
    checkEntity();
  }, [entityCount]);

  return {
    pwType,
    refInput,
    value,
    onChange,
    clickView,
    focus,
    onFocus,
    onFocusOut,
  };
};

export default useInputPassword;
