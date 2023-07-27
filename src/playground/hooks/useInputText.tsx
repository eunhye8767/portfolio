import React, { useState } from "react";

import useInputRef from "playground/hooks/useInputRef";
import useInputDelete from "playground/hooks/useInputDelete";

const useInputText = (
  initialValue: string,
  maxLength: number,
  validReset: { error: boolean; success: boolean; msg: string },
  setValid: React.Dispatch<React.SetStateAction<typeof validReset>>,
  validMax: Function
) => {
  const [value, setValue] = useState(initialValue);

  const refInput = useInputRef();

  const checkValidMax = (value: string) => {
    if (!validMax(value)) {
      setValid({ ...validReset, error: true, msg: `${maxLength}자 초과되었습니다.` });
    } else {
      setValid({ ...validReset });
      setValue(value);
    }
  };

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = evt;

    checkValidMax(value);
  };

  const clickDelete = useInputDelete(refInput, setValue);

  return { refInput, value, onChange, clickDelete };
};

export default useInputText;
