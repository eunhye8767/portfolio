import { useRef } from "react";

const useInputRef = () => {
  const refInput = useRef<HTMLInputElement | null>(null);
  return refInput;
};

export default useInputRef;
