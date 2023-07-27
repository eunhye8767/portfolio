import { ChangeEvent, KeyboardEvent, useEffect, useState, useRef } from "react";

const useInput = (initialValue: string, ...validator: Function[]) => {
  const refInput = useRef<HTMLInputElement | null>(null);

  // const validReset = {
  //   error: false,
  //   success: false,
  // };

  const [value, setValue] = useState(initialValue);
  // const [valid, setValid] = useState(validReset);
  // const [focus, setFocus] = useState(false);

  // const [values, setValues] = useState({
  //   nameValue: "",
  //   numberValue: "",
  //   contentValue: "",
  // });

  // const { nameValue, numberValue, contentValue } = values;

  // const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = e.target;

  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // };

  // useEffect(() => {
  //   if (numberValue.length === 11) {
  //     setValues({
  //       ...values,
  //       numberValue: numberValue.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
  //     });
  //   } else if (numberValue.length === 13) {
  //     setValues({
  //       ...values,
  //       numberValue: numberValue
  //         //하이픈이 입력되면 공백으로 변경되고 하이픈이 다시 생성됨
  //         .replace(/-/g, "")
  //         .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
  //     });
  //   }
  // }, [numberValue]);

  // const [checkKey, setCheckKey] = useState(false);

  // const changeValue = () => {
  //   setValue(value.replace("-", ""));
  // };

  // validMax (글자 수)
  // const handleValidMax = (value: string) => {
  //   if (!validMax(value)) {
  //     setValid({ ...validReset, error: true });
  //   } else {
  //     setValid({ ...validReset });
  //     setValue(value);
  //   }
  // };

  // focus
  // const onFocus = () => setFocus(true);

  // foucs out
  // const onBlur = () => setFocus(false);

  // 엔터키 눌렀을 때
  // const onSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter" && value.length > 0) {
  //     console.log("Enter 키 눌렀을 때");
  //     setValue("");
  //   }
  // };

  // const onChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const {
  //     target: { value },
  //   } = event;

  //   handleValidMax(value);
  //   validPhone(value);
  // };

  // value 삭제
  // const onDelete = () => {
  //   setValue("");
  //   setValid(validReset);
  //   refInput.current?.focus();
  // };

  // const onKey = (evt: React.KeyboardEvent<HTMLInputElement>) => {
  //   evt.key === "-" || evt.key === "+" ? setCheckKey(true) : setCheckKey(false);
  // };

  // useEffect(() => {
  //   changeValue();
  // }, [value]);

  // useEffect(() => {
  //   console.log(value);
  // });

  // return {
  //   value,
  //   onChange,
  //   onDelete,
  //   refInput,
  //   onFocus,
  //   onBlur,
  //   focus,
  //   onSubmit,
  //   valid,
  //   onKey,
  // };

  return {
    refInput,
  }
};

export default useInput;
