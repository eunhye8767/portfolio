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
  SelectOptionCheckbox
} from "./style";
import useInputRef from "playground/hooks/useInputRef";

const Select = () => {
  const selectRef = useInputRef();

  const [isShow, setIsShow] = useState(false);

  const clickCloseSelect = (evt: MouseEvent) => {
    const { target } = evt;
    const elem = target as HTMLElement;

    if (!isShow && selectRef.current && !selectRef.current.contains(elem)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", clickCloseSelect);
    return () => {
      window.removeEventListener("click", clickCloseSelect);
    };
  }, []);

  return (
    <SelectSection ref={selectRef} $show={isShow}>
      <SelectLabelGroup>
        <button
          type="button"
          className="label"
          onClick={() => setIsShow((prev) => !prev)}
        >
          <span className="label__text">옵션을 선택하세요</span>
          <span className="label__ico">
            <GoChevronDown />
          </span>
        </button>
      </SelectLabelGroup>
      <SelectOptionGroup>
        <SelectOptionList>
          <li>
            <SelectOptionButton type="button">옵션</SelectOptionButton>
          </li>
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
