import { useEffect, useState } from "react";
import useOutside from "playground/hooks/useOutside";

import { SelectProps } from "playground/playground";

const useSelect = ({ initialLabel, buttonOption }: SelectProps) => {
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
  };
};

export default useSelect;
