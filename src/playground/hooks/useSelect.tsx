import { useEffect, useState, useRef } from "react";
import useOutside from "playground/hooks/useOutside";

import { SelectProps } from "playground/playground";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

interface Props extends SelectProps {
  optionMax: number;
}

const useSelect = ({ initialLabel, buttonOption, optionMax }: Props) => {
  const [isExpand, setIsExpand] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [label, setLabel] = useState(initialLabel);
  const [checkLabel, setCheckLabel] = useState(label);
  const [currIdx, setCurrIdx] = useState<number | null>(null);
  const [kbdIdxOld, setKbdIdxOld] = useState(0);
  const [kbdIdxCurr, setKbdIdxCurr] = useState(0);

  const refSelect = useOutside({ setIsExpand });
  const refOptButton = useRef<null[] | HTMLButtonElement[]>([]);

  const clickLabel = () => {
    setIsExpand((prev) => !prev);
  };

  const clickOptionButton = (idx: number) => {
    setLabel(buttonOption[idx]);
    setCurrIdx(idx);
    setIsSelected(true);
    setIsExpand(false);
  };

  const checkedOptionCheckbox = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);
      setLabel(value);
      setIsSelected(true);
      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
      setLabel(initialLabel);
      setIsSelected(false);
      return;
    }

    return;
  };

  const changeOptionCheckbox = (
    evt: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setIsChecked(!isChecked);
    checkedOptionCheckbox(value, evt.target.checked);
  };

  const checkedLabelClass = () => {
    isSelected ? setCheckLabel("is-label") : setCheckLabel("is-label-no");
  };

  const focusLabel = () => {
    setIsExpand(true);
  };

  const focusOutLabel = () => {
    setIsExpand(false);
  };

  const onKeyUp = (evt: React.KeyboardEvent<HTMLElement>) => {
    const { code } = evt;
    evt.preventDefault();

    setIsExpand(true);
    // refOptButton.current[kbdIdxCurr]!.focus();
    


    // refOptButton.current.map((opt, i) => {
    //   if (kbdIdxCurr === i) console.log(opt)
    //   return <>1</> 
    // })
    

    // if (code === "ArrowDown") {
    //   setCurrIdx(prev => prev === null ? prev = 0 : prev +1 )
    //   // if (kbdIdxCurr < optionMax) {
    //   //   setKbdIdxOld(kbdIdxCurr)
    //   //   setKbdIdxCurr(prev => prev + 1)
    //   // }
      
    // } else if (code === "ArrowUp") {
    //   // if (kbdIdxCurr < 1) {
    //   //   setKbdIdxOld(kbdIdxCurr)
    //   //   setKbdIdxCurr(prev => prev - 1)
    //   // }
    // }

    if (code === "ArrowDown") {
    setKbdIdxCurr(prev => prev + 1)
    }
    
    if (code === "ArrowUp") {
      setKbdIdxCurr(prev => prev - 1)
    }

    // const test = refSelect.current!.children[1].children[0].children[0].children[0];
    // console.log(test, refSelect.current);

    // console.log(refOptButton.current[currIdx].focus());
  };

  useEffect(() => {
    console.log(kbdIdxCurr);
    
  }, [kbdIdxCurr])

  useEffect(() => {
    checkedLabelClass();
  }, [label]);

  useEffect(() => {
    const arr: string[] = [];

    if (checkedList.length > 0) {
      checkedList.map((label) => arr.push(label));
      setLabel(arr.join(", "));
    } else {
      setLabel(initialLabel);
    }
  }, [checkedList]);

  return {
    kbdIdxCurr,
    currIdx,
    label,
    checkLabel,
    refSelect,
    isExpand,
    setIsExpand,
    isSelected,
    checkedList,
    clickLabel,
    clickOptionButton,
    changeOptionCheckbox,
    checkedOptionCheckbox,
    setIsSelected,
    focusLabel,
    focusOutLabel,
    onKeyUp,
    refOptButton,
  };
};

export default useSelect;
