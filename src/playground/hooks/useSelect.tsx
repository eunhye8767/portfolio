import { useState } from "react";
import useSelectRef from "playground/hooks/useSelectRef";

import {SelectProps} from 'playground/playground'

const useSelect = ({
  initialLabel,
  buttonOption,
  checkboxOption,
}: SelectProps) => {
  const refSelect = useSelectRef();

  const [isExpand, setIsExpand] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
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

  const changeOptionCheckbox = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, checked },
    } = evt;
    if (checked) {
      setIsSelected(true);
      setIsChecked(true);
      setLabel(value);
    } else {
      setIsSelected(false);
      setIsChecked(false);
      setLabel(initialLabel);
    }

    setIsExpand(false);
  };

  return {
    label,
    refSelect,
    isExpand,
    setIsExpand,
    isSelected,
    isChecked,
    clickLabel,
    clickOptionButton,
    changeOptionCheckbox,
  };
};

export default useSelect;
