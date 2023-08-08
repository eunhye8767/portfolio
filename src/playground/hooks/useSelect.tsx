import { useEffect, useState } from "react";
import useOutside from "playground/hooks/useOutside";

import { SelectProps } from "playground/playground";

interface Props extends SelectProps {
  optionMax: number
}

const useSelect = ({ initialLabel, buttonOption, optionMax }: Props) => {
  const [isExpand, setIsExpand] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [label, setLabel] = useState(initialLabel);
  const [checkLabel, setCheckLabel] = useState(label);
  const [currIdx, setCurrIdx] = useState<number | null>(null);

  const refSelect = useOutside({ setIsExpand });

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

  const onKeyUp = (evt:React.KeyboardEvent<HTMLElement>) => {
    const { code } = evt;
    evt.preventDefault();
    
    if (code === "ArrowDown") {
      console.log("ArrowDown", buttonOption[0]);
      setIsExpand(true);
      
    } else if (code === "ArrowUp") {
      setIsExpand(true);
      console.log("ArrowUp");
    }
    
    const test = refSelect.current!.children[1].children[0].children[0].children[0];
    console.dir(test);
    
    

  };

  useEffect(() => {
    console.log(optionMax);
    
  }, [optionMax])

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
  };
};

export default useSelect;
