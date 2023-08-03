import { useRef } from "react";

const useSelectRef = () => {
  const refSelect = useRef<HTMLSelectElement | null>(null);
  return refSelect;
};

export default useSelectRef;
