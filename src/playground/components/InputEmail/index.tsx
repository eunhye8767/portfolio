import { useState } from "react";

import { InputSection, InputGroup } from "playground/components/styles/input";

import useInputEmail from "playground/hooks/useInputEmail";
import useFocus from "playground/hooks/useFocus";

import FormMsg from "playground/components/FormMsg";

import { InputProps } from "playground/playground";

const InputEmail = ({ label, placeholder, initialValue }: InputProps) => {
  const regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const validReset = {
    error: false,
    success: false,
    msg: "",
  };

  const [valid, setValid] = useState(validReset);

  const { refInput, value, onChange, clickDelete } =
    useInputEmail(initialValue);

  const { focus, onFocus, onBlur } = useFocus();

  const onFocusOut = () => {
    onBlur();
    regExp.test(value)
      ? setValid(validReset)
      : setValid({
          ...validReset,
          error: true,
          msg: "올바른 이메일 주소를 입력하세요",
        });
  };

  const onChangeValid = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (regExp.test(value)) setValid(validReset);
    onChange(evt);
  }

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
          type="email"
          value={value}
          placeholder={placeholder}
          onChange={onChangeValid}
          onFocus={onFocus}
          onBlur={onFocusOut}
        />

        {value.length > 0 && clickDelete}
      </InputGroup>

      {(valid.error || valid.success) && <FormMsg valid={valid} />}
    </InputSection>
  );
};

export default InputEmail;
