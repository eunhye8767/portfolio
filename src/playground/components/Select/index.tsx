/**
 * https://react-icons.github.io/react-icons
 */

import { useEffect, useRef } from "react";
import useSelect from "playground/hooks/useSelect";

import { GoChevronDown } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import {
  SelectSection,
  SelectLabelGroup,
  SelectOptionGroup,
  SelectOptionList,
  SelectOptionButton,
  SelectOptionCheckbox,
  SelectCheckedTagGroup,
  SelectCheckedTagList,
  SelectCheckedTagItem,
} from "./style";

import { SelectProps } from "playground/playground";

interface SelectAddProps extends SelectProps {
  selectType: string;
  checkboxOption: string[];
}

const Select = ({
  initialLabel,
  selectType,
  buttonOption,
  checkboxOption,
}: SelectAddProps) => {
  const optionMax = buttonOption.length || checkboxOption.length;
  const {
    kbdIdxCurr,
    currIdx,
    label,
    checkLabel,
    refSelect,
    isExpand,
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
  } = useSelect({ initialLabel, buttonOption, optionMax });

  useEffect(() => {
    checkedList.length === 0 ? setIsSelected(false) : setIsSelected(true);
  }, [checkedList]);

  return (
    <>
      <SelectSection
        ref={refSelect}
        className={checkLabel}
        $expand={isExpand}
        $selected={isSelected}
      >
        <SelectLabelGroup>
          <button
            type="button"
            className="label"
            onClick={clickLabel}
            onKeyUp={onKeyUp}
          >
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
                    ref={(element) => {
                      refOptButton.current[idx] = element;
                    }}
                    type="button"
                    className={`${(currIdx === idx || kbdIdxCurr === idx) ? "is-selected" : ""}`}
                    onClick={() => clickOptionButton(idx)}
                  >
                    <span className="option__text">{opt}</span>
                    {(currIdx === idx || kbdIdxCurr === idx) && (
                      <span className="option__checked">
                        <BsCheck />
                      </span>
                    )}
                  </SelectOptionButton>
                </li>
              ))}

            {selectType === "checkbox" &&
              checkboxOption.map((item, idx) => (
                <li key={idx}>
                  <SelectOptionCheckbox>
                    <input
                      type="checkbox"
                      name={`ck${idx}`}
                      id={`ck${idx}`}
                      checked={checkedList.includes(item)}
                      onChange={(e) => changeOptionCheckbox(e, item)}
                      value={item}
                    />
                    <label htmlFor={`ck${idx}`}>
                      <span className="checkbox__ico"></span>
                      <span className="checkbox__text">{item}</span>
                    </label>
                  </SelectOptionCheckbox>
                </li>
              ))}
          </SelectOptionList>
        </SelectOptionGroup>
        {checkedList.length > 0 && (
          <SelectCheckedTagGroup>
            <SelectCheckedTagList>
              {checkedList.map((item, idx) => {
                return (
                  <li key={idx}>
                    <SelectCheckedTagItem>
                      {item}
                      <button
                        type="button"
                        onClick={() => checkedOptionCheckbox(item, false)}
                      >
                        <span className="screenOut">삭제</span>
                        <AiFillCloseCircle />
                      </button>
                    </SelectCheckedTagItem>
                  </li>
                );
              })}
            </SelectCheckedTagList>
          </SelectCheckedTagGroup>
        )}
      </SelectSection>
    </>
  );
};

Select.defaultProps = {
  buttonOption: [""],
  checkboxOption: [""],
};
export default Select;
