/**
 * https://react-icons.github.io/react-icons
 */

import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

import { InputSection, InputGroup } from "playground/components/styles/input";

import useInputText from "playground/hooks/useInputText";
import useFocus from "playground/hooks/useFocus";

import FormMsg from "playground/components/FormMsg";

import { InputProps } from "playground/playground";

interface InputTextProps extends InputProps {
  maxLength: number;
}

const InputText = ({
  label,
  placeholder,
  initialValue,
  maxLength,
}: InputTextProps) => {
  const validReset = {
    error: false,
    success: false,
    msg: "",
  };

  const validMax = (value: string) => value.length <= maxLength;

  const [valid, setValid] = useState(validReset);

  const { refInput, value, onChange, clickDelete } = useInputText(
    initialValue,
    maxLength,
    validReset,
    setValid,
    validMax
  );
  const { focus, onFocus, onBlur } = useFocus();

  const onFocusOut = () => {
    onBlur();
    setValid(validReset);
  };

  return (
    <>
      <InputSection>
        <InputGroup
          $focus={focus}
          $valid={valid}
          $value={value.length > 0 ? true : false}
        >
          <label className="screen-out">{label}</label>

          <input
            ref={refInput}
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onFocusOut}
          />

          {value.length > 0 && clickDelete}
        </InputGroup>

        {(valid.error || valid.success) && <FormMsg valid={valid} />}
      </InputSection>
    </>
  );
};

export default InputText;
