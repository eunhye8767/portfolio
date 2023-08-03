import { useEffect, useState } from "react";
import useSelectRef from "playground/hooks/useSelectRef";

import { SelectProps } from "playground/playground";

const useSelect = ({
  initialLabel,
  buttonOption,
  checkboxOption,
}: SelectProps) => {
  const refSelect = useSelectRef();

  const [isExpand, setIsExpand] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [label, setLabel] = useState(initialLabel);

  const clickLabel = () => {
    setIsExpand((prev) => !prev);
  };

  const clickOptionButton = (idx: number) => {
    setLabel(buttonOption[idx]);
    setIsSelected(true);
    setIsExpand(false);

    if (isChecked) setIsChecked(false);
  };

  const checkedOptionCheckbox = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);
      setLabel(value);
      setIsSelected(true);
      setIsExpand(false);
      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
      setLabel(initialLabel);
      setIsSelected(false);
      setIsExpand(false);
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

  useEffect(() => {
    const arr:string[] = [];

    if (checkedList.length > 0) {
      checkedList.map((label) => arr.push(label));
      setLabel(arr.join(","))
    } else {
      setLabel(initialLabel);
    }
  }, [checkedList]);

  return {
    label,
    refSelect,
    isExpand,
    setIsExpand,
    isSelected,
    checkedList,
    clickLabel,
    clickOptionButton,
    changeOptionCheckbox,
  };
};

export default useSelect;
