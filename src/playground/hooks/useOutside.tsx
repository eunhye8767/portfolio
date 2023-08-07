import { useRef, useEffect } from "react";

interface Props {
  setIsExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

const useOutside = ({ setIsExpand }: Props) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const { target } = event;
      const elem = target as HTMLElement;

      if (ref.current && !ref.current.contains(elem)) {
        setIsExpand(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return ref;
};

export default useOutside;
