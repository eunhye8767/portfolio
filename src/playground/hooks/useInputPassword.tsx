import { useEffect, useState } from "react";

import useInputRef from "playground/hooks/useInputRef";
import useInputView from "playground/hooks/useInputView";

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
  const [boolean, setBoolean] = useState(false);

  const refInput = useInputRef();
  const clickView = useInputView(pwType, setPwType);

  // 3개 이상 오류 메세지 1번 출력
  const checkEntity = () => {
    if (entityCount >= 3) printErrorMsg(1);
  };

  // 특수문자 포함여부
  const validEntity = (value: string) => {
    setEntityCount(0);

    for (let i = 0; i < value.length; i++) {
      if (/\W/.test(value.charAt(i))) {
        // 포함 갯수 체크
        if (regExp.entity.test(value.charAt(i))) {
          setEntityCount((prev) => prev + 1);
        }

        // 포함 있을 때 에러메세지 출력
        if (!regExp.entity.test(value.charAt(i))) {
          setBoolean(true)
          // return printErrorMsg(0);
        } else {
          setValid(validReset);
        }
      }
    }

    setBoolean(false)

    // setValue(value);
  };

  // 영어로 시작
  const validStartEng = (value: string) => {
    !regExp.eng.test(value) ? setBoolean(true) : setBoolean(false);
    !regExp.eng.test(value) ? printErrorMsg(2) : setValid(validReset);

    setBoolean(false)
    // setValue(value);
  };

  // 같은 문자 3번이상
  const validWord = (value: string) => {
    regExp.word.test(value) ? printErrorMsg(3) : setValid(validReset);
  };

  // 비밀번호에 아이디 포함
  const validId = (value: string) => {
    value.search(idRegExp) >= 0 ? printErrorMsg(4) : setValid(validReset);
  };

  // 공백없이
  const validSpace = (value: string) => {
    value.search(regExp.space) > 0 ? printErrorMsg(5) : setValid(validReset);
  };

  // 한글 사용 불가
  const validKor = (value: string) => {
    regExp.kor.test(value) ? printErrorMsg(6) : setValid(validReset);
  };

  // // 전체 검사
  // const validPassword = (value: string) => {
  //   !regExp.full.test(value) ? printErrorMsg(7) : setValid(validReset);
  // };

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

    if (!boolean && value.length <= 15) {

      setValue(value);


      validEntity(value);
      validStartEng(value);
      // validWord(value);
      // validId(value);
      // validSpace(value);
      // validKor(value);
      // validPassword(value);
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
  };
};

export default useInputPassword;
