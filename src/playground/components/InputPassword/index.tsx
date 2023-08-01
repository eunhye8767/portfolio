import { useState } from "react";

import { InputSection, InputGroup } from "playground/components/styles/input";

import useInputPassword from "playground/hooks/useInputPassword";
import FormMsg from "playground/components/FormMsg";

import { InputProps } from "playground/playground";

const InputPassword = ({ label, placeholder, initialValue }: InputProps) => {
  const validReset = {
    error: false,
    success: false,
    msg: "",
  };

  const [valid, setValid] = useState(validReset);

  const {
    pwType,
    refInput,
    value,
    onChange,
    clickView,
    focus,
    onFocus,
    onFocusOut,
  } = useInputPassword(initialValue, setValid);

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
