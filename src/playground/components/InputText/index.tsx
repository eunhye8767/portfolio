import useInput from "playground/hooks/useInput";

import { InputTextGroup } from "./style";

const InputText = () => {
  const maxLen = (value: string) => value.length < 10;
  // @포함되어 있지 않아야 한다.
  // const checkIncludes = (value) => !value.includes("@");

  const text = useInput("Mr.", maxLen);

  return (
    <InputTextGroup>
      <input type="text" placeholder="text..." {...text} />
    </InputTextGroup>
  );
};

export default InputText;
