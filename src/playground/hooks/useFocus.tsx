import { useState } from "react";

const useFocus = () => {
  const [focus, setFocus] = useState(false);

  // focus
  const onFocus = () => setFocus(true);

  // focus out
  const onBlur = () => setFocus(false);

  return { focus, onFocus, onBlur };
};

export default useFocus;
