/**
 * https://react-icons.github.io/react-icons
 */

import { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

import { InputProps } from "playground/playground";

import useInput from "playground/hooks/useInput";
import FormMsg from "playground/components/FormMsg";

import { InputSection, InputGroup } from "../styles/input";

const Input = (props: InputProps) => {
  // const validMax = (value: string) => value.length <= maxLength;
  // const validIncludes = (value: string) => !value.includes("@");


  // const {
  //   value,
  //   onChange,
  //   onDelete,
  //   refInput,
  //   focus,
  //   onFocus,
  //   onBlur,
  //   onSubmit,
  //   onKey,
  //   valid,
  // } = useInput(initialValue, validMax, validIncludes, validPhone);

  // const [type, setType] = useState("");

  // useEffect(() => {
  //   switch (typeNumber) {
  //     case 0:
  //       setType("text");
  //       break;
  //     case 1:
  //       setType("number");
  //       break;
  //     case 2:
  //       setType("tel");
  //       break;
  //     case 3:
  //       setType("search");
  //       break;
  //     case 4:
  //       setType("password");
  //       break;
  //     case 5:
  //       setType("email");
  //       break;
  //     default:
  //       break;
  //   }
  // }, []);

  // // useEffect(() => {
  // //   console.log(value);
  // // }, [value])

  // const [values, setValues] = useState("")

  return (
    <>1
      {/* <InputSection>
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
            onKeyUp={onKey}
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
      </InputSection> */}
    </>
  );
};

export default Input;
