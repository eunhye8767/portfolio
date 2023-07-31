import { useEffect, useState } from "react";

import { InputSection, InputGroup } from "playground/components/styles/input";

import useInputPassword from "playground/hooks/useInputPassword";
import useFocus from "playground/hooks/useFocus";

import FormMsg from "playground/components/FormMsg";

import { InputProps } from "playground/playground";

const InputPassword = ({ label, placeholder, initialValue }: InputProps) => {
  const validReset = {
    error: false,
    success: false,
    msg: "",
  };

  const validCommon = {
    ...validReset,
    error: true,
  };

  const [valid, setValid] = useState(validReset);

  const { pwType, refInput, value, onChange, clickView } =
    useInputPassword(initialValue);

  const { focus, onFocus, onBlur } = useFocus();

  const onFocusOut = () => {
    const reg = /^(?=.*[a-zA-Z])(?=.*[^\\!\\@\\#\\$\\%\\^\\*\\+\\=\\-])(?=.*[0-9]).{8,15}$/;
    const startRegex = /^[a-zA-Z]/;
    const hangulCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const id = "abcd";

    onBlur();

    if (!startRegex.test(value)) {
      setValid({
        ...validCommon,
        msg: "영문(대/소문자)으로 시작해주세요",
      });
    } else if (/(\w)\1\1/.test(value)) {
      setValid({
        ...validCommon,
        msg: "같은 문자를 3번 이상 사용하실 수 없습니다.",
      });
    } else if (/[!@#$%^*+=-]{3,}/.test(value)) {
      setValid({
        ...validCommon,
        msg: "특수문자(!@#$%^*+=-)를 3번 이상 사용하실 수 없습니다.",
      });
    } else if (value.search(id) >= 0) {
      setValid({
        ...validCommon,
        msg: "비밀번호에 아이디가 포함되었습니다.",
      });
    } else if (value.search(/\s/) > 0) {
      setValid({
        ...validCommon,
        msg: "비밀번호는 공백 없이 입력해주세요.",
      });
    } else if (hangulCheck.test(value)) {
      setValid({
        ...validCommon,
        msg: "비밀번호에 한글을 사용 할 수 없습니다.",
      });
    } else if (!reg.test(value)) {
      setValid({
        ...validCommon,
        msg: "비밀번호는 8자 이상이어야 하며, 영문(대/소문자), 숫자, 특수문자를 모두 포함해야 합니다.",
      });
    } else {
      setValid(validReset);
    }    
  };

  return (
    <InputSection>
      <InputGroup
        $focus={focus}
        $valid={valid}
        $value={value.length > 0 ? true : false}
      >
        <label className="screen-out">{label}</label>

        <input
          ref={refInput}
          type={pwType.type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onFocusOut}
        />

        {value.length > 0 && clickView}
      </InputGroup>

      {(valid.error || valid.success) && <FormMsg valid={valid} />}
    </InputSection>
  );
};

export default InputPassword;
