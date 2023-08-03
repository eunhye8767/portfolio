/**
 * https://react-icons.github.io/react-icons
 */

import { useState, useEffect } from "react";
import useSelect from "playground/hooks/useSelect";
import useWindowClose from "playground/hooks/useWindowClose";

import { GoChevronDown } from "react-icons/go";
import {
  SelectSection,
  SelectLabelGroup,
  SelectOptionGroup,
  SelectOptionList,
  SelectOptionButton,
  SelectOptionCheckbox,
} from "./style";

import { SelectProps } from "playground/playground";
interface SelectAddProps extends SelectProps {
  selectType: string;
}

const Select = ({
  initialLabel,
  selectType,
  buttonOption,
  checkboxOption,
}: SelectAddProps) => {
  const {
    label,
    refSelect,
    isExpand,
    setIsExpand,
    isSelected,
    isChecked,
    clickLabel,
    clickOptionButton,
    changeOptionCheckbox,
  } = useSelect({ initialLabel, buttonOption, checkboxOption });

  const clickClose = useWindowClose({ refSelect, isExpand, setIsExpand });

  useEffect(() => {
    window.addEventListener("click", clickClose);
    return () => {
      window.removeEventListener("click", clickClose);
    };
  }, []);

  return (
    <SelectSection ref={refSelect} $expand={isExpand} $selected={isSelected}>
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
          {selectType === "button" &&
            buttonOption.map((opt, idx) => (
              <li key={opt + idx}>
                <SelectOptionButton
                  type="button"
                  onClick={() => clickOptionButton(idx)}
                >
                  <span className="option__text">{opt}</span>
                </SelectOptionButton>
              </li>
            ))}

          {selectType === "checkbox" &&
            checkboxOption.map((opt) => (
              <li key={opt.id}>
                <SelectOptionCheckbox>
                  <input
                    type="checkbox"
                    name={`ck${opt.id}`}
                    id={`ck${opt.id}`}
                    checked={opt.checked}
                    onChange={changeOptionCheckbox}
                    value={opt.value}
                  />
                  <label htmlFor={`ck${opt.id}`}>
                    <span className="checkbox__ico"></span>
                    <span className="checkbox__text">{opt.value}</span>
                  </label>
                </SelectOptionCheckbox>
              </li>
            ))}
        </SelectOptionList>
      </SelectOptionGroup>
    </SelectSection>
  );
};

Select.defaultProps = {
  buttonOption: [""],
  checkboxOption: [""],
};
export default Select;
