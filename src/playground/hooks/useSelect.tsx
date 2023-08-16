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

  const [kbdInit, setKbdInit] = useState(true);
  const [kbdIdxCurr, setKbdIdxCurr] = useState(-1);

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

    if (code === "ArrowDown" || code === "ArrowUp") {
      setIsExpand(true);
    }

    switch (code) {
      case "ArrowDown":
        if (kbdIdxCurr === -1) setKbdIdxCurr(0);

        if (kbdInit) {
          setKbdIdxCurr(0);
          setKbdInit(false);
        } else {
          kbdIdxCurr < optionMax - 1
            ? setKbdIdxCurr((prev) => prev + 1)
            : setKbdIdxCurr(optionMax - 1);
        }
        break;

      case "ArrowUp":
        kbdIdxCurr >= 1 ? setKbdIdxCurr((prev) => prev - 1) : setKbdIdxCurr(0);
        break;

      case "Enter":
        if (kbdIdxCurr >= 0) setLabel(buttonOption[kbdIdxCurr]);
        setIsSelected(true);
        break;

      case "NumpadEnter":
        if (kbdIdxCurr >= 0) setLabel(buttonOption[kbdIdxCurr]);
        setIsSelected(true);
        break;

      // case "Tab":
      //   if (kbdIdxCurr === -1) return;
        
      //   break;

      default:
        break;
    }
  };

  useEffect(() => {
    setCurrIdx(kbdIdxCurr);
  }, [kbdIdxCurr]);

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
