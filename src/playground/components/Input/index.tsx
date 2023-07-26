/**
 * https://react-icons.github.io/react-icons
 */

import { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

import { InputProps } from "playground/playground";

import useInput from "playground/hooks/useInput";
import FormMsg from "playground/components/FormMsg";

import { InputSection, InputGroup } from "./style";

const Input = ({
  label,
  placeholder,
  initialValue,
  typeNumber,
  maxLength,
}: InputProps) => {
  const validMax = (value: string) => value.length <= maxLength;
  const validIncludes = (value: string) => !value.includes("@");

  const validPhone = (value:string) => {
    const rawPhone = value.replaceAll("[^0-9]", "");
    let formattedPhone = "";

    if (rawPhone.length < 4) {
      formattedPhone = rawPhone;
    } else if (rawPhone.length < 8) {
      formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(3)}`;
    } else if (rawPhone.length < 11) {
      formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(
        3,
        7
      )}-${rawPhone.slice(7)}`;
    } else {
      formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(
        3,
        7
      )}-${rawPhone.slice(7, 11)}`;
    }

    const displayPhone = formattedPhone.length > 0 ? formattedPhone : "";

    console.log("input:", formattedPhone);
    
    // setValue("phone", displayPhone);
  };

  const {
    value,
    onChange,
    onDelete,
    refInput,
    focus,
    onFocus,
    onBlur,
    onSubmit,
    valid,
  } = useInput(typeNumber, initialValue, validMax, validIncludes, validPhone);

  const [type, setType] = useState("");

  useEffect(() => {
    switch (typeNumber) {
      case 0:
        setType("text");
        break;
      case 1:
        setType("number");
        break;
      case 2:
        setType("tel");
        break;
      case 3:
        setType("search");
        break;
      case 4:
        setType("password");
        break;
      case 5:
        setType("email");
        break;
      default:
        break;
    }
  }, []);

  return (
    <InputSection>
      <InputGroup
        $focus={focus}
        $valid={valid}
        $value={value.length > 0 ? true : false}
      >
        <label className="screen-out">{label}</label>

        <input
          type={type}
          ref={refInput}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyUp={onSubmit}
        />

        {value.length > 0 && (
          <button
            type="button"
            className="btn-delete"
            onClick={onDelete}
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
  );
};

export default Input;
