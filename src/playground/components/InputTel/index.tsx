import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

import { InputSection, InputGroup } from "playground/components/styles/input";

import useAutoHyphen from "playground/hooks/useAutoHyphen";
import useFocus from "playground/hooks/useFocus";

import FormMsg from "playground/components/FormMsg";

import { InputProps } from "playground/playground";

const InputTel = ({ label, placeholder, initialValue }: InputProps) => {
  const validReset = {
    error: false,
    success: false,
    msg: "",
  };

  const { refInput, valueNum, handleAutoHyphen, clickDelete } =
    useAutoHyphen(initialValue);
  const { focus, onFocus, onBlur } = useFocus();

  const [valid, setValid] = useState(validReset);

  const onKeyEvt = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { code } = e;
    const number = /^[0-9]+$/;

    if (refInput.current && refInput.current?.value.length < 13) {
      code.replace("Numpad", "").match(number) ||
      code.includes("Backspace") ||
      code.includes("Tab") ||
      code.includes("NumpadEnter")
        ? setValid(validReset)
        : setValid({
            ...validReset,
            error: true,
            msg: "숫자를 입력하세요",
          });
    }
  };

  const onFocusOut = () => {
    onBlur();

    refInput.current && refInput.current?.value.length < 13
      ? setValid({
          ...validReset,
          error: true,
          msg: "번호 11자리를 입력해주세요",
        })
      : setValid(validReset);
  };

  return (
    <>
      <InputSection>
        <InputGroup
          $focus={focus}
          $valid={valid}
          $value={valueNum.length > 0 ? true : false}
        >
          <label className="screen-out">{label}</label>

          <input
            ref={refInput}
            type="tel"
            value={valueNum}
            placeholder={placeholder}
            onChange={handleAutoHyphen}
            onKeyUp={onKeyEvt}
            onFocus={onFocus}
            onBlur={onFocusOut}
          />

          {valueNum.length > 0 && (
            <button
              type="button"
              className="btn-delete"
              onClick={clickDelete}
              onFocus={onFocus}
              onBlur={onBlur}
            >
              <RiCloseCircleLine />
              <span className="screen-out">삭제</span>
            </button>
          )}
        </InputGroup>

        {(valid.error || valid.success) && <FormMsg valid={valid} />}
      </InputSection>
    </>
  );
};

export default InputTel;
