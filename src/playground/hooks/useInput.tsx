import { ChangeEvent, KeyboardEvent, useEffect, useState, useRef } from "react";

const useInput = (
  typeNumber: number,
  initialValue: string,
  ...validator: Function[]
) => {
  const refInput = useRef<HTMLInputElement | null>(null);

  const [validMax, validIncludes, validPhone] = validator;

  const validReset = {
    error: false,
    success: false,
  };

  const [value, setValue] = useState(initialValue);
  const [valid, setValid] = useState(validReset);
  const [focus, setFocus] = useState(false);

  // validMax (글자 수)
  const handleValidMax = (value: string) => {
    if (!validMax(value)) {
      setValid({ ...validReset, error: true });
    } else {
      setValid({ ...validReset });
      setValue(value);
    }
  };

  // focus
  const onFocus = () => setFocus(true);

  // foucs out
  const onBlur = () => setFocus(false);

  // 엔터키 눌렀을 때
  const onSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && value.length > 0) {
      console.log("Enter 키 눌렀을 때");
      setValue("");
    } 
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    
    

    handleValidMax(value);
    validPhone(value);
  };

  // value 삭제
  const onDelete = () => {
    setValue("");
    setValid(validReset);
    refInput.current?.focus();
  };

  useEffect(() => {
    // console.log("input value : ", value, typeNumber);
  }, [value]);

  return {
    value,
    onChange,
    onDelete,
    refInput,
    onFocus,
    onBlur,
    focus,
    onSubmit,
    valid,
  };
};

export default useInput;
