import { useState, useEffect } from "react";

import useInputRef from "playground/hooks/useInputRef";
import useInputDelete from "playground/hooks/useInputDelete";

const useInputEmail = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const refInput = useInputRef();
  const clickDelete = useInputDelete(refInput, setValue);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = evt;

    setValue(value);
  };

  return {
    refInput,
    value,
    onChange,
    clickDelete,
  };
};

export default useInputEmail;
