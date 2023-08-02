/**
 * https://react-icons.github.io/react-icons
 */

import { useState, useEffect } from "react";

import { GoChevronDown } from "react-icons/go";
import {
  SelectSection,
  SelectLabelGroup,
  SelectOptionGroup,
  SelectOptionList,
  SelectOptionButton,
  SelectOptionCheckbox,
} from "./style";
import useInputRef from "playground/hooks/useInputRef";

const selectOption = ["버튼형 옵션 0 입니다", "버튼형 옵션 1 입니다? 하하"];

const Select = () => {
  const selectRef = useInputRef();

  const [isExpand, setIsExpand] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [label, setLabel] = useState("옵션을 선택하세요");

  const clickLabel = () => {
    setIsExpand((prev) => !prev);
  };

  const clickOptionButton = (idx: number) => {
    setLabel(selectOption[idx]);
    setIsSelected(true);
    setIsExpand(false);
  };

  const clickCloseSelect = (evt: MouseEvent) => {
    const { target } = evt;
    const elem = target as HTMLElement;

    if (!isExpand && selectRef.current && !selectRef.current.contains(elem)) {
      setIsExpand(false);
    }
  };

  useEffect(() => {
    console.log(isExpand);
    
  }, [isExpand])

  useEffect(() => {
    window.addEventListener("click", clickCloseSelect);
    return () => {
      window.removeEventListener("click", clickCloseSelect);
    };
  }, []);

  return (
    <SelectSection ref={selectRef} $expand={isExpand} $selected={isSelected}>
      <SelectLabelGroup>
        <button type="button" className="label" onClick={clickLabel}>
          <span className="label__text">{label}</span>
          <span className="label__ico">
            <GoChevronDown />
          </span>
        </button>
      </SelectLabelGroup>
      <SelectOptionGroup>
        <SelectOptionList>
          {selectOption.map((opt, idx) => (
            <li key={opt + idx}>
              <SelectOptionButton
                type="button"
                onClick={() => clickOptionButton(idx)}
              >
                <span className="option__text">{opt}</span>
              </SelectOptionButton>
            </li>
          ))}
          <li>
            <SelectOptionCheckbox>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">체크박스</label>
            </SelectOptionCheckbox>
          </li>
        </SelectOptionList>
      </SelectOptionGroup>
    </SelectSection>
  );
};

export default Select;
