import { ChangeEvent, useEffect, useState } from "react";

const useInput = (initialValue:string, validator:Function) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event:ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  useEffect(() => {
    console.log(value);
    
  }, [value])

  return { value, onChange };
}

export default useInput