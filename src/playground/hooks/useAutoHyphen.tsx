import { useEffect, useState } from "react";
import useInputRef from "playground/hooks/useInputRef";
import useInputDelete from "playground/hooks/useInputDelete";

const useAutoHyphen = (initialValue: string) => {
  const [valueNum, setValueNum] = useState(initialValue);
 
  const refInput = useInputRef();
  const clickDelete = useInputDelete(refInput, setValueNum);

  // 휴대폰 번호 입력 함수
  const handleAutoHyphen = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (refInput.current) {
      const value = refInput.current.value.replace(/\D+/g, "");
      const numberLength = 11;
      let result = "";

      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 3:
            result += "-";
            break;
          case 7:
            result += "-";
            break;

          default:
            break;
        }

        result += value[i];
      }

      refInput.current.value = result;
      setValueNum(e.target.value);
    }
  };

  return { refInput, valueNum, handleAutoHyphen, clickDelete };
};

export default useAutoHyphen;
